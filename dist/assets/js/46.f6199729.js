(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{622:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Spring的拦截器和过滤器大家或多或少都会用到，那"),a("strong",[t._v("Spring拦截器和过滤器有什么区别呢？")])]),t._v(" "),a("h2",{attrs:{id:"_1、什么是拦截器、什么是过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是拦截器、什么是过滤器"}},[t._v("#")]),t._v(" 1、什么是拦截器、什么是过滤器?")]),t._v(" "),a("p",[t._v("过滤器 和 拦截器 都是AOP的编程思想，功能也大致一样，可以用来实现日志记录、登录鉴权、过滤等等，但是它们的不同点也很多，所以应用场景也不一样。")]),t._v(" "),a("p",[a("strong",[t._v("拦截器(Interceptor):")]),t._v(" 用于在某个方法被访问之前进行拦截，然后在方法执行之前或之后加入某些操作，"),a("strong",[t._v("其实就是AOP的一种实现策略")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("过滤器(Filter):")]),t._v(" 在某个请求进入前进行过滤，依赖于Servlet容器，属于Servlet规范的一部分。")]),t._v(" "),a("h2",{attrs:{id:"_1、实现原理不一样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、实现原理不一样"}},[t._v("#")]),t._v(" 1、实现原理不一样")]),t._v(" "),a("p",[t._v("1、Filter是依赖于Servlet容器，属于Servlet规范的一部分，而拦截器Interceptor则是独立存在的，比如Spring MVC的HandlerMethod、可以在任何情况下使用。")]),t._v(" "),a("p",[t._v("2、Filter的执行由Servlet"),a("strong",[t._v("函数回调")]),t._v("完成，而拦截器Interceptor通常通过"),a("strong",[t._v("动态代理")]),t._v("的方式来执行。")]),t._v(" "),a("p",[t._v("3、Filter的生命周期由Servlet容器管理，而拦截器Interceptor则可以通过IoC容器来管理，因此可以通过注入等方式来获取其他Bean的实例，因此使用会更方便。")]),t._v(" "),a("p",[t._v("4、在action的生命周期中，拦截器可以多次被调用，而过滤器只能在容器初始化时被调用一次")]),t._v(" "),a("p",[t._v("5、拦截器可以访问action上下文、值栈里的对象，而过滤器不能访问。")]),t._v(" "),a("h2",{attrs:{id:"_2、触发的时间点不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、触发的时间点不同"}},[t._v("#")]),t._v(" 2、触发的时间点不同")]),t._v(" "),a("p",[t._v("借用一张图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-20210401/image-20210517160625816.png",alt:""}})]),t._v(" "),a("p",[t._v("过滤器Filter是在请求进入容器后，但"),a("strong",[t._v("在进入servlet之前进行预处理")]),t._v("，请求结束是在servlet处理完以后。")]),t._v(" "),a("p",[t._v("拦截器 Interceptor 是在请求进入servlet后，在进入Controller（也可以说是Action，方法触发前）之前进行预处理的，Controller 中渲染了对应的视图之后请求结束。")]),t._v(" "),a("p",[t._v("所以，Filter是Servlet规范规定的，只能用于Web程序中，而拦截器既可以用于Web程序，也可以用于Application、Swing程序中。")]),t._v(" "),a("h2",{attrs:{id:"_3、加载顺序不一样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、加载顺序不一样"}},[t._v("#")]),t._v(" 3、加载顺序不一样")]),t._v(" "),a("p",[t._v("拦截器加载的时间点在SpringContext之前，所以在自定义一个拦截器的时候，不要使用"),a("code",[t._v("@Autowired")]),t._v("注入一个bean，此时bean还没有实例化，是拿不到的")]),t._v(" "),a("p",[t._v("过滤器更不可能拿到，过滤器加载比拦截器还要早。")]),t._v(" "),a("p",[a("strong",[t._v("但是如果多个过滤器和多个拦截器一起混合使用呢？它们的加载顺序是怎么样的？")])]),t._v(" "),a("p",[t._v("如果过滤器和拦截器有且仅各一个的情况下，运行的流程如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2018112819593016.png",alt:""}})]),t._v(" "),a("p",[t._v("多个拦截器和过滤器的运行流程如下（以两个为例）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181128200003636.png",alt:"多拦截器、过滤器运行流程"}})]),t._v(" "),a("h2",{attrs:{id:"_4、使用不一样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用不一样"}},[t._v("#")]),t._v(" 4、使用不一样")]),t._v(" "),a("p",[t._v("一般来说使用"),a("strong",[t._v("拦截器")]),t._v("进行"),a("strong",[t._v("微观")]),t._v("处理，比如说拦截是否有权限操作、记录操作的日志等等，常见的方法是preHandle、postHandle")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyInterceptor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HandlerInterceptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sanZangInterceptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" httpServletRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" httpServletResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" httpServletRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" httpServletResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" modelAndView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO\t")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterCompletion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" httpServletRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" httpServletResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一般来说"),a("strong",[t._v("过滤器")]),t._v("是"),a("strong",[t._v("宏观")]),t._v("上面的过滤，比如说过滤URI、用户是否登录等等，常见的方法是init、doFilter、destroy：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PointService")]),t._v(" pointService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterConfig")]),t._v(" filterConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" servletRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" servletResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" filterChain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意，以上只是简单的使用，除此之外要使用它们还需要配置过滤、拦截的路径")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[t._v("https://blog.csdn.net/jacksonary/article/details/84572701")]),t._v(" "),a("li",[t._v("https://www.zhihu.com/question/30212464/answer/1786967139")]),t._v(" "),a("li",[t._v("https://www.cnblogs.com/paddix/p/8365558.html")])])])}),[],!1,null,null,null);s.default=e.exports}}]);