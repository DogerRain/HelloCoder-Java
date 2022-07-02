(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{664:function(_,v,t){"use strict";t.r(v);var s=t(32),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1、redis主从架构作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、redis主从架构作用"}},[_._v("#")]),_._v(" 1、Redis主从架构作用")]),_._v(" "),t("p",[_._v("Redis的主从架构作用有以下：")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("数据冗余")]),_._v("，将数据热备份到从节点，即使主节点由于磁盘损坏丢失数据，从节点依然保留数据副本。")]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("读/写分离")]),_._v("，可以由主节点提供写服务，从节点提供读服务，提高Redis服务整体吞吐量。")]),_._v(" "),t("p",[_._v("（3）"),t("strong",[_._v("故障恢复")]),_._v("，主节点故障下线后，可以手动将从节点切换为主节点，继续提供服务。")]),_._v(" "),t("p",[_._v("（4）"),t("strong",[_._v("高可用基础")]),_._v("，主从复制机制是Sentinel和Cluster机制的基础，Sentinel和Cluster都实现了故障转移，即主节点故障停止后，Redis负责选择一个从节点切换为主节点，继续提供服务。")]),_._v(" "),t("h2",{attrs:{id:"_2、主从复制流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、主从复制流程"}},[_._v("#")]),_._v(" 2、主从复制流程")]),_._v(" "),t("p",[t("strong",[_._v("下面将主从复制流程分为三个阶段。")])]),_._v(" "),t("h3",{attrs:{id:"_2-1、握手阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、握手阶段"}},[_._v("#")]),_._v(" 2.1、握手阶段")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("握手阶段")]),_._v("：主从连接成功后，从节点需要将自身信息（如IP地址、端口等）发送给主节点，以便主节点能认识自己。")]),_._v(" "),t("h3",{attrs:{id:"_2-2、同步阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、同步阶段"}},[_._v("#")]),_._v(" 2.2、同步阶段")]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("同步阶段")]),_._v("：从节点连接主节点后，需要先同步数据，数据达到一致（或者只有最新的变更不一致）后才进入复制阶段。")]),_._v(" "),t("p",[_._v("Redis支持两种同步机制：")]),_._v(" "),t("h4",{attrs:{id:"_2-2-1、全量同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1、全量同步"}},[_._v("#")]),_._v(" 2.2.1、全量同步")]),_._v(" "),t("p",[_._v("全量同步：从节点发送命令PSYNC，要求进行全量同步，主节点返回响应+FULLRESYNC，表明同意全量同步。随后，主节点生成RDB数据并发送给从节点。这种方式常用于新的从节点首次同步数据。")]),_._v(" "),t("p",[_._v("具体步骤如下：")]),_._v(" "),t("p",[_._v("1）从服务器连接主服务器，发送"),t("code",[_._v("SYNC")]),_._v("命令；")]),_._v(" "),t("p",[_._v("2）主服务器接收到SYNC 后 ，响应，开始执行BGSAVE命令生成"),t("strong",[_._v("RDB文件")]),_._v("并"),t("strong",[_._v("使用缓冲区记录此后执行的所有写命令")]),_._v("；")]),_._v(" "),t("p",[_._v("3）主服务器BGSAVE执行完后，向所有从服务器发送快照文件，并在发送期间继续记录被执行的写命令；")]),_._v(" "),t("p",[_._v("4）从服务器收到快照文件后丢弃所有旧数据，载入收到的快照；")]),_._v(" "),t("p",[_._v("5）主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；")]),_._v(" "),t("p",[_._v("6）从服务器完成对快照的载入，开始接收命令请求，并执行来自主服务器缓冲区的写命令；")]),_._v(" "),t("blockquote",[t("p",[_._v("这种方式常用于新的从节点首次同步数据。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20160223183521160",alt:""}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200620204750496.png",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"_2-2-2、部分同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2、部分同步"}},[_._v("#")]),_._v(" 2.2.2、部分同步")]),_._v(" "),t("p",[_._v("也叫增量同步。")]),_._v(" "),t("p",[_._v("从节点发送命令 "),t("code",[_._v("PSYNC runid offset")]),_._v("，要求进行部分同步，主节点响应+CONTINUE，表明同意部分同步。主节点只需要把"),t("strong",[_._v("复制积压区中offset偏移量之后的命令发送给从节点即可")]),_._v("（主节点会将执行的写命令都写入复制积压区）。这种方式常用于主从连接断开重连时同步数据。如果offset不在复制积压区中，那么主节点也会返回+FULLRESYNC，要求进行全量同步。")]),_._v(" "),t("p",[_._v("PSYNC执行过程中比较重要的概念有3个：runid、offset（复制偏移量）、复制积压缓冲区。")]),_._v(" "),t("ol",[t("li",[t("p",[t("strong",[_._v("runid")]),_._v("\n每个Redis服务器都会有一个表明自己身份的ID。在PSYNC中发送的这个ID是指之前连接的Master的ID，如果没保存这个ID，PSYNC的命令会使用 "),t("code",[_._v("PSYNC ? -1")]),_._v("” 这种形式发送给Master，表示需要全量复制。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("offset（复制偏移量）")]),_._v("\n在主从复制的Master和Slave双方都会各自维持一个offset。Master成功发送N个字节的命令后会将Master里的offset加上N，Slave在接收到N个字节命令后同样会将Slave里的offset增加N。\nMaster和Slave如果状态是一致的那么它的的offset也应该是一致的。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("复制积压缓冲区")])]),_._v(" "),t("p",[_._v("复制积压缓冲区是由Master维护的一个固定长度环形积压队列(FIFO队列)，它的作用是缓存已经传播出去的命令。当Master进行命令传播时，不仅将命令发送给所有Slave，还会将命令写入到复制积压缓冲区里面。")])])]),_._v(" "),t("p",[t("strong",[_._v("PSYNC执行过程")]),_._v("：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/202006202059144.png",alt:""}})]),_._v(" "),t("p",[_._v("如上图，PSYNC执行过程和SYNC的区别在于："),t("strong",[_._v("salve连接时，判断是否需要全量同步，全量同步的逻辑过程和SYNC一样。")])]),_._v(" "),t("h3",{attrs:{id:"_2-3、复制阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、复制阶段"}},[_._v("#")]),_._v(" 2.3、复制阶段")]),_._v(" "),t("p",[_._v("（3）"),t("strong",[_._v("复制阶段")]),_._v("：主节点在运行期间，将执行的写命令传播给从节点，从节点接收并执行这些命令，从而达到复制数据的效果。Redis使用的是"),t("strong",[_._v("异步复制")]),_._v("，主节点传播命令后，并不会等待从节点返回ACK确认。异步复制的优点是低延迟和高性能，缺点是可能在短期内主从节点数据不一致。")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("参考：")]),_._v(" "),t("ul",[t("li",[_._v("https://blog.csdn.net/Seky_fei/article/details/106877329")]),_._v(" "),t("li",[_._v("《Redis核心原理与实践》")])])])}),[],!1,null,null,null);v.default=r.exports}}]);