import { ETransactionTypes } from "../enum";

export interface ITransaction {
    type: ETransactionTypes;
    created_at: Date;
    value: number;
}
