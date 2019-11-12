import { BaseElement } from "./BaseElement";

export class FormGroup extends BaseElement {
    getLabel(): WebdriverIO.Element {
        return this.rootElement.$("label");
    }

    getInput(): WebdriverIO.Element {
        return this.rootElement.$("input");
    }

    getIcon(): WebdriverIO.Element {
        return this.rootElement.$("div");
    }
}
