# AFES DataTable Replace Guide

## 简介

本文档用于指导 AI 或开发人员基于 DataTable 模板快速生成具体业务列表组件。

核心原则：

> 保持 DataTable 架构不变，只替换业务数据结构。

DataTable 是通用列表基础组件，不应该因为业务变化重新设计。

---

# 替换范围

AI 生成业务 DataTable 时，只允许修改：

```text
columns

↓

字段

↓

slot

↓

formatter

↓

operation
```

---

# 不允许修改

禁止修改：

* Table 结构
* Loading 逻辑
* Pagination 逻辑
* Slot 机制
* Emit 定义
* 组件职责

禁止：

* 添加 API 请求
* 添加页面跳转
* 添加业务状态管理

---

# 业务替换流程

---

# Step 1：确定业务名称

原模板：

```text
DataTable
```

根据业务生成：

```text
UserTable

OrderTable

ProductTable

CustomerTable

ApprovalTable
```

---

# Step 2：定义 Columns

## 原模板

```javascript
[
  {
    label: '',
    prop: ''
  }
]
```

---

# 用户管理

替换：

```javascript
[
  {
    label: '用户名',
    prop: 'userName'
  },

  {
    label: '手机号',
    prop: 'phone'
  },

  {
    label: '状态',
    prop: 'status',
    slot: 'status'
  },

  {
    label: '创建时间',
    prop: 'createTime'
  }
]
```

---

# 订单管理

替换：

```javascript
[
  {
    label: '订单编号',
    prop: 'orderNo'
  },

  {
    label: '客户名称',
    prop: 'customerName'
  },

  {
    label: '金额',
    prop: 'amount'
  },

  {
    label: '订单状态',
    prop: 'status',
    slot: 'status'
  }
]
```

---

# 商品管理

替换：

```javascript
[
  {
    label: '商品名称',
    prop: 'productName'
  },

  {
    label: '分类',
    prop: 'categoryName'
  },

  {
    label: '库存',
    prop: 'stock'
  },

  {
    label: '状态',
    prop: 'status'
  }
]
```

---

# Step 3：增加 Slot

## 状态展示

不要：

直接显示：

```text
0
```

推荐：

```vue
<template #status="{ row }">

  <el-tag>

    {{ row.status }}

  </el-tag>

</template>
```

---

# 状态类型替换

例如：

用户状态：

```text
正常

停用
```

订单状态：

```text
待付款

已付款

已完成

取消
```

审批状态：

```text
审批中

通过

拒绝
```

---

# Step 4：操作按钮替换

## 默认：

```text
操作
```

---

# 用户管理：

```text
查看

编辑

删除
```

---

# 订单管理：

```text
查看

发货

取消
```

---

# 审批管理：

```text
查看

审批

驳回
```

---

# Step 5：Selection 替换

需要批量操作时开启：

```javascript
showSelection=true
```

例如：

用户批量：

* 删除
* 禁用

订单批量：

* 导出
* 修改状态

---

# Step 6：分页替换

保持统一：

```javascript
const pageParams = reactive({

 pageNum: 1,

 pageSize: 10,

 total: 0

})
```

不要在组件内部维护。

---

# 常见业务模板

---

# UserTable

结构：

```text
DataTable

├── 用户名

├── 手机号

├── 状态

├── 创建时间

└── 操作
```

---

# OrderTable

结构：

```text
DataTable

├── 订单号

├── 客户

├── 金额

├── 状态

├── 时间

└── 操作
```

---

# ApprovalTable

结构：

```text
DataTable

├── 申请人

├── 流程名称

├── 当前节点

├── 状态

└── 操作
```

---

# AI 生成示例

输入：

```text
生成商品管理列表。

字段：

商品名称

分类

库存

状态

操作
```

---

AI 应生成：

```text
ProductTable

↓

DataTable

↓

columns:

productName

categoryName

stock

status

operation
```

---

保持：

* Table
* Pagination
* Slot

不变。

---

# 错误示例

## ❌ 在 DataTable 中请求接口

```javascript
getUserList()
```

原因：

组件不负责数据获取。

---

## ❌ 写死业务字段

```javascript
userName
```

原因：

组件应该支持所有列表。

---

## ❌ 删除 Slot

原因：

降低扩展能力。

---

# AI Checklist

生成完成检查：

```text
□ 保留 DataTable

□ columns 正确

□ slot 正确

□ operation 正确

□ pagination 保留

□ loading 保留

□ selection 正确

□ 无 API

□ 无 Router

□ 无业务状态

□ 无重复代码

□ 符合 AFES
```

---

# Goal

DataTable Replace Guide 的目标：

让 AI 可以稳定地将通用 DataTable 转换为：

用户列表

订单列表

商品列表

审批列表

等企业业务列表组件。

通过：

模板固定

字段替换

Slot 扩展

实现 AI 高质量代码生成。
