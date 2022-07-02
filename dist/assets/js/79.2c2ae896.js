(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{655:function(_,v,o){"use strict";o.r(v);var e=o(32),d=Object(e.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("p",[_._v("我们知道事务有ACID四个，四个事务的实现是通过InnoDB日志和锁来保证的。")]),_._v(" "),o("p",[o("strong",[_._v("隔离性")]),_._v("是通过数据库锁的机制实现的。")]),_._v(" "),o("p",[o("strong",[_._v("持久性")]),_._v("通过redo log（重做日志）来实现")]),_._v(" "),o("p",[o("strong",[_._v("原子性")]),_._v("和"),o("strong",[_._v("一致性")]),_._v("通过Undo log来实现。")]),_._v(" "),o("h2",{attrs:{id:"_1、bin-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1、bin-log"}},[_._v("#")]),_._v(" 1、bin log")]),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v(" 用于记录数据库执行的写入性操作(不包括查询)信息，以二进制的形式保存在磁盘中。"),o("code",[_._v("binlog")]),_._v(" 是 "),o("code",[_._v("mysql")]),_._v("的逻辑日志，并且由 "),o("code",[_._v("Server")]),_._v(" 层进行记录，使用任何存储引擎的 "),o("code",[_._v("mysql")]),_._v(" 数据库都会记录 "),o("code",[_._v("binlog")]),_._v(" 日志。")]),_._v(" "),o("blockquote",[o("p",[_._v("所以binlog日志并不是innodb独有的，它是server层的日志")])]),_._v(" "),o("p",[_._v("既然是server层的日志，它记录的都是事务操作内容，是一种逻辑日志。")]),_._v(" "),o("blockquote",[o("p",[_._v("逻辑日志：可以简单理解为记录的就是sql语句 。")])]),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v(" 是通过追加的方式进行写入的，可以通过"),o("code",[_._v("max_binlog_size")]),_._v(" 参数设置每个 "),o("code",[_._v("binlog")]),_._v("文件的大小，当文件大小达到给定值之后，会生成新的文件来保存日志。")]),_._v(" "),o("h3",{attrs:{id:"binlog使用场景"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binlog使用场景"}},[_._v("#")]),_._v(" binlog使用场景：")]),_._v(" "),o("ol",[o("li",[o("code",[_._v("binlog")]),_._v("可以作为恢复数据使用，通过使用 "),o("code",[_._v("mysqlbinlog")]),_._v(" 工具来恢复数据。")]),_._v(" "),o("li",[_._v("主从复制搭建（数据同步）。在 "),o("code",[_._v("Master")]),_._v(" 端开启 "),o("code",[_._v("binlog")]),_._v(" ，然后将 "),o("code",[_._v("binlog")]),_._v("发送到各个 "),o("code",[_._v("Slave")]),_._v(" 端， "),o("code",[_._v("Slave")]),_._v(" 端重放 "),o("code",[_._v("binlog")]),_._v(" 从而达到主从数据一致")])]),_._v(" "),o("h3",{attrs:{id:"binlog刷盘时机"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binlog刷盘时机"}},[_._v("#")]),_._v(" binlog刷盘时机：")]),_._v(" "),o("p",[_._v("MySQL数据库中的任何存储引擎对于数据库的更改都会产生"),o("code",[_._v("binlog")]),_._v("，此时记录还在内存中，那么 "),o("code",[_._v("biglog")]),_._v("是什么时候刷到磁盘中的呢？")]),_._v(" "),o("ul",[o("li",[_._v("0：不去强制要求，由系统自行判断何时写入磁盘；")]),_._v(" "),o("li",[_._v("1：每次 "),o("code",[_._v("commit")]),_._v(" 的时候都要将 "),o("code",[_._v("binlog")]),_._v(" 写入磁盘；")]),_._v(" "),o("li",[_._v("N：每N个事务，才会将 "),o("code",[_._v("binlog")]),_._v(" 写入磁盘。")])]),_._v(" "),o("p",[_._v("从上面可以看出， "),o("code",[_._v("sync_binlog")]),_._v(" 最安全的是设置是 "),o("code",[_._v("1")]),_._v(" ，这也是"),o("code",[_._v("MySQL 5.7.7")]),_._v("之后版本的默认值。但是设置一个大一些的值可以提升数据库性能，因此实际情况下也可以将值适当调大，牺牲一定的一致性来获取更好的性能。")]),_._v(" "),o("h3",{attrs:{id:"binlog日志格式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binlog日志格式"}},[_._v("#")]),_._v(" binlog日志格式：")]),_._v(" "),o("p",[o("code",[_._v("binlog")]),_._v(" 日志有三种格式，分别为 "),o("code",[_._v("STATMENT")]),_._v(" 、 "),o("code",[_._v("ROW")]),_._v(" 和 "),o("code",[_._v("MIXED")]),_._v("。")]),_._v(" "),o("blockquote",[o("p",[_._v("在 "),o("code",[_._v("MySQL 5.7.7")]),_._v(" 之前，默认的格式是 "),o("code",[_._v("STATEMENT")]),_._v(" ， "),o("code",[_._v("MySQL 5.7.7")]),_._v(" 之后，默认值是 "),o("code",[_._v("ROW")]),_._v("。日志格式通过 "),o("code",[_._v("binlog-format")]),_._v(" 指定。")])]),_._v(" "),o("ul",[o("li",[o("p",[o("code",[_._v("STATMENT")]),_._v("：基于"),o("code",[_._v("SQL")]),_._v(" 语句的复制( "),o("code",[_._v("statement-based replication, SBR")]),_._v(" )，每一条会修改数据的sql语句会记录到"),o("code",[_._v("binlog")]),_._v(" 中  。")])]),_._v(" "),o("li",[o("ul",[o("li",[_._v("优点：不需要记录每一行的变化，减少了 binlog 日志量，节约了 IO  , 从而提高了性能；")]),_._v(" "),o("li",[_._v("缺点：在某些情况下会导致主从数据不一致，比如执行sysdate() 、  slepp()  等 。")])])]),_._v(" "),o("li",[o("p",[o("code",[_._v("ROW")]),_._v("：基于行的复制("),o("code",[_._v("row-based replication, RBR")]),_._v(" )，不记录每条sql语句的上下文信息，仅需记录哪条数据被修改了。")])]),_._v(" "),o("li",[o("ul",[o("li",[_._v("优点：不会出现某些特定情况下的存储过程、或function、或trigger的调用和触发无法被正确复制的问题 ；")]),_._v(" "),o("li",[_._v("缺点：会产生大量的日志，尤其是"),o("code",[_._v("alter table")]),_._v(" 的时候会让日志暴涨")])])]),_._v(" "),o("li",[o("p",[o("code",[_._v("MIXED")]),_._v("：基于"),o("code",[_._v("STATMENT")]),_._v(" 和 "),o("code",[_._v("ROW")]),_._v(" 两种模式的混合复制("),o("code",[_._v("mixed-based replication, MBR")]),_._v(" )，一般的复制使用"),o("code",[_._v("STATEMENT")]),_._v(" 模式保存 "),o("code",[_._v("binlog")]),_._v(" ，对于 "),o("code",[_._v("STATEMENT")]),_._v(" 模式无法复制的操作使用 "),o("code",[_._v("ROW")]),_._v(" 模式保存 "),o("code",[_._v("binlog")])])])]),_._v(" "),o("h2",{attrs:{id:"_2、redo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2、redo-log"}},[_._v("#")]),_._v(" 2、redo log")]),_._v(" "),o("p",[_._v("redo log 是 InnoDB 引擎特有的。redo log作为异常宕机或者介质故障后的数据恢复使用。所以这也是持久性的依赖，只要事务提交成功，数据库对已经修改的数据就被永久保存下来了。")]),_._v(" "),o("h3",{attrs:{id:"有了binglog为什么还要有redolog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#有了binglog为什么还要有redolog"}},[_._v("#")]),_._v(" 有了binglog为什么还要有redolog？")]),_._v(" "),o("p",[_._v("主要原因如下：")]),_._v(" "),o("ol",[o("li",[_._v("binlog会记录所有的日志，是关于一个事务的逻辑日志，而redolog只需要记录innodb引擎本身的日志")]),_._v(" "),o("li",[_._v("innodb是以页为单位和磁盘进行交互的，如果一个事务只修改一个数据页里面的几个字节，那将整个数据页刷盘就很浪费资源了；或者一个事务可能涉及修改多个数据页，而且binlog是随机写，如果每次事务提交都刷盘，会极大影响数据库的性能。")]),_._v(" "),o("li",[_._v("确保事务的持久性，如果binlog在刷盘的时候宕机了，就真的丢失了（当然binlog可以每次都刷盘但是性能不好），redo log的落盘并不是随着事务的提交才写入的，而是在事务的执行过程中，便开始写入 "),o("code",[_._v("redo log buffer")]),_._v("中，所以在恢复的时候，redolog依然记录了宕机前的数据。")])]),_._v(" "),o("p",[_._v("因此设计了redolog， "),o("strong",[_._v("具体来说就是只记录事务对数据页做了哪些修改")]),_._v("，这样就能完美地解决性能问题了(相对而言文件更小并且是顺序IO)。")]),_._v(" "),o("h3",{attrs:{id:"redo-log-概念"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-概念"}},[_._v("#")]),_._v(" redo log 概念")]),_._v(" "),o("p",[o("code",[_._v("redo log")]),_._v("记录的是新数据的备份。在事务提交前，只要将"),o("code",[_._v("redo log")]),_._v("持久化即可，不需要将数据持久化。当系统崩溃时，虽然数据没有持久化，但是"),o("code",[_._v("redo log")]),_._v("已经持久化。系统可以根据"),o("code",[_._v("redo log")]),_._v("的内容，将所有数据恢复到最新的状态。 （从而达到持久性）")]),_._v(" "),o("h3",{attrs:{id:"redo-log-工作过程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-工作过程"}},[_._v("#")]),_._v(" redo log 工作过程")]),_._v(" "),o("p",[o("code",[_._v("mysql")]),_._v(" 每执行一条 "),o("code",[_._v("DML")]),_._v(" 语句，先将记录写入 "),o("code",[_._v("redo log buffer")]),_._v("，后续某个时间点再一次性将多个操作记录写到 "),o("code",[_._v("redo log file")]),_._v("。这种 "),o("strong",[_._v("先写日志，再写磁盘")]),_._v(" 的技术就是 "),o("code",[_._v("MySQL")]),_._v("\n里经常说到的 "),o("code",[_._v("WAL(Write-Ahead Logging)")]),_._v(" 技术。")]),_._v(" "),o("p",[_._v("在计算机操作系统中，用户空间( "),o("code",[_._v("user space")]),_._v(" )下的缓冲区数据一般情况下是无法直接写入磁盘的，中间必须经过操作系统内核空间( "),o("code",[_._v("kernel space")]),_._v(" )缓冲区( "),o("code",[_._v("OS Buffer")]),_._v(" )。")]),_._v(" "),o("p",[_._v("因此， "),o("code",[_._v("redo log buffer")]),_._v(" 写入 "),o("code",[_._v("redo logfile")]),_._v(" 实际上是先写入 "),o("code",[_._v("OS Buffer")]),_._v(" ，然后再通过系统调用 "),o("code",[_._v("fsync()")]),_._v(" 将其刷到 "),o("code",[_._v("redo log file")]),_._v("\n中，过程如下：")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-202112image-20210824174026761.png",alt:""}})]),_._v(" "),o("p",[_._v("redolog支持三种将 "),o("code",[_._v("redo log buffer")]),_._v(" 写入 "),o("code",[_._v("redo log file")]),_._v(" 的时机，可以通过 "),o("code",[_._v("innodb_flush_log_at_trx_commit")]),_._v(" 参数配置：")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-202112image-20210824174356130.png",alt:""}})]),_._v(" "),o("p",[_._v("由 "),o("code",[_._v("binlog")]),_._v(" 和 "),o("code",[_._v("redo log")]),_._v(" 的区别可知："),o("code",[_._v("binlog")]),_._v(" 日志只用于归档，只依靠 "),o("code",[_._v("binlog")]),_._v(" 是没有 "),o("code",[_._v("crash-safe")]),_._v(" 能力的。")]),_._v(" "),o("p",[_._v("但只有 "),o("code",[_._v("redo log")]),_._v(" 也不行，因为 "),o("code",[_._v("redo log")]),_._v(" 是 "),o("code",[_._v("InnoDB")]),_._v("特有的，且日志上的记录落盘后会被覆盖掉。因此需要 "),o("code",[_._v("binlog")]),_._v("和 "),o("code",[_._v("redo log")]),_._v("二者同时记录，才能保证当数据库发生宕机重启时，数据不会丢失。")]),_._v(" "),o("h2",{attrs:{id:"_3、undo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3、undo-log"}},[_._v("#")]),_._v(" 3、undo log")]),_._v(" "),o("p",[o("code",[_._v("undo log")]),_._v("的原理很简单，为了满足事务的"),o("strong",[_._v("原子性")]),_._v("，在操作任何数据之前，首先将数据备份到一个地方（这个存储数据备份的地方称为"),o("code",[_._v("undo log")]),_._v("）。然后进行数据的修改。如果出现了错误或者用户执行了"),o("code",[_._v("ROLLBACK")]),_._v("语句，系统可以利用"),o("code",[_._v("undo log")]),_._v("中的备份将数据恢复到事务开始之前的状态。")]),_._v(" "),o("p",[_._v("简单来说就是，比如你执行一条 "),o("code",[_._v("INSERT")]),_._v(" 语句，就会对应一条"),o("code",[_._v("DELETE")]),_._v(" 的 "),o("code",[_._v("undo log")]),_._v(" ，所以发生错误或者回滚了，就能回滚到事务之前的状态了。")]),_._v(" "),o("hr"),_._v(" "),o("p",[_._v("参考：")]),_._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://juejin.cn/post/6860252224930070536",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://juejin.cn/post/6860252224930070536"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=d.exports}}]);