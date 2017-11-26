function httpRequest(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4) {
			callback(xhr.responseText);
		};
	}
	xhr.send();
}

httpRequest('http://checkip.dyndns.com/', (ip) => {
	document.getElementById('ip_div').innerHTML = ip;
});