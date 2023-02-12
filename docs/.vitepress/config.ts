import { DefaultTheme, defineConfig } from "vitepress";
import {
  componentPreview,
  containerPreview
} from "@vitepress-demo-preview/plugin";
import { components } from "../components";

const nav: DefaultTheme.NavItem[] = [
  { text: "指南", link: "/guide/" },
  { text: "组件", link: "/components/button" }
];

const sidebar: DefaultTheme.Sidebar = {
  "/guide": [
    {
      text: "指南",
      items: [
        { text: "组件库介绍", link: "/guide/" },
        { text: "快速开始", link: "/guide/quickstart" }
      ]
    }
  ],
  "/components": [
    {
      items: [...components]
    }
  ]
};

export default defineConfig({
  title: "Yuan Design of Vue3",
  description: "Yuan Design of Vue3",
  lang: "cn-ZH",
  base: "/",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Yuan Design",
    outline: 3,
    socialLinks: [
      { icon: "github", link: "https://github.com/linxx5599/yuan-design.git" }
    ],
    nav,
    sidebar
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    }
  }
});
