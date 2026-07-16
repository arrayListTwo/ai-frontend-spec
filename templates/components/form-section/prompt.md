# AFES FormSection Prompt

## Role

你是一名资深前端工程师，负责根据 AFES（AI Frontend Engineering Specification）规范生成企业级复杂表单分组组件。

技术栈固定：

* Vue3
* Composition API
* script setup
* Vite
* Element Plus
* RuoYi-Vue3

目标：

生成结构清晰、可复用、适合 AI 扩展的复杂业务表单 Section 组件。

---

# Objective

根据业务需求生成 FormSection。

组件负责：

* 表单区域划分
* 标题展示
* 描述展示
* 布局控制
* Slot 扩展
* 折叠控制

组件不负责：

* 表单数据管理
* Form Ref
* 表单提交
* 表单校验
* API 请求
* Router
* Store

---

# Output Requirements

必须输出：

* 完整 index.vue
* Vue3 Composition API
* script setup
* Props
* Slots
* Scoped Style
* Responsive 支持

禁止：

* 伪代码
* TODO
* 省略核心结构
* 添加业务逻辑

---

# Component Structure

标准结构：

```text id="6z8d3m"
FormSection


├── Header

│
├── Title

│
├── Description

│
├── Extra

│
└── Content Slot

```

---

# Props Rules

至少支持：

| Prop          | Type    | Description |
| ------------- | ------- | ----------- |
| title         | String  | Section 标题  |
| description   | String  | Section 描述  |
| border        | Boolean | 是否显示边框      |
| collapsible   | Boolean | 是否可折叠       |
| defaultExpand | Boolean | 默认展开        |
| spacing       | String  | 内容间距        |

---

# Title Rules

标题必须支持：

默认：

```vue id="2axm6z"
title="基础信息"
```

也支持：

```vue id="4m8k2p"
<template #title>

</template>
```

---

# Description Rules

用于展示：

* 说明
* 提示
* 操作指导

示例：

```text id="q8m4v7"
请输入客户基础资料。
```

---

# Extra Slot Rules

支持右侧扩展：

例如：

```vue id="k6x2n9"
<template #extra>


<Button>


</template>
```

适用：

* 操作按钮
* 状态标签
* 辅助信息

---

# Default Slot Rules

核心内容必须通过：

```vue id="9v3m5q"
<slot />
```

承载。

例如：

```vue
<FormSection title="用户信息">


  <el-form-item>


  </el-form-item>


</FormSection>
```

---

# Collapse Rules

如果：

```javascript id="p8n4m2"
collapsible=true
```

组件支持：

* 展开
* 收起

默认：

```javascript
defaultExpand=true
```

---

# Layout Rules

FormSection 只控制：

区域布局。

禁止控制：

具体字段。

错误：

```vue id="m5x9q2"
<FormSection>


用户名


手机号


</FormSection>
```

正确：

```vue id="w3n7k5"
<FormSection>


<el-form-item>


</el-form-item>


</FormSection>
```

---

# Coding Rules

必须：

* Composition API
* script setup
* Slot 驱动
* Props 驱动
* Scoped Style

禁止：

* Options API
* this
* axios
* router
* store
* form submit

---

# AI Replace Rules

AI 生成复杂表单：

保持：

```text id="q7m3x8"
FormSection

↓

Header

↓

Content Slot
```

替换：

```text id="r8k2n5"
Section Title

Description

Form Items

Layout
```

---

# Business Examples

## Employee Form

输入：

```text id="z5m7x2"
员工信息表单。


分组：

基础信息

联系方式

岗位信息

附件信息
```

AI 输出：

```text id="h9q4m6"
FormSection


├── 基础信息


├── 联系方式


├── 岗位信息


└── 附件信息
```

---

## Customer Form

输入：

```text id="b6m2x8"
客户档案。


分组：

客户信息

联系人

商务信息
```

---

## Approval Form

输入：

```text id="c8n4m5"
审批申请。


分组：

申请信息

明细

附件

审批意见
```

---

# Style Rules

必须：

* Element Plus 风格
* Scoped CSS
* 简洁布局
* Responsive

禁止：

* 页面级样式
* 固定业务颜色
* 强业务 class

---

# Quality Requirements

生成完成检查：

```text id="y5n8m3"
□ Vue3

□ script setup

□ Composition API

□ Props

□ Slots

□ Title

□ Description

□ Extra

□ Collapse

□ Layout

□ Responsive

□ Scoped Style

□ 无 API

□ 无 Router

□ 无 Store

□ 无提交逻辑

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Goal

生成统一企业复杂表单分组组件。

AI 只需要替换：

* Section 名称
* Description
* Form Items
* Layout

即可生成：

员工信息表单

客户档案表单

审批申请表单

配置管理表单

保持：

结构统一

职责清晰

符合 AFES AI Coding 规范。
