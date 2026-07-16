<template>
  <!--
    ============================================================
    AFES EditDialog Template
    ============================================================

    Component:

    EditDialog


    Responsibility:

    ✓ Dialog Rendering
    ✓ Form Rendering
    ✓ Form Validation
    ✓ Submit Event
    ✓ Cancel Event
    ✓ Loading State
    ✓ Slot Extension


    NOT Responsibility:

    × API Request
    × Data Save
    × Refresh List
    × Router
    × Permission
    × Business Logic


    ============================================================
  -->


  <el-dialog

      :model-value="modelValue"

      :title="title"

      :width="width"

      destroy-on-close

      @close="handleCancel"

  >


    <!--
      ==========================================================
      Form
      ==========================================================
    -->


    <el-form

        ref="formRef"

        :model="formData"

        :rules="rules"

        label-width="100px"

        :disabled="isViewMode"

    >


      <!--
        ========================================================
        Default Form Slot

        Business Page Inject:

        Input

        Select

        DatePicker

        Upload

        TreeSelect

      -->


      <slot />


    </el-form>



    <!--
      ==========================================================
      Footer
      ==========================================================
    -->


    <template #footer>


      <slot name="footer">


        <el-button

            @click="handleCancel"

        >

          取消

        </el-button>



        <el-button

            v-if="!isViewMode"

            type="primary"

            :loading="loading"

            @click="handleSubmit"

        >

          确定

        </el-button>


      </slot>


    </template>


  </el-dialog>


</template>



<script setup name="EditDialog">


import {

  computed,

  ref

} from 'vue'



/**
 * ============================================================
 * Props
 * ============================================================
 */


const props = defineProps({


  /**
   * Dialog Visible
   */

  modelValue: {

    type: Boolean,

    default: false

  },


  /**
   * Title
   */

  title: {

    type: String,

    default: ''

  },


  /**
   * Form Data
   */

  formData: {

    type: Object,

    default: () => ({})

  },


  /**
   * Form Rules
   */

  rules: {

    type: Object,

    default: () => ({})

  },


  /**
   * Submit Loading
   */

  loading: {

    type: Boolean,

    default: false

  },


  /**
   * Dialog Width
   */

  width: {

    type: String,

    default: '600px'

  },


  /**
   * Mode

   *

   * add

   * edit

   * view

   */

  mode: {

    type: String,

    default: 'add'

  }


})
/**
 * ============================================================
 * Emits
 * ============================================================
 */


const emit = defineEmits([


  /**
   * Dialog Visible

   */

  'update:modelValue',



  /**
   * Submit

   */

  'submit',



  /**
   * Cancel

   */

  'cancel'


])



/**
 * ============================================================
 * Form Ref
 * ============================================================
 */


const formRef = ref()



/**
 * ============================================================
 * Mode
 * ============================================================
 *
 * add
 *
 * edit
 *
 * view
 *
 */


const isViewMode = computed(() => {


  return props.mode === 'view'


})



/**
 * ============================================================
 * Submit
 * ============================================================
 *
 * Flow:
 *
 * Click Submit
 *
 * ↓
 *
 * Validate
 *
 * ↓
 *
 * Emit Submit
 *
 * ↓
 *
 * Parent Handle API
 *
 */


async function handleSubmit() {


  if (!formRef.value) {


    return


  }



  await formRef.value.validate(
      (valid) => {


        if (!valid) {


          return


        }



        emit(

            'submit',

            props.formData

        )


      }

  )


}



/**
 * ============================================================
 * Cancel
 * ============================================================
 */


function handleCancel() {


  emit(

      'cancel'

  )



  emit(

      'update:modelValue',

      false

  )


}



/**
 * ============================================================
 * Expose
 * ============================================================
 *
 * Parent Usage:
 *
 * dialogRef.value.validate()
 *
 */


defineExpose({

  validate() {


    return formRef.value?.validate()

  },


  resetFields() {


    return formRef.value?.resetFields()

  },


  formRef


})


</script>
<style scoped>
/* ============================================================
   AFES EditDialog Style
   ============================================================ */


/* ==========================================
   Dialog
   ========================================== */


:deep(.el-dialog) {

  border-radius: 8px;

}



/* ==========================================
   Header
   ========================================== */


:deep(.el-dialog__header) {

  margin-right: 0;

  padding-bottom: 16px;

}



/* ==========================================
   Body
   ========================================== */


:deep(.el-dialog__body) {

  padding-top: 10px;

}



/* ==========================================
   Form
   ========================================== */


:deep(.el-form-item) {

  margin-bottom: 18px;

}


:deep(.el-input),
:deep(.el-select),
:deep(.el-date-editor),
:deep(.el-tree-select),
:deep(.el-input-number) {

  width: 100%;

}



/* ==========================================
   Footer
   ========================================== */


:deep(.el-dialog__footer) {

  padding-top: 10px;

}



:deep(.el-dialog__footer .el-button + .el-button) {

  margin-left: 12px;

}



/* ==========================================
   Responsive
   ========================================== */


@media (max-width: 768px) {


  :deep(.el-dialog) {

    width: calc(100% - 32px) !important;

  }



}



/* ==========================================
   Dark Mode
   ========================================== */


html.dark .edit-dialog {


  background: var(--el-bg-color);


}



/* ==========================================
   AFES Style Rules
   ========================================== */


/*

允许：

✓ Dialog 布局

✓ Form 布局

✓ Responsive

✓ Element Plus 样式调整



禁止：

× 业务颜色

× 页面样式

× 固定字段样式

× 强业务 class



*/


/* ==========================================
   AI Replace Rules
   ========================================== */


/*

AI 生成业务弹窗：

只替换：

title

fields

rules

slots



保持：

Dialog

Form

Submit

Cancel



*/


</style>
/**
* ============================================================
* AFES EditDialog Component Rules
* ============================================================
*
* EditDialog 是企业后台表单弹窗基础组件。
*
* 目标：
*
* 统一新增、编辑、查看交互。
*
* ============================================================
*/


/*

组件职责：

✓ Dialog

✓ Form

✓ Validation

✓ Submit Event

✓ Cancel Event

✓ Loading

✓ Slot Extension



*/


/*

组件禁止：

× API 请求

× 保存数据

× 刷新列表

× Router

× Store

× Permission

× Message

× Confirm



*/


/**
* ============================================================
* Props Rules
* ============================================================
*/


/*

Props 描述：

组件能力。


推荐：

modelValue

title

formData

rules

loading

mode



禁止：

业务字段进入 Props。



错误：

userName

orderId

productId



正确：

formData



*/


/**
* ============================================================
* Mode Rules
* ============================================================
*/


/*

add:

新增模式


edit:

编辑模式


view:

查看模式



组件只控制：

是否可编辑。



*/


/**
* ============================================================
* Form Rules
* ============================================================
*/


/*

表单字段由父组件提供。



组件负责：

validate()



组件不负责：

字段定义。



*/


/**
* ============================================================
* Emit Rules
* ============================================================
*/


/*

允许：

update:modelValue

submit

cancel



禁止：

save-user

refresh-table

delete-order



*/


/**
* ============================================================
* Slot Rules
* ============================================================
*/


/*

default:

业务表单字段



footer:

自定义按钮



title:

自定义标题



*/


/**
* ============================================================
* Submit Flow Rules
* ============================================================
*/


/*

正确流程：


用户点击提交


↓

EditDialog validate


↓

emit submit


↓

父组件调用 API


↓

关闭弹窗



*/


/*

错误流程：


EditDialog


↓

axios.post()


↓

refresh table



*/


/**
* ============================================================
* AI Replace Rules
* ============================================================
*/


/*

AI 生成业务弹窗：


保留：

EditDialog

↓

Dialog

↓

Form

↓

Submit



替换：


字段

校验规则

标题

Slot



*/


/**
* ============================================================
* Quality Checklist
* ============================================================
*/


/*

生成完成检查：


□ Vue3

□ Composition API

□ script setup

□ Element Plus

□ Dialog

□ Form

□ Rules

□ Submit

□ Cancel

□ Loading

□ Mode

□ Slot

□ Responsive

□ Dark Mode

□ Scoped Style

□ 无 API

□ 无 Router

□ 无 Store

□ 无业务逻辑

□ 可复用

□ AI Friendly

□ 符合 AFES



*/


/**
* ============================================================
* Template Goal
* ============================================================
*/


/*

EditDialog Template 目标：


统一企业后台新增 / 编辑 / 查看弹窗。


通过：


EditDialog

+

Prompt

+

Replace Guide

+

Example



实现：


业务描述


↓

AI 生成


↓

标准弹窗组件



*/


/**
* ============================================================
* End
* ============================================================
*/
