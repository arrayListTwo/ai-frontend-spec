/**
 * ============================================================
 * AFES CRUD Template
 * api.js
 * ------------------------------------------------------------
 * Framework
 * RuoYi-Vue3
 *
 * Description
 * CRUD API Template
 *
 * Responsibility
 * ✓ List
 * ✓ Detail
 * ✓ Add
 * ✓ Update
 * ✓ Delete
 * ✓ Export
 *
 * AI Replace
 * Module
 * Business
 * URL
 * ============================================================
 */

import request from '@/utils/request'

/**
 * ============================================================
 * API Prefix
 * ============================================================
 *
 * AI Replace
 *
 * '/system/demo'
 *
 * ↓
 *
 * '/system/user'
 *
 * '/system/role'
 *
 * '/system/dept'
 *
 */

const API_PREFIX = '/system/demo'

/**
 * ============================================================
 * List
 * ============================================================
 *
 * GET /system/demo/list
 */

export function listDemo(query) {

    return request({

        url: `${API_PREFIX}/list`,

        method: 'get',

        params: query

    })

}

/**
 * ============================================================
 * Detail
 * ============================================================
 *
 * GET /system/demo/{id}
 */

export function getDemo(id) {

    return request({

        url: `${API_PREFIX}/${id}`,

        method: 'get'

    })

}

/**
 * ============================================================
 * Add
 * ============================================================
 *
 * POST /system/demo
 */

export function addDemo(data) {

    return request({

        url: API_PREFIX,

        method: 'post',

        data

    })

}

/**
 * ============================================================
 * Update
 * ============================================================
 *
 * PUT /system/demo
 */

export function updateDemo(data) {

    return request({

        url: API_PREFIX,

        method: 'put',

        data

    })

}

/**
 * ============================================================
 * Delete
 * ============================================================
 *
 * DELETE /system/demo/{id}
 *
 * 支持：
 *
 * 单个删除
 *
 * 批量删除（后端支持时）
 */

export function removeDemo(ids) {

    return request({

        url: `${API_PREFIX}/${ids}`,

        method: 'delete'

    })

}

/**
 * ============================================================
 * Export
 * ============================================================
 *
 * 推荐：
 *
 * RuoYi 官方通常使用：
 *
 * proxy.download(...)
 *
 * 本模板保留接口定义。
 *
 */

export function exportDemo(query) {

    return request({

        url: `${API_PREFIX}/export`,

        method: 'get',

        params: query,

        responseType: 'blob'

    })

}

/**
 * ============================================================
 * AI Replace Guide
 * ============================================================
 *
 * 生成业务 API 时，应替换：
 *
 * ① API_PREFIX
 *
 * '/system/demo'
 *
 * ↓
 *
 * '/system/user'
 *
 * '/system/role'
 *
 * '/system/post'
 *
 * '/system/dept'
 *
 * '/system/menu'
 *
 * ------------------------------------------------------------
 *
 * ② 方法名称
 *
 * listDemo
 *
 * ↓
 *
 * listUser
 *
 * listRole
 *
 * listDept
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * getDemo
 *
 * ↓
 *
 * getUser
 *
 * getRole
 *
 * getDept
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * addDemo
 *
 * ↓
 *
 * addUser
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * updateDemo
 *
 * ↓
 *
 * updateUser
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * removeDemo
 *
 * ↓
 *
 * removeUser
 *
 * ...
 *
 * ------------------------------------------------------------
 *
 * exportDemo
 *
 * ↓
 *
 * exportUser
 *
 * ...
 *
 */

/**
 * ============================================================
 * AFES API Rules
 * ============================================================
 *
 * API 文件仅负责：
 *
 * ✓ HTTP Request
 *
 * ✓ URL
 *
 * ✓ Method
 *
 * ✓ Params
 *
 * ✓ Data
 *
 * ------------------------------------------------------------
 *
 * API 文件不得负责：
 *
 * × Loading
 *
 * × Message
 *
 * × Confirm
 *
 * × Permission
 *
 * × Data Convert
 *
 * × Dict
 *
 * × UI
 *
 * ------------------------------------------------------------
 *
 * 保持：
 *
 * 一个业务
 *
 * 一个 API 文件
 *
 * 不跨模块调用。
 *
 */

/**
 * ============================================================
 * Naming Rules
 * ============================================================
 *
 * 推荐：
 *
 * listXXX
 *
 * getXXX
 *
 * addXXX
 *
 * updateXXX
 *
 * removeXXX
 *
 * exportXXX
 *
 * importXXX（如需要）
 *
 * downloadTemplate（如需要）
 *
 */

/**
 * ============================================================
 * Checklist
 * ============================================================
 *
 * □ URL 已替换
 *
 * □ Module 已替换
 *
 * □ Business 已替换
 *
 * □ 方法名称已替换
 *
 * □ Request Method 正确
 *
 * □ Params 正确
 *
 * □ Data 正确
 *
 * □ Blob 下载正确（如需要）
 *
 * □ 无业务逻辑
 *
 * □ 无 UI
 *
 * □ 无 Message
 *
 * □ 符合 AFES 全部规范
 *
 * ============================================================
 */
