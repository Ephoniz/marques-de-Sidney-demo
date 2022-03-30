import './assets/fonts/Punc-Regular.ttf';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/containers/home';
import Layout from './components/containers/layout';
import Faqs from './components/containers/faqs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='faqs' element={<Faqs/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
