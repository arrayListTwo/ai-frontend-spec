# 11 样式开发规则（Style Development Rules）

## 目标

本规范定义 AI 在开发、修改和维护页面样式时应遵循的统一规则。

`07-coding-rules` 约束的是**CSS 如何编写**。

本规范约束的是**项目样式体系如何设计、组织、复用和演进**。

AI 在新增任何样式之前，应优先检查项目是否已有相同布局、相同颜色、相同间距或相同组件样式，而不是重新定义。

一句话：

> 样式应服务于统一设计系统，而不是服务于单个页面。

---

# 样式职责

样式负责：

* 页面布局
* 间距
* 排版
* 响应式布局
* 动画效果
* 视觉表现

样式不负责：

* 业务逻辑
* 数据处理
* DOM 操作
* 状态管理
* 页面行为控制

保持样式与业务逻辑解耦。

---

# 样式体系

推荐建立统一样式体系：

```text
src/styles
├── index.scss
├── variables.scss
├── mixins.scss
├── reset.scss
├── layout.scss
├── transition.scss
├── animation.scss
└── element-plus.scss
```

页面：

负责：

局部样式。

公共样式：

统一维护。

---

# 样式优先级

AI 应按照以下顺序选择样式方案：

1. Element Plus 自带能力
2. 项目已有公共样式
3. CSS 变量
4. 公共工具类
5. 当前组件局部样式

不要直接新增新的样式实现。

---

# 页面布局

后台管理系统推荐统一布局：

```text
Page
├── Search
├── Toolbar
├── Table
├── Pagination
└── Dialog
```

页面统一使用：

```text
.page-container
```

作为根容器。

不要：

每个页面使用不同布局。

---

# Flex 优先

优先：

Flex。

其次：

Grid。

不要：

大量：

Float。

不要：

使用绝对定位完成整体布局。

---

# Grid 使用场景

适用于：

* 仪表盘
* 卡片布局
* 数据统计
* 图片列表

普通后台页面：

优先：

Flex。

---

# 间距体系

统一采用固定间距体系。

例如：

```text
4px
8px
12px
16px
20px
24px
32px
40px
```

避免：

```text
7px
13px
19px
27px
```

保持整体一致。

---

# 字体体系

统一继承项目字体。

推荐：

统一：

* 标题字号
* 正文字号
* 辅助文字字号

不要：

页面自行定义字体。

---

# 颜色体系

优先使用：

Element Plus CSS Variables。

例如：

* 主色
* 成功色
* 警告色
* 危险色
* 文本颜色
* 边框颜色
* 背景颜色

不要：

页面：

硬编码：

颜色值。

例如：

```text
#409EFF

#333333

#666666

#999999
```

---

# CSS 变量

公共颜色：

公共间距：

公共圆角：

公共阴影：

统一：

CSS Variables。

例如：

```text
--page-padding

--card-radius

--table-gap

--header-height
```

避免：

多个页面重复定义。

---

# Element Plus

优先：

使用：

Element Plus：

提供：

* Size
* Type
* Color
* Space
* Flex
* Grid

不要：

CSS：

覆盖已有能力。

例如：

按钮颜色。

优先：

使用：

组件属性。

---

# 公共样式

满足以下条件：

建议抽离：

* 三个及以上页面使用
* 多个业务模块使用
* 可独立维护

例如：

* 页面容器
* 查询区域
* 工具栏
* 卡片布局
* 空状态
* 操作栏

---

# Scoped

页面：

默认：

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

只有真正的公共样式：

才放：

全局。

---

# 深度选择器

允许：

使用：

`:deep()`

仅用于：

Element Plus：

局部覆盖。

不要：

整个页面：

大量：

`:deep()`。

如果大量依赖深度选择器，应重新评估组件设计。

---

# Class 命名

推荐：

语义化。

例如：

```text
page-container

search-form

toolbar

table-wrapper

filter-item

operation-column
```

不要：

```text
box

box1

box2

left

right

div1
```

---

# 选择器层级

建议：

最多：

三层。

例如：

```text
.page-container

.toolbar

.button-group
```

避免：

七八层嵌套。

---

# ID 选择器

不要：

使用：

ID：

控制样式。

统一：

Class。

---

# 内联样式

不要：

大量：

```text
style=""
```

允许：

少量：

动态宽度。

动态高度。

动态颜色。

其它：

统一：

CSS。

---

# !important

默认：

禁止。

只有：

无法避免：

覆盖第三方样式：

才允许。

不要：

依赖：

`!important`

完成布局。

---

# Z-index

统一：

维护层级。

例如：

* Dropdown
* Popover
* Dialog
* Drawer
* Message
* Loading

不要：

页面：

自行：

```text
999999
```

---

# 动画

优先：

Transition。

避免：

复杂：

Keyframes。

后台系统：

动画应简洁。

避免：

影响操作效率。

---

# 响应式

后台系统：

默认：

桌面优先。

若支持移动端：

统一：

使用项目响应式方案。

不要：

每个页面：

各自实现。

---

# 图片

图片：

统一：

使用：

响应式尺寸。

避免：

固定：

超大图片。

图标：

优先：

SVG。

不要：

多个图标库混用。

---

# 暗黑模式

若项目支持：

所有颜色：

必须：

来自：

CSS Variables。

不要：

页面：

写死：

颜色。

---

# 浏览器兼容

遵循项目支持范围。

不要：

为了兼容极老浏览器：

增加大量冗余样式。

---

# 样式演进原则

已有样式：

优先：

扩展。

不要：

复制。

例如：

不要：

```text
toolbar.scss

toolbar-new.scss

toolbar2.scss
```

---

# AI 样式开发流程

AI 在新增样式时，应遵循以下顺序：

1. 检查是否已有公共样式
2. 检查是否已有公共变量
3. 检查 Element Plus 是否已有能力
4. 判断是否需要新增样式
5. 优先使用 CSS Variables
6. 保持命名统一
7. 保持布局统一
8. 保持响应式一致
9. 检查是否影响其它页面

不得直接新增大量 CSS。

---

# AI 自动生成要求

AI 在生成样式时必须遵守：

* 优先复用已有样式
* 优先复用 Element Plus 能力
* 优先使用 CSS Variables
* 使用语义化命名
* 默认使用 Scoped
* 保持布局统一
* 保持间距统一
* 保持颜色统一
* 保持组件样式独立
* 保持与项目整体视觉一致

---

# AI 禁止行为

AI 不得生成以下样式：

* 大量内联样式
* 大量 `!important`
* 大量硬编码颜色
* 大量硬编码字号
* 大量硬编码间距
* 大量 `:deep()`
* 深层嵌套选择器
* 使用 ID 选择器布局
* 覆盖其它业务组件样式
* 重复定义公共样式
* 混用多个图标库
* 随意新增新的设计规范
* 与项目现有视觉体系不一致

---

# Checklist

AI 完成样式开发后，应确认以下内容：

* 已检查是否存在可复用样式
* 优先使用 Element Plus 原生能力
* 优先使用项目公共样式与 CSS Variables
* 页面使用统一容器与布局结构
* Class 命名语义清晰
* 布局优先采用 Flex 或 Grid
* 间距、字号、颜色符合设计规范
* 默认使用 `scoped` 样式
* 未滥用 `:deep()`、`!important` 或 `z-index`
* 公共样式已抽离，未重复定义
* 未污染其它页面或组件样式
* 兼容项目主题（包括暗黑模式，如支持）
* 与项目整体视觉风格保持一致
* 样式具备良好的可维护性与可扩展性
