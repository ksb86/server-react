import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    updateAppData
} from '../../actions';

import {
    Connect
} from 'react-redux';

import '../less/Counter.less';

class Counter extends React.Component {
    upCounter = () => {
        this.props.updateAppData({
            counter: this.props.counter + 1
        });
    };
    render() {
        return (
            <div className="counter">
                Counter: ({this.props.counter}) <button onClick={this.upCounter}>Up it!</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = {
    updateAppData
};

Counter.propTypes = {
    counter: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
