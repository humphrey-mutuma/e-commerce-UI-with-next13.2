// app/server-sitemap-index.xml/route.ts
import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET(request: Request) {
  //  source urls from server
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapIndex([
    "https://example.com/path-1.xml",
    "https://example.com/path-2.xml",
  ]);
}
