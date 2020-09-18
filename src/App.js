import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return (
              <div className="App">
          <head><title> Dinner Dishes </title></head>
          <Dinner dishName="Sindhi Biryani" sweetdish="Custard"/>
          <Dinner dishName="Kharai" sweetdish="Jalabi"/>
          <Dinner dishName="Fish" sweetdish="Jameshiri Sharbat"/>
          <Dinner dishName="White Kharai" sweetdish="Cake"/>
            
      </div>

  );


}
export default App;
