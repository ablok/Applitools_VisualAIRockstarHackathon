import { TransactionTable } from "../elements/TransactionTable";

export abstract class BasePage {
    getRecentTransactionsTable(): TransactionTable {
        return new TransactionTable($("#transactionsTable"));
    }

    getLoggedInUser(): string {
        return $(".logged-user-name")
            .getText()
            .trim();
    }
}
