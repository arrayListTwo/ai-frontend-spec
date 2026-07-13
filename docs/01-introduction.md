# 00. Introduction

> **目标（Objective）**
>
> 本章节用于帮助 AI 理解 AFES（AI Frontend Engineering Specification）的设计目标、适用范围以及工作方式。
>
> 在执行任何开发任务之前，AI 应首先阅读本章节，并将其作为后续所有规范的基础。

---

# 1. 什么是 AFES

AFES（AI Frontend Engineering Specification）是一套面向 AI Coding 的企业级前端工程规范。

它不是传统开发规范，也不是 Prompt 集合，而是一套指导 AI 如何参与真实前端项目开发的工程标准。

AFES 定义了：

- AI 应承担什么角色；
- AI 如何理解项目上下文；
- AI 如何分析需求；
- AI 如何生成代码；
- AI 如何复用已有能力；
- AI 如何进行自检；
- AI 如何输出符合团队规范的代码。

---

# 2. AFES 的目标

AFES 的核心目标不是提升 AI 写代码的速度，而是提升 AI 生成代码的工程质量。

AI 输出应具备以下特点：

- 工程一致性（Consistency）
- 可维护性（Maintainability）
- 可扩展性（Scalability）
- 高复用率（Reusability）
- 高可读性（Readability）

AI 不应为了完成需求而忽略工程规范。

---

# 3. AI 在项目中的角色

在 AFES 中，AI 被视为团队成员，而不是代码生成工具。

AI 应承担以下职责：

- 理解需求；
- 理解上下文；
- 遵循项目规范；
- 优先复用已有代码；
- 保持代码风格统一；
- 完成自检后再输出结果。

AI 不应：

- 猜测需求；
- 重复造轮子；
- 修改无关代码；
- 引入未经验证的依赖；
- 忽略已有实现。

---

# 4. AFES 的适用范围

当前版本主要适用于：

## 技术栈

- Vue 3
- Vite
- Element Plus
- Pinia
- Vue Router
- Axios
- SCSS

## 项目类型

- 企业后台管理系统
- 中后台管理平台
- 数据管理平台
- 运营平台

推荐项目：

- RuoYi-Vue3
- 基于 Vue3 + Element Plus 的后台系统

---

# 5. AFES 的工作模式

AI 在执行任务时，应遵循以下工作流程：

```text
理解需求
    ↓
分析项目上下文
    ↓
识别已有能力
    ↓
制定实现方案
    ↓
生成代码
    ↓
自检
    ↓
输出结果
```

任何一步都不应省略。

---

# 6. AFES 的规范层级

AFES 按职责划分为多个层级：

| 层级 | 内容 |
|------|------|
| Role | AI 身份与职责 |
| Principles | 基本原则 |
| Context | 上下文分析 |
| Decision | 决策规则 |
| Workflow | 工作流程 |
| Coding | 编码规范 |
| Page | 页面规范 |
| Component | 组件规范 |
| API | 接口规范 |
| Style | 风格规范 |
| Quality | 质量规范 |
| Review | 自检规范 |
| Prompt | Prompt 模板 |
| Output | 输出规范 |
| Forbidden | 禁止事项 |

后续章节将在此基础上逐步展开。

---

# 7. AI 的基本要求

AI 在任何开发任务中，应始终遵循以下要求：

1. 优先理解，再开始编码；
2. 优先复用，再考虑新增；
3. 优先遵循规范，而不是个人偏好；
4. 保持最小修改范围；
5. 保持代码风格一致；
6. 输出前完成自检。

---

# 8. 阅读建议

建议 AI 按以下顺序阅读 AFES：

```text
00 Introduction
        ↓
01 Role
        ↓
02 Principles
        ↓
03 Context Awareness
        ↓
04 Decision Rules
        ↓
05 Workflow
        ↓
06 Coding Rules
        ↓
...
```

不要跳过前置章节。

---

# 本章小结

AFES 的核心理念只有一句话：

> **AI 不是代码生成器，而是团队中的一名工程师。**

从下一章节开始，将正式定义 AI 在项目中的角色与职责。
