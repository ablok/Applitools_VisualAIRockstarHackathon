import { BasePage } from "./BasePage";
import { ChartPage } from "./ChartPage";
import { getAppVersion } from "../helpers/utils";

export class AppPage extends BasePage {
    open(showAds = false): AppPage {
        browser.url(`/hackathonApp${getAppVersion()}.html?showAd=${showAds}`);
        return this;
    }

    clickCompareExpenses(): ChartPage {
        const button = $("#showExpensesChart");
        button.waitForClickable();
        button.click();
        return new ChartPage();
    }

    getFlashSaleAd1Img(): WebdriverIO.Element {
        return $("#flashSale > img");
    }

    getFlashSaleAd2Img(): WebdriverIO.Element {
        return $("#flashSale2 > img");
    }
}
