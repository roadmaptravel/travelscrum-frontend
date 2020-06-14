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