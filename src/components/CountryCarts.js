import '../App.css';
import GetData from "./GetData"
export default function CountryCarts(){
    let countryDatas = GetData();
    return(<div>
        {
        countryDatas.map(country => {
            return (
                <div key ={country.name} className="countryCarts">
                    <div>
                        <img className="countryImg"  src={country.flag} alt={country.name}></img>
                    </div>
                    <div>
                        <h3>asda</h3>

                    </div>
                </div>

            )
        })}
    </div>)
}