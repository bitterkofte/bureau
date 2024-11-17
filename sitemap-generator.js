import { SitemapStream, streamToPromise } from "sitemap";
import { writeFile } from "fs/promises";

// Define your app's routes
const routes = [
  "/",
  "/hakkimizda",
  "/neden-petek-ve-leblebici",
  "/sigorta-hukuku",
  "/hukuki-danismanlik",
  "/iletisim",
  "/onleyici-hukuk-hizmetleri",
  "/uzlastirma-ve-arabuluculuk-hizmetleri",
  "/kvkk-ve-gdpr-hukuki-danismanlik",
];

// (async () => {
//   const sitemap = new SitemapStream({
//     hostname: "https://petekleblebicihukuk.com/",
//   });

//   routes.forEach((route) => sitemap.write({ url: route, changefreq: "daily" }));
//   sitemap.end();

//   const sitemapOutput = await streamToPromise(sitemap);
//   fs.writeFileSync("./public/sitemap.xml", sitemapOutput.toString());
//   console.log("Sitemap created!");
// })();

const generateSitemap = async () => {
  const sitemap = new SitemapStream({
    hostname: "https://petekleblebicihukuk.com/",
  });

  routes.forEach((route) => sitemap.write({ url: route, changefreq: "daily" }));
  sitemap.end();

  try {
    const sitemapOutput = await streamToPromise(sitemap);
    await writeFile("./public/sitemap.xml", sitemapOutput.toString());
    console.log("Sitemap created successfully!");
  } catch (error) {
    console.error("Error creating sitemap:", error);
  }
};

generateSitemap();
