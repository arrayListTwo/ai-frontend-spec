# AFES EditDialog Template

## 简介

EditDialog 是 AFES 提供的标准新增 / 编辑弹窗组件模板。

该模板用于企业后台系统中高频出现的：

* 新增数据
* 编辑数据
* 查看详情
* 表单提交

等业务场景。

基于：

* Vue3
* Composition API
* script setup
* Vite
* Element Plus
* RuoYi-Vue3

设计。

EditDialog 是 AI 页面生成体系中的核心组件。

结合：

```text id="4m2g7k"
SearchForm

↓

DataTable

↓

EditDialog
```

即可快速生成完整 CRUD 页面。

---

# 设计目标

EditDialog 需要满足：

* 标准化弹窗结构
* 统一表单交互
* AI 易理解
* AI 易替换
* 支持新增 / 编辑
* 支持表单校验
* 支持异步提交
* 支持 Slot 扩展

---

# 组件职责

EditDialog 负责：

* Dialog 展示
* Form 布局
* Form 校验
* 提交事件
* 取消事件
* Loading 状态
* Slot 扩展

---

# EditDialog 不负责

禁止：

* API 请求
* 数据保存
* Router 跳转
* Permission
* Store
* 字典请求
* 页面状态管理

---

# 推荐目录

```text id="b2f6d0"
edit-dialog/

├── README.md
├── prompt.md
├── replace.md
├── example.md
└── index.vue
```

---

# 推荐使用结构

```text id="5m84i3"
CRUD Page


├── SearchForm


├── DataTable


└── EditDialog


        |

        Form

        |

        Submit
```

---

# 核心能力

## Dialog

支持：

* 新增
* 编辑
* 查看

---

## Form

支持：

* Input
* Select
* DatePicker
* Upload
* Cascader
* TreeSelect

---

## Validation

支持：

* required
* type
* validator

---

## Submit

支持：

* submit
* cancel
* loading

---

# Props 设计

推荐：

| 参数         | 类型      | 说明            |
| ---------- | ------- | ------------- |
| modelValue | Boolean | 弹窗状态          |
| title      | String  | 标题            |
| formData   | Object  | 表单数据          |
| rules      | Object  | 校验规则          |
| loading    | Boolean | 提交状态          |
| width      | String  | 弹窗宽度          |
| mode       | String  | add/edit/view |

---

# Emits

推荐：

| Event             | 说明   |
| ----------------- | ---- |
| update:modelValue | 控制显示 |
| submit            | 提交   |
| cancel            | 取消   |

---

# Slots

支持：

| Slot    | 说明   |
| ------- | ---- |
| default | 表单内容 |
| footer  | 底部按钮 |
| title   | 标题   |

---

# AI Replace Guide

AI 生成业务弹窗时：

只替换：

* 表单字段
* 校验规则
* 标题
* 提交参数

保持：

* Dialog
* Form
* Submit
* Cancel

结构不变。

---

# 业务示例

## 用户新增

字段：

```text id="y50n3r"
用户名

手机号

角色

状态
```

---

## 商品编辑

字段：

```text id="8q8r9j"
商品名称

分类

价格

库存

图片
```

---

## 订单查看

字段：

```text id="2qx5j8"
订单号

客户

金额

状态
```

---

# AI 生成原则

必须：

* 使用 Props
* 使用 Emits
* 使用 Slot
* 保持单一职责

禁止：

* 弹窗内部调用 API
* 弹窗内部刷新列表
* 弹窗内部路由跳转

---

# Checklist

生成完成检查：

```text id="rxw7lh"
□ Vue3

□ Composition API

□ script setup

□ Element Plus

□ Dialog

□ Form

□ Rules

□ Submit

□ Cancel

□ Loading

□ Slot

□ Responsive

□ 无 API

□ 无 Router

□ 无业务状态

□ AI Friendly

□ 符合 AFES
```

---

# Template Goal

EditDialog Template 的目标：

建立统一企业后台新增 / 编辑弹窗标准。

通过：

EditDialog

*

Prompt

*

Replace Guide

*

Example

让 AI 可以快速生成：

用户维护

角色维护

商品维护

订单维护

审批维护

等业务弹窗组件。

最终形成 AFES CRUD 页面完整生成链路。
