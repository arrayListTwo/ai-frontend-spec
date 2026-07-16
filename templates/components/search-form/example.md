# AFES SearchForm Example

## 简介

本文档展示 SearchForm 在实际企业后台项目中的使用方式。

示例目标：

帮助 AI 理解 SearchForm 如何从通用模板转换为具体业务查询组件。

---

# Example 1：用户管理查询

## Business Description

生成用户管理页面查询组件。

查询条件：

* 用户名
* 手机号
* 用户状态
* 创建时间

---

## Data Model

```javascript
const queryParams = reactive({

    userName: '',

    phone: '',

    status: '',

    createTime: []

})
```

---

## Template Usage

```vue
<SearchForm
    v-model="queryParams"
    :loading="loading"
    @search="handleQuery"
    @reset="resetQuery"
>

  <el-form-item label="用户名">

    <el-input
        v-model="queryParams.userName"
        placeholder="请输入用户名"
        clearable
        @keyup.enter="handleQuery"
    />

  </el-form-item>


  <el-form-item label="手机号">

    <el-input
        v-model="queryParams.phone"
        placeholder="请输入手机号"
        clearable
    />

  </el-form-item>


  <el-form-item label="状态">

    <el-select
        v-model="queryParams.status"
        placeholder="请选择状态"
        clearable
    >

      <el-option
          label="正常"
          value="0"
      />

      <el-option
          label="停用"
          value="1"
      />

    </el-select>

  </el-form-item>


  <el-form-item label="创建时间">

    <el-date-picker

        v-model="queryParams.createTime"

        type="daterange"

        range-separator="至"

        start-placeholder="开始时间"

        end-placeholder="结束时间"

    />

  </el-form-item>


</SearchForm>
```

---

# Example 2：订单管理查询

## Business Description

生成订单查询组件。

查询条件：

* 订单编号
* 客户名称
* 订单状态
* 下单时间

---

## Data Model

```javascript
const queryParams = reactive({

    orderNo: '',

    customerName: '',

    orderStatus: '',

    orderTime: []

})
```

---

## Field Mapping

| 字段           | 类型        |
| ------------ | --------- |
| orderNo      | Input     |
| customerName | Input     |
| orderStatus  | Select    |
| orderTime    | DateRange |

---

# Example 3：商品管理查询

## Business Description

生成商品查询组件。

查询条件：

* 商品名称
* 商品分类
* 商品状态
* 创建时间

---

## Data Model

```javascript
const queryParams = reactive({

    productName: '',

    categoryId: '',

    status: '',

    createTime: []

})
```

---

## Recommended Components

```text
ProductSearch

├── Input

├── TreeSelect

├── Select

└── DateRange
```

---

# Example 4：复杂查询

## Scenario

审批流程查询。

查询条件：

* 申请人
* 流程类型
* 审批状态
* 创建时间
* 组织机构

---

## Recommended Structure

```text
SearchForm

├── Applicant Input

├── Process Type Select

├── Status Select

├── Organization TreeSelect

├── DateRange

└── Custom Actions
```

---

# Slot Example

## 添加自定义按钮

```vue
<SearchForm>

  查询条件


  <template #actions>

    <el-button
        type="success"
    >

      导出

    </el-button>


    <el-button
        type="warning"
    >

      高级查询

    </el-button>


  </template>


</SearchForm>
```

---

# AI Generation Example

## Input

```text
生成客户管理查询组件。

字段：

客户名称

手机号

客户等级

创建时间
```

---

## Expected AI Output

AI 应生成：

```text
CustomerSearch

↓

SearchForm

↓

fields:

customerName

phone

level

createTime
```

保持：

* 组件结构
* Props
* Emits
* Slot

只替换：

业务字段。

---

# Common Mistakes

## 错误 1

把 API 写入 SearchForm

错误：

```javascript
request('/user/list')
```

原因：

SearchForm 不负责数据请求。

---

## 错误 2

维护 Table 状态

错误：

```javascript
tableData.value=[]
```

原因：

查询组件只负责条件。

---

## 错误 3

硬编码业务字段

错误：

```javascript
const userStatus={}
```

原因：

业务应该由页面传入。

---

# AI Checklist

生成完成：

```
□ SearchForm 复用

□ 字段符合业务

□ 查询对象完整

□ Emit 正确

□ Slot 使用合理

□ 无 API

□ 无 Table

□ 无 Router

□ 无业务耦合

□ 符合 AFES
```

---

# Goal

通过 Example 文档，AI 可以理解：

通用 SearchForm

↓

业务查询组件

↓

企业后台页面

的转换方式。

保持：

模板统一

结构稳定

业务快速替换。
