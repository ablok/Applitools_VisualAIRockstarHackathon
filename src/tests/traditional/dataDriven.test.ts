import { expect } from "chai";
import { LoginPage } from "../../pages/LoginPage";
import { AppPage } from "../../pages/AppPage";
import { testData } from "../../helpers/testData";

describe("The login page", () => {
    let loginPage: LoginPage;

    beforeEach(() => {
        loginPage = new LoginPage().open();
    });

    [
        { username: "", password: "", error: "Both Username and Password must be present" },
        { username: testData.username, password: "", error: "Password must be present" },
        { username: "", password: testData.password, error: "Username must be present" },
        { username: testData.username, password: testData.password, error: null }
    ].forEach(item => {
        it(`should show ${item.error ? `'${item.error}'` : "the app page"} after logging in with username: '${
            item.username
        }' and password: '${item.password}'`, () => {
            loginPage.doLogin(item.username, item.password);
            if (item.error) {
                const alert = loginPage.getAlert();
                const header = loginPage.getHeader();
                expect(alert.isDisplayed()).to.equal(true, "Error message not displayed");
                expect(alert.getText().trim()).to.equal(item.error);
                expect(alert.getSize().width).to.equal(header.getSize().width, "Erorr message has incorrect width"); // Added to get V2 difference.
            } else {
                expect(new AppPage().getLoggedInUser()).to.equal("Jack Gomez");
            }
        });
    });
});
