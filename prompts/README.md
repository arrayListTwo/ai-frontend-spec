# AFES Prompt System

## 简介

`prompts` 是 AFES（AI Frontend Engineering Specification）的 AI 指令层。

它负责连接：

```text id="p8m4x2"
docs

规范定义

↓

templates

代码模板

↓

prompts

AI执行指令

↓

AI Coding

代码生成
```

---

# Prompt System 定位

AFES 中：

```text id="m7q3x8"
docs

回答：

为什么这样开发？



templates

回答：

生成什么代码？



prompts

回答：

AI 应该如何生成？
```

---

# 设计目标

Prompt System 用于指导：

* Claude Code
* Cursor
* Trae
* ChatGPT
* 其他 AI Coding Agent

按照 AFES 规范生成企业级前端代码。

---

# 核心原则

## 1. Prompt 不替代规范

错误：

```text id="x8m4n2"
Prompt 中写全部 Vue 规范。
```

正确：

```text id="q5m8v3"
Prompt

引用：

docs/

templates/

rules/

```

---

## 2. Prompt 负责流程

Prompt 重点描述：

AI 工作步骤。

例如：

```text id="w7n3k9"
需求分析

↓

选择模板

↓

组合组件

↓

生成代码

↓

自检
```

---

## 3. Template 负责代码结构

例如：

页面生成：

```text id="h3m7x6"
Prompt:

选择 crud-page


Template:

提供 index.vue
```

---

## 4. Rule 负责约束

例如：

Prompt：

> 使用 api.js

Rule：

> 禁止 index.vue 直接 axios

---

# Prompt Architecture

AFES Prompt 分为：

```text id="z4n8m2"
prompts/


├── README.md


├── project-init.md


├── page-generate.md


├── component-generate.md


├── review-code.md


├── refactor-code.md


└── bug-fix.md

```

---

# Prompt 类型说明

---

# 1. project-init.md

## 用途

初始化 AI 前端项目。

适用：

* 新项目创建
* 老项目接入 AFES

负责：

```text id="r6m3x9"
项目分析

↓

技术识别

↓

目录规划

↓

规范加载
```

---

# 2. page-generate.md

## 用途

生成业务页面。

例如：

输入：

```text id="c8m5q2"
生成用户管理页面
```

AI 自动判断：

```text id="k7n4x8"
CRUD


↓

crud-page


↓

SearchForm

↓

DataTable

↓

EditDialog

```

---

# 3. component-generate.md

## 用途

生成业务组件。

例如：

```text id="m5q9x3"
生成客户选择组件
```

AI 判断：

* 是否已有模板
* 是否需要新增组件

---

# 4. review-code.md

## 用途

AI Code Review。

检查：

* 规范
* 架构
* 性能
* 可维护性

---

# 5. refactor-code.md

## 用途

AI 重构代码。

例如：

```text id="x3m8q5"
优化这个 Vue 页面

符合 AFES
```

---

# 6. bug-fix.md

## 用途

AI 修复问题。

流程：

```text id="n6m2x8"
问题分析

↓

定位原因

↓

最小修改

↓

规范检查

```

---

# Prompt 执行流程

所有 Prompt 遵循：

```text id="q9m4x7"

用户需求


↓

Requirement Analysis


需求分析


↓

AFES Context Load


加载：

docs

templates

rules



↓

Template Selection


选择模板



↓

Code Generation


生成代码



↓

Self Review


自检



↓

Output


输出结果

```

---

# AI Context Loading

AI 开始任务时：

必须读取：

## 基础规范

```text id="v5m8x2"
docs/

00-project-baseline.md

01-introduction.md

03-principles.md

```

---

## 角色定义

```text id="b7n3m9"
docs/

02-role.md

```

---

## 工作流

```text id="p8x4m6"
docs/

06-workflow.md

```

---

## Coding Rules

```text id="h5m9q3"
docs/

07-coding-rules/

```

---

## Templates

根据任务选择：

```text id="s6q2m8"
templates/pages

templates/components

```

---

# Template Selection Rules

AI 不允许：

随意创建页面结构。

必须：

先判断。

---

## 页面类型判断

| 需求   | 模板        |
| ---- | --------- |
| 列表查询 | crud-page |
| 数据维护 | crud-page |
| 复杂录入 | form-page |
| 配置页面 | form-page |

---

## 组件选择

| 需求   | 组件          |
| ---- | ----------- |
| 搜索区域 | SearchForm  |
| 列表展示 | DataTable   |
| 编辑弹窗 | EditDialog  |
| 文件上传 | UploadPanel |
| 复杂分组 | FormSection |

---

# Output Rules

AI 输出代码时：

必须：

* 符合 Vue3
* 使用 Composition API
* 使用 script setup
* 遵循目录规范
* 使用已有模板

禁止：

* 随机创建结构
* 重复造轮子
* 引入无必要依赖

---

# Prompt Maintenance Rules

Prompt 修改原则：

## 可以修改：

* 流程
* 判断规则
* 模板选择策略

---

## 不应该修改：

业务代码

---

# Version Management

Prompt 版本跟随 AFES：

```text id="m3x8q5"
AFES

v1.x


docs

templates

prompts

rules

```

保持同步。

---

# Future Extension

未来支持：

```text id="k9m5x7"
prompts/


├── mcp-generate.md


├── agent-workflow.md


├── project-review.md


├── architecture-design.md


└── migration.md

```

---

# Goal

AFES Prompt System 的目标：

让 AI 不只是：

生成代码。

而是：

```text id="w8n3m6"
理解需求

↓

理解规范

↓

选择模板

↓

组合组件

↓

生成代码

↓

自动检查

```

最终实现：

**AI 驱动的标准化前端工程生产流程。**
