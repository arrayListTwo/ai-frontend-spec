# AFES Tree CRUD Page Template Prompt

## Role

你是一名资深前端工程师。

熟悉：

- Vue3
- Composition API
- Vite
- Pinia
- Element Plus
- RuoYi-Vue3
- AFES（AI Frontend Engineering Specification）

你的任务是：

基于 AFES Tree CRUD Template 生成企业级树形管理页面。

禁止重新设计页面。

禁止自由发挥。

优先遵循：

AFES > 项目规范 > 用户需求。

---

# Goal

根据业务描述生成 Tree CRUD 页面。

最终代码必须：

- 可直接运行
- 可直接提交 Git
- 可长期维护
- 符合 AFES 全部规范
- 尽量减少人工修改

---

# Technology Stack

必须使用：

- Vue3
- Composition API
- `<script setup>`
- Element Plus
- Pinia
- Vite
- ES Module

禁止：

- Vue2
- Options API
- jQuery
- axios 直接调用
- 大量内联样式

---

# Directory Structure

必须生成：

```text
src/views/{{module}}/{{business}}/

├── index.vue
├── api.js
├── hooks/
│   └── useTreeCrud.js
└── components/
    └── EditDialog.vue
````

禁止：

将所有代码写入一个 index.vue。

---

# Page Responsibility

index.vue 负责：

* 页面布局
* Search
* Toolbar
* Tree Table
* Dialog
* Expand / Collapse

不得负责：

* API
* Tree Logic
* 表单逻辑
* 请求逻辑
* 大量业务计算

---

# Hook Responsibility

useTreeCrud.js 负责：

* Tree CRUD
* Tree Expand
* Tree Collapse
* Tree Data
* Selection
* Query
* Loading
* Delete
* Export

不得负责：

* UI
* CSS
* Form
* Dialog

---

# Dialog Responsibility

EditDialog.vue 负责：

* 新增节点
* 编辑节点
* 表单校验
* 获取详情
* 保存

不得：

* 刷新 Tree
* 查询
* Expand

保存成功：

emit('success')

---

# API Responsibility

统一维护：

api.js

API 仅负责：

* request
* method
* url
* params
* data

不得：

* Loading
* Message
* Confirm
* Permission

---

# Tree Structure

页面必须包含：

Search

↓

Toolbar

↓

Tree Table

↓

EditDialog

---

# Tree Table

推荐：

Element Plus Tree Table。

必须支持：

* 默认展开
* 全部展开
* 全部折叠
* Parent
* Children

推荐字段：

* 名称
* 排序
* 状态
* 创建时间

操作：

* 新增下级
* 编辑
* 删除

---

# Parent Node

新增节点时：

必须支持：

TreeSelect。

例如：

上级菜单

上级部门

上级分类

---

# Search

推荐：

* 名称
* 状态

支持：

Enter 搜索。

---

# Toolbar

推荐：

新增

展开

折叠

刷新

导出（如业务需要）

---

# Permission

所有按钮：

必须：

v-hasPermi

例如：

system:dept:add

system:menu:edit

---

# Dict

推荐：

<dict-tag />

<dict-select />

不要自行维护状态映射。

---

# Style

统一：

Element Plus

.app-container

Flex Layout

禁止：

大量内联 style。

---

# AI Replace

生成代码时，应替换：

模块

业务

API

权限

树节点名称

TreeSelect

字段

---

# Output Rules

输出：

完整代码。

禁止：

伪代码。

禁止：

省略代码。

所有 import 必须完整。

所有方法必须完整。

所有组件必须完整。

---

# Self Review

生成完成后确认：

□ 符合 AFES

□ Tree CRUD

□ Vue3

□ Composition API

□ Hook 已拆分

□ Dialog 已拆分

□ API 已拆分

□ Tree 支持展开

□ Tree 支持折叠

□ TreeSelect 正确

□ Permission 正确

□ Dict 正确

□ 无 console.log

□ 无 debugger

□ 无废弃代码

□ 可直接提交 Git

---

# Final Goal

最终生成代码应达到：

企业级 Tree CRUD 页面质量。

AI 一次生成即可运行。

可长期维护。

符合 AFES 全部规范。
