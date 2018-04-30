import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="3ae07f75cf8a3df0bf8ac182469709af";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&appid=${API_KEY}`);
      const data = await api_call.json();
      console.log(data);
  }
  render() {
    return (
      <div>
       <Titles />
       <Form getWeather={this.getWeather}/>
       <Weather />
      </div>
      
      );
  }
};

export default App;
