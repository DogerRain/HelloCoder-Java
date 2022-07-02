(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{603:function(t,e,r){"use strict";r.r(e);var a=r(32),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"http-1-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0"}},[t._v("#")]),t._v(" HTTP 1.0")]),t._v(" "),r("p",[t._v("在 HTTP/1.0 中，HTTP 1.0规定浏览器与服务器只保持短暂的连接（短连接），一个服务器在发送完一个 HTTP 响应后，会断开 TCP 链接。但是这样每次请求都会重新建立和断开 TCP 连接，代价过大。")]),t._v(" "),r("h2",{attrs:{id:"http-1-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP 1.1")]),t._v(" "),r("p",[t._v("HTTP 1.1支持持久连接（HTTP/1.1的默认模式使用带流水线的持久连接），在一个TCP连接上可以传送多个HTTP请求和响应。")]),t._v(" "),r("p",[t._v("HTTP 1.1的 request和reponse头中都有可能出现一个connection的头，此header的含义是当client和server通信时对于长链接如何进行处理。")]),t._v(" "),r("p",[t._v("Connection请求头的值为Keep-Alive时，客户端通知服务器返回本次请求结果后保持连接；Connection请求头的值为close时，客户端通知服务器返回本次请求结果后关闭连接。HTTP 1.1还提供了与身份认证、状态管理和Cache缓存等机制相关的请求头和响应头。HTTP 1.1还支持文件断点续传，传送文件不用从头开始。")]),t._v(" "),r("p",[r("strong",[t._v("总结就是：浏览器再也不用为每个请求重新发起TCP连接了。HTTP 1.1引入cookie以及安全机制")])]),t._v(" "),r("h2",{attrs:{id:"http-2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[t._v("#")]),t._v(" HTTP 2.0")]),t._v(" "),r("p",[t._v("HTTP2.0中所有加强性能的核心是二进制传输，在HTTP1.x中，我们是通过文本的方式传输数据。")]),t._v(" "),r("p",[t._v("HTTP2.0 使用了HPACK（HTTP2头部压缩算法）压缩格式对传输的header进行编码，减少了header的大小。")]),t._v(" "),r("p",[t._v("HTTP2.0，可以在一个连接里，客户端和服务端都可以同时发送多个请求或回应，而且不用按照顺序一对一对应。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img/aaatcp.jpg",alt:"HTTP2.0与HTTP3.0"}})]),t._v(" "),r("p",[t._v("因为"),r("code",[t._v("http 1.1")]),t._v(" 管道化特性可以让客户端一次发送所有的请求，但是有些问题阻碍了管道化的发展，即是某个请求花了很长时间，那么队头阻塞会影响其他请求。")]),t._v(" "),r("p",[r("strong",[t._v("总结就是：解决了http1.1中的队头阻塞问题，用户体验的感知多数延迟的效果有了量化的改善，以及提升了TCP连接的利用率")])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("参考：")]),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/61423830",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/61423830"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/52d86558ca57",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/52d86558ca57"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/MHYMOYHqhrAbQ0xtTkV2ig",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/MHYMOYHqhrAbQ0xtTkV2ig"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);