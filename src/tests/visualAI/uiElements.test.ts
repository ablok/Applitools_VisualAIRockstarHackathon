import { LoginPage } from "../../pages/LoginPage";
import { viewportSize } from "../../wdio.conf";

describe("The login page", () => {
    it("should be visually perfect", function() {
        new LoginPage().open();

        browser.call(() => (global as any).eyes.open(browser, "Hackathon", this.test!.fullTitle(), viewportSize));
        browser.call(() => (global as any).eyes.checkWindow("Login page"));
        browser.call(() => (global as any).eyes.close());
    });
});
