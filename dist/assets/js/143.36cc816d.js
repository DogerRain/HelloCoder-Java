(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{726:function(e,s,t){"use strict";t.r(s);var i=t(32),_=Object(i.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1、一个while循环-里面只要一个-i-估算一下一秒钟最大能加到多少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、一个while循环-里面只要一个-i-估算一下一秒钟最大能加到多少"}},[e._v("#")]),e._v(" 1、一个while循环，里面只要一个 i++，估算一下一秒钟最大能加到多少？")]),e._v(" "),t("p",[e._v("while true的话会被编译器优化掉，估计可以不用cmp直接jump。无论是i++还是++i都可以被优化成i = i + 1。")]),e._v(" "),t("p",[e._v("所以加起来就两条指令，一直在局部循环假设取指都命中缓存，i存在寄存器或缓存中。所以一次循环共耗费2个指令周期。（不考虑进程调度和中断）")]),e._v(" "),t("p",[e._v("所以i可以加到cpu时钟频率/（2*ipc），即 CPU频率 / 2 。")]),e._v(" "),t("h2",{attrs:{id:"_2、mysql、redis、es-三个如何保持数据一致性-失败了如何回滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、mysql、redis、es-三个如何保持数据一致性-失败了如何回滚"}},[e._v("#")]),e._v(" 2、MySQL、Redis、es 三个如何保持数据一致性，失败了如何回滚？")]),e._v(" "),t("p",[e._v("假如MySQL修改了数据，Redis、es 如何保持一致性呢？")]),e._v(" "),t("p",[e._v("首先这种多系统的业务，没有绝对的强一致性。")]),e._v(" "),t("p",[e._v("所以能保证的是最终一致性。")]),e._v(" "),t("p",[e._v("方法可以是：db提交用 canal 这种组件，把binlog 发送到mq，拿异构数据同步工具搭建两条同步链路，从 mq 取数据，分别写进 redis、es")]),e._v(" "),t("p",[e._v("再者，可以使用补偿，涉及到写操作，一律以MySQL数据为准。")])])}),[],!1,null,null,null);s.default=_.exports}}]);