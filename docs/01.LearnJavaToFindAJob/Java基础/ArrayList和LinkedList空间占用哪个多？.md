---
title: ArrayList和LinkedList空间占用哪个多？
date: 2022-05-26 15:39:20
permalink: /pages/ArrayList%E5%92%8CLinkedList%E7%A9%BA%E9%97%B4%E5%8D%A0%E7%94%A8%E5%93%AA%E4%B8%AA%E5%A4%9A%EF%BC%9F
categories: 
  - LearnJavaToFindAJob
  - Java基础
tags: 
  - null
lock: false
---
一般来说LinkedList的占用空间更大，因为每个节点要维护指向前后地址的两个节点。

但也不是绝对，如果刚好数据量超过ArrayList默认的临时值时，ArrayList占用的空间也是不小的，因为扩容的原因会浪费将近原来数组一半的容量。

不过，因为ArrayList的数组变量是用transient关键字修饰的，如果集合本身需要做序列化操作的话，ArrayList这部分多余的空间不会被序列化。



借用网上一张图：

![](https://cdn.jsdelivr.net/gh/DogerRain/image@main/img-20210801/image-20210830183426190.png)

