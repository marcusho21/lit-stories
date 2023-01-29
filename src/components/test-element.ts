import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-element')
export class TestElement extends LitElement {
  render() {
    return html`
      <p>Hello I'm second element</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'test-element': TestElement;
  }
}
