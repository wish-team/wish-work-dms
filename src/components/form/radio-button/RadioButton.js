import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './radio-button.scss';

export const RadioButton = ({onClickReturn, onClick, text, name, id}) => {
    return (
        <div>
            <label className="duration-content" onClick={() => {
                onClick(onClickReturn)
            }}>
                <input id={id} type="radio" name={name} className="radio-input"/>
                <div className="radio-content"/>
                {text}
            </label>
        </div>
    )
};

export const GroupRadioButtons = ({number, id, onClick, onClickReturn, text, name}) => {
    let renderer = [];
    for(let i = 0; i < number; i++) {
        renderer.push(
            <div>
                <label className="duration-content" onClick={() => {
                    onClick(onClickReturn[i])
                }}>
                    <input id={id[i]} type="radio" name={name} className="radio-input"/>
                    <div className="radio-content"/>
                    {text[i]}
                </label>
            </div>
        )
    }
    return renderer
};

RadioButton.propTypes = {
    /** Label of Input **/
    id: PropTypes.string.isRequired,

    /** Label of Input **/
    onClick: PropTypes.func,

    /** Label of Input **/
    text: PropTypes.string.isRequired,

    /** Label of Input **/
    onClickReturn: PropTypes.string,

    /** Label of Input **/
    name: PropTypes.string
};