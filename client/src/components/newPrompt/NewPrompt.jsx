import React, { useEffect, useRef, useState } from 'react'
import "./newPrompt.css"
import Upload from '../upload/Upload'
import { IKImage } from 'imagekitio-react'
import model from "../../lib/Gemini"
import Markdown from "react-markdown"
import {useAuth} from "@clerk/clerk-react"

const NewPrompt = () => {
  const [question,setQuestion] = useState("")
  const [answer,setaAnswer] = useState("")

  const [img,setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData:{},

  });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hi my name is Bob" }],
      },
      {
        role: "model",
        parts: [{ text: "Hi Bob!" }],
      },
    ],
    generationConfig:{
      // maxOutputTokens:100,
    }
  });
  

const endRef = useRef();

useEffect(()=>{
  endRef.current.scrollIntoView({behavior:"smooth"});
},[question,answer,img.dbData]);

  const add = async(text) =>{
    setQuestion(text)

    const result = await chat.sendMessageStream(
      Object.entries(img.aiData).length ? [img.aiData,text] : [text]
    );
    // Print text as it comes in.
    let accumulatedText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      accumulatedText += chunkText;
      setaAnswer(accumulatedText);

    }
    // const response = await result.response;
    setImg({isLoading:false,error:"",dbData:{},aiData:{}});
  };
  const {userId} = useAuth();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    // add(text)
    await fetch("http://localhost:3000/api/chats",
      {
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({text:text}),
      });
  };

  return (
    <>
    {/* ADD NEW CHAT */}
    {img.isLoading && <div className=''>Loading...</div>}
    {img.dbData && img.dbData.filePath && (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img.dbData.filePath}
        width="380"
        transformation={[{width:380}]}
        loading="lazy"
        lqip={{ active: true }}
      />
    )}
    {question && <div className='message user'>{question}</div>}
    {answer && (
      <div className='message'>
      <Markdown>
        {answer}
      </Markdown>
    </div>
    )}

    <div className="endChat" ref={endRef}>
      <form className='newForm' onSubmit={handleSubmit}>
        <Upload setImg={setImg}/>
        <input id='file' type="file" multiple={false} hidden/>
        <input type="text" name='text' placeholder='Ask anything...'/>
        <button type="submit">
            <img src="/arrow.png" alt="" />
        </button>
      </form>
      </div>
    </>
  )
}

export default NewPrompt
