Package.describe({
  name: 'akiarostami:autoform-medium',
  version: '0.0.5',
  summary: "Medium editor for AutoForm",
  description: "Medium editor for AutoForm",
  git: "http://github.com/akiarostami/meteor-autoform-medium.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'templating',
    'aldeed:autoform@5.*',
    'mediumeditor:mediumeditor@5.*',
  ], 'client');

  // TODO: restore when medium editor fixe deactivate
  //api.use('tap:18n', {weak: true});

  api.addFiles([
    'template.html',
    'template.js',
  ], 'client');
});
