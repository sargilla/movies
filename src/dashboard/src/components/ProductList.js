import React,{Component} from 'react';
import ProductRow from './ProductRow'

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cantidad: 0,
        };
    }
    componentDidMount() {
        fetch("/api/dashboard/products")
        .then((res) => res.json())
        .then((respuesta) => {
            this.setState({
                products: respuesta.data,
                cantidad: respuesta.meta.totalItems,
            });
        });
    }
    render() {
        return (
            <div className="card shadow mb-4">
                {/*  PRODUCTS LIST  */}
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        All the products in the Database ({this.state.cantidad})
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Published</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th> 
                                <th>Price</th>
                                <th>Published</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {this.state.products.map((product, i) => (
                                    <ProductRow key={i} {...product} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
        
export default ProductList;
