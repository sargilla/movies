import React from 'react';

const ProductRow = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.text}</td>
            <td>{props.category}</td>
            <td>${props.price}</td>
            <td>{
                props.published
                ?
                <i className="fas fa-check"></i>
                :
                <i className="fas fa-times"></i>
                }
            </td>
        </tr>
    );
}

export default ProductRow;
