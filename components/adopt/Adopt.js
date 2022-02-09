import AdoptC from './AdoptC';
import ServicesResourcesForm from '../services_resources/ServicesResourcesForm'

const Adopt = ({animals}) => {
  return <div>
      {animals.map((pet)=>(

          <div key={pet.id}>
          <AdoptC  id={pet.id} name={pet.name} species={pet.species} breed={pet.breed} age={pet.age} gender={pet.gender} size={pet.size} color={pet.color} location={pet.location} image={pet.image}/>

          </div>
      ))}

  </div>
}

export default Adopt;
