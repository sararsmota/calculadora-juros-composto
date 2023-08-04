document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    let total_invested = value;
    // total_invested = "R$ " + Number(total_invested).toFixed(2).replace('.',',');

    let total = value * (1 + fee)**time;

    let total_gain = total - total_invested;
    // total_gain = "R$ " + Number(total_gain).toFixed(2).replace('.',',');

    document.getElementById('total_invested').innerHTML = formatter.format(total_invested);
    document.getElementById('total_gain').innerHTML =  formatter.format(total_gain);
    document.getElementById('total').innerHTML = formatter.format(total);

    a = formatter.format(total_invested);
    console.log(a)

});

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
