import { LitElement } from 'lit';
export declare class TestElement extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'test-element': TestElement;
    }
}
