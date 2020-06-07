import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <h1>Bands Added:</h1>
        <ul>
          {this.props.bands.map((band, idx) => {
            return <li key={idx}>{band.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

export default connect(mapStateToProps, {addBand})(BandsContainer);
