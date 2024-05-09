import React from 'react'
import redPotion from "../assets/red_potion.png";
import greenPotion from "../assets/green_potion.png";
import "../styles/Websites.css";

function Websites() {
  return (
    <>
        <div className="menu">
            <h1 className="menuTitle" >Websites</h1>
            <div className="websites">
            <a href="https://carlossenpai.github.io/MariosAutoService/" className="potions">
                    <img src={redPotion} alt="Red potion to Mario Website" id="red_potion" />
            </a>
    
            <a href="https://carlossenpai.github.io/LlanteriaLuigi/" className="potions">
                    <img src={greenPotion}  alt="Green potion to Luigi Website" id="green_potion" />
                </a>
            </div>
      
        </div>

    </>
  )
}

export default Websites