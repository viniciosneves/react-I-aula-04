import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './paginas/Home/Home';
import Fotografia from './paginas/Fotografia/Fotografia';
import Contato from './paginas/Contato/Contato';
import Sobre from  './paginas/Sobre/Sobre'
import Blog from './paginas/Blog/Blog.jsx';
import Post from './paginas/Blog/Post.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "fotografia",
        element: <Fotografia />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/post/:id",
        element: <Post />
      },
      {
        path: 'contato',
        element: <Contato />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
