import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber'
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h1 className="header">IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={`${new Date('1992-07-14').toDateString()}`}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={`${new Date('1988-05-11').toDateString()}`}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1 className="header">Greetings</h1>

      <Greetings language="de" name="Ludwig" />
      <Greetings language="fr" name="François"/>

      <h1 className="header">Random</h1>

      <RandomNumber max={6} min={1} />
      <RandomNumber max={100} min={1} />

      <h1 className="header">BoxColor</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}
export default App;
