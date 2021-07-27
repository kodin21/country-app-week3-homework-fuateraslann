import '../App.css';
import GetData from "../datas/GetData"
export default function CountryCarts(){
    let countryDatas = GetData();
    console.log(countryDatas)
    return(<div>
        {
        countryDatas.map(country => {
            return (
                <div key ={country.name} className="countryCarts">
                    <div>
                        <img className="countryImg"  src={country.flag} alt={country.name}></img>
                    </div>
                    <div>
                        <h3>{country.name}</h3>
                        Capital : <span>{country.capital}</span> <br></br>
                        Language : <table className="languageTable">{country.languages.map(language=>{
                        return <td>{language.name} </td>
                        }
                    )}</table>
                    </div>
                </div>

            )
        })}
    </div>)
}