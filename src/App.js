import React, { Component } from 'react';
import './App.css';
import Card from './Card/card'
import DrawButton from './DrawButton/DrawButton'
import CardData from './Data/cards.js'

class App extends Component{ 
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      // cards: [
      //   {id: 1, role: "rolename", priorities: "priorities", concerns:"concerns"},
      //   {id: 2, role: "rolename_2", priorities: "priorities_2", concerns:"concerns_2"}
      // ],
      // cards: [],
      currentCard: { }
    }

    

  }

  componentWillMount(){
    // const currentCards = this.state.cards;     
    const currentCards = CardData.cards;       
    // console.log(currentCards);
    
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards){

    var card = currentCards[Math.floor(Math.random() * currentCards.length)];    
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  

  render() {

    // const data =[{"name":"test1"},{"name":"test2"},{"name":"test3"}];

    // console.log(this.state.currentCard.priorities);

    const priorities = this.state.currentCard.priorities;
    const concerns = this.state.currentCard.concerns;

    // const imgid = '<img src="'+ this.state.currentCard.id + '.png" alt=""/>';

    const imgid = this.state.currentCard.id;

    // console.log(imgid);

    return(
      <div className="App">
        <div className="cardRow">
          <Card role={this.state.currentCard.role} 
                priorities={priorities}
                concerns={concerns}
                id={imgid}
                /> 
        
        </div>



        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
        
      </div>




      )
  }

}

export default App;