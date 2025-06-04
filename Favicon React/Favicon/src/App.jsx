import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
     <h1 className="text-3xl font-bold py-5 mx-[50px]">Favicon Generators</h1>
    <div className="flex flex-row gap-3 mx-[50px]">
        
        <div className="h-[450px] w-[450px] rounded shadow-2xs shadow-gray-400 ">
            <img className="rounded-tl-lg rounded-tr-lg" src="https://favicon.io/assets/static/index-generate-from-image.2f2d982.64f9de6cc7d27508623dc457c89a3e34.png"/>
            <h1 className="text-3xl font-bold p-[15px] ">Image</h1>
            <p className="px-[15px]">If you already have an image or logo that you want to use for your favicon then use this tool to convert your image to the proper favicon format.</p>
        </div>
       
        <div className="h-[450px] w-[450px] rounded shadow-2xs shadow-gray-400">
            <img className="rounded-tl-lg rounded-tr-lg" src="https://favicon.io/assets/static/index-generate-from-text.2f2d982.d4c48b1066e10a60251a27a9aa3387be.png"/>
            <h1 className="text-3xl font-bold p-[15px]">Text</h1>
            <p className="px-[15px]">If you don't have a logo or image for your website and want to generate a favicon from scratch then use this tool to generate your favicon.</p>
        </div>
        
        <div className="h-[450px] w-[450px] rounded shadow-2xs shadow-gray-400">
            <img className="rounded-tl-lg rounded-tr-lg" src="https://favicon.io/assets/static/index-generate-from-emoji.2f2d982.a63b2d23076ae3098ef8b64b550e2753.png"/>
            <h1 className="text-3xl font-bold p-[15px]">Emoji</h1>
            <p className="px-[15px]">Want to use an emoji for your favicon? Choose from a list of hundreds of emojis to generate a favicon for your website.</p>
        </div>
    </div>
    </>
  )
}

export default App
