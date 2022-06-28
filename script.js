function setTwoNumberDecimal(el) {
	el.value = parseFloat(el.value).toFixed(2);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCurrencies() {
	//short currency
	const currencies = ['USD','EUR','PLN','CAD','JPY','CHF','DKK','PHP','RUB','THB','SEK','VND'];
	
	//long currency
	//const currencies = [
	//'US Dollar (USD)', 
	//'Euro (EUR)', 
	//'Polish Zloty (PLN)', 
	//'Canadian Dollar (CAD)',
	//'JPY','CHF','DKK','PHP','RUB','THB', 'SEK','VND'];

	for (var i=0; i < currencies.length; i++) { 
		var options = options + "<option>" + currencies[i] + "</options>";
	}
	document.getElementById("basecur").innerHTML = options;
	document.getElementById("quotecur").innerHTML = options;
	document.getElementById("basecur").value = "";
	document.getElementById("quotecur").value = "";	
	document.getElementById("baseval").value = "";
	document.getElementById("quoteval").value = "";	
}

function getdata (el) {
	let url = 'https://open.er-api.com/v6/latest/EUR';
	fetch(url)
	.then(response => response.json())
	.then(result => getPrice(el,result));
}

function getPrice(el,data) {
	const cur = el.value;
	el.parentNode.children[2].value = "";
	for (const x in data.rates) {
		if (x == cur) {
			el.parentNode.children[2].value = data.rates[x];			
		}
		//text += x + ": " + data.rates[x] + "<br>";
	}
}

function convertCurrency () {
	var amount = document.getElementById("baseval").value;
	var baseprice = document.getElementById("baseprice").value;
	var quoteprice = document.getElementById("quoteprice").value;
	var target = document.getElementById("quoteval")
	target.value = amount*quoteprice/baseprice;
	setTwoNumberDecimal	(target);
}
