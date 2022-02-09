import React from 'react';
import CountriesC from '../../components/countries/CountriesC';

const Countries = ({countries}) => {
  return <div>
      <CountriesC countries={countries}/> 
      <h5>Testing</h5>
  
  
  </div>;
};

export default Countries;

export async function getStaticProps(){
    const response = await fetch('http://localhost:5000/countries');
    const countries = await response.json();
    console.log(countries)

    return{
        
        props:{
            countries
        }
    }
    
}

