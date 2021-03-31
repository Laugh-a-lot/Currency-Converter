import React from 'react'

function CurrencySelector(props) {
    
    return (
        <div>
            <select className="form-select" aria-label="Default select example" onChange={props.setbase}>
            <option defaultValue="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
            <option value="JPY">EUR</option>
            <option value="BRL">BRL</option>
                <option value="CAD">CAD</option>
                </select>
        </div>
    )
}

export default CurrencySelector
