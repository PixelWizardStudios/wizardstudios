import React from 'react'
import { useTranslation } from 'react-i18next';
import "../styles/About.css";

function About() {

  const { t } = useTranslation();

  return (
    <div className="about">
        <div className="aboutTop">
            <div>
                <h1>{t('description.about1')} </h1>
                <p>{t('description.about2')} </p>
            </div>

        </div>
      
    </div>
  )
}

export default About
