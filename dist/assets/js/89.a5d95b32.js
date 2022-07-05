(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{674:function(e,s,t){"use strict";t.r(s);var r=t(32),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"redis-主从复制、哨兵和集群三者区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-主从复制、哨兵和集群三者区别"}},[e._v("#")]),e._v(" Redis 主从复制、哨兵和集群三者区别")]),e._v(" "),t("p",[t("strong",[e._v("主从复制是为了数据备份")]),e._v("；"),t("strong",[e._v("哨兵是为了高可用")]),e._v("，Redis主服务器挂了哨兵可以切换；"),t("strong",[e._v("集群则是因为单实例能力有限，搞多个分散压力")]),e._v("，简短总结如下：")]),e._v(" "),t("p",[e._v("**主从模式：**备份数据、负载均衡，一个Master可以有多个Slaves。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6555006-d7be3c1271b96a7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/701/format/webp",alt:""}})]),e._v(" "),t("p",[e._v("**哨兵模式：**sentinel发现master挂了后，就会从slave中重新选举一个master。当主节点出现故障时，由Redis Sentinel自动完成故障发现和转移，并通知应用方，实现高可用性。")]),e._v(" "),t("p",[e._v("（1）集群监控：负责监控Redis master和slave进程是否正常工作\n（2）消息通知：如果某个Redis实例有故障，那么哨兵负责发送消息作为报警通知给管理员\n（3）故障转移：如果master node挂掉了，会自动转移到slave node上\n（4）配置中心：如果故障转移发生了，通知client客户端新的master地址")]),e._v(" "),t("p",[e._v("**集群模式：**cluster是为了解决单机Redis容量有限的问题，将数据按一定的规则分配到多台机器。")]),e._v(" "),t("p",[e._v("简单总结：")]),e._v(" "),t("p",[t("strong",[e._v("sentinel着眼于高可用，Cluster提高并发量。")])]),e._v(" "),t("p",[t("strong",[e._v("1. 主从模式")]),e._v("：读写分离（高性能），备份，一个Master可以有多个Slaves。")]),e._v(" "),t("p",[t("strong",[e._v("2. 哨兵sentinel")]),e._v("：监控，自动转移，哨兵发现主服务器挂了后，就会从slave中重新选举一个主服务器。（高可用）")]),e._v(" "),t("p",[t("strong",[e._v("3. 集群")]),e._v("：为了解决单机Redis容量有限的问题，将数据按一定的规则分配到多台机器，即每台redis存储不同的内容；内存/QPS不受限于单机，可受益于分布式集群高扩展性。")])])}),[],!1,null,null,null);s.default=a.exports}}]);