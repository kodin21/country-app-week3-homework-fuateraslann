import '../App.css';
import {useEffect, useState} from "react";
import GetData from "../datas/GetData"
export  default function Statistics(){
    let countryDatas = GetData();
    let languages = countryDatas.map(country=> country.languages);
    let languageNames = languages.map(language=>language.map(mLanguage => mLanguage.name))
    languageNames = languageNames.reduce((a, b) => a.concat(b), []);
    console.log(languageNames)
    /*for(let i =0 ; i< countryDatas.length ; i++){
        for(let j =0 ; j<countryDatas[i].languages.length ; j++){
            if(languages.includes())
             languages.push(countryDatas[i].languages[j].name)
        }
    }*/
    let mostSpokenLanguages =[];

    return <div>
        <h3>Most Spoken Languages</h3>
    </div>
}