
import React, { Component } from "react";

import './App.css';
import Card from './component/Card'
import Wrapper from './component/Wrapper'
import Navbar from './component/Navbar'
import cards from './cards.json'

let bestScore=0;
let correctClicks=0;
let message=""
class App extends Component {

  state={

    cards,
    correctClicks,
    bestScore,
    message
  }



cardClicked= id=>{
  console.log("just clicked")
 const cards=this.state.cards
 const matchedCard= cards.filter(card=>
   card.id===id)
if (matchedCard[0].clicked===false && correctClicks<11){
  matchedCard[0].clicked=true
  correctClicks++
  message="Good Guess"
}
else if(matchedCard[0].clicked===false && correctClicks===11){
if (correctClicks>bestScore)
   bestScore=12
   correctClicks=0
   message="Nice Job you guessed it, let's do it again"

   for (let i = 0 ; i < cards.length ; i++){
    cards[i].clicked = false;
}
}

else if(matchedCard[0].clicked===true )
 {
  if (correctClicks>bestScore)
  bestScore=correctClicks

  correctClicks=0
  message="Wrong guess Try Again"
  for (let i = 0 ; i < cards.length ; i++){
   cards[i].clicked = false;
}
 }

 cards.sort(function(a, b){return 0.5 - Math.random()});

 this.setState({ cards});
 this.setState({correctClicks});
 this.setState({message});
 this.setState({bestScore});



}















  render(){

    return(
      <div>
      <Navbar score={this.state.correctClicks} bestScore={this.state.bestScore} message={this.state.message}/>
      <Wrapper>
        
        <div className="row">
      {this.state.cards.map(card=>(
        <Card handleClick={this.cardClicked} key={card.id} id={card.id} image={card.image}/>

      )

      )}
      
      </div>
      </Wrapper>
      </div>
    )



  }
}

export default App;
