module.exports = {
	capitalize: function (aString) {

		if (typeof aString !== 'string') return ''
	
		return aString.charAt(0).toUpperCase() + aString.slice(1)
	},
	moment: function () {
		
		var date = new Date();
		
		return date.getTime();
		
	},
	if_eq: function (a, b, opts) {
		
	    if (a == b) {
	        return opts.fn(this);
	    } else {
	        return opts.inverse(this);
	    }		
	},
	eq: function () {
		const args = Array.prototype.slice.call(arguments, 0, -1);
	    return args.every(function (expression) {
	        return args[0] === expression;
	    });
	}
}