$(document).ready(function() {

    var el = document.getElementById('placeholder-player');
    var btn = document.createElement("div")
    btn.className = btn.className + " tlt";
    var t = document.createTextNode("  ");
    btn.appendChild(t);
    el.appendChild(btn)
        //	var div = '<div></div>';
        //	if(el) {
        //	    el.appendChild()'<div class="player-api player-width player-height"></div><h1 class="tlt">abc</h1>';
        //	}
    $('.tlt').textillate({ in : {
            effect: 'splat'
        },
        out: {
                effect: 'foldUnfold',
                sync: true
            },
            loop: true
    });
			
  
	//	window.setInterval(function () {    			
			
	    var recognition = new webkitSpeechRecognition();
	    recognition.continuous = true;
	    recognition.interimResults = true;

	    recognition.onresult = function (e) {
	        var textarea = document.getElementById('results');
	        for (var i = e.resultIndex; i < e.results.length; ++i) {
	            if (e.results[i].isFinal) {
								  inner = '<li class="current">' + e.results[i][0].transcript + '</li>';
							  	document.getElementsByClassName("current")[0].innerHTML = inner
	            }
	        }
	    }
	    // start listening
			recognition.start();
		
	//	}, 5000)
});

