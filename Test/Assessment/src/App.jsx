import React from 'react'
import './App.css'

function App() {

  return (
    <div className='mainWrapper'>
      <aside className='sidebar'>
        <div className='profile'>
          <img src="IMG20230104082232.jpg"/>
          <h2>Lilian Obi</h2>
          <p> I am an aspiring MERN stack Developer</p>
        </div>
      </aside>

      <main className='content'>
        <section id='about'>
          <h1>About Me</h1>
          <p> I am transitioning into tech from  a sales background and interested in building high quality user-centered websites using React and Modern Tools.</p>
        </section>

         <section id='skills'>
          <h1>Skills</h1>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Git & Github</li>
            <li>Responsive Web design</li>
            <li>asic Ui/Ux Principles</li>
          </ul>
        </section>

        <section id='hobbies'>
          <h1>Hobbies</h1>
          <p> I enjoy tactical games like Chess as it keeps my mind active and helps me stay calculative. I enjoy watching movies, cooking, travelling and creating new projects.  </p>
        </section>

        <section id='Academic Qualification'>
          <h1>Academic Qualification</h1>
          <p>B.Eng Petroleum Engineering from Federal University of Petroleum Resources, Effurun </p>
          <p>Currenting upskilling to be a FullStack Web Developer on Asdin.</p>
        </section>

        <section id='experience'>
          <h1>'Work Experience</h1>
          <p>Sales Manager (2021-2025) </p>
          <p>Graduate Operator (2019-2020)</p>
          <p>Administrative Assistant (2018-2019</p>
        </section>

        
      </main>
    </div>


  )
}

export default App
