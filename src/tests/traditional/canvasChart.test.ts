import { expect } from "chai";
import { ChartPage } from "../../pages/ChartPage";

/**
 * We can't really test the actual chart since it is a canvas element.
 * So I decided to at least validate the data that is driving the chart.
 * Which seems good enough to find the differences between V1 and V2.
 */
describe("The chart page", () => {
    let chartPage: ChartPage;

    beforeEach(() => {
        chartPage = new ChartPage().open();
    });

    it("should have the correct data for 2017 and 2018", () => {
        expect(chartPage.getChart().isDisplayed()).to.equal(true, "Chart not displayed");
        expect(chartPage.getChartData()).to.deep.equal([
            {
                label: "2017",
                data: [10, 20, 30, 40, 50, 60, 70]
            },
            {
                label: "2018",
                data: [8, 9, -10, 10, 40, 60, 40]
            }
        ]);
    });

    it("should add the correct data for 2019", () => {
        chartPage.clickShowDataForNextYear();

        expect(chartPage.getChart().isDisplayed()).to.equal(true, "Chart not displayed");
        expect(chartPage.clickShowDataForNextYear().getChartData()).to.deep.include({
            label: 2019,
            data: [5, 10, 15, 20, 25, 30, 35]
        });
    });
});
