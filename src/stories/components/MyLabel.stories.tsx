import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default{
    title:"UI/MyLabel",
    component: MyLabel,
    argTypes:{
        color:{control:"select", options:["primary","secondary","tertiary"]},
        customFontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args)=> <MyLabel {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    size:"normal",
    allCaps : false
}
export const AllCaps = Template.bind({})
AllCaps.args = {
    size:"normal",
    allCaps : true
}
export const Secondary = Template.bind({})
Secondary.args = {
    size:"normal",
    color:"secondary"
}
export const Tertiary = Template.bind({})
Tertiary.args = {
    size:"normal",
    color:"tertiary"
}
export const CustomColor = Template.bind({})
CustomColor.args = {
    size:"normal",
    customFontColor:"#d4e92c"
}
export const CustomBgColor = Template.bind({})
CustomBgColor.args = {
    size:"normal",
    backgroundColor:"black",
    customFontColor:"white"
}