var btc = document.getElementById("bitcoin");
var usdt = document.getElementById("tether");
var eth = document.getElementById("ethereum");

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum&vs_currencies=inr",
  "method": "GET",
  "headers": {}
}
$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.inr;
  usdt.innerHTML = response.tether.inr;
  eth.innerHTML = response.ethereum.inr;
});