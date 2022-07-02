(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{628:function(_,v,t){"use strict";t.r(v);var e=t(32),o=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("堆的最大值和最小值分别是Xmx和Xms指定的。一般在生产环境中，把这两个值设为同样大。使JVM进程在一启动的时候，就获得足够大小的存储空间。")]),_._v(" "),t("p",[_._v("需要根据你的业务量设置，并不是越大越好，设置大了会增加GC时间，因为堆内存越大，垃圾回收频率就低，但是一旦垃圾回收，需要的时间就越多。")]),_._v(" "),t("h2",{attrs:{id:"_1、tomcat的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、tomcat的参数"}},[_._v("#")]),_._v(" 1、Tomcat的参数")]),_._v(" "),t("p",[_._v("tomcat的"),t("code",[_._v("/bin/catalina.sh")]),_._v(" 是启动的文件，可以看到这个默认的配置文件，是没有设置堆大小的。")]),_._v(" "),t("blockquote",[t("p",[_._v("如果要设置，可以在这个文件修改 "),t("code",[_._v("JAVA_OPTS")]),_._v(" 参数即可。")])]),_._v(" "),t("ul",[t("li",[_._v("堆内存初始值分配: "),t("code",[_._v("-Xms")]),_._v("，默认是物理内存的1/64；")]),_._v(" "),t("li",[_._v("堆内存最大值分配: "),t("code",[_._v("-Xmx")]),_._v("，默认是物理内存的1/4。")])]),_._v(" "),t("p",[_._v("默认空余堆内存小于"),t("code",[_._v("40%")]),_._v("时，JVM就会增大堆直到"),t("code",[_._v("-Xmx")]),_._v("的最大限制；空余堆内存大于"),t("code",[_._v("70%")]),_._v("时，JVM会减少堆直到"),t("code",[_._v("-Xms")]),_._v("的最小限制。因此服务器一般设置"),t("code",[_._v("-Xms")]),_._v("、"),t("code",[_._v("-Xmx")]),_._v(" 相等，以避免在每次GC 后调整堆的大小。")]),_._v(" "),t("p",[_._v("一般项目中，都不需要调整很多参数进行调优，现在的JVM在GC这方面还是做的很好的。")]),_._v(" "),t("p",[_._v("如何监测业务的GC情况，可以使用"),t("strong",[_._v("JProfiler")]),_._v(" 这个软件。")]),_._v(" "),t("p",[_._v("所以总结就是，堆内存大小的设定需要根据不同的业务而定。")])])}),[],!1,null,null,null);v.default=o.exports}}]);