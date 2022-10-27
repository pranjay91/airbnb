import Header from './components/header/header';
import Section from './components/section/section';

import Cards from './components/card/card';
import Buttoned from './components/button/button';

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