import React from "react"
type Post = {
    // Post tipi için gerekli alanları burada tanımlayın.
    id: string;
    title: string;
    body: string  
  };
type Props={
    promise:Promise<Post[]>
}

export default async function UserPosts({promise}:Props) {

    const posts= await promise
    const content= posts.map(post=>{
        return(
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <br/>
                </article>
            )
    })

    return content;
  
}