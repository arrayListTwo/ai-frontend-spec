# 页面规则

本章定义 AI 在创建和修改 Vue3 页面时的规则。

## 页面文件结构

```
views/
└── user-manage/
    ├── index.vue            # 页面主文件
    ├── components/          # 页面私有组件（按需）
    │   ├── UserForm.vue
    │   └── UserDetail.vue
    ├── index.scss           # 页面样式（按需）
    └── utils.ts             # 页面工具函数（按需）
```

## 页面主文件结构

```vue
<template>
  <!-- 搜索区域 -->
  <el-form :model="queryParams" ref="queryForm">
    <!-- ... -->
  </el-form>

  <!-- 工具栏 -->
  <el-row :gutter="10" class="mb8">
    <!-- ... -->
  </el-row>

  <!-- 数据表格 -->
  <el-table v-loading="loading" :data="tableData">
    <!-- ... -->
  </el-table>

  <!-- 分页 -->
  <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum" />

  <!-- 新增/编辑弹窗 -->
  <el-dialog v-model="dialogVisible">
    <!-- ... -->
  </el-dialog>
</template>

<script setup name="UserManage" lang="ts">
// 必须使用 name 属性定义组件名称
// 按逻辑分块组织代码
</script>

<style lang="scss" scoped>
// 页面私有样式
</style>
```

## 页面开发规则

1. **必须使用** `<script setup>` 语法
2. **必须定义** `name` 属性（与路由 name 一致）
3. **数据获取** 封装为独立函数，页面加载时自动调用
4. **搜索/分页** 使用 RuoYi-Vue3 标准模式
5. **弹窗管理** 使用 `ref` 控制显隐，数据在打开时重置
6. **权限控制** 使用 `v-hasPermi` 指令
7. **字典使用** 使用 `v-for` + `getDicts` 方式

## CRUD 页面模板

典型的管理后台页面应包含：

- 搜索表单区域
- 操作按钮区域（新增、修改、删除、导出）
- 数据表格区域
- 分页组件
- 新增/编辑对话框
- 详情对话框（按需）
