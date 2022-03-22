export class TransactionModel {
   id!: number;
   date!: Date;
   recipient!: number;
   sender!: number;
   amount!: number;
   description?: string;
}
