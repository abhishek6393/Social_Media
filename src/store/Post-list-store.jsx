import { createContext, useReducer } from "react";

   


  export let PostListApi=createContext({

    PostList:[],
    addPost:()=>{},
    deletePost:()=>{}
   });


     function PostListreducer(currPostList,action){


       let newPost=currPostList;
       if(action.type==="delete"){

        newPost=currPostList.filter((post)=>post.id !==action.payload.PostId)

       
       

       }

       else if(action.type==="Add"){


        newPost=[action.payload,...currPostList]
       }

       else if(action.type==="AllPosts"){


        newPost=action.payload.Posts;
       }

       return newPost;
     };


   



   export  function PostListProvider({children}){

    let[PostList,DispatchPost]=useReducer(PostListreducer,[]);


    const addPost=(UserId,PostTittle,PostBody,PostReaction,PostTag)=>{


        DispatchPost({


            type:"Add",
            payload:{


                title:PostTittle,
                id:2,
                body:PostBody,
                reaction:PostReaction,
                userId:UserId,
                tags:PostTag


            }
        })


    }

    const deletePost=(PostId)=>{

       DispatchPost({

        type:"delete",
        payload:{

            PostId
        },
       })
        

        
    }

    const AddInitialPosts=(Posts)=>{

        DispatchPost({
 
         type:"AllPosts",
         payload:{
 
            Posts:Posts
         },
        })
         
 
         
     }


     








    return(


        <PostListApi.Provider value={{

            PostList:PostList,
            addPost:addPost,
            deletePost:deletePost,
            AddInitialPosts:AddInitialPosts
        }}>


            {children}
        </PostListApi.Provider>







    )
   }



//    let Post_List=[


//     {


//         title:"Going To Mumbai",
//         id:1,
//         body:"Hi friend I am going to mumbai for summmer vacation !!",
//         reaction:5,
//         userId:"user_5",
//         tags:["Mumbai","vocation"]

//     },
//     {


//         title:"A Share Holder",
//         id:2,
//         body:"Nowadyas there are so many share holders that are taking risk  for  making money!!",
//         reaction:15,
//         userId:"user_6",
//         tags:["Share","Market"]

//     }
//    ]


  