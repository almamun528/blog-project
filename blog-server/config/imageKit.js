import ImageKit from "imagekit";

var imagekit = new ImageKit({
  publicKey: process.env.image_kit_public_key,
  privateKey: process.env.image_kit_private_key,
  urlEndpoint: process.env.image_kit_URL_endPoint,
});

export default imagekit;