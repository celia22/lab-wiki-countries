import countriesJSON from '../countries.json';


const CountryDetails = (props) => {

    const countryID = props.match.params.id
    const country = countriesJSON.find(x => x.cca3 === countryID);


  return (
    <div className= "m-20 absolute top-0 left-72 h-48 w-48">
     <h1 className="text-4xl divide-y divide--gray-200 w-32">{country.name.common}</h1> 
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>Capital</td>
          <td className="divide-y divide--gray-200">{country.capital}</td>
        </tr>
        <tr className="divide-y divide--gray-200">
          <td>Area</td>
          <td>
          {country.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr >
          <td className="divide-y divide--gray-200">Borders: </td>
        </tr>  
          <td> 
            <ul>             
            { country.borders.map((item, index) => {
                return (
                   <li key={index}> <a href={`/${item}`}>{item}</a></li>
                      )
                   })}
            </ul>
          </td>        
      </tbody>
    </table>
    </div>          
    ) 
  }



export default CountryDetails


