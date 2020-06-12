module.exports = {
	capitalize: function (aString) {

		if (typeof aString !== 'string') return ''
	
		return aString.charAt(0).toUpperCase() + aString.slice(1)
	}
}