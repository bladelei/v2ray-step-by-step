(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{357:function(e,t,r){"use strict";r.r(t);var l=r(34),a=Object(l.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[e._v("#")]),e._v(" CDN")]),e._v(" "),r("p",[e._v("目前和 V2Ray 兼容的 CDN 国外有 Cloudflare，国内阿里云，这两家的 CDN 是支持 WebSocket 的。剩下的几家不支持 WebSocket，也不会 keep TCP connection。因此 HTTP/2 回源也不支持（访问支持 HTTP/2 和回源支持 HTTP/2 是两回事）。\n另外，使用国内 CDN 需要域名备案并服务商"),r("em",[e._v("实名")]),e._v("认证。使用有风险，入坑需谨慎。")]),e._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),r("p",[e._v("参照 "),r("a",{attrs:{href:"https://guide.v2fly.org/advanced/wss_and_web.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket + TLS + Web"),r("OutboundLink")],1),e._v(" 部分。")]),e._v(" "),r("h2",{attrs:{id:"有关-cloudflare-的-firewall（防火墙）问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有关-cloudflare-的-firewall（防火墙）问题"}},[e._v("#")]),e._v(" 有关 Cloudflare 的 Firewall（防火墙）问题")]),e._v(" "),r("p",[e._v("最近突然有遇见经过 CDN 的代理完全无法通讯的情况哦。\n有趣的是，在 VPS 里没有任何相关日志，并且不走 CDN 的话就可以正常通讯并出现相关日志了呢；而走 CDN 的 Web 可以正常访问，但 Path 界面却出现了 Challenge（Captcha）。\n也就是说，问题就在于 Cloudflare 啦。")]),e._v(" "),r("p",[e._v("在 Firewall 界面有看见大量 IP 被拦截的记录，问题 GET👍。\n然后又找了一个相关的 "),r("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/issues/1742",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issues"),r("OutboundLink")],1),e._v(" 作为参考。")]),e._v(" "),r("p",[e._v("稍稍总结一下不同的解决方案：")]),e._v(" "),r("ol",[r("li",[e._v("Firewall => Settings => Security Level，设置为 Essentially Off（默认是 Medium，个人实测改为 Low 仍被拦截）。")]),e._v(" "),r("li",[e._v("无需修改 Security Level，而是 Firewall => Tools，将 China（或被 Block 的 IP/ASN）作为 Whitelist。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/issues/1742",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issues"),r("OutboundLink")],1),e._v(" 里有提到，可以 Firewall => Firewall Rules，添加 Country => China 或 IP Address =>（被 Block 的 IP）或 URL Path => （wsSettings 里 的那个 path），为 Allow 即可，但个人实测，Activity log 里会显示，先是被 Firewall Rules 所 Allow，随后又被 Security Level 所 Block。")])]),e._v(" "),r("p",[e._v("PS：针对解决方案 3，建议各位在出现被拦截的问题之前就进行此操作，本文所提的个人实测是在已经出现被拦截的情况下所进行的哦。")])])}),[],!1,null,null,null);t.default=a.exports}}]);