# 04 页面规范（Page Rules）

## 目标

本规范用于约束 AI 在编写页面（Page）代码时的行为。

目标包括：

* 保持页面职责单一
* 保持目录结构统一
* 保持代码风格一致
* 降低页面复杂度
* 提高 AI 修改代码的准确率
* 避免页面成为业务逻辑集中地

页面负责：

* 页面状态管理
* 页面交互
* 调用 API
* 调用组件
* 数据展示

页面不负责：

* 网络请求实现
* 通用业务逻辑
* 重复组件实现
* 工具函数实现

一句话：

> 页面负责组织，不负责实现。

---

# 页面目录规范

推荐目录：

src/views

```text
views
├── system
│   ├── user
│   │   ├── index.vue
│   │   ├── components
│   │   └── hooks
│   ├── role
│   └── dept
│
├── monitor
│
└── business
```

页面统一使用：

```text
index.vue
```

不要：

```text
User.vue
UserList.vue
Index.vue
Main.vue
```

保持统一。

---

# 页面职责

页面负责：

* 页面布局
* 页面状态
* 页面事件
* 调用 API
* 调用组件
* 页面生命周期
* 权限控制
* 数据刷新

页面不负责：

* axios 请求
* fetch 请求
* SQL
* 数据转换工具
* 日期工具实现
* 通用校验实现
* 通用业务算法

---

# 页面大小

建议：

300 行以内。

超过：

建议拆分。

例如：

```text
UserPage

↓

SearchForm
TableList
EditDialog
ImportDialog
AssignRoleDialog
```

而不是：

```text
index.vue

1800 行
```

---

# 页面组成

推荐结构：

1. 查询区域
2. 工具栏
3. 表格
4. 分页
5. 弹窗
6. 抽屉
7. 其它组件

整个项目保持一致。

---

# 查询区域

查询区域仅负责：

* 输入
* 选择
* 日期
* 查询
* 重置

不要：

在查询区域写复杂逻辑。

例如：

* 数据计算
* 权限计算
* 表格刷新逻辑

---

# 查询对象

统一：

```text
queryParams
```

不要：

```text
query

search

condition

form

params
```

多个命名混用。

---

# 表单对象

新增编辑：

统一：

```text
form
```

不要：

```text
model

entity

info

data
```

保持一致。

---

# 校验规则

统一：

```text
rules
```

不要：

```text
validator

validate

formRules

checkRules
```

多个命名。

---

# 列表数据

统一：

```text
list
```

例如：

```text
userList

roleList

deptList
```

不要：

```text
table

rows

dataList

result
```

同一项目保持一致。

---

# 加载状态

统一：

```text
loading
```

不要：

```text
isLoading

tableLoading

pageLoading

loadingFlag
```

多个命名。

特殊组件可使用局部 Loading，但页面主 Loading 保持统一。

---

# 分页

统一：

```text
total

queryParams.pageNum

queryParams.pageSize
```

不要：

```text
page

current

limit

offset
```

---

# 对话框状态

统一：

```text
open
```

例如：

```text
open

title
```

不要：

```text
visible

dialogVisible

showDialog
```

多个命名。

多个弹窗可增加业务前缀，例如：

```text
editOpen

importOpen

assignRoleOpen
```

---

# 方法命名

推荐：

获取数据：

```text
getList()
```

查询：

```text
handleQuery()
```

重置：

```text
resetQuery()
```

新增：

```text
handleAdd()
```

修改：

```text
handleUpdate()
```

删除：

```text
handleDelete()
```

导出：

```text
handleExport()
```

提交：

```text
submitForm()
```

取消：

```text
cancel()
```

保持整个项目一致。

---

# 生命周期

页面初始化：

统一：

```text
onMounted()

↓

getList()
```

不要：

页面初始化执行大量无关逻辑。

---

# 页面事件

页面事件：

负责：

* 调用 API
* 更新状态
* 打开弹窗
* 调用组件

不要：

写复杂业务算法。

复杂逻辑：

提取：

* composable
* utils
* service（若项目已有）
* 独立模块

---

# API 调用

页面：

只调用：

```text
listUser()

addUser()

updateUser()
```

不要：

```text
axios()

fetch()

request()
```

直接发送请求。

---

# 页面状态

页面维护：

* loading
* list
* total
* form
* queryParams
* open
* title

不要：

维护全局状态。

全局状态：

交给 Pinia。

---

# 数据处理

页面允许：

简单数据处理。

例如：

* 拼接字符串
* 格式化显示
* 判断按钮显示

不要：

复杂业务转换。

例如：

* 树结构生成
* 权限计算
* 大量数据转换
* 复杂过滤算法

应抽离。

---

# 权限控制

按钮权限：

统一使用项目已有权限指令或权限判断方式。

不要：

重复实现权限判断。

不要：

页面到处写：

```text
if (role === 'admin')
```

统一走权限体系。

---

# 表格

推荐：

页面：

维护：

* list
* loading

列格式化：

放：

* formatter
* slot

不要：

在页面中写大量：

```text
if...

else...

switch...
```

用于格式化。

---

# 弹窗

新增编辑：

推荐独立组件。

例如：

```text
components

EditDialog.vue
```

不要：

所有弹窗全部写在：

```text
index.vue
```

里面。

---

# 搜索条件

建议：

统一放：

```text
queryParams
```

不要：

多个：

```text
searchForm

query

condition

params
```

混用。

---

# 响应式变量

默认使用：

* ref：简单类型、组件实例、数组等需要整体替换的数据
* reactive：具有明确结构的对象（如 `queryParams`、`form`）

避免：

* 一个字段同时维护多个响应式来源
* 无意义地全部使用 `reactive`
* 深层嵌套对象导致维护困难

响应式数据应保持来源唯一、职责清晰。

---

# 组件拆分原则

满足以下任一条件，应考虑拆分组件：

* 超过 300 行
* 存在多个弹窗
* 存在复杂表单
* 多处复用
* 独立业务模块
* 可独立测试

不要为了拆分而拆分。

只有真正具备独立职责时才拆分。

---

# 页面之间

页面不得：

直接访问：

其它页面的数据。

不要：

```text
页面 A

↓

修改

页面 B
```

页面之间通信：

统一：

* Pinia
* Router
* API
* Event（仅特殊场景）

---

# 路由参数

页面：

统一从：

Route 获取参数。

不要：

依赖：

Window 全局变量。

不要：

通过 LocalStorage 传递一次性页面参数。

---

# 页面注释

建议：

保留：

* 模块说明
* 特殊业务说明
* 临时兼容说明（注明删除计划）

不要：

大量无意义注释。

例如：

```text
查询按钮

删除按钮

提交按钮
```

---

# AI 自动生成要求

AI 在生成页面代码时必须遵守：

* 优先复用已有页面结构
* 保持与项目模板一致
* 保持命名统一
* 不新增新的页面架构
* 不新增新的状态管理方式
* 不直接发送 HTTP 请求
* 不重复实现公共组件
* 不重复实现公共逻辑
* 保持页面职责单一
* 优先拆分可复用模块
* 保持目录结构统一
* 保持生命周期调用一致

---

# AI 禁止行为

AI 不得生成以下代码：

* 页面直接调用 axios
* 页面直接调用 fetch
* 页面直接创建 request 实例
* 页面包含复杂业务算法
* 页面实现公共工具函数
* 页面维护全局状态
* 页面重复实现权限逻辑
* 页面超过数百行仍继续堆积代码
* 一个页面承担多个业务模块
* 页面直接操作其它页面状态
* 无意义新增 composable、store、utils 或 service
* 与项目现有命名风格不一致
* 重复创建已有组件
* 使用多个风格混杂的变量命名

---

# Checklist

AI 完成页面开发后，应确认以下内容：

* 页面位于正确的 `views` 目录
* 页面职责单一
* 页面未直接发送 HTTP 请求
* API 全部通过 `/src/api` 调用
* 查询参数统一使用 `queryParams`
* 表单对象统一使用 `form`
* 校验规则统一使用 `rules`
* 列表数据命名统一
* Loading 命名统一
* 分页命名统一
* 方法命名符合项目规范
* 生命周期简洁，仅负责初始化
* 复杂逻辑已抽离
* 可复用部分已拆分组件
* 权限控制复用项目已有机制
* 页面结构与项目保持一致
* 未新增重复实现或无意义抽象
* 页面代码具有良好的可读性与可维护性
