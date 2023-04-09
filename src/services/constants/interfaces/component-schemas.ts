import { EventHandler } from "react";
import { JsxChild, JsxElement, JsxText } from "typescript";

export interface IsinButton {
    action?: EventHandler<any>;
    children: any;
    style?: object;
    className?: string;
    size?: 'small' | 'mid' | 'big';
    tint?: 'red' | 'blue';
    fill?: boolean
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
}

export interface IAppModalProps {
    children: any;
    onCloseModal: Function;
    styleClass?: string;
}

export interface IclassProp {
    className?: string;
}
