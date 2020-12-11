import { Button } from '@material-ui/core';
import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';


function Subtotal() {

    const [ {basket}, dispatch] = useStateValue();

    return (
        <div className="Subtotal">
        <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ( {basket?.length} items) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </div>  
            )}
            decimalScale ={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeprator={true}
            prefix={"$"}
        />
            <Button clas>Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal
