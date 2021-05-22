// .vuepress/config.js
module.exports = {
  title: '蓝远城的个人博客',
  description: 'Just playing around',
  theme: 'reco',
  // base :"/reco_blog/",
  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本(富强！民主！)
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  themeConfig: {
    type: 'blog',
    logo: '/homePage/avatar.jpg',
    authorAvatar: '/homePage/avatar.jpg',
    author: '蓝某人~',
    sidebar: 'auto',
    lastUpdated: '最后更新时间', // 最后更新时间
    sidebarDepth: 3, //默认的深度是 1，它将提取到 h2 的标题
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    ],
    // 博客配置
   blogConfig: {
     category: {
       location: 4,     // 在导航栏菜单中所占的位置，默认2
       text: '分类' // 默认文案 “分类”
     },
     tag: {
       location: 5,     // 在导航栏菜单中所占的位置，默认3
       text: '标签'      // 默认文案 “标签”
     }
   } 
  },
  plugins: [
    [
      "dynamic-title",  // 趣味标题栏
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "/failure.ico",
        hideText: "我相信你会回来的！",
        recoverTime: 2000
      }
    ],
    ["vuepress-plugin-boxx"], // 名人名言，暂时没用上....
    ["meting",
      {
        meting: {
          server: "netease", // netease:网易云，tencent:qq音乐，xiami:虾米音乐
          type: "playlist",  //可选值： "song" | "album" | "artist" | "playlist"
          mid: "5410839210",  //描述：MetingApi 中的 id 参数，即资源 ID
        },
        aplayer: {
          autoplay: true,
          mini: true,
          theme: '#282c34'
        },
        mobile: {
          cover: false,
          lrc: false
        }
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", 
      {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",  // 看板娘
      {
          theme: ["blackCat"],
          clean: true,
          modelStyle: {
            position: "fixed",
            right: "65px",
            bottom: "0px",
            zIndex: 99999,
            pointerEvents: 'none'
          }
      }
    ],
  ]
}