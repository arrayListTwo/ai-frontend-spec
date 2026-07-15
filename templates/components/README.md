# AFES Component Templates

## 简介

Component Templates 是 AFES（AI Frontend Engineering Specification）的组件模板库。

与页面模板不同，组件模板聚焦于企业后台项目中高频复用的基础业务组件，目标是让 AI 根据业务描述快速生成可直接投入项目使用的组件代码。

所有模板均遵循：

* AFES
* Vue3
* Composition API
* Vite
* Pinia
* Element Plus
* RuoYi-Vue3

组件模板不是 UI 组件库，而是 **AI 生成模板（AI Generation Template）**。

---

# 设计目标

组件模板需要满足以下目标：

* 可直接生成
* 可直接运行
* 可直接提交 Git
* 可长期维护
* AI 易理解
* AI 易替换
* AI 易扩展

所有模板均采用统一目录结构，降低 AI 学习成本，提高生成一致性。

---

# 模板目录

```text
templates/
└── components/
    ├── README.md
    │
    ├── search-form/
    ├── data-table/
    ├── edit-dialog/
    ├── form-section/
    └── upload-panel/
```

---

# 模板组成

每个组件模板采用统一结构：

```text
component-name/

├── README.md
├── prompt.md
├── replace.md
├── example.md
└── index.vue
```

说明：

| 文件         | 作用                   |
| ---------- | -------------------- |
| README.md  | 组件说明、适用场景、开发规范       |
| prompt.md  | AI Prompt，指导 AI 生成组件 |
| replace.md | AI 替换指南，指导业务替换       |
| example.md | 常见业务示例               |
| index.vue  | 标准组件模板               |

---

# 模板列表

## 1. SearchForm

定位：

企业后台标准查询条件组件。

适用场景：

* 用户管理
* 角色管理
* 部门管理
* 商品管理
* 订单管理
* 日志管理

主要能力：

* 输入框
* 下拉框
* 字典选择
* 日期范围
* 搜索
* 重置
* 展开 / 收起
* Enter 搜索
* Slot 扩展

---

## 2. DataTable

定位：

企业后台标准数据表格组件。

适用场景：

所有列表页面。

主要能力：

* Table
* Loading
* Pagination
* Selection
* Index
* Dict
* Tag
* Operation Slot
* Empty
* Column Slot

---

## 3. EditDialog

定位：

新增 / 编辑弹窗组件。

适用场景：

CRUD 页面。

主要能力：

* Dialog
* Form
* Validate
* Loading
* Submit
* Emit
* Detail

---

## 4. FormSection

定位：

复杂表单分组组件。

适用场景：

业务表单。

主要能力：

* Section
* Title
* Description
* Slot
* Layout

---

## 5. UploadPanel

定位：

上传组件。

适用场景：

图片上传

附件上传

文件上传

主要能力：

* Upload
* Preview
* Delete
* Download
* Limit
* Accept
* File Size Validation

---

# 推荐组合

## CRUD 页面

推荐：

```text
SearchForm

↓

DataTable

↓

EditDialog
```

对应：

```text
crud-page/

├── SearchForm
├── DataTable
└── EditDialog
```

---

## Form 页面

推荐：

```text
FormSection

↓

UploadPanel
```

对应：

```text
form-page/

├── FormSection
└── UploadPanel
```

---

# AI 使用方式

推荐将以下文件同时提供给 AI：

```text
README.md

prompt.md

replace.md

example.md
```

AI 根据业务描述生成：

* 完整 Vue3 组件
* 完整 Props
* 完整 Emits
* 完整 Slots
* 完整 Type（如项目使用 TS）
* 完整样式

无需重新设计组件结构。

---

# AI 生成原则

生成组件时应遵循：

1. 单一职责原则
2. 最小修改原则
3. 可配置优于硬编码
4. Slot 优于重复组件
5. Props 优于魔法值
6. Emit 优于父组件直接操作
7. 保持组件无业务耦合

禁止：

* 在组件内编写业务接口请求
* 在组件内维护复杂业务状态
* 在组件内处理页面跳转
* 在组件内实现跨模块业务逻辑

---

# 命名规范

目录：

```text
search-form

data-table

edit-dialog

form-section

upload-panel
```

组件：

```text
SearchForm

DataTable

EditDialog

FormSection

UploadPanel
```

统一采用：

* 目录：kebab-case
* 组件：PascalCase

---

# AI Replace 原则

AI 生成业务组件时，仅替换：

* 字段
* Props
* Emits
* Slot
* Dict
* Permission
* 校验规则
* 默认值

不得修改：

* 组件职责
* 文件结构
* 生命周期设计
* Props 命名风格
* Emit 命名规范

---

# 与 AFES 的关系

组件模板遵循：

```text
AFES Docs

↓

Page Templates

↓

Component Templates
```

整体关系如下：

```text
docs/

↓

templates/pages/

↓

templates/components/

↓

Business Project
```

组件模板是 AFES 页面模板的重要组成部分，也是 AI 生成业务页面时优先复用的基础单元。

---

# 开发原则

所有组件模板必须遵循：

## 可组合

多个组件可以自由组合。

## 可配置

通过 Props 控制行为。

## 可扩展

支持 Slot 扩展。

## 可维护

职责清晰，结构稳定。

## AI Friendly

目录固定。

命名统一。

结构一致。

---

# 完成标准

组件模板完成后应满足：

* □ 可直接复制到项目
* □ 可直接运行
* □ Vue3 Composition API
* □ 符合 RuoYi-Vue3 规范
* □ 符合 AFES 全部规范
* □ AI 易理解
* □ AI 易替换
* □ AI 易扩展
* □ 可长期维护

---

# 最终目标

AFES Component Templates 的目标不是提供一个组件库，而是建立一套 **AI 可理解、AI 可生成、AI 可维护** 的企业级组件模板体系。

通过统一的规范、目录结构和 Prompt，帮助开发者快速生成高质量业务组件，并与 AFES 页面模板、开发规范共同构建完整的 AI 辅助前端开发体系。
