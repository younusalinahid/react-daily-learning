import React from "react";
import Clock from "./components/Clock";
import ClockList from "./components/ClockList";
import Form from "./components/Form";
import Calculator from "./components/Calculator";
// import Text from "./components/inheritance/Text";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Todo from "./components/Todo";
import MyComponentClass from "./components/MyComponentClass";
import MyComponent from "./components/MyComponent";
import { useCallback, useMemo, useState } from "react";
import Button from "./components/ButtonClass";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";
import FormClass from "./components/FormClass";
import Time from "./components/Time";
import Counter from "./components/Counter";
import LayoutComponentOne from "./components/LayoutComponent";

function App() {
  return (
    <div>
      <LayoutComponentOne />
    </div>
  );
}

export default App;

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const incrementByOne = useCallback(() => {
//     setCount1((prevCount) => prevCount + 1);
//   }, []);

//   const incrementByFive = useCallback(() => {
//     setCount2((prevCount) => prevCount + 5);
//   }, []);

//   const isEvenOrOdd = useMemo(() => {
//     let i = 0;
//     while (i < 1000000000) i += 1; // costly operation
//     return count1 % 2 === 0;
//   }, [count1]);

//   return (
//     <div className="app">
//       <Title />
//       <ShowCount count={count1} title="Counter 1" />
//       <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
//       <Button handleClick={incrementByOne}>Increment by one</Button>
//       <hr />
//       <ShowCount count={count2} title="Counter 2" />
//       <Button handleClick={incrementByFive}>Increment by five</Button>
//     </div>
//   );
// }

// export default App;
// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <MyComponent />
//       </div>
//     )
//   }
// }
//   return (
//     <div>
//       {/* <Form /> */}
//       {/* <Calculator /> */}
//       {/* <Text /> */}
//       {/* <Emoji>
//         {({ addEmoji }) => (
//           <Bracket>
//             {({ addBracket }) => (
//               <Text addEmoji={addEmoji} addBracket={addBracket} />
//             )}
//           </Bracket>
//         )}
//       </Emoji> */}
//       <ClickCounter />
//       <HoverCounter />
//     </div>
//   );
