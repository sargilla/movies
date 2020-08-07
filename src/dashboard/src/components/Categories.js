import React , {Component} from 'react';
import Category from './Category';

class Categories extends Component{
    constructor(){
        super();
        this.state = {
            categories: [],
            cantidad: ''
        }
    }
    componentDidMount() {
        fetch('/api/dashboard/categories')
            .then(res=>res.json())
            .then(respuesta => {
                this.setState({
                  categories: respuesta.data,
                  cantidad: respuesta.meta.totalItems
                });
            })
    }
    render(){
        return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base ({this.state.cantidad})</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            this.state.categories.map((category, i) => <div className="col-6 mb-2" key={i}><Category>{category.name} ({category.productsCount} products)</Category></div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Categories