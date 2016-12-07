import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from '../displays/Board'
import { connect } from 'react-redux';

class CurrentBoard extends Component {
  render() {
  	const height = this.props.height
  	const width = this.props.width
  	console.log(height, width)
    return (
      <div>
        <Board height={height} width={width} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(CurrentBoard);
