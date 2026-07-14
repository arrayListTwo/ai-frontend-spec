# 02 Project Structure 项目结构规范

> AI Frontend Engineering Specification（AFES）
>
> 本文档定义 AI 在 RuoYi-Vue3 项目中的目录结构、文件归属以及代码组织规则。
>
> AI 在生成、修改、重构代码时，必须遵循本规范。

---

# 1. 文档目标

本规范用于约束 AI 生成代码时的文件位置和项目结构。

AI 不仅需要生成正确的代码，还必须：

- 将代码放置到正确目录；
- 遵循已有项目结构；
- 优先复用已有能力；
- 避免创建无意义目录；
- 避免破坏项目架构。

---

# 2. 适用范围

本规范适用于：

- 新增页面；
- 新增 Vue 组件；
- 新增 API；
- 新增工具函数；
- 新增状态模块；
- 修改已有业务代码；
- AI 自动生成代码。

---

# 3. 项目目录基线

项目基于：

- Vue3
- Composition API
- `<script setup>`
- Vite
- JavaScript
- Element Plus
- Pinia
- Vue Router
- Axios
- RuoYi-Vue3

核心目录：

```text
src
├── api
├── assets
│   ├── fonts
│   ├── images
│   └── styles
├── components
│   ├── common
│   └── layout
├── directive
├── layout
├── plugins
├── router
│   └── modules
├── store
│   └── modules
├── utils
└── views
```

AI 必须基于以上结构进行开发。

---

# 4. 规则等级

本文档采用以下规则等级：

|等级|说明|
|-|-|
|MUST|必须遵守|
|SHOULD|推荐遵守|
|MAY|可以选择|
|MUST NOT|禁止|

---

# 5. 页面目录规范

## CR008 页面必须放置于 views

### 目标

统一管理业务页面。

---

### MUST

所有业务页面必须放置：

```
src/views
```

例如：

```
src/views/user/index.vue
```

---

### 页面目录推荐结构

```
views
└── user
    ├── index.vue
    ├── components
    └── hooks
```

---

### MUST NOT

禁止创建：

```
src/pages
```

禁止将业务页面放入：

```
src/components
```

---

### AI 推理提示

生成页面前：

1. 判断是否属于业务页面；
2. 查找已有业务模块；
3. 放入对应 views 目录。

---

### 检查项

- [ ] 页面位于 src/views
- [ ] 未新增 pages 目录
- [ ] 页面结构符合已有项目规范

---

# 6. API 目录规范

## CR009 API 必须放置于 api

### 目标

统一管理后端接口调用。

---

### MUST

所有接口请求必须定义于：

```
src/api
```

例如：

```
src/api/user/user.js
```

---

### 推荐结构

```
api
├── system
│   ├── user.js
│   └── role.js
└── business
    └── customer.js
```

---

### 页面调用方式

正确：

```javascript
import {
  getUserList
} from '@/api/system/user'
```

错误：

```javascript
axios.get('/system/user/list')
```

---

### MUST NOT

禁止：

- 页面组件直接调用 axios；
- 在 Vue 文件中定义接口；
- 重复创建已有接口。

---

### AI 推理提示

新增接口前：

1. 搜索 src/api；
2. 判断是否已经存在；
3. 如果不存在，再创建。

---

### 检查项

- [ ] API 文件位于 src/api
- [ ] 页面未直接调用 axios
- [ ] 接口命名符合项目规范

---

# 7. 公共组件目录规范

## CR010 公共组件必须放置于 components

### 目标

提高组件复用能力。

---

### MUST

公共组件必须放置：

```
src/components
```

---

目录说明：

```
components
├── common
└── layout
```

---

## common

用于：

- 通用组件；
- 可跨业务复用组件。

例如：

```
components/common
├── Upload
├── SearchForm
└── DictTag
```

---

## layout

用于：

- 页面布局相关组件。

---

### MUST NOT

禁止：

在多个页面复制相同组件。

错误：

```
views/user/components/Search.vue

views/role/components/Search.vue
```

如果多个模块使用，应提升：

```
components/common/Search.vue
```

---

### AI 推理提示

创建组件前：

必须检查：

```
src/components
```

是否已经存在类似能力。

---

### 检查项

- [ ] 已检查公共组件
- [ ] 未重复开发已有组件
- [ ] 组件目录正确

---

# 8. 工具目录规范

## CR011 工具方法必须放置于 utils

### 目标

统一管理公共工具函数。

---

### MUST

公共工具函数必须放置：

```
src/utils
```

---

例如：

```
utils
├── request.js
├── auth.js
├── validate.js
└── format.js
```

---

### 工具函数要求

工具函数必须：

- 无业务状态；
- 可独立调用；
- 可被多个模块复用。

---

### MUST NOT

禁止：

在页面中创建公共函数。

错误：

```javascript
function formatDate(){

}
```

如果多个地方使用，应移动到：

```
src/utils
```

---

### AI 推理提示

新增方法前：

判断：

> 是否存在两个以上使用场景？

如果存在，应放入 utils。

---

### 检查项

- [ ] 工具函数位置正确
- [ ] 无重复工具代码
- [ ] 无业务逻辑混入

---

# 9. 路由目录规范

## CR012 路由必须放置于 router

### 目标

统一管理页面路由。

---

### MUST

路由配置必须放置：

```
src/router
```

---

推荐结构：

```
router
├── index.js
└── modules
    ├── system.js
    └── business.js
```

---

### MUST

新增页面时必须同步考虑：

- 路由配置；
- 菜单配置；
- 权限控制。

---

### MUST NOT

禁止：

在页面组件中维护业务路由。

---

### 检查项

- [ ] 路由文件位置正确
- [ ] 权限配置完整
- [ ] 菜单关系明确

---

# 10. 状态管理目录规范

## CR013 状态必须放置于 store

### 目标

统一管理全局状态。

---

### MUST

全局状态必须使用 Pinia。

位置：

```
src/store
```

---

推荐结构：

```
store
└── modules
    ├── user.js
    └── app.js
```

---

### SHOULD

以下场景使用 Store：

- 用户信息；
- 权限信息；
- 全局配置；
- 多页面共享数据。

---

### SHOULD NOT

以下数据不要进入 Store：

- 页面表单数据；
- Dialog 显示状态；
- 临时查询条件。

---

### AI 推理提示

创建 Store 前：

判断：

是否需要：

- 多页面共享？
- 全局维护？

如果不是：

优先使用组件内部状态。

---

### 检查项

- [ ] 使用 Pinia
- [ ] Store 位置正确
- [ ] 未滥用全局状态

---

# 11. 文件命名规范

## Vue 文件

推荐：

```
PascalCase.vue
```

例如：

```
UserDialog.vue
UploadFile.vue
```

---

## JavaScript 文件

推荐：

```
camelCase.js
```

例如：

```
userApi.js
formatDate.js
```

---

# 12. AI 文件创建流程

AI 创建文件前必须执行：

```
判断文件类型

↓

判断所属职责

↓

搜索已有类似文件

↓

确定目标目录

↓

创建文件
```

---

# 13. 禁止行为

AI MUST NOT：

- 随意新增一级目录；
- 创建 pages 目录；
- 重复创建公共组件；
- 在页面中直接调用接口；
- 在 utils 中写业务代码；
- 在 views 中放公共工具；
- 修改项目基础结构。

---

# 14. AI 最终检查清单

生成代码前：

- [ ] 已确认文件类型
- [ ] 已确认目标目录
- [ ] 已搜索已有能力
- [ ] 已阅读相关规范


生成代码后：

- [ ] 文件路径正确
- [ ] 未新增无意义目录
- [ ] 未产生重复代码
- [ ] 符合 RuoYi-Vue3 项目结构

---

# 15. 关联规范

本规范关联：

- 00-project-baseline.md
- 04-context-awareness.md
- 05-decision-rules.md
- 06-workflow.md
- 07-coding-rules/01-vue3.md
- 07-coding-rules/03-api.md

---

# 总结

项目结构是 AI Coding 的基础约束。

AI 必须理解：

> 正确的代码必须存在于正确的位置。

所有新增代码必须：

- 遵循已有目录；
- 优先复用已有能力；
- 保持架构稳定；
- 避免无意义扩展。
