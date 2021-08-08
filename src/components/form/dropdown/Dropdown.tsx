import React from 'react'
import {useState} from 'react'
import Select, {ActionMeta, ValueType} from 'react-select';

interface Option {
    value: string,
    label: string
}

const options: Option[] = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

export const DropDown = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div>
            <Select
                value={selectedOption}
                onChange={() => setSelectedOption(selectedOption)}
                options={options}
            />
        </div>
    )
};
