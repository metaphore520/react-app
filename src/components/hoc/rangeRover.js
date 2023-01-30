import withCar from "./withCar";

const RangeRover = ({ drivingProcess, parts }) => {
  return (
    <div>
      <h1> This is car parts for driveng {parts}</h1>
      <button onClick={drivingProcess}>Start Driving</button>;
    </div>
  );
};

export default withCar(RangeRover);
