

import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListApi } from "../store/Post-list-store";

export default function Post({Post}){


  let{deletePost}=useContext(PostListApi)



    return(

        <div className="card card-post" >
        <img src="https://previews.123rf.com/images/vulkanov/vulkanov1612/vulkanov161200001/69707878-silhouette-of-spruce-branches-against-the-sky-the-dawn.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{Post.title}

          <span  key={Post.id}className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {Post.reaction}
   
  </span>
          </h5>
          <p className="card-text">{Post.body}.</p>
        {


        Post.tags.map((tag)=>
          <span  key={tag}   className="badge text-bg-primary hastag">{tag}</span>
        )
        }

<MdDelete  onClick={()=>deletePost(Post.id)}/>
        </div>
      </div>



    )
}