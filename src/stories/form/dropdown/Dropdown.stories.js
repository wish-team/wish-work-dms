import React from 'react';
import {DropDown} from "../../../components/form/dropdown/Dropdown";
import {Input} from "../../../components/form/input/Input";

export default {
    title: "Form/Drop Down",
    component: DropDown
}

const DropDownStory = (args) => <DropDown {...args} />;


export const DropDownField = DropDownStory.bind({});

DropDownField.args ={

};