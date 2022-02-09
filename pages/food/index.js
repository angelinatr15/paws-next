import FoodC from "../../components/food/FoodC";

const food = ({food}) => {
  return <div>

<FoodC food={food}/>

  </div>;
};

export default food;

export async function getStaticProps(){
    const response = await fetch('http://localhost:5000/food');
    const food = await response.json();
    console.log(food);

    return{
        props:{
            food
        }
        
    }
}