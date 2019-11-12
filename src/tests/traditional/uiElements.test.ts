import { expect } from "chai";
import { LoginPage } from "../../pages/LoginPage";
import { FormGroup } from "../../elements/FormGroup";
import { RadioGroup } from "../../elements/RadioGroup";
import { getImageAsBase64 } from "../../helpers/utils";

/**
 * To validate the logo's on the login page are correct I compare the base64 string of the logo
 * with that from an image that I saved before. This validates that the image is actually the
 * same image and not just another image with the same name.
 *
 * The assignment states that we should only test the looks of the login page, so I ignored functional bugs like:
 * - Clicking on the logo at the top of the login page leads to another login page with different looks and functionallity.
 * - The social media images are wrapped in anchor elements in V1, but in span elements in V2.
 * - Remember me button not working.
 */
describe("The login page", () => {
    let loginPage: LoginPage;

    before(() => {
        loginPage = new LoginPage().open();
    });

    it("should display the text 'Login Form'", () => {
        const header = loginPage.getHeader();
        expect(header.isDisplayed()).to.equal(true, "Header text not displayed.");
        expect(header.getText().trim()).to.equal("Login Form");
    });

    it("should display the correct logo", () => {
        const logo = loginPage.getLogo();
        expect(logo.isDisplayed()).to.equal(true, "Logo not displayed");
        const onlineImageAsBase64 = getImageAsBase64(logo.getAttribute("src"));
        const localImageAsBase64 = getImageAsBase64("./images/logo.png");
        expect(onlineImageAsBase64).to.equal(localImageAsBase64, "Actual image does not match expected image");
    });

    it("should display a button with the text 'Log In'", () => {
        const loginButton = loginPage.getLoginButton();
        expect(loginButton.isDisplayed()).to.equal(true, "Log In button not displayed");
        expect(loginButton.getText()).to.equal("Log In");
    });

    ["facebook", "twitter", "linkedin"].forEach((socialName: string) => {
        it(`should display the correct ${socialName} image`, () => {
            const socialImage = loginPage.getSocialImg(socialName);
            expect(socialImage.isDisplayed()).to.equal(true, "Image not displayed");

            const onlineImageAsBase64 = getImageAsBase64(socialImage.getAttribute("src"));
            const webImageAsBase64 = getImageAsBase64(`./images/${socialName}.png`);
            expect(onlineImageAsBase64).to.equal(webImageAsBase64, "Actual image does not match expected image");
        });
    });

    describe(`should have a username formgroup which`, () => {
        let usernameFormgroup: FormGroup;

        before(() => {
            usernameFormgroup = loginPage.getUsernameFormgroup();
        });

        it(`should display a label with the text 'Username'`, () => {
            const label = usernameFormgroup.getLabel();
            expect(label.isDisplayed()).to.equal(true, "Label not displayed");
            expect(label.getText()).to.equal("Username");
        });

        it(`should display an input with 'Enter your username' as placeholder text`, () => {
            const input = usernameFormgroup.getInput();
            expect(input.isDisplayed()).to.equal(true, "Input not displayed");
            expect(input.getAttribute("placeholder")).to.equal("Enter your username");
        });

        it("should display the correct icon", () => {
            const icon = usernameFormgroup.getIcon();
            expect(icon.isDisplayed()).to.equal(true, "Icon not displayed");
            expect(icon.getAttribute("class")).to.equal(`pre-icon os-icon os-icon-user-male-circle`);
        });
    });

    describe(`should have a password formgroup which`, () => {
        let usernameFormgroup: FormGroup;

        before(() => {
            usernameFormgroup = loginPage.getPasswordFormgroup();
        });

        it(`should display a label with the text 'Password'`, () => {
            const label = usernameFormgroup.getLabel();
            expect(label.isDisplayed()).to.equal(true, "Label not displayed");
            expect(label.getText()).to.equal("Password");
        });

        it(`should display an input with 'Enter your password' as placeholder text`, () => {
            const input = usernameFormgroup.getInput();
            expect(input.isDisplayed()).to.equal(true, "Input not displayed");
            expect(input.getAttribute("placeholder")).to.equal("Enter your password");
        });

        it("should display the correct icon", () => {
            const icon = usernameFormgroup.getIcon();
            expect(icon.isDisplayed()).to.equal(true, "Icon not displayed");
            expect(icon.getAttribute("class")).to.equal(`pre-icon os-icon os-icon-fingerprint`);
        });
    });

    describe("should have a remember me formgroup which", () => {
        let radioGroup: RadioGroup;

        before(() => {
            radioGroup = loginPage.getRememberMeRadioGroup();
        });

        it("should display the checkbox", () => {
            const checkbox = radioGroup.getCheckbox();
            expect(checkbox.isSelected()).to.equal(false, "Checkbox was enabled");
            expect(checkbox.isDisplayed()).to.equal(true, "Checkbox not displayed");
        });

        it("should display a label with the text 'Remember Me'", () => {
            const label = radioGroup.getLabel();
            expect(label.isDisplayed()).to.equal(true, "Label not displayed");
            expect(label.getText()).to.equal("Remember Me");
        });

        // Added to get V2 difference
        it("should have the correct size", () => {
            expect(radioGroup.rootElement.getSize()).to.deep.equal({ width: 113, height: 21 });
        });
    });
});
