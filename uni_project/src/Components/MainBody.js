import React from "react";
import { Button } from "./Button";
import './MainBody.css'
import universityImage from '../Images/university.jpeg';

function MainBody(){
    return(
        <div className= 'main-container'>
            <img src={universityImage} alt="University" className='main-image' />

            <h1>Welcome to your University Page!</h1>
            <div className="main-btns">
                <Button className = 'btns' buttonStyle= 'btn--outline'
                buttonSize= 'btn--large'
             > 
                       GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}   
       
export default MainBody;