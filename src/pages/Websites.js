import React from 'react'
import redPotion from "../assets/redPotiongif.gif";
import greenPotion from "../assets/greenPotiongif.gif";
import purplePotion from "../assets/purplePotiongif.gif";
import { useTranslation } from 'react-i18next';
import "../styles/Websites.css";

function Websites( )  {

  const { t } = useTranslation();

  return (
    <>
        <div className="menu">
            <h1 className="menuTitle" > {t('description.website1')} </h1>
            <div className="websites">
              <a href="https://mariosautoservice.netlify.app/" className="potions">
                    <img src={redPotion} alt="Red potion to Mario Website" id="red_potion" />
              </a>
    
              <a href="https://llanterialuigi.netlify.app/" className="potions">
                    <img src={greenPotion}  alt="Green potion to Luigi Website" id="green_potion" />
            </a>
              <a href="https://elcompawaluigi.netlify.app/">
                <img src={purplePotion} alt="Purple potion to Waluigi Website" id="purple_potion" />
              </a>

              </div>

      
        </div>

    </>
  )
}

export default Websites