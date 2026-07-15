# AFES Form Page Template Replace Guide

## 文档目的

本文档用于指导 AI（ChatGPT、Claude Code、Cursor、GitHub Copilot 等）或开发人员，将 `form-page` 模板快速替换为具体业务表单页面。

适用场景：

* 用户新增 / 编辑
* 基础资料维护
* 业务单据录入
* 配置页面
* 参数设置
* 流程表单
* 信息维护页面

目标：

* 最少人工修改
* 快速生成业务页面
* 保持 AFES 规范一致
* 保持企业级代码质量

---

# 替换原则

遵循：

1. 替换业务，不修改整体结构
2. 替换字段，不破坏组件职责
3. 替换 API，不改变调用方式
4. 替换规则，不改变校验机制
5. 保留 AI 可理解结构

禁止：

* 删除 Hook
* 删除 API 层
* 将所有逻辑重新写入 index.vue
* 将 FormSection 变成业务组件

---

# 一、业务名称替换

模板默认：

```text
Demo
```

替换为实际业务名称。

例如：

| 模板   | 业务      |
| ---- | ------- |
| Demo | User    |
| Demo | Product |
| Demo | Order   |
| Demo | Notice  |
| Demo | Config  |

---

例如：

模板：

```javascript
getDemo()
```

替换：

```javascript
getUser()
```

---

模板：

```text
DemoForm
```

替换：

```text
UserForm
```

---

# 二、目录名称替换

模板：

```text
{{module}}/{{business}}
```

替换：

例如：

用户：

```text
system/user
```

订单：

```text
business/order
```

流程：

```text
workflow/apply
```

---

# 三、API 地址替换

模板：

```javascript
/system/demo
```

替换：

用户：

```javascript
/system/user
```

订单：

```javascript
/business/order
```

配置：

```javascript
/system/config
```

---

# 四、API 方法替换

模板：

```javascript
getDemo()

addDemo()

updateDemo()
```

替换：

```javascript
getUser()

addUser()

updateUser()
```

---

统一命名：

```text
getXXX

addXXX

updateXXX
```

如果需要：

```text
saveXXX
```

必须符合项目已有规范。

---

# 五、表单字段替换

模板字段：

```text
名称

编码

状态

备注
```

替换为业务字段。

---

## 用户表单

例如：

```text
用户名

昵称

手机号

邮箱

部门

角色

状态

备注
```

---

## 商品表单

例如：

```text
商品名称

商品编码

分类

价格

库存

状态
```

---

## 订单表单

例如：

```text
客户

订单编号

商品明细

金额

备注
```

---

# 六、Form Item 替换

每个字段必须同步替换：

## label

例如：

```vue
label="用户名"
```

---

## prop

例如：

```vue
prop="userName"
```

---

## v-model

例如：

```vue
v-model="form.userName"
```

---

三个必须保持一致。

---

# 七、组件类型替换

根据字段类型选择组件。

---

## 文本

模板：

```vue
el-input
```

适用于：

* 名称
* 编码
* 描述

---

## 下拉

模板：

```vue
el-select
```

适用于：

* 类型
* 状态
* 分类

---

## 单选

模板：

```vue
el-radio-group
```

适用于：

* 是否
* 状态

---

## 日期

模板：

```vue
el-date-picker
```

适用于：

* 时间
* 日期范围

---

## 数字

模板：

```vue
el-input-number
```

适用于：

* 数量
* 金额
* 排序

---

## 树选择

模板：

```vue
TreeSelect
```

适用于：

* 部门
* 分类
* 组织

---

## 上传

模板：

```vue
Upload
```

适用于：

* 图片
* 附件
* 文件

---

# 八、默认值替换

新增页面：

需要定义：

```javascript
defaultForm
```

例如：

```javascript
{
  status:'0',
  sort:0
}
```

---

编辑页面：

流程：

```text
进入页面

↓

获取 id

↓

调用 getDetail

↓

回填 form
```

---

# 九、校验规则替换

模板：

```javascript
rules
```

根据业务调整。

---

## 必填

例如：

```javascript
required:true
```

---

## 长度

例如：

```javascript
min:2

max:20
```

---

## 格式

例如：

手机号：

```javascript
pattern
```

邮箱：

```javascript
pattern
```

---

## 异步校验

例如：

用户名唯一：

```javascript
validator
```

---

# 十、页面按钮替换

模板：

```text
保存

取消
```

根据业务：

可以增加：

```text
保存并继续

提交审核

暂存

发布

撤回
```

---

# 十一、Permission 替换

模板：

```text
system:demo:add

system:demo:edit
```

替换：

用户：

```text
system:user:add

system:user:edit
```

订单：

```text
business:order:add

business:order:edit
```

---

规则：

```text
模块:业务:动作
```

---

# 十二、Dict 替换

如果字段来自字典：

使用：

```vue
dict-select
```

例如：

状态：

```text
sys_normal_disable
```

性别：

```text
sys_user_sex
```

---

禁止：

```javascript
status === '0'
```

这种硬编码。

---

# 十三、FormSection 替换

复杂表单建议拆分区域。

例如：

用户：

```text
BaseInfoSection

RoleInfoSection

ExtendInfoSection
```

---

订单：

```text
CustomerSection

ProductSection

PaymentSection
```

---

规则：

一个 Section 一个业务区域。

---

# 十四、useForm 保持原则

默认：

```text
hooks/useForm.js
```

负责：

* 初始化
* 查询详情
* 保存
* Loading

不要加入：

* UI
* 表格逻辑
* 路由菜单逻辑

---

# 十五、特殊业务扩展

如果业务复杂：

允许增加：

```text
components/

├── FormSection.vue

├── UploadSection.vue

├── DetailSection.vue

└── ItemTable.vue
```

禁止：

所有内容塞入：

```text
index.vue
```

---

# 十六、AI 替换检查

生成完成后必须检查：

* □ Demo 全部替换
* □ 页面名称正确
* □ API 地址正确
* □ API 方法正确
* □ 字段名称正确
* □ Form prop 正确
* □ Rules 正确
* □ Default Value 正确
* □ Permission 正确
* □ Dict 正确
* □ Import 正确
* □ 无无效字段
* □ 无 console.log
* □ 无 debugger
* □ 无 TODO

---

# 完成标准

当满足以下条件：

* 页面可以运行
* 新增正常
* 编辑正常
* 数据回显正常
* 校验正常
* 保存正常
* 权限正常
* API 清晰
* 代码职责明确

即可认为：

`form-page` 模板替换完成。

---

# Template Goal

Form Page 的最终目标：

> 让 AI 根据业务字段描述，快速生成企业级 Vue3 表单页面，并保持与 AFES、RuoYi-Vue3 项目规范一致。

与：

`crud-page`

组合后：

覆盖企业后台系统中大部分业务开发场景。
