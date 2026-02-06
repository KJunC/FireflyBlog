import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "/assets/images/avatar.webp",

	// 名字
	name: "加菲魚",

	// 个人签名
	bio: "堆内存中的一个持久化对象。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/GarfieldFish/",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/KJunC",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:mail@jcaonet.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
