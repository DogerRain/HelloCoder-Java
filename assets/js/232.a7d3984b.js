(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{808:function(e,t,a){"use strict";a.r(t);var n=a(32),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("线程池参数的 "),a("code",[e._v("workQueue")]),e._v(" 决定了缓存任务的排队策略，对于不同的业务场景，我们可以使用不同的排队策略。")]),e._v(" "),a("p",[e._v("我们只需要实现"),a("code",[e._v("BlockingQueue")]),e._v(" 这个接口即可。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://images-1253198264.cos.ap-guangzhou.myqcloud.com/20181026185652119.png",alt:"图片出处找不到了"}})]),e._v(" "),a("p",[e._v("JDK7 提供了 7 个阻塞队列。分别是：")]),e._v(" "),a("p",[e._v("ArrayBlockingQueue ：一个由数组结构组成的有界阻塞队列。")]),e._v(" "),a("p",[e._v("LinkedBlockingQueue ：一个由链表结构组成的有界阻塞队列。")]),e._v(" "),a("p",[e._v("PriorityBlockingQueue ：一个支持优先级排序的无界阻塞队列。")]),e._v(" "),a("p",[e._v("DelayQueue：一个使用优先级队列实现的无界阻塞队列。")]),e._v(" "),a("p",[e._v("SynchronousQueue：一个不存储元素的阻塞队列。")]),e._v(" "),a("p",[e._v("LinkedTransferQueue：一个由链表结构组成的无界阻塞队列。")]),e._v(" "),a("p",[e._v("LinkedBlockingDeque：一个由链表结构组成的双向阻塞队列。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/Home/image-20210525232155784.png",alt:""}})]),e._v(" "),a("p",[e._v("介绍一下常用的有三种"),a("code",[e._v("workQueue")])]),e._v(" "),a("h2",{attrs:{id:"_1-synchronousqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-synchronousqueue"}},[e._v("#")]),e._v(" 1. SynchronousQueue")]),e._v(" "),a("p",[e._v("SynchronousQueue"),a("strong",[e._v("没有容量")]),e._v("，是无缓冲等待队列，是一个"),a("strong",[e._v("不存储元素的阻塞队列")]),e._v("，会直接将任务交给消费者（即丢给空闲的线程去执行），必须等队列中的添加元素被消费后才能继续添加新的元素，否则会走拒绝策略，所以使用SynchronousQueue阻塞队列一般要求maximumPoolSizes为无界，避免线程拒绝执行操作。")]),e._v(" "),a("p",[e._v("插入元素到队列的线程被阻塞，直到另一个线程从队列中获取了队列中存储的元素。同样，如果线程尝试获取元素并且当前不存在任何元素，则该线程将被阻塞，直到线程将元素插入队列。")]),e._v(" "),a("h2",{attrs:{id:"_2-linkedblockingqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-linkedblockingqueue"}},[e._v("#")]),e._v(" 2. LinkedBlockingQueue")]),e._v(" "),a("p",[e._v("LinkedBlockingQueue如果不指定大小，默认值是 "),a("code",[e._v("Integer.MAX_VALUE")])]),e._v(" "),a("p",[e._v("源码在此：")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Native")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v("   MAX_VALUE "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x7fffffff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("就是说这个队列里面可以放 2^31-1 = 2147483647 个 任务，也就是无界队列。")]),e._v(" "),a("p",[e._v("所以为了避免队列过大造成机器负载或者内存爆满的情况出现，我们在使用的时候建议手动传一个队列的大小。")]),e._v(" "),a("p",[e._v("与ArrayBlockingQueue不同的是，LinkedBlockingQueue内部分别使用了takeLock 和 putLock 对并发进行控制，也就是说，添加和删除操作并不是互斥操作，可以同时进行，这样也就可以大大提高吞吐量。")]),e._v(" "),a("p",[e._v("与之类似的是 LinkedBlockingDeque。")]),e._v(" "),a("p",[e._v("LinkedBlockingDeque： 使用双向队列实现的双端阻塞队列，双端意味着可以像普通队列一样FIFO(先进先出)，可以像栈一样FILO(先进后出)")]),e._v(" "),a("h2",{attrs:{id:"_3-delayqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-delayqueue"}},[e._v("#")]),e._v(" 3. DelayQueue")]),e._v(" "),a("p",[e._v("DelayQueue是一个延迟队列，无界，队列中每个元素都有过期时间，当从队列获取元素时，只有过期元素才会出队列，而队列头部的元素是过期最快的元素。")]),e._v(" "),a("p",[e._v("能够准确的把握任务的执行时间，通常可以使用在：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("定时任务调度，比如订单过期未支付自动取消")])]),e._v(" "),a("li",[a("p",[e._v("缓存")])])]),e._v(" "),a("p",[e._v("如何使用，可以参考这篇文章："),a("a",{attrs:{href:"https://blog.csdn.net/zhu_tianwei/article/details/53549653",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/zhu_tianwei/article/details/53549653"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("参考：")]),e._v(" "),a("ul",[a("li",[e._v("【细谈Java并发】谈谈LinkedBlockingQueue："),a("a",{attrs:{href:"https://blog.csdn.net/tonywu1992/article/details/83419448",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/tonywu1992/article/details/83419448"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);