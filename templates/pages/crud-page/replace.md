# AFES CRUD Template Replace Guide

## 文档目的

本文档用于指导 AI（ChatGPT、Claude Code、Cursor、GitHub Copilot 等）或开发人员，将 `crud-page` 模板快速替换为具体业务页面。

目标：

* 最少人工修改
* 最快生成业务代码
* 保持 AFES 规范一致性
* 保持整个项目代码风格统一

---

# 替换原则

遵循以下原则：

1. **替换业务，不替换结构**
2. **替换数据，不替换规范**
3. **保持目录结构不变**
4. **保持组件职责不变**
5. **保持 Hook 职责不变**

---

# 一、业务名称替换

模板默认使用：

```text
Demo
```

根据业务替换为实际名称。

例如：

| 模板   | 替换后    |
| ---- | ------ |
| Demo | User   |
| Demo | Role   |
| Demo | Dept   |
| Demo | Menu   |
| Demo | Notice |
| Demo | Post   |
| Demo | Dict   |

例如：

```javascript
addDemo()
```

替换为：

```javascript
addUser()
```

---

# 二、API 地址替换

模板：

```text
/system/demo
```

根据业务替换。

例如：

```text
/system/user
```

```text
/system/role
```

```text
/system/dept
```

```text
/system/menu
```

例如：

```javascript
const API_PREFIX = '/system/demo'
```

替换为：

```javascript
const API_PREFIX = '/system/user'
```

---

# 三、API 方法替换

模板默认：

```text
listDemo
getDemo
addDemo
updateDemo
removeDemo
exportDemo
```

替换为：

```text
listUser
getUser
addUser
updateUser
removeUser
exportUser
```

保持统一命名：

```text
listXXX
getXXX
addXXX
updateXXX
removeXXX
exportXXX
```

---

# 四、页面标题替换

例如：

模板：

```text
新增
编辑
```

业务：

```text
新增用户
编辑用户
```

或：

```text
新增角色
编辑角色
```

根据项目规范决定是否增加业务名称。

---

# 五、权限标识替换

模板：

```text
system:demo:add
system:demo:edit
system:demo:remove
system:demo:export
system:demo:query
```

替换为：

```text
system:user:add
system:user:edit
system:user:remove
system:user:export
system:user:query
```

所有权限保持统一格式：

```text
模块:业务:动作
```

例如：

```text
system:role:add
monitor:online:query
system:dept:edit
```

---

# 六、查询条件替换

模板默认：

```text
名称
状态
```

根据业务调整。

例如：

用户管理：

```text
用户名
手机号
状态
部门
创建时间
```

角色管理：

```text
角色名称
角色权限
状态
```

部门管理：

```text
部门名称
负责人
状态
```

删除不需要的查询项，新增业务查询项。

---

# 七、表格字段替换

模板：

```text
ID
名称
状态
创建时间
```

例如：

用户：

```text
用户名
昵称
手机号
邮箱
状态
创建时间
```

菜单：

```text
菜单名称
路由
组件
权限
排序
状态
```

不要保留无意义的模板字段。

---

# 八、Dialog 字段替换

模板：

```text
名称
编码
排序
状态
备注
```

根据业务修改。

例如：

用户：

```text
用户名
昵称
密码
手机号
邮箱
部门
角色
岗位
状态
备注
```

菜单：

```text
菜单名称
上级菜单
菜单类型
路由地址
组件路径
权限标识
图标
排序
状态
```

---

# 九、表单校验替换

模板：

```text
required
length
```

根据业务增加：

```text
pattern
validator
手机号
邮箱
身份证
唯一性校验
```

所有规则集中维护在 `rules`。

---

# 十、字典组件替换

推荐：

```vue
<dict-tag />

<dict-select />

<dict-radio />

<dict-checkbox />
```

不要：

```vue
{{ status == 0 ? '启用' : '停用' }}
```

避免页面维护字典映射。

---

# 十一、Hook 保持不变

一般情况下：

```text
useCrud.js
```

无需修改结构。

仅替换：

* API
* Query
* Export

不要：

* 修改 Hook 职责
* 增加页面 UI
* 增加 Dialog UI

---

# 十二、Dialog 保持不变

保留：

```text
EditDialog.vue
```

仅替换：

* Form
* Rules
* API

不要：

* 刷新列表
* 查询
* Loading（页面）

---

# 十三、样式替换

推荐：

保持模板样式。

仅增加：

业务特殊样式。

不要：

大量复制新的 CSS。

---

# 十四、推荐命名

## 页面

```text
User
Role
Dept
Menu
Notice
Post
Dict
```

---

## Dialog

```text
UserDialog
RoleDialog
DeptDialog
MenuDialog
```

---

## API

```text
listUser
getUser
addUser
updateUser
removeUser
exportUser
```

---

## Hook

统一：

```text
useCrud
```

不建议：

```text
useUserCrud
```

除非 Hook 已出现大量业务差异。

---

# AI 生成检查项

生成完成后，应确认：

* □ 所有 Demo 已替换
* □ 所有 API 已替换
* □ 所有权限已替换
* □ 所有页面标题已替换
* □ 所有查询条件已替换
* □ 所有表格字段已替换
* □ 所有 Dialog 字段已替换
* □ 所有 Rules 已替换
* □ Dict 使用正确
* □ Import 正确
* □ API 地址正确
* □ 无遗留模板代码
* □ 无 `Demo` 字样
* □ 无未使用变量
* □ 无 `console.log`
* □ 无 `debugger`

---

# 完成标准

当满足以下条件时，认为模板替换完成：

* 页面可以直接运行
* 功能完整（查询、新增、编辑、删除、导出）
* 符合 AFES 全部规范
* 符合项目代码规范
* 无模板遗留内容
* 可直接提交 Git 仓库
* AI 无需再次生成即可进入联调阶段
