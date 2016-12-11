import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from '../displays/Board'
import { connect } from 'react-redux';

class CurrentBoard extends Component {
  render() {
  	const height = this.props.height
  	const width = this.props.width
    const board = this.props.board
    return (
      <div>
        <Board board={board} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(CurrentBoard);
