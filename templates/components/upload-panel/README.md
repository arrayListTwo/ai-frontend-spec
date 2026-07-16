# AFES UploadFile Template

## 简介

UploadFile 是 AFES 提供的标准文件上传组件模板。

该模板用于企业后台系统中常见的文件处理场景：

* 图片上传
* 附件上传
* 文档上传
* 多文件上传
* 文件列表展示
* 文件删除

基于：

* Vue3
* Composition API
* script setup
* Vite
* Element Plus
* RuoYi-Vue3

设计。

---

# 设计目标

UploadFile 需要满足：

* 统一上传交互
* AI 易理解
* AI 易生成
* 支持文件校验
* 支持单文件 / 多文件
* 支持图片预览
* 支持业务扩展
* 支持 OSS / 文件服务接入

---

# 组件职责

UploadFile 负责：

* 上传 UI
* 文件选择
* 文件列表展示
* 文件校验
* 删除文件
* 上传状态展示
* 上传事件通知

---

# UploadFile 不负责

禁止：

* 文件服务器实现
* OSS SDK
* API 请求封装
* 权限校验
* 业务提交
* 表单保存

---

# 推荐目录

```text id="h7n2x9"
upload-file/

├── README.md
├── prompt.md
├── replace.md
├── example.md
└── index.vue
```

---

# 推荐使用结构

```text id="m9q3v6"
EditDialog


↓

Form


↓

UploadFile


↓

Submit


↓

Parent API
```

---

# 核心能力

## File Upload

支持：

* 单文件
* 多文件

---

## File Validation

支持：

* 文件类型
* 文件大小
* 数量限制

---

## File List

支持：

* 文件名称
* 文件大小
* 删除

---

## Image Preview

支持：

* 图片预览
* 图片列表

---

# Props 设计

推荐：

| 参数         | 类型      | 说明   |
| ---------- | ------- | ---- |
| modelValue | Array   | 文件列表 |
| limit      | Number  | 数量限制 |
| fileSize   | Number  | 大小限制 |
| accept     | String  | 类型限制 |
| multiple   | Boolean | 多选   |
| disabled   | Boolean | 禁用   |
| imageMode  | Boolean | 图片模式 |

---

# Emits

推荐：

| Event             | 说明   |
| ----------------- | ---- |
| update:modelValue | 文件变化 |
| upload-success    | 上传成功 |
| remove            | 删除文件 |
| error             | 上传失败 |

---

# 使用示例

## 图片上传

```text id="8v3k2m"
UploadFile

↓

imageMode=true

↓

accept=image/*
```

---

## 附件上传

```text id="q6y1z8"
UploadFile

↓

multiple=true

↓

accept=.pdf,.doc,.xlsx
```

---

# AI Replace Guide

AI 生成业务上传组件：

只替换：

* accept
* limit
* fileSize
* upload 参数

保持：

* 上传结构
* 校验逻辑
* Emit

---

# 业务示例

## 用户头像

需求：

```text id="p8m2x7"
单图片

最大2MB

jpg/png
```

---

## 商品图片

需求：

```text id="r5n9c3"
多图片

最多5张

图片预览
```

---

## 合同附件

需求：

```text id="z3k6m8"
PDF

Word

Excel

最大20MB
```

---

# AI 生成原则

必须：

* Props 驱动
* Emit 通信
* Slot 扩展
* 业务解耦

禁止：

* 内置业务接口
* 固定 OSS
* 固定文件地址
* 页面状态管理

---

# Checklist

生成完成检查：

```text id="s7q4n8"
□ Vue3

□ Composition API

□ script setup

□ Element Plus Upload

□ File Validation

□ File List

□ Preview

□ Remove

□ Props

□ Emits

□ Slot

□ Responsive

□ 无 API

□ 无 Router

□ 无业务逻辑

□ AI Friendly

□ 符合 AFES
```

---

# Template Goal

UploadFile Template 的目标：

建立企业后台统一文件上传能力。

通过：

UploadFile

*

Prompt

*

Replace Guide

*

Example

让 AI 可以快速生成：

头像上传

商品图片上传

合同附件上传

审批附件上传

等常见业务组件。

最终形成：

```text id="b5k8v1"
CRUD Page

├── SearchForm

├── DataTable

├── EditDialog

└── UploadFile
```

完整 AI 页面生成链路。
