import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            home1: "Our Mission",
            home2: "At Pixel Wizard Studios, we wield our magical expertise to grant small and local businesses the online presence they deserve. With our wizardly guidance, we illuminate the path to digital success, ensuring every business thrives in the enchanted realm of cyberspace. Join us, and let's embark on a magical journey to elevate your business to new heights!",
            home3: "Services",
            home4: "Within the digital tapestry, I weave static websites from the very threads of code, each meticulously crafted from scratch. With an unwavering dedication to quality and precision, I bring forth digital wonders that stand as testaments to the artistry of web development.",
            website1: "Websites",
            about1: "About Us",
            about2: "I am but a humble wizard of the digital realm, having honed my skills through the ancient art of coding bootcamps. With a heart brimming with community spirit and a desire to aid others in their quests for greatness, I stand ready to infuse the digital ether with my magical prowess. Together, let us embark on a journey of enchantment and creation, where dreams become reality through the wizardry of code."
          }
        }
      },
      es: {
        translation: {
          description: {
            home1: "Nuestra Misión",
            home2: "En Pixel Wizard Studios, nuestra experiencia mágica otorga a las pequeñas y locales empresas la presencia en línea que merecen. Con nuestra guía mágica, iluminamos el camino hacia el éxito digital, asegurando que cada negocio prospere en el reino encantado del ciberespacio. Únase a nosotros y embarquémonos en un viaje mágico para elevar su negocio a nuevas alturas.",
            home3: "Servicios",
            home4: "Dentro del tapiz digital, tejo sitios web estáticos a partir de los propios hilos del código, cada uno meticulosamente elaborado desde cero. Con una dedicación inquebrantable a la calidad y la precisión, traigo maravillas digitales que se erigen como testimonios del arte del desarrollo web.",
            website1: "Páginas Web",
            about1: "Sobre Nosotros",
            about2: "Soy pero un humilde hechicero en el reino digital, habiendo perfeccionado mis habilidades a través del antiguo arte de los bootcamps de codificación. Con un corazón lleno de espíritu comunitario y un deseo de ayudar a otros en sus búsquedas de grandeza, estoy listo para infundir el éter digital con mi destreza mágica. Juntos, emprendamos un viaje de encantamiento y creación, donde los sueños se convierten en realidad a través de la hechicería del código."
          }
        }
      }
    }
  });

export default i18n;
