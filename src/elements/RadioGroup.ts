import { BaseElement } from "./BaseElement";

export class RadioGroup extends BaseElement {
    rootElement: any;
    getLabel(): WebdriverIO.Element {
        return this.rootElement;
    }

    getCheckbox(): WebdriverIO.Element {
        return this.rootElement.$("input");
    }
}
