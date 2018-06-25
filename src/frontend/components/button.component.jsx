import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <button type={this.props.buttonType}
                       className={this.props.buttonClasses}
                       style={this.props.buttonStyle}
                       data-toggle={this.props.dataToggle}
                       data-target={this.props.dataTarget}
                       data-dismiss={this.props.dataDismiss}
                       onClick={this.props.buttonClickEvent}
                >
                    {this.props.buttonName} {this.props.buttonIcon}
                </button>;
    }
}

// set default props
Button.defaultProps = {
    buttonType: 'button'
};

// set property or data types
Button.propTypes = {
    buttonType: PropTypes.string,
    buttonClasses: PropTypes.string,
    buttonStyle: PropTypes.string,
    dataToggle: PropTypes.string,
    dataTarget: PropTypes.string,
    dataDismiss: PropTypes.string,
    buttonClickEvent: PropTypes.func,
    buttonName: PropTypes.string,
};
