import { siteConfig } from "@/config";
import { getSortedPosts } from "@utils/content-utils";
import { url } from "@utils/url-utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const posts = await getSortedPosts();

	// 静态页面列表
	const pages = [
		"", // 首页
		"archive/", // 归档
		"links/", // 链接
		"about/", // 关于
		"rss/", // RSS 说明页
		"sitemap/", // Sitemap 说明页
	];

	// 根据配置动态添加页面
	if (siteConfig.pages.guestbook) {
		pages.push("guestbook/");
	}
	if (siteConfig.pages.bangumi) {
		pages.push("bangumi/");
	}
	if (siteConfig.pages.sponsor) {
		pages.push("sponsor/");
	}

	// 生成 XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${url(page)}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
${posts.map((post) => `  <url>
    <loc>${url(`posts/${post.id}/`)}</loc>
    <lastmod>${post.data.published.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join("\n")}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
};