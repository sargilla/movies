import React from 'react'

 function Card({type,text,value,icon}) {
    return (
        <div className={`card border-left-${type} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={`text-xs font-weight-bold text-${type} text-uppercase mb-1`}> {text}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                    </div>
                    <div className="col-auto">
                        <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
Card.defaultProps = {
    type:'primary'
}
export default Card;