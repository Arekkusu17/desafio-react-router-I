import React from 'react';
import logo from '../pastel.png'

const Home = () => {
  return (
    <section className=' home-page'>
      <div className='container'>
        <h1>Bienvenido a <strong>Happy Cake</strong></h1>
        <p>El lugar de los pasteles felices</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </section>
  )
}

export default Home