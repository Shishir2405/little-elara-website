import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const submissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    childAge: { type: String, trim: true, default: "" },
    program: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "" },
    status: { type: String, enum: ["new", "contacted", "archived"], default: "new" },
  },
  { timestamps: true }
);

export type SubmissionType = InferSchemaType<typeof submissionSchema>;

export const Submission =
  (models.Submission as Model<SubmissionType>) ||
  model<SubmissionType>("Submission", submissionSchema);
