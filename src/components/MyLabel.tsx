import React from 'react'
import "./styles/mylabel.css"

export interface PropsMyLabel{
    /**
    * label: Text to insert into the label 
    */
    label:string;
    /**
    * size: You can choose within "normal", "h1", "h2", "h3" to change the label size
    */
    size: "normal"|"h1"|"h2"|"h3";
    /**
    * color: You can choose within "primary", "secondary", "tertiary" to change the label color
    */
   color?:"primary"|"secondary"|"tertiary",
   /**
    * allCaps: Boolean attr to convert the label text to upper case
    */
    allCaps?:boolean
    /**
    * customFontColor: You can pass any color to change the label background color
    */
    customFontColor?: string
}

export const MyLabel = ({label="Custom Label", size = "normal", color = "primary", allCaps = false, customFontColor}: PropsMyLabel) => {
  
  return (
    <span 
      className={`${size} ${color && "text-"+color} ${allCaps && "CAP"}`}
      style={{
        color:customFontColor
      }}
      >
        {label}
    </span>
  )
}
