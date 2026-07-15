# SearchForm Template

## 简介

SearchForm 是 AFES 提供的标准查询组件模板。

该模板适用于企业后台系统中所有列表页面的查询区域，基于 Vue3 + Composition API + Element Plus + RuoYi-Vue3 设计，强调 **统一结构、AI 易生成、可复用、可扩展**。

SearchForm 不包含任何业务逻辑，仅负责查询条件展示、输入收集和事件触发。

---

# 适用场景

适用于绝大多数后台管理页面，例如：

* 用户管理
* 角色管理
* 菜单管理
* 部门管理
* 岗位管理
* 字典管理
* 参数管理
* 通知公告
* 日志管理
* 商品管理
* 订单管理
* 客户管理
* 审批管理
* 流程管理

推荐所有 CRUD 页面统一采用 SearchForm。

---

# 设计目标

SearchForm 应满足以下目标：

* 企业级查询组件
* AI 可直接生成
* 支持快速业务替换
* 支持响应式布局
* 支持复杂查询
* 支持扩展 Slot
* 保持统一交互

---

# 组件职责

SearchForm 负责：

* 查询条件布局
* 查询字段展示
* 查询参数收集
* 查询事件
* 重置事件
* 展开 / 收起
* Slot 扩展
* 响应式布局

SearchForm 不负责：

* API 请求
* Table 数据刷新
* Loading
* Permission
* Dict 获取
* 页面业务逻辑
* Router

---

# 推荐目录

```text
search-form/

├── README.md
├── prompt.md
├── replace.md
├── example.md
└── index.vue
```

---

# 推荐布局

```text
SearchForm

└── el-form

    ├── el-row

    │   ├── el-col
    │   ├── el-col
    │   ├── el-col
    │   └── el-col

    └── Action Area

        ├── 查询

        ├── 重置

        └── 展开/收起
```

---

# 推荐字段

推荐支持：

* Input
* Select
* Dict Select
* DatePicker
* DateRange
* TreeSelect
* Cascader
* Radio
* Checkbox

根据业务需要启用。

---

# Props

推荐 Props：

| 名称         | 类型      | 默认值   | 说明           |
| ---------- | ------- | ----- | ------------ |
| modelValue | Object  | {}    | 查询对象         |
| loading    | Boolean | false | 查询按钮 Loading |
| collapsed  | Boolean | true  | 默认折叠         |
| columns    | Number  | 4     | 每行显示字段数      |
| showExpand | Boolean | true  | 是否显示展开按钮     |

组件应保持轻量，不维护业务数据。

---

# Emits

推荐：

| Emit              | 说明     |
| ----------------- | ------ |
| search            | 点击查询   |
| reset             | 点击重置   |
| update:modelValue | 更新查询对象 |
| expand-change     | 展开状态变化 |

---

# Slots

推荐支持：

| Slot    | 说明       |
| ------- | -------- |
| default | 查询项      |
| actions | 自定义按钮    |
| prepend | 查询区域前置内容 |
| append  | 查询区域尾部内容 |

复杂业务可通过 Slot 扩展，而不是修改组件源码。

---

# AI Replace Guide

AI 生成业务代码时，仅替换：

* 查询字段
* Placeholder
* 字典
* Props 默认值
* 日期类型
* Slot 内容

保持：

* 布局
* 查询按钮位置
* 重置按钮位置
* 展开交互
* Emits

不变。

---

# 推荐交互

默认：

* Enter 执行查询
* 点击查询按钮执行查询
* 点击重置恢复默认条件
* 展开查看更多查询项
* 收起隐藏扩展字段

保持与整个系统交互一致。

---

# 响应式建议

推荐：

≥1200px：

每行 4 个字段

992~1199px：

每行 3 个字段

768~991px：

每行 2 个字段

<768px：

每行 1 个字段

保证移动端可正常使用。

---

# AI Prompt 使用方式

推荐同时提供：

* README.md
* prompt.md
* replace.md
* example.md

AI 根据业务需求自动生成新的 SearchForm，无需重新设计组件结构。

---

# Checklist

生成完成后检查：

* □ Vue3 Composition API
* □ script setup
* □ Props 完整
* □ Emits 完整
* □ Slots 完整
* □ Element Plus
* □ Responsive
* □ 无业务 API
* □ 无 Router
* □ 无 Loading 管理
* □ 无复杂状态
* □ AI 易理解
* □ AI 易替换
* □ 符合 AFES 全部规范

---

# Template Goal

SearchForm Template 的目标：

建立企业后台统一查询区域模板，让 AI 能够通过替换查询字段、字典和默认值，快速生成符合 AFES 规范的高质量查询组件，提高开发效率和代码一致性。
