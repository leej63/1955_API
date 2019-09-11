const controller = require('./controller')

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/new/:name', controller.add_person)
    app.get('/remove/:name', controller.remove_person)
    app.get('/:name', controller.view_person)
}