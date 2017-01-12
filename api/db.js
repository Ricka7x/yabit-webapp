module.exports = function(){
  var faker = require('faker');
  var _     = require('lodash');

  return {
    users: _.times(20, function(n){
      return {
        id: n,
        name: faker.name.findName(),
        email: faker.internet.email(),
        role: faker.helpers.randomize(['admin', 'normal'])
      }
    })
  }
}
