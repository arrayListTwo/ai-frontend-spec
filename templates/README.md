# AFES Template Library

## 目标

Template Library 是 AFES（AI Frontend Engineering Specification）的实践部分。

`docs/` 定义 AI 应遵循的开发规范。

`templates/` 提供符合 AFES 规范的标准模板。

AI 在开发新功能时，应优先基于模板进行生成，而不是从零开始编写代码。

一句话：

> Rule 定义规范，Template 落地规范。

---

# 设计原则

所有模板均遵循以下原则：

* 基于 Vue3
* Composition API
* `<script setup>`
* Vite
* Pinia
* Element Plus
* RuoYi-Vue3 项目结构
* AFES 全部规范

所有模板均可直接作为 AI 生成代码的基础模板。

---

# 模板分类

当前模板库包含两类模板：

```text
templates
├── pages
└── components
```

---

# 页面模板（Pages）

页面模板用于快速生成后台业务页面。

推荐覆盖项目中最常见的页面类型。

目前包含：

| 模板        | 用途         |
| --------- | ---------- |
| CRUD Page | 标准后台增删改查页面 |
| Tree Page | 树形管理页面     |

页面模板包含：

* 页面结构
* 查询区域
* 工具栏
* 表格
* 分页
* Dialog
* API 调用
* 状态管理
* 权限控制
* Prompt 示例

---

# 组件模板（Components）

组件模板用于快速生成可复用业务组件。

目前包含：

| 模板                 | 用途      |
| ------------------ | ------- |
| Form Dialog        | 新增/编辑弹窗 |
| Search Panel       | 查询区域    |
| Table Toolbar      | 表格工具栏   |
| Upload Dialog      | 上传组件    |
| Tree Select Dialog | 树选择弹窗   |

所有组件均遵循：

* Props 输入
* Emits 输出
* Scoped Style
* 单一职责
* 可独立复用

---

# 模板使用流程

推荐使用流程：

```text
阅读需求
    │
    ▼
选择模板
    │
    ▼
复制模板
    │
    ▼
替换业务名称
    │
    ▼
补充业务逻辑
    │
    ▼
完成 AI 自检
```

不要直接从空文件开始开发。

---

# AI 使用方式

推荐向 AI 提供如下信息：

* 使用 AFES 全部规范
* 使用对应 Template
* 保持目录结构一致
* 保持命名一致
* 保持最小修改原则

例如：

> 使用 AFES CRUD Page Template，生成用户管理页面。

或：

> 基于 Form Dialog Template，生成角色编辑弹窗。

---

# 模板命名规范

模板名称采用统一格式：

```text
xxx-template
```

例如：

```text
crud-page
tree-page

form-dialog
search-panel
table-toolbar
upload-dialog
tree-select-dialog
```

保持名称简洁、语义明确。

---

# 模板维护原则

修改模板时，应遵循以下原则：

* 优先保持向后兼容
* 保持与 AFES 规范一致
* 保持与项目技术栈一致
* 优先优化复用能力
* 不增加无意义抽象

模板应作为最佳实践，而不是业务实现。

---

# AI 自动生成要求

AI 使用模板时必须遵守：

* 优先复用模板
* 保持模板结构完整
* 保持目录结构一致
* 保持命名一致
* 不修改模板核心职责
* 不引入新的技术方案
* 保持与 AFES 全部规范一致

---

# Template Checklist

使用模板完成开发后，应确认以下内容：

* 已选择正确模板
* 已保持目录结构一致
* 已替换业务名称
* 已补充业务逻辑
* 已删除示例数据
* 已完成异常处理
* 已完成权限接入
* 已完成 API 接入
* 已完成 AI 自检
* 符合 AFES 全部规范

