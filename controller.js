// VIEWS in DJANGO - this is where the logic goes
const Person = require('./models');

module.exports = {
    index: (req, res)=>{
        console.log('running index function')
        Person.find({})
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.json(err);
            })
    },
    add_person: function(req, res){
        console.log('adding: ', req.params.name)
        Person.create({name: req.params.name})
            .then(()=>{
                console.log('successfully added person')
                res.redirect('/');
            })
            .catch((err)=>{
                console.log('something went wrong with adding a person')
            })
    },
    remove_person: function(req, res){
        Person.remove({name: req.params.name})
            .then(()=>{
                console.log('successfully removed person')
                res.redirect('/');
            })
            .catch((err)=>{
                console.log('something went wrong with remove')
            })
    },
    view_person: function(req, res){
        Person.find({name: req.params.name})
            .then((data)=>{
                res.json(data);
            })
            .catch((err)=>{
                res.json(err);
            })
    }
}