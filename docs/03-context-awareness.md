# 03. Context Awareness

> **Objective**
>
> 定义 AI 在开始任何开发任务之前必须完成的上下文分析（Context Analysis）。
>
> AI 不应孤立理解当前需求，而应结合项目、模块、业务和技术上下文进行分析，确保输出符合项目实际情况。

---

# 1. Context Overview

AI 在开始编码前，应完成以下四层上下文分析：

```text
Project Context
        ↓
Module Context
        ↓
Business Context
        ↓
Technical Context
        ↓
Coding
```

任何开发任务均不得跳过 Context Analysis。

---

# 2. Project Context（项目上下文）

## Objective

理解整个项目，而不是当前文件。

AI 应首先确认：

### 技术栈

- Vue3
- Composition API
- `<script setup>`
- Vite
- Element Plus
- Pinia
- Axios
- SCSS

### 项目框架

默认项目：

> RuoYi-Vue3

### 工程目录

AI 应理解：

```text
src/

├── api
├── assets
├── components
├── directive
├── layout
├── plugins
├── router
├── store
├── utils
└── views
```

不得假设项目目录。

必须基于真实目录分析。

---

# 3. Module Context（模块上下文）

## Objective

理解当前模块已有能力。

AI 应分析：

- 当前页面
- 当前模块
- 当前 API
- 当前 Store
- 当前路由
- 当前公共组件

例如：

```text
views/

ledger/

list.vue

↓

api/

ledger.js

↓

是否已有：

Dialog

Upload

SearchForm

TableToolbar
```

不得重复实现。

---

# 4. Business Context（业务上下文）

AI 应分析业务特征。

包括：

## 是否涉及：

- 查询
- 新增
- 编辑
- 删除
- 导出
- 导入
- 上传附件
- 字典转换
- 权限控制
- 分页
- 树结构
- 审批流程

例如：

如果存在：

```text
status
```

AI 应确认：

是否已有 Dict。

而不是：

自己写：

```javascript
status == 0 ? "启用" : "停用"
```

---

# 5. Technical Context（技术上下文）

AI 应确认：

## Vue

必须：

- Composition API
- `<script setup>`

禁止：

- Options API
- this.xxx
- mixins
- Vue.extend

---

## State

优先：

Pinia

---

## Request

统一：

Axios

不得：

自行封装 Fetch。

---

## Style

统一：

SCSS

保持现有样式风格。

---

# 6. Existing Assets Analysis（已有能力分析）

新增任何功能之前，应优先检查：

## Components

是否已有：

- Upload
- SearchForm
- DataTable
- Dialog
- Pagination
- DictTag
- RightToolbar

## Utils

是否已有：

- download
- auth
- request
- modal

## Hooks

是否已有：

Composable。

## API

是否已有：

对应接口。

---

# 7. Similar Page Analysis（相似页面分析）

AI 应主动寻找：

项目中是否已有类似页面。

例如：

新增：

```text
客户台账
```

应先寻找：

```text
员工台账

资产台账

合同台账
```

优先参考：

页面结构。

禁止：

重新设计页面。

---

# 8. Context Checklist

Coding 前必须确认：

## Project

- [ ] 已确认项目技术栈
- [ ] 已确认目录结构

## Module

- [ ] 已阅读当前模块
- [ ] 已阅读 API
- [ ] 已阅读组件

## Business

- [ ] 已理解业务
- [ ] 已确认权限
- [ ] 已确认字典
- [ ] 已确认上传
- [ ] 已确认分页

## Technical

- [ ] 使用 Composition API
- [ ] 使用 `<script setup>`
- [ ] 使用 Pinia
- [ ] 使用 Axios

---

# 9. AI Decision

只有满足以下条件，AI 才允许开始 Coding：

✅ 已理解需求

✅ 已完成 Context Analysis

✅ 已确认可复用能力

✅ 已确认技术基线

否则，应继续分析，而不是立即生成代码。

---

# 10. Summary

AI 在企业项目中的第一项工作不是编写代码，而是理解上下文。

AFES 要求 AI 在每次开发任务开始前，完成四层上下文分析：

- Project Context（项目）
- Module Context（模块）
- Business Context（业务）
- Technical Context（技术）

只有建立完整上下文后，才能开始实现功能。

> **Context First，Coding Second。**
