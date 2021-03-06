---
title: Spring的传播行为有哪些？隔离级别有哪些？
date: 2022-06-02 11:18:20
lock: false
permalink: /pages/Spring%E7%9A%84%E4%BC%A0%E6%92%AD%E8%A1%8C%E4%B8%BA%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F
categories: 
  - LearnJavaToFindAJob
  - 【初级】6~12k档
  - Java框架
  - Spring
tags: 
  - Spring
---
## Spring的传播行为有哪些？隔离级别有哪些？

这个需要配合代码才能讲清楚。（下一章节会讲到）

**spring事务的本质其实就是数据库对事务的支持。**



**Spring 事务的传播属性**

| 常量名称                  | 常量解释                                                     |
| ------------------------- | ------------------------------------------------------------ |
| PROPAGATION_REQUIRED      | 支持当前事务，如果当前没有事务，就**新建一个事务**。这是最常见的选择，也是 Spring 默认的事务的传播。 |
| PROPAGATION_REQUIRES_NEW  | 新建事务，如果当前存在事务，把当前事务挂起。新建的事务将和被挂起的事务没有任何关系，是两个独立的事务，外层事务失败回滚之后，不能回滚内层事务执行的结果，内层事务失败抛出异常，外层事务捕获，也可以不处理回滚操作 |
| PROPAGATION_SUPPORTS      | 支持当前事务，如果当前没有事务，就以非事务方式执行。         |
| PROPAGATION_MANDATORY     | 支持当前事务，如果当前没有事务，就抛出异常。                 |
| PROPAGATION_NOT_SUPPORTED | 以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。   |
| PROPAGATION_NEVER         | 以非事务方式执行，如果当前存在事务，则抛出异常。             |
| PROPAGATION_NESTED        | 如果一个活动的事务存在，则运行在一个嵌套的事务中。如果没有活动事务，则按REQUIRED属性执行。它使用了一个单独的事务，这个事务拥有多个可以回滚的保存点。内部事务的回滚不会对外部事务造成影响。它只对DataSourceTransactionManager事务管理器起效。 |

**数据库隔离级别**

（innodb才支持）

| 隔离级别         | 隔离级别的值 | 导致的问题                                                   |
| ---------------- | ------------ | ------------------------------------------------------------ |
| Read-Uncommitted | 0            | 导致脏读                                                     |
| Read-Committed   | 1            | 避免脏读，允许不可重复读和幻读                               |
| Repeatable-Read  | 2            | 避免脏读，不可重复读，允许幻读                               |
| Serializable     | 3            | 串行化读，事务只能一个一个执行，避免了脏读、不可重复读、幻读。执行效率慢，使用时慎重 |

**Spring中的隔离级别**

| 常量                       | 解释                                                         |
| -------------------------- | ------------------------------------------------------------ |
| ISOLATION_DEFAULT          | 这是个 PlatfromTransactionManager 默认的隔离级别，使用数据库默认的事务隔离级别。另外四个与 JDBC 的隔离级别相对应。 |
| ISOLATION_READ_UNCOMMITTED | 这是事务最低的隔离级别，它充许另外一个事务可以看到这个事务未提交的数据。这种隔离级别会产生脏读，不可重复读和幻像读。 |
| ISOLATION_READ_COMMITTED   | 保证一个事务修改的数据提交后才能被另外一个事务读取。另外一个事务不能读取该事务未提交的数据。 |
| ISOLATION_REPEATABLE_READ  | 这种事务隔离级别可以防止脏读，不可重复读。但是可能出现幻像读。 |
| ISOLATION_SERIALIZABLE     | 这是花费最高代价但是最可靠的事务隔离级别。事务被处理为顺序执行。 |



## 假如Spring的隔离级别和数据库隔离级别不一致？

以Spring的为准。

spring开启事务时，拿到的当前连接，会对当前会话设置事务隔离级别。