import React, { Component } from 'react';

class BitCoinPrice extends Component {
    state = {  }

    _renderCurrencies () {
        const { bpi } = this.props
        
        return Object.keys(bpi).map(currency => (
            <div key={currency}>
                1BTC is {bpi[currency].rate}
                <span>{bpi[currency].code}</span>
            </div>
        ))
    }

    render() { 
        return ( 
            <div>
                <h4>Bitcoin Price Index</h4>
                {this._renderCurrencies()}
            </div>
         );
    }
}
 
export default BitCoinPrice;