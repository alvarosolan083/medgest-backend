// src/billing/billing.dto.ts
export class CreateBillingDto {
  amount: number;
  patientId: number;
}

export class UpdateBillingDto {
  amount?: number;
}
