# AFES UploadFile Replace Guide

## 简介

本文档用于指导 AI 或开发人员基于 UploadFile 模板快速生成具体业务文件上传组件。

核心原则：

> 保持上传组件结构稳定，只替换业务上传规则。

UploadFile 是通用文件能力组件，不应该因为业务变化重新设计。

---

# 替换范围

AI 生成业务 UploadFile 时，只允许修改：

```text id="f9k2x7"
accept

↓

limit

↓

fileSize

↓

imageMode

↓

业务提示文本

↓

上传配置
```

---

# 不允许修改

禁止修改：

* Upload 结构
* 文件校验流程
* Emit 定义
* v-model 机制
* 删除逻辑
* 文件列表处理

禁止：

* 添加业务 API
* 添加 OSS SDK
* 添加 Router
* 添加 Store

---

# 业务替换流程

---

# Step 1：确定业务名称

原模板：

```text id="m4p8q1"
UploadFile
```

根据业务生成：

```text id="x7k3n9"
AvatarUpload

ProductImageUpload

ContractUpload

AttachmentUpload
```

---

# Step 2：替换上传模式

## 图片上传

配置：

```javascript id="q2m7v5"
imageMode: true
```

适用：

* 头像
* 商品图片
* Banner

---

## 文件上传

配置：

```javascript id="b8n4x6"
imageMode:false
```

适用：

* 合同
* 附件
* 文档

---

# Step 3：替换数量限制

## 单文件

例如：

头像：

```javascript id="v5k9p2"
limit:1
```

---

## 多文件

例如：

商品图片：

```javascript id="z3m8q6"
limit:5
```

---

# Step 4：替换文件大小

统一单位：

MB

---

## 示例

头像：

```javascript id="n7x2c4"
fileSize:2
```

---

合同：

```javascript id="p9k3m8"
fileSize:20
```

---

# Step 5：替换文件类型

## 图片

```javascript id="w4m8x1"
accept:

'image/*'
```

---

## PDF

```javascript id="c6q2v9"
accept:

'.pdf'
```

---

## Office

```javascript id="h8n3m5"
accept:

'.doc,.docx,.xls,.xlsx'
```

---

# Step 6：业务提示替换

原：

```text id="y3k8m1"
请上传文件
```

替换：

头像：

```text id="q7v4n9"
请上传头像图片
```

合同：

```text id="r5m2x8"
请上传合同文件
```

---

# 常见业务模板

---

# AvatarUpload

需求：

```text id="k4x8m2"
头像

单文件

图片

最大2MB
```

配置：

```javascript id="p6n3v7"
{
 limit:1,

 imageMode:true,

 fileSize:2,

 accept:'image/*'
}
```

---

# ProductImageUpload

需求：

```text id="t9m5x3"
商品图片

最多5张

图片预览
```

配置：

```javascript id="d7q2k8"
{
 limit:5,

 imageMode:true,

 fileSize:5,

 accept:'image/*'
}
```

---

# ContractUpload

需求：

```text id="s4v8n6"
合同附件

PDF

Word

Excel

20MB
```

配置：

```javascript id="m8x3q5"
{
 limit:10,

 fileSize:20,

 accept:
 '.pdf,.doc,.docx,.xls,.xlsx'
}
```

---

# AttachmentUpload

需求：

```text id="c5k7m9"
审批附件

多文件

通用格式
```

配置：

```javascript id="r3n8x2"
{
 limit:10,

 fileSize:20
}
```

---

# AI 生成示例

输入：

```text id="y7m2q4"
生成商品图片上传组件。

要求：

最多5张图片

单张5MB

支持预览
```

AI 应生成：

```text id="h9x4m7"
ProductImageUpload


↓

UploadFile


配置：

limit=5

fileSize=5

imageMode=true

accept=image/*
```

---

保持：

```text id="n5q8v3"
Upload

↓

Validation

↓

Emit

```

不变。

---

# 错误示例

## ❌ 上传组件调用接口

错误：

```javascript id="z8m3x6"
uploadFile()
```

原因：

组件不负责服务器实现。

---

## ❌ 固定 OSS

错误：

```javascript id="v2k7m4"
ossClient.upload()
```

原因：

降低通用性。

---

## ❌ 内部提示业务消息

错误：

```javascript id="p5n9x3"
ElMessage.success()
```

原因：

消息由业务层控制。

---

# AI Checklist

生成完成检查：

```text id="s8m4q2"
□ 保留 UploadFile

□ v-model 正确

□ Props 正确

□ Emit 正确

□ 文件校验正确

□ 大小限制正确

□ 类型限制正确

□ 图片模式正确

□ 无 API

□ 无 OSS

□ 无 Router

□ 无 Store

□ 可复用

□ 符合 AFES
```

---

# Goal

UploadFile Replace Guide 的目标：

让 AI 可以稳定生成：

头像上传

商品图片上传

合同附件上传

审批附件上传

通过：

模板固定

规则替换

业务隔离

实现企业后台文件组件快速生成。
