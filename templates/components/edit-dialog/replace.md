# AFES EditDialog Replace Guide

## 简介

本文档用于指导 AI 或开发人员基于 EditDialog 模板快速生成业务新增 / 编辑 / 查看弹窗。

核心原则：

> 保持弹窗结构稳定，只替换业务表单内容。

EditDialog 是通用表单容器，不应该随着业务变化重新设计。

---

# 替换范围

AI 生成业务 EditDialog 时，只允许修改：

```text id="9j5z1c"
title

↓

form fields

↓

form rules

↓

mode

↓

slot 内容

```

---

# 不允许修改

禁止修改：

* Dialog 生命周期
* Form 提交流程
* 校验流程
* Emit 设计
* Loading 控制
* Slot 结构

禁止：

* 添加 API
* 添加 Router
* 添加 Store
* 刷新列表

---

# 业务替换流程

---

# Step 1：确定业务名称

原模板：

```text id="l6c8v7"
EditDialog
```

根据业务生成：

```text id="9x0kdz"
UserEditDialog

OrderEditDialog

ProductEditDialog

CustomerEditDialog
```

---

# Step 2：替换 Dialog 标题

## 新增

原：

```text id="u3q3m4"
新增数据
```

替换：

```text id="c6k2n8"
新增用户

新增商品

新增订单
```

---

## 编辑

替换：

```text id="9u0x4v"
编辑用户

编辑商品

编辑客户
```

---

## 查看

替换：

```text id="t9j1p5"
查看订单详情

查看审批详情
```

---

# Step 3：替换 Form 字段

## 用户示例

原模板：

```text id="h2u8a3"
name

status
```

替换：

```text id="y5k3n6"
userName

phone

roleId

status
```

---

## 商品示例

替换：

```text id="0r6v7q"
productName

categoryId

price

stock
```

---

## 订单示例

替换：

```text id="m4k8v2"
orderNo

customerName

amount

status
```

---

# Step 4：Form Item 替换规则

## Input

适用：

* 名称
* 编号
* 描述

示例：

```vue id="5g1q0x"
<el-input
  v-model="formData.userName"
/>
```

---

## Select

适用：

* 状态
* 类型
* 分类

示例：

```vue id="u3n9ab"
<el-select
  v-model="formData.status"
/>
```

---

## DatePicker

适用：

* 日期
* 时间

示例：

```vue id="d6v5rc"
<el-date-picker
  v-model="formData.createTime"
/>
```

---

## TreeSelect

适用：

* 组织
* 分类
* 菜单

示例：

```vue id="q5b8mz"
<el-tree-select
  v-model="formData.deptId"
/>
```

---

# Step 5：替换校验 Rules

## 原：

```javascript id="8w3c8k"
{
 required:true
}
```

---

## 用户名

```javascript id="m8n3y6"
{
 required:true,

 message:'请输入用户名',

 trigger:'blur'

}
```

---

## 手机号

```javascript id="c2y7x9"
{
 pattern:/^1\d{10}$/,

 message:'请输入正确手机号'

}
```

---

# Step 6：Mode 替换

## 新增页面

```javascript id="x5z8r3"
mode='add'
```

行为：

* 清空表单
* 可编辑

---

## 编辑页面

```javascript id="k9m2f4"
mode='edit'
```

行为：

* 回填数据
* 可编辑

---

## 查看页面

```javascript id="h4y7w1"
mode='view'
```

行为：

* 禁止输入
* 隐藏提交按钮

---

# Step 7：Slot 扩展

## 自定义字段

复杂字段：

使用：

```vue id="3k6s8z"
<template #default>

</template>
```

例如：

上传：

```text id="8j2p0w"
图片上传

附件上传
```

---

## 自定义 Footer

增加：

```text id="1w7s9q"
保存并提交

保存草稿

关闭
```

---

# 常见业务模板

## UserEditDialog

字段：

```text id="w3h5n7"
用户名

手机号

角色

状态
```

---

## ProductEditDialog

字段：

```text id="v5c7x8"
商品名称

分类

价格

库存

图片
```

---

## ApprovalDialog

字段：

```text id="b6m8k2"
审批意见

审批状态

附件
```

---

# AI 生成示例

输入：

```text id="q4m7s8"
生成商品编辑弹窗。

字段：

商品名称

分类

价格

库存

状态
```

AI 应生成：

```text id="p2x8z6"
ProductEditDialog

↓

EditDialog

↓

Form:

productName

categoryId

price

stock

status

```

---

保持：

* Dialog
* Form
* Submit
* Validate

不变。

---

# 错误示例

## ❌ 弹窗内部请求接口

错误：

```javascript id="r7y1p9"
saveProduct()
```

原因：

组件不负责业务请求。

---

## ❌ 弹窗内部刷新列表

错误：

```javascript id="d8q3x1"
table.reload()
```

原因：

父组件管理页面状态。

---

## ❌ 写死业务字段

错误：

```javascript id="e3k7m2"
userName
```

原因：

降低复用。

---

# AI Checklist

生成完成：

```text id="v9s2k5"
□ 保留 EditDialog

□ Dialog 正常

□ Form 正常

□ Rules 正确

□ Mode 正确

□ Submit 正确

□ Cancel 正确

□ Slot 合理

□ 无 API

□ 无 Router

□ 无业务状态

□ 可复用

□ 符合 AFES
```

---

# Goal

EditDialog Replace Guide 的目标：

让 AI 能稳定生成：

用户维护弹窗

商品编辑弹窗

订单详情弹窗

审批处理弹窗

通过：

模板固定

字段替换

规则替换

Slot 扩展

实现企业后台弹窗组件的快速生成。
