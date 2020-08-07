import React,{Component} from 'react';
import Card from './Card';
import LastProduct from './LastProduct';
import Categories from './Categories';
import Counter from './Counter';
import ProductList from './ProductList';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        fetch("/api/dashboard/widgets")
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    cards: res.data
                })
            })
    }
    
    render(){
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>    
                <div className="row mb-3 justify-content-between">
                    {
                        this.state.cards.map((card,i)=> {
                            return (
                              <div className="col" key={i}>
                                <Card {...card} />
                              </div>
                            );
                        })
                    }
                </div>    
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <LastProduct />
                        <Counter />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <Categories />
                        <Counter contador={56}/>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ProductList />
                    </div>
                </div>	
            </div>
        );
    }
}

export default Main;