export class CreatePaymentDto {
  paymentData: PaymentData;
  userid: string;
  storeid: string;
}

export class PaymentData {
  amount: number;
  url: string;
}
