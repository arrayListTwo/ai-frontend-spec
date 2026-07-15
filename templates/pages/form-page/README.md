# AFES Form Page Template

## 简介

Form Page 是 AFES 提供的标准业务表单页面模板。

该模板用于解决企业后台系统中大量存在的：

* 新增页面
* 编辑页面
* 信息维护页面
* 配置页面
* 参数设置页面
* 业务录入页面
* 流程配置页面

等场景。

该模板遵循：

* AFES（AI Frontend Engineering Specification）
* Vue3
* Composition API
* Vite
* Pinia
* Element Plus
* RuoYi-Vue3

目标：

> 让 AI 可以根据业务描述快速生成标准化、可维护的企业级表单页面。

---

# 适用场景

## 基础资料维护

例如：

* 用户信息
* 客户资料
* 产品资料
* 供应商信息
* 组织信息

---

## 业务录入

例如：

* 创建订单
* 创建申请
* 创建任务
* 创建合同
* 创建流程

---

## 系统配置

例如：

* 参数配置
* 规则配置
* 系统设置
* 通知配置

---

## 流程表单

例如：

* 审批申请
* 请假申请
* 报销申请
* 入职申请

---

# 页面特点

Form Page 与 CRUD Page 的区别：

| 页面类型      | 主要职责      |
| --------- | --------- |
| crud-page | 数据查询、列表管理 |
| form-page | 数据录入、编辑保存 |

Form Page 重点：

* 表单布局
* 字段管理
* 表单校验
* 数据初始化
* 保存提交
* 返回控制

---

# 目录结构

标准结构：

```text
form-page/

├── README.md
├── prompt.md
├── replace.md
├── index.vue
├── api.js
├── hooks/
│   └── useForm.js
└── components/
    └── FormSection.vue
```

---

# 页面组成

标准结构：

```text
Page Header

↓

Form Container

↓

Form Section

↓

Form Item

↓

Action Footer
```

---

# 页面职责

## index.vue 负责

允许：

* 页面布局
* 页面标题
* 表单组合
* 页面按钮
* 路由跳转

不负责：

* API 请求
* 表单复杂逻辑
* 数据转换
* 校验规则维护

---

# useForm 职责

负责：

* 初始化数据
* 获取详情
* 保存提交
* Loading
* Reset
* Submit

不负责：

* 页面布局
* Element Plus 组件
* CSS

---

# FormSection 职责

负责：

* 表单区域划分
* 公共布局
* 字段分组

例如：

```text
基础信息

↓

详细信息

↓

扩展信息

↓

附件信息
```

---

# API 规范

统一：

```text
api.js
```

负责：

* getDetail
* create
* update

例如：

```javascript
getUser()

addUser()

updateUser()
```

禁止：

在页面直接调用 request。

---

# 表单结构规范

推荐：

```text
el-form

    el-row

        el-col

            el-form-item

                input
```

支持：

* 输入框
* 下拉框
* 日期
* 数字
* TreeSelect
* Upload
* RichText

---

# 表单字段规范

字段必须包含：

* label
* prop
* component
* rules

例如：

```text
用户名称

userName

el-input

required
```

---

# 校验规范

统一维护：

```javascript
rules
```

支持：

* required
* pattern
* validator
* async validator

禁止：

在 template 中编写复杂校验。

---

# 页面按钮规范

底部统一：

```text
保存

取消

返回
```

例如：

```text
保存

保存并继续

取消
```

---

# Permission 规范

按钮必须支持：

```vue
v-hasPermi
```

例如：

```text
system:user:add

system:user:edit
```

禁止：

JS 判断权限。

---

# Dict 规范

统一使用：

```vue
dict-select

dict-radio

dict-tag
```

禁止：

页面维护：

```javascript
{
  0:'启用',
  1:'停用'
}
```

---

# Loading 规范

提交时：

必须处理：

```text
submitLoading
```

禁止：

重复提交。

---

# 数据初始化规范

页面加载：

推荐：

```text
onMounted

↓

loadDetail()

↓

setFormData()
```

禁止：

template 内部处理数据。

---

# Reset 规范

必须支持：

* 新增初始化
* 编辑回显
* 重置数据

---

# 样式规范

统一：

Element Plus

推荐：

* el-row
* el-col
* Flex

禁止：

大量固定宽度。

---

# AI 使用方式

生成业务页面时：

提供：

1. 本模板
2. prompt.md
3. replace.md
4. 业务描述

AI 自动生成：

* index.vue
* api.js
* useForm.js
* FormSection.vue

---

# AI Replace

生成业务页面时替换：

* BusinessName
* Module
* Fields
* API
* Permission
* Dict
* Validation

---

# 与 CRUD Page 配合

复杂业务通常：

```text
列表页

crud-page


详情/编辑页

form-page
```

组合使用：

```
User List

↓

User Form
```

---

# 开发原则

遵循：

## 单一职责

页面负责展示。

Hook 负责逻辑。

API 负责请求。

---

## 最小修改原则

优先：

修改配置。

不要：

重写模板。

---

## AI Friendly

代码结构必须：

* 清晰
* 稳定
* 可预测
* 可替换

---

# 完成标准

Form Page 生成完成后：

* □ 页面可运行
* □ 字段完整
* □ 校验完整
* □ API 已拆分
* □ Hook 已拆分
* □ Loading 完整
* □ 保存逻辑完整
* □ 权限完整
* □ Dict 正确
* □ 无重复代码
* □ 无 console.log
* □ 无 debugger
* □ 符合 AFES 规范

---

# Template Goal

Form Page 的目标：

> 让 AI 根据业务需求，在几分钟内生成企业级标准表单页面，并保持长期可维护性。

该模板作为 AFES 页面模板库中的第二个核心模板，与 `crud-page` 配合覆盖企业后台系统中大部分业务页面场景。
