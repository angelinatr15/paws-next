import StatesE from './StatesE';

const States = ({states}) => {
  return <div>
      {states.map((s)=>(
          <StatesE key={s.id} state={s}/>
      ))}
  </div>;
};

export default States;
