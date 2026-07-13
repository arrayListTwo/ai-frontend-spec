# AI Frontend Engineering Specification (AFES)

> 一套面向 AI Coding 的企业级前端工程规范体系  
> 帮助 AI 理解项目、遵循规范、复用组件、生成高质量代码

---

## 项目简介

AFES（AI Frontend Engineering Specification）是一套专门为 AI 编码工具设计的前端工程规范体系。

它不是传统意义上的开发规范文档，也不是简单的 Prompt 集合。

AFES 的核心目标是：

> 让 AI 像团队成员一样理解项目，并按照统一工程规范完成开发任务。

AFES 将企业前端项目中的工程规则、目录结构、组件体系、页面模板、开发流程、代码规范和 Review 机制进行标准化沉淀，使 Claude Code、Cursor、GitHub Copilot、Trae 等 AI 工具能够持续生成符合团队要求的代码。

---

## 为什么要做 AFES

随着 AI Coding 的普及，团队正在面临新的问题：

### AI 不理解项目

AI 可以写代码。

但是不知道：

- 项目目录结构
- 公共组件体系
- 权限机制
- 接口规范
- 页面规范

导致生成代码质量不稳定。

---

### AI 不理解团队规范

同一个需求：

今天生成 A 风格。

明天生成 B 风格。

代码风格不统一。

维护成本越来越高。

---

### AI 不会优先复用

项目已经有：

- Upload
- DataTable
- SearchForm
- DialogForm

AI 仍然可能重新实现一套。

导致组件重复建设。

---

### AI 不具备工程思维

AI 能完成单个功能。

但往往不会：

- 分析上下文
- 评估影响范围
- 优先复用已有能力
- 自检输出质量

AFES 的目标就是解决这些问题。

---

## 项目目标

AFES 致力于构建：

### 统一的 AI 开发规范

规范 AI 的开发行为。

---

### 统一的页面模板

让 AI 生成页面时遵循固定结构。

---

### 统一的组件模板

让 AI 优先复用已有组件能力。

---

### 统一的 Prompt 体系

降低 Prompt 编写成本。

---

### 统一的 Review 机制

确保 AI 输出质量可控。

---

## 适用范围

当前版本主要适用于：

### 技术栈

```text
Vue3
Vite
Element Plus
Pinia
Vue Router
Axios
SCSS
```

### 项目类型

```text
企业后台管理系统
运营管理平台
中后台系统
数据管理平台
```

### 推荐框架

```text
RuoYi-Vue3
vue-element-admin
其他 Vue3 后台项目
```

---

## 核心设计理念

AFES 不直接约束开发人员。

AFES 主要约束：

```text
Claude Code
Cursor
GitHub Copilot
Trae
Cline
Roo Code
```

即：

> AFES 是写给 AI 的工程规范。

---

## AFES 架构

```text
                    AFES

                      │

 ┌──────────┬──────────┬──────────┬──────────┐

 Docs     Templates  Knowledge  Prompts

                      │

                 Checklist

                      │

                   Examples

                      │

           Claude / Cursor / Copilot
```

---

## 仓库结构

```text
ai-frontend-spec
│
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
│
├── docs
│   ├── 00-introduction.md
│   ├── 01-role.md
│   ├── 02-principles.md
│   ├── 03-context-awareness.md
│   ├── 04-decision-rules.md
│   ├── 05-workflow.md
│   ├── 06-coding-rules.md
│   ├── 07-page-rules.md
│   ├── 08-component-rules.md
│   ├── 09-api-rules.md
│   ├── 10-style-rules.md
│   ├── 11-quality-rules.md
│   ├── 12-self-review.md
│   ├── 13-prompt-library.md
│   ├── 14-output-rules.md
│   └── 15-forbidden-rules.md
│
├── templates
│   ├── pages
│   └── components
│
├── prompts
│
├── knowledge
│
├── examples
│
├── checklists
│
├── references
│
└── assets
```

---

## 文档体系

AFES 采用分层设计。

### Docs

定义：

AI 应该遵守什么。

例如：

- 工作原则
- 开发流程
- 页面规范
- API规范

---

### Templates

定义：

AI 应该生成什么。

例如：

- 列表页模板
- 表单页模板
- Upload模板
- Table模板

---

### Knowledge

定义：

AI 应该了解什么。

例如：

- RuoYi-Vue3
- Vue3
- Element Plus
- Permission
- Request

---

### Prompts

定义：

如何驱动 AI。

例如：

- 创建页面
- 创建组件
- 重构代码
- 修复 Bug

---

### Checklist

定义：

如何验证输出结果。

例如：

- 页面检查
- 组件检查
- 发布检查

---

## 开发路线图（Roadmap）

### v0.1

项目初始化

- 仓库结构
- README
- CHANGELOG
- 文档框架

---

### v0.2

AI 工程规范

- Role
- Principles
- Workflow
- Context
- Decision

---

### v0.3

工程规则

- Coding Rules
- API Rules
- Style Rules
- Quality Rules

---

### v0.4

模板体系

- Page Template
- Component Template

---

### v0.5

Prompt Library

- Create
- Review
- Refactor
- Bug Fix

---

### v1.0

正式发布

包含：

- 15个规范章节
- 2个页面模板
- 5个组件模板
- Prompt库
- Checklist
- 示例工程

---

## 与 AI 工具协作

AFES 设计目标：

一次编写。

多工具适配。

### Claude Code

通过：

```text
AGENTS.md
```

加载规范。

---

### Cursor

通过：

```text
.cursor/rules
```

加载规范。

---

### GitHub Copilot

通过：

```text
copilot-instructions.md
```

加载规范。

---

### Trae

通过项目规则加载规范。

---

## 当前状态

项目状态：

```text
Version: v0.1
Status : Developing
```

当前正在建设：

- 基础规范体系
- 页面模板
- 组件模板
- Prompt体系

---

## 如何贡献

欢迎贡献：

### 规范

新增工程规则。

---

### 模板

新增页面模板和组件模板。

---

### Prompt

新增 AI 使用场景。

---

### 示例

提供优秀实践案例。

---

详细说明请查看：

```text
CONTRIBUTING.md
```

---

## License

本项目采用 MIT License。

可自由学习、使用和修改。

---

## 愿景

AFES 希望成为：

> Vue3 企业后台领域的 AI Frontend Engineering Standard。

让 AI 不只是写代码。

而是真正参与工程开发。
