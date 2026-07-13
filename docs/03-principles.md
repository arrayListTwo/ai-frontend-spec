# 02. AI Engineering Principles

> **Objective**
>
> 本章节定义 AI 在企业级前端项目开发过程中必须遵循的核心工程原则（Engineering Principles）。
>
> 这些原则适用于 AFES 的所有章节，属于最高优先级规范。当具体规则（Rules）与本章节发生冲突时，应始终以本章节为准。

---

# 1. Principles Overview

AI 在任何开发任务中，都必须遵循以下九项工程原则。

| 编号 | Principle | 中文名称 |
|------|-----------|----------|
| P001 | Understand Before Coding | 理解优先 |
| P002 | Context First | 上下文优先 |
| P003 | Reuse Before Create | 复用优先 |
| P004 | Consistency Over Preference | 一致性优先 |
| P005 | Smallest Change | 最小修改原则 |
| P006 | Evidence-Based Decision | 基于事实决策 |
| P007 | Template & Component First | 模板与组件优先 |
| P008 | Review Before Output | 输出前自检 |
| P009 | Follow Project Baseline | 遵循项目技术基线 |

---

# 2. P001 - Understand Before Coding

## Principle

> 编码之前，必须先理解需求，而不是立即开始生成代码。

AI 必须理解：

- 当前需求
- 业务目标
- 修改范围
- 输入输出
- 边界条件

禁止：

- 根据标题猜测需求
- 根据经验补充业务
- 未理解即生成代码

---

## Required Actions

开始开发前至少完成：

- 阅读需求描述
- 理解页面功能
- 明确新增、修改还是修复
- 明确影响范围

---

## Example

✓ 正确

```text
新增导出按钮

↓

查看页面功能

↓

查看导出接口

↓

查看权限

↓

开始开发
```

✗ 错误

```text
新增导出按钮

↓

直接生成 Button

↓

自行封装导出逻辑
```

---

# 3. P002 - Context First

## Principle

> AI 必须基于项目上下文进行开发，而不是孤立完成当前任务。

AI 应主动分析：

- 当前模块
- 相似页面
- 公共组件
- API
- Store
- Router
- Permission
- Dictionary
- Hooks
- Utils

只有理解上下文后，才能开始编码。

---

## Required Actions

编码前至少检查：

- 是否已有类似页面
- 是否已有公共组件
- 是否已有公共方法
- 是否已有相同业务逻辑

---

# 4. P003 - Reuse Before Create

## Principle

> 优先复用已有能力，禁止重复造轮子。

新增任何功能之前，应优先查找：

1. 当前页面
2. 当前模块
3. Common Components
4. Layout Components
5. Utils
6. Hooks
7. Store
8. 第三方库

只有确认不存在时，才允许新增。

---

## Example

正确：

```text
需要上传文件

↓

查找 Upload 组件

↓

直接复用
```

错误：

```text
需要上传文件

↓

重新封装 Upload
```

---

# 5. P004 - Consistency Over Preference

## Principle

> 项目一致性高于个人偏好。

AI 不应因为某种实现方式"更先进"而改变项目风格。

应保持：

- 命名一致
- 目录一致
- 页面结构一致
- API 风格一致
- 组件风格一致
- CSS 风格一致

---

## Example

当前项目：

- Vue3
- Composition API
- `<script setup>`

AI 应保持一致。

禁止输出：

- Options API
- Vue2 写法
- `this.xxx`
- `Vue.extend`
- `mixins`

---

# 6. P005 - Smallest Change

## Principle

> 采用最小修改原则。

AI 应：

只修改完成需求必须修改的代码。

禁止：

- 顺手重构
- 顺手优化
- 顺手格式化整个文件
- 修改无关模块

目标：

影响范围最小。

---

## Example

正确：

```text
修改查询条件

↓

仅修改 SearchForm
```

错误：

```text
修改查询条件

↓

重构整个页面
```

---

# 7. P006 - Evidence-Based Decision

## Principle

> 所有技术决策必须基于项目事实，而不是个人经验。

例如：

正确：

```text
package.json

已使用 Pinia
```

因此：

继续使用 Pinia。

错误：

```text
我觉得 Zustand 更好。
```

---

正确：

```text
项目已有 Upload 组件。
```

因此：

继续复用 Upload。

错误：

```text
自己重新封装上传组件。
```

---

# 8. P007 - Template & Component First

## Principle

> 页面优先遵循模板，功能优先复用组件。

对于后台管理系统：

页面应优先使用：

- List Page Template
- Form Page Template
- Detail Page Template

组件优先使用：

- SearchForm
- DataTable
- Pagination
- Upload
- DialogForm
- DictTag
- RightToolbar

禁止：

页面自由发挥。

---

# 9. P008 - Review Before Output

## Principle

> 输出代码之前，必须完成自检。

至少检查：

- 是否符合规范
- 是否存在重复代码
- 是否复用了组件
- 是否修改无关文件
- 是否存在明显 Bug

---

## Output Checklist

输出前确认：

- [ ] 无语法错误
- [ ] 命名符合规范
- [ ] 导入完整
- [ ] 删除无用代码
- [ ] 删除调试代码
- [ ] 可以直接运行

---

# 10. P009 - Follow Project Baseline

## Principle

> AI 必须遵循项目统一技术基线。

当前 AFES 默认技术基线如下：

## Framework

- Vue 3

## Vue Style

- Composition API
- `<script setup>`

## Build

- Vite

## UI

- Element Plus

## State

- Pinia

## Router

- Vue Router 4

## Request

- Axios

## Style

- SCSS

## Project

- RuoYi-Vue3

禁止：

- Options API
- Vue2 API
- jQuery
- this.xxx
- mixins
- Vue.extend

除非项目明确使用，否则不得自行引入：

- Tailwind CSS
- Zustand
- Redux
- Fetch
- UnoCSS
- Naive UI

---

# 11. Principles Priority

所有原则按以下优先级执行：

| Priority | Principle |
|----------|-----------|
| P001 | Understand Before Coding |
| P002 | Context First |
| P003 | Reuse Before Create |
| P004 | Consistency Over Preference |
| P005 | Smallest Change |
| P006 | Evidence-Based Decision |
| P007 | Template & Component First |
| P008 | Review Before Output |
| P009 | Follow Project Baseline |

---

# 12. Engineering Checklist

开始开发前：

- [ ] 已理解需求
- [ ] 已分析上下文
- [ ] 已确认修改范围
- [ ] 已查找可复用能力
- [ ] 已确认页面模板
- [ ] 已确认组件模板

提交前：

- [ ] 已遵循全部 Principles
- [ ] 已完成自检
- [ ] 未修改无关代码
- [ ] 未新增重复组件
- [ ] 输出结果可直接 Review

---

# 13. Summary

AFES 的九项工程原则可以概括为一句话：

> **理解项目、尊重上下文、优先复用、保持一致、最小修改、基于事实、遵循模板、完成自检，并始终遵循项目技术基线。**

这九项原则是 AFES 的最高约束，后续所有章节（Workflow、Coding Rules、Page Rules、Component Rules、API Rules 等）均不得违反本章节定义。
