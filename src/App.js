import './assets/fonts/Punc-Regular.ttf';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/containers/home';
import Layout from './components/containers/layout';
import Faqs from './components/containers/faqs';
import Camiseta from './components/containers/camiseta';
import Sudaderas from './components/containers/sudaderas';
import Sudadera from './components/containers/sudadera';
import About from './components/containers/about';
import Pines from './components/containers/pines';
import Pagenotfound from './components/containers/pagenotfound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='faqs' element={<Faqs/>} />
            <Route path='camiseta' element={<Camiseta/>}/>
            <Route path='sudaderas' element={<Sudaderas/>}/>
            <Route path='/sudadera/:id' element={<Sudadera/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='pines' element={<Pines/>}/>
            <Route path='/*' element={<Pagenotfound/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
