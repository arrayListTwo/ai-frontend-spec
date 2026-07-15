/**
 * ============================================================
 * AFES Form Page Template
 * api.js
 * ------------------------------------------------------------
 * Framework
 * RuoYi-Vue3
 *
 * Description
 * Form Page API Template
 *
 * Responsibility
 * ✓ Detail
 * ✓ Add
 * ✓ Update
 *
 * NOT Responsibility
 * × Loading
 * × Message
 * × Confirm
 * × UI
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
 * '/business/order'
 *
 * '/system/config'
 *
 */

const API_PREFIX = '/system/demo'

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
 * Optional
 * ============================================================
 *
 * 根据业务可增加：
 *
 * uploadDemo()
 *
 * previewDemo()
 *
 * validateDemo()
 *
 * submitDemo()
 *
 * approveDemo()
 *
 * rejectDemo()
 *
 * publishDemo()
 *
 * revokeDemo()
 *
 */
/**
 * ============================================================
 * AI Replace Guide
 * ============================================================
 *
 * 生成业务 API 时，应替换：
 *
 * ------------------------------------------------------------
 * ① API_PREFIX
 *
 * '/system/demo'
 *
 * ↓
 *
 * '/system/user'
 *
 * '/system/config'
 *
 * '/business/order'
 *
 * '/workflow/apply'
 *
 * ------------------------------------------------------------
 * ② 方法名称
 *
 * getDemo
 *
 * ↓
 *
 * getUser
 *
 * getOrder
 *
 * getConfig
 *
 * ------------------------------------------------------------
 *
 * addDemo
 *
 * ↓
 *
 * addUser
 *
 * addOrder
 *
 * addConfig
 *
 * ------------------------------------------------------------
 *
 * updateDemo
 *
 * ↓
 *
 * updateUser
 *
 * updateOrder
 *
 * updateConfig
 *
 * ------------------------------------------------------------
 *
 * ③ 扩展接口
 *
 * 根据业务增加：
 *
 * submitXXX()
 *
 * approveXXX()
 *
 * rejectXXX()
 *
 * publishXXX()
 *
 * uploadXXX()
 *
 * previewXXX()
 *
 * downloadXXX()
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
 * × UI
 *
 * × Form Validate
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
 * getXXX
 *
 * addXXX
 *
 * updateXXX
 *
 * ------------------------------------------------------------
 *
 * 如业务需要，可增加：
 *
 * submitXXX
 *
 * approveXXX
 *
 * rejectXXX
 *
 * publishXXX
 *
 * uploadXXX
 *
 * previewXXX
 *
 * downloadXXX
 *
 * saveDraftXXX
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
 * □ Data 正确
 *
 * □ Params 正确（如需要）
 *
 * □ Import 正确
 *
 * □ 无业务逻辑
 *
 * □ 无 UI
 *
 * □ 无 Loading
 *
 * □ 无 Message
 *
 * □ 符合 AFES 全部规范
 *
 * ============================================================
 */
