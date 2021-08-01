import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './input.scss';


interface Props {
    id: number,
    name: string,
    size: string,
    label: string,
    validateFunction: object,
    message: string
}

interface PropsParent {
    children: any
}

interface PropsInput {
    state: object,
    setState: object,
    error: object,
    showError: object
}

type obj = {
    value: string;
};

export const sampleValidateFunction = (obj: obj) => {
    if(obj) {
        return obj.value === "error";
    }
    else {
        return true
    }
};

export const Input = ({id, name, size, validateFunction, message, ...props} : Props) => {
    function Parent({children, ...props} : PropsParent) {
        const [state, setState] = useState();
        const [error, showError] = useState(false);
        return <div>{children(state, setState, error, showError)}</div>;
    }

    if (validateFunction !== undefined) {
        return (
            <Parent>
            {(state: object, setState: object, error: boolean, showError:object) => (
        <label
        className={['storybook-label-input', `storybook-label-input--${size}`].join(' ')}>
        {name}
    <input id={id}
        className={['storybook-input', `storybook-input--${size}`].join(' ')}
        {...props} onChange={e => setState({value: e.target.value})}
        onBlur={() => showError(validateFunction(state))}
        onFocus={() => showError(false)}
        />
        {error ? <p className="storybook-input-error">
            {message || "PLEASE PASS ERROR MESSAGE <Input message={message} ..."}</p> : null}
        </label>
        )}
    </Parent>
    )
    } else {
        return (
            <Parent>
            {(state: object, setState: object, error: boolean, showError: object) => (
        <label
        className={['storybook-label-input', `storybook-label-input--${size}`].join(' ')}>
        {name}
    <input id={id}
        className={['storybook-input', `storybook-input--${size}`].join(' ')}
        {...props} onChange={e => setState({value: e.target.value})}
        onFocus={() => showError(false)}
        />
        </label>
    )}
    </Parent>
    )
    }
};

Input.propTypes = {
    /** Label of Input **/
    name: PropTypes.string.isRequired,

    /** ID of Input **/
    id: PropTypes.string.isRequired,

    /** Size of Input **/
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /** Validation Function **/
    validateFunction: PropTypes.func,

    /** Focus of Input **/
    onFocus: PropTypes.func,

    /** Blur of Input **/
    onBlur: PropTypes.func,

    /** On Change Handler **/
    onChange: PropTypes.func
};

Input.defaulProps = {
    size: 'medium',
    validateFunction: undefined
};