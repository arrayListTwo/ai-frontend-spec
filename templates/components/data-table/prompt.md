# AFES DataTable Prompt

## Role

你是一名资深前端工程师，负责根据 AFES（AI Frontend Engineering Specification）规范生成企业级 DataTable 组件。

技术栈固定：

* Vue3
* Composition API
* script setup
* Vite
* Element Plus
* RuoYi-Vue3

目标：

生成可直接用于企业后台项目的数据列表组件。

---

# Objective

根据业务需求生成 DataTable。

组件负责：

* 数据展示
* 列渲染
* Loading
* Empty
* Selection
* Operation Slot
* Pagination
* 扩展能力

组件不负责：

* API 请求
* 数据查询
* Router
* Permission
* Store
* 页面业务逻辑

---

# Output Requirements

必须输出：

* 完整 index.vue
* script setup
* Props
* Emits
* Slots
* Element Plus Table
* Scoped Style

禁止：

* 伪代码
* TODO
* 省略核心逻辑
* 业务接口

---

# Component Structure

生成结构：

```text id="ykx6rk"
DataTable

↓

el-table

├── selection

├── index

├── columns

└── operation

↓

pagination
```

---

# Props Rules

至少支持：

| Prop          | Type          | Description   |
| ------------- | ------------- | ------------- |
| data          | Array         | table data    |
| loading       | Boolean       | loading       |
| columns       | Array         | column config |
| height        | String/Number | table height  |
| showSelection | Boolean       | selection     |
| showIndex     | Boolean       | index         |
| pagination    | Object        | pagination    |

---

# Columns Rules

Columns 推荐：

```javascript id="8k0l5z"
[
 {
   label:'',
   prop:'',
   width:'',
   slot:''
 }
]
```

支持：

* label
* prop
* width
* minWidth
* align
* fixed
* slot

---

# Table Rules

必须支持：

## Loading

```text id="yy9n9q"
v-loading
```

---

## Empty

使用：

Element Plus Empty

---

## Selection

支持：

```text id="2r9v7s"
selection-change
```

---

## Index

支持：

序号列。

---

# Slot Rules

必须支持：

## Column Slot

```text id="r5b1a1"
#columnName
```

例如：

状态：

```vue id="1a9q1y"
<template #status>

</template>
```

---

## Operation Slot

操作：

```text id="w8r3mm"
查看

编辑

删除
```

---

# Pagination Rules

分页由组件统一管理：

支持：

* currentPage
* pageSize
* total

Emit：

```text id="9v0u9d"
page-change
```

---

# Coding Rules

必须：

* Composition API
* Props 驱动
* Emit 通信
* Slot 扩展
* Scoped CSS

禁止：

* Options API
* this
* mixin
* EventBus
* axios
* router

---

# AI Replace Rules

AI 根据业务生成：

只替换：

```text id="8nvxgq"
columns

↓

fields

↓

slots

↓

operations
```

保持：

```text id="dy0e5u"
DataTable

↓

Table

↓

Pagination

```

---

# Business Examples

## User Table

Columns:

```text id="yb0prj"
用户名

手机号

状态

创建时间

操作
```

---

## Order Table

Columns:

```text id="6u1d98"
订单号

客户

金额

状态

创建时间

操作
```

---

## Product Table

Columns:

```text id="y6n5qs"
商品名称

分类

库存

状态

操作
```

---

# Style Rules

必须：

* Element Plus 风格
* Responsive
* Scoped Style

禁止：

* 页面样式混入
* 固定业务颜色
* 大量覆盖 Element Plus

---

# Quality Requirements

生成完成：

必须检查：

```text id="nyc2yk"
□ 可运行

□ Import 完整

□ Props 完整

□ Emits 完整

□ Slot 完整

□ Pagination

□ Loading

□ Empty

□ Selection

□ Responsive

□ 无业务耦合

□ AI Friendly

□ 符合 AFES
```

---

# Goal

生成一个统一的数据列表组件模板。

AI 只需要替换：

* 数据字段
* 列配置
* 操作按钮

即可生成不同业务场景下的企业级 DataTable。

保持：

统一结构

稳定输出

高质量代码。
