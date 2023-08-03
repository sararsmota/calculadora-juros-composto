document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    let total_invested = value;
    total_invested = "R$ " + Number(total_invested).toFixed(2).replace('.',',');

    let total = value * (1 + fee)*time;

    let total_gain = total - value;
    total_gain = "R$ " + Number(total_gain).toFixed(2).replace('.',',');

 
    document.getElementById('total_invested').innerHTML = formatNumber(total_invested);
    document.getElementById('total_gain').innerHTML = formatNumber(total_gain);
    document.getElementById('total').innerHTML = ("R$ " + formatNumber(total).toFixed(2).replace('.',','));

});

function formatNumber(amount, decimalCount = 2, decimal = ",", thousands = ".") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };

