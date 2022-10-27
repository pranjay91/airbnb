import Header from './components/header/header';
import Section from './components/middlesection/section';

import Cards from './components/cards/cards';
import Buttoned from './components/button/buttoned';

import './App.css';


function App() {
  return (
    <div className="App">
     <Header/>
     <Section/>
     <Buttoned/>
     <Cards/>
     
    </div>
  );
}

export default App;