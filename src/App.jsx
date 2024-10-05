
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';
import CreatePost from './Component/CreatePost';
import PostList from './Component/PostList';
import { useState } from 'react';
import {PostListProvider} from './store/Post-list-store';
import { Outlet } from 'react-router-dom';

function App() {


  let[selectPost,setSelectPost]=useState("Home");
  

  return (


    <PostListProvider>
   <div className='form'>
  <div className="App-container">

  <Sidebar selectPost={selectPost} setSelectPost={setSelectPost}></Sidebar>
   <div className="container">

   <Header></Header>

   {/* {selectPost==="Home"?<PostList></PostList>: <CreatePost></CreatePost>} */}

   <Outlet> </Outlet>

  

   
   <Footer></Footer>
   </div>
  </div>




   </div>

   </PostListProvider>
  )
}

export default App
