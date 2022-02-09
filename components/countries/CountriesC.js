import CountryE from './CountryE';

const CountriesC = ({countries}) => {


  return <div>
      {countries.map((c)=>(
           <CountryE key={c.id} country={c.country}/>
      ))}
  </div>;
};

export default CountriesC;

