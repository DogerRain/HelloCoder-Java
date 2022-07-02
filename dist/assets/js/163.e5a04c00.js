(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{737:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("原文地址：https://my.oschina.net/floor/blog/1841962")]),t._v(" "),a("p",[t._v("作者：温安适")])]),t._v(" "),a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("6月是个忙碌的月份，结完婚，处理完家事，也换了份工作。以至于6月都没有写blog，今天闲来无事，将之前面试的问题，以及一些感悟分享给大家。")]),t._v(" "),a("h1",{attrs:{id:"_3个问题3个感悟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3个问题3个感悟"}},[t._v("#")]),t._v(" 3个问题3个感悟")]),t._v(" "),a("h2",{attrs:{id:"_1-http-get问题影射思维问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-get问题影射思维问题"}},[t._v("#")]),t._v(" 1. http get问题影射思维问题")]),t._v(" "),a("p",[t._v("与面试官的交流如下:")]),t._v(" "),a("p",[t._v("面试官：“一个http 请求，接受json数组，数组内容是id，返回用户信息，在测试上是ok的，到预生产就报错了，可能是什么问题？”\n我想了想说：“代码一致吗？”\n面试官：“当然”\n我立刻说：“id中没有中文吧？”\n面试官：“没有”\n我略有疑虑的说：“是压力测试中，报的错吗？ 如果是可能是这个借口需要加缓存提高tps了”。\n面试官微微一笑说：“不是压力测试，就是单独一次调用”。\n我立刻又说：“是不是后台对应的数据库挂了。造成的？”\n面试官：“不是”\n我再思索中，到底是什么问题呢，左思右想没有想法，正在苦恼中。\n面试官略有失望的说：“你遇到bug一般如何处理呢？”\n我有种瞬间被闪电击中的感觉，"),a("strong",[t._v("原来思路比答案重要")]),t._v("\n我平静的说：“定位问题，分析问题，尝试解决,重复上述步骤直到问题解决。定位问题，一般就是先看日志”\n面试官略有肯定的说；“调用者的日志，显示调用的接口是500”\n我进一步说：“那提供者的日志呢？”\n面试官：“提示一大长串的Id，就没有其他日志了”\n我细细一想说：“这个可能是测试数据少，预生产数据多，具体不是数据库的数据问题，而是传递的id多了，造成这个查询接口返回慢，可以尝试进行拆分，分批次查询”\n面试官：“这个问题，先到这里，咱们换一个问题。”")]),t._v(" "),a("p",[t._v("看到这里，大家可能会觉得这个问题，根本不值一提，或者说记录也是没有任何意义的。但在这里我不得不说这是一个非常严重的问题，是我底层认知中的一个"),a("strong",[t._v("重要缺陷 ！在信息不足的情况下，靠猜处理问题！")]),t._v("，上边的问题如果不是面试官打断我我会一直往下猜，这种主观片面的方式如果不改，不仅面试会碰壁，生活也会走很多弯路。")]),t._v(" "),a("blockquote",[a("p",[t._v("**感悟1 **\n在信息不足以判断时，应先尽量通过合理有效的沟通获取更全面的信息，而不是在信息不足的情况下贸然尝试")])]),t._v(" "),a("h2",{attrs:{id:"_2-半小时只能发3次消息的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-半小时只能发3次消息的问题"}},[t._v("#")]),t._v(" 2.半小时只能发3次消息的问题")]),t._v(" "),a("p",[t._v("上边的问题如果你觉得没有意思或者觉得我小题大做，没关系，下面这问题就有意思了。")]),t._v(" "),a("p",[t._v('面试官：“问你个算法问题吧，如何实现半小时只能发3次消息。”\n我心中窃喜这个不就是限流，得意的说：“可以适用Guava的RateLimiter”\n面试官略有深意的说:"不是每10分钟1次，用户可以1分钟内发3次 "\n我语无伦次的说了些方案，这里经过了至少5分钟，都不对。\n面试官不耐烦的说：“你刚才提到RateLimiter，它的基本实现原理是什么？”\n我深吸一口气说：“令牌桶机制”\n面试官略有期待的说：“如何维护令牌的？”\n我战战兢兢的说；“以1s一次为例，如果没有尝试获取令牌，每秒都会更新令牌桶中的数量为1”\n面试官打断我说：“你再想想这个半小时只能发3次的问题”\n我心中明白这是最后一回了，如果在答不对，等待我的就是一首《凉凉》了，但是面试官问我如何维护令牌桶干什么呢？在深思10s后，我想明白了，'),a("strong",[t._v("这个问题本质还是限流，令牌桶算法还是可以解决，只是不是定时维护令牌桶中的令牌数量了，而且每次用户调用时进行维护")]),t._v('，并且除了了令牌本身，还需要一个时间戳来协助调整令牌。\n我笃定的说:"这个问题就是限流问题，还是参照令牌桶算法，但是维护机制变了。"\n面试官微微一笑说；“你说说具体如何实现呢”\n我淡定的说：“简单的说，系统持有一个表，表中有1个用户id，1个int类型作为剩余令牌数，1个Date类型作为上次发送时间，具体实现如下流程图”')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/0d39c55306e66b832997d5a2cacfdef04be.jpg",alt:"img"}})]),t._v(" "),a("blockquote",[a("p",[t._v("感悟2\n经典算法，活学活用，大多数业务问题均可解决。")])]),t._v(" "),a("h2",{attrs:{id:"_3-线程池运行原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程池运行原理"}},[t._v("#")]),t._v(" 3.线程池运行原理")]),t._v(" "),a("p",[t._v("面试官看了看我的简历说：“线程池用过吧”\n我信心满满的说：“当然，我们项目都是使用的自扩展的线程池，我非常的熟悉”\n面试官很有期待的说：“哦，那你介绍下如何扩展的吧”\n我侃侃而谈：“线程池扩展，使用的是ThreadPoolExecutor，核心参数有，核心线程数，最大线程数，存活时间，存活时间的单位，队列大小，拒绝策略，拒绝策略分为4种，”\n面试官：“具体说下拒绝策略”\n我心想这个小意思，昂首挺胸的说：“")]),t._v(" "),a("ul",[a("li",[t._v("AbortPolicy默认策略 抛出未检查的异常RejectedException")]),t._v(" "),a("li",[t._v("DiscardPolicy 新任务无法保存到队列，抛弃该任务")]),t._v(" "),a("li",[t._v("DiscardOldestPolicy 新任务无法保存到队列，抛弃下一个执行的，再提交最新的")]),t._v(" "),a("li",[t._v("CallerRunsPolicy调用者执行 不抛弃任务，不抛弃异常，而将某些任务退回到 调用者。 如果队列满了，下个任务会在调用execute的主线程中执行。 有界队列和调用者执行策略，实现高负载下平缓的性能降低 ”")])]),t._v(" "),a("p",[t._v("面试官：“概念咱们就不聊了，考虑下面这个场景，核心线程5，最大线程10，队列大小2，同时来了20个任务，使用默认的拒绝策略，任务是如何被执行的。”\n我心里一下就蒙了，一般线程的队列大小至少要上千，这个队列数是2，还真没设置过。\n硬着头皮，故作镇定的说：“这个最开始的5个任务会被执行，之后的2个任务会进入到队列，之后线程池新开2个线程执行队列中的任务，其他的任务都拒绝了”。\n面试官：“这个问题你有点犹豫啊！”\n我心里咯噔一下，哎看了是猜错了。")]),t._v(" "),a("p",[t._v("回家以后，我非常好奇，写了程序来校验这个问题，代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IndexBinarySearch")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),t._v(" poolExecutor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MINUTES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingDeque")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" rlist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            rlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RunnableTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RunnableTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),t._v(" poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RunnableTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),t._v(" poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poolExecutor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" threadSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" queueCurrentSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":执行开始："')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前线程数："')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("threadSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前队列大小："')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("queueCurrentSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("运行结果如下图：\n"),a("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/78bc024c6d246909dbcd94c214dee2e887c.jpg",alt:"img"}}),t._v("\n从代码的运行结果上看，\n前5个立即执行，后2个入队列，\n之后线程池开新线程处理后边的任务，如上图紫色框部分线程6-10，直到到达最大线程数为止\n之后的任务都拒绝了，如上图报错部分\n等有线程执行完任务后，会从线程池中取之前的任务执行。如上图红色框部分。\n总结下其大致流程图如下： "),a("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/35bf583fc746f781c3ef3857f9c5eb542c9.jpg",alt:"img"}})]),t._v(" "),a("blockquote",[a("p",[t._v("感悟3\n只有了解原理，才能把一项技术应用在不同的场景下。")])]),t._v(" "),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("3个问题3个感悟")]),t._v(" "),a("ol",[a("li",[t._v("在信息不足以判断时，应先尽量通过合理有效的沟通获取更全面的信息，而不是在信息不足的情况下贸然尝试")]),t._v(" "),a("li",[t._v("经典算法，活学活用，大多数业务问题均可解决。")]),t._v(" "),a("li",[t._v("只有了解原理，才能把一项技术应用在不同的场景下。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);