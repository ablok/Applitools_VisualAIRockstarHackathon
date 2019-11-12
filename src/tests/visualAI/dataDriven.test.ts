import { LoginPage } from "../../pages/LoginPage";
import { AppPage } from "../../pages/AppPage";
import { testData } from "../../helpers/testData";
import { viewportSize } from "../../wdio.conf";

describe("The login page", () => {
    let loginPage: LoginPage;

    beforeEach(() => {
        loginPage = new LoginPage().open();
    });

    [
        { username: "", password: "", error: true },
        { username: testData.username, password: "", error: true },
        { username: "", password: testData.password, error: true },
        { username: testData.username, password: testData.password, error: false }
    ].forEach((item, index) => {
        it(`should show ${item.error ? "an error" : "the app page"} after logging in with username: '${
            item.username
        }' and password: '${item.password}'`, function() {
            loginPage.doLogin(item.username, item.password);
            if (!item.error) new AppPage().getLoggedInUser(); // Wait for next page to load

            browser.call(() => (global as any).eyes.open(browser, "Hackathon", this.test!.fullTitle(), viewportSize));
            browser.call(() => (global as any).eyes.checkWindow(`Logging in result ${index + 1}`));
            browser.call(() => (global as any).eyes.close());
        });
    });
});
