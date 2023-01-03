// const path = require("path");
const withImages = require("next-images");
module.exports = withImages();

module.exports = withImages({
  images: {
    deviceSizes: [240, 512, 640, 768, 1024, 1280, 1600, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: "imgix",
    path: "",
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});
