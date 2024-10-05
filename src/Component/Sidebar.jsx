import { Link } from "react-router-dom";

export default function Sidebar({selectPost,setSelectPost}){

    function Hit(str){



      setSelectPost(str);
        
    }


    return(



        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4"></span>
    </a>
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>Hit("Home")} >
        <Link to="/" className={`nav-link `} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li onClick={()=>Hit("Create Post")}>
        <Link to="/create-post" className={`nav-link `} >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
    
    
  
    </ul>
    <hr/>
    <div className="dropdown">
     
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    )
}