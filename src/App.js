import './App.css';
import Buttons from './components/buttons/buttons';
import Display from './components/display/display';


function App(props) {

  return (
    <div className="App container">
      <div className="App__content">
        <Display state = {props.state.display} />
        <Buttons state = {props.state.buttons} displayValue = {props.state.display.displayValue} />
      </div>

    </div>
  );
}


export default App;
