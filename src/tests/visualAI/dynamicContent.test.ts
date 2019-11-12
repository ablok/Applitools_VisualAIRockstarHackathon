import { Target } from "@applitools/eyes-webdriverio";
import { AppPage } from "../../pages/AppPage";
import { viewportSize } from "../../wdio.conf";

describe("The app page", () => {
    it("should have the correct flash sale ads", function() {
        new AppPage().open(true);
        const flashSale1 = new AppPage().getFlashSaleAd1Img();
        const flashSale2 = new AppPage().getFlashSaleAd2Img();

        browser.call(() => (global as any).eyes.open(browser, "Hackathon", this.test!.fullTitle(), viewportSize));
        browser.call(() =>
            (global as any).eyes.check("App page with ads", Target.window().layout([flashSale1, flashSale2]))
        );
        browser.call(() => (global as any).eyes.close());
    });
});
