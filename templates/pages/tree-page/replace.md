# AFES Tree CRUD Template Replace Guide

## 文档目的

本文档用于指导 AI（ChatGPT、Claude Code、Cursor、GitHub Copilot 等）或开发人员，将 `tree-page` 模板快速替换为具体业务页面。

适用于：

* 菜单管理
* 部门管理
* 分类管理
* 字典分类
* 行政区划
* 组织机构
* 产品分类
* 栏目管理
* 树形权限管理

目标：

* 最少人工修改
* 最快生成业务代码
* 保持 AFES 规范一致性
* 保持整个项目代码风格统一

---

# 替换原则

遵循以下原则：

1. 替换业务，不替换架构
2. 替换字段，不替换规范
3. 保持目录结构不变
4. 保持 Hook 职责不变
5. 保持 Dialog 职责不变
6. 保持 Tree CRUD 模式不变

---

# 一、业务名称替换

模板默认：

```text
Demo
```

根据业务替换。

例如：

| 模板   | 替换后          |
| ---- | ------------ |
| Demo | Dept         |
| Demo | Menu         |
| Demo | Category     |
| Demo | Region       |
| Demo | Organization |
| Demo | DictType     |

例如：

```javascript
addDemo()
```

替换为：

```javascript
addDept()
```

---

# 二、API 地址替换

模板：

```text
/system/demo
```

替换为：

```text
/system/dept
```

或：

```text
/system/menu
```

例如：

```javascript
const API_PREFIX = '/system/demo'
```

替换：

```javascript
const API_PREFIX = '/system/dept'
```

---

# 三、API 方法替换

模板：

```text
listDemoTree
getDemo
addDemo
updateDemo
removeDemo
```

替换：

```text
listDept
getDept
addDept
updateDept
removeDept
```

保持统一命名：

```text
listXXX

getXXX

addXXX

updateXXX

removeXXX
```

---

# 四、Tree 字段替换

模板默认：

```text
id

parentId

children

name
```

根据业务替换。

例如：

菜单：

```text
menuId

parentId

children

menuName
```

部门：

```text
deptId

parentId

children

deptName
```

分类：

```text
categoryId

parentId

children

categoryName
```

保持：

children

字段名称一致。

---

# 五、TreeSelect 替换

模板：

```text
上级节点
```

根据业务：

菜单：

```text
上级菜单
```

部门：

```text
上级部门
```

分类：

```text
上级分类
```

组织：

```text
上级组织
```

行政区划：

```text
上级行政区
```

---

# 六、查询条件替换

模板：

```text
名称

状态
```

部门：

```text
部门名称

状态
```

菜单：

```text
菜单名称

状态
```

分类：

```text
分类名称

状态
```

保留：

名称 + 状态

即可满足大多数 Tree CRUD 页面。

---

# 七、Table 字段替换

模板：

```text
名称

排序

状态

创建时间
```

菜单：

```text
菜单名称

图标

路由

权限

排序

状态
```

部门：

```text
部门名称

负责人

电话

邮箱

排序

状态
```

分类：

```text
分类名称

编码

排序

状态
```

---

# 八、操作列替换

模板：

```text
新增下级

编辑

删除
```

可根据业务增加：

```text
查看

排序

授权

同步

发布
```

建议：

Tree CRUD 保留：

新增下级。

---

# 九、Dialog 字段替换

模板：

```text
上级节点

名称

编码

排序

状态

备注
```

菜单：

```text
上级菜单

菜单名称

菜单类型

路由

组件

权限

图标

排序

状态
```

部门：

```text
上级部门

部门名称

负责人

联系电话

邮箱

排序

状态
```

分类：

```text
上级分类

分类名称

分类编码

排序

状态
```

---

# 十、TreeSelect 替换

推荐：

统一：

```vue
<TreeSelect />
```

或项目统一组件。

不要：

自己维护树节点递归。

---

# 十一、Hook 保持不变

推荐：

```text
useTreeCrud.js
```

仅替换：

* API
* Query
* Tree 字段

不要：

修改 Hook 职责。

---

# 十二、Expand / Collapse 保持

模板：

支持：

* 全部展开
* 全部折叠

不要：

删除此功能。

Tree 页面推荐默认提供。

---

# 十三、Permission 替换

模板：

```text
system:demo:add

system:demo:edit

system:demo:remove
```

替换：

```text
system:dept:add

system:dept:edit

system:dept:remove
```

菜单：

```text
system:menu:add
```

分类：

```text
system:category:add
```

保持：

模块:业务:动作

统一格式。

---

# 十四、Dict 替换

推荐：

统一：

```vue
<dict-tag />

<dict-select />

<dict-radio />
```

不要：

自行维护状态文字。

---

# 十五、样式保持

推荐：

保持：

AFES Tree Page 样式。

不要：

大量复制新的 CSS。

不要：

页面维护复杂样式。

---

# 十六、推荐命名

页面：

```text
Dept

Menu

Category

Region

Organization
```

Dialog：

```text
DeptDialog

MenuDialog

CategoryDialog
```

Hook：

```text
useTreeCrud
```

API：

```text
listDept

getDept

addDept

updateDept

removeDept
```

---

# AI 生成检查项

生成完成后确认：

* □ 所有 Demo 已替换
* □ 所有 API 已替换
* □ 所有 Permission 已替换
* □ Tree 字段已替换
* □ TreeSelect 已替换
* □ 查询条件已替换
* □ 表格字段已替换
* □ Dialog 字段已替换
* □ Rules 已调整
* □ Import 正确
* □ API 地址正确
* □ Expand / Collapse 正常
* □ Tree 正常显示
* □ 无遗留 Demo
* □ 无 `console.log`
* □ 无 `debugger`
* □ 无未使用变量

---

# 完成标准

满足以下条件即认为模板替换完成：

* 页面可以直接运行
* Tree CRUD 功能完整
* 支持新增下级节点
* 支持编辑节点
* 支持删除节点
* 支持展开 / 折叠
* 支持 TreeSelect
* 符合 AFES 全部规范
* 符合项目规范
* 可直接提交 Git
* AI 无需再次生成即可进入联调阶段
