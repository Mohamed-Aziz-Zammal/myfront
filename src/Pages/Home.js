import React from 'react'

import './Home.css'

function Home() {
  
  return (
    <>
    
    
    

    <div className='home'>
        <h1>DyslexiAid</h1>
        <div className='dyslexie'>
          <div className='desc'>
            <p>
            La dyslexie est un trouble d'apprentissage courant qui impacte la lecture, l'orthographe et l'écriture. Les personnes dyslexiques peuvent avoir des difficultés à reconnaître les lettres, à associer les sons aux symboles écrits et à lire avec fluidité. Ce trouble n'est pas lié à l'intelligence. Il est souvent diagnostiqué dès le début de la scolarité. La cause exacte de la dyslexie n'est pas totalement comprise, mais des facteurs génétiques et environnementaux sont impliqués. Une prise en charge adaptée, avec des méthodes pédagogiques spécifiques, peut aider les personnes dyslexiques à améliorer leurs compétences en lecture et en écriture. Avec un soutien approprié, de nombreuses personnes dyslexiques peuvent réussir académiquement et développer leur estime de soi
            </p>
          </div>
          <div className='image'>
          <img  src="https://4.bp.blogspot.com/_TRcQCuP2b5A/TGIc0FLna3I/AAAAAAAAK5E/nC_BQxn1vfs/s1600/rearrange+dyslexia+web.jpg" alt="dyslexie" />
          </div>
        </div>
        <div className='us' > 
        <p>
        Notre projet est le fruit de mon parcours académique, mais surtout de mon expérience personnelle en tant que dyslexique. 
        Ce site est né de mon désir d'aider les personnes atteintes de dyslexie, tout comme moi. Mon objectif est également de sensibiliser et d'améliorer la compréhension de la dyslexie au sein de la société. Ensemble, nous pouvons créer un environnement plus inclusif et accessible pour tous.
        </p>
         </div>
        <div className='personnes'>
          <div className='card'>card</div>
          <div className='card'>card</div>
          <div className='card'>card</div>
        </div>
        <div className='contact'>contact</div>
    </div>



   
    </>
  )
}

export default Home