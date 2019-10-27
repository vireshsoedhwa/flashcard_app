import React from 'react';
import './card.css';
import placeholder from './0.png';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">                
                <div className="question"><h1>Team member ?</h1>
                    <img src={placeholder} alt="unknown"/>
                </div>   
            </div>
            <div className="back">             
                <div className="role"><h1>{props.role}</h1>               
                    <img src={require(`./${props.id}.png`)} alt="known"/>
                </div>       
            </div>           

        </div>
       
       <div className="details">
                    <div className="details_wrapper">
                        <div className="priorities">
                            <div>
                                <div className="priorities-title"><b>Priorities</b></div> 
                                {props.priorities.map(function(d, idx){
                                return (<li key={idx}>{d.row}</li>)
                                })}
                            </div>
                        </div>

                        <div className="concerns">                          
                            <div>
                                <div className="concerns-title"><b>Concerns and Challenges</b></div>
                                {props.concerns.map(function(d, idx){
                                return (<li key={idx}>{d.row}</li>)
                                })}    
                            </div>
                        </div>  
                    </div>
        </div>

    </div>
)

export  default Card