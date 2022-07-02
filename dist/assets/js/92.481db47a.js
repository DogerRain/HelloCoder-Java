(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{668:function(e,t,s){"use strict";s.r(t);var a=s(32),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Redis的key可以设置过期时间，那是否意味着时间一到就会马上被删除呢？")]),e._v(" "),s("p",[e._v("Redis的数据存储大小是有限的，假如内存不足Redis有什么应对策略呢？")]),e._v(" "),s("p",[e._v("本篇文章将介绍一下Redis的过期策略和内存淘汰机制。")]),e._v(" "),s("h2",{attrs:{id:"_1、redis的过期策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、redis的过期策略"}},[e._v("#")]),e._v(" 1、redis的过期策略")]),e._v(" "),s("p",[e._v("redis的key过期删除策略有以下三种：")]),e._v(" "),s("h4",{attrs:{id:"_1-定时删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-定时删除"}},[e._v("#")]),e._v(" 1.定时删除")]),e._v(" "),s("p",[e._v("在设置key的过期时间的同时，为该key创建一个定时器，让定时器在key的过期时间来临时，对key进行删除\n"),s("strong",[e._v("优点：")]),e._v("\n保证内存被尽快释放\n"),s("strong",[e._v("缺点：")]),e._v("\n1)若过期key很多，删除这些key会占用很多的CPU时间，在CPU时间紧张的情况下，CPU不能把所有的时间用来做要紧的事儿，还需要去花时间删除这些key。\n2)定时器的创建耗时，若为每一个设置过期时间的key创建一个定时器（将会有大量的定时器产生），性能影响严重 ，影响Redis吞吐量和响应")]),e._v(" "),s("blockquote",[s("p",[e._v("CPU消耗大，内存消耗低（拿时间换空间）")])]),e._v(" "),s("h4",{attrs:{id:"_2-惰性删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-惰性删除"}},[e._v("#")]),e._v(" 2.惰性删除")]),e._v(" "),s("p",[e._v("key过期的时候不删除，不做处理，等下次从数据库获取key的时候去检查是否过期，若过期，则删除，返回null。\n"),s("strong",[e._v("优点：")]),e._v("\n删除操作只发生在从数据库取出key的时候发生，而且只删除当前key，所以对CPU时间的占用是比较少的，而且此时的删除是已经到了非做不可的地步。\n"),s("strong",[e._v("缺点：")]),e._v("\n若大量的key在超出超时时间后，很久一段时间内，都没有被获取过，那么可能发生内存泄露（无用的垃圾占用了大量的内存）")]),e._v(" "),s("blockquote",[s("p",[e._v("CPU消耗低，内存消耗高（拿空间换时间）")])]),e._v(" "),s("p",[s("strong",[e._v("折中方案：")])]),e._v(" "),s("h4",{attrs:{id:"_3-定期删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定期删除"}},[e._v("#")]),e._v(" 3.定期删除")]),e._v(" "),s("p",[e._v("如果当前库中没有一个key设置了过期时间，直接执行下一个库的遍历，随机获取一个设置了过期时间的key，检查该key是否过期，如果过期，删除key，判断定期删除操作是否已经达到指定时长，若已经达到，直接退出定期删除。（默认每个库检测20个key）")]),e._v(" "),s("blockquote",[s("p",[e._v("周期性轮询redis库中的时效性数据，采用随机抽取的策略，利用过期数据占比的方式控制删除频度")])]),e._v(" "),s("p",[s("strong",[e._v("优点:")]),e._v('\n1)通过限制删除操作的时长和频率，来减少删除操作对CPU时间的占用--处理"定时删除"的缺点\n2)定期删除过期key--处理"惰性删除"的缺点\n'),s("strong",[e._v("缺点：")]),e._v('\n1)在内存友好方面，不如"定时删除"\n2)在CPU时间友好方面，不如"惰性删除"')]),e._v(" "),s("p",[e._v("Redis采用的删除策略是："),s("strong",[e._v("定期删除+惰性删除")]),e._v(" ，这种方法是十分高效。")]),e._v(" "),s("p",[e._v("（随机抽查，重点抽查）")]),e._v(" "),s("h2",{attrs:{id:"_2、内存淘汰机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、内存淘汰机制"}},[e._v("#")]),e._v(" 2、内存淘汰机制")]),e._v(" "),s("p",[e._v("Redis有过期策略，假如你的Redis只能存1G的数据，你一个请求写入2G，而你也没有及时请求key，那么惰性删除就不生效了，Redis占用内存就会越来越高。")]),e._v(" "),s("p",[e._v("Redis可以设置内存大小：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# maxmemory <bytes>\n# 设置Redis最大占用内存大小为100\nmaxmemory 100mb\n")])])]),s("p",[e._v("超过了这个内存大小，就会触发"),s("strong",[e._v("内存淘汰机制")])]),e._v(" "),s("p",[e._v("至于为什么一定要设置这个大小，可以看一下官方：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img/image-20210325144733549.png",alt:""}})]),e._v(" "),s("blockquote",[s("p",[e._v("如果不设置，Redis将消耗掉系统所有的可用内存")])]),e._v(" "),s("p",[e._v("Redis有一个默认  "),s("strong",[e._v("内存淘汰机制")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# maxmemory-policy noeviction\n")])])]),s("p",[s("code",[e._v("maxmemory-policy")]),e._v("一共有8个值，当内存不足时：")]),e._v(" "),s("p",[e._v("1）noeviction： 不删除，直接返回报错信息。\n2）allkeys-lru：移除最久未使用（使用频率最少）使用的key。"),s("strong",[e._v("推荐使用这种。")]),e._v("\n3）volatile-lru：在设置了过期时间的key中，移除最久未使用的key。\n4）allkeys-random：随机移除某个key。\n5）volatile-random：在设置了过期时间的key中，随机移除某个key。\n6）volatile-ttl： 在设置了过期时间的key中，移除准备过期的key。\n7）allkeys-lfu：移除最近最少使用的key。\n8）volatile-lfu：在设置了过期时间的key中，移除最近最少使用的key。")]),e._v(" "),s("p",[e._v("查看内存淘汰机制：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("localhost:"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("0")]),e._v(">")]),e._v("config get maxmemory-policy\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"maxmemory-policy"')]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"noeviction"')]),e._v("\n")])])]),s("blockquote",[s("p",[e._v("LRU和LFU的区别：")]),e._v(" "),s("p",[e._v("LRU是最近最少使用页面置换算法(Least Recently Used),也就是首先淘汰最长时间未被使用的页面!")]),e._v(" "),s("p",[e._v("这个主要针对的是使用时间")]),e._v(" "),s("p",[e._v("比如有数据 1，1，1，2，2，3\n此时缓存中已有（1，2）\n当3加入的时候，得把前面的1淘汰，变成（3，2）")]),e._v(" "),s("p",[e._v("LFU是最近最不常用页面置换算法(Least Frequently Used),也就是淘汰一定时期内被访问次数最少的页!")]),e._v(" "),s("p",[e._v("这个主要针对的是使用频率")]),e._v(" "),s("p",[e._v("比如有数据 1，1，1，2，2，3\n缓存中有（1(3次)，2(2次)）\n当3加入的时候，得把后面的2淘汰，变成（1(3次)，3(1次)）")])]),e._v(" "),s("p",[s("strong",[e._v("引申：")])]),e._v(" "),s("p",[e._v("假如我的key没有设置expire，即没有设置过期时间。那么 volatile-lru、volatile-random、volatile-ttl  就无法执行了，和 noeviction 就一样了。")])])}),[],!1,null,null,null);t.default=v.exports}}]);