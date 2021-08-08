import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';


interface IError {

}

interface Props {
    inputId: number,
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

type errorValue = {
    value: string;
};

export const sampleValidateFunction = (obj: errorValue) => {
    if(obj) {
        return obj.value === "error";
    }
    else {
        return true
    }
};

export const Input = ({inputId, name, size, validateFunction, message, ...props} : Props) => {
    function Parent({children, ...props} : PropsParent) {
        const [state, setState] = useState<string>();
        const [error, showError] = useState<boolean>(false);
        return <div>{children(state, setState, error, showError)}</div>;
    }

    if (validateFunction !== undefined) {
        // @ts-ignore
        // @ts-ignore
        return (
            <Parent>
            {(state: string, setState: object, error: boolean, showError: object) => (
        <label
        className={[styles['storybook-label-input'], styles[`storybook-label-input--${size}`]].join(' ')}>
        {name}
            {/*// @ts-ignore*/}
            <input id={inputId}
        // @ts-ignore
           className={[styles['storybook-input'], styles[`storybook-input--${size}`]].join(' ')}
        // @ts-ignore
           {...props} onChange={e => setState({value: e.target.value})}
        // @ts-ignore
           onBlur={() => showError(validateFunction(state))}
        // @ts-ignore
           onFocus={() => showError(false)}
        />
        {error ? <p className={styles["storybook-input-error"]}>
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
        className={[styles['storybook-label-input'], styles[`storybook-label-input--${size}`]].join(' ')}>
        {name}
            {/*// @ts-ignore*/}
            <input id={inputId}
        className={[styles['storybook-input'], styles[`storybook-input--${size}`]].join(' ')}
                // @ts-ignore
                   {...props} onChange={e => setState({value: e.target.value})}
                // @ts-ignore
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