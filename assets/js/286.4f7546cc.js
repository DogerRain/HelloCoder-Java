(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{861:function(s,t,a){"use strict";a.r(t);var e=a(32),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"使用规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用规范"}},[s._v("#")]),s._v(" 使用规范")]),s._v(" "),a("h4",{attrs:{id:"冷热数据区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冷热数据区分"}},[s._v("#")]),s._v(" 冷热数据区分")]),s._v(" "),a("p",[s._v("虽然 Redis支持持久化，但将所有数据存储在 Redis 中，成本非常昂贵。建议将热数据 (如 QPS超过 5k) 的数据加载到 Redis 中。低频数据可存储在 Mysql、 ElasticSearch中。")]),s._v(" "),a("h4",{attrs:{id:"业务数据分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务数据分离"}},[s._v("#")]),s._v(" 业务数据分离")]),s._v(" "),a("p",[s._v("不要将不相关的数据业务都放到一个 Redis中。一方面避免业务相互影响，另一方面避免单实例膨胀，并能在故障时降低影响面，快速恢复。")]),s._v(" "),a("h4",{attrs:{id:"消息大小限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息大小限制"}},[s._v("#")]),s._v(" 消息大小限制")]),s._v(" "),a("p",[s._v("由于 Redis 是单线程服务，消息过大会阻塞并拖慢其他操作。保持消息内容在 1KB 以下是个好的习惯。严禁超过 50KB 的单条记录。消息过大还会引起网络带宽的高占用，持久化到磁盘时的 IO 问题。")]),s._v(" "),a("h4",{attrs:{id:"连接数限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接数限制"}},[s._v("#")]),s._v(" 连接数限制")]),s._v(" "),a("p",[s._v("连接的频繁创建和销毁，会浪费大量的系统资源，极限情况会造成宿主机当机。请确保使用了正确的 Redis 客户端连接池配置。")]),s._v(" "),a("h4",{attrs:{id:"缓存-key-设置失效时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存-key-设置失效时间"}},[s._v("#")]),s._v(" 缓存 Key 设置失效时间")]),s._v(" "),a("p",[s._v("作为缓存使用的 Key，必须要设置失效时间。失效时间并不是越长越好，请根据业务性质进行设置。注意，失效时间的单位有的是秒，有的是毫秒，这个很多同学不注意容易搞错。")]),s._v(" "),a("h4",{attrs:{id:"缓存不能有中间态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存不能有中间态"}},[s._v("#")]),s._v(" 缓存不能有中间态")]),s._v(" "),a("p",[s._v("缓存应该仅作缓存用，去掉后业务逻辑不应发生改变，万不可切入到业务里。")]),s._v(" "),a("ul",[a("li",[s._v("缓存的高可用会影响业务；")]),s._v(" "),a("li",[s._v("产生深耦合会发生无法预料的效果；")]),s._v(" "),a("li",[s._v("会对维护行产生肤效果。")])]),s._v(" "),a("h4",{attrs:{id:"扩展方式首选客户端-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展方式首选客户端-hash"}},[s._v("#")]),s._v(" 扩展方式首选客户端 hash")]),s._v(" "),a("p",[s._v("如果应用太小就别考虑了，如单 redis 集群并不能为你的数据服务，不要着急扩大你的 redis 集群（包括 M/S 和 Cluster)，集群越大，在状态同步和持久化方面的性能越差。优先使用客户端 hash 进行集群拆分。如：根据用户 id 分 10 个集群，用户尾号为 0 的落在第一个集群。")]),s._v(" "),a("h2",{attrs:{id:"操作限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作限制"}},[s._v("#")]),s._v(" 操作限制")]),s._v(" "),a("h4",{attrs:{id:"严禁使用-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严禁使用-keys"}},[s._v("#")]),s._v(" 严禁使用 Keys")]),s._v(" "),a("p",[s._v("Keys 命令效率极低，属于 O(N)操作，会阻塞其他正常命令，在 cluster 上，会是灾难性的操作。严禁使用，DBA 应该 rename 此命令，从根源禁用。")]),s._v(" "),a("h4",{attrs:{id:"严禁使用-flush"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严禁使用-flush"}},[s._v("#")]),s._v(" 严禁使用 Flush")]),s._v(" "),a("p",[s._v("flush 命令会清空所有数据，属于高危操作。严禁使用，DBA 应该 rename 此命令，从根源禁用，仅 DBA 可操作。")]),s._v(" "),a("h4",{attrs:{id:"严禁作为消息队列使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严禁作为消息队列使用"}},[s._v("#")]),s._v(" 严禁作为消息队列使用")]),s._v(" "),a("p",[s._v("如没有非常特殊的需求，严禁将 Redis 当作消息队列使用。Redis 当作消息队列使用，会有容量、网络、效率、功能方面的多种问题。如需要消息队列，可使用高吞吐的 Kafka 或者高可靠的 RocketMQ。")]),s._v(" "),a("h4",{attrs:{id:"严禁不设置范围的批量操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严禁不设置范围的批量操作"}},[s._v("#")]),s._v(" 严禁不设置范围的批量操作")]),s._v(" "),a("p",[s._v("redis 那么快，慢查询除了网络延迟，就属于这些批量操作函数。大多数线上问题都是由于这些函数引起。")]),s._v(" "),a("p",[s._v("1、[zset] 严禁对 zset 的不设范围操作")]),s._v(" "),a("p",[s._v("ZRANGE、 ZRANGEBYSCORE等多个操作 ZSET 的函数，严禁使用 ZRANGE myzset 0 -1 等这种不设置范围的操作。请指定范围，如 ZRANGE myzset 0 100。如不确定长度，可使用 ZCARD 判断长度")]),s._v(" "),a("p",[s._v("2、[hash] 严禁对大数据量 Key 使用 HGETALL")]),s._v(" "),a("p",[s._v("HGETALL会取出相关 HASH 的所有数据，如果数据条数过大，同样会引起阻塞，请确保业务可控。如不确定长度，可使用 HLEN 先判断长度")]),s._v(" "),a("p",[s._v("3、[key] Redis Cluster 集群的 mget 操作")]),s._v(" "),a("p",[s._v("Redis Cluster 的 MGET 操作，会到各分片取数据聚合，相比传统的 M/S架构，性能会下降很多，请提前压测和评估")]),s._v(" "),a("p",[s._v("4、[其他] 严禁使用 sunion, sinter, sdiff等一些聚合操作")]),s._v(" "),a("h4",{attrs:{id:"禁用-select-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用-select-函数"}},[s._v("#")]),s._v(" 禁用 select 函数")]),s._v(" "),a("p",[s._v("select函数用来切换 database，对于使用方来说，这是很容易发生问题的地方，cluster 模式也不支持多个 database，且没有任何收益，禁用。")]),s._v(" "),a("h4",{attrs:{id:"禁用事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用事务"}},[s._v("#")]),s._v(" 禁用事务")]),s._v(" "),a("p",[s._v("redis 本身已经很快了，如无大的必要，建议捕获异常进行回滚，不要使用事务函数，很少有人这么干。")]),s._v(" "),a("h4",{attrs:{id:"禁用-lua-脚本扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用-lua-脚本扩展"}},[s._v("#")]),s._v(" 禁用 lua 脚本扩展")]),s._v(" "),a("p",[s._v("lua 脚本虽然能做很多看起来很 cool 的事情，但它就像是 SQL 的存储过程，会引入性能和一些难以维护的问题，禁用。")]),s._v(" "),a("h4",{attrs:{id:"禁止长时间-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止长时间-monitor"}},[s._v("#")]),s._v(" 禁止长时间 monitor")]),s._v(" "),a("p",[s._v("monitor函数可以快速看到当前 redis 正在执行的数据流，但是当心，高峰期长时间阻塞在 monitor 命令上，会严重影响 redis 的性能。此命令不禁止使用，但使用一定要特别特别注意。")]),s._v(" "),a("h2",{attrs:{id:"_3、-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、-规范"}},[s._v("#")]),s._v(" 3、 规范")]),s._v(" "),a("h3",{attrs:{id:"_1、key命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、key命名规范"}},[s._v("#")]),s._v(" 1、key命名规范")]),s._v(" "),a("p",[s._v("Redis 的 Key 一定要规范，这样在遇到问题时，能够进行方便的定位。Redis 属于无 scheme 的 KV 数据库，所以，我们靠约定来建立其 scheme 语义。其好处：")]),s._v(" "),a("p",[s._v("1、能够根据某类 key 进行数据清理")]),s._v(" "),a("p",[s._v("2、能够根据某类 key 进行数据更新")]),s._v(" "),a("p",[s._v("3、能够方面了解到某类 key 的归属方和应用场景")]),s._v(" "),a("p",[s._v("4、为统一化、平台化做准备，减少技术变更")]),s._v(" "),a("p",[s._v("一般，一个 key 需要带以下维度：业务、key 用途、变量等，各个维度使用 "),a("code",[s._v(":")]),s._v(" 进行分隔，以下是几个 key 的实例:")]),s._v(" "),a("blockquote",[a("p",[s._v("user:sex   用户的性别")]),s._v(" "),a("p",[s._v("user:10002232:msg:achi  用户发言数量排行榜")])]),s._v(" "),a("h3",{attrs:{id:"_2、善用hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、善用hash"}},[s._v("#")]),s._v(" 2、善用hash")]),s._v(" "),a("p",[s._v("比如说你要存放一个用户的属性，可能会：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("foo:first_name\nfoo:last_name\nfoo:address\n")])])]),a("p",[s._v("其实可以使用一个对象存放，比如说hashSet，使用一个key就可以了")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" HSET foo first_name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Joe"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" HSET foo last_name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Engel"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" HSET foo address "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 Fanatical Pl"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" HGETALL foo\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first_name"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Joe"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last_name"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Engel"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 Fanatical Pl"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" HGET foo first_name\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Joe"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);