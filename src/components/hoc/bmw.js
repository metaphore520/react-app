import withCar from "./withCar";

const BMW = ({ drivingProcess, parts }) => {
  return (
    <div>
      <h1>This is BMW parts for driving {parts}</h1>
      <button onClick={drivingProcess}>Start Driving</button>
    </div>
  );
};

export default withCar(BMW);
