
const Buttons = props => {

  const buttons = {
    input0: () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('0');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input1 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('1');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input2 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('2');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input3 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('3');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input4 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('4');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input5 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('5');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input6 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('6');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input7 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('7');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    input8 : () => {
    if (+props.displayValue > 99999999999){
      document.querySelector('.App__error').style.opacity = '1';
    } else {
      props.state.digitInput('8');
      document.querySelector('.App__error').style.opacity = '0';
    }
    },
    input9 : () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('9');
        document.querySelector('.App__error').style.opacity = '0';
      }
    },
    inputPoint: () => {
      if (+props.displayValue > 99999999999){
        document.querySelector('.App__error').style.opacity = '1';
      } else {
        props.state.digitInput('.');
        document.querySelector('.App__error').style.opacity = '0';
      }
    }
  }
  
  return (
    <div className="App__buttons">
      <button onClick={props.state.memoryClean}  className="App__button memory">
        MC
      </button>
      <button onClick={props.state.memoryRead} className="App__button memory">
        MR
      </button>
      <button onClick={props.state.deductFromMemory} className="App__button memory">
        M-
      </button>
      <button onClick={props.state.addInMemory} className="App__button memory">
        M+
      </button>
      <button onClick={props.state.back} className="App__button back">
        ←
      </button>
      <button onClick={buttons.input7} className="App__button digit" value='7'>
        7
      </button>
      <button onClick={buttons.input8} className="App__button digit">
        8
      </button>
      <button onClick={buttons.input9} className="App__button digit">
        9
      </button>
      <button  className="App__button action">
        %
      </button>
      <button onClick={props.state.cleanValue} className="App__button clear">
        C
      </button>
      <button onClick={buttons.input4} className="App__button digit">
        4
      </button>
      <button  onClick={buttons.input5} className="App__button digit">
        5
      </button>
      <button onClick={buttons.input6} className="App__button digit">
        6
      </button>
      <button onClick={props.state.root} className="App__button action">
        √
      </button>
      <button onClick={props.state.multipleOn} className="App__button action">
        x
      </button>
      <button onClick={buttons.input1} className="App__button digit">
        1
      </button>
      <button onClick={buttons.input2} className="App__button digit">
        2
      </button>
      <button onClick={buttons.input3} className="App__button digit">
        3
      </button>
      <button onClick={props.state.divideOn} className="App__button action">
        ÷
      </button>
      <button onClick={props.state.deductFromValue} className="App__button action">
        -
      </button>
      <button onClick={buttons.input0} className="App__button digit">
        0
      </button>
      <button onClick={buttons.inputPoint} className="App__button digit">
        .
      </button>
      <button onClick={props.state.inverseValue} className="App__button action">
        +/-
      </button>
      <button onClick={props.state.addValue} className="App__button action">
        +
      </button>
      <button onClick={props.state.equal} className="App__button action">
        =
      </button>
    </div>
  )
};


export default Buttons;