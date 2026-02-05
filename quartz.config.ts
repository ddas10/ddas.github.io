import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🚶〰️ Dhyan’s Lane",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cormorant Garamond",
        body: "Source Sans 3",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf6e3",          // Warm Parchment (The light cream in the sky/path)
          lightgray: "#f2e5bc",      // Soft Sand (Borders that blend with the paper)
          gray: "#bdae8b",           // Muted Gold (Metadata and dates)
          darkgray: "#3c3836",       // Charcoal Ink (Body text - from the character's silhouette)
          dark: "#1d2021",           // Deepest Ink (Headings - sharp and clear)
          secondary: "#af3a03",      // Burnt Orange (Links - the deep amber tones in the field)
          tertiary: "#d79921",       // Goldenrod (Hover states - the bright yellow washes)
          highlight: "#fabd2f33",    // Sunbeam (Soft gold highlight)
          textHighlight: "#ebdbb2aa",
        },
        darkMode: {
          light: "#1d2021",          // Deepest Ink Background
          lightgray: "#3c3836",      // Darkened Charcoal
          gray: "#928374",           // Stone Grey
          darkgray: "#ebdbb2",       // Silk Cream Text
          dark: "#fbf1c7",           // Bright Parchment Headings
          secondary: "#fabd2f",      // Radiant Gold Links
          tertiary: "#fe8019",       // Sunset Orange Accents
          highlight: "#d7992133",    // Amber Glow
          textHighlight: "#bdae8b44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
