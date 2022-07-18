


const Display = props => {
   return (
      <div className="App__display">
         <div className="App__expression">
            {props.state.expressionValue}
         </div>
         <div className="App__input">
            <div className="App__state">
               <p className="App__memory">
                  M
               </p>
               <p className="App__error">
                  E
               </p>
            </div>
            <p className="App__value">
               {props.state.displayValue}
            </p>
         </div>
      </div>)
}

export default Display;