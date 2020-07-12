const HourFormatTokenAssigner = (function() {
	const Assigner = {};

	// Assigner name
	Assigner.name = 'HourFormatTokenAssigner';

	// Assigner type
	Assigner.type= 'hour';

	// Regexp for matching the format token 
	Assigner.map = new Map();
	Assigner.map.set(/^(\d|1\d|2[0-3])$/, 'H');
	Assigner.map.set(/^([0-1]\d|2[0-3])$/, 'HH');
	Assigner.map.set(/^([1-9]|1[0-2])$/, 'h');
	Assigner.map.set(/^(0\d|1[0-2])$/, 'hh');

	/**
	 * Tests whether token type is same as
	 * Assigner type.
	 *
	 * @params token(Object)
	 *
	 * @returns Boolean
	 */
	Assigner._testTokenType = function(token) {
		return token.getType() === this.type;
	}

	/**
	 * Assigns the matching format token
	 * to input token.
	 *
	 * @params token(Object)
	 */
	Assigner.assign = function(token) {
		this.map.forEach((formatToken, pattern) => {
			if (this._testTokenType(token) && pattern.test(token.getValue())) {
				token.setFormat(formatToken);
			}
		});
	};

	return Assigner;
})(); 

export default HourFormatTokenAssigner; 
