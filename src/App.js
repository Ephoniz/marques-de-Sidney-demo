import './assets/fonts/Punc-Regular.ttf';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/containers/home';
import Layout from './components/containers/layout';
import Faqs from './components/containers/faqs';
import Camiseta from './components/containers/camiseta';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='faqs' element={<Faqs/>} />
            <Route path='camiseta1' element={<Camiseta/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
