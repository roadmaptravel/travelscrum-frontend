$(document).ready (function () {
	
    $('form input').on('keyup touchend', function (){
	    
        var empty = false;
        $('form input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#entryButton').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#entryButton').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });    
});

var changeEmo = function (type) {
	
	var element = $('#'+type);
	
	$('.emote').each (function (index, el) {
		
		$(el).removeClass('active');
		var type = $(el).attr ('id');
		$(el).attr ('src', '/images/emotions/Emotion_'+ type +'.svg');
		
		
	})
	
	element.addClass('active');
	element.attr ('src', '/images/emotions/Emotion_'+ type +'_tapped.svg');
	
	$('#checkboxField').css ('display', 'block');
};

(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")