const { Group, Field } = require('@igomoon/hubspot-fields-js');

const SectionId = require('../../../src/fields/SectionId');

module.exports = [

	Field.text()
		.name( 'title', 'Title' )
		.default('I\'m the title'),
	
	SectionId()

]; 