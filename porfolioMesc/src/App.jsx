// import './App.css';
// import Navbar from './components/Navbar';
// import Button from './components/Button';
// import Carroussel from './components/Carroussel';
// import Badge from './components/Badge';

// function App() {

//   return (
//     <>
//       {/* <Navbar/> */}
//       <section className='hero'>

//         <div className='firstBadge'>
//             <Badge text={'ME CONHEÇA'}/>
//         </div>

//       </section>
//       <section className='little-presentation'>
//         <div className='container'>
//         <h1 className='bigTextPresentation'>HELLO, I'M</h1>
//         <h1 className='bigTextPresentation'>MARIA</h1>
//         <h1 className='bigTextPresentation'>EDUARDA</h1>
//         <h1 className='bigTextPresentation'><strong>S</strong>ANTANA</h1>
//         </div>
//         <h2 className='smalTextPresentation'>and welcome to my portfolio.</h2>
//         <div className='mary'></div>
//       </section>
      
//       <section className='carrousel'>
//         <h1 className='qualquer'>Algumas de minhas obras:</h1>
//         <Carroussel/>

//         <div className='buttonCarousel'>

//         <Button
//         text={"Conheça minhas obras aqui."}
//         link={"/obras"}
//         />
//         </div>
//       </section>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;