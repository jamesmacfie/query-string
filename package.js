Package.describe({
	name: 'jamesmacfie:query-string',
	version: '1.0.3',
	summary: 'Meteor smart package for Sindresorhus\'s query-string node module.',
	git: 'https://github.com/jamesmacfie/query-string',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.addFiles('query-string.js', 'server');
	api.export('QueryString', 'server');
});

Npm.depends({
	"query-string": "3.0.0"
});
