let db = require("../../database/models");
const product = require("../../database/models/product");
const { Op } = db.Sequelize;

module.exports = {
    widgets: async (req, res) => {
        const products = await db.Product.findAll();
        const users = await db.User.findAll();
        let amount = 0
        products.map(product => amount += product.price);
        
        res.json({
            meta: {
                status: 200,
                link: '/api/dashboard/widgets'
            },
            data: [
                {
                    text: 'Products in Data Base',
                    value: products.length,
                    icon: "fa-clipboard-list"
                },
                {
                    type: 'success',
                    text: 'Amount in products',
                    value: '$' + amount,
                    icon: "fa-dollar-sign"
                },
                {
                    type: 'warning',
                    value: users.length,
                    text: 'Users quantity',
                    icon: "fa-user-check"
                },
                {
                    type: 'danger',
                    value: 45,
                    text: 'loque me deben',
                    icon: "fa-list"
                }
            ]
        });
    },
    products: async (req,res)=>{
        const products = await db.Product.findAll({include: ['category'] });
        res.json({
            meta: {
                status: 200,
                totalItems: products.length,
                link: '/api/dashboard/products'
            },
            data: products.map(product=> {
                return {
                    id: product.id,
                    title: product.name,
                    category: product.category.name,
                    text: product.text,
                    price: product.price,
                    published: product.published
                }
            })
        });
    },
    lastProduct: async (req, res) => {
        const product = await db.Product.findOne({
            order: [['createdAt', 'DESC']],
        });

        res.json({
            meta: {
                status: 200,
                link: '/api/dashboard/lastproduct'
            },
            data: {
                id: product.id,
                name: product.name,
                image: product.image,
                text: product.text,
                price: product.price
            }
        });
    },
    categories: async (req, res) => {
        const categories = await db.Category.findAll({include:['products']});
      
        res.json({
            meta: {
                status: 200,
                totalItems: categories.length,
                link: '/api/dashboard/categories'
            },
            data: categories.map(category => {
                return {
                    id: category.id,
                    name: category.name,
                    productsCount: category.products.length
                }
            })
        });
    },
    store: async (req,res) => {
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