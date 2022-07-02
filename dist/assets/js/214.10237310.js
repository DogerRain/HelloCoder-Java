(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{789:function(a,t,s){"use strict";s.r(t);var e=s(32),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"set-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-介绍"}},[a._v("#")]),a._v(" Set 介绍")]),a._v(" "),s("p",[s("code",[a._v("Set")]),a._v("是一个 "),s("strong",[a._v("可为null、不可重复")]),a._v(" 的集合。")]),a._v(" "),s("p",[a._v("至于 是否有序，要看子类的实现。")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("List")]),a._v(" 是 "),s("strong",[a._v("有序、可为null、可重复")]),a._v("的集合")])]),a._v(" "),s("p",[a._v("使用：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"set-接口的api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-接口的api"}},[a._v("#")]),a._v(" Set 接口的API")]),a._v(" "),s("p",[s("code",[a._v("Set")]),a._v(" 接口的API比List少，但用法基本一致：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://blog-1253198264.cos.ap-guangzhou.myqcloud.com/image-20210128095931650.png",alt:""}})]),a._v(" "),s("p",[a._v("一般在业务开发中，使用Set的情况比较少。")]),a._v(" "),s("h2",{attrs:{id:"set接口的实现类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set接口的实现类"}},[a._v("#")]),a._v(" Set接口的实现类")]),a._v(" "),s("p",[a._v("常见的实现类有：")]),a._v(" "),s("ul",[s("li",[a._v("HashSet")]),a._v(" "),s("li",[a._v("TreeSet")]),a._v(" "),s("li",[a._v("LinkedHashSet")])]),a._v(" "),s("h3",{attrs:{id:"hashset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[a._v("#")]),a._v(" HashSet")]),a._v(" "),s("p",[a._v("HashSet是Set接口的典型实现，大多数时候使用Set集合时一般是使用HashSet。")]),a._v(" "),s("p",[a._v("HashSet按Hash算法来存储集合中的元素，因此具有很好的存取和查找性能。底层数据结构是"),s("strong",[a._v("哈希表")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),a._v(" set "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("HashSet具有以下特点：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("不能保证元素的排列顺序")]),a._v("；")]),a._v(" "),s("li",[a._v("HashSet不是同步的（线程不安全）；")]),a._v(" "),s("li",[a._v("集合元素值可以是null；")])]),a._v(" "),s("p",[a._v("HashSet 和 HashMap 一样，用每个元素的hashCode值来计算其存储位置。")]),a._v(" "),s("h3",{attrs:{id:"linkedhashset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset"}},[a._v("#")]),a._v(" LinkedHashSet")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),a._v(" linkedHashSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("LinkedHashSet 继承 HashSet ，也是根据元素的hashCode值来决定元素的存储位置。底层数据结构是"),s("strong",[a._v("链表")]),a._v("。")]),a._v(" "),s("p",[a._v("但它同时使用链表维护元素的次序，这样使得元素看起来是以插入的顺序保存的。")]),a._v(" "),s("p",[a._v("输出集合里的元素时，元素顺序总是与添加顺序一致，因此LinkedHashSet 是有序的。")]),a._v(" "),s("p",[a._v("但是"),s("code",[a._v("LinkedHashSet")]),a._v("依然是"),s("code",[a._v("HashSet")]),a._v("，因此它"),s("strong",[a._v("不允许集合重复")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"treeset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treeset"}},[a._v("#")]),a._v(" TreeSet")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),a._v(" treeSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("TreeSet可以确保集合元素处于排序状态。")]),a._v(" "),s("p",[a._v("TreeSet内部实现的是"),s("strong",[a._v("红黑树")]),a._v("，默认整型排序为从小到大。")]),a._v(" "),s("p",[a._v("可以通过Comparator接口实现自定义排序。")])])}),[],!1,null,null,null);t.default=n.exports}}]);