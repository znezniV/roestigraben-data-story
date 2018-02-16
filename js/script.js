var questions = document.getElementsByClassName("bubble--question");
var main = document.getElementById("main");
var intro = document.getElementById("intro");
var header = document.getElementById("header");

for (var i = 0; i < questions.length; i++) {
	for (var j = 0; j < questions[i].children.length; j++) {
		questions[i].children[j].addEventListener("click", function( event ) {

			// remove class (selected) from all other buttons in this bubble
			for (var k = 0; k < event.target.parentElement.children.length; k++) {
				event.target.parentElement.children[k].classList.remove("btn--selected")
			}

			// add class to clicked button (selected)
    		event.target.classList.add("btn--selected");

    		if (event.target.parentElement.id == "question-accidents") {

    			// ------ SORRY FOR SPAGHETTI CODE (time preasure) ------ 

    			// display next bubbles
	    		event.target.parentElement.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";

	    		// scroll to bubble
	    		event.target.parentElement.scrollIntoView({behavior: "smooth"})

	    		// animate bubbles in
	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 100);

	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 2000);

	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 3000);

	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 6000);

	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 7500);
	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 9000);
	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 9500);

    			console.log("rick james")
    		} else {
    			// display next bubbles
	    		event.target.parentElement.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
	    		event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";

	    		// scroll to bubble
	    		event.target.parentElement.previousSibling.previousSibling.scrollIntoView({block: "start", behavior: "smooth"})

	    		// animate bubbles in
	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 100);

	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 2000);

	    		setTimeout(function(){
	    			event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add("bubble--visible")
	    		}, 2200);
    		}
  		}, false);

	}
}

window.addEventListener('scroll', function(){
	var scrollPos = document.documentElement.scrollTop;

	var introHeight = intro.clientHeight + 60;

	if (scrollPos >= introHeight) {
		header.classList.add("header--fixed")
		main.classList.add("header-main")
	} else {
		header.classList.remove("header--fixed")
		main.classList.remove("header-main")
	}
}, true)