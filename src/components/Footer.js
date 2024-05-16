import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer({ lngs, useTranslation}) {

  const { i18n } = useTranslation();

  return (
    <>
    
      <div className="footer">
        <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
            <p> &copy; 2024 pixelwizardstudiosllc </p>

            <div className="languageButton">
              {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                 {lngs[lng].nativeName}
                </button>
              ))}
          </div>

      </div>
    </>
  )
}

export default Footer
