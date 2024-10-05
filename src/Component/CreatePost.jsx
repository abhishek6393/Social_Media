import { useContext, useRef } from "react";
import { PostListApi } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";

export default function CreatePost(){


  let{addPost}=useContext(PostListApi)

  let navigate=useNavigate();



  let UserIdElement=useRef();
  let PostTittleElement=useRef();
  let PostBodyElement=useRef();
  let PostReactionElement=useRef();
  let PostTagElement=useRef();


  function HandleClick(event){

    event.preventDefault();


    let UserId=UserIdElement.current.value;
    let PostTittle=PostTittleElement.current.value;
    let PostBody=PostBodyElement.current.value;
    let PostReaction=PostReactionElement.current.value;
    let PostTag=PostTagElement.current.value.split(" ");




    UserIdElement.current.value="";
    PostTittleElement.current.value="";
    PostBodyElement.current.value="";
    PostReactionElement.current.value="";
    PostTagElement.current.value="";

    addPost(UserId,PostTittle,PostBody,PostReaction,PostTag);

    navigate("/");

  











  }


    return(


      <form  className="create-post" >

<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label"> Enter Your User ID </label>
  <input  ref={UserIdElement}type="text" className="form-control" id="formGroupExampleInput" placeholder="Please Enter Your ID"/>
</div>



<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Post Tittle</label>
  <input  ref={PostTittleElement} type="text" className="form-control" id="formGroupExampleInput" placeholder="Please Write a Tittle for Your Post"/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Post Body</label>
  <textarea  ref={PostBodyElement} rows={3} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Please Write a short Description"/>
</div>

<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Post Tag</label>
  <input ref={PostTagElement}  type="text" className="form-control" id="formGroupExampleInput2" placeholder="Write Your Tag"/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Post Reactions</label>
  <input ref={PostReactionElement} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Reactions on Your Posts"/>
</div>


<button onClick={HandleClick}>Post</button>


</form>

    )


}