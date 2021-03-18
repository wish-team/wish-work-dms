import React from 'react';
import {RadioButton, GroupRadioButtons} from "./RadioButton";

export default {
    title: "Form/RadioButton",
    component: RadioButton
}

const RadioButtonStory = (args) => <RadioButton {...args}/>;
const RadioButtonGroupStory = (args) => <GroupRadioButtons {...args}/>;

export const SingleRadioButton = RadioButtonStory.bind({});
export const MultipleRadioButtons = RadioButtonGroupStory.bind({});

SingleRadioButton.args = {
    id: "radio_button_1",
    name: "radio-button",
    text: "Single Radio Button",
    onClickReturn: undefined,
};

MultipleRadioButtons.args = {
    number: 3,
    id: [1, 2, 3],
    name: "select",
    text: ["Name One", "Name Two", "Name Three"],
    onClickReturn: [1, 2, 3]
};
