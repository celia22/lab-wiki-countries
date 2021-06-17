import React, { Component } from 'react';

import CountryDetails from './CountryDetails';


class CountriesList extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: this.props.countries,
      country: ""
    }
  }

  chooseCountry = () => {
    this.setState = {
      country: this.countries.item
    }
  }

  render(){

    const { countries } = this.state    

    return (
      
      countries.map((item, index) => {
        return (
         
          <div className="ml-10 border-2 border-gray-200 w-64 h-12 hover:bg-blue-500" key={index} >    
             <a href={`/${item.cca3}`}> <p className= "m-2">{item.flag}{item.name.common}</p></a>            
          </div>  
        )
      })       
    ) 

  }

  
}



export default CountriesList

