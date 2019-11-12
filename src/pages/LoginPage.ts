import { FormGroup } from "../elements/FormGroup";
import { RadioGroup } from "../elements/RadioGroup";
import { getAppVersion } from "../helpers/utils";

export class LoginPage {
    open(): LoginPage {
        browser.url(`/hackathon${getAppVersion()}.html`);
        return this;
    }

    getLogo(): WebdriverIO.Element {
        return $(".logo-w img");
    }

    getHeader(): WebdriverIO.Element {
        return $(".auth-header");
    }

    getUsernameFormgroup(): FormGroup {
        return new FormGroup($("//input[@id='username']/.."));
    }

    getPasswordFormgroup(): FormGroup {
        return new FormGroup($("//input[@id='password']/.."));
    }

    getRememberMeRadioGroup(): RadioGroup {
        return new RadioGroup($(".form-check-label"));
    }

    getSocialImg(socialName: string): WebdriverIO.Element {
        return $(`//img[@src='img/social-icons/${socialName}.png']`);
    }

    getLoginButton(): WebdriverIO.Element {
        return $("#log-in");
    }

    doLogin(username?: string, password?: string): void {
        if (username) {
            this.getUsernameFormgroup()
                .getInput()
                .setValue(username);
        }
        if (password) {
            this.getPasswordFormgroup()
                .getInput()
                .setValue(password);
        }
        const button = this.getLoginButton();
        button.waitForClickable();
        button.click();
    }

    getAlert(): WebdriverIO.Element {
        return $(".alert-warning");
    }
}
