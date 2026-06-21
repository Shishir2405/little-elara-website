import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const otpSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    codeHash: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    attempts: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Auto-delete expired OTPs.
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export type OtpType = InferSchemaType<typeof otpSchema>;

export const Otp = (models.Otp as Model<OtpType>) || model<OtpType>("Otp", otpSchema);
