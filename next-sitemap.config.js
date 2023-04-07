/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_ROOT_URL || " ",
  generateRobotsTxt: true, // (optional)
  exclude: ["/admin", "/api"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_ROOT_URL}/server-sitemap-index.xml`, // <==== Add here
    ],
  },
  // ...other options
};
