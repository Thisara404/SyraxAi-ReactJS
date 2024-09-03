import React from 'react'
import "./dashboardPage.css"
import NewPrompt from '../../components/newPrompt/NewPrompt'

const dashboard = () => {

  

  return (
    <>
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>SyraxAI</h1>
        </div>
        <div className="options">

          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyse Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my Code</span>
          </div>

        </div>
        <div className="cen">
    <NewPrompt/>
    </div>
      </div>
      
    </div>

    </>


  )
}

export default dashboard
