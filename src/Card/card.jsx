import React from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">               
                
                <div className="question">
                    Team member?

                    


                </div>


                <div className="details-wrapper">
                    <div className="priorities">
                        {/* <ul>
                            <li>{props.priorities}</li>
                        </ul> */}

                        {/* {props.priorities} */}
                    
                        <div className="priorities-title">Priorities</div>   

                        {props.priorities.map(function(d, idx){
                        return (<li key={idx}>{d.name}</li>)
                        })}
                    </div>

                    <div className="concerns">  
                        <div className="concerns-title">Concerns and Challenges</div>   

                        {props.concerns.map(function(d, idx){
                        return (<li key={idx}>{d.name}</li>)
                        })}          
                    </div>  
                </div>

            </div>
            <div className="back">             
                <div className="role">{props.role}
                
                
                </div>    

      
            </div>

        </div>
    </div>
)

export  default Card