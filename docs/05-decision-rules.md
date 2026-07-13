# 04. AI Decision Rules

> **Objective**
>
> 定义 AI 在企业前端项目中的标准决策流程（Decision Workflow）。
>
> AI 必须按照本章节的决策顺序分析任务，而不是直接生成代码。

---

# 1. Decision Overview

收到任何开发任务后，AI 应遵循以下决策流程：

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
Reuse Analysis
      │
      ▼
Implementation Decision
      │
      ▼
Coding
      │
      ▼
Self Review
```

不得跳过任何步骤。

---

# 2. Rule D001：Requirement Classification

## Principle

首先判断需求类型。

AI 应识别当前任务属于：

- 新增页面
- 修改页面
- 新增组件
- 修改组件
- Bug 修复
- API 调整
- 样式优化
- 性能优化
- 重构

不同任务应采用不同策略。

---

# 3. Rule D002：Context Decision

AI 必须确认：

是否已有：

- 相似页面
- 相似组件
- 相同业务

例如：

新增：

```
客户台账
```

应先搜索：

```
员工台账
合同台账
资产台账
```

优先参考已有实现。

---

# 4. Rule D003：Reuse Decision

新增能力之前必须按以下顺序检查：

```
当前页面
      ↓
当前模块
      ↓
Common Components
      ↓
Utils
      ↓
Composable
      ↓
第三方能力
```

只有全部不存在时，才允许新增。

---

# 5. Rule D004：Component Decision

涉及以下能力时，应优先复用公共组件：

| 功能 | 优先组件 |
|------|----------|
| 查询 | SearchForm |
| 表格 | DataTable |
| 上传 | Upload |
| 分页 | Pagination |
| 弹窗 | DialogForm |
| 字典 | DictTag |
| 工具栏 | RightToolbar |

不得重新实现。

---

# 6. Rule D005：API Decision

新增接口前，应确认：

- 是否已有接口
- 是否已有统一 Request 封装
- 是否已有分页接口
- 是否已有导入导出接口

禁止：

- 页面直接写 axios
- 重复定义接口
- 修改其他模块 API

---

# 7. Rule D006：Page Decision

新增页面时：

优先顺序：

```
已有页面
    ↓
页面模板
    ↓
重新创建
```

不得自由设计后台页面布局。

默认遵循 RuoYi-Vue3 页面结构。

---

# 8. Rule D007：Code Decision

Coding 前确认：

- 使用 Composition API
- 使用 `<script setup>`
- 使用 Pinia（如需要状态管理）
- 使用 Axios
- 使用 SCSS

禁止输出 Vue2 或 Options API。

---

# 9. Rule D008：Output Decision

输出代码前必须确认：

- [ ] 是否符合 AFES
- [ ] 是否复用了组件
- [ ] 是否修改最小范围
- [ ] 是否删除调试代码
- [ ] 是否可以直接提交 Review

---

# 10. Decision Tree

```text
收到需求
      │
      ▼
需求是否明确？
      │
 ┌────┴────┐
 │         │
否         是
 │         │
继续分析   ▼
      是否已有页面？
           │
     ┌─────┴─────┐
     │           │
    是           否
     │           │
参考页面     是否已有模板？
                 │
           ┌─────┴─────┐
           │           │
          是           否
           │           │
      使用模板     创建新页面
```

---

# 11. Checklist

开始开发前：

- [ ] 已完成需求分类
- [ ] 已完成上下文分析
- [ ] 已查找相似页面
- [ ] 已查找公共组件
- [ ] 已查找 API
- [ ] 已确定实现方案

输出前：

- [ ] 已完成自检
- [ ] 已遵循 AFES
- [ ] 已符合项目规范

---

# Summary

AI 不应直接编写代码。

AI 应先完成：

1. 需求分析
2. 上下文分析
3. 复用分析
4. 技术决策
5. 代码实现
6. 自检输出

> **Decision Before Coding。**
