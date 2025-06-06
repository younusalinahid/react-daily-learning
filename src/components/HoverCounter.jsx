import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 onMouseOut={incrementCount}>Hovered {count} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
