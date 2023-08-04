//calcular os valores inseridos
document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value);
    const time = document.getElementById('time').value;
    const monthly = document.getElementById('monthly').value;

    let fv = FV(monthly, fee, time, value);
    let total = fv;

    let total_invested = parseInt(value) + (monthly * time);
    let total_gain = total - total_invested;

    document.getElementById('total_invested').innerHTML = formatter.format(total_invested);
    document.getElementById('total_gain').innerHTML =  formatter.format(total_gain);
    document.getElementById('total').innerHTML = formatter.format(total);
});

//função para formatar na moeda Real
const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

// função de juros compostos com aportes mensais
function FV(PMT, i, n, PV) {
  var i = i / 100 //converter porcentagem
  return ((PV * (Math.pow(1+i, n)))) + ((PMT * (Math.pow(1 + i, n) - 1))/i)
}
