# CRUD Page Template

## 目标

CRUD（Create、Read、Update、Delete）页面是后台管理系统中最常见的页面类型。

本模板基于 **RuoYi-Vue3（Vue3 + Composition API + Vite + Pinia + Element Plus）**，提供一套可直接用于 AI 生成业务页面的标准模板。

模板遵循 AFES 全部规范，可作为用户管理、角色管理、部门管理、岗位管理、字典管理等业务页面的统一基础。

一句话：

> 所有标准后台 CRUD 页面，都应优先基于本模板生成。

---

# 适用场景

适用于以下页面：

* 用户管理
* 角色管理
* 部门管理（非树形）
* 岗位管理
* 字典类型管理
* 字典数据管理
* 参数管理
* 公告管理
* 通知管理
* 日志查询
* 第三方业务列表页面

满足以下特征即可使用本模板：

* 查询条件
* 数据列表
* 分页
* 新增
* 编辑
* 删除
* 导出（可选）
* 导入（可选）
* 批量操作（可选）

---

# 模板目录

推荐目录结构：

```text
crud-page/
├── README.md
├── prompt.md                # 推荐 Prompt
├── index.vue                # 页面入口
├── api.js                   # 页面 API（示例）
├── hooks/
│   └── useCrud.js           # CRUD 业务逻辑
└── components/
    └── EditDialog.vue       # 新增/编辑弹窗
```

实际项目中建议放置于：

```text
src/views/{module}/{business}/
```

例如：

```text
src/views/system/user/
```

---

# 页面结构

推荐页面布局：

```text
Page
├── Search Panel
├── Table Toolbar
├── Data Table
├── Pagination
└── Edit Dialog
```

保持所有 CRUD 页面结构一致。

---

# 页面职责

`index.vue`

负责：

* 页面初始化
* 页面布局
* 页面状态组织
* 调用 CRUD Hook
* 页面事件绑定

不负责：

* HTTP 请求
* 表单校验实现
* 数据转换工具
* 通用业务逻辑

---

# Search Panel

负责：

* 查询条件
* 查询按钮
* 重置按钮

要求：

* 所有查询字段统一维护
* 查询参数统一管理
* Enter 支持查询
* Reset 恢复默认值

不负责：

* 数据请求

---

# Toolbar

建议包含：

* 新增
* 删除
* 导出
* 导入（可选）
* 刷新
* 列设置（项目支持时）

所有按钮：

统一使用权限控制。

---

# Table

负责：

展示列表数据。

建议统一包含：

* 序号
* 数据列
* 状态列
* 创建时间
* 操作列

保持列顺序一致。

---

# Pagination

分页负责：

* 当前页
* 每页数量
* 总数量
* 页码切换

分页状态统一维护。

不要：

页面自行实现分页逻辑。

---

# Edit Dialog

负责：

新增。

编辑。

查看（项目需要时）。

Dialog 不负责：

列表刷新。

刷新应由页面负责。

---

# API

推荐统一接口：

| 方法         | 说明     |
| ---------- | ------ |
| list       | 查询列表   |
| get        | 查询详情   |
| add        | 新增     |
| update     | 修改     |
| remove     | 删除     |
| exportData | 导出（可选） |
| importData | 导入（可选） |

API 文件仅负责接口调用。

---

# CRUD Hook

推荐抽离：

```text
useCrud.js
```

负责：

* 查询
* 删除
* 提交
* Loading
* 分页
* 选中项

页面负责：

调用。

Hook 负责：

实现。

---

# 页面状态

建议维护：

```text
queryParams
tableData
loading
pagination
selectedRows
dialogVisible
currentRow
```

避免：

维护重复数据。

---

# 数据流

推荐：

```text
用户操作
    │
    ▼
Page
    │
    ▼
useCrud
    │
    ▼
API
    │
    ▼
Backend
```

保持单向数据流。

---

# 权限

按钮：

统一权限控制。

例如：

* 新增
* 编辑
* 删除
* 导出

不要：

页面自行维护权限状态。

---

# 样式

页面：

统一：

* Scoped Style
* Flex Layout
* Element Plus
* CSS Variables

不要：

重新设计页面布局。

---

# 推荐命名

页面：

```text
index.vue
```

API：

```text
api.js
```

Dialog：

```text
EditDialog.vue
```

Hook：

```text
useCrud.js
```

命名保持统一。

---

# AI 使用方式

推荐 Prompt：

> 使用 AFES CRUD Page Template，生成【用户管理】页面，遵循 RuoYi-Vue3 项目结构。

同时提供：

* 接口定义
* 字段定义
* 查询条件
* 表格字段
* 编辑表单
* 权限信息

AI 不应自行猜测业务字段。

---

# AI 自动生成要求

AI 基于本模板生成页面时必须：

* 保持模板目录结构
* 保持页面布局一致
* 保持职责边界清晰
* API 独立管理
* Dialog 独立组件
* 优先复用项目公共组件
* 优先复用项目请求封装
* 保持与 AFES 全部规范一致

---

# AI 禁止行为

AI 不得：

* 将全部逻辑写入 `index.vue`
* 页面直接调用 HTTP 请求
* 将新增、编辑逻辑写在表格组件中
* Dialog 自行刷新列表
* 重复实现分页逻辑
* 重复实现查询逻辑
* 新增与项目无关的技术方案
* 修改模板核心结构

---

# Checklist

生成 CRUD 页面前，应确认：

* 已确认业务模块
* 已确认接口定义
* 已确认字段结构
* 已确认查询条件
* 已确认权限要求

生成完成后，应确认：

* 页面结构符合模板规范
* Search、Toolbar、Table、Pagination、Dialog 职责清晰
* API 已独立管理
* CRUD 逻辑已抽离
* 页面状态管理合理
* 无重复实现
* 样式符合项目规范
* 已完成 AI 自检
* 符合 AFES 全部规范
