import React, { useEffect, useRef } from 'react'
import "./chatpage.css"
import NewPrompt from '../../components/newPrompt/NewPrompt';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const Chatpage = () => {
  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:"smooth"});
  },[]);

const path = useLocation().pathname

  // const { isPending, error, data } = useQuery({
  //   queryKey: ['userChats'],
  //   queryFn: () =>
  //     fetch(`${import.meta.env.VITE_API_URL}/api/chat/${}`,{
  //       credentials:"include"
  //     }).then((res) =>
  //       res.json(),
  //     ),
  // });

  return (
      <div className="ChatPage">
        <div className="wrapper">
          <div className="chat">
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            <div className="message">Test message from AI</div>
            <div className="message user">Test message from the user</div>
            
              <NewPrompt/>
            <div ref={endRef}/>
          </div>

        </div>

      </div>
  );
};
export default Chatpage
