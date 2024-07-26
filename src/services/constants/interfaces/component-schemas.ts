import { EventHandler } from "react";
import { JsxChild, JsxElement, JsxText } from "typescript";

export interface IsinButton {
    action?: EventHandler<any>;
    children: any;
    style?: object;
    className?: string;
    size?: 'slim' | 'small' | 'slim-mid' | 'mid' | 'big';
    tint?: 'red' | 'blue';
    fill?: boolean
    disabled?: boolean
}

export interface IseparationComponent {
    className?: string;
    stickTop?: boolean;
    stickBottom?: boolean;
}

export interface ItopicComponent {
    className?: string;
    max?: number;
    children: string;
    subChild?: string;
    breakSubChild?: boolean;
}

export interface IAppModalProps {
    children: any;
    onCloseModal: Function;
    styleClass?: string;
}

export interface IsinCard {
    children: any;
    className?: string;
    width?: number;
    noShadow?: boolean;
    dark?: boolean;
}

export interface IclassProp {
    className?: string;
}
