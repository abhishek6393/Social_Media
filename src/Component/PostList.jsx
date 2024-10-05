import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListApi } from "../store/Post-list-store.jsx";
import Welcome from "./Welcome.jsx";
import Loading from "./Loading.jsx";

// import PostListApi from "./Component/Post-list-store.jsx"

export default function PostList(){

   let {PostList,AddInitialPosts}= useContext(PostListApi)

   let [fetching,setFetch]=useState(false)

   console.log(PostList);

   useEffect(HandleApi,[]);


   function HandleApi(){

    setFetch(true)

   fetch("https://dummyjson.com/posts").then((res)=>{

    res.json().then((data)=>{

        console.log(data.posts);

        AddInitialPosts(data.posts)

        setFetch(false)
        
    })
   })
    
   }
   




    return(

       <>

       {fetching && <Loading></Loading>}

       {


       !fetching && PostList.length===0 && <Welcome ></Welcome>}

       {!fetching && PostList.map((post)=>
            <Post key={post.id} Post={post}></Post>


        )
       }
       
       
       
        
       </>






        
    )
}