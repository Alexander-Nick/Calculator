
let renderDom = () => {
   console.log('renderDom is empty');
}


const state = {
   display: {
      displayValue: '0',
      expressionValue: '0',
   },

   buttons: {
      memory: '0',
      addInMemory: () => {
         const memory = +state.buttons.memory;
         const displayValue = +state.display.displayValue;
         state.buttons.memory = displayValue + memory + '';
         if (state.buttons.memory !== '0') {
            document.querySelector('.App__memory').style.opacity = '1';
         } else {
            document.querySelector('.App__memory').style.opacity = '0';
         }
      },
      deductFromMemory: () => {
         const memory = +state.buttons.memory;
         const displayValue = +state.display.displayValue;
         state.buttons.memory = memory - displayValue + '';
         if (state.buttons.memory !== '0') {
            document.querySelector('.App__memory').style.opacity = '1';
         } else {
            document.querySelector('.App__memory').style.opacity = '0';
         }
      },
      memoryClean: () => {
         state.buttons.memory = '0';
         document.querySelector('.App__memory').style.opacity = '0';
      },
      memoryRead: function () {
         state.display.displayValue = state.buttons.memory;
         renderDom();
      },
      back: () => {
         if (document.querySelector('.App__error').style.opacity === '1') {
            document.querySelector('.App__error').style.opacity = '0';
         } else {
            state.display.displayValue = (state.display.displayValue.slice(0, -1));
         }
         if (state.display.displayValue === '') state.display.displayValue = '0';
         renderDom();
      },
      digitInput: function (digit) {
         if (state.display.displayValue === '0' && digit !== '.') state.display.displayValue = '';
         state.display.displayValue += digit;
         renderDom();
      },
      cleanValue:()=>{
         document.querySelector('.App__error').style.opacity = '0';
         if (state.display.displayValue === '0') {
            state.display.expressionValue = '0';
         } else {
            state.display.displayValue = '0';
         }
         renderDom();
      },
      addValue: () => {
         if (state.display.expressionValue === '0') {
            state.display.expressionValue = state.display.displayValue + '+';
            state.display.displayValue = '0';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue === '0') {
            state.display.expressionValue = state.display.expressionValue.slice(0,-1) + '+';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue !== '0') {
            //на построение выражений из двух и более действий
         }
         renderDom();
      },
      deductFromValue: () => {
         if (state.display.expressionValue === '0') {
            state.display.expressionValue = state.display.displayValue + '-';
            state.display.displayValue = '0';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue === '0') {
            state.display.expressionValue = state.display.expressionValue.slice(0,-1) + '-';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue !== '0') {
            //на построение выражений из двух и более действий
         }
         renderDom();
      },
      multipleOn: () => {
         if (state.display.expressionValue === '0') {
            state.display.expressionValue = state.display.displayValue + '*';
            state.display.displayValue = '0';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue === '0') {
            state.display.expressionValue = state.display.expressionValue.slice(0,-1) + '*';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue !== '0') {
            //на построение выражений из двух и более действий
         }
         renderDom();
      },
      divideOn: () => {
         if (state.display.expressionValue === '0') {
            state.display.expressionValue = state.display.displayValue + '/';
            state.display.displayValue = '0';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue === '0') {
            state.display.expressionValue = state.display.expressionValue.slice(0,-1) + '/';
         } else if (state.display.expressionValue !== '0' && state.display.displayValue !== '0') {
            //на построение выражений из двух и более действий
         }
         renderDom();
      },
      inverseValue:()=>{
         state.display.displayValue = (+state.display.displayValue) * (-1);
         renderDom();
      },
      root:()=>{
         state.display.displayValue = (+state.display.displayValue) ** (0.5);
         renderDom();
      },
      equal:()=>{
         const expression = parseFloat(state.display.expressionValue);
         const value = +state.display.displayValue;
         const action = state.display.expressionValue.slice(-1);
         if (action === '+') {
            state.display.displayValue = value + expression + '';
            state.display.expressionValue = '0';
         } else if (action === '-') {
            state.display.displayValue = expression - value + '';
            state.display.expressionValue = '0';
         } else if (action === '/') {
            if (state.display.displayValue !== '0') {
               state.display.displayValue = expression / value + '';
            } else {
               state.display.displayValue = '0';
               state.display.expressionValue = '0'
               document.querySelector('.App__error').style.opacity = '1';
            }
            state.display.expressionValue = '0';
         } else if (action === '*') {
            state.display.displayValue = expression * value + '';
            state.display.expressionValue = '0';
         } 
         renderDom();
      }
   },

   subscribe(observer) {
      renderDom = observer;
   }
}

export default state;