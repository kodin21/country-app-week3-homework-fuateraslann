import axios from 'axios';
import {useEffect, useState} from "react";
export default function GetData(){
    const[countryDatas , setCountryDatas] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all').then(response =>
            setCountryDatas(response.data)
        ).catch(error=>{
            console.log(error);
        })
    },[])
    return countryDatas
}