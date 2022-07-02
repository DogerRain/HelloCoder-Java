(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{831:function(t,e,_){"use strict";_.r(e);var v=_(32),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("https://www.zhihu.com/question/451255512")])]),t._v(" "),_("p",[t._v("说来也是很搞笑😅....")]),t._v(" "),_("p",[t._v("我自己的的经历就是"),_("strong",[t._v("从来没真正系统的学过Linux")]),t._v("。")]),t._v(" "),_("p",[t._v("记得第一次安装虚拟机的时候，电脑装的是Ubuntu系统，第一次发现与那里还有这种系统，还有命令行；")]),t._v(" "),_("p",[t._v("第二次再操作，发现这又是个Centos的系统，我还在寻思着怎么没有界面呢？（当然这也是后知后觉了~）")]),t._v(" "),_("p",[t._v("我没有完整地看过任何Linux相关的书籍，那我是怎么熬过来的呢？")]),t._v(" "),_("p",[t._v("答案就是 "),_("strong",[t._v("边用边学")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("我的建议是 边用边学 ，而不是边学边用，后者容易忘记。")])]),t._v(" "),_("p",[t._v("我仅列出作为一名Java程序员，在求职、工作的时候，需要掌握哪些Linux知识。")]),t._v(" "),_("h2",{attrs:{id:"_1、入门"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、入门"}},[t._v("#")]),t._v(" 1、入门")]),t._v(" "),_("p",[t._v("为什么要学习Linux呢？")]),t._v(" "),_("p",[t._v("因为大部分服务都是部署在Linux服务器，因为Linux系统具有天然的优势。")]),t._v(" "),_("p",[t._v("我们在windows上可以右击新建文件夹，而在linux上就需要通过 mkdir 的命令。")]),t._v(" "),_("h3",{attrs:{id:"_1-1、操作系统概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、操作系统概念"}},[t._v("#")]),t._v(" 1.1、操作系统概念")]),t._v(" "),_("p",[t._v("和Linux打交道是因为操作系统这门课程，可以说相辅相成，可以在学"),_("strong",[t._v("操作系统")]),t._v("的时候把Linux的知识点也掌握了。")]),t._v(" "),_("p",[t._v("如果你已经学了操作系统，那么再学习Linux就会事半功倍。")]),t._v(" "),_("p",[t._v("你需要简单的知道一些概念：")]),t._v(" "),_("ul",[_("li",[t._v("进程、线程")]),t._v(" "),_("li",[t._v("端口、防火墙、网卡")]),t._v(" "),_("li",[t._v("公网、局域网")])]),t._v(" "),_("h3",{attrs:{id:"_1-2、操作系统的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、操作系统的分类"}},[t._v("#")]),t._v(" 1.2、操作系统的分类")]),t._v(" "),_("p",[t._v("常见的Linux系统版本：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("版本名称")]),t._v(" "),_("th",[t._v("网 址")]),t._v(" "),_("th",[t._v("特 点")]),t._v(" "),_("th",[t._v("软件包管理器")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Debian Linux")]),t._v(" "),_("td",[_("a",{attrs:{href:"http://www.debian.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.debian.org"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("开放的开发模式，且易于进行软件包升级")]),t._v(" "),_("td",[t._v("apt")])]),t._v(" "),_("tr",[_("td",[t._v("Fedora Core")]),t._v(" "),_("td",[_("a",{attrs:{href:"http://www.redhat.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.redhat.com"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("优秀带桌面环境的系统，拥有数量庞人的用户，优秀的社区技术支持. 并且有许多创新")]),t._v(" "),_("td",[t._v("up2date（rpm），yum （rpm）")])]),t._v(" "),_("tr",[_("td",[t._v("CentOS")]),t._v(" "),_("td",[_("a",{attrs:{href:"http://www.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.centos.org"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("CentOS 是一种对 RHEL（Red Hat Enterprise Linux）源代码再编译的产物，由于 Linux 是开发源代码的操作系统，并不排斥样基于源代码的再分发，CentOS 就是将商业的 Linux 操作系统 RHEL 进行源代码再编译后分发，并在 RHEL 的基础上修正了不少已知的漏洞")]),t._v(" "),_("td",[t._v("rpm")])]),t._v(" "),_("tr",[_("td",[t._v("SUSE Linux")]),t._v(" "),_("td",[_("a",{attrs:{href:"http://www.suse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.suse.com"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("专业的操作系统，易用的 YaST 软件包管理系统")]),t._v(" "),_("td",[t._v("YaST（rpm），第三方 apt （rpm）软件库（repository）")])]),t._v(" "),_("tr",[_("td",[t._v("Ubuntu")]),t._v(" "),_("td",[_("a",{attrs:{href:"http://www.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.ubuntu.com"),_("OutboundLink")],1)]),t._v(" "),_("td",[t._v("优秀带桌面环境的系统，基于 Debian 构建，对新款硬件具有极强的兼容能力。")]),t._v(" "),_("td",[t._v("apt")])])])]),t._v(" "),_("p",[t._v("目前市面上用的比较多的是CentOS，个人如果要学习用，建议用Ubuntu，因为是可视化的桌面，操作方便。")]),t._v(" "),_("h3",{attrs:{id:"_1-3、shell"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、shell"}},[t._v("#")]),t._v(" 1.3、Shell")]),t._v(" "),_("h4",{attrs:{id:"shell是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shell是什么"}},[t._v("#")]),t._v(" shell是什么")]),t._v(" "),_("p",[t._v("不同的系统命令有所差异，但是不会很大，取决于它们用的是什么Shell。")]),t._v(" "),_("p",[_("code",[t._v("Shell")]),t._v(" 这个单词的原意是“外壳”，跟 "),_("code",[t._v("kernel")]),t._v("（内核）相对应，比喻内核外面的一层，"),_("strong",[t._v("即用户跟内核交互的对话界面。")])]),t._v(" "),_("blockquote",[_("p",[t._v("简单的说，shell是一个程序，提供一个环境，这个环境只有一个黑框，用户从键盘输入命令，又称为命令行环境（ "),_("code",[t._v("command line interface")]),t._v(" ，简写为 "),_("code",[t._v("CLI")]),t._v(" ）")]),t._v(" "),_("p",[_("code",[t._v("Shell")]),t._v(" 收到命令后，发送给操作系统执行，并把结果返回。")]),t._v(" "),_("p",[t._v("同时"),_("code",[t._v("Shell")]),t._v("也提供了很多小工具，比如 vim、top、ll 等等")])]),t._v(" "),_("h4",{attrs:{id:"shell的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shell的分类"}},[t._v("#")]),t._v(" shell的分类")]),t._v(" "),_("p",[_("code",[t._v("Shell")]),t._v(" 有很多种，不同的系统使用不同的"),_("code",[t._v("Shell")])]),t._v(" "),_("p",[t._v("主要的 "),_("code",[t._v("Shell")]),t._v(" 有下面这些：")]),t._v(" "),_("ul",[_("li",[t._v("Bourne Shell（sh）")]),t._v(" "),_("li",[t._v("Debian Almquist Shell （dash)；Debian、Ubuntu 默认使用")]),t._v(" "),_("li",[t._v("Bourne Again shell（bash）；Centos、Fedora  默认使用")]),t._v(" "),_("li",[t._v("C Shell（csh）")]),t._v(" "),_("li",[t._v("TENEX C Shell（tcsh）")]),t._v(" "),_("li",[t._v("Korn shell（ksh）")]),t._v(" "),_("li",[t._v("Z Shell（zsh）")]),t._v(" "),_("li",[t._v("Friendly Interactive Shell（fish）")])]),t._v(" "),_("p",[t._v("可以查看一下自己的Linux上支持哪些 shell：")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@VM-8-8-centos ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo $SHELL")]),t._v("\n/bin/bash\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@VM-8-8-centos ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/shells")]),t._v("\n/bin/sh\n/bin/bash\n/usr/bin/sh\n/usr/bin/bash\n/bin/tcsh\n/bin/csh\n")])])]),_("p",[t._v("查看用的哪一种 shell：")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("root@VM-8-8-centos ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls -l /bin/sh")]),t._v("\nlrwxrwxrwx "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" Aug  "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" /bin/sh -"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),_("p",[t._v("不同的shell区别不会很大，只是个别语法区别，在于写shell脚本。")]),t._v(" "),_("p",[t._v("所以在编写 "),_("code",[t._v(".sh")]),t._v("  的shell 脚本的时候，必须在头部告知Linux使用哪一种 shell 脚本执行：")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"------Hello,Coder--------"')]),t._v("\n")])])]),_("h3",{attrs:{id:"_1-4、准备一台服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、准备一台服务器"}},[t._v("#")]),t._v(" 1.4、准备一台服务器")]),t._v(" "),_("p",[t._v("在学习Linux前，你需要准备一台Linux服务器，这里有两种方式：")]),t._v(" "),_("ul",[_("li",[t._v("使用vmware这种软件安装虚拟机")]),t._v(" "),_("li",[t._v("购买云服务器，比如阿里云、腾讯云")])]),t._v(" "),_("p",[t._v("使用虚拟机的方式对电脑要求颇高，新手安装颇为复杂，可自行百度。")]),t._v(" "),_("p",[t._v("我推荐第二种方式，学生或者新用户一个月只需要10块钱，就能拥有一台自己的服务器了，后续还可以搭建自己的个人网站。")]),t._v(" "),_("p",[t._v("推荐一些云服务器：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("云厂商")]),t._v(" "),_("th",[t._v("学生优惠")]),t._v(" "),_("th",[t._v("新人优惠")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("腾讯云")]),t._v(" "),_("td",[_("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=10004&cps_key=664b44b4e8e43b579d07036bf1c71060",target:"_blank",rel:"noopener noreferrer"}},[t._v("学生特惠，1核2G5M宽带，仅需9元/1个月"),_("OutboundLink")],1)]),t._v(" "),_("td",[_("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=1063&cps_key=664b44b4e8e43b579d07036bf1c71060&from=console",target:"_blank",rel:"noopener noreferrer"}},[t._v("星星海SA2云服务器，1核2G首年99元"),_("OutboundLink")],1),t._v("（我目前用的）")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td",[_("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=1040&cps_key=664b44b4e8e43b579d07036bf1c71060&from=console",target:"_blank",rel:"noopener noreferrer"}},[t._v("新客户无门槛代金券，价值高达2860元代金券"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td"),t._v(" "),_("td",[_("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=664b44b4e8e43b579d07036bf1c71060&from=console",target:"_blank",rel:"noopener noreferrer"}},[t._v("云产品限时秒杀，爆款1核2G云服务器，首年99元"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td",[t._v("阿里云")]),t._v(" "),_("td"),t._v(" "),_("td",[_("a",{attrs:{href:"https://www.aliyun.com/minisite/goods?userCode=4lol8et7",target:"_blank",rel:"noopener noreferrer"}},[t._v("精选云服务器1核2G 新人仅需87元/年"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td",[t._v("百度云")]),t._v(" "),_("td",[_("a",{attrs:{href:"https://cloud.baidu.com/campaign/campus-2018/index.html?unifrom=eventpage",target:"_blank",rel:"noopener noreferrer"}},[t._v("1核2G 学生身份 9 元/1个月"),_("OutboundLink")],1)]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("华为云")]),t._v(" "),_("td"),t._v(" "),_("td",[_("a",{attrs:{href:"https://activity.huaweicloud.com/cps/recommendstore.html?fromacct=0740541e-dec2-47db-99e9-b5bb524ccbf7&utm_source=aGlkX2txbGYyNDR0ZXlxc2ZwZg===&utm_medium=cps&utm_campaign=201905",target:"_blank",rel:"noopener noreferrer"}},[t._v("精选云服务器2折起"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td",[t._v("青云")]),t._v(" "),_("td"),t._v(" "),_("td",[_("a",{attrs:{href:"https://www.qingcloud.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.qingcloud.com"),_("OutboundLink")],1)])])])]),t._v(" "),_("h3",{attrs:{id:"_1-5、准备一个ssh工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5、准备一个ssh工具"}},[t._v("#")]),t._v(" 1.5、准备一个ssh工具")]),t._v(" "),_("p",[t._v("我们可以通过一些 ssh终端工具连接我们的Linux系统，这类工具具有较多功能，可以很方便的操作 Linux，比如 Xshell、SecureCRT、FinalShell等等。")]),t._v(" "),_("p",[t._v("当你一切就绪，连上你心心念念的服务器的时候，就会出现伴随着你终身难忘的语句：")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@VM-8-8-centos ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),_("p",[t._v("命令解析：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("root")]),t._v("：表示用户名；")]),t._v(" "),_("li",[_("code",[t._v("VM-8-8-centos")]),t._v("：表示主机名；")]),t._v(" "),_("li",[_("code",[t._v("~")]),t._v("：表示目前所在目录为家目录，其中 "),_("code",[t._v("root")]),t._v(" 用户的家目录是 "),_("code",[t._v("/root")]),t._v(" 普通用户的家目录在 "),_("code",[t._v("/home")]),t._v(" 下；")]),t._v(" "),_("li",[_("code",[t._v("#")]),t._v("：指示你所具有的权限（ "),_("code",[t._v("root")]),t._v(" 用户为 "),_("code",[t._v("#")]),t._v(" ，普通用户为 "),_("code",[t._v("$")]),t._v(" ）。")])]),t._v(" "),_("p",[t._v("然后你就可以输入 Linux命令和它进行交互了。")]),t._v(" "),_("h2",{attrs:{id:"_2、基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、基础"}},[t._v("#")]),t._v(" 2、基础")]),t._v(" "),_("h3",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),_("p",[t._v("作为一个程序员，必须要掌握一些基本的Linux命令。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-202204/image-20210104215503268.png",alt:""}})]),t._v(" "),_("p",[t._v("推荐菜鸟教程："),_("a",{attrs:{href:"https://www.runoob.com/linux/linux-install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/linux/linux-install.html"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"书本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#书本"}},[t._v("#")]),t._v(" 书本")]),t._v(" "),_("p",[t._v("如果你是学生，时间充裕，我建议看一下《鸟哥的私房菜》：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-202109/image-20211221154853360.png",alt:""}})]),t._v(" "),_("p",[t._v("这本书还是很经典的，介绍十分详细，由于内容太多，但完全可以根据自己的方向挑选进行学习。")]),t._v(" "),_("p",[t._v("在线阅读：http://cn.linux.vbird.org")]),t._v(" "),_("h3",{attrs:{id:"快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),_("p",[t._v("在开始学习 "),_("code",[t._v("Linux")]),t._v(" 命令之前，有这么一些快捷方式，是必须要提前掌握的，它将贯穿整个 "),_("code",[t._v("Linux")]),t._v(" 使用生涯。")]),t._v(" "),_("ul",[_("li",[t._v("通过上下方向键 ↑ ↓ 来调取过往执行过的 "),_("code",[t._v("Linux")]),t._v(" 命令；")]),t._v(" "),_("li",[t._v("命令或参数仅需输入前几位就可以用 "),_("code",[t._v("Tab")]),t._v(" 键补全；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + R")]),t._v(" ：用于查找使用过的命令（"),_("code",[t._v("history")]),t._v(" 命令用于列出之前使用过的所有命令，然后输入 "),_("code",[t._v("!")]),t._v(" 命令加上编号( "),_("code",[t._v("!2")]),t._v(" )就可以直接执行该历史命令）；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + L")]),t._v("：清除屏幕并将当前行移到页面顶部；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + C")]),t._v("：中止当前正在执行的命令；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + U")]),t._v("：从光标位置剪切到行首；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + K")]),t._v("：从光标位置剪切到行尾；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + W")]),t._v("：剪切光标左侧的一个单词；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + Y")]),t._v("：粘贴 "),_("code",[t._v("Ctrl + U | K | Y")]),t._v(" 剪切的命令；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + A")]),t._v("：光标跳到命令行的开头；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + E")]),t._v("：光标跳到命令行的结尾；")]),t._v(" "),_("li",[_("code",[t._v("Ctrl + D")]),t._v("：关闭 "),_("code",[t._v("Shell")]),t._v(" 会话；")])])])}),[],!1,null,null,null);e.default=r.exports}}]);