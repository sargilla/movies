import React,{Component} from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: props.contador
        }
    }

    primero = () => console.log('primero');
    segundo = () => console.log('segundo');
    
    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    componentDidMount() {
        console.log('ya me desperte')
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }
    
    render(){
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Counter</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <h1>{this.state.contador}</h1>
                            <button className="btn btn-primary" onClick={this.decrementar}>Bajar</button>
                            <button className="btn btn-primary" onClick={this.incrementar}>Subir</button>
                        </div>
                        <div className="col-lg-6 mb-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Counter.defaultProps = {
    contador: 0
}
export default Counter;
