import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Home.css";

function Home() {

  const { t } = useTranslation();

  return (
    <div>
        <div>
            <h1 className="statement_head">{t('description.home1')} </h1>
            <p className="statement">{t('description.home2')} </p>
        </div>
        <div>
            <h1 className="statement_head">{t('description.home3')} </h1>
            <p className="statement">{t('description.home4')} </p>
        </div>
      
    </div>
  )
}

export default Home
