# AFES UploadPanel Example

## 简介

本文档用于展示 UploadPanel 如何从通用文件上传模板转换为具体业务上传组件。

AI 生成上传组件时，应遵循：

```text id="g7n3v8"
UploadPanel Template

↓

业务需求分析

↓

上传规则替换

↓

文件校验配置

↓

业务上传组件
```

---

# Example 1：用户头像上传

## Business Description

生成用户头像上传组件。

需求：

* 只能上传一张图片
* 支持 jpg/png
* 最大 2MB
* 支持图片预览

---

# Configuration

```javascript id="r8m4x2"
const uploadConfig = {


  limit: 1,


  fileSize: 2,


  accept: 'image/*',


  imageMode: true


}
```

---

# Template Usage

```vue id="h3k7m9"
<UploadPanel

  v-model="formData.avatar"

  :limit="1"

  :file-size="2"

  accept="image/*"

  image-mode

/>
```

---

# Example 2：商品图片上传

## Business Description

生成商品图片上传组件。

需求：

* 最多上传 5 张
* 支持图片预览
* 单张最大 5MB

---

# Configuration

```javascript id="m6q9x3"
const config = {


  limit:5,


  fileSize:5,


  accept:'image/*',


  imageMode:true


}
```

---

# Usage

```vue id="k8n2v5"
<UploadPanel

  v-model="product.images"

  :limit="5"

  :file-size="5"

  image-mode


/>
```

---

# Example 3：合同附件上传

## Business Description

生成合同附件上传组件。

需求：

支持：

* PDF
* Word
* Excel

限制：

* 最大 20MB
* 最多 10 个文件

---

# Configuration

```javascript id="q4m8z6"
const config = {


  limit:10,


  fileSize:20,


  accept:
  '.pdf,.doc,.docx,.xls,.xlsx'


}
```

---

# Usage

```vue id="x7p3n9"
<UploadPanel

  v-model="formData.attachments"

  :limit="10"

  :file-size="20"

  accept=".pdf,.doc,.docx,.xls,.xlsx"

/>
```

---

# Example 4：审批附件上传

## Business Description

审批流程附件。

要求：

* 支持多个附件
* 支持删除
* 支持校验

---

# Structure

```text id="m3v8q1"
ApprovalDialog


↓

EditDialog


↓

UploadPanel


↓

Submit

```

---

# Usage

```vue id="z5k9r2"
<EditDialog>


  <UploadPanel

    v-model="form.attachments"

  />


</EditDialog>
```

---

# Example 5：复杂业务上传

## Scenario

员工入职资料上传。

需求：

上传：

* 身份证
* 学历证明
* 合同

---

# Recommended Structure

```text id="p7m4x8"
EmployeeForm


├── Basic Info


├── Organization


└── UploadPanel


      ├── ID Card

      ├── Education

      └── Contract

```

---

# Multiple Upload Instances

```vue id="c8n5x2"
<UploadPanel

  v-model="form.idCard"

  accept="image/*"

  :limit="2"


/>



<UploadPanel

  v-model="form.contract"

  accept=".pdf"

  :limit="5"


/>
```

---

# AI Generation Example

## Input

```text id="n4q8m6"
生成合同附件上传组件。

要求：

支持 PDF、Word

最大20MB

最多10个文件
```

---

## Expected AI Output

AI 应生成：

```text id="x2m7v9"
ContractUpload


↓

UploadPanel


配置：


limit = 10


fileSize = 20


accept = '.pdf,.doc,.docx'


imageMode = false

```

---

# Upload Flow

标准流程：

```text id="v6k3p8"
用户选择文件


↓

before-upload


↓

文件校验


↓

上传组件处理


↓

emit upload-success


↓

父组件保存数据

```

---

# Common Mistakes

## 错误 1：组件内部调用上传接口

错误：

```javascript id="m9x2k5"
axios.post('/upload')
```

原因：

UploadPanel 不管理后端服务。

---

## 错误 2：固定业务字段

错误：

```javascript id="b7q3n8"
avatarUrl
```

原因：

组件应该支持任意文件模型。

---

## 错误 3：文件类型硬编码

错误：

```javascript id="w5m8x1"
onlyPdf=true
```

正确：

```javascript id="s3n6q9"
accept='.pdf'
```

---

# AI Checklist

生成完成检查：

```text id="r6k8m3"
□ Vue3

□ script setup

□ Upload

□ v-model

□ Props

□ Emits

□ File Validation

□ Size Check

□ Type Check

□ Preview

□ Remove

□ Slot

□ Responsive

□ 无 API

□ 无 OSS

□ 无业务逻辑

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Goal

通过 Example 文档，AI 可以理解：

通用 UploadPanel

↓

业务上传组件

↓

复杂业务表单

转换方式。

最终实现：

需求描述

↓

AI Prompt

↓

标准上传组件

↓

快速交付。
