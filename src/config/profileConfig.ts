import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "/assets/images/avatar.webp",

	// 名字
	name: "加菲魚",

	// 个人签名
	bio: "Hello, I'm 加菲魚.",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
<<<<<<< HEAD
			name: "Bilibli",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/38932988",
=======
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/GarfieldFish/",
>>>>>>> e994ea3 (feat: 个性化修正，改一些菜单名字)
			showName: false,
		},
		{
			name: "GitHub",
<<<<<<< HEAD
			icon: "fa7-brands:github",
			url: "https://github.com/CuteLeaf",
=======
			icon: "fa6-brands:github",
			url: "https://github.com/KJunC",
>>>>>>> e994ea3 (feat: 个性化修正，改一些菜单名字)
			showName: false,
		},
		{
			name: "Email",
<<<<<<< HEAD
			icon: "fa7-solid:envelope",
			url: "mailto:xiaye@msn.com",
=======
			icon: "fa6-solid:envelope",
			url: "mailto:mail@jcaonet.com",
>>>>>>> e994ea3 (feat: 个性化修正，改一些菜单名字)
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
