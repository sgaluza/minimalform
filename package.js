Package.describe({
  name: 'sgaluza:minimalform',
  version: '0.0.4_5',
  // Brief, one-line summary of the package.
  summary: 'Based on coderops article: http://tympanus.net/codrops/2014/04/01/minimal-form-interface/',
  git: '',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['minimalform.js'
    , 'fonts/codropsicons/codropsicons.eot'
    , 'fonts/codropsicons/codropsicons.svg'
    , 'fonts/codropsicons/codropsicons.ttf'
    , 'fonts/codropsicons/codropsicons.woff'
    , 'fonts/icomoon/icomoon.eot'
    , 'fonts/icomoon/icomoon.svg'
    , 'fonts/icomoon/icomoon.ttf'
    , 'fonts/icomoon/icomoon.woff'
    , 'css/component.css'
    ], 'client');
  api.export('minimalForm', 'client')
});

