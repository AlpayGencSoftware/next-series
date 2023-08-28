import getUser from "../../lib/getUser";
import getUserPosts from "../../lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUsers from "../../lib/getAllUsers";
import type { Metadata } from "next";
import React from "react";
import NotFound from "./not-found";

type Params = {
  params: {
    userId: string;
  };
};
type User = {
  id: string;
  name: string;
};

type Post = {
  // Post tipi için gerekli alanları burada tanımlayın.
  id: string;
  title: string;
  body:string;
};

export async function generateMetadata({params:{userId}}:Params){
    const userData:Promise<User>=getUser(userId);
    const user: User=await userData
    try {
      const user = await userData;
      if (!user || !user.name) return NotFound()
    } catch (error) {
      console.error("Error fetching user data:", error);
      return NotFound();
    }

    return {
      title: user.name,
      description:`This is the page of ${user.name}`
    }
}


export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  // const [user, userPosts]=await Promise.all([userData, userPostsData])

  const user = await userData;

  if (!user || !user.name) return NotFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
