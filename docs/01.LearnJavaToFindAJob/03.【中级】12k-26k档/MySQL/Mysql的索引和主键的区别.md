---
title: Mysql的索引和主键的区别
date: 2022-06-02 11:18:18
lock: false
permalink: /pages/Mysql%E7%9A%84%E7%B4%A2%E5%BC%95%E5%92%8C%E4%B8%BB%E9%94%AE%E7%9A%84%E5%8C%BA%E5%88%AB
categories: 
  - LearnJavaToFindAJob
  - 【中级】12k-26k档
  - MySQL
tags: 
  - Mysql
  - 索引
  - 主键的区别
  - 索引和主键
  - 区别
---
 索引是一种文件，它里面包含着对数据表里所有记录的引用指针。



1、主键一定是唯一性的索引，唯一性的索引不一定就是主键。

> 所以主键也是一种索引，主键拥有索引的特性

 主键就是能够唯一标识表中某一行的属性或者是属性组，一个表只能有一个主键，但可以有多个候选索引。因为主键可以唯一标识一行记录，所以可以确保执行数据更新、删除的时候不会出现错误的。主键还经常和外键构成参照完整性约束，防止出现数据不一致。数据库管理系统对于主键自动生成唯一索引，所以主键也是一个特殊的索引。

 2、一个表中可以有多个唯一索引，但是主键只能有一个。

 3、主键列不允许为空值，而唯一性索引列允许空值。

4、唯一索引表示索引值唯一，可以由一个或者几个字段组成，一个表可以有唯一索引；所以主键也可以由多个字段组成，组成复合主键，同时主键也是唯一索引。



