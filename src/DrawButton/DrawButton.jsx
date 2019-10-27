import React, { Component } from 'react';
import './DrawButton.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class DrawButton extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }


    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        )
    }

}


export default DrawButton