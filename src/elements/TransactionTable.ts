import { BaseElement } from "./BaseElement";

export class TransactionTable extends BaseElement {
    clickColumnHeader(name: "status" | "date" | "description" | "category" | "amount"): TransactionTable {
        const header = this.rootElement.$(`#${name}`);
        header.waitForClickable();
        header.click();
        return this;
    }

    /**
     * Returns all textual content of the entire table in a 2 dimensional array.
     * Amounts are parsed to numbers.
     */
    getTableData(): [][] {
        const headerIds = this.rootElement.$$("thead > tr > th").map(nameCell => nameCell.getText());
        const rows = this.rootElement.$$("tbody > tr");
        const tableData: any[] = [];

        rows.forEach(row => {
            const rowData: (string | number)[] = [];

            const cells = row.$$("td");
            for (let i = 0; i < headerIds.length; i++) {
                if (headerIds[i].toLowerCase() === "amount") {
                    const splitText = cells[i].getText().split(" ");
                    const number = Number(splitText[1].replace(",", ""));
                    if (splitText[0] === "-") {
                        rowData.push(-Math.abs(number));
                    } else {
                        rowData.push(number);
                    }
                } else {
                    rowData.push(cells[i].getText());
                }
            }

            tableData.push(rowData);
        });

        return tableData;
    }
}
