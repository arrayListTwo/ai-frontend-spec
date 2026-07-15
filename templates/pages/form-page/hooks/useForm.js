/**
 * ============================================================
 * AFES Form Page Template
 * hooks/useForm.js
 * ------------------------------------------------------------
 *
 * Framework:
 * Vue3 + Composition API
 *
 * Description:
 * Form Page Business Logic Hook
 *
 * Responsibility:
 *
 * ✓ Form Initialize
 * ✓ Detail Loading
 * ✓ Add
 * ✓ Update
 * ✓ Submit
 * ✓ Reset
 * ✓ Loading
 *
 * NOT Responsibility:
 *
 * × UI
 * × Layout
 * × Element Component
 * × Router Page Design
 *
 * ============================================================
 */


import {
    unref
} from 'vue'


import {
    ElMessage
} from 'element-plus'


/**
 * ============================================================
 * useForm
 * ============================================================
 *
 * @param options
 *
 * {
 *   formRef
 *
 *   formData
 *
 *   rules
 *
 *   submitLoading
 *
 *   getApi
 *
 *   addApi
 *
 *   updateApi
 * }
 *
 */


export function useForm(options = {}) {


    const {

        formRef,

        formData,

        rules,

        submitLoading,

        getApi,

        addApi,

        updateApi


    } = options



    /**
     * ==========================================================
     * Default Form
     * ==========================================================
     *
     * AI Replace:
     *
     * 根据业务字段调整
     *
     */


    const defaultForm = {


        id: undefined,


        name: '',


        status: '0',


        remark: ''


    }



    /**
     * ==========================================================
     * Init Form
     * ==========================================================
     *
     * 新增页面初始化
     *
     */


    function initForm() {


        Object.keys(defaultForm).forEach(key => {


            formData[key] = defaultForm[key]


        })


    }



    /**
     * ==========================================================
     * Reset Form
     * ==========================================================
     *
     * 清空表单
     *
     */


    function resetForm() {


        initForm()


        if (formRef?.value) {


            formRef.value.resetFields()


        }


    }



    /**
     * ==========================================================
     * Load Detail
     * ==========================================================
     *
     * 编辑页面数据回显
     *
     */


    async function loadDetail(id) {


        if (!id) {


            return


        }


        const res = await getApi(id)



        const data = res.data || {}



        Object.keys(formData).forEach(key => {


            if (data[key] !== undefined) {


                formData[key] = data[key]


            }


        })


    }
    /**
     * ==========================================================
     * Validate Form
     * ==========================================================
     *
     * 表单校验
     *
     */

    async function validateForm() {

        const form = unref(formRef)

        if (!form) {

            return false

        }

        try {

            await form.validate()

            return true

        } catch (error) {

            return false

        }

    }



    /**
     * ==========================================================
     * Is Edit
     * ==========================================================
     */

    function isEditMode() {

        return !!formData.id

    }



    /**
     * ==========================================================
     * Submit
     * ==========================================================
     *
     * 保存表单
     *
     * 流程：
     *
     * Validate
     *      ↓
     * Loading
     *      ↓
     * Add / Update
     *      ↓
     * Success Message
     *      ↓
     * Return true
     *
     */

    async function submitForm() {

        const valid = await validateForm()

        if (!valid) {

            return false

        }

        submitLoading.value = true

        try {

            const payload = {

                ...formData

            }

            if (isEditMode()) {

                await updateApi(payload)

                ElMessage.success('修改成功')

            } else {

                await addApi(payload)

                ElMessage.success('新增成功')

            }

            return true

        } finally {

            submitLoading.value = false

        }

    }



/**
 * ==========================================================
 * AI Replace Guide
 * ==========================================================
 *
 * 根据业务可扩展：
 *
 * beforeSubmit()
 *
 * transformData()
 *
 * afterSubmit()
 *
 * uploadFiles()
 *
 * saveDraft()
 *
 * submitApprove()
 *
 * 推荐：
 *
 * Hook 保持统一入口：
 *
 * submitForm()
 *
 */
    /**
     * ==========================================================
     * Before Load
     * ==========================================================
     *
     * 获取详情前扩展点
     *
     * AI Replace:
     *
     * 可用于：
     * - 参数转换
     * - Loading
     * - 权限判断
     *
     */

    async function beforeLoad() {

        return true

    }



    /**
     * ==========================================================
     * After Load
     * ==========================================================
     *
     * 获取详情后扩展点
     *
     * AI Replace:
     *
     * 可用于：
     * - 数据格式转换
     * - 初始化附件
     * - 初始化子表
     * - 初始化字典
     *
     */

    async function afterLoad(data) {

        return data

    }



    /**
     * ==========================================================
     * Before Submit
     * ==========================================================
     *
     * 保存前扩展点
     *
     * AI Replace:
     *
     * 可用于：
     * - 数据格式转换
     * - 字段过滤
     * - 参数拼装
     * *
     */

    async function beforeSubmit(data) {

        return data

    }



    /**
     * ==========================================================
     * After Submit
     * ==========================================================
     *
     * 保存成功后扩展点
     *
     * AI Replace:
     *
     * 可用于：
     * - 上传附件
     * - 保存子表
     * - 发送通知
     * - 刷新缓存
     *
     */

    async function afterSubmit() {

        return true

    }



    /**
     * ==========================================================
     * Extension Point
     * ==========================================================
     *
     * 推荐新增：
     *
     * uploadFiles()
     *
     * saveDraft()
     *
     * submitApprove()
     *
     * validateBusiness()
     *
     * loadDict()
     *
     * loadOptions()
     *
     * 但不要修改：
     *
     * submitForm()
     *
     * 统一保持唯一保存入口。
     *
     */



    /**
     * ==========================================================
     * Hook Return
     * ==========================================================
     */

    return {

        initForm,

        resetForm,

        loadDetail,

        validateForm,

        submitForm,

        beforeLoad,

        afterLoad,

        beforeSubmit,

        afterSubmit

    }
}

/**
 * ============================================================
 * AFES Hook Rules
 * ============================================================
 *
 * useForm.js 负责：
 *
 * ✓ 表单初始化
 * ✓ 默认值初始化
 * ✓ 获取详情
 * ✓ 表单校验
 * ✓ 保存提交
 * ✓ Loading 状态
 * ✓ 数据回填
 *
 * ------------------------------------------------------------
 *
 * useForm.js 不负责：
 *
 * × 页面布局
 * × Element Plus 组件渲染
 * × Router 跳转
 * × 页面标题
 * × Permission 控制
 * × CSS
 * × Table 逻辑
 *
 * ============================================================
 */

/**
 * ============================================================
 * AI Replace Guide
 * ============================================================
 *
 * 生成业务代码时，应替换：
 *
 * ------------------------------------------------------------
 * ① Demo
 *
 * Demo
 *
 * ↓
 *
 * User
 *
 * Product
 *
 * Order
 *
 * Config
 *
 * ------------------------------------------------------------
 * ② defaultForm
 *
 * 根据业务字段维护：
 *
 * {
 *   id: undefined,
 *   userName: '',
 *   nickName: '',
 *   status: '0'
 * }
 *
 * ------------------------------------------------------------
 * ③ API
 *
 * getDemo
 *
 * addDemo
 *
 * updateDemo
 *
 * ↓
 *
 * getUser
 *
 * addUser
 *
 * updateUser
 *
 * ------------------------------------------------------------
 * ④ 扩展点
 *
 * beforeLoad()
 *
 * afterLoad()
 *
 * beforeSubmit()
 *
 * afterSubmit()
 *
 * 可按业务实现。
 *
 * 推荐：
 *
 * 保持 submitForm()
 * 为唯一保存入口。
 *
 * ============================================================
 */

/**
 * ============================================================
 * Recommended Extensions
 * ============================================================
 *
 * 对于复杂业务，可新增：
 *
 * loadDict()
 *
 * loadOptions()
 *
 * loadAttachment()
 *
 * uploadAttachment()
 *
 * saveDraft()
 *
 * submitApprove()
 *
 * revoke()
 *
 * publish()
 *
 * syncData()
 *
 * ------------------------------------------------------------
 *
 * 原则：
 *
 * 一个方法
 *
 * 一个职责
 *
 * 不要让 submitForm()
 * 承担所有业务逻辑。
 *
 * ============================================================
 */

/**
 * ============================================================
 * Checklist
 * ============================================================
 *
 * □ Vue3 Composition API
 *
 * □ Hook 单一职责
 *
 * □ 默认值完整
 *
 * □ 编辑回显正常
 *
 * □ 表单校验正常
 *
 * □ Loading 正常
 *
 * □ 新增正常
 *
 * □ 编辑正常
 *
 * □ Hook 无 UI
 *
 * □ Hook 无 CSS
 *
 * □ Hook 无 Router
 *
 * □ Hook 无页面布局
 *
 * □ Hook 无 console.log
 *
 * □ Hook 无 debugger
 *
 * □ Hook 无废弃代码
 *
 * □ Import 完整
 *
 * □ 符合 AFES 全部规范
 *
 * ============================================================
 */

/**
 * ============================================================
 * Template Goal
 * ============================================================
 *
 * useForm.js 的目标：
 *
 * 1. 页面只负责展示（View）
 *
 * 2. Hook 负责业务逻辑（Logic）
 *
 * 3. API 负责数据请求（Service）
 *
 * 保持 View / Logic / Service 三层职责清晰。
 *
 * AI 仅需替换：
 *
 * - 字段
 * - API
 * - 默认值
 * - 校验规则
 *
 * 即可快速生成企业级业务表单页面。
 *
 * ============================================================
 */
