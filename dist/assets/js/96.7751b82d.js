(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{671:function(r,e,t){"use strict";t.r(e);var a=t(32),o=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h3",{attrs:{id:"_1、什么是docker-对docker的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是docker-对docker的理解"}},[r._v("#")]),r._v(" 1、什么是Docker，对Docker的理解？")]),r._v(" "),t("p",[r._v("Docker是一个容器化平台，它以容器的形式将您的应用程序及其所有依赖项打包在一起，以确保应用程序在任何环境中无缝运行。")]),r._v(" "),t("p",[r._v("Docker 技术最初是基于 LXC 技术构建（大多数人都会将这一技术与“传统的”Linux 容器联系在一起），但后来它逐渐摆脱了对这种技术的依赖。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img/image-20201210172914269.png",alt:" "}})]),r._v(" "),t("p",[r._v("除了运行容器之外，Docker 技术还具备其他多项功能，包括简化用于构建容器、传输镜像以及控制镜像版本的流程。")]),r._v(" "),t("p",[r._v("传统的 Linux 容器使用 init 系统来管理多种进程。这意味着，所有应用都作为一个整体运行。")]),r._v(" "),t("p",[r._v("与此相反，Docker 技术力争让应用各自独立运行其进程，并提供相应工具，帮助实现这一功能。这种精细化运作模式自有其优势。")]),r._v(" "),t("p",[t("strong",[r._v("简单的说：Docker是一种轻量级的操作系统虚拟化解决方案，它想达到一次构建到处运行，类似于Java虚拟机的效果。")])]),r._v(" "),t("h3",{attrs:{id:"_2、容器-docker-和虚拟机的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、容器-docker-和虚拟机的区别"}},[r._v("#")]),r._v(" 2、容器（Docker）和虚拟机的区别？")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.redhat.com/zh/topics/virtualization",target:"_blank",rel:"noopener noreferrer"}},[r._v("虚拟化"),t("OutboundLink")],1),r._v("使得您的操作系统（Windows 或 Linux）可同时在单个硬件系统上运行。")])]),r._v(" "),t("p",[r._v("虚拟机在本质上就是在模拟一台真实的计算机设备，同时遵循同样的程序执行方式。虚拟机能够利用“虚拟机管理程序”运行在物理设备之上。反过来，虚拟机管理程序则可运行在主机设备或者“裸机”之上。")]),r._v(" "),t("ul",[t("li",[r._v("容器则可共享同一个操作系统内核，将应用进程与系统其他部分隔离开。例如：x86 Linux 系统运行 x86 Linux 容器，x86 Windows 系统运行 x86 Windows 容器。Linux 容器具有极佳的可移植性，但前提是它们必须与底层系统兼容。")])]),r._v(" "),t("p",[r._v("Docker守护进程可以直接与主操作系统进行通信，为各个Docker容器分配资源；它还可以将容器与主操作系统隔离，并将各个容器互相隔离。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img/image-20201210171716057.png",alt:" "}})]),r._v(" "),t("p",[r._v("容器与虚拟机间的最大区别在于："),t("strong",[r._v("各容器系统共享主机系统的内核")]),r._v("。")]),r._v(" "),t("h3",{attrs:{id:"_3、docker常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、docker常用命令"}},[r._v("#")]),r._v(" 3、docker常用命令")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("docker pull 拉取或者更新指定镜像\ndocker push 将镜像推送至远程仓库\ndocker rm 删除容器\ndocker rmi 删除镜像\ndocker images 列出所有镜像\ndocker ps 列出所有容器\n")])])]),t("h3",{attrs:{id:"_4、什么是docker镜像-和容器有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、什么是docker镜像-和容器有什么区别"}},[r._v("#")]),r._v(" 4、什么是Docker镜像，和容器有什么区别？")]),r._v(" "),t("p",[t("strong",[r._v("Docker镜像是Docker容器的源代码。")])]),r._v(" "),t("p",[r._v("两者可以互相转换。")]),r._v(" "),t("p",[r._v("换句话说，Docker镜像用于创建容器。使用build命令创建镜像，并且在使用run启动时它们将生成容器。镜像存储在Docker注册表中，"),t("code",[r._v("registry.hub.docker.com")]),r._v("（一个镜像仓库）因为它们可能变得非常大，镜像被设计为由其他镜像层组成，允许在通过网络传输镜像时发送最少量的数据。")]),r._v(" "),t("h3",{attrs:{id:"_5、docker有多少种状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、docker有多少种状态"}},[r._v("#")]),r._v(" 5、Docker有多少种状态？")]),r._v(" "),t("p",[r._v("四种。")]),r._v(" "),t("p",[r._v("运行、已暂停、重新启动、已退出。")])])}),[],!1,null,null,null);e.default=o.exports}}]);