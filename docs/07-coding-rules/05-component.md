# 05 组件规范（Component Rules）

## 目标

本规范用于约束 AI 在编写 Vue 组件时的行为。

目标包括：

* 保持组件职责单一
* 提高组件复用性
* 降低页面复杂度
* 保持项目组件风格统一
* 提高 AI 修改组件的准确率
* 避免组件逐渐演变为大型业务模块

组件负责：

* UI 展示
* 用户交互
* 局部状态
* 向外暴露能力

组件不负责：

* 页面管理
* 全局状态
* 网络请求
* 页面跳转
* 复杂业务流程

一句话：

> 组件负责实现，不负责组织。

---

# 核心原则

AI 必须遵循以下原则：

1. 一个组件只完成一件事情
2. 优先复用已有组件
3. 保持组件可组合，而不是万能组件
4. Props 输入，Events 输出
5. 避免组件依赖页面
6. 避免组件依赖其它业务组件
7. 不在组件中直接请求接口（特殊基础组件除外）
8. 不在组件中维护全局状态

---

# 目录规范

推荐目录：

src/components

```text
components
├── Common
├── Upload
├── ImagePreview
├── Pagination
├── TableToolbar
└── IconSelect
```

业务组件：

```text
views
└── system
    └── user
        └── components
            ├── EditDialog.vue
            ├── ImportDialog.vue
            └── AssignRoleDialog.vue
```

原则：

通用组件放 `src/components`

业务组件放对应页面目录。

---

# 文件命名

统一：

PascalCase。

例如：

```text
UserForm.vue

SearchForm.vue

EditDialog.vue

RoleSelect.vue
```

不要：

```text
userForm.vue

edit.vue

dialog.vue

component.vue
```

名称应体现组件职责。

---

# 单一职责

好的组件：

```text
UserForm

RoleTree

DeptSelect

ImageUpload

IconPicker
```

不要：

```text
CommonDialog
```

里面什么业务都写。

也不要：

```text
BusinessComponent
```

包含：

* 查询
* 表格
* 表单
* 导入
* 导出
* 审批

全部混在一起。

---

# Props

Props 只负责：

输入数据。

不要：

通过 Props 传递大量行为。

推荐：

```text
value

modelValue

data

list

disabled

loading

title
```

不要：

```text
callback1

callback2

callback3

handler

execute
```

大量函数型 Props。

---

# v-model

Vue3 统一使用：

```text
modelValue

update:modelValue
```

不要：

继续使用：

```text
value

input
```

旧模式。

多个双向绑定时：

使用：

```text
v-model:visible

v-model:form
```

保持语义明确。

---

# Emits

组件输出：

统一：

显式声明。

例如：

```text
update:modelValue

success

cancel

submit

change
```

不要：

任意：

```text
emit('ok')

emit('done')

emit('event')
```

没有业务语义。

---

# 事件命名

推荐：

```text
submit

cancel

change

success

close

confirm

delete
```

不要：

```text
click

tap

doIt

action
```

语义不明确。

---

# 组件状态

组件维护：

局部状态。

例如：

* 输入框
* 当前 Tab
* 局部 Loading
* 展开状态
* 当前页签

不要：

维护：

* 用户信息
* 登录状态
* 权限信息
* 系统配置

这些属于 Pinia 或页面。

---

# API 调用

默认：

组件不得直接调用 API。

推荐：

页面：

```text
↓

调用 API

↓

传数据

↓

组件展示
```

不要：

```text
组件

↓

请求接口

↓

修改页面
```

特殊情况：

如远程搜索、上传组件、懒加载树等，可在组件内部发起请求，但应保持职责单一，并提供清晰的输入输出。

---

# 页面通信

推荐：

```text
Page

↓

Props

↓

Component

↓

Emit

↓

Page
```

不要：

组件：

直接修改：

页面变量。

不要：

通过全局变量通信。

---

# defineExpose

仅暴露：

必要方法。

例如：

```text
open()

close()

reset()

validate()

focus()
```

不要：

暴露：

全部变量。

不要：

组件成为：

"公共对象"。

---

# ref 使用

页面：

通过：

组件 ref

调用：

公开方法。

不要：

直接：

修改组件内部数据。

例如不要：

```text
componentRef.form.name = ''
```

应通过：

公开方法完成。

---

# 插槽

推荐：

使用 Slot 提高扩展性。

例如：

* header
* footer
* default
* empty

不要：

为了少量差异复制整个组件。

---

# Element Plus 使用

优先复用：

* ElDialog
* ElForm
* ElTable
* ElDrawer
* ElUpload
* ElTree
* ElSelect

不要：

重复封装功能完全一致的组件。

只有项目存在统一业务规范时，才封装公共组件。

---

# Dialog 组件

推荐：

一个 Dialog：

一个业务。

例如：

```text
EditUserDialog

AssignRoleDialog

ImportDialog
```

不要：

一个 Dialog：

通过：

```text
type

mode

scene
```

切换：

十几种业务。

---

# Form 组件

推荐：

Form 独立。

页面：

负责：

打开 Dialog。

Form：

负责：

编辑。

提交：

通过 Emit。

不要：

Form：

自己：

调用 API。

---

# Table 组件

不要：

把整个页面：

封装成：

```text
TableComponent
```

推荐：

仅封装：

真正复用部分。

例如：

* 操作列
* 工具栏
* 分页
* 空状态
* 表格工具

---

# 样式

组件样式：

仅作用于自己。

避免：

影响页面。

避免：

全局覆盖 Element Plus 样式。

公共样式：

统一维护。

---

# 生命周期

组件：

仅初始化：

自己的数据。

不要：

组件初始化：

请求整个页面数据。

不要：

初始化：

修改 Pinia。

---

# Watch

优先：

computed。

其次：

watch。

不要：

大量：

watch。

尤其：

多个 watch 相互触发。

容易形成维护困难。

---

# Computed

优先：

使用 computed。

不要：

把：

计算属性。

写成：

watch + ref。

---

# 可复用标准

满足以下条件才建议抽离组件：

* 两个及以上页面复用
* 同一页面重复出现
* UI 较复杂
* 独立职责
* 可独立维护
* 可独立测试

不要：

仅使用一次就抽离公共组件。

---

# 组件长度

建议：

300 行以内。

超过：

建议继续拆分。

例如：

```text
UserForm

↓

BasicInfo

↓

RoleInfo

↓

DeptInfo
```

而不是：

一个组件：

1200 行。

---

# 注释

建议：

保留：

* 特殊业务说明
* 插槽说明
* 对外接口说明
* 兼容说明

不要：

大量：

```text
按钮

输入框

表格
```

无意义注释。

---

# AI 自动生成要求

AI 在生成组件时必须遵守：

* 优先复用已有组件
* 不重复造轮子
* 保持单一职责
* Props 输入，Emit 输出
* 不直接请求业务 API
* 不维护全局状态
* 不依赖页面实现
* 不暴露内部实现细节
* 保持命名统一
* 保持目录统一
* 保持组件可组合
* 保持组件易测试
* 保持与项目现有风格一致

---

# AI 禁止行为

AI 不得生成以下代码：

* 一个组件承担多个业务
* 组件直接调用业务 API
* 组件直接修改 Pinia
* 组件直接操作 Router
* 组件直接修改页面变量
* Props 与 Emits 命名混乱
* 一个 Dialog 承担多个完全不同业务
* 滥用 `watch`
* 滥用 `defineExpose`
* 暴露组件全部内部状态
* 为一次性需求抽离公共组件
* 重复封装 Element Plus 原生能力
* 使用无语义的组件名称
* 组件与页面强耦合
* 一个组件超过数百行仍持续堆积逻辑

---

# Checklist

AI 完成组件开发后，应确认以下内容：

* 组件职责单一
* 组件命名符合 PascalCase 规范
* 组件位于正确目录
* 通用组件与业务组件分类正确
* Props 仅负责输入数据
* Emits 已显式声明且命名清晰
* 双向绑定使用 Vue3 `v-model` 规范
* 默认未直接调用业务 API
* 默认未维护全局状态
* 页面通过 Props 与 Emit 完成交互
* `defineExpose` 仅暴露必要方法
* 合理使用 Slot 提高扩展性
* 样式作用域清晰，不污染全局
* 优先使用 `computed`，避免滥用 `watch`
* 与项目现有组件风格保持一致
* 未重复封装已有组件或 Element Plus 能力
* 组件具备良好的可维护性、可复用性与可测试性
