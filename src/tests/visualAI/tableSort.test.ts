import { AppPage } from "../../pages/AppPage";
import { viewportSize } from "../../wdio.conf";

describe("The app page", () => {
    it("should have a table that is sortable by amount", function() {
        const transactionsTable = new AppPage().open().getRecentTransactionsTable();
        transactionsTable.clickColumnHeader("amount");

        browser.call(() => (global as any).eyes.open(browser, "Hackathon", this.test!.fullTitle(), viewportSize));
        browser.call(() => (global as any).eyes.checkWindow("Table page"));
        browser.call(() => (global as any).eyes.close());
    });
});
