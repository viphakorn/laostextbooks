/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // loader: "custom",
    // loaderFile: "./src/app/image.ts",
    // imageSizes: [128, 256],
    // deviceSizes: [640, 750, 828, 1080, 1200],
    // formats: ["image/avif", "image/webp"],
  },
  // transpilePackages: ["next-image-export-optimizer"],
  // env: {
  //   nextImageExportOptimizer_imageFolderPath: "public/images",
  //   nextImageExportOptimizer_exportFolderPath: "dist",
  //   nextImageExportOptimizer_quality: 75,
  //   nextImageExportOptimizer_storePicturesInWEBP: true,
  //   nextImageExportOptimizer_exportFolderName: "images",

  //   // If you do not want to use blurry placeholder images, then you can set
  //   // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
  //   // `placeholder="empty"` to all <Image> components.
  //   nextImageExportOptimizer_generateAndUseBlurImages: true,
  // },
}

module.exports = nextConfig
