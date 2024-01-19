import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nasa from "./mainComponents/Nasa";
import { dummyData } from "./mainComponents/dummyData";

function App() {

  const [data, setData] = useState(dummyData);
  const [day, setDay] = useState(1);

  const newDay = (days) =>{
    let gun = new Date (day);
    gun.setDate(gun.getDate() + days);
    let gercekTarih = `${gun.getFullYear()+1}-${gun.getMonth()+1}-${gun.getDate()}`
    setDay(gercekTarih);
   
  }

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY&date=2012-11-"+day)
    .then(res => setData(res.data))//gelen veriler hook ile değişken olan date in içine aktarılacak
    .catch(err => console.log(err))
  }, [day]); //gün değiştiğinde gelen bilgiler de değişecek

  return (
    <div className="App"> 
      <button onClick = {newDay(-1)}>Azalt</button>
      <button onClick = {newDay(+1)}>Artır</button>

      <Nasa veri = {data}/>

     
    </div>
  );
}

export default App;





