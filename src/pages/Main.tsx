import { getDocs,collection } from "firebase/firestore";
import { db } from '../config/firebase'
import { useState,useEffect } from "react"
import { Post } from '../pages/main/Post'
export interface Post {
    id:string;
    userId : string;
    title: string;
    username:string;
    description:string;
}
export const Main = ()=>{
    const [postsList,setPostslist] = useState<Post[] | null>(null);
    const postsRef = collection(db,"posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostslist(data.docs.map((doc,key) => ({
            ...doc.data(), id:doc.id
        })) as Post[]
        );
    };
    useEffect(() => {
        getPosts();
    },[]);

    
    return(
        <div> {postsList?.map((post) => 
            (
            <Post post={post}/>
        ) 
        )} </div>
    )
}