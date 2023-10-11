/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["4kwallpapers.com"],
  },
  env: {
    mongodburl: "mongodb+srv://lordskasdo:Albosaty123@school.dqxwdmb.mongodb.net/"
  }
};

module.exports = nextConfig;
