# 06. AI Development Workflow

> **Objective**
>
> 定义 AI 在企业级前端项目中的标准开发流程（Development Workflow）。
>
> AI 必须严格按照本章节定义的执行流程完成开发任务，不得跳过任何步骤。

---

# 1. Workflow Overview

AI 在收到任何开发任务后，应遵循如下标准流程：

```text
Receive Task
      │
      ▼
Requirement Analysis
      │
      ▼
Context Analysis
      │
      ▼
Solution Design
      │
      ▼
Implementation
      │
      ▼
Self Test
      │
      ▼
Self Review
      │
      ▼
Generate Output
```

整个开发流程共包含 8 个阶段。

每个阶段均有明确的输入、执行动作和输出结果。

---

# 2. Workflow Steps

| Step | Name | Description |
|------|------|-------------|
| W001 | Receive Task | 接收开发任务 |
| W002 | Requirement Analysis | 分析需求 |
| W003 | Context Analysis | 分析项目上下文 |
| W004 | Solution Design | 制定实现方案 |
| W005 | Implementation | 编写代码 |
| W006 | Self Test | 自测代码 |
| W007 | Self Review | 自检代码 |
| W008 | Generate Output | 输出最终结果 |

---

# 3. W001 - Receive Task

## Objective

正确理解用户需求。

---

## Input

例如：

- 新增页面
- 修改页面
- 修复 Bug
- 新增组件
- 修改接口

---

## Actions

AI 必须：

- 阅读完整需求
- 确认开发目标
- 识别需求类型
- 判断是否存在歧义

如需求不明确，应优先澄清，而不是自行假设。

---

## Output

输出：

- 明确的开发目标
- 需求分类

---

## Checklist

- [ ] 已理解需求
- [ ] 已确认开发目标
- [ ] 已识别任务类型

---

# 4. W002 - Requirement Analysis

## Objective

明确本次开发的影响范围。

---

## Actions

分析：

- 是否新增功能
- 是否修改已有功能
- 是否影响多个模块
- 是否涉及接口
- 是否涉及权限
- 是否涉及数据字典
- 是否涉及上传、导入、导出

---

## Output

形成开发范围说明。

例如：

```text
修改：

客户台账

影响：

列表页
查询区域
导出功能
```

---

## Checklist

- [ ] 已确认修改范围
- [ ] 已确认影响模块
- [ ] 已确认相关功能

---

# 5. W003 - Context Analysis

## Objective

建立完整的项目上下文。

---

## Actions

按照《04-context-awareness.md》完成：

### Project Context

分析：

- 技术栈
- 项目结构
- 公共能力

---

### Module Context

分析：

- 当前模块
- 当前页面
- API
- Store
- Router

---

### Business Context

分析：

- 权限
- 字典
- 上传
- 分页
- 导入导出

---

### Technical Context

分析：

- Vue3
- Composition API
- script setup
- Pinia
- Axios

---

## Output

完整上下文。

---

## Checklist

- [ ] 已分析项目
- [ ] 已分析模块
- [ ] 已分析业务
- [ ] 已分析技术

---

# 6. W004 - Solution Design

## Objective

制定最优实现方案。

---

## Actions

按照《05-decision-rules.md》完成决策。

优先级：

```
已有页面
      ↓
页面模板
      ↓
公共组件
      ↓
公共方法
      ↓
新增能力
```

确定：

- 页面是否复用
- 组件是否复用
- API 是否复用
- 是否新增能力

---

## Output

最终实现方案。

---

## Checklist

- [ ] 已确认页面方案
- [ ] 已确认组件方案
- [ ] 已确认 API
- [ ] 已确认修改范围

---

# 7. W005 - Implementation

## Objective

按照 AFES 规范完成代码实现。

---

## Actions

必须遵循：

- 07 Coding Rules
- 08 Page Rules
- 09 Component Rules
- 10 API Rules
- 11 Style Rules

必须：

- 使用 Composition API
- 使用 `<script setup>`
- 使用 Element Plus
- 使用 Axios
- 使用 Pinia（如需要）
- 使用 SCSS

不得：

- 使用 Vue2 写法
- 使用 Options API
- 修改无关代码

---

## Output

完成开发代码。

---

## Checklist

- [ ] 遵循 Coding Rules
- [ ] 遵循技术基线
- [ ] 最小修改
- [ ] 优先复用

---

# 8. W006 - Self Test

## Objective

AI 在输出前完成基础自测。

---

## Actions

检查：

- 是否存在语法错误
- import 是否正确
- 变量是否已定义
- 是否存在未使用变量
- 是否存在明显运行错误
- 是否符合 Vue3
- 是否符合 script setup

如涉及页面：

检查：

- 查询
- 重置
- 分页
- 新增
- 编辑
- 删除

是否逻辑完整。

---

## Output

确认代码可运行。

---

## Checklist

- [ ] 无语法错误
- [ ] import 完整
- [ ] 无明显运行错误
- [ ] 页面逻辑完整

---

# 9. W007 - Self Review

## Objective

按照 AFES 完成代码自检。

---

## Actions

检查：

- 是否符合 Project Baseline
- 是否符合 Principles
- 是否符合 Coding Rules
- 是否复用了公共组件
- 是否复用了公共方法
- 是否保持代码风格一致

不得：

- 输出重复代码
- 输出调试代码
- 输出无用代码

---

## Output

Review 通过。

---

## Checklist

- [ ] 已完成自检
- [ ] 已删除调试代码
- [ ] 已删除无用代码
- [ ] 已符合 AFES

---

# 10. W008 - Generate Output

## Objective

输出最终开发结果。

---

## Output Format

最终输出应包括：

### 1. 修改说明

本次修改内容。

---

### 2. 涉及文件

例如：

```text
src/views/customer/index.vue
src/api/customer.js
```

---

### 3. 注意事项

例如：

- 新增权限
- 新增字典
- 新增接口

---

### 4. 后续建议（可选）

例如：

- 建议增加单元测试
- 建议补充接口文档

---

不得仅输出代码。

---

## Checklist

- [ ] 已说明修改内容
- [ ] 已列出修改文件
- [ ] 已说明注意事项

---

# 11. Workflow Checklist

## Before Coding

- [ ] 已理解需求
- [ ] 已分析上下文
- [ ] 已完成方案设计
- [ ] 已确认复用能力

---

## During Coding

- [ ] 使用 Composition API
- [ ] 使用 `<script setup>`
- [ ] 使用 Element Plus
- [ ] 使用 Axios
- [ ] 使用 SCSS

---

## Before Output

- [ ] 已完成自测
- [ ] 已完成自检
- [ ] 已删除调试代码
- [ ] 已符合 AFES
- [ ] 可直接提交 Review

---

# 12. Related Documents

本章节依赖以下规范：

- 00 Project Baseline
- 02 Principles
- 04 Context Awareness
- 05 Decision Rules

后续执行：

- 07 Coding Rules
- 08 Page Rules
- 09 Component Rules
- 10 API Rules
- 11 Style Rules

---

# 13. Summary

AI 在企业级前端开发中，应遵循统一的开发生命周期：

**Receive Task → Requirement Analysis → Context Analysis → Solution Design → Implementation → Self Test → Self Review → Generate Output**

AFES 要求 AI 在每次开发任务中完整执行以上流程，确保代码符合项目规范、保持一致性，并具备可维护性。
