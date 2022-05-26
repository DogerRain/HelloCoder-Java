---
title: CopyOnWriteArrayList的实现原理
date: 2022-05-26 15:39:20
permalink: /pages/CopyOnWriteArrayList%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86
categories: 
  - LearnJavaToFindAJob
  - Java基础
tags: 
  - null
lock: false
---
我们常用的ArrayList是线程不安全的，所以在高并发的场景下，我们会使用 CopyOnWriteArrayList 作为替代方案。