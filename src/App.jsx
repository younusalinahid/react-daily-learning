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

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MyComponent />
      </div>
    )
  }
}
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