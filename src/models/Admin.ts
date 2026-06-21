import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, default: "Admin" },
  },
  { timestamps: true }
);

export type AdminType = InferSchemaType<typeof adminSchema>;

export const Admin = (models.Admin as Model<AdminType>) || model<AdminType>("Admin", adminSchema);
