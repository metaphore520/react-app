const ChildComp = ({ prop1, prop2 }) => {
    console.log('This is Child Comp');
  return (
    <div>
      <h1>This Child Component of Composition</h1>
      <h1>Prop 1 {prop1}</h1>
      <h1>Prop 2 {prop2}</h1>
    </div>
  );
};

export default ChildComp;
