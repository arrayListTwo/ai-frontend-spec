# 07 样式规范（Style Rules）

## 目标

本规范用于约束 AI 在编写 Vue 页面与组件样式时的行为。

目标包括：

* 保持项目视觉一致性
* 保持 CSS 结构统一
* 降低样式冲突
* 提高样式可维护性
* 避免 AI 生成大量重复样式
* 最大程度复用 Element Plus 与项目已有样式体系

样式负责：

* 页面布局
* 间距
* 对齐
* 响应式适配
* 局部视觉优化

样式不负责：

* 业务逻辑
* 数据控制
* DOM 操作
* 动态计算复杂布局

一句话：

> 样式负责展示，不负责业务。

---

# 核心原则

AI 必须遵循以下原则：

1. 优先复用已有样式
2. 优先使用 Element Plus 提供的能力
3. 页面样式只影响当前页面
4. 避免覆盖第三方组件默认样式
5. 保持命名统一
6. 保持层级简单
7. 少写 CSS，多复用布局能力

---

# Style 位置

推荐：

每个页面：

```text
index.vue

↓

template

script

style
```

组件：

样式放组件内部。

公共样式：

统一维护：

```text
src/styles
```

不要：

页面之间复制样式。

---

# Scoped

页面：

统一：

使用：

```text
<style scoped>
```

组件：

默认：

使用：

```text
<style scoped>
```

只有公共样式：

才使用全局样式。

---

# 全局样式

允许：

放：

* Reset
* Theme
* Variables
* Animation
* Common Layout
* Typography

不要：

放：

业务页面样式。

例如：

```text
用户管理页面样式
```

不应放入：

全局 CSS。

---

# CSS 命名

推荐：

使用语义化命名。

例如：

```text
page-container

search-form

toolbar

table-wrapper

form-footer

dialog-body
```

不要：

```text
box1

box2

left

right

div1

style1
```

没有业务含义。

---

# 页面容器

页面统一使用：

```text
page-container
```

不要：

每个页面：

自己命名：

```text
main

wrapper

content

container1
```

保持统一。

---

# 布局

优先使用：

* Flex
* Grid（适用于二维布局）

避免：

大量：

```text
float
```

避免：

使用：

```text
position:absolute
```

完成整体布局。

绝对定位仅用于：

* Badge
* Tooltip
* 浮层
* 图标
* 特殊视觉效果

---

# 间距

推荐：

统一使用项目设计规范。

例如：

常见间距：

```text
8px

12px

16px

20px

24px

32px
```

避免：

```text
13px

17px

19px

27px
```

随意数值。

---

# 字体

优先：

继承项目字体。

不要：

页面单独指定：

```text
font-family
```

不要：

随意使用：

多个字体。

---

# 字号

推荐：

遵循项目设计规范。

例如：

```text
12px

14px

16px

18px

20px
```

避免：

大量：

```text
11px

13px

15px

21px
```

不规则字号。

---

# 颜色

优先：

使用：

CSS 变量。

例如：

```text
var(--el-color-primary)

var(--el-text-color-primary)

var(--el-border-color)

var(--el-bg-color)
```

不要：

大量：

```text
#409EFF

#333

#666

#999
```

硬编码。

项目已有主题变量时，应优先复用。

---

# 圆角

保持统一。

例如：

```text
4px

6px

8px
```

避免：

一个页面：

出现：

```text
2px

5px

9px

18px
```

混用。

---

# 阴影

优先：

使用：

项目统一阴影。

不要：

每个组件：

自己定义：

不同 Shadow。

---

# 边框

优先：

使用：

Element Plus：

边框颜色变量。

避免：

```text
border:1px solid #ddd;
```

硬编码。

---

# 图标

统一：

使用：

项目已有图标方案。

例如：

* Element Plus Icons
* SVG Icon

不要：

混用：

多个图标库。

---

# Element Plus

优先：

使用：

组件：

提供：

* Size
* Type
* Status
* Space
* Flex

不要：

重新写：

同样效果。

例如：

按钮颜色。

优先：

使用：

Element Plus 属性。

不是：

CSS 重写。

---

# 深度选择器

允许：

使用：

`:deep()`

仅用于：

覆盖：

Element Plus：

局部样式。

不要：

大量：

深层覆盖。

例如：

```text
:deep(.el-table ...)
```

几十处。

说明：

如果频繁覆盖第三方组件样式，应重新评估设计，而不是继续增加覆盖规则。

---

# 选择器层级

推荐：

最多：

三层。

例如：

```text
.page-container

.table-wrapper

.toolbar
```

不要：

```text
.page

.content

.left

.box

.item

.text

span
```

七八层嵌套。

---

# ID 选择器

不要：

使用：

```text
#app

#main

#user
```

优先：

Class。

---

# 内联样式

不要：

大量：

```text
style=""
```

特殊情况：

允许：

少量：

动态样式。

例如：

宽度、高度、颜色由数据驱动。

除此之外：

应放：

CSS。

---

# 动画

优先：

使用：

简单：

Transition。

不要：

复杂：

关键帧动画。

除非：

产品明确要求。

---

# 响应式

优先：

使用：

Flex。

避免：

写大量：

Media Query。

后台管理系统：

通常无需复杂响应式。

如需适配移动端，应遵循项目统一方案。

---

# Overflow

需要滚动：

明确指定：

```text
overflow:auto
```

避免：

页面：

无限撑高。

---

# 高度

不要：

大量：

```text
height:100%
```

层层继承。

优先：

内容自适应。

---

# 宽度

优先：

使用：

```text
width:100%
```

Flex。

避免：

大量：

固定宽度。

例如：

```text
width:843px
```

---

# Z-index

不要：

随意：

```text
999999
```

建议：

统一：

层级规范。

例如：

* Dropdown
* Dialog
* Drawer
* Message
* Loading

由项目统一维护。

---

# CSS 变量

优先：

使用：

变量。

例如：

```text
--page-padding

--table-gap

--card-radius
```

避免：

同一个值：

重复写：

几十次。

---

# 公共样式

多个页面：

重复出现：

建议：

抽离。

例如：

* 页面容器
* 查询区域
* 卡片布局
* 工具栏
* 空状态
* 操作栏

不要：

复制粘贴。

---

# 不要覆盖业务组件

不要：

页面：

直接：

修改：

其它组件：

内部样式。

组件：

应维护：

自己的样式。

---

# 注释

建议：

保留：

* 特殊兼容
* 特殊布局
* 浏览器兼容说明

不要：

无意义注释。

例如：

```text
按钮

颜色

字体
```

---

# AI 自动生成要求

AI 在生成样式时必须遵守：

* 优先复用已有样式
* 优先使用 Element Plus 能力
* 默认使用 `scoped`
* 保持命名语义化
* 保持层级简单
* 使用 CSS 变量而非硬编码
* 避免重复样式
* 避免无意义覆盖第三方组件
* 保持与项目现有视觉风格一致
* 样式仅关注展示，不承担业务逻辑

---

# AI 禁止行为

AI 不得生成以下代码：

* 大量内联样式
* 大量 `!important`
* 大量硬编码颜色
* 大量硬编码字号
* 大量硬编码间距
* 使用 ID 选择器实现布局
* 深层嵌套选择器
* 页面之间复制样式
* 重复定义公共样式
* 随意覆盖 Element Plus 默认样式
* 滥用 `position:absolute`
* 滥用 `z-index`
* 混用多个图标库
* 使用无语义的 Class 名称
* 与项目现有样式体系不一致

---

# Checklist

AI 完成样式开发后，应确认以下内容：

* 默认使用 `scoped` 样式
* 样式职责仅限展示
* 优先复用项目已有样式
* 优先使用 Element Plus 提供的能力
* Class 命名具有明确业务语义
* 页面统一使用标准容器结构
* 布局优先采用 Flex 或 Grid
* 使用统一的间距、字号、圆角规范
* 优先使用 CSS 变量，不硬编码颜色
* 选择器层级保持简洁
* 未滥用 `:deep()`、`!important`、`z-index`
* 公共样式已抽离，未重复定义
* 未覆盖其它业务组件内部样式
* 与项目整体视觉风格保持一致
* 样式代码具有良好的可维护性与可扩展性
