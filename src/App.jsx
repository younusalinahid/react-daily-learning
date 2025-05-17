import Clock from "./components/Clock";
import ClockList from "./components/ClockList";
import Form from "./components/Form";
import Calculator from "./components/Calculator";
// import Text from "./components/inheritance/Text";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";

function App() {
  return (
    <div>
      {/* <Form /> */}
      {/* <Calculator /> */}
      {/* <Text /> */}
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}

export default App;
