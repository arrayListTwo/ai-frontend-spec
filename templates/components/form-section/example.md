# AFES FormSection Example

## 简介

本文档用于展示 FormSection 如何从通用表单分组模板转换为具体业务表单结构。

AI 生成复杂业务表单时，应遵循：

```text id="q8m4x7"
FormSection Template

↓

业务表单分析

↓

区域拆分

↓

Section 组合

↓

完整业务表单
```

---

# Example 1：员工信息表单

## Business Description

生成员工信息维护表单。

需求：

员工信息较多，需要分组展示：

* 基础信息
* 联系方式
* 工作信息
* 附件资料

---

# Page Structure

```text id="m6x9k3"
EmployeeForm


el-form


├── FormSection

│

│   基础信息


├── FormSection

│

│   联系方式


├── FormSection

│

│   工作信息


└── FormSection

    附件资料

```

---

# Template Usage

```vue id="w7n3q5"
<FormSection

  title="基础信息"

  description="填写员工基本资料"

>


  <el-form-item

    label="姓名"

    prop="name"

  >

    <el-input

      v-model="form.name"

    />


  </el-form-item>



  <el-form-item

    label="身份证号"

    prop="idCard"

  >

    <el-input

      v-model="form.idCard"

    />


  </el-form-item>


</FormSection>
```

---

# Example 2：客户档案表单

## Business Description

生成客户维护表单。

分组：

* 客户资料
* 联系人信息
* 商务信息
* 备注

---

# Structure

```text id="r5m8x2"
CustomerForm


FormSection


├── 客户资料


├── 联系人信息


├── 商务信息


└── 备注

```

---

# Usage

```vue id="c8n4m6"
<FormSection

  title="客户资料"

  description="维护客户基础信息"

>


  <CustomerBaseInfo />


</FormSection>
```

---

# Example 3：审批申请表单

## Business Description

生成审批申请页面。

要求：

* 信息分类
* 附件独立区域
* 审批意见独立区域

---

# Structure

```text id="p7x3m9"
ApprovalForm


├── FormSection

│

│   申请信息


├── FormSection

│

│   附件信息


└── FormSection

    审批意见

```

---

# Usage

```vue id="k4m8q1"
<FormSection

  title="附件信息"

  description="上传相关证明材料"

>


  <UploadPanel

    v-model="form.attachments"

  />


</FormSection>
```

---

# Example 4：系统配置表单

## Business Description

系统参数配置。

特点：

字段较多。

需要：

折叠区域。

---

# Structure

```text id="z6n2x8"
ConfigForm


├── 基础配置


├── 高级配置


└── 扩展配置

```

---

# Usage

```vue id="v9m5q3"
<FormSection

  title="高级配置"

  collapsible

  :default-expand="false"

>


  <ConfigItems />


</FormSection>
```

---

# Example 5：复杂业务嵌套表单

## Scenario

订单编辑。

包含：

* 订单信息
* 商品明细
* 收货信息
* 发票信息

---

# Recommended Structure

```text id="b5x8m2"
OrderEditPage


el-form


├── FormSection

│

│   订单信息


│

├── FormSection

│

│   商品明细

│

│       └── DataTable


│

├── FormSection

│

│   收货信息


└── FormSection

    发票信息

```

---

# Complex Slot Example

## Extra Slot

场景：

Section 右侧增加操作按钮。

```vue id="h3m7q9"
<FormSection

  title="商品信息"

>


  <template #extra>


    <el-button

      type="primary"

    >

      添加商品


    </el-button>


  </template>


</FormSection>
```

---

# Nested Component Example

FormSection 可以组合其他 AFES 组件：

```text id="n8x4m5"
FormSection


├── DataTable

├── UploadPanel

├── EditDialog Trigger

└── Custom Component

```

---

# AI Generation Example

## Input

```text id="s7m3x8"
生成员工入职信息表。


要求：


分为：

个人信息

教育经历

工作经历

附件材料

```

---

## Expected AI Output

AI 应生成：

```text id="q5n9m2"
EmployeeEntryForm


↓

el-form


↓

FormSection


├── 个人信息


├── 教育经历


├── 工作经历


└── 附件材料

```

---

# Common Mistakes

## 错误 1：所有字段放一个 Section

错误：

```text id="m8x2q4"
员工表单


├── 姓名

├── 手机

├── 地址

├── 部门

├── 职位

├── 附件

...

```

问题：

* 可读性差
* AI 难维护
* 页面复杂

---

## 错误 2：Section 包含业务逻辑

错误：

```javascript id="x3m7n5"
<FormSection>


saveEmployee()


</FormSection>
```

原因：

组件职责错误。

---

## 错误 3：Section 固定字段

错误：

```vue id="p6q8m1"
<FormSection>

用户名输入框

手机号输入框

</FormSection>
```

原因：

无法复用。

---

# AI Checklist

生成完成检查：

```text id="r9m4x6"
□ Section 合理拆分

□ Title 正确

□ Description 清晰

□ Slot 使用正确

□ FormItem 在业务层

□ 可组合其他组件

□ 支持复杂页面

□ 无 API

□ 无提交逻辑

□ 无业务状态

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Goal

通过 Example 文档，AI 可以理解：

```text id="t8m5q3"
复杂表单

↓

业务区域拆分

↓

FormSection

↓

FormItem

↓

完整页面
```

最终实现：

需求描述

↓

AI 分析结构

↓

生成标准复杂表单页面

↓

符合 AFES AI Coding 规范。
