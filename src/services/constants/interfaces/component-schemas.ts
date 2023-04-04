import { EventHandler } from "react";

export interface IsinButton {
    action?: EventHandler<any>;
    children: any;
    style?: object;
    className?: string;
    size?: 'small' | 'mid' | 'big';
    tint?: 'red' | 'blue';
}