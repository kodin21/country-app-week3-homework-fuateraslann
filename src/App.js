import './App.css';
import {useEffect, useState} from "react";
import CountryCarts from "./components/CountryCarts";
import Statistics from "./components/Statistics";
export default function App() {

    const [selectedButton , setSelectedButton] = useState(0);
    useEffect(()=>{

    },[selectedButton])
    function changeButtonToStatistics(){
        setSelectedButton(1);
    }
    function changeButtonToCountry(){
        setSelectedButton(0);
    }
    function getCountries(){
        return <div>a</div>
    }
    function getStatistics(){
        return <div>sad</div>
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
               return selectedButton ? <Statistics/> : <CountryCarts/>
            })() }
        </div>
    </div>
  );
}

