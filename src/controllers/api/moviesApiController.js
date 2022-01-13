let db = require("../../database/models");
const { Op } = db.Sequelize;

module.exports = {
    index: async (req,res)=>{
        const movies = await db.Movies.findAll();
        res.json({
            draw:1,
            recordsTotal: movies.length,
            recordsFiltered: movies.length,
            // meta: {
            //     status: 200,
            //     // totalItems: movies.length,
            //     link: '/api/movies'
            // },
            data: movies.map(movie=> {
                return {
                    id: movie.id,
                    title: movie.title,
                    awards: movie.awards,
                    length: movie.length,
                    link: `/api/movies/${movie.id}`,
                    actions:  `<div class='text-center'><div class='btn-group'  data-movie='${JSON.stringify(movie)}'><button class='btn btn-info btn-sm btnEditar mr-2'>Editar</button><button class='btn btn-danger btn-sm btnBorrar'>Borrar</button></div></div>`
                }
            })
        });
    },
    show: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id,{
            include:['genre','actors']
        });

        res.json({
            meta: {
                status: 200,
                link: '/api/movies/' +  movie.id
            },
            data: movie
        });
    },
    store: async (req,res) => {
        // return res.send(req.body);
        const movie = await db.Movies.create(req.body);
        res.json({
            meta: {
                status: 201,
                msg: 'Movie Created!',
                link: '/api/movies/' + movie.id
            },
            data: movie
        });
    },
    update: async (req,res)=> {
        let _body = req.body
        const result = await db.Movies.update(_body,{
            where: {id: req.params.id}
        });
        const movie = await db.Movies.findByPk(req.params.id);
        res.json({
            meta: {
                status: 201,
                msg: 'Movie Updated!',
                link: '/api/movies/' + movie.id
            },
            data: movie
        });
    },        
    destroy: async (req, res)=> {
        const movie = await db.Movies.destroy({where: {id: req.params.id}})
        res.json({
            meta: {
                status: 200,
                msg: "Movie deleted!",

            },
            data: movie
        });
    },
    recommended:  async (req,res)=>{
        const movies = await db.Movies.findAll({
            where: {
                awards: { [Op.gt]: 5 }
            },
            order: [['awards']]
        });

        res.json({
            meta: {
                status: 200,
                totalItems: movies.length,
                link: '/api/movies/recommended'
            },
            data: movies.map(movie => {
                return {
                    id: movie.id,
                    title: movie.title,
                    awards: movie.awards,
                    length: movie.length,
                    link: `/api/movies/${movie.id}`
                }
            })
        });
    },
    news: async (req,res)=>{
        const movies = await db.Movies.findAll({
            order: [
                ['release_date','DESC']
            ],
            limit:5
        })
        res.json({
            meta: {
                status: 200,
                totalItems: movies.length,
                link: '/api/movies/news'
            },
            data: movies.map(movie => {
                return {
                    id: movie.id,
                    title: movie.title,
                    awards: movie.awards,
                    length: movie.length,
                    link: `/api/movies/${movie.id}`
                }
            })
        });
    },
    search: async (req,res) => {
        let search = req.query.q
        const movies =  await db.Movies.findAll({
            where: {
                title : {[Op.like]:'%'+ search+'%'}
            }
        })
        res.json({
            meta: {
                status: 200,
                totalItems: movies.length,
                search: search,
                link: '/api/movies/search'
            },
            data: movies.map(movie => {
                return {
                    id: movie.id,
                    title: movie.title,
                    awards: movie.awards,
                    length: movie.length,
                    link: `/api/movies/${movie.id}`
                }
            })
        });
    }
}