let db = require("../database/models");
const { Op } = db.Sequelize;

module.exports = {
    index: (req,res)=>{
        db.Actors.findAll()
            .then(actors => res.render('actors/index',{actors}));
    },
    show: (req, res) => {
       db.Actors.findByPk(req.params.id,{include:['favorite','movies']})
           .then(actor => res.render('actors/show',{actor}));
    },
    create: async (req, res) => {
        let movies = await db.Movies.findAll();
        return res.render('actors/create',{ movies })
       //db.Movies.findAll().then(actors => res.render('actors/create',{ actors }));
    },
    store: (req,res) => {
        db.Actors.create(req.body)
        .then(() => res.redirect('/actors'))
        .catch(error=>console.log(error));
    },
    edit: async (req,res)=> {
        let movies = await db.Movies.findAll();
        let actor = await db.Actors.findByPk(req.params.id);
        res.render('actors/edit',{movies, actor})
    },
    update: (req,res)=> {
        let _body = req.body
        db.Actors.update(_body,{
            where: {id: req.params.id}
        })
        .then(() => res.redirect(`/actors/${req.params.id}`))
        .catch(error=>console.log(error));
    },
    destroy: (req, res)=> {
        db.Actors.destroy({where: {id: req.params.id}})
            .then(() => res.redirect('/actors'))
            .catch(error=>console.log(error));
    }
}