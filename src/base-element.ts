import { LitElement } from "lit";

type Maybe<T> = null | undefined | T
export class BaseElement extends LitElement {
  static baseName = ""
  static define (name?: Maybe<string>, ctor?: Maybe<CustomElementConstructor>, options?: ElementDefinitionOptions | undefined) {
    if (!name) name = this.baseName
    if (!ctor) ctor = this

    if (!window.customElements.get(name)) {
      window.customElements.define(name, ctor, options)
    }
  }
}
