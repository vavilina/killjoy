function filter () {
	var filter1 = document.getElementById('Cat1'),
		filter2 = document.getElementById('Cat2'),
		cat = document.getElementsByClassName('filter-items-item');

	filter2.onclick = function(event) {
		for (var i=2; i<cat.length; i+=1){
			cat[i].style.display = 'none';
		}
	}
	filter1.onclick = function(event) {
		for (var i=0; i<cat.length; i+=1){
			cat[i].style.display = 'block';
		}
	}
}