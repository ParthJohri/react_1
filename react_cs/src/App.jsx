import {useState} from 'react'
import './App.css'
import Cards from './Card.jsx'
function App() {
  const [cards,setCards] = useState([{title:"Card 1",content:"Content 1"}])
  function cardGenerator(){
    const obj = {
      title:`Card ${cards.length+1}`,
      content:`Content ${cards.length+1}`
    }
    setCards([...cards,obj]);
  }
  console.log("Render");
  return (
    <>
      <button onClick={cardGenerator}>Card Generator</button>
      <div className="card-container">
          {cards.map((card,index)=>{
              return <Cards key={index} title={card.title} content={card.content}/>
          })}
      </div>
    </>
  )
}

export default App
