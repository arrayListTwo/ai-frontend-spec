# 06 状态管理规范（State Management Rules）

## 目标

本规范用于约束 AI 在使用 Pinia 进行状态管理时的行为。

目标包括：

* 保持状态来源唯一（Single Source of Truth）
* 降低页面之间的数据耦合
* 避免状态滥用
* 保持 Store 职责清晰
* 提高 AI 修改状态管理代码的准确率

Store 负责：

* 全局共享状态
* 全局业务状态
* 用户信息
* 权限信息
* 系统配置
* 可跨页面复用的数据

Store 不负责：

* 页面临时状态
* Dialog 开关
* 表单数据
* 查询条件
* Loading 状态

一句话：

> Store 管理全局状态，而不是页面状态。

---

# 核心原则

AI 必须遵循以下原则：

1. 能不用 Store 就不用 Store
2. 页面状态优先放页面
3. 一个 Store 负责一个业务领域
4. Store 不直接操作 UI
5. Store 不依赖页面
6. Store 不负责组件通信
7. 保持状态来源唯一
8. 避免重复维护同一份数据

---

# Store 目录

推荐目录：

src/store

```text
store
├── modules
│   ├── user.js
│   ├── permission.js
│   ├── app.js
│   ├── settings.js
│   └── tagsView.js
│
└── index.js
```

业务 Store：

如确有需要：

```text
modules
├── order.js
├── workflow.js
└── message.js
```

不要：

```text
store.js
allStore.js
global.js
```

把所有状态放一起。

---

# Store 职责

推荐：

一个 Store：

一种业务。

例如：

User Store：

负责：

* 用户信息
* Token
* 登录状态
* 用户权限

不要：

User Store：

再维护：

* 商品
* 订单
* 消息
* 审批

---

# 页面状态

页面维护：

* loading
* form
* queryParams
* dialog
* tableData
* total

不要：

放进 Store。

例如：

```text
编辑用户 Dialog 是否打开
```

属于页面状态。

---

# 全局状态

推荐放 Store：

* 当前登录用户
* Token
* 权限菜单
* 字典缓存
* 系统配置
* 国际化配置
* 当前主题
* 当前语言
* 当前租户
* 当前组织

这些属于整个应用共享状态。

---

# 不要滥用 Store

不要：

仅为了：

父子组件通信。

创建：

Store。

推荐：

Props

↓

Emit

完成。

---

# 不要跨页面共享临时数据

例如：

页面 A：

跳转：

页面 B。

不要：

Store：

存：

```text
当前搜索条件
```

推荐：

Router 参数。

或者：

重新查询。

---

# Store 命名

统一：

```text
useUserStore

usePermissionStore

useAppStore

useSettingsStore
```

不要：

```text
user

User

store

mainStore
```

命名不明确。

---

# State 命名

保持语义化。

例如：

```text
token

userInfo

roles

permissions

sidebarOpened

device

language
```

不要：

```text
data

info

list

obj

temp
```

无业务语义。

---

# Getter 使用原则

Getter：

仅负责：

派生状态。

例如：

```text
用户全名

是否管理员

当前菜单

是否登录
```

不要：

Getter：

请求接口。

不要：

Getter：

修改 State。

Getter 应保持纯计算。

---

# Action 使用原则

Action：

负责：

* 修改 State
* 调用 API
* 数据同步
* 登录退出
* 初始化数据

不要：

Action：

操作：

* Message
* Dialog
* Router（特殊登录跳转除外）
* Loading

UI 行为应由页面负责。

---

# API 调用

允许：

Store 调用 API。

例如：

```text
登录

获取用户信息

获取权限

刷新 Token
```

不要：

普通页面业务：

全部放 Store。

例如：

```text
订单列表

客户管理

商品管理
```

这些属于页面业务。

---

# 数据来源唯一

例如：

用户信息：

统一来自：

```text
User Store
```

不要：

页面：

维护：

```text
userInfo
```

Store：

也维护：

```text
userInfo
```

造成双份数据。

---

# 不要镜像数据

例如：

Store：

已有：

```text
dict
```

页面：

不要：

再复制：

```text
dictList
```

推荐：

直接使用 Store。

---

# 修改状态

统一：

通过 Action。

不要：

页面：

直接：

修改：

Store 内部复杂状态。

例如不要：

```text
userStore.userInfo.name = 'Tom'
```

推荐：

```text
userStore.updateUserInfo(...)
```

保持修改入口统一。

---

# 持久化

仅持久化：

真正需要的数据。

例如：

* Token
* 用户信息（按项目需求）
* 系统主题
* 语言
* 布局设置

不要：

持久化：

* Loading
* Dialog
* 当前分页
* 当前查询条件
* 临时表单

---

# 重置状态

每个 Store：

建议：

提供：

```text
resetState()
```

用于：

* 退出登录
* 切换租户
* 切换组织
* 清空缓存

不要：

逐个字段：

手工赋值。

---

# Computed

页面：

优先：

使用：

```text
computed(() => store.xxx)
```

不要：

复制：

Store 数据。

例如：

```text
const user = ref(store.userInfo)
```

容易失去同步。

---

# 解构

使用 Pinia 时：

响应式状态：

统一使用：

```text
storeToRefs()
```

普通方法：

直接解构。

避免：

直接解构 State。

否则：

可能失去响应式。

---

# Watch

不要：

监听：

整个 Store。

例如：

```text
watch(store)
```

推荐：

监听：

具体字段。

例如：

```text
store.token

store.language
```

保持性能。

---

# Store 之间

允许：

Store 调用 Store。

但不要：

循环依赖。

例如：

```text
User Store

↓

Permission Store

↓

User Store
```

形成循环。

---

# 模块拆分

满足以下情况：

建议：

拆分 Store：

* 文件超过 300 行
* 状态明显属于不同业务
* 模块可独立维护
* 模块可独立测试

不要：

为了拆分而拆分。

---

# 临时缓存

不要：

把：

一次性缓存。

放 Store。

例如：

```text
当前打开 Dialog

当前编辑对象

当前查询关键字
```

属于页面状态。

---

# Store 注释

建议：

保留：

* Store 职责
* 特殊状态说明
* Action 说明
* Getter 说明

不要：

无意义注释。

---

# AI 自动生成要求

AI 在生成 Store 时必须遵守：

* 优先复用已有 Store
* 一个 Store 一个业务领域
* 页面状态不进入 Store
* 保持状态来源唯一
* Getter 保持纯计算
* Action 负责状态变更
* 不新增重复状态
* 不新增重复 Store
* 使用 `storeToRefs()` 获取响应式状态
* 保持与项目现有 Pinia 风格一致
* 不引入新的状态管理方案

---

# AI 禁止行为

AI 不得生成以下代码：

* 把页面状态放进 Store
* 为父子组件通信创建 Store
* 重复维护同一份状态
* Getter 修改 State
* Getter 请求接口
* Store 操作 Dialog
* Store 操作 Message
* Store 操作 Loading
* Store 操作普通页面跳转
* 页面直接修改 Store 内部复杂状态
* 持久化临时页面数据
* 创建职责混乱的超级 Store
* Store 之间循环依赖
* 使用无语义的 State 命名
* 与项目现有状态管理风格不一致

---

# Checklist

AI 完成状态管理代码后，应确认以下内容：

* Store 职责单一
* 页面状态未放入 Store
* 全局状态集中管理
* 一个业务领域对应一个 Store
* State 命名清晰且具有业务语义
* Getter 仅负责派生状态
* Action 负责状态修改与必要的数据同步
* 未重复维护同一份数据
* 使用 `storeToRefs()` 获取响应式状态
* 页面未直接修改 Store 内部复杂状态
* 持久化范围合理
* 提供必要的状态重置能力
* Store 之间不存在循环依赖
* 与项目现有 Pinia 架构保持一致
* 状态来源唯一，代码具有良好的可维护性
