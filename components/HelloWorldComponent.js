import React, { PropTypes } from 'react';

export default function HelloWorldComponent(props) {
    return (
        <div>
            Hello World, {props.message}
        </div>
    );
}

HelloWorldComponent.propTypes = {
    message: PropTypes.string
};

HelloWorldComponent.defaultProps = {
    message: 'flyingant'
};