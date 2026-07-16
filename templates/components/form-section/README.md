# AFES FormSection Template

## 简介

FormSection 是 AFES 提供的标准复杂表单分组组件模板。

用于企业后台系统中的复杂业务表单场景。

例如：

* 用户档案
* 员工信息
* 客户资料
* 基础配置
* 审批申请
* 业务登记

基于：

* Vue3
* Composition API
* script setup
* Vite
* Element Plus
* RuoYi-Vue3

设计。

---

# 组件定位

FormSection 是：

> 表单结构组织组件。

它不负责：

* 表单数据
* 表单提交
* 表单校验
* API 请求

它负责：

* Section 分组
* 标题展示
* 描述展示
* 布局控制
* Slot 扩展

---

# 使用场景

## 场景1：员工信息表单

复杂表单：

```text
员工信息


├── 基础信息

│
├── 联系信息

│
├── 工作信息

│
└── 附件信息
```

---

## 场景2：客户档案

```text
客户资料


├── 基本资料

├── 联系方式

├── 商务信息

└── 备注
```

---

## 场景3：审批申请

```text
申请表单


├── 申请信息

├── 明细信息

├── 附件信息

└── 审批意见
```

---

# 设计目标

FormSection 需要满足：

* 表单结构统一
* AI 容易识别
* 页面层级清晰
* 支持复杂业务
* 支持动态扩展

---

# 组件职责

FormSection 负责：

## Section

提供业务区域划分。

例如：

```text
基础信息

联系方式

扩展信息
```

---

## Title

展示区域标题。

例如：

```text
用户信息
```

---

## Description

展示区域说明。

例如：

```text
请输入用户基础资料
```

---

## Layout

控制：

* 横向布局
* 间距
* 分隔

---

## Slot

承载业务 Form Item。

---

# FormSection 不负责

禁止：

* API
* Form submit
* validate
* 数据转换
* 字段定义

错误：

```javascript
submitForm()
```

错误：

```javascript
getUserInfo()
```

---

# 推荐目录

```text
form-section/

├── README.md

├── prompt.md

├── replace.md

├── example.md

└── index.vue
```

---

# 推荐使用结构

```text
Page


↓

el-form


↓

FormSection


├── FormItem

├── FormItem

└── FormItem

```

---

# 基础使用

```vue
<FormSection

  title="基础信息"

  description="填写用户基础资料"

>


  <el-form-item

    label="用户名"

  >

    <el-input />

  </el-form-item>


</FormSection>
```

---

# Props 设计

| 参数            | 类型      | 说明     |
| ------------- | ------- | ------ |
| title         | String  | 标题     |
| description   | String  | 描述     |
| border        | Boolean | 是否显示边框 |
| collapsible   | Boolean | 是否折叠   |
| defaultExpand | Boolean | 默认展开   |
| spacing       | String  | 间距     |

---

# Slots

## default

业务表单内容。

```vue
<template #default>

</template>
```

---

## title

自定义标题。

```vue
<template #title>

</template>
```

---

## extra

右侧扩展区域。

例如：

* 操作按钮
* 状态

```vue
<template #extra>

</template>
```

---

# AI Replace Guide

AI 生成复杂表单：

保持：

```text
FormSection

↓

Title

↓

Description

↓

Slot

```

替换：

* Section 名称
* 表单字段
* 布局

---

# 业务示例

## EmployeeForm

```text
FormSection


├── 基础信息

├── 联系信息

├── 工作信息

└── 附件信息

```

---

## CustomerForm

```text
FormSection


├── 客户资料

├── 联系方式

├── 合作信息

```

---

# AI Checklist

生成完成检查：

```text
□ Vue3

□ script setup

□ Section

□ Title

□ Description

□ Slot

□ Layout

□ Responsive

□ 无 API

□ 无提交逻辑

□ 无业务状态

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Template Goal

FormSection Template 目标：

建立企业复杂表单统一结构。

通过：

```text
FormSection

+

Prompt

+

Replace Guide

+

Example
```

实现：

业务需求

↓

AI 分析

↓

结构化表单

最终形成 AFES 五大组件体系：

```text
SearchForm

↓

DataTable

↓

EditDialog

↓

UploadPanel

↓

FormSection
```

覆盖：

查询

列表

编辑

上传

复杂表单

五大后台核心场景。
