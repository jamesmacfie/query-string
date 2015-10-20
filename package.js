Package.describe({
	name: 'jamesmacfie:query-string',
	version: '1.0.0',
	summary: 'Meteor smart package for Sindresorhus\'s query-string node module.',
	git: 'https://github.com/jamesmacfie/query-string',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.use('ecmascript');
	api.addFiles('query-string.js');
	 api.export('QueryString', ['client', 'server']);
});

Npm.depends({
	"query-string": "3.0.0"
});
