const result = document.getElementById('result');
const keys = document.querySelectorAll('.keys button');
const operators = ['+', '-', '*', '/', '(', ')'];

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.value;

    if (keyValue === 'CE') {
      result.value = '';
    }
   
    else if (keyValue === '=') {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = 'Error';
      }
    }
    
    else if (operators.includes(keyValue)) {
      const lastChar = result.value[result.value.length - 1];
      if (!operators.includes(lastChar)) {
        result.value += keyValue;
      }
    }
    
    else {
      result.value += keyValue;
    }
  });
});

document.addEventListener('keydown', (event) => {
  const keyValue = event.key;

  if (keyValue === 'Enter') {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }
 
  else if (keyValue === 'Backspace') {
    result.value = result.value.slice(0, -1);
  }
  
  else if (/[\d\.]/.test(keyValue)) {
    result.value += keyValue;
  }

  else if (operators.includes(keyValue)) {
    const lastChar = result.value[result.value.length - 1];
    if (!operators.includes(lastChar)) {
      result.value += keyValue;
    }
  }
});
