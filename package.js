Package.describe({
  name: 'sgaluza:minimalform',
  version: '0.0.4_5',
  // Brief, one-line summary of the package.
  summary: 'Based on coderops article: http://tympanus.net/codrops/2014/04/01/minimal-form-interface/ written by Mary Lou.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('minimalform.js');
  api.addFiles('fonts/codropsicons/codropsicons.eot');
  api.addFiles('fonts/codropsicons/codropsicons.svg');
  api.addFiles('fonts/codropsicons/codropsicons.ttf');
  api.addFiles('fonts/codropsicons/codropsicons.woff');
  api.addFiles('fonts/icomoon/icomoon.eot');
  api.addFiles('fonts/icomoon/icomoon.svg');
  api.addFiles('fonts/icomoon/icomoon.ttf');
  api.addFiles('fonts/icomoon/icomoon.woff');
});

