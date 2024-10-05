import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CreatePost from './Component/CreatePost.jsx'
import PostList from './Component/PostList.jsx'


const router=createBrowserRouter([


  {path:"/",element:    <App />,

    children:[

 
      {

        path:"/", element: <PostList></PostList>},

       {path:"/create-post" , element: <CreatePost></CreatePost>}
      
    ]


    


  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>



<RouterProvider router={router}/>
  </StrictMode>,
)
