/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CvbnNavBar {
    }
    interface CvbnNavItem {
        "href": string;
        "icon": string;
        "isActive": boolean;
        "label": string;
    }
}
declare global {
    interface HTMLCvbnNavBarElement extends Components.CvbnNavBar, HTMLStencilElement {
    }
    var HTMLCvbnNavBarElement: {
        prototype: HTMLCvbnNavBarElement;
        new (): HTMLCvbnNavBarElement;
    };
    interface HTMLCvbnNavItemElement extends Components.CvbnNavItem, HTMLStencilElement {
    }
    var HTMLCvbnNavItemElement: {
        prototype: HTMLCvbnNavItemElement;
        new (): HTMLCvbnNavItemElement;
    };
    interface HTMLElementTagNameMap {
        "cvbn-nav-bar": HTMLCvbnNavBarElement;
        "cvbn-nav-item": HTMLCvbnNavItemElement;
    }
}
declare namespace LocalJSX {
    interface CvbnNavBar {
    }
    interface CvbnNavItem {
        "href"?: string;
        "icon"?: string;
        "isActive"?: boolean;
        "label"?: string;
    }
    interface IntrinsicElements {
        "cvbn-nav-bar": CvbnNavBar;
        "cvbn-nav-item": CvbnNavItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cvbn-nav-bar": LocalJSX.CvbnNavBar & JSXBase.HTMLAttributes<HTMLCvbnNavBarElement>;
            "cvbn-nav-item": LocalJSX.CvbnNavItem & JSXBase.HTMLAttributes<HTMLCvbnNavItemElement>;
        }
    }
}
