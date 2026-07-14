# AFES Tree CRUD Page Template

## 简介

Tree CRUD Page 是 AFES 提供的标准树形页面模板。

适用于：

- 部门管理
- 菜单管理
- 分类管理
- 行政区划
- 组织机构
- 产品分类
- 字典分类
- 栏目管理
- 树形权限管理

该模板遵循：

- AFES 全部规范
- Vue3
- Composition API
- Vite
- Pinia
- Element Plus
- RuoYi-Vue3

---

# 页面特点

相比普通 CRUD 页面，Tree Page 增加了：

- Tree Table
- Tree Expand / Collapse
- Parent Node
- Children Node
- Parent Select
- Tree CRUD
- Parent Validation

推荐目录：

templates/
└── pages/
└── tree-page/
├── README.md
├── prompt.md
├── replace.md
├── api.js
├── index.vue
├── hooks/
│   └── useTreeCrud.js
└── components/
└── EditDialog.vue

---

# 页面组成

页面包含：

Search

↓

Toolbar

↓

Tree Table

↓

Pagination（可选）

↓

EditDialog

---

# 适用场景

## 菜单管理

支持：

- 一级菜单
- 子菜单
- 按钮权限

支持树展开。

---

## 部门管理

支持：

- 上级部门
- 下级部门
- Tree Select

---

## 分类管理

支持：

- 无限级分类
- Tree CRUD

---

## 行政区划

支持：

- 省
- 市
- 区
- 街道

---

# AI 使用方式

将 prompt.md 与本模板一起提供给 AI。

AI 只需要替换：

- API
- 字段
- 权限
- 树节点名称

即可快速生成业务页面。

---

# AFES 原则

保持：

页面负责：

- 页面布局
- Tree Table

Hook 负责：

- Tree CRUD
- Expand
- Collapse
- Selection

Dialog 负责：

- 新增
- 编辑

API：

统一维护。

---

# 模板目标

最终生成的页面应：

- 可直接运行
- 可直接提交 Git
- 可长期维护
- 符合 AFES 全部规范
- 满足企业级 Tree CRUD 开发要求
