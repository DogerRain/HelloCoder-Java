(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{818:function(a,e,t){"use strict";t.r(e);var _=t(32),v=Object(_.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("阿里开发手册有一段描述：")]),a._v(" "),t("blockquote",[t("p",[a._v("【强制】线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。")]),a._v(" "),t("p",[a._v("说明：使用线程池的好处是减少在创建和销毁线程上所花的时间以及系统资源的开销，解决资源不足的问题。如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。")])]),a._v(" "),t("p",[a._v("上一篇文章介绍了Java线程是什么，以及用显式创建线程的两种方式（继承Thread类或者实现Runnable接口）：")]),a._v(" "),t("h2",{attrs:{id:"_1-手动创建线程的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-手动创建线程的缺点"}},[a._v("#")]),a._v(" 1. 手动创建线程的缺点")]),a._v(" "),t("p",[a._v("继承extend类或者实现runnable接口都是最简单创建线程的方式，但是这种方式有以下缺点：")]),a._v(" "),t("ol",[t("li",[a._v("不受风险控制")]),a._v(" "),t("li",[a._v("频繁创建，开销大")]),a._v(" "),t("li",[a._v("不好管理（不知道哪里创建了线程、线程名字可能没有）")])]),a._v(" "),t("h3",{attrs:{id:"_1-1-不受风险控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-不受风险控制"}},[a._v("#")]),a._v(" 1.1 不受风险控制")]),a._v(" "),t("p",[a._v("服务器CPU资源有限，如果每个人都显示手动创建线程，不知道哪里的代码出现了多线程，在运行的时候所有线程都在抢占资源，不好控制。")]),a._v(" "),t("h3",{attrs:{id:"_1-2-频繁创建-开销大"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-频繁创建-开销大"}},[a._v("#")]),a._v(" 1.2 频繁创建，开销大")]),a._v(" "),t("p",[a._v("虽然说"),t("code",[a._v("new Theard()")]),a._v("的父类也是"),t("code",[a._v("Object")]),a._v("，但是"),t("code",[a._v("new Theard()")]),a._v("和"),t("code",[a._v("new Object()")]),a._v("还是有区别的。")]),a._v(" "),t("p",[a._v("以下参考："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/LilY5ZfsaMLELf6e13Hlzw",target:"_blank",rel:"noopener noreferrer"}},[a._v("我会手动创建线程，为什么让我使用线程池？"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"new-object-过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-object-过程"}},[a._v("#")]),a._v(" new Object()过程：")]),a._v(" "),t("ol",[t("li",[a._v("分配一块内存 M")]),a._v(" "),t("li",[a._v("在内存 M 上初始化该对象")]),a._v(" "),t("li",[a._v("将内存 M 的地址赋值给引用变量 obj")])]),a._v(" "),t("h4",{attrs:{id:"创建一个线程的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个线程的过程"}},[a._v("#")]),a._v(" 创建一个线程的过程：")]),a._v(" "),t("ol",[t("li",[a._v("它为一个线程栈分配内存，该栈为每个线程方法调用保存一个栈帧")]),a._v(" "),t("li",[a._v("每一栈帧由一个局部变量数组、返回值、操作数堆栈和常量池组成")]),a._v(" "),t("li",[a._v("一些支持本机方法的 jvm 也会分配一个本机堆栈")]),a._v(" "),t("li",[a._v("每个线程获得一个程序计数器，告诉它当前处理器执行的指令是什么")]),a._v(" "),t("li",[a._v("系统创建一个与Java线程对应的本机线程")]),a._v(" "),t("li",[a._v("将与线程相关的描述符添加到JVM内部数据结构中")]),a._v(" "),t("li",[a._v("线程共享堆和方法区域")])]),a._v(" "),t("p",[a._v("这段描述稍稍有点抽象，用数据来说明创建一个线程（即便不干什么）需要多大空间呢？答案是大约  "),t("code",[a._v("1M")]),a._v("  左右")]),a._v(" "),t("h3",{attrs:{id:"_1-3-不好管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-不好管理"}},[a._v("#")]),a._v(" 1.3 不好管理")]),a._v(" "),t("p",[a._v("线程的名字不统一，可能无限制新建线程，可能占用过多系统资源导致死机或OOM。而重用存在的线程，减少对象创建、消亡的开销，性能佳。")]),a._v(" "),t("h2",{attrs:{id:"_2-什么是线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是线程池"}},[a._v("#")]),a._v(" 2. 什么是线程池")]),a._v(" "),t("p",[a._v("在Java 5之后，Java通过Executor来启动线程，比使用Thread的start方法更好，除了更易管理，效率更好（用线程池实现，节约开销）外，还有关键的一点：有助于避免this逃逸问题。")]),a._v(" "),t("p",[a._v("简单的说就是把线程统一管理。")]),a._v(" "),t("p",[a._v("线程池优势：\n（1）降低系统资源消耗，通过重用已存在的线程，降低线程创建和销毁造成的消耗；")]),a._v(" "),t("p",[a._v("（2）提高系统响应速度，当有任务到达时，通过复用已存在的线程，无需等待新线程的创建便能立即执行；")]),a._v(" "),t("p",[a._v("（3）方便线程并发数的管控。因为线程若是无限制的创建，可能会导致内存占用过多而产生OOM，并且会造成cpu过度切换（cpu切换线程是有时间成本的（需要保持当前执行线程的现场，并恢复要执行线程的现场））。")]),a._v(" "),t("p",[a._v("（4）提供更强大的功能，延时定时线程池。")]),a._v(" "),t("h3",{attrs:{id:"java的4种默认线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java的4种默认线程池"}},[a._v("#")]),a._v(" Java的4种默认线程池：")]),a._v(" "),t("ol",[t("li",[t("h4",{attrs:{id:"newsinglethreadexecutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newsinglethreadexecutor"}},[a._v("#")]),a._v(" newSingleThreadExecutor")])])]),a._v(" "),t("p",[a._v("创建一个单线程的线程池。这个线程池只有一个线程在工作，也就是相当于单线程串行执行所有任务。如果这个唯一的线程因为异常结束，那么会有一个新的线程来替代它。此线程池保证所有任务的执行顺序按照任务的提交顺序执行。")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("h4",{attrs:{id:"newfixethreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newfixethreadpool"}},[a._v("#")]),a._v(" newFixeThreadPool")])])]),a._v(" "),t("p",[a._v("创建固定大小的线程池。每次提交一个任务就创建一个线程，直到线程达到线程池的最大大小。线程池的大小一旦达到最大值就会保持不变，如果某个线程因为执行异常而结束，那么线程池会补充一个新线程。")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("h4",{attrs:{id:"newcachedthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newcachedthreadpool"}},[a._v("#")]),a._v(" newCachedThreadPool")])])]),a._v(" "),t("p",[a._v("创建一个可缓存的线程池。如果线程池的大小超过了处理任务所需要的线程，那么就会回收部分空闲（60秒不执行任务）的线程，当任务数增加时，此线程池又可以智能的添加新线程来处理任务。此线程池不会对线程池大小做限制，线程池大小完全依赖于操作系统（或者说JVM）能够创建的最大线程大小。")]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("h4",{attrs:{id:"newscheduledthreadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newscheduledthreadpool"}},[a._v("#")]),a._v(" newScheduledThreadPool")]),a._v(" "),t("p",[a._v("创建一个大小无限的线程池。此线程池支持定时以及周期性执行任务的需求。")])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("参考：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/LilY5ZfsaMLELf6e13Hlzw",target:"_blank",rel:"noopener noreferrer"}},[a._v("我会手动创建线程，为什么让我使用线程池？"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);