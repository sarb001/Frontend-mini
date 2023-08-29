import { useState } from 'react';
import questions from './Components/Questions';

import '../src/styles/App.css';
import Accordian from './Components/Accordian';

function App() {

  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center',fontSize:'25px'}} >
          
             {questions.map((item) => {
              return (
                  <Accordian  key = {item.id} title = {item.title} content = {item.info} />
               )
             })}          

        </div>
    </>
  )
}

export default App
