import '../App.css';
import {useEffect, useState} from "react";
import GetData from "../datas/GetData"
export  default function Statistics(){
    let countryDatas = GetData();
    let languages = countryDatas.map(country=> country.languages);
    let languageNames = languages.map(language=>language.map(mLanguage => mLanguage.name))
    languageNames = languageNames.reduce((a, b) => a.concat(b), []);
    //let dedupLanguages = languageNames.filter(function(value, index){ return languageNames.indexOf(value) == index });
    //console.log(dedupLanguages)
    var count = {};
    //let dedupLanguages = [...new Set(languageNames)];
    languageNames.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    const deduplicatedLanguages = [];
    Object.keys(count).forEach((language) =>
        deduplicatedLanguages.push([language, count[language]])
    );
    deduplicatedLanguages.sort((a, b) => b[1] - a[1]);
    let mostSpokenLanguages =[];
    //useEffect(()=>{
    let idx = 0 ;
    if(deduplicatedLanguages.length >0){
        while(idx <10){
            mostSpokenLanguages.push(deduplicatedLanguages[idx++]);
        }
    }
    //},[languageNames])
    console.log(mostSpokenLanguages)
    return <div>
        <h3>Most Spoken Languages</h3>
        {mostSpokenLanguages.map(language=>{
            return (<div key = {language[0]} >{language[0]} - {language[1]}</div>)
        })}
    </div>
}