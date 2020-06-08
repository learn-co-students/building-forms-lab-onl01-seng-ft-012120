import React, { Component } from 'react';


export default class Bands extends Component {


    render() {
        return(
            <div>
                {this.props.bands.map(band => <li>{band.name}</li>)}
            </div>
        )
    }
}