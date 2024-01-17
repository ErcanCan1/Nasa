import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [nasaVeri, setNasaVeri] = useState(null);
  const [day, setDay] = useState(1);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY&date=2012-11-"+day);
    .then(res => setNasaVeri(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;






