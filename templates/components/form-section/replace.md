# AFES FormSection Replace Guide

## 简介

本文档用于指导 AI 或开发人员基于 FormSection 模板快速生成具体业务表单分组组件。

核心原则：

> FormSection 负责组织表单结构，不负责业务字段逻辑。

---

# 替换范围

AI 生成业务 FormSection 时，只允许修改：

```text id="x7m2q9"
Section Title

↓

Description

↓

Content Slot

↓

Layout Configuration
```

---

# 不允许修改

禁止修改：

* Section 基础结构
* Slot 机制
* Header 结构
* 展开收起逻辑
* 样式隔离方式

禁止：

* 添加 API
* 添加提交逻辑
* 添加表单校验
* 添加数据处理

---

# 业务替换流程

---

# Step 1：识别表单区域

根据业务需求拆分 Section。

例如：

输入：

```text id="k8q4m1"
员工信息维护
```

拆分：

```text id="p3n7x5"
员工信息


├── 基础信息

├── 联系方式

├── 岗位信息

└── 附件信息
```

---

# Step 2：定义 Section 信息

原模板：

```text id="v9m5x2"
title

description
```

替换为业务描述。

例如：

```vue id="h4q8n6"
<FormSection

  title="基础信息"

  description="填写员工基本资料"

>
```

---

# Step 3：填充 Form Content

FormSection 不定义字段。

字段由业务页面提供。

正确：

```vue id="m6x3q8"
<FormSection

  title="联系方式"

>


  <el-form-item

    label="手机号"

  >


    <el-input />


  </el-form-item>


</FormSection>
```

---

错误：

```vue id="b7n4m9"
<FormSection>


  手机号


</FormSection>
```

---

# Step 4：处理复杂布局

复杂表单：

```text id="r2m8x6"
EmployeeForm


↓

FormSection


↓

FormGrid


↓

FormItem
```

FormSection 只负责：

区域。

---

# Step 5：折叠配置替换

适用于：

大型配置页面。

例如：

```vue id="z6q3n8"
<FormSection

  title="高级配置"

  collapsible

/>
```

---

# 常见业务模板

---

# EmployeeSection

场景：

员工档案。

结构：

```text id="f5m9x3"
FormSection


├── 基础信息

├── 联系方式

├── 工作信息

└── 附件资料
```

---

# CustomerSection

场景：

客户管理。

结构：

```text id="n8x4m2"
FormSection


├── 客户资料

├── 联系人

├── 商务信息

└── 备注
```

---

# ApprovalSection

场景：

审批申请。

结构：

```text id="c3m7x9"
FormSection


├── 申请信息

├── 业务明细

├── 附件

└── 审批意见
```

---

# ConfigSection

场景：

系统配置。

结构：

```text id="q5m8v1"
FormSection


├── 基础配置

├── 高级配置

└── 扩展配置
```

---

# AI 生成示例

输入：

```text id="t7x2m6"
生成订单编辑表单。


要求：

分成：

订单信息

商品信息

收货信息
```

AI 应生成：

```text id="w8n4q3"
OrderForm


├── FormSection

│

│   title="订单信息"


├── FormSection

│

│   title="商品信息"


└── FormSection

    title="收货信息"
```

---

# Slot 替换规则

## Title

简单场景：

```vue id="k9m3x7"
title="基础信息"
```

复杂场景：

```vue id="p4n8q2"
<template #title>

 自定义标题

</template>
```

---

## Extra

用于：

* 按钮
* 状态
* 操作

示例：

```vue id="y6m2x8"
<template #extra>


  <el-button>


    编辑


  </el-button>


</template>
```

---

# 错误示例

## ❌ FormSection 调接口

错误：

```javascript id="m7x3q5"
loadData()
```

原因：

组件只负责布局。

---

## ❌ FormSection 管理表单

错误：

```javascript id="c9n4m6"
submit()
```

原因：

页面负责提交。

---

## ❌ Section 固定字段

错误：

```vue id="z8q5m2"
<FormSection>


 用户名


 手机号


</FormSection>
```

原因：

降低复用。

---

# AI Checklist

生成完成检查：

```text id="s4m8x2"
□ Section 结构保留

□ Title 正确

□ Description 正确

□ Slot 使用正确

□ Layout 清晰

□ 可嵌套

□ 无字段绑定

□ 无 API

□ 无提交逻辑

□ 无 Store

□ 无 Router

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Goal

FormSection Replace Guide 的目标：

让 AI 能够稳定生成：

```text id="n5x7m3"
复杂业务表单


↓

区域拆分


↓

FormSection


↓

FormItem
```

最终形成：

需求描述

↓

AI 分析

↓

结构化表单

↓

标准页面代码

满足 AFES：

**复杂表单可生成、可维护、可扩展。**
