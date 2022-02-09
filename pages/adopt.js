import Adopt from '../components/adopt/Adopt';

const adopt = ({animals}) => {
  return <div>
    <h5 className='mt-10 p-4'>“Until one has loved an animal, a part of one's soul remains unawakened.” -Anatole France. 21. “Animals are such agreeable friends―they ask no questions, they pass no criticisms.”</h5>
    <Adopt animals={animals}/>
  </div>;
};

export default adopt;

export async function getStaticProps(){
    const response = await fetch('http://localhost:5000/animals');
    const animals = await response.json(); 
    return {
      props: {
        animals
      }
    }
}