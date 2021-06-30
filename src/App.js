import React from "react";
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};
const App = () => {
  let name = "Peter";
  let age = 10;
  return (
    <div>
      <p>Greetings</p>
      <Hello name={name} age={age} />
      <Hello name="Maya" age={26 + 10} />
    </div>
  );
};

export default App;
