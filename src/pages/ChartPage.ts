import { BasePage } from "./BasePage";
import { getAppVersion } from "../helpers/utils";

export class ChartPage extends BasePage {
    open(): ChartPage {
        browser.url(`/hackathonChart${getAppVersion()}.html`);
        return this;
    }

    clickShowDataForNextYear(): ChartPage {
        const button = $("#addDataset");
        button.waitForClickable();
        button.click();
        return this;
    }

    getChart(): WebdriverIO.Element {
        return $("#canvas");
    }

    getChartData(): ChartData[] {
        return browser.execute(() => {
            /**
             * Just returning the complete dataset throws a weird circular dependency error,
             * so I map the array and only return the years and barchart data values
             */
            return (window as any).window.barChartData.datasets.map((dataset: ChartData) => {
                return { label: dataset.label, data: dataset.data };
            });
        });
    }
}

interface ChartData {
    label: string | number;
    data: number[];
}
