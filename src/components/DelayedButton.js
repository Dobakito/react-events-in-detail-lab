import React, { Component } from 'react';

class DelayedButton extends Component {

  handleOnClick = (event) => {
    event.persist()
    window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
  }

  render() {
    return (
      <button
        onClick={this.handleOnClick}
      ></button>
    );
  }

}

export default DelayedButton;
