export class TransactionModel {
   transactionFullDtoId?: number;
   date?: Date;
   recipient!: number;
    sender!: number;
    amount!: number;
    description?: string;

}
