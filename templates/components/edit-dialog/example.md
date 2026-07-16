# AFES EditDialog Example

## 简介

本文档用于展示 EditDialog 如何从通用弹窗模板转换为具体业务弹窗。

AI 生成业务弹窗时，应遵循：

```text id="2m5z8k"
EditDialog Template

↓

业务字段替换

↓

Form Item

↓

Rules

↓

Submit Event

↓

业务弹窗组件
```

---

# Example 1：用户新增 / 编辑弹窗

## Business Description

生成用户维护弹窗。

功能：

* 新增用户
* 编辑用户

字段：

* 用户名
* 手机号
* 角色
* 状态

---

# Data Model

```javascript id="4x6v8a"
const formData = reactive({

  userName: '',

  phone: '',

  roleId: '',

  status: ''

})
```

---

# Rules

```javascript id="9p2m4s"
const rules = {


  userName: [

    {
      required: true,

      message: '请输入用户名',

      trigger: 'blur'

    }

  ],


  phone: [

    {
      required: true,

      message: '请输入手机号',

      trigger: 'blur'

    }

  ]

}
```

---

# Template Usage

```vue id="7k3v5m"
<EditDialog

  v-model="dialogVisible"

  title="用户编辑"

  :form-data="formData"

  :rules="rules"

  :loading="loading"

  mode="edit"

  @submit="handleSubmit"

  @cancel="handleCancel"

>


  <el-form-item

    label="用户名"

    prop="userName"

  >

    <el-input

      v-model="formData.userName"

    />


  </el-form-item>



  <el-form-item

    label="手机号"

    prop="phone"

  >

    <el-input

      v-model="formData.phone"

    />

  </el-form-item>



</EditDialog>
```

---

# Example 2：商品编辑弹窗

## Business Description

生成商品编辑弹窗。

字段：

* 商品名称
* 分类
* 价格
* 库存
* 商品状态

---

# Form Structure

```text id="4k8n3x"
ProductEditDialog


EditDialog


├── Product Name

├── Category

├── Price

├── Stock

└── Status
```

---

# Field Mapping

| 字段          | 类型          |
| ----------- | ----------- |
| productName | Input       |
| categoryId  | TreeSelect  |
| price       | InputNumber |
| stock       | InputNumber |
| status      | Select      |

---

# Example 3：订单详情弹窗

## Business Description

查看订单详情。

特点：

只读模式。

---

# Mode

```vue id="m8x5v2"
<EditDialog

  mode="view"

/>
```

---

# Behavior

view 模式：

```text id="q2n8c5"
输入框 disabled

隐藏提交按钮

保留关闭按钮
```

---

# Example 4：审批处理弹窗

## Business Description

审批流程处理。

字段：

* 审批意见
* 审批状态
* 附件

---

# Structure

```text id="9v6m3w"
ApprovalDialog


EditDialog


├── Status Select


├── Remark Textarea


└── Upload
```

---

# Custom Slot Example

复杂组件：

```vue id="3c9n7k"
<template #default>


  <UploadComponent />


</template>
```

---

# Example 5：复杂业务弹窗

## Scenario

员工信息维护。

需求：

* 基础信息
* 组织信息
* 联系方式
* 附件

---

# Recommended Structure

```text id="6k8p3z"
EmployeeDialog


EditDialog


├── Basic Form


├── Organization Form


├── Contact Form


└── Attachment Slot
```

---

# AI Generation Example

## Input

```text id="5y7m2x"
生成客户编辑弹窗。

字段：

客户名称

联系人

手机号

客户等级

地址
```

---

## Expected AI Output

AI 应生成：

```text id="8n4q6p"
CustomerEditDialog


↓

EditDialog


↓

Form Fields:


customerName

contactName

phone

level

address


↓

Rules


↓

Submit Emit

```

---

保持：

```text id="w6r2p9"
Dialog

↓

Form

↓

Validate

↓

Submit
```

---

# Common Mistakes

## 错误 1：Dialog 调接口

错误：

```javascript id="m3k7v1"
submit(){

 saveUser()

}
```

原因：

组件不负责数据提交。

---

## 错误 2：Dialog 刷新列表

错误：

```javascript id="b8x2c4"
refreshTable()
```

原因：

页面负责状态更新。

---

## 错误 3：所有字段写死

错误：

```vue id="s7p4q2"
用户名输入框

手机号输入框
```

原因：

降低 AI 复用能力。

---

# AI Checklist

生成完成检查：

```text id="h8m5z3"
□ Dialog 正常

□ Form 正常

□ Props 正确

□ Emits 正确

□ Rules 正确

□ Submit 正确

□ Cancel 正确

□ Mode 正确

□ Slot 合理

□ 无 API

□ 无 Router

□ 无业务逻辑

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Goal

通过 Example 文档，AI 可以理解：

通用 EditDialog

↓

业务表单弹窗

↓

完整 CRUD 页面

转换方式。

最终实现：

需求描述

↓

AI Prompt

↓

标准组件生成

↓

快速交付。
