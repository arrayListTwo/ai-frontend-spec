# Page Templates

## 目标

Page Templates 提供符合 AFES（AI Frontend Engineering Specification）规范的标准页面模板。

所有页面模板均基于：

* Vue 3
* Composition API
* `<script setup>`
* Vite
* Pinia
* Element Plus
* RuoYi-Vue3 项目结构

页面模板并非完整业务实现，而是可直接作为 AI 生成业务页面的基础模板。

一句话：

> 使用模板，而不是从空文件开始开发。

---

# 设计目标

页面模板应满足以下要求：

* 目录结构统一
* 页面结构统一
* 命名规范统一
* 数据流统一
* API 调用方式统一
* 状态管理方式统一
* 样式风格统一
* 可快速替换业务模型

同一种页面类型，应尽可能保持一致的代码结构。

---

# 当前模板

目前提供以下页面模板：

| 模板        | 适用场景        |
| --------- | ----------- |
| CRUD Page | 标准后台增删改查页面  |
| Tree Page | 左树右表、树形管理页面 |

后续可根据项目需要继续扩展，例如：

* Dashboard
* Detail Page
* Wizard Page
* Report Page
* Settings Page

---

# 推荐目录结构

所有页面模板应遵循统一目录组织。

```text
crud-page/
├── README.md
├── index.vue
├── api.js
├── hooks/
│   └── useCrud.js
├── components/
│   └── EditDialog.vue
└── prompt.md
```

不同模板可以根据业务需要增加目录，但应保持整体结构一致。

---

# 页面职责

页面负责：

* 页面布局
* 页面初始化
* 调用 API
* 调度业务流程
* 管理页面状态
* 组织子组件

页面不负责：

* 封装通用组件
* 编写公共工具函数
* 实现复杂算法
* HTTP 请求封装
* 全局状态管理

页面应作为业务编排层。

---

# 标准页面结构

后台管理页面建议采用统一布局。

```text
Page
├── Search Panel
├── Table Toolbar
├── Data Table
├── Pagination
└── Edit Dialog
```

不同业务页面可以调整顺序，但不建议改变整体组织方式。

---

# 页面生命周期

推荐页面初始化流程：

```text
进入页面
    │
    ▼
初始化查询参数
    │
    ▼
加载字典数据（如需要）
    │
    ▼
加载列表数据
    │
    ▼
等待用户操作
```

避免在页面加载时执行无关逻辑。

---

# 数据流

推荐统一数据流：

```text
页面
    │
    ▼
Composable（业务逻辑）
    │
    ▼
API
    │
    ▼
后端接口
```

页面尽量避免直接处理复杂业务逻辑。

---

# 推荐命名

页面目录：

```text
user
role
dept
menu
dict
post
notice
```

页面文件：

```text
index.vue
```

编辑弹窗：

```text
EditDialog.vue
```

业务 Hook：

```text
useCrud.js
useTree.js
usePage.js
```

保持命名统一、语义明确。

---

# 页面状态

页面维护：

* 查询条件
* 表格数据
* 分页信息
* Loading
* Dialog 状态
* 当前编辑数据

不应维护：

* 登录用户
* 权限信息
* 全局配置

这些应由 Pinia 或项目已有能力负责。

---

# API 组织

页面模板建议提供独立 API 文件。

例如：

```text
api.js
```

负责：

* 列表查询
* 新增
* 修改
* 删除
* 导出
* 获取详情

页面不直接编写 HTTP 请求。

---

# 子组件组织

推荐拆分以下组件：

* EditDialog
* DetailDialog
* ImportDialog
* AssignDialog
* SelectDialog

子组件负责独立 UI，不承担页面职责。

---

# Composable

复杂业务建议抽离到 Composable。

例如：

* CRUD
* Tree
* Search
* Pagination

页面负责调用，不负责实现。

---

# 权限控制

页面应统一使用项目权限体系。

包括：

* 按钮权限
* 操作权限
* 数据权限（项目支持时）

不要在页面中自行实现权限判断。

---

# 样式规范

页面默认：

* 使用 Scoped Style
* 使用 Flex 布局
* 使用项目公共样式
* 使用 CSS Variables
* 保持 Element Plus 默认风格

不要为单个页面重新设计样式体系。

---

# 页面模板使用流程

推荐开发流程：

```text
选择页面模板
    │
    ▼
复制模板目录
    │
    ▼
修改业务名称
    │
    ▼
调整字段定义
    │
    ▼
接入接口
    │
    ▼
补充业务逻辑
    │
    ▼
完成自检
```

模板提供的是统一骨架，业务实现由具体需求决定。

---

# AI 使用建议

向 AI 发出页面生成请求时，建议明确：

* 使用 AFES 全部规范
* 使用指定页面模板
* 指定业务模块名称
* 提供接口定义
* 提供字段信息
* 提供权限要求

示例：

> 使用 AFES CRUD Page Template，生成用户管理页面，遵循 RuoYi-Vue3 项目结构。

---

# AI 自动生成要求

AI 基于页面模板生成代码时必须遵守：

* 保持模板目录结构
* 保持页面职责单一
* 保持命名规范一致
* 优先复用项目公共能力
* 不引入新的技术方案
* 不修改模板核心结构
* 保持与 AFES 全部规范一致

---

# AI 禁止行为

AI 不得：

* 从空文件重新设计页面结构
* 将所有逻辑写入 `index.vue`
* 页面直接编写 HTTP 请求
* 页面直接实现复杂业务算法
* 重复创建公共组件
* 重复实现分页、查询等公共逻辑
* 修改项目统一页面布局
* 引入与项目无关的技术方案

---

# Checklist

生成页面前，应确认：

* 已选择正确页面模板
* 已确认业务类型
* 已准备接口定义
* 已准备字段信息
* 已确认权限要求

生成页面后，应确认：

* 页面结构符合模板规范
* API 已独立管理
* 业务逻辑职责清晰
* 子组件拆分合理
* 页面状态管理正确
* 样式符合项目规范
* 无重复实现
* 已完成 AI 自检
* 符合 AFES 全部规范
