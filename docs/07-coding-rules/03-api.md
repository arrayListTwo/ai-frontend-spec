# 03 API 规范（API Rules）

## 目标

本规范用于约束 AI 在编写 API 调用代码时的行为。

目标包括：

* 保持统一的数据请求方式
* 降低接口维护成本
* 保证接口命名一致性
* 保证错误处理一致
* 保证代码可维护
* 避免 AI 重复生成各种请求方式

---

# 核心原则

AI 必须遵循以下原则：

1. 所有接口统一放入 `/src/api`
2. 一个业务模块一个 API 文件
3. 页面不得直接编写 axios 请求
4. 页面只能调用 API 方法
5. API 文件只负责请求，不负责业务处理
6. 不在 API 中处理 UI
7. 不在 API 中处理 Message
8. 不在 API 中处理 Loading
9. 不在 API 中写业务判断
10. API 保持纯函数

一句话：

> API 只负责发送请求。

---

# 推荐目录

例如：

src/api

```
api
├── system
│   ├── user.js
│   ├── role.js
│   ├── dept.js
│   └── menu.js
│
├── monitor
│   ├── logininfor.js
│   └── operlog.js
│
├── business
│   ├── order.js
│   ├── customer.js
│   └── product.js
```

禁止：

```
api.js
request.js
allApi.js
```

禁止把几十个业务全部放到一个文件。

---

# 文件职责

例如：

user.js

负责：

* 用户列表
* 用户详情
* 新增用户
* 修改用户
* 删除用户
* 导入导出
* 重置密码
* 分配角色

不要：

```
role API
menu API
dept API
```

混入 user.js。

---

# API 命名规范

统一采用：

动词 + 名词

例如：

```
listUser

getUser

addUser

updateUser

delUser

exportUser

importUser

resetUserPwd

changeUserStatus

assignUserRole
```

避免：

```
query()

save()

doAdd()

request()

api()

handle()
```

这些名称没有业务语义。

---

# 方法命名

统一使用：

```
listXXX()

getXXX()

addXXX()

updateXXX()

delXXX()
```

分页：

```
listOrder()
```

详情：

```
getOrder()
```

新增：

```
addOrder()
```

修改：

```
updateOrder()
```

删除：

```
delOrder()
```

保持整个项目一致。

---

# URL 命名

遵循 REST 风格。

例如：

```
GET

/system/user/list

GET

/system/user/{id}

POST

/system/user

PUT

/system/user

DELETE

/system/user/{id}
```

不要：

```
/queryUser

/getList

/delete

/updateUserInfo
```

---

# 请求方式

必须符合 HTTP 语义。

查询：

GET

新增：

POST

修改：

PUT

删除：

DELETE

不要：

全部使用 POST。

---

# 参数规范

GET：

使用 params。

POST：

使用 data。

不要：

GET 请求放 body。

不要：

POST 请求放 params（特殊场景除外）。

---

# 分页规范

统一使用：

```
pageNum

pageSize
```

不要：

```
page

current

offset

limit
```

整个项目保持一致。

---

# 查询参数

查询对象统一使用：

```
query
```

例如：

```
const query = {
  pageNum: 1,
  pageSize: 10,
  userName: '',
  status: ''
}
```

不要：

```
form

params1

condition

search
```

多个命名混用。

---

# 请求参数对象

新增：

```
data
```

修改：

```
data
```

不要：

```
obj

info

entity

body
```

统一即可。

---

# API 文件职责边界

API 文件：

负责：

* URL
* Method
* Params
* Data
* Request

不负责：

* Loading
* Message
* Confirm
* Dialog
* Router
* Store
* 页面状态

例如不要：

```
ElMessage.success()

ElLoading.service()

router.push()

store.commit()
```

这些都属于业务层。

---

# 返回值

API 方法直接返回 Promise。

不要：

在 API 中解析业务。

例如不要：

```
if (res.code === 200)
```

不要：

```
return res.rows
```

不要：

```
return res.data
```

统一返回请求结果，由业务层决定如何处理。

---

# 页面调用原则

页面：

```
调用 API

处理 Loading

处理异常

处理 Message

刷新列表
```

API：

```
发送请求
```

职责清晰。

---

# 不重复封装

不要为了"高级封装"再封装一层：

```
service

repository

requestService

userService
```

若项目未形成明确的分层架构，应直接通过 API 模块调用。

避免无意义的抽象。

---

# 不在页面写请求

禁止：

页面直接：

```
axios()

fetch()

request()
```

页面必须：

```
import API

调用 API
```

保持统一入口。

---

# 请求实例

项目统一使用封装好的 request 实例。

不要：

每个文件：

```
import axios
```

重新创建实例。

不要：

```
axios.create()
```

多个实例。

统一维护。

---

# 文件长度

一个 API 文件建议：

200 行以内。

超过：

建议拆分。

例如：

```
order.js

orderItem.js

orderApprove.js
```

而不是：

```
order.js

1500 行
```

---

# 导出方式

统一使用：

命名导出。

例如：

```
export function listUser()

export function addUser()
```

避免默认导出整个对象。

统一风格便于自动导入与静态分析。

---

# 文件命名

统一：

小写。

例如：

```
user.js

role.js

menu.js

order.js
```

不要：

```
UserApi.js

USER.js

OrderAPI.js
```

---

# 接口注释

每个接口建议保留简洁注释。

例如：

* 查询用户列表
* 获取用户详情
* 新增用户
* 修改用户
* 删除用户

避免无意义注释。

例如：

```
API
```

```
request
```

没有任何价值。

---

# 文件排序

推荐顺序：

1. 查询列表
2. 查询详情
3. 新增
4. 修改
5. 删除
6. 导入导出
7. 特殊业务接口

保持所有 API 文件一致。

---

# AI 自动生成要求

AI 在生成 API 时必须遵守：

* 优先复用已有 API 文件
* 不创建重复接口
* 不修改已有接口语义
* 保持命名一致
* 保持 URL 风格一致
* 保持参数命名一致
* 保持返回方式一致
* 保持导出方式一致
* 不在页面直接发送请求
* 不新增新的请求工具
* 不新增新的 axios 实例
* 不在 API 中加入业务逻辑
* 不在 API 中加入 UI 逻辑
* 不在 API 中加入状态管理逻辑

---

# AI 禁止行为

AI 不得生成以下代码：

* 页面直接调用 axios
* 页面直接调用 fetch
* 一个业务出现多个 API 文件
* 一个 API 文件混杂多个业务
* 同一业务接口命名风格不一致
* POST 模拟所有请求
* GET 请求携带 body
* 在 API 中弹出消息
* 在 API 中处理 Loading
* 在 API 中进行页面跳转
* 在 API 中更新 Pinia Store
* 在 API 中解析业务状态并返回不同结构
* 新增重复的请求封装
* 创建多个 request 实例
* 使用无语义的方法命名
* 随意改变已有接口路径
* 将业务逻辑与网络请求混写

---

# Checklist

AI 完成 API 编码后，应确认以下内容：

* API 位于 `/src/api` 对应业务目录
* 一个业务对应一个 API 文件
* 页面未直接发送 HTTP 请求
* 使用统一的 request 实例
* URL 命名符合 REST 风格
* 请求方法符合 HTTP 语义
* GET 使用 `params`
* POST、PUT 使用 `data`
* API 方法采用统一命名规范
* 返回 Promise，不处理业务逻辑
* 未包含 Loading、Message、Router、Store 等 UI 或状态逻辑
* 文件职责单一，未混入其他业务接口
* 保持与项目现有代码风格一致
* 优先复用已有 API，而不是新增重复实现
