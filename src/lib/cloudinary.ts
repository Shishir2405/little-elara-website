import { v2 as cloudinary } from "cloudinary";

let configured = false;
function ensure() {
  if (configured) return;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  configured = true;
}

export function cloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
}

export async function uploadImage(dataUri: string): Promise<{ url: string; publicId: string }> {
  ensure();
  const res = await cloudinary.uploader.upload(dataUri, {
    folder: "little-elara/gallery",
    resource_type: "image",
  });
  return { url: res.secure_url, publicId: res.public_id };
}

export async function deleteImage(publicId: string): Promise<void> {
  ensure();
  await cloudinary.uploader.destroy(publicId);
}
