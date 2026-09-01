import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {

  return (
    <>
      <Navbar/>
      <section className='hero'>
        <div className="heroButton">
          <Button text="Me conheça"/>
        </div>
      </section>
      <section className='little-presentation'>
        <div className='container'>
        <h1 className='bigTextPresentation'>HELLO, I'M</h1>
        <h1 className='bigTextPresentation'>MARIA</h1>
        <h1 className='bigTextPresentation'>EDUARDA</h1>
        <h1 className='bigTextPresentation'>SANTANA</h1>
        </div>
        
        <h2 className='smalTextPresentation'>and welcome to my portfolio.</h2>
      </section>
      
      <section className='carrousel'>
        <h1 className='qualquer'>Algumas de minhas obras:</h1>
      </section>
    </>
  )
}

export default App
