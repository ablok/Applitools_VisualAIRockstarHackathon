import { Target } from "@applitools/eyes-webdriverio";
import { ChartPage } from "../../pages/ChartPage";
import { viewportSize } from "../../wdio.conf";

describe("The chart page", () => {
    it("should show the correct graphs", function() {
        const chartPage = new ChartPage().open();

        browser.call(() => (global as any).eyes.open(browser, "Hackathon", this.test!.fullTitle(), viewportSize));
        browser.call(() => (global as any).eyes.check(`Chart page for 2017 and 2018`, Target.window().fully()));

        chartPage.clickShowDataForNextYear();

        browser.call(() => (global as any).eyes.check(`Chart page for 2017, 2018 and 2019`, Target.window().fully()));
        browser.call(() => (global as any).eyes.close());
    });
});
