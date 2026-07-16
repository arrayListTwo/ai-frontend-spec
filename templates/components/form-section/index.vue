<template>

  <!--
    ============================================================
    AFES FormSection Template
    ============================================================

    Component:

    FormSection


    Responsibility:

    ✓ Form Area Division
    ✓ Title Display
    ✓ Description Display
    ✓ Extra Action Area
    ✓ Collapse Control
    ✓ Slot Extension


    NOT Responsibility:

    × Form Data
    × Form Validate
    × Submit
    × API Request
    × Router
    × Store


    ============================================================
  -->


  <section

      class="form-section"

      :class="{

      'is-border': border,

      'is-collapse': collapsible

    }"

  >



    <!--
      ==========================================================
      Header
      ==========================================================
    -->


    <div

        class="form-section__header"

        @click="handleHeaderClick"

    >



      <div class="form-section__title-area">


        <!--
          Title Slot

          Priority:

          slot title

          ↓

          props title

        -->


        <div class="form-section__title">


          <slot name="title">


            {{ title }}


          </slot>


        </div>



        <!--
          Description Slot

        -->


        <div

            v-if="description"

            class="form-section__description"

        >


          <slot name="description">


            {{ description }}


          </slot>


        </div>


      </div>




      <!--
        Extra Slot

      -->


      <div

          class="form-section__extra"

      >


        <slot name="extra" />


      </div>




      <!--
        Collapse Icon

      -->


      <div

          v-if="collapsible"

          class="form-section__collapse"

      >


        <el-icon>


          <ArrowDown

              :class="{

              rotate: expanded

            }"

          />


        </el-icon>


      </div>



    </div>





    <!--
      ==========================================================
      Content

      Default Slot

      ==========================================================
    -->


    <el-collapse-transition>


      <div

          v-show="expanded"

          class="form-section__content"

      >


        <slot />


      </div>


    </el-collapse-transition>



  </section>


</template>




<script setup name="FormSection">


import {


  ref,

  computed


} from 'vue'



import {


  ArrowDown


} from '@element-plus/icons-vue'



/**
 * ============================================================
 * Props
 * ============================================================
 */


const props = defineProps({



  /**
   * Section Title

   */


  title: {


    type: String,


    default: ''

  },



  /**
   * Description

   */


  description: {


    type: String,


    default: ''

  },



  /**
   * Border

   */


  border: {


    type: Boolean,


    default: true

  },



  /**
   * Collapse

   */


  collapsible: {


    type: Boolean,


    default: false

  },



  /**
   * Default Expand

   */


  defaultExpand: {


    type: Boolean,


    default: true

  },



  /**
   * Content Spacing

   */


  spacing: {


    type: String,


    default: '20px'

  }



})

/**
 * ============================================================
 * Emits
 * ============================================================
 */


const emit = defineEmits([


  /**
   * Collapse Change
   */

  'expand-change'


])



/**
 * ============================================================
 * Expand State
 * ============================================================
 */


const expanded = ref(

    props.defaultExpand

)



/**
 * ============================================================
 * Dynamic Style
 * ============================================================
 */


const contentStyle = computed(() => {


  return {


    paddingTop: props.spacing,


    paddingBottom: props.spacing


  }


})



/**
 * ============================================================
 * Header Click
 * ============================================================
 *
 * Only works when:
 *
 * collapsible=true
 *
 */


function handleHeaderClick() {


  if (!props.collapsible) {


    return


  }



  expanded.value = !expanded.value



  emit(

      'expand-change',

      expanded.value

  )


}



/**
 * ============================================================
 * Expose
 * ============================================================
 *
 * Parent can control section state.
 *
 * Example:
 *
 * sectionRef.value.expand()
 *
 */


function expand() {


  expanded.value = true


}



function collapse() {


  expanded.value = false


}



function toggle() {


  expanded.value = !expanded.value


}



defineExpose({


  expand,


  collapse,


  toggle


})
</script>

<style scoped>

/* ============================================================
   AFES FormSection Style
   ============================================================ */


/* ==========================================
   Container
   ========================================== */


.form-section {


  width: 100%;


}



/* ==========================================
   Border Mode
   ========================================== */


.form-section.is-border {


  border: 1px solid var(--el-border-color);


  border-radius: 8px;


  padding: 20px;


}



/* ==========================================
   Header
   ========================================== */


.form-section__header {


  display: flex;


  align-items: flex-start;


  justify-content: space-between;


  gap: 16px;



  min-height: 40px;


}



.form-section.is-collapse
    .form-section__header {


  cursor: pointer;


}



/* ==========================================
   Title Area
   ========================================== */


.form-section__title-area {


  flex: 1;


}



.form-section__title {


  font-size: 16px;


  font-weight: 600;


  line-height: 24px;


  color: var(--el-text-color-primary);


}



.form-section__description {


  margin-top: 6px;


  font-size: 13px;


  line-height: 20px;


  color: var(--el-text-color-secondary);


}



/* ==========================================
   Extra
   ========================================== */


.form-section__extra {


  display: flex;


  align-items: center;


}



/* ==========================================
   Collapse Icon
   ========================================== */


.form-section__collapse {


  display: flex;


  align-items: center;


}



.form-section__collapse .el-icon {


  transition: transform .3s;


}



.form-section__collapse .rotate {


  transform: rotate(180deg);


}



/* ==========================================
   Content
   ========================================== */


.form-section__content {


  padding-top: v-bind(spacing);


}



/* ==========================================
   Nested Form
   ========================================== */


.form-section__content :deep(.el-form-item:last-child) {


  margin-bottom: 0;


}



/* ==========================================
   Responsive
   ========================================== */


@media (max-width: 768px) {


.form-section.is-border {


    padding: 16px;


  }



.form-section__header {


    flex-wrap: wrap;


  }



.form-section__extra {


    width: 100%;


  }


}



/* ==========================================
   Dark Mode
   ========================================== */


html.dark .form-section {


  border-color: var(--el-border-color);


}



/* ==========================================
   AFES Style Rules
   ========================================== */


/*

允许：

✓ Section Layout

✓ Header Layout

✓ Title Style

✓ Description Style

✓ Collapse Animation

✓ Responsive



禁止：

× 页面级样式

× 业务颜色

× 固定字段样式

× 表单业务逻辑



*/


</style>

/**
 * ============================================================
 * AFES FormSection Component Rules
 * ============================================================
 *
 * FormSection 是复杂表单结构组件。
 *
 * 核心目标：
 *
 * 通过区域划分提升复杂表单可读性。
 *
 * ============================================================
 */


/*

组件职责：

✓ Section 分组

✓ Title 展示

✓ Description 展示

✓ Extra 扩展

✓ Collapse 控制

✓ Slot 承载



*/


/*

组件禁止：

× 表单数据管理

× 表单提交

× 表单校验

× API 请求

× Store

× Router

× 业务状态



*/


/**
 * ============================================================
 * Props Rules
 * ============================================================
 */


/*

Props 描述组件能力。



推荐：


title

description

border

collapsible

defaultExpand

spacing



禁止：


userName

customerId

orderId

employeeInfo



业务字段应该属于页面。



*/


/**
 * ============================================================
 * Slot Rules
 * ============================================================
 */


/*

default:


业务表单内容。



title:


自定义标题。



description:


自定义描述。



extra:


右侧操作区域。



*/


/**
 * ============================================================
 * Layout Rules
 * ============================================================
 */


/*

FormSection 控制：

区域结构。



FormItem 控制：

字段布局。



错误：


FormSection

    用户名输入框

    手机号输入框



正确：


FormSection

    el-form-item

    el-form-item



*/


/**
 * ============================================================
 * Collapse Rules
 * ============================================================
 */


/*

collapsible=true 时：


支持：


展开

收起



父组件可以：


expand()

collapse()

toggle()



*/


/**
 * ============================================================
 * AI Replace Rules
 * ============================================================
 */


/*

AI 生成复杂表单：


保持：


FormSection


↓

Header


↓

Slot



替换：


Section Name


Description


Form Items



*/


/**
 * ============================================================
 * Combination Rules
 * ============================================================
 */


/*

FormSection 可以组合：


FormSection

+

DataTable



FormSection

+

UploadPanel



FormSection

+

Custom Component



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

□ Props

□ Slots

□ Title

□ Description

□ Extra

□ Collapse

□ Expand Control

□ Responsive

□ Scoped Style

□ 无 API

□ 无 Submit

□ 无 Validate

□ 无 Store

□ 无 Router

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

FormSection Template 目标：


解决企业后台复杂表单维护问题。


通过：


FormSection

+

业务 FormItem

+

其他组件



实现：


复杂需求


↓

结构分析


↓

Section 拆分


↓

标准表单页面



*/


/**
 * ============================================================
 * End
 * ============================================================
 */

