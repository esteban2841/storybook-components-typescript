/// <reference types="react" />
import "./styles/mylabel.css";
export interface PropsMyLabel {
    /**
    * label: Text to insert into the label
    */
    label: string;
    /**
    * size: You can choose within "normal", "h1", "h2", "h3" to change the label size
    */
    size: "normal" | "h1" | "h2" | "h3";
    /**
    * color: You can choose within "primary", "secondary", "tertiary" to change the label color
    */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * allCaps: Boolean attr to convert the label text to upper case
     */
    allCaps?: boolean;
    /**
    * customFontColor: You can pass any color to change the label color
    */
    customFontColor?: string;
    /**
    * customFontColor: You can pass any color to change the label background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, customFontColor, backgroundColor }: PropsMyLabel) => JSX.Element;
