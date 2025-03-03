let dolar = 5.1;

let usdInput = document.querySelector('#usd');
let brlInput = document.querySelector('#brl');

usdInput.addEventListener('keyup', () => {
  convert('usd-to-brl');
});

brlInput.addEventListener('keyup', () => {
  convert('brl-to-usd');
});

usdInput.addEventListener('blur', () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener('blur', () => {
  brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = '1000,00';
convert('usd-to-brl');

// funções
function formatCurrency(value) {
  // formatar o valor
  let fixedValue = fixValue(value);
  // utilizar função de formatar
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };
  let formatter = new Intl.NumberFormat('pt-BR', options);
  return formatter.format(fixedValue);
  // retornar o valor formatado
}

function fixValue(value) {
  // ajustar o valor
  let fixedValue = value.replace(',', '.');
  let floatValue = parseFloat(fixedValue);
  if (isNaN(floatValue)) {
    floatValue = 0;
    return 0;
  }
  return floatValue;
}

function convert(type) {
  if (type === 'usd-to-brl') {
    // ajustar o valor
    let fixedValue = fixValue(usdInput.value);
    // converter o valor
    let result = fixedValue * dolar;
    result = result.toFixed(2);
    // mostrar no campo de real
    brlInput.value = formatCurrency(result);
  } else if (type === 'brl-to-usd') {
    // ajustar o valor
    let fixedValue = fixValue(brlInput.value);
    // converter o valor
    let result = fixedValue / dolar;
    result = result.toFixed(2);
    // mostrar no campo de dólar
    usdInput.value = formatCurrency(result);
  }
}