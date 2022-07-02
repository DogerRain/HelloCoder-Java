(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{627:function(v,_,t){"use strict";t.r(_);var a=t(32),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("JVM的垃圾回收器，似乎是每次面试都必问的，对垃圾回收器的掌握程度、可以区分一个一年和三年工作经验的程序员。")]),v._v(" "),t("p",[v._v("你对垃圾回收器熟悉，说明你知道：")]),v._v(" "),t("ul",[t("li",[v._v("项目使用的垃圾回收器")]),v._v(" "),t("li",[v._v("这种垃圾回收器的特点")]),v._v(" "),t("li",[v._v("JVM的参数")]),v._v(" "),t("li",[v._v("GC的情况")])]),v._v(" "),t("p",[t("strong",[v._v("常见的垃圾回收器如下：（重要）")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[v._v("收集器")])]),v._v(" "),t("th",[t("strong",[v._v("串行/并行/并发")])]),v._v(" "),t("th",[t("strong",[v._v("收集目标")])]),v._v(" "),t("th",[t("strong",[v._v("算法")])]),v._v(" "),t("th",[t("strong",[v._v("优点")])]),v._v(" "),t("th",[t("strong",[v._v("缺点")])]),v._v(" "),t("th",[v._v("特点")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[v._v("Serial New")])]),v._v(" "),t("td",[v._v("串行")]),v._v(" "),t("td",[v._v("新生代")]),v._v(" "),t("td",[v._v("复制")]),v._v(" "),t("td",[v._v("单CPU下效率高")]),v._v(" "),t("td",[v._v("产生较长时间的停顿")]),v._v(" "),t("td",[v._v("简单高效，没有现存交互开销，适用单CPU、Client模式")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("Serial Old")])]),v._v(" "),t("td",[v._v("串行")]),v._v(" "),t("td",[v._v("老年代")]),v._v(" "),t("td",[v._v("标记-整理")]),v._v(" "),t("td",[v._v("同上")]),v._v(" "),t("td",[v._v("同上")]),v._v(" "),t("td",[v._v("同上")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("Parallel New")])]),v._v(" "),t("td",[v._v("并行")]),v._v(" "),t("td",[v._v("新生代")]),v._v(" "),t("td",[v._v("复制")]),v._v(" "),t("td",[v._v("单CPU下效率高，可设置可控参数")]),v._v(" "),t("td",[v._v("产生较长时间的停顿")]),v._v(" "),t("td",[v._v("简单高效，没有现存交互开销，适用多CPU、Server模式")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("Parallel Scavenge")])]),v._v(" "),t("td",[v._v("并行")]),v._v(" "),t("td",[v._v("新生代")]),v._v(" "),t("td",[v._v("复制")]),v._v(" "),t("td",[v._v("最高效率的利用CPU，高吞吐")]),v._v(" "),t("td",[v._v("产生较长时间的停顿")]),v._v(" "),t("td",[v._v("吞吐量控制，client、server模式均可以")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("Parallel Old")])]),v._v(" "),t("td",[v._v("并行")]),v._v(" "),t("td",[v._v("老年代")]),v._v(" "),t("td",[v._v("标记-整理")]),v._v(" "),t("td",[v._v("多CPU下效率高")]),v._v(" "),t("td",[v._v("产生较长时间的停顿")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("CMS")])]),v._v(" "),t("td",[v._v("并发")]),v._v(" "),t("td",[v._v("老年代")]),v._v(" "),t("td",[v._v("标记-清除")]),v._v(" "),t("td",[v._v("最小的停顿时间，低停顿")]),v._v(" "),t("td",[v._v("CPU资源敏感,无法处理浮动垃圾,产生大量内存碎片")]),v._v(" "),t("td",[v._v("适合互联网B/S系统服务端")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("G1")])]),v._v(" "),t("td",[v._v("并发")]),v._v(" "),t("td",[v._v("新生代+老年代")]),v._v(" "),t("td",[v._v("标记-整理")]),v._v(" "),t("td",[v._v("分代收集,空间整合(标记整理算法),可预测停顿")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("面向服务端应用")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("一般说的 Serial收集器 都是指  Serial New")])]),v._v(" "),t("h2",{attrs:{id:"_1、并发垃圾收集和并行垃圾收集的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、并发垃圾收集和并行垃圾收集的区别"}},[v._v("#")]),v._v(" 1、并发垃圾收集和并行垃圾收集的区别")]),v._v(" "),t("p",[v._v("（A）、并行（Parallel）")]),v._v(" "),t("p",[v._v("​    指多条垃圾收集线程并行工作，但此时用户线程仍然处于等待状态；")]),v._v(" "),t("p",[v._v("​    如 ParNew、Parallel Scavenge、Parallel Old；")]),v._v(" "),t("p",[v._v("（B）、并发（Concurrent）")]),v._v(" "),t("p",[v._v("​    指"),t("strong",[v._v("用户线程与垃圾收集线程同时执行")]),v._v("（但不一定是并行的，可能会交替执行）；")]),v._v(" "),t("p",[v._v("用户程序在继续运行，而垃圾收集程序线程运行于另一个CPU上；")]),v._v(" "),t("p",[v._v("​    如CMS、G1（也有并行）；")]),v._v(" "),t("h2",{attrs:{id:"_2、minor-gc和full-gc的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、minor-gc和full-gc的区别"}},[v._v("#")]),v._v(" 2、Minor GC和Full GC的区别")]),v._v(" "),t("p",[v._v("（A）、Minor GC")]),v._v(" "),t("p",[v._v("​    又称新生代GC，指发生在"),t("strong",[v._v("新生代")]),v._v("（包括 Eden 和 Survivor 区域）的垃圾收集动作；")]),v._v(" "),t("p",[v._v("​    因为Java对象大多是朝生夕灭，所以Minor GC非常频繁，一般回收速度也比较快；")]),v._v(" "),t("p",[v._v("（B）、Full GC")]),v._v(" "),t("p",[v._v("​    又称老年代GC，指发生在"),t("strong",[v._v("老年代")]),v._v("的GC；")]),v._v(" "),t("p",[v._v("​    出现Full GC经常会伴随至少一次的Minor GC；")]),v._v(" "),t("p",[v._v("Full GC速度一般比Minor GC慢10倍以上；")]),v._v(" "),t("h2",{attrs:{id:"_3、full-gc触发机制是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、full-gc触发机制是什么"}},[v._v("#")]),v._v(" 3、Full GC触发机制是什么")]),v._v(" "),t("p",[v._v("（1）调用System.gc时，系统建议执行Full GC，但是不必然执行")]),v._v(" "),t("p",[v._v("（2）老年代空间不足")]),v._v(" "),t("p",[v._v("（3）方法区空间不足")]),v._v(" "),t("p",[v._v("（4）通过Minor GC后进入老年代的平均大小大于老年代的可用内存")]),v._v(" "),t("p",[v._v("（5）由Eden区、survivor space1（From Space）区向survivor space2（To Space）区复制时，对象大小 大于To Space可用内存，则把该对象转存到老年代，且该对象大于老年代的可用内存时。")]),v._v(" "),t("h2",{attrs:{id:"_4、聊聊你熟悉的或者项目中用的垃圾回收器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、聊聊你熟悉的或者项目中用的垃圾回收器"}},[v._v("#")]),v._v(" 4、聊聊你熟悉的或者项目中用的垃圾回收器")]),v._v(" "),t("blockquote",[t("p",[v._v("我列举平时自己用的比较多的垃圾回收器，其中重要的是CMS和G1")])]),v._v(" "),t("p",[v._v("有连线的表示可以搭配使用：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic3.zhimg.com/v2-e5cf2fdcb65ee31fbb7bbaaf9556622b_1440w.jpg",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"_1、parnew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、parnew"}},[v._v("#")]),v._v(" 1、ParNew")]),v._v(" "),t("blockquote",[t("p",[v._v("Parallel  是并行的意思，New 是新生代的意思，所以 ParNew 的意思是新生代采用了多线程回收")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-20210801/image-20210902104007665.png",alt:""}})]),v._v(" "),t("p",[v._v("新生代收集器，其实就是Serial的多线程版本。收集算法、Stop the World、对象分配规则、回收策略等都与"),t("strong",[v._v("Serial收集器")]),v._v("完全一样。")]),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("p",[v._v("使用复制算法，关注缩短垃圾收集时间，可以和CMS收集器配合工作。")]),v._v(" "),t("blockquote",[t("p",[v._v("CMS是HotSpot在JDK1.5推出的第一款真正意义上的并发（Concurrent）收集器，第一次实现了让垃圾收集线程与用户线程（基本上）同时工作；")]),v._v(" "),t("p",[t("strong",[v._v("CMS")]),v._v("作为老年代收集器，但却无法与JDK1.4已经存在的新生代收集器Parallel Scavenge配合工作；")]),v._v(" "),t("p",[v._v("因为Parallel Scavenge（以及G1）都没有使用传统的GC收集器代码框架，而另外独立实现；而其余几种收集器则共用了部分的框架代码；")])]),v._v(" "),t("p",[t("strong",[v._v("参数：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('"-XX:+UseConcMarkSweepGC"：指定使用CMS后，会默认使用ParNew作为新生代收集器；\n"-XX:+UseParNewGC"：强制指定使用ParNew；    \n"-XX:ParallelGCThreads"：指定垃圾收集的线程数量，ParNew默认开启的收集线程与CPU的数量相同；\n')])])]),t("h3",{attrs:{id:"_2、parallel-scavenge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、parallel-scavenge"}},[v._v("#")]),v._v(" 2、Parallel Scavenge")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-ec6b8a59ce09eab8b1e050a088a189e3_720w.jpg",alt:""}})]),v._v(" "),t("p",[v._v("复制算法，新生代的收集器。")]),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("p",[v._v("高效率的利用CPU，高吞吐，适合后台运算而不需要太多交互的任务。")]),v._v(" "),t("p",[t("strong",[v._v("参数：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("-XX:MaxGCPauseMillis 控制最大的垃圾收集停顿时间（这个参数只对Parallel Scavenge有效）\n-XX:GCRatio 直接设置吞吐量的大小。\n")])])]),t("h3",{attrs:{id:"_3、cms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、cms"}},[v._v("#")]),v._v(" 3、CMS")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://images2015.cnblogs.com/blog/249993/201703/249993-20170312201047482-791570909.png",alt:""}})]),v._v(" "),t("p",[t("strong",[v._v("标记-清除算法，老年代收集器。")])]),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("p",[v._v("等待时间很少（这也是使用"),t("strong",[v._v("标记-清除法")]),v._v("的原因），适合用户交互，提高用户体验")]),v._v(" "),t("p",[t("strong",[v._v("收集过程分为如下四步：")]),v._v("（重要）")]),v._v(" "),t("p",[v._v("(1). 初始标记，标记GCRoots能直接关联到的对象，时间很短。")]),v._v(" "),t("p",[v._v("初始标记的时候是一个 "),t("code",[v._v("STW （stop the world）")]),v._v("的过程，所有的用户线程都会停止，这个时候只是标记一下 "),t("code",[v._v("GC Roots")]),v._v(" 能直接达到的对象，由于只是标记一层所以整个速度相对会比较快。")]),v._v(" "),t("p",[v._v("(2). 并发标记，进行GCRoots Tracing（可达性分析）过程，时间很长。")]),v._v(" "),t("p",[v._v("并发标记是一个 "),t("code",[v._v("GC Roots")]),v._v(" 扫描的过程，会扫描整个链路标记可以回收的对象；由于整个的链路会比较长，所以相对会耗时久一点，不过由于这个过程是并发的，所以对用户线程运行是没有影响的，不会"),t("code",[v._v("STW")])]),v._v(" "),t("p",[v._v("(3). 重新标记，修正并发标记期间因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录，时间较长。")]),v._v(" "),t("p",[v._v("再次标记，"),t("code",[v._v("会 STW")]),v._v(" 不过速度也较快。")]),v._v(" "),t("p",[v._v("(4). 并发清除，回收内存空间，时间很长。")]),v._v(" "),t("p",[v._v("清除之前扫描的所有垃圾对象，所以会相对比较耗时，不过这个阶段是可以并发进行的所以对用户线程的运行不会有影响，不会"),t("code",[v._v("STW")]),v._v("。")]),v._v(" "),t("p",[v._v("总结一下CMS：")]),v._v(" "),t("p",[v._v("整个 "),t("code",[v._v("CMS")]),v._v(" 垃圾回收器是基于标记-清除算法的，先通过三个过程标记出需要清理的对象，然后再进行清理。整个过程中初始标记和重新标记会触发 "),t("code",[v._v("STW")]),v._v("，其他两个阶段是并发进行的。")]),v._v(" "),t("p",[v._v("标记-清除算法会产生内存碎片，所以"),t("strong",[v._v("不适合需要频繁回收的年轻代")]),v._v("，所以只"),t("strong",[v._v("适合老年代")]),v._v("。产生碎片是 "),t("code",[v._v("CMS")]),v._v(" 的缺点，并发是 "),t("code",[v._v("CMS")]),v._v(" 的优点，毕竟任何一个收集器都会有优缺点。")]),v._v(" "),t("p",[t("strong",[v._v("参数：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('"-XX:+UseCMS-CompactAtFullCollection" 用于指定在执行完FullGC 之后 是否对内存空间进行压缩整理，\n"-XX:+CMSFullGCs-BeforeCompaction" 设定在执行多少次FullGC 之后对内存空间进行压缩整理\n-XX:+CMSInitiatingOccupanyFraction" 设置老年代中的内存使用率达到多少百分比的时候执行内存回收\n"-XX:UseConMarkSweepGC" 表示年轻代使用并行收集器，老年代使用CMS  \n"-XX:ParallelGCThreads" 年轻代并行收集器工作时的线程数量可以使用，一般最好与CPU的数量相当.\n')])])]),t("h3",{attrs:{id:"_4、g1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、g1"}},[v._v("#")]),v._v(" 4、G1")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-202109/image-20210902182922317.png",alt:""}})]),v._v(" "),t("p",[t("strong",[v._v("复制算法、标记-整理算法，新生代、老年代 都回收，而不需要与其他收集器搭配；")])]),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("p",[v._v("能充分利用多CPU、多核环境下的硬件优势；可以并行来"),t("strong",[v._v('缩短"Stop The World"停顿时间')]),v._v("；也可以并发让垃圾收集与用户程序同时进行； 能独立管理整个GC堆（新生代和老年代），而不需要与其他收集器搭配；")]),v._v(" "),t("p",[v._v("虽然保留分代概念，但Java堆的内存布局有很大差别；将整个堆划分为多个大小相等的独立区域（Region）；新生代和老年代"),t("strong",[v._v("不再是物理隔离")]),v._v("，它们都是一部分Region（不需要连续）的集合；这样隔离的目的是为了不需要进行整个堆空间的扫描，"),t("code",[v._v("G1")]),v._v(" 会将每个 "),t("code",[v._v("Region")]),v._v(" 的回收成本进行量化，从而达到一个成本控制，可以在限定的停顿时间内完成回收。")]),v._v(" "),t("blockquote",[t("p",[v._v("结合多种垃圾收集算法，空间整合，不产生碎片（一般新生代中的对象基本上都是朝生夕灭的，每次只有少量对象存活，因此采用"),t("strong",[v._v("复制算法")]),v._v("，只需要复制那些少量存活的对象就可以完成垃圾收集；老年代中的对象存活率较高，就采用"),t("strong",[v._v("标记-清除")]),v._v("和"),t("strong",[v._v("标记-整理")]),v._v("算法来进行回收。）")])]),v._v(" "),t("p",[v._v("G1除了追求低停顿处，还能建立可预测的停顿时间模型；可以明确指定M毫秒时间片内，垃圾收集消耗的时间不超过N毫秒，可以并发进行，降低停顿时间，并增加吞吐量；")]),v._v(" "),t("blockquote",[t("p",[v._v("G1能实现可预测的停顿是因为它可以避免对堆中进行全区域的垃圾收集。G1跟踪各个Region里面的垃圾的价值（回收的内存大小和时间的比值）大小，在后台维护一个优先列表，每次优先回收价值最大的Region，这也是可预测停顿的实现的原理。")])]),v._v(" "),t("p",[v._v("可以分为4个步骤（与CMS较为相似）：")]),v._v(" "),t("p",[t("strong",[v._v("(1).、初始标记（Initial Marking）")])]),v._v(" "),t("p",[v._v("和CMS的初始标记一样，仅标记一下GC Roots能直接关联到的对象；")]),v._v(" "),t("p",[v._v("且修改TAMS（Next Top at Mark Start），让下一阶段并发运行时，用户程序能在正确可用的Region中创建新对象；")]),v._v(" "),t("p",[v._v("需要"),t("code",[v._v("STW")]),v._v("，但速度很快；")]),v._v(" "),t("p",[t("strong",[v._v("(2).、并发标记（Concurrent Marking）")])]),v._v(" "),t("p",[v._v("进行GC Roots Tracing的过程；")]),v._v(" "),t("p",[v._v("刚才产生的集合中标记出存活对象；")]),v._v(" "),t("p",[v._v("耗时较长，但应用程序也在运行，并发执行，不会STW；")]),v._v(" "),t("p",[v._v("并不能保证可以标记出所有的存活对象；")]),v._v(" "),t("p",[t("strong",[v._v("(3).、最终标记（Final Marking）")])]),v._v(" "),t("p",[v._v("为了修正并发标记期间因用户程序继续运作而导致标记变动的那一部分对象的标记记录；")]),v._v(" "),t("p",[v._v("上一阶段对象的变化记录在线程的Remembered Set Log；")]),v._v(" "),t("p",[v._v("这里把Remembered Set Log合并到Remembered Set中；这个过程需要停顿线程，所以需要"),t("code",[v._v("STW")]),v._v("，且停顿时间比初始标记稍长，但远比并发标记短；")]),v._v(" "),t("p",[v._v("采用多线程并行执行来提升效率；")]),v._v(" "),t("p",[t("strong",[v._v("(4).、筛选回收（Live Data Counting and Evacuation）")])]),v._v(" "),t("p",[v._v("这一步是和CMS区别最大的地方。")]),v._v(" "),t("p",[v._v("首先排序各个Region的回收价值和成本，然后根据用户期望的GC停顿时间（"),t("code",[v._v("-XX:MaxGCPauseMillis")]),v._v("）来制定回收计划，最后按计划回收一些价值高的Region中垃圾对象；")]),v._v(" "),t("p",[v._v("这个阶段也可以做到与用户程序一起并发执行（不会"),t("code",[v._v("STW")]),v._v("），但是因为只回收一部分 "),t("code",[v._v("Region")]),v._v("，时间是用户可控制的，而且停顿用户线程将大幅提高收集效率。")]),v._v(" "),t("p",[t("strong",[v._v("参数：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('"-XX:+UseG1GC"：指定使用G1收集器；\n-XX:G1NewSizePercent   Java 堆初始化大小 ，默认是整个Java堆大小的5%，\n"-XX:InitiatingHeapOccupancyPercent"：当整个Java堆的占用率达到参数值时，开始并发标记阶段；默认为45；\n"-XX:MaxGCPauseMillis"：为G1设置暂停时间目标，默认值为200毫秒；\n')])])]),t("p",[t("strong",[v._v("应用场景：")])]),v._v(" "),t("p",[v._v("面向服务端应用，针对具有大内存、多处理器的机器；")]),v._v(" "),t("p",[v._v("最主要的应用是为需要低GC延迟，并具有大堆的应用程序提供解决方案；")]),v._v(" "),t("p",[v._v("如：在堆大小约6GB或更大时，可预测的暂停时间可以低于0.5秒；")]),v._v(" "),t("blockquote",[t("p",[v._v("目前4h8g的服务器，使用的是G1")])]),v._v(" "),t("p",[t("strong",[v._v("CMS和G1的总结：")])]),v._v(" "),t("p",[t("strong",[v._v("同：")])]),v._v(" "),t("p",[v._v("都是并发和分代的垃圾回收器，并且都是低延迟的；")]),v._v(" "),t("p",[t("strong",[v._v("异：")])]),v._v(" "),t("p",[v._v("CMS 是基于"),t("code",[v._v("标记-清除算法")]),v._v("的，吞吐相对G1低一点，只适合在老年代使用，同时年轻代和老年代是物理隔离的，不可预测停顿时间，但是停顿时间短。")]),v._v(" "),t("p",[v._v("G1 是总体来说是基于 "),t("code",[v._v("标记-整理")]),v._v("（可以合理使用其他），吞吐相对高一点，可预测停顿时间的垃圾回收器，可以同时使用在年轻代和老年代，同时年轻代和老年代是逻辑隔离的。")]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("以上这么多垃圾回收器的个人总结：")])]),v._v(" "),t("p",[v._v("serial 是单线程回收新生代和老年代的，后来 parallel New 出现了新生代并行，parallel New 改善后还有Parallel Scavenge，它可以高吞吐，新生代基本就优化了，那年老代怎么办，于是 Parallel Old 出现了，老年代也进行并行回收")]),v._v(" "),t("blockquote",[t("p",[v._v("一般 Parallel Scavenge收集器+Parallel Old收集器 就可以解决大部分的痛点了")])]),v._v(" "),t("p",[v._v("但是为了"),t("strong",[v._v("回收停顿时间")]),v._v(" （但是还是不能预测）更好，"),t("strong",[v._v("CMS收集器")]),v._v("出现了，并发清理老年代，但是它用的是标记-清除（所以会有内存碎片，如果用标记-整理，就会慢一点）")]),v._v(" "),t("p",[v._v("这样一来，似乎很完美了，但是HotSpot开发团队 又搞了个 "),t("strong",[v._v("G1")]),v._v("，使新生代和老年代不再是物理隔离的了，基于复制算法、标记 - 整理多种算法，可预测的停顿时间，一起把新生代、老年代都回收了。")]),v._v(" "),t("h2",{attrs:{id:"_5、如何选择垃圾回收器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、如何选择垃圾回收器"}},[v._v("#")]),v._v(" 5、如何选择垃圾回收器")]),v._v(" "),t("h3",{attrs:{id:"_1、单cpu或内存较小-使用serial收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、单cpu或内存较小-使用serial收集器"}},[v._v("#")]),v._v(" 1、单CPU或内存较小，使用Serial收集器")]),v._v(" "),t("p",[v._v("HotSpot虚拟机运行在客户端模式下的默认新生代收集器。")]),v._v(" "),t("blockquote",[t("p",[v._v("啥叫客户端模式？比如说运行在桌面的应用程序，这种程序分配到的内存一般不会很大，，垃圾收集的停顿时间完全可以控制在十几、几十毫秒，只要不是频繁GC，停顿时间是可以接受的。")])]),v._v(" "),t("h3",{attrs:{id:"_2、多cup-关注吞吐量-后台运算而不需要太多交互的分析任务-使用parallel-scavenge收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、多cup-关注吞吐量-后台运算而不需要太多交互的分析任务-使用parallel-scavenge收集器"}},[v._v("#")]),v._v(" 2、多CUP，关注吞吐量，后台运算而不需要太多交互的分析任务，使用Parallel Scavenge收集器")]),v._v(" "),t("p",[v._v("停顿时间越短就越适合需要与用户交互或需要保证服务响应质量的程序，良好的响应速度能提升用户体验；")]),v._v(" "),t("p",[v._v("而高吞吐量则可以最高效率地利用处理器资源，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的分析任务。")]),v._v(" "),t("h3",{attrs:{id:"_3、多cpu-关注服务的响应速度-希望系统停顿时间尽可能短-使用parnew-cms收集器组合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、多cpu-关注服务的响应速度-希望系统停顿时间尽可能短-使用parnew-cms收集器组合"}},[v._v("#")]),v._v(" 3、多CPU，关注服务的响应速度，希望系统停顿时间尽可能短，使用ParNew+CMS收集器组合")]),v._v(" "),t("p",[v._v("CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。目前很大一部分的Java应用集中在互联网网站或者基于浏览器的B/S系统的服务端上，这类应用通常都会较为关注服务的响应速度，希望系统停顿时间尽可能短，以给用户带来良好的交互体验。CMS收集器就非常符合这类应用的需求。\nCMS默认启动的回收线程数是（处理器核心数量+3）/4，也就是说，如果处理器核心数在四个或以上，并发回收时垃圾收集线程只占用不超过25%的处理器运算资源，并且会随着处理器核心数量的增加而下降。")]),v._v(" "),t("h3",{attrs:{id:"_4、服务期内存较大-可以使用g1收集器。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、服务期内存较大-可以使用g1收集器。"}},[v._v("#")]),v._v(" 4、服务期内存较大，可以使用G1收集器。")]),v._v(" "),t("p",[v._v("用户程序运行过程中，G1无论是为了垃圾收集产生的内存占用（Footprint）还是程序运行时的额外执行负载（Overload）都要比CMS要高。")]),v._v(" "),t("p",[v._v("目前在小内存应用上CMS的表现大概率仍然要会优于G1，而在大内存应用上G1则大多能发挥其优势，这个优劣势的Java堆容量平衡点通常在"),t("strong",[v._v("6GB至8GB之间")]),v._v("，当然，以上这些也仅是经验之谈，不同应用需要量体裁衣地实际测试才能得出最合适的结论，随着HotSpot的开发者对G1的不断优化，也会让对比结果继续向G1倾斜。")]),v._v(" "),t("blockquote",[t("p",[v._v("以上大部分来自《深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）》")]),v._v(" "),t("p",[v._v("有空需要再看看《深入理解Java虚拟机》，补充一下各种垃圾回收器的优缺点和使用场景")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("参考：")]),v._v(" "),t("ul",[t("li",[v._v("https://www.cnblogs.com/cxxjohnson/p/8625713.html")]),v._v(" "),t("li",[v._v("介绍CMS垃圾回收器的好文：https://blog.csdn.net/zqz_zqz/article/details/70568819")])])])}),[],!1,null,null,null);_.default=e.exports}}]);