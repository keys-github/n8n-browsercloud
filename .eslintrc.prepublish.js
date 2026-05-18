/**
 * Stricter rules applied at publish-time. Same as .eslintrc.js but with
 * "warn" rules promoted to "error" so the package can't be published while
 * the n8n-nodes-base plugin still has complaints.
 */
module.exports = {
	extends: './.eslintrc.js',

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/community-package-json-name-still-default': 'error',
			},
		},
		{
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/cred-class-field-documentation-url-missing': 'error',
				'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'error',
			},
		},
		{
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/node-execute-block-missing-continue-on-fail': 'error',
				'n8n-nodes-base/node-resource-description-filename-against-convention': 'error',
				'n8n-nodes-base/node-param-fixed-collection-type-unsorted-items': 'error',
			},
		},
	],
};
