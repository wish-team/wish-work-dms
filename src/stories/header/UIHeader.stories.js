import React, { Component } from 'react'
import { UIHeader } from '../../components/header/UIHeader'
import icon from "../../components/assets/icon.png"

export default {
    title: "UI Header/ General",
    component: UIHeader
}

const UIHeaderStory = (args) => <UIHeader {...args}/>

export const Header = UIHeaderStory.bind({})

Header.args = {
    logo: icon,
    items: [{label: 'hi', href: 'https://wishwork.org'}, {label: 'hello', href: 'https://wishwork.org'}]
}