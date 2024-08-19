// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
var config_default = defineConfig4CustomTheme({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "cyanic",
      description: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316"
    }
  },
  base: "/cyanic-spec/",
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/index.md" },
      {
        text: "\u7F16\u7801\u89C4\u8303",
        items: [
          { text: "HTML \u7F16\u7801\u89C4\u8303", link: "/coding/html.md" },
          { text: "CSS \u7F16\u7801\u89C4\u8303", link: "/coding/css.md" },
          { text: "JavaScript \u7F16\u7801\u89C4\u8303", link: "/coding/javascript.md" },
          { text: "Typescript \u7F16\u7801\u89C4\u8303", link: "/coding/typescript.md" },
          { text: "Node \u7F16\u7801\u89C4\u8303", link: "/coding/node.md" }
        ]
      },
      {
        text: "\u5DE5\u7A0B\u89C4\u8303",
        items: [
          { text: "Git \u89C4\u8303", link: "/engineering/git.md" },
          { text: "\u6587\u6863\u89C4\u8303", link: "/engineering/doc.md" },
          { text: "CHANGELOG \u89C4\u8303", link: "/engineering/changelog.md" }
        ]
      },
      {
        text: "NPM\u5305",
        items: [
          { text: "cyanic-eslint-config", link: "/npm/eslint.md" },
          { text: "cyanic-stylelint-config", link: "/npm/stylelint.md" },
          { text: "cyanic-commitlint-config", link: "/npm/commitlint.md" },
          { text: "cyanic-markdownlint-config", link: "/npm/markdownlint.md" },
          { text: "cyanic-eslint-plugin", link: "/npm/eslint-plugin.md" }
        ]
      },
      {
        text: "\u811A\u624B\u67B6",
        items: [{ text: "cyanic-lint", link: "/cli/cyanic-lint.md" }]
      }
    ],
    sidebar: [
      {
        title: "\u7F16\u7801\u89C4\u8303",
        children: [
          {
            title: "HTML \u7F16\u7801\u89C4\u8303",
            path: "/coding/html.md"
          },
          {
            title: "CSS \u7F16\u7801\u89C4\u8303",
            path: "/coding/css.md"
          },
          {
            title: "JavaScript \u7F16\u7801\u89C4\u8303",
            path: "/coding/javascript.md"
          },
          {
            title: "Typescript \u7F16\u7801\u89C4\u8303",
            path: "/coding/typescript.md"
          },
          {
            title: "Node \u7F16\u7801\u89C4\u8303",
            path: "/coding/node.md"
          }
        ]
      },
      {
        title: "\u5DE5\u7A0B\u89C4\u8303",
        children: [
          {
            title: "Git \u89C4\u8303",
            path: "/engineering/git.md"
          },
          {
            title: "\u6587\u6863\u89C4\u8303",
            path: "/engineering/doc.md"
          },
          {
            title: "CHANGELOG \u89C4\u8303",
            path: "/engineering/changelog.md"
          }
        ]
      },
      {
        title: "NPM\u5305",
        children: [
          { title: "cyanic-eslint-config", path: "/npm/eslint.md" },
          { title: "cyanic-stylelint-config", path: "/npm/stylelint.md" },
          { title: "cyanic-commitlint-config", path: "/npm/commitlint.md" },
          { title: "cyanic-markdownlint-config", path: "/npm/markdownlint.md" },
          { title: "cyanic-eslint-plugin", path: "/npm/eslint-plugin.md" }
        ]
      },
      {
        title: "\u811A\u624B\u67B6",
        children: [{ title: "cyanic-lint", path: "/cli/cyanic-lint.md" }]
      }
    ],
    logo: "/img/logo.png",
    repo: "encode-studio-fe/fe-spec",
    searchMaxSuggestions: 10,
    docsDir: "docs",
    footer: {
      createYear: 2023,
      copyrightInfo: 'encode studio | <a href="https://github.com/Cyanic-0/cyanic-spec" target="_blank">github</a>'
    }
  },
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316"
      }
    ]
  ],
  plugins: [
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ]
  ],
  extraWatchFiles: [".vuepress/config.ts"]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnNEN1c3RvbVRoZW1lLCBVc2VyUGx1Z2lucyB9IGZyb20gJ3Z1ZXByZXNzL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUoe1xyXG4gIGxvY2FsZXM6IHtcclxuICAgICcvJzoge1xyXG4gICAgICBsYW5nOiAnemgtQ04nLFxyXG4gICAgICB0aXRsZTogJ2N5YW5pYycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzXHU1REU1XHU3QTBCXHU1MzE2JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBiYXNlOiAnL2N5YW5pYy1zcGVjLycsXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnL2luZGV4Lm1kJyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ0hUTUwgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJywgbGluazogJy9jb2RpbmcvaHRtbC5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0NTUyBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2NvZGluZy9jc3MubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdKYXZhU2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL2phdmFzY3JpcHQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdUeXBlc2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL3R5cGVzY3JpcHQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdOb2RlIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL25vZGUubWQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTVERTVcdTdBMEJcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdHaXQgXHU4OUM0XHU4MzAzJywgbGluazogJy9lbmdpbmVlcmluZy9naXQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTY1ODdcdTY4NjNcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2VuZ2luZWVyaW5nL2RvYy5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0NIQU5HRUxPRyBcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2VuZ2luZWVyaW5nL2NoYW5nZWxvZy5tZCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ05QTVx1NTMwNScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ2N5YW5pYy1lc2xpbnQtY29uZmlnJywgbGluazogJy9ucG0vZXNsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnY3lhbmljLXN0eWxlbGludC1jb25maWcnLCBsaW5rOiAnL25wbS9zdHlsZWxpbnQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdjeWFuaWMtY29tbWl0bGludC1jb25maWcnLCBsaW5rOiAnL25wbS9jb21taXRsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnY3lhbmljLW1hcmtkb3dubGludC1jb25maWcnLCBsaW5rOiAnL25wbS9tYXJrZG93bmxpbnQubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdjeWFuaWMtZXNsaW50LXBsdWdpbicsIGxpbms6ICcvbnBtL2VzbGludC1wbHVnaW4ubWQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTgxMUFcdTYyNEJcdTY3QjYnLFxyXG4gICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnY3lhbmljLWxpbnQnLCBsaW5rOiAnL2NsaS9jeWFuaWMtbGludC5tZCcgfV0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2lkZWJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSFRNTCBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2NvZGluZy9odG1sLm1kJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ1NTIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvY29kaW5nL2Nzcy5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0phdmFTY3JpcHQgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2RpbmcvamF2YXNjcmlwdC5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1R5cGVzY3JpcHQgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2RpbmcvdHlwZXNjcmlwdC5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ05vZGUgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2Rpbmcvbm9kZS5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1x1NURFNVx1N0EwQlx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHaXQgXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9lbmdpbmVlcmluZy9naXQubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdcdTY1ODdcdTY4NjNcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2VuZ2luZWVyaW5nL2RvYy5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NIQU5HRUxPRyBcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2VuZ2luZWVyaW5nL2NoYW5nZWxvZy5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ05QTVx1NTMwNScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGl0bGU6ICdjeWFuaWMtZXNsaW50LWNvbmZpZycsIHBhdGg6ICcvbnBtL2VzbGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGl0bGU6ICdjeWFuaWMtc3R5bGVsaW50LWNvbmZpZycsIHBhdGg6ICcvbnBtL3N0eWxlbGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGl0bGU6ICdjeWFuaWMtY29tbWl0bGludC1jb25maWcnLCBwYXRoOiAnL25wbS9jb21taXRsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogJ2N5YW5pYy1tYXJrZG93bmxpbnQtY29uZmlnJywgcGF0aDogJy9ucG0vbWFya2Rvd25saW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogJ2N5YW5pYy1lc2xpbnQtcGx1Z2luJywgcGF0aDogJy9ucG0vZXNsaW50LXBsdWdpbi5tZCcgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdcdTgxMUFcdTYyNEJcdTY3QjYnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbeyB0aXRsZTogJ2N5YW5pYy1saW50JywgcGF0aDogJy9jbGkvY3lhbmljLWxpbnQubWQnIH1dLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxvZ286ICcvaW1nL2xvZ28ucG5nJyxcclxuICAgIHJlcG86ICdlbmNvZGUtc3R1ZGlvLWZlL2ZlLXNwZWMnLFxyXG4gICAgc2VhcmNoTWF4U3VnZ2VzdGlvbnM6IDEwLFxyXG4gICAgZG9jc0RpcjogJ2RvY3MnLFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGNyZWF0ZVllYXI6IDIwMjMsXHJcbiAgICAgIGNvcHlyaWdodEluZm86XHJcbiAgICAgICAgJ2VuY29kZSBzdHVkaW8gfCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VuY29kZS1zdHVkaW8tZmUvZmUtc3BlY1wiIHRhcmdldD1cIl9ibGFua1wiPmdpdGh1YjwvYT4nLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBleHRlbmRGcm9udG1hdHRlcjoge1xyXG4gICAgLy8gICBhdXRob3I6IHtcclxuICAgIC8vICAgICBuYW1lOiAnY3lhbmljJyxcclxuICAgIC8vICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2VuY29kZS1zdHVkaW8tZmUvZmUtc2VwYycsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIGhlYWQ6IFtcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaW1nL2xvZ28ucG5nJyB9XSxcclxuICAgIFtcclxuICAgICAgJ21ldGEnLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcclxuICAgICAgICBjb250ZW50OiAnXHU1MjREXHU3QUVGXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzXHU1REU1XHU3QTBCXHU1MzE2JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgXSxcclxuXHJcbiAgcGx1Z2luczogPFVzZXJQbHVnaW5zPltcclxuICAgIFtcclxuICAgICAgJ29uZS1jbGljay1jb3B5JyxcclxuICAgICAge1xyXG4gICAgICAgIGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLFxyXG4gICAgICAgIGNvcHlNZXNzYWdlOiAnXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGJyxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBzaG93SW5Nb2JpbGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICd2dWVwcmVzcy1wbHVnaW4tem9vbWluZycsXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogJy50aGVtZS12ZG9pbmctY29udGVudCBpbWc6bm90KC5uby16b29tKScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMC42KScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgXSxcclxuICBleHRyYVdhdGNoRmlsZXM6IFsnLnZ1ZXByZXNzL2NvbmZpZy50cyddLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBO0FBRUEsSUFBTyxpQkFBUSx5QkFBeUI7QUFBQSxFQUN0QyxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBR2pCLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNO0FBQUEsTUFDcEI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxpQ0FBYSxNQUFNO0FBQUEsVUFDM0IsRUFBRSxNQUFNLGdDQUFZLE1BQU07QUFBQSxVQUMxQixFQUFFLE1BQU0sdUNBQW1CLE1BQU07QUFBQSxVQUNqQyxFQUFFLE1BQU0sdUNBQW1CLE1BQU07QUFBQSxVQUNqQyxFQUFFLE1BQU0saUNBQWEsTUFBTTtBQUFBO0FBQUE7QUFBQSxNQUcvQjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLG9CQUFVLE1BQU07QUFBQSxVQUN4QixFQUFFLE1BQU0sNEJBQVEsTUFBTTtBQUFBLFVBQ3RCLEVBQUUsTUFBTSwwQkFBZ0IsTUFBTTtBQUFBO0FBQUE7QUFBQSxNQUdsQztBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLHdCQUF3QixNQUFNO0FBQUEsVUFDdEMsRUFBRSxNQUFNLDJCQUEyQixNQUFNO0FBQUEsVUFDekMsRUFBRSxNQUFNLDRCQUE0QixNQUFNO0FBQUEsVUFDMUMsRUFBRSxNQUFNLDhCQUE4QixNQUFNO0FBQUEsVUFDNUMsRUFBRSxNQUFNLHdCQUF3QixNQUFNO0FBQUE7QUFBQTtBQUFBLE1BRzFDO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLGVBQWUsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUd6QyxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlaO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBO0FBQUEsVUFFUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBO0FBQUEsVUFFUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSVo7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxVQUNSLEVBQUUsT0FBTyx3QkFBd0IsTUFBTTtBQUFBLFVBQ3ZDLEVBQUUsT0FBTywyQkFBMkIsTUFBTTtBQUFBLFVBQzFDLEVBQUUsT0FBTyw0QkFBNEIsTUFBTTtBQUFBLFVBQzNDLEVBQUUsT0FBTyw4QkFBOEIsTUFBTTtBQUFBLFVBQzdDLEVBQUUsT0FBTyx3QkFBd0IsTUFBTTtBQUFBO0FBQUE7QUFBQSxNQUczQztBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsVUFBVSxDQUFDLEVBQUUsT0FBTyxlQUFlLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFHN0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sc0JBQXNCO0FBQUEsSUFDdEIsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osZUFDRTtBQUFBO0FBQUE7QUFBQSxFQVdOLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNO0FBQUEsSUFDOUI7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2YsU0FBc0I7QUFBQSxJQUNwQjtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjLENBQUMsK0JBQStCO0FBQUEsUUFDOUMsYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBO0FBQUE7QUFBQSxJQUlsQjtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsVUFDUCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtqQixpQkFBaUIsQ0FBQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
