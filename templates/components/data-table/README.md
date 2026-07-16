# AFES DataTable Template

## 简介

DataTable 是 AFES 提供的标准企业后台列表组件模板。

该模板用于快速生成后台系统中高频使用的数据列表页面。

基于：

* Vue3
* Composition API
* script setup
* Vite
* Element Plus
* RuoYi-Vue3

设计。

DataTable 不仅是对 `el-table` 的简单封装，而是一套面向 AI Coding 的标准列表组件模板。

目标：

让 AI 根据业务描述快速生成：

* 用户列表
* 订单列表
* 商品列表
* 日志列表
* 审批列表
* 数据管理列表

等企业级页面。

---

# 设计目标

DataTable 应满足：

* 统一列表结构
* AI 易理解
* AI 易生成
* 业务快速替换
* 高度可复用
* 支持复杂列
* 支持权限控制
* 支持分页
* 支持扩展

---

# 组件职责

DataTable 负责：

* Table 渲染
* Column 渲染
* Loading 展示
* Empty 状态
* Selection
* Index
* Pagination
* Slot 扩展
* 行操作区域

---

# DataTable 不负责

禁止：

* API 请求
* 数据获取
* Router
* 页面权限
* Store 管理
* 查询条件
* 业务状态处理

---

# 推荐目录

```text id="k9r2i1"
data-table/

├── README.md
├── prompt.md
├── replace.md
├── example.md
└── index.vue
```

---

# 推荐使用结构

```text id="lq8bxa"
Page

├── SearchForm

│
├── DataTable
│
└── Pagination
```

或者：

```text id="rvq8bb"
CRUD Page

├── SearchForm

├── DataTable

└── EditDialog
```

---

# 核心能力

## Table

支持：

* 数据展示
* Loading
* Empty

---

## Column

支持：

* 普通字段
* 自定义 Slot
* Formatter
* Dict
* Tag

---

## Selection

支持：

* 多选
* 批量操作

---

## Operation

支持：

* 编辑
* 删除
* 查看
* 更多操作

---

## Pagination

支持：

* 当前页
* 页大小
* 总数
* 页码变化

---

# Props 设计

推荐：

| 参数            | 类型            | 说明      |
| ------------- | ------------- | ------- |
| data          | Array         | 表格数据    |
| loading       | Boolean       | Loading |
| columns       | Array         | 列配置     |
| height        | String/Number | 高度      |
| showSelection | Boolean       | 多选      |
| showIndex     | Boolean       | 序号      |
| pagination    | Object        | 分页配置    |

---

# Columns 推荐结构

```javascript
[
  {
    label: '用户名',
    prop: 'userName'
  },
  {
    label: '状态',
    prop: 'status',
    slot: 'status'
  }
]
```

---

# Slots

推荐支持：

| Slot      | 说明    |
| --------- | ----- |
| default   | 自定义内容 |
| column    | 自定义列  |
| operation | 操作按钮  |
| empty     | 空状态   |
| footer    | 底部扩展  |

---

# AI Replace Guide

AI 生成业务列表时：

只替换：

* columns
* fields
* slots
* operation buttons

保持：

* Table 结构
* Pagination
* Loading
* Slot 机制

---

# 使用示例

用户管理：

```text id="8b5bqn"
DataTable

columns:

用户名

手机号

状态

创建时间

操作
```

订单管理：

```text id="4kbr4u"
DataTable

columns:

订单号

客户

金额

状态

操作
```

---

# 与 Page Template 关系

CRUD Page：

```text id="w3x7rf"
CRUD Page

↓

SearchForm

↓

DataTable

↓

EditDialog
```

DataTable 是 CRUD 页面核心组件。

---

# AI 生成原则

AI 生成 DataTable 时：

必须：

* 保持组件结构
* 使用 Slot 扩展
* 使用 Props 配置
* 保持分页逻辑

禁止：

* 每个页面复制 table
* 重复封装分页
* 在组件请求接口

---

# Checklist

生成完成检查：

```text id="0wq5kd"
□ Vue3

□ Composition API

□ script setup

□ Element Plus

□ Table 完整

□ Column 完整

□ Slot 完整

□ Pagination

□ Loading

□ Responsive

□ 无 API

□ 无 Router

□ 无业务逻辑

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Template Goal

DataTable Template 的目标：

建立统一的数据列表生成标准。

通过：

DataTable 模板

*

AI Prompt

*

Replace Guide

*

Example

让 AI 可以快速生成企业级列表页面，降低重复开发成本，提高前端代码一致性。
