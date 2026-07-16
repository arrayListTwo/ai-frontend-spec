# AFES DataTable Example

## 简介

本文档用于展示 DataTable 如何从通用模板转换为具体业务列表组件。

AI 在生成业务页面时，应参考以下模式：

```text
DataTable Template

↓

业务字段替换

↓

Column 配置

↓

Slot 扩展

↓

业务列表组件
```

---

# Example 1：用户管理列表

## Business Description

生成用户管理列表组件。

需求：

展示：

* 用户名
* 手机号
* 状态
* 创建时间

支持：

* 查看
* 编辑
* 删除

---

# Data Model

```javascript
const tableData = ref([])


const columns = [

  {
    label: '用户名',
    prop: 'userName'
  },


  {
    label: '手机号',
    prop: 'phone'
  },


  {
    label: '状态',
    prop: 'status',
    slot: 'status'
  },


  {
    label: '创建时间',
    prop: 'createTime'
  }

]
```

---

# Template Usage

```vue
<DataTable

  :data="tableData"

  :columns="columns"

  :loading="loading"

  show-index

  @page-change="handlePageChange"


>


  <template #status="{ row }">


    <el-tag>

      {{ row.status }}

    </el-tag>


  </template>



  <template #operation="{ row }">


    <el-button
      link
      type="primary"
      @click="handleEdit(row)"
    >

      编辑

    </el-button>



    <el-button
      link
      type="danger"
      @click="handleDelete(row)"
    >

      删除

    </el-button>


  </template>


</DataTable>
```

---

# Example 2：订单列表

## Business Description

生成订单管理列表。

字段：

* 订单编号
* 客户名称
* 金额
* 状态
* 创建时间

操作：

* 查看
* 发货
* 取消

---

# Column Configuration

```javascript
const columns = [

  {
    label: '订单编号',
    prop: 'orderNo'
  },


  {
    label: '客户名称',
    prop: 'customerName'
  },


  {
    label: '金额',
    prop: 'amount'
  },


  {
    label: '状态',
    prop: 'status',
    slot: 'status'
  },


  {
    label: '创建时间',
    prop: 'createTime'
  }

]
```

---

# Status Slot

```vue
<template #status="{ row }">


  <el-tag
    :type="getStatusType(row.status)"
  >

    {{ row.status }}


  </el-tag>


</template>
```

---

# Example 3：商品管理列表

## Business Description

生成商品管理列表。

字段：

* 商品名称
* 分类
* 库存
* 状态

---

# Recommended Structure

```text
ProductTable

|

DataTable


├── productName

├── categoryName

├── stock

├── status

└── operation
```

---

# Example 4：审批列表

## Business Description

生成审批记录列表。

字段：

* 申请人
* 流程名称
* 当前节点
* 状态
* 创建时间

---

# Column

```javascript
[
  {
    label:'申请人',
    prop:'applicantName'
  },


  {
    label:'流程名称',
    prop:'processName'
  },


  {
    label:'当前节点',
    prop:'nodeName'
  },


  {
    label:'状态',
    prop:'status',
    slot:'status'
  }

]
```

---

# Operation Slot Example

```vue
<template #operation="{ row }">


  <el-button
    link
    type="primary"
  >

    查看

  </el-button>



  <el-button
    link
    type="success"
  >

    审批

  </el-button>


</template>
```

---

# Example 5：复杂列表

## Scenario

客户管理。

要求：

* 查询客户
* 展示客户信息
* 标签展示
* 操作按钮
* 批量处理

---

# Structure

```text
CustomerPage


├── SearchForm


├── Batch Actions


├── DataTable

│
├── Selection

├── Customer Columns

└── Operation


└── Pagination
```

---

# AI Generation Example

## Input

```text
生成客户管理列表。

字段：

客户名称

手机号

客户等级

状态

创建时间

操作：

查看

编辑

删除
```

---

## AI Expected Output

生成：

```text
CustomerTable


↓

DataTable


columns:


customerName

phone

level

status

createTime


slots:


status

operation

```

---

# Common Mistakes

## 错误 1：组件内部请求接口

错误：

```javascript
getList()
```

原因：

DataTable 不负责数据获取。

---

## 错误 2：业务字段写死

错误：

```javascript
userName
```

原因：

降低复用性。

---

## 错误 3：操作按钮写死

错误：

组件内部固定：

```text
编辑 删除
```

正确：

通过：

```vue
#operation
```

扩展。

---

# AI Checklist

生成完成检查：

```text
□ columns 配置正确

□ slot 使用合理

□ operation 扩展

□ loading 正常

□ pagination 正常

□ selection 正常

□ 无 API

□ 无 Router

□ 无业务状态

□ 可复用

□ AI Friendly

□ 符合 AFES
```

---

# Goal

通过 Example 文档，AI 能理解：

通用 DataTable

↓

业务列表组件

↓

完整后台页面

的转换方式。

保持：

结构统一

逻辑清晰

代码稳定

符合 AFES 企业级 AI 开发规范。
