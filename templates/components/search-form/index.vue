<template>
  <!--
    ============================================================
    AFES SearchForm Template
    ============================================================

    Component:
    SearchForm

    Responsibility:

    ✓ Query Condition Layout
    ✓ Search Trigger
    ✓ Reset Trigger
    ✓ Expand / Collapse
    ✓ Slot Extension


    NOT Responsibility:

    × API Request
    × Table Refresh
    × Router
    × Permission
    × Business State


    ============================================================
  -->


  <el-form
      ref="formRef"
      :model="modelValue"
      :label-width="labelWidth"
      class="search-form"
      @keyup.enter="handleSearch"
  >


    <!--
      ==========================================================
      Custom Prepend Slot
      ==========================================================

      Usage:

      <template #prepend>
        ...
      </template>

    -->

    <slot name="prepend" />



    <el-row
        :gutter="20"
    >


      <!--
        ========================================================
        Default Query Fields

        Business Page Inject:

        Input

        Select

        DatePicker

        TreeSelect


      -->


      <el-col
          v-for="(item, index) in displayItems"
          :key="index"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
      >


        <slot
            :name="item.slot || 'default'"
            :item="item"
        />


      </el-col>



      <!--
        ========================================================
        Action Area
        ========================================================
      -->


      <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          class="search-form__actions"
      >


        <slot name="actions">


          <el-button
              type="primary"
              :loading="loading"
              @click="handleSearch"
          >

            查询

          </el-button>



          <el-button
              @click="handleReset"
          >

            重置

          </el-button>



          <el-button
              v-if="showExpand"
              link
              type="primary"
              @click="toggleExpand"
          >

            {{ collapsed ? '展开' : '收起' }}


          </el-button>


        </slot>


      </el-col>


    </el-row>



    <!--
      ========================================================
      Append Slot
      ========================================================
    -->


    <slot name="append" />


  </el-form>


</template>



<script setup name="SearchForm">


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
   * Query Data
   */

  modelValue: {

    type: Object,

    default: () => ({})

  },


  /**
   * Loading
   */

  loading: {

    type: Boolean,

    default: false

  },


  /**
   * Collapse
   */

  collapsed: {

    type: Boolean,

    default: true

  },


  /**
   * Field Config
   *
   * AI Replace:
   *
   * User Search
   *
   * Order Search
   *
   */

  items: {

    type: Array,

    default: () => []

  },


  /**
   * Column
   */

  columns: {

    type: Number,

    default: 4

  },


  /**
   * Label Width
   */

  labelWidth: {

    type: String,

    default: '80px'

  },


  /**
   * Expand Button
   */

  showExpand: {

    type: Boolean,

    default: true

  }


})


/**
 * ============================================================
 * Emits
 * ============================================================
 */


const emit = defineEmits([


  'update:modelValue',


  'search',


  'reset',


  'expand-change'


])



/**
 * ============================================================
 * State
 * ============================================================
 */


const formRef = ref()



const innerCollapsed = ref(
    props.collapsed
)
/**
 * ============================================================
 * Computed
 * ============================================================
 */


/**
 * Display Items
 *
 * 控制展开/收起显示字段
 *
 */

const displayItems = computed(() => {


  if (!props.showExpand) {


    return props.items


  }


  if (!innerCollapsed.value) {


    return props.items


  }


  return props.items.slice(
      0,
      props.columns
  )


})



/**
 * ============================================================
 * Expand
 * ============================================================
 */


function toggleExpand() {


  innerCollapsed.value =
      !innerCollapsed.value



  emit(

      'expand-change',

      innerCollapsed.value

  )


}



/**
 * ============================================================
 * Search
 * ============================================================
 */


function handleSearch() {


  emit(

      'search',

      props.modelValue

  )


}



/**
 * ============================================================
 * Reset
 * ============================================================
 *
 * Reset 只通知父组件。
 *
 * 不修改业务数据。
 *
 */


function handleReset() {


  emit(

      'reset'

  )


}


/**
 * ============================================================
 * Update Model
 * ============================================================
 *
 * 提供内部扩展能力。
 *
 * 如果未来增加：
 *
 * 内置输入组件
 *
 * 可以使用。
 *
 */


function updateModel(
    key,
    value
) {


  emit(

      'update:modelValue',

      {

        ...props.modelValue,

        [key]: value

      }

  )


}


/**
 * ============================================================
 * Expose
 * ============================================================
 *
 * 允许父组件调用：
 *
 * searchRef.value.reset()
 *
 */


defineExpose({

  search: handleSearch,

  reset: handleReset,

  formRef

})


</script>
<style scoped>
/* ============================================================
   AFES SearchForm Style
   ============================================================ */


/* ==========================================
   Container
   ========================================== */

.search-form {
  width: 100%;
  padding: 18px 20px;
  background: var(--el-bg-color);
  border-radius: 6px;
}


/* ==========================================
   Form Item
   ========================================== */

:deep(.el-form-item) {

  width: 100%;

  margin-bottom: 18px;

}


:deep(.el-form-item__content) {

  width: 100%;

}


/* ==========================================
   Input
   ========================================== */

:deep(.el-input),
:deep(.el-select),
:deep(.el-date-editor),
:deep(.el-tree-select),
:deep(.el-cascader) {

  width: 100%;

}


/* ==========================================
   Action Area
   ========================================== */

.search-form__actions {

  display: flex;

  align-items: center;

  justify-content: flex-start;

  min-height: 32px;

}


.search-form__actions
.el-button + .el-button {

  margin-left: 10px;

}



/* ==========================================
   Row
   ========================================== */


:deep(.el-row) {

  width: 100%;

}



/* ==========================================
   Responsive
   ========================================== */


/*

Desktop:

4 columns


Laptop:

3 columns


Tablet:

2 columns


Mobile:

1 column

*/


@media (max-width: 768px) {


  .search-form {

    padding: 16px;

  }


  .search-form__actions {

    justify-content: flex-start;

  }


}



/* ==========================================
   Dark Mode
   ========================================== */


html.dark .search-form {


  background: var(--el-bg-color);

}



/* ==========================================
   AI Replace Guide
   ========================================== */

/*

SearchForm 样式禁止：

× 固定宽度

× 页面级 margin

× 业务颜色

× 业务 class


允许：

✓ 布局调整

✓ 响应式

✓ Element Plus 覆盖


*/


/* ==========================================
   AFES Style Rules
   ========================================== */

/*

保持：

✓ Scoped Style

✓ CSS Variables

✓ Flex Layout

✓ Responsive


禁止：

× !important

× inline style

× 深度修改 Element Plus 核心行为

× 业务样式混入组件


*/


</style>
/**
* ============================================================
* AFES SearchForm Component Rules
* ============================================================
*
* SearchForm 是查询区域基础组件。
*
* 目标：
*
* 统一企业后台查询交互。
*
*
* ============================================================
*/


/*

组件职责：

✓ 查询条件展示

✓ 查询事件触发

✓ 重置事件触发

✓ 展开收起控制

✓ Slot 扩展


*/


/*

组件禁止：

× API Request

× Table 操作

× Router 跳转

× Permission 判断

× Store 修改

× Message 提示

× Confirm 弹窗


*/


/**
* ============================================================
* Props Rules
* ============================================================
*/


/*

Props 应描述：

组件能力。

例如：

loading

items

columns

showExpand


禁止：

业务属性进入组件。


错误：

userStatusOptions

orderStatusList

customerLevelList


正确：

由页面通过 Slot 或配置传入。


*/


/**
* ============================================================
* Emit Rules
* ============================================================
*/


/*

Emit 只表达事件：

search

reset

expand-change


禁止：

update-table

refresh-page

load-user


组件不知道外部业务。


*/


/**
* ============================================================
* Slot Rules
* ============================================================
*/


/*

推荐：

简单查询：

default


复杂查询：

actions


扩展：

prepend

append


*/


/**
* ============================================================
* AI Replace Rules
* ============================================================
*/


/*

AI 生成业务查询组件：

保留：

SearchForm

↓

Props

↓

Emit

↓

Slot

↓

Layout


替换：

字段

字典

Placeholder

默认值


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

□ Props 完整

□ Emits 完整

□ Slots 完整

□ Responsive

□ Dark Mode

□ Scoped Style

□ 无 API

□ 无 Router

□ 无业务逻辑

□ 无 console.log

□ 无 debugger

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

SearchForm Template 目标：


通用查询组件

+

AI Prompt

+

Replace Guide

+

Example


形成：

AI 可理解

AI 可生成

AI 可维护


的企业级查询组件模板。


*/


/**
* ============================================================
* End
* ============================================================
*/
