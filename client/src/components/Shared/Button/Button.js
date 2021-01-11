import React from 'react';
import './Button.scss';
function Button(props) {

    const { text, buttonClass, ...button } = props;


    return (
        <button className={`button button--${buttonClass}`} {...button}>
            {props.children}
        </button>
    );
}

export default Button;