import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const gallerySchema = new Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, default: "" },
    title: { type: String, default: "", trim: true },
    caption: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type GalleryItemType = InferSchemaType<typeof gallerySchema>;

export const GalleryItem =
  (models.GalleryItem as Model<GalleryItemType>) ||
  model<GalleryItemType>("GalleryItem", gallerySchema);
