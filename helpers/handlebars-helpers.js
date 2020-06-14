module.exports = {
	capitalize: function (aString) {

		if (typeof aString !== 'string') return ''
	
		return aString.charAt(0).toUpperCase() + aString.slice(1)
	},
	moment: function () {
		
		var date = new Date();
		
		return date.getTime();
		
	}
}