const mouseflowLib = require('./src/react-mouseflow');

const mouseflow = (...params) => {
	if (!window.mouseflow) {
		throw new Error('Mouseflow is not initialized');
	}
	window.mouseflow(...params);
};

module.exports = {
	mouseflow: {
		initialize: function initialize(id) {
			mouseflowLib(id);
		},
		initialized: function initialized() {
			return typeof window !== 'undefined' && typeof window?.mouseflow === 'function';
		},
		identify: function tag(property) {
			mouseflow('tag', property);
		},
		event: function event(key, value) {
			mouseflow('setVariable', key, value);
		},
		stateChange: function stateChange(currentPath) {
			mouseflow('newPageView', currentPath);
		}
	},
};