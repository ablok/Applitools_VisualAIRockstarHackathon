import { expect } from "chai";
import { AppPage } from "../../pages/AppPage";
import { sortTableByColumnIndex } from "../../helpers/utils";

describe("The app page", () => {
    it("should have a table that is sortable by amount", () => {
        const transactionsTable = new AppPage().open().getRecentTransactionsTable();

        const originalTableData = transactionsTable.getTableData();
        const sortedTableData = sortTableByColumnIndex(originalTableData, 4, "ASC");

        transactionsTable.clickColumnHeader("amount");
        const newTableData = transactionsTable.getTableData();

        expect(newTableData).to.deep.equal(sortedTableData);
    });
});
