import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard.js'

const cardImages = [
  {"src": "/img/angel.png", matched: false},
  {"src": "/img/bomb.png", matched: false},
  {"src": "/img/druid.png", matched: false},
  {"src": "/img/chest.png", matched: false},
  {"src": "/img/key.png", matched: false},
  {"src": "/img/fishing.png", matched: false}
  
]


function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)



  // shuffle cards
  const shuffleCards = () => {
    const shuffeledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffeledCards)
      setTurns(0)
  }
  const angelImage = cardImages.find(image => image.src === "/img/angel.png");

  if (angelImage) {
    angelImage.class = 'angel';
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo){
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 500) 
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
        <h1>Memory Matcher</h1>
        <button onClick={shuffleCards}>New Game</button>

        <div className='card-grid'>
          {cards.map(card => (
            < SingleCard 
              key={card.id}
              card={card} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
