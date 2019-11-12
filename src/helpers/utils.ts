// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require("fetch-base64");

export function getAppVersion(): string {
    const version = process.env.APP_VERSION;
    if (version && version === "2") {
        return "V2";
    }
    return "";
}

export function getImageAsBase64(location: string): string {
    return browser.call(async () => await fetch.auto(location)[0]);
}

/**
 * Sorts a 2 dimensional array (table) by specific column
 * @param table 2 dimensional table to sort
 * @param index Index (of column) to sort on
 * @param order Sorting order, ascending or descending
 */
export function sortTableByColumnIndex(table: [][], index: number, order: "ASC" | "DESC"): [][] {
    return table.sort((a, b) => {
        if (a[index] === b[index]) {
            return 0;
        } else {
            if (order === "ASC") {
                return a[index] < b[index] ? -1 : 1;
            } else {
                return a[index] < b[index] ? 1 : -1;
            }
        }
    });
}

export function getFullTestName(context: Mocha.Context): string {
    if (context && context.test && context.test.fullTitle()) {
        return context.test.fullTitle();
    } else {
        throw new Error("Failed to determine test name.");
    }
}
