import './App.css';
import {useEffect, useState} from "react";
import CountryCarts from "./components/CountryCarts";
import Statistics from "./components/Statistics";
export default function App() {

    const [selectedButton , setSelectedButton] = useState("CountryCarts");
    useEffect(()=>{

    },[selectedButton])
    function changeButtonToStatistics(){
        setSelectedButton("Statistics");
    }
    function changeButtonToCountry(){
        setSelectedButton("CountryCarts");
    }
  return (
    <div >
      <header >
          <div className="tab">
              <button className="tablinks" onClick={changeButtonToCountry} >Country List</button>
              <button  className="tablinks" onClick={changeButtonToStatistics}>Statistics</button>
          </div>
      </header>
        <div>
            {(()=>{
               return selectedButton === "Statistics" ? <Statistics/> : <CountryCarts/>
            })() }
        </div>
    </div>
  );
}

