const { Field } = require('@igomoon/hubspot-fields-js');

module.exports = function () {
	return Field
		.text()
		.name('section_id', 'Section ID')
		.set('validation_regex', '-?[a-zA-Z]+[a-zA-Z0-9-]+')
		.inlineHelpText('Enter an ID for styling and anchors');
}