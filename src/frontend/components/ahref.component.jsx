import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ahref extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <a href={this.props.hrefLink}
               className={this.props.hrefClassName}
               data-toggle={this.props.hrefTooltipDataToggle}
               data-placement={this.props.hrefDataPlacement}
               title={this.props.hrefTitle}
            >
                {this.props.hrefName}
            </a>
        );
    }
}

// Specifies the default values for props if not set in parent component:
Ahref.defaultProps = {
    hrefName: 'Set hrefName'
};

Ahref.propTypes = {
    hrefLink: PropTypes.string,
    hrefClassName: PropTypes.string,
    hrefTooltipDataToggle: PropTypes.string,
    hrefDataPlacement: PropTypes.string,
    hrefTitle: PropTypes.string,
    hrefName: PropTypes.string
};
