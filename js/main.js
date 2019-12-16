; (function () {
    // add isotope
	$('.portfolio-examp').isotope({
	});

	var filters = [];
	$('.portfolio-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var isChecked = $(this).hasClass('active');
		var filter = $(this).attr('data-filter');
		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});
	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
		filters.push( filter );
		filters.join(',')
	  }
	}
	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
		filters.splice( index, 1 );
		console.log(filters.join(','));
	  }
	}
})();

$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		firstArea();
		secondArea();
		textArea();

	});

	function clearSpan(curField){
		console.log('curField' , curField);
		let $span = $(curField).next('span');
		console.log($span);
		for (let i=0; i<$span.length;i++) {$span.remove();}
	}

function firstArea(){
let txt1 = document.querySelector('.name input');
let txt2 = txt1.value.toLowerCase();
let y = $(txt1).parent()[0];
console.log (y);

if (txt2 == txt1.value && txt1.value != '') {console.log(txt1.value, txt2);
	clearSpan(y);
}
else {txt1.value = ''; 
console.log('You entered wrong letters!!');
let sp1 = document.createElement('span');
sp1.innerText = 'You entered wrong letters!!';
sp1.style.color = 'red';
clearSpan(y);
$(txt1).parent().after(sp1);
}
}
function secondArea(){
let mail1=document.querySelector('.email input');
let x = $(mail1).parent()[0];
console.log (x);
if (mail1.value.indexOf('@')>=0 && mail1.value != '') 
	{console.log('OK');
	clearSpan(x);
}
else {mail1.value = ''; 
console.log('You entered wrong mail');
let sp2 = document.createElement('span');
sp2.innerText = 'You entered wrong mail!!';
sp2.style.color = 'red';
clearSpan(x);
$(mail1).parent().after(sp2);
}
}

function textArea(){
	let txtArea=document.querySelector('.message textarea');
	let z = $(txtArea).parent()[0];
	if (txtArea.value.length > 20){
		console.log('its enough');
		clearSpan(z);
	} else 
	{txtArea.value = ''; 
console.log('Its not enough');
let sp2 = document.createElement('span');
sp2.innerText = 'Its not enough';
sp2.style.color = 'red';
clearSpan(z);
$(txtArea).parent().after(sp2);
}
}

 
})
