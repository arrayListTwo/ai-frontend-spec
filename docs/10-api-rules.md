# 10 API 开发规则（API Development Rules）

## 目标

本规范定义 AI 在开发、修改和维护 API 模块时应遵循的统一规则。

`07-coding-rules` 约束的是**API 代码如何编写**。

本规范约束的是**API 应如何设计、组织、维护和演进**。

AI 在新增任何 API 之前，应优先检查项目中是否已经存在相同或相近接口，而不是直接创建新的 API 文件或方法。

一句话：

> API 负责连接前后端，而不是承载业务逻辑。

---

# API 职责

API 模块是前端访问后端服务的统一入口。

API 负责：

* 定义接口
* 发送 HTTP 请求
* 维护接口路径
* 定义请求方式
* 组织请求参数
* 返回请求结果

API 不负责：

* 页面交互
* Loading
* Message
* Dialog
* Router
* Pinia
* 权限控制
* 数据格式转换
* 业务流程处理

API 应保持纯粹、稳定、可复用。

---

# 一个业务，一个 API 文件

推荐目录：

```text
src/api
├── system
│   ├── user.js
│   ├── role.js
│   ├── dept.js
│   └── menu.js
├── monitor
└── business
```

原则：

一个业务模块对应一个 API 文件。

例如：

用户管理：

```text
user.js
```

角色管理：

```text
role.js
```

不要：

```text
api.js

system.js

allApi.js
```

集中管理所有接口。

---

# API 与页面关系

推荐调用关系：

```text
Page
 │
 ▼
API
 │
 ▼
Backend
```

不要：

```text
Page
 │
 ▼
axios
 │
 ▼
Backend
```

页面不得直接发送 HTTP 请求。

---

# API 与 Store 关系

允许：

Store 调用 API。

例如：

* 登录
* 获取用户信息
* 获取权限
* 刷新 Token

普通业务：

优先：

页面调用 API。

不要：

所有业务都通过 Store 中转。

---

# API 与组件关系

默认：

组件不直接调用业务 API。

推荐：

```text
Page
 │
 ▼
API
 │
 ▼
Component
```

特殊组件：

允许：

* 上传
* 远程搜索
* 图片选择
* 懒加载树

但应保持组件职责独立。

---

# REST 风格

推荐：

| 操作   | HTTP Method |
| ---- | ----------- |
| 查询列表 | GET         |
| 查询详情 | GET         |
| 新增   | POST        |
| 修改   | PUT         |
| 删除   | DELETE      |

避免：

所有接口全部使用：

POST。

---

# URL 规范

推荐：

```text
/system/user/list

/system/user/{id}

/system/user
```

保持：

统一命名。

不要：

```text
/getUserList

/query

/doDelete

/saveUserInfo
```

---

# 请求参数

GET：

统一：

使用：

`params`

POST / PUT：

统一：

使用：

`data`

DELETE：

根据项目规范：

使用路径参数或请求体。

不要：

GET：

发送 Body。

---

# 返回值

API：

统一：

返回 Promise。

不要：

在 API 中：

解析：

```text
res.code
```

不要：

在 API 中：

返回：

```text
rows
```

页面自行处理业务逻辑。

---

# 错误处理

请求异常：

统一交由：

项目 Request 拦截器。

页面负责：

业务提示。

不要：

API：

自己：

弹 Message。

---

# 请求实例

整个项目：

统一：

一个 Request 实例。

例如：

```text
utils/request.js
```

不要：

每个模块：

重新：

```text
axios.create()
```

---

# 方法命名

统一采用：

动词 + 名词。

例如：

```text
listUser()

getUser()

addUser()

updateUser()

delUser()

exportUser()

importUser()
```

不要：

```text
save()

query()

request()

api()

handle()
```

---

# 参数命名

统一：

查询：

```text
query
```

新增：

```text
data
```

修改：

```text
data
```

路径参数：

```text
id
```

保持项目一致。

---

# 文件组织

推荐顺序：

1. 查询列表
2. 查询详情
3. 新增
4. 修改
5. 删除
6. 导入
7. 导出
8. 特殊业务接口

整个项目保持一致。

---

# 接口复用

新增 API 前：

AI 必须检查：

* 是否已有同路径接口
* 是否已有同业务接口
* 是否已有可扩展接口

不要：

重复创建。

例如：

已有：

```text
listUser()
```

不要：

再新增：

```text
queryUserList()
```

---

# 接口版本

如果后端存在：

V1

V2

V3

应保持：

目录清晰。

不要：

同一文件：

混杂：

多个版本。

---

# 文件长度

建议：

300 行以内。

超过：

建议：

拆分。

例如：

```text
order.js

orderApprove.js

orderItem.js
```

---

# 接口变更

修改 API 时：

优先：

兼容。

不要：

直接：

修改：

已有方法：

参数。

返回值。

命名。

除非：

需求明确要求。

---

# Mock

如果项目已有 Mock：

AI 应：

同步维护。

不要：

API 修改后：

Mock 不更新。

---

# 接口文档

建议：

接口增加：

简洁说明。

例如：

* 查询用户列表
* 获取角色详情
* 导出菜单

不要：

大量：

重复说明。

---

# AI API 开发流程

AI 在开发 API 时，应遵循以下顺序：

1. 检查是否已有 API
2. 检查是否已有 Request 实例
3. 确认所属业务模块
4. 确认 HTTP Method
5. 确认 URL
6. 确认参数类型
7. 保持命名一致
8. 保持返回方式一致
9. 检查是否影响已有接口
10. 检查是否需要同步 Mock

不得直接新增接口。

---

# AI 自动生成要求

AI 在生成 API 时必须遵守：

* 优先复用已有 API
* 一个业务一个 API 文件
* 使用统一 Request 实例
* 保持 REST 风格
* 保持命名统一
* 返回 Promise
* 不处理业务逻辑
* 不处理 UI
* 不处理 Store
* 不新增重复接口
* 保持与项目整体风格一致

---

# AI 禁止行为

AI 不得生成以下 API：

* 页面直接发送 HTTP 请求
* 一个 API 文件包含多个业务
* 重复创建已有接口
* API 中处理 Message
* API 中处理 Loading
* API 中处理 Router
* API 中处理 Pinia
* API 中解析业务状态
* API 中新增复杂业务逻辑
* 创建多个 Request 实例
* 修改已有接口行为导致兼容性破坏
* 与项目现有 API 设计风格不一致

---

# Checklist

AI 完成 API 开发后，应确认以下内容：

* 已检查是否存在可复用 API
* API 文件归属正确
* 一个业务对应一个 API 文件
* 使用统一 Request 实例
* HTTP Method 符合 REST 语义
* URL 命名符合项目规范
* 请求参数类型正确
* 方法命名统一且具有业务语义
* 返回 Promise，未处理业务逻辑
* 未包含 UI、Store 或 Router 相关代码
* 未新增重复接口
* 修改保持向后兼容（如适用）
* Mock 与接口保持同步（如项目使用）
* 与项目整体 API 设计规范保持一致
