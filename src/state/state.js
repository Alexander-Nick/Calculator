
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
      addInMemory: () =>{
         debugger
         if (state.buttons.memory === '0') state.buttons.memory = '';
         state.buttons.memory = state.display.displayValue + state.buttons.memory;
         if (state.buttons.memory !== 0) {
            document.querySelector('.App__memory').style.opacity = '1'
         } else {
            document.querySelector('.App__memory').style.opacity = '0'
         }
      },
      memoryRead:function () {
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
      }
   },

   subscribe(observer) {
      renderDom = observer;
   }
}

export default state;