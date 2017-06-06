// Sorcerer is my Angular/Spring-style IoC framework
// [https://www.npmjs.com/package/sorc]

var config = require('./sorcerer.config');
require('sorc')(config, (App) =>
{
    App.listen(process.env.PORT || 80);
});