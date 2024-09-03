import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/homepage/HomePage';
import DashboardPage from '../src/routes/dashboardpage/DashboardPage';
import Chatpage from './routes/chatpage/Chatpage';
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import { SignIn, SignUp } from '@clerk/clerk-react';
import SignInPage from './routes/signInPage/SignInPage';
import SignUpPage from './routes/signUpPage/SignUpPage';
import ChatList from './components/chatList/ChatList';

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",element:<HomePage/>,
      },
      {
        path:"/sign-in/*",element:<SignInPage/>,
      },{
        path:"/sign-up/*",element:<SignUpPage/>,
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage/>,
          },
          {
            path:"/dashboard/chats/:id",
            element:<Chatpage/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
