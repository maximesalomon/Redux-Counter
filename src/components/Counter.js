import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { bindActionCreators } from 'redux';

class Counter extends Component {
    incrementIfOdd = () => {
        if(this.props.count %2) {
            return this.props.increment();
        }
    };

    incrementAsync = () => {
        setTimeout(() => {
            return this.props.increment();
        }, 1000);
    };

    render() {
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => this.props.increment() }>
                    +
                </button>
                <button onClick={() => this.props.decrement() }>
                    -
                </button>
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button> 
            </p>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      increment,
      decrement,
    }, dispatch);
  }

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
