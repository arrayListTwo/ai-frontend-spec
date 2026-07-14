<template>
  <div class="app-container crud-page">
    <!-- =========================
         Search Panel
    ========================== -->
    <el-form
        ref="queryFormRef"
        :model="queryParams"
        :inline="true"
        label-width="88px"
        class="search-form"
    >
      <!--
        TODO
        根据业务替换查询字段
      -->

      <el-form-item
          label="名称"
          prop="keyword"
      >
        <el-input
            v-model="queryParams.keyword"
            placeholder="请输入名称"
            clearable
            @keyup.enter="handleQuery"
        />
      </el-form-item>

      <el-form-item
          label="状态"
          prop="status"
      >
        <el-select
            v-model="queryParams.status"
            placeholder="请选择状态"
            clearable
            style="width: 180px"
        >
          <el-option
              label="启用"
              value="0"
          />
          <el-option
              label="停用"
              value="1"
          />
        </el-select>
      </el-form-item>

      <!--
        TODO

        根据业务继续增加查询项

        日期

        下拉

        TreeSelect

        Dict

        Department

        User

        ...

      -->

      <el-form-item>
        <el-button
            type="primary"
            icon="Search"
            @click="handleQuery"
        >
          搜索
        </el-button>

        <el-button
            icon="Refresh"
            @click="resetQuery"
        >
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <!-- =========================
         Toolbar
    ========================== -->

    <div class="table-toolbar">

      <div class="left-actions">

        <el-button
            v-hasPermi="['system:demo:add']"
            type="primary"
            icon="Plus"
            @click="handleAdd"
        >
          新增
        </el-button>

        <el-button
            v-hasPermi="['system:demo:remove']"
            type="danger"
            icon="Delete"
            :disabled="selectedRows.length === 0"
            @click="handleBatchDelete"
        >
          删除
        </el-button>

        <el-button
            v-hasPermi="['system:demo:export']"
            type="warning"
            icon="Download"
            @click="handleExport"
        >
          导出
        </el-button>

      </div>

      <div class="right-actions">

        <el-button
            circle
            icon="Refresh"
            @click="loadList"
        />

        <!--
          如果项目支持：

          RightToolbar

          ColumnSetting

          Refresh

          Search Toggle

        -->

      </div>

    </div>

    <!-- =========================
         Table
    ========================== -->

    <el-table
        v-loading="loading"
        :data="tableData"
        border
        stripe
        @selection-change="handleSelectionChange"
    >
      <template #empty>

        <el-empty
            description="暂无数据"
        />

      </template>

      <el-table-column
          type="selection"
          width="55"
          align="center"
      />

      <el-table-column
          label="编号"
          prop="id"
          width="100"
          align="center"
      />

      <!--

        TODO

        根据业务继续新增列

      -->

      <el-table-column
          label="名称"
          prop="name"
          min-width="180"
      />

      <el-table-column
          label="状态"
          prop="status"
          width="120"
          align="center"
      >
        <template #default="{ row }">

          <el-tag
              :type="row.status === '0'
              ? 'success'
              : 'danger'"
          >
            {{ row.status === '0'
              ? '启用'
              : '停用' }}
          </el-tag>

          <!--

            若项目统一使用 DictTag：

            <dict-tag />

            推荐替换

          -->

        </template>
      </el-table-column>

      <el-table-column
          label="创建时间"
          prop="createTime"
          width="180"
      />
      <!-- =========================
           Operation Column
      ========================== -->

      <el-table-column
          label="操作"
          fixed="right"
          width="220"
          align="center"
      >
        <template #default="{ row }">

          <el-button
              v-hasPermi="['system:demo:query']"
              link
              type="primary"
              icon="View"
              @click="handleView(row)"
          >
            查看
          </el-button>

          <el-button
              v-hasPermi="['system:demo:edit']"
              link
              type="primary"
              icon="Edit"
              @click="handleEdit(row)"
          >
            编辑
          </el-button>

          <el-button
              v-hasPermi="['system:demo:remove']"
              link
              type="danger"
              icon="Delete"
              @click="handleDelete(row)"
          >
            删除
          </el-button>

        </template>
      </el-table-column>

    </el-table>

    <!-- =========================
         Pagination
    ========================== -->

    <pagination
        v-if="pagination.total > 0"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        :total="pagination.total"
        @pagination="loadList"
    />

    <!-- =========================
         Edit Dialog
    ========================== -->

    <EditDialog
        v-model="dialogVisible"
        :title="dialogTitle"
        :row="currentRow"
        @success="handleDialogSuccess"
    />

  </div>
</template>

<script setup>
/**
 * ==========================================
 * AFES CRUD Page Template
 * ------------------------------------------
 * Framework:
 * Vue3
 * Composition API
 * Script Setup
 * Element Plus
 * Pinia
 * Vite
 *
 * Project:
 * RuoYi-Vue3
 *
 * Description:
 * 标准 CRUD 页面模板
 *
 * AI Replace:
 * 业务名称
 * API
 * 查询字段
 * Table 字段
 * Dialog
 * Permission
 * ==========================================
 */

import { onMounted, ref } from 'vue'

import EditDialog from './components/EditDialog.vue'

import { useCrud } from './hooks/useCrud'

/**
 * ===========================
 * Form Ref
 * ===========================
 */

const queryFormRef = ref()

/**
 * ===========================
 * CRUD
 * ===========================
 */

const {

  /**
   * Loading
   */
  loading,

  /**
   * Table
   */
  tableData,

  /**
   * Pagination
   */
  pagination,

  /**
   * Query
   */
  queryParams,

  /**
   * Selected Rows
   */
  selectedRows,

  /**
   * Dialog
   */
  dialogVisible,

  dialogTitle,

  currentRow,

  /**
   * Methods
   */

  loadList,

  resetQuery,

  handleQuery,

  handleSelectionChange,

  handleAdd,

  handleEdit,

  handleView,

  handleDelete,

  handleBatchDelete,

  handleExport

} = useCrud(queryFormRef)

/**
 * ===========================
 * Dialog Success
 * ===========================
 *
 * Dialog 保存成功后：
 *
 * 关闭弹窗
 * 刷新列表
 */

function handleDialogSuccess() {

  loadList()

}
/**
 * ===========================
 * Lifecycle
 * ===========================
 */

onMounted(() => {
  loadList()
})

/**
 * ===========================
 * AI Replace Area
 * ===========================
 *
 * 根据具体业务，可在此扩展：
 *
 * - 初始化字典
 * - 初始化下拉数据
 * - 初始化树数据
 * - 初始化部门数据
 * - 初始化角色数据
 * - 初始化用户数据
 * - 初始化配置数据
 *
 * 推荐：
 *
 * async function init() {
 *   await Promise.all([
 *     loadDict(),
 *     loadDeptTree(),
 *     loadRoleList(),
 *     loadList()
 *   ])
 * }
 *
 * onMounted(init)
 *
 */

/**
 * ===========================
 * Watch Area
 * ===========================
 *
 * 推荐仅监听真正需要监听的数据。
 *
 * 不要：
 *
 * watch(queryParams)
 *
 * 深度监听整个对象。
 *
 * 推荐：
 *
 * watch(
 *   () => queryParams.status,
 *   () => {
 *     loadList()
 *   }
 * )
 *
 */

/**
 * ===========================
 * Computed Area
 * ===========================
 *
 * 推荐：
 *
 * computed(() => ...)
 *
 * 不要：
 *
 * 页面维护大量中间变量。
 *
 */

/**
 * ===========================
 * Methods Area
 * ===========================
 *
 * 页面方法保持轻量。
 *
 * 复杂逻辑：
 *
 * useCrud
 *
 * utils
 *
 * api
 *
 * component
 *
 * 页面仅负责：
 *
 * 调度。
 *
 */

/**
 * ===========================
 * AFES Checklist
 * ===========================
 *
 * 页面完成前请确认：
 *
 * □ Search 已完成
 *
 * □ Toolbar 已完成
 *
 * □ Table 已完成
 *
 * □ Pagination 已完成
 *
 * □ Dialog 已完成
 *
 * □ API 已接入
 *
 * □ Permission 已配置
 *
 * □ Dict 已配置（如需要）
 *
 * □ Loading 已处理
 *
 * □ Empty 已处理
 *
 * □ Error 已处理
 *
 * □ TODO 已全部替换
 *
 * □ 无 console.log
 *
 * □ 无 debugger
 *
 * □ 无废弃代码
 *
 * □ 符合 AFES 全部规范
 *
 */

</script>

<style scoped>
/* ==========================================
   AFES CRUD Page Template
   ========================================== */

.crud-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ==========================================
   Search
   ========================================== */

.search-form {
  padding: 18px 20px 2px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-light);
  border-radius: 6px;
}

/* Element Plus 默认 inline form
   最后一项底部通常需要消除 */

.search-form :deep(.el-form-item) {
  margin-bottom: 18px;
}

/* ==========================================
   Toolbar
   ========================================== */

.table-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.left-actions,
.right-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ==========================================
   Table
   ========================================== */

:deep(.el-table) {
  flex: 1;
}

:deep(.el-table th.el-table__cell) {
  font-weight: 600;
}

:deep(.el-table .cell) {
  word-break: break-word;
}

/* 操作列按钮间距 */

:deep(.el-table .el-button + .el-button) {
  margin-left: 8px;
}

/* ==========================================
   Pagination
   ========================================== */

:deep(.pagination-container) {
  margin-top: 16px;
  padding: 0;
}
/* ==========================================
   Empty
   ========================================== */

:deep(.el-empty) {
  padding: 48px 0;
}

/* ==========================================
   Loading
   ========================================== */

:deep(.el-loading-mask) {
  border-radius: 4px;
}

/* ==========================================
   Responsive
   ========================================== */

@media (max-width: 1200px) {

  .table-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .left-actions,
  .right-actions {
    width: 100%;
    flex-wrap: wrap;
  }

}

@media (max-width: 768px) {

  .search-form {
    padding: 16px;
  }

  .search-form :deep(.el-form) {
    display: block;
  }

  .search-form :deep(.el-form-item) {
    width: 100%;
    margin-right: 0;
  }

  .search-form :deep(.el-input),
  .search-form :deep(.el-select),
  .search-form :deep(.el-date-editor) {
    width: 100%;
  }

  .table-toolbar {
    gap: 10px;
  }

  .left-actions,
  .right-actions {
    justify-content: flex-start;
  }

}

/* ==========================================
   Dark Mode
   ========================================== */

html.dark .search-form {
  border-color: var(--el-border-color);
}

/* ==========================================
   AI Replace Guide
   ========================================== */

/*

本模板生成业务页面时，应替换以下内容：

① 页面名称

例如：

用户管理

角色管理

部门管理

岗位管理

菜单管理

————————————

② 查询条件

例如：

用户名

手机号

状态

日期

部门

角色

————————————

③ Table Columns

例如：

用户名

昵称

手机号

邮箱

状态

创建时间

————————————

④ Dialog

替换：

EditDialog

实际业务：

UserDialog

RoleDialog

DeptDialog

...

————————————

⑤ API

替换：

api.js

为：

src/api/system/user.js

等实际 API

————————————

⑥ Permission

替换：

system:demo:add

system:demo:edit

system:demo:remove

为真实权限编码

————————————

⑦ Dict

若项目使用字典：

推荐统一：

<dict-tag />

不要自行写状态转换。

————————————

⑧ Hook

若 CRUD 逻辑复杂：

继续扩展：

useCrud()

不要把业务重新写回 index.vue。

*/

/* ==========================================
   AFES Page Rules
   ========================================== */

/*

本页面应始终保持：

✓ 页面负责组织业务

✓ API 独立

✓ Dialog 独立

✓ CRUD Hook 独立

✓ 查询区域独立

✓ Loading 完整

✓ Empty 完整

✓ 权限统一

✓ 样式统一

✓ 无重复代码

✓ 最小修改原则

*/

/* ==========================================
   End
   ========================================== */
</style>
