# AFES SearchForm Replace Guide

## 简介

本文档用于指导 AI 或开发人员基于 SearchForm 模板快速生成业务查询组件。

目标：

保持 SearchForm 组件结构稳定，仅替换业务相关内容。

禁止重新设计组件。

---

# 替换范围

AI 生成业务 SearchForm 时，仅允许修改：

```text
业务字段

↓

查询项配置

↓

默认值

↓

字典

↓

Placeholder

↓

Slot 内容
```

---

# 不允许修改

禁止修改：

* 组件职责
* Props 设计
* Emits 设计
* Slot 结构
* 查询按钮逻辑
* 重置按钮逻辑
* 展开收起逻辑
* 响应式布局
* Style 结构

---

# 业务替换流程

## Step 1：确定业务名称

原模板：

```text
DemoSearch
```

替换：

```text
UserSearch

OrderSearch

ProductSearch

CustomerSearch
```

---

# Step 2：替换查询字段

## 示例：用户管理

原：

```text
name

status

remark
```

替换：

```text
userName

phone

status

createTime
```

---

## 示例：订单管理

替换：

```text
orderNo

customerName

orderStatus

createTime
```

---

# Step 3：替换 Form Item

## Input

原：

```text
名称
```

替换：

```text
用户名

订单号

商品名称
```

---

## Select

原：

```text
状态
```

替换：

```text
订单状态

用户状态

审批状态
```

---

## Date Range

原：

```text
时间
```

替换：

```text
创建时间

更新时间

支付时间
```

---

# Step 4：替换查询对象

## 原：

```javascript
{
    name: '',
        status: ''
}
```

## 用户：

```javascript
{
    userName: '',
        phone: '',
        status: '',
        createTime: []
}
```

## 订单：

```javascript
{
    orderNo: '',
        customerName: '',
        orderStatus: '',
        createTime: []
}
```

---

# Step 5：字典替换

推荐使用 RuoYi-Vue3 字典规范。

## 原：

```text
status
```

替换：

用户状态：

```text
sys_normal_disable
```

订单状态：

```text
order_status
```

审批状态：

```text
approve_status
```

---

# Step 6：Slot 扩展

简单页面：

使用默认 Slot：

```vue
<SearchForm>

  查询字段

</SearchForm>
```

复杂页面：

使用：

```vue
<template #actions>

</template>
```

增加：

* 导入
* 导出
* 高级查询
* 批量操作

---

# 常见业务模板

## User Search

字段：

```text
用户名

手机号

状态

创建时间
```

结构：

```text
Input

Input

Select

DateRange
```

---

## Role Search

字段：

```text
角色名称

权限字符

状态

创建时间
```

---

## Order Search

字段：

```text
订单编号

客户名称

订单状态

支付时间
```

---

## Product Search

字段：

```text
商品名称

分类

状态

创建时间
```

---

# AI 生成规则

AI 接收到：

```
生成用户管理查询组件
```

应该：

保留：

```
SearchForm

Props

Emit

Layout

Style
```

替换：

```
name

status

remark

↓

userName

phone

createTime
```

---

# 错误示例

## ❌ 不推荐

AI 重新生成：

```text
UserSearch.vue
```

重新设计：

* 新 Props
* 新 Emit
* 新布局

原因：

破坏 AFES 模板一致性。

---

## ✅ 推荐

基于：

```text
search-form/index.vue
```

复制。

只替换：

* 字段
* 字典
* Placeholder

---

# AI Checklist

生成完成检查：

```
□ 保留 SearchForm 结构

□ 保留 Props

□ 保留 Emits

□ 保留 Slots

□ 查询按钮正常

□ 重置按钮正常

□ 字典正确

□ 字段命名正确

□ 无 API

□ 无 Router

□ 无业务逻辑

□ 无重复代码

□ 符合 AFES
```

---

# Goal

SearchForm Replace Guide 的目标：

让 AI 能够稳定地基于统一模板生成不同业务查询组件。

通过：

统一结构

*

业务替换

*

AI Prompt

实现：

快速生成

高一致性

低维护成本

的企业级查询组件。
