/**
 * ============================================================
 * AFES CRUD Template
 * useCrud.js
 * ------------------------------------------------------------
 * Framework
 * Vue3
 * Composition API
 *
 * Description
 * 通用 CRUD Hook
 *
 * Responsibility
 * ✓ Query
 * ✓ Table
 * ✓ Pagination
 * ✓ Loading
 * ✓ Selection
 * ✓ Dialog
 * ✓ Delete
 * ✓ Export
 *
 * NOT Responsibility
 * × Form
 * × Dialog UI
 * × Page Layout
 * × Table Column
 *
 * AI Replace
 * API
 * Permission
 * Export
 * Query
 * ============================================================
 */

import { reactive, ref } from 'vue'

import { ElMessageBox } from 'element-plus'

import {
    listDemo,
    removeDemo,
    exportDemo
} from '../api'

/**
 * ============================================================
 * useCrud
 * ============================================================
 */

export function useCrud(queryFormRef) {

    /**
     * ============================================================
     * Loading
     * ============================================================
     */

    const loading = ref(false)

    /**
     * ============================================================
     * Table
     * ============================================================
     */

    const tableData = ref([])

    /**
     * ============================================================
     * Pagination
     * ============================================================
     */

    const pagination = reactive({

        total: 0

    })

    /**
     * ============================================================
     * Query
     * ============================================================
     */

    const queryParams = reactive({

        pageNum: 1,

        pageSize: 10,

        keyword: '',

        status: ''

        /**
         * AI Replace
         *
         * 根据业务增加：
         *
         * createTime
         * deptId
         * roleId
         * userId
         * type
         * category
         * ...
         *
         */

    })

    /**
     * ============================================================
     * Selection
     * ============================================================
     */

    const selectedRows = ref([])

    /**
     * ============================================================
     * Dialog
     * ============================================================
     */

    const dialogVisible = ref(false)

    const dialogTitle = ref('')

    const currentRow = ref(null)

    /**
     * ============================================================
     * Load List
     * ============================================================
     */

    async function loadList() {

        loading.value = true

        try {

            const { rows, total } = await listDemo({

                ...queryParams

            })

            tableData.value = rows || []

            pagination.total = total || 0

        } finally {

            loading.value = false

        }

    }
    /**
     * ============================================================
     * Query
     * ============================================================
     */

    function handleQuery() {

        queryParams.pageNum = 1

        loadList()

    }

    /**
     * ============================================================
     * Reset Query
     * ============================================================
     */

    function resetQuery() {

        queryFormRef.value?.resetFields()

        Object.assign(queryParams, {

            pageNum: 1,

            pageSize: 10,

            keyword: '',

            status: ''

            /**
             * AI Replace
             *
             * 保持与 queryParams 默认值一致
             *
             */

        })

        loadList()

    }

    /**
     * ============================================================
     * Selection Change
     * ============================================================
     */

    function handleSelectionChange(selection) {

        selectedRows.value = selection

    }

    /**
     * ============================================================
     * Add
     * ============================================================
     */

    function handleAdd() {

        currentRow.value = null

        dialogTitle.value = '新增'

        dialogVisible.value = true

    }

    /**
     * ============================================================
     * Edit
     * ============================================================
     */

    function handleEdit(row) {

        currentRow.value = {

            ...row

        }

        dialogTitle.value = '编辑'

        dialogVisible.value = true

    }

    /**
     * ============================================================
     * View
     * ============================================================
     *
     * 推荐：
     *
     * 查看与编辑共用 Dialog。
     *
     * 若业务需要只读模式，
     * 可增加：
     *
     * dialogMode = 'view'
     *
     */

    function handleView(row) {

        currentRow.value = {

            ...row

        }

        dialogTitle.value = '查看'

        dialogVisible.value = true

    }

/**
 * ============================================================
 * AI Replace Area
 * ============================================================
 *
 * 可根据业务继续扩展：
 *
 * handleCopy()
 *
 * handleClone()
 *
 * handleEnable()
 *
 * handleDisable()
 *
 * handleAssign()
 *
 * handleAuthorize()
 *
 * ...
 *
 */
    /**
     * ============================================================
     * Delete
     * ============================================================
     */

    async function handleDelete(row) {

        await ElMessageBox.confirm(
            `确认删除【${row.name}】吗？`,
            '系统提示',
            {
                type: 'warning',
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }
        )

        await removeDemo(row.id)

        loadList()

    }

    /**
     * ============================================================
     * Batch Delete
     * ============================================================
     */

    async function handleBatchDelete() {

        if (!selectedRows.value.length) {
            return
        }

        const ids = selectedRows.value.map(item => item.id)

        await ElMessageBox.confirm(
            `确认删除选中的 ${ids.length} 条数据吗？`,
            '系统提示',
            {
                type: 'warning',
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }
        )

        await removeDemo(ids)

        selectedRows.value = []

        loadList()

    }

    /**
     * ============================================================
     * Export
     * ============================================================
     *
     * AI Replace
     *
     * 推荐：
     *
     * 使用项目统一下载工具。
     *
     * 例如：
     *
     * download()
     *
     * downloadFile()
     *
     * proxy.download()
     *
     */

    async function handleExport() {

        await ElMessageBox.confirm(
            '确认导出当前查询结果吗？',
            '系统提示',
            {
                type: 'warning'
            }
        )

        await exportDemo({

            ...queryParams

        })

    }

    /**
     * ============================================================
     * Refresh
     * ============================================================
     */

    function refresh() {

        loadList()

    }

    /**
     * ============================================================
     * Reload
     * ============================================================
     *
     * 保留当前查询条件。
     *
     */

    function reload() {

        loadList()

    }

    /**
     * ============================================================
     * Close Dialog
     * ============================================================
     */

    function closeDialog() {

        dialogVisible.value = false

        currentRow.value = null

    }

/**
 * ============================================================
 * AI Replace Area
 * ============================================================
 *
 * 根据业务可继续增加：
 *
 * handleImport()
 *
 * handleDownloadTemplate()
 *
 * handleBatchEnable()
 *
 * handleBatchDisable()
 *
 * handleResetPassword()
 *
 * handleAssignRole()
 *
 * handleAssignDept()
 *
 * handleSync()
 *
 * handlePublish()
 *
 * handleOffline()
 *
 */
    /**
     * ============================================================
     * Return
     * ============================================================
     *
     * 推荐顺序：
     *
     * State
     * ↓
     * Computed（如有）
     * ↓
     * Methods
     *
     * 保持所有 Hook 导出顺序一致。
     *
     */

    return {

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
         * Selection
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

        handleQuery,

        resetQuery,

        handleSelectionChange,

        handleAdd,

        handleEdit,

        handleView,

        handleDelete,

        handleBatchDelete,

        handleExport,

        refresh,

        reload,

        closeDialog

    }

}

/**
 * ============================================================
 * AI Replace Guide
 * ============================================================
 *
 * 生成业务 Hook 时，应替换：
 *
 * ① API
 *
 * listDemo()
 *
 * removeDemo()
 *
 * exportDemo()
 *
 * 替换为真实业务 API。
 *
 * ------------------------------------------------------------
 *
 * ② Query
 *
 * 根据业务增加：
 *
 * 日期
 *
 * 状态
 *
 * 部门
 *
 * 类型
 *
 * 用户
 *
 * 分类
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * ③ Dialog
 *
 * 若存在：
 *
 * DetailDialog
 *
 * ImportDialog
 *
 * AssignDialog
 *
 * 可继续维护：
 *
 * detailVisible
 *
 * importVisible
 *
 * assignVisible
 *
 * ------------------------------------------------------------
 *
 * ④ Toolbar
 *
 * 根据业务增加：
 *
 * 导入
 *
 * 下载模板
 *
 * 批量启用
 *
 * 批量停用
 *
 * 发布
 *
 * 下线
 *
 * 同步
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * ⑤ Permission
 *
 * 推荐：
 *
 * 页面负责权限控制。
 *
 * Hook 不负责权限判断。
 *
 * ------------------------------------------------------------
 *
 * ⑥ Export
 *
 * 推荐：
 *
 * 使用项目统一 Download 工具。
 *
 * Hook 不直接处理 Blob。
 *
 */

/**
 * ============================================================
 * AFES Hook Rules
 * ============================================================
 *
 * useCrud 负责：
 *
 * ✓ Query
 *
 * ✓ Pagination
 *
 * ✓ Loading
 *
 * ✓ Dialog State
 *
 * ✓ Delete
 *
 * ✓ Export
 *
 * ✓ Selection
 *
 * ✓ CRUD 调度
 *
 * ------------------------------------------------------------
 *
 * useCrud 不负责：
 *
 * × Dialog UI
 *
 * × Form Rules
 *
 * × 页面布局
 *
 * × Table Column
 *
 * × 页面样式
 *
 * × Permission
 *
 * × Dict 渲染
 *
 * ------------------------------------------------------------
 *
 * 推荐：
 *
 * 页面负责 View。
 *
 * Hook 负责 Logic。
 *
 */

/**
 * ============================================================
 * AFES Checklist
 * ============================================================
 *
 * □ Loading 已处理
 *
 * □ Query 已统一维护
 *
 * □ Pagination 已统一维护
 *
 * □ API 已替换
 *
 * □ Export 已替换
 *
 * □ Delete 已统一确认
 *
 * □ Dialog 状态已统一维护
 *
 * □ Selection 已统一维护
 *
 * □ 无 console.log
 *
 * □ 无 debugger
 *
 * □ 无重复逻辑
 *
 * □ 无页面 UI
 *
 * □ 职责单一
 *
 * □ 符合 AFES 全部规范
 *
 * ============================================================
 */
