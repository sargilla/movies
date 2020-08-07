import React,{Component} from 'react';

class LastProduct extends Component {
    constructor(){
        super();
        this.state = {
            product: {}
        }
    }
    componentDidMount(){
        fetch('/api/dashboard/lastproduct')
            .then(res=>res.json())
            .then(res => {
                this.setState({
                    product: res.data
                })
            })
    }
    render(){
        return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src={`/images/products/${this.state.product.image}`} alt="product name" />
                    </div>
                    <h3>{this.state.product.name} -  ${this.state.product.price}</h3>
                    <p>{this.state.product.text}</p>
                    <a target="_blank" rel="noopener noreferrer nofollow" href={`http://localhost:3000/products/${this.state.product.id}`}>View product detail</a>
                </div>
            </div>
        );
    }
};
export default LastProduct;