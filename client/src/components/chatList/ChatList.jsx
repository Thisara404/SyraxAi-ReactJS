import React from 'react'
import "./chatList.css";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['userchats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`,{
        credentials:"include",
        mode: 'no-cors',
      }).then((res) =>
        res.json(),
      ),
  });

  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore Lama AI</Link>
        <Link to="/">Contact</Link>
      <hr />
      <span className='title'>RECENT CHATS</span>
      <div className="list">

      {isPending 
        ? "Loading..." 
        : error ? "Somthing Went Wrong !" 
        : data?.map((chat)=>(
          <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
          {chat.title || "Untitled Chat"}
          </Link>
        ))
      }
          
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
            <span>Upgrade to Syrax AI Pro</span>
            <span>Get unlimited access to all features</span>
      </div>
      </div>
    </div>
  )
}

export default ChatList
