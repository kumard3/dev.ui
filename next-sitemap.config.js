/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.devui.in",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`https://www.devui.in/sitemap.xml`],
  },
};
