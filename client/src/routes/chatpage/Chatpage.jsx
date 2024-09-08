import React, { useEffect, useRef } from "react";
import "./chatpage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";

const Chatpage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const path = useLocation().pathname;
  const chatId = path.split("/").pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["chats", chatId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        credentials: "include",
        mode: "no-cors",
      }).then((res) => res.json()),
  });

  return (
    <div className="ChatPage">
      <div className="wrapper">
        <div className="chat">
          <div>
            <div className="message"></div>
            {isPending
              ? "Loading..."
              : error
              ? "Somthing went wrong !"
              : data?.history?.map((message, i) => (
                  <div className="message user" key={i}>
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                ))}
          </div>
          <NewPrompt />
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};
export default Chatpage;
