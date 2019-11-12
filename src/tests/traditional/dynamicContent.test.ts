import { expect } from "chai";
import { AppPage } from "../../pages/AppPage";

describe("The app page", () => {
    let appPage: AppPage;

    before(() => {
        appPage = new AppPage().open(true);
    });

    it("should have flash sale ad nr. 1", () => {
        const flashSaleImage = appPage.getFlashSaleAd1Img();
        expect(flashSaleImage.isDisplayed()).to.equal(true, "Flash sale ad1 not displayed");
    });

    it("should have flash sale ad nr. 2", () => {
        const flashSaleImage = appPage.getFlashSaleAd2Img();

        expect(flashSaleImage.isDisplayed()).to.equal(true, "Flash sale ad2 not displayed");
    });
});
