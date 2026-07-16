<template>
  <!--
    ============================================================
    AFES DataTable Template
    ============================================================

    Component:

    DataTable


    Responsibility:

    ✓ Table Rendering
    ✓ Column Rendering
    ✓ Loading
    ✓ Empty State
    ✓ Selection
    ✓ Index
    ✓ Slot Extension


    NOT Responsibility:

    × API Request
    × Data Fetch
    × Router
    × Permission
    × Business Logic


    ============================================================
  -->


  <div class="data-table">


    <!--
      ==========================================================
      Table
      ==========================================================
    -->


    <el-table
        v-loading="loading"
        :data="data"
        :height="height"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >


      <!--
        ========================================================
        Selection Column
        ========================================================
      -->


      <el-table-column

          v-if="showSelection"

          type="selection"

          width="55"

          align="center"

      />



      <!--
        ========================================================
        Index Column
        ========================================================
      -->


      <el-table-column

          v-if="showIndex"

          type="index"

          label="序号"

          width="60"

          align="center"

      />



      <!--
        ========================================================
        Dynamic Columns
        ========================================================
      -->


      <el-table-column

          v-for="column in columns"

          :key="column.prop"

          :label="column.label"

          :prop="column.prop"

          :width="column.width"

          :min-width="column.minWidth"

          :align="column.align || 'center'"

          :fixed="column.fixed"


      >


        <template #default="scope">


          <!--

            Column Slot:

            #status

            #name


          -->


          <slot

              v-if="column.slot"

              :name="column.slot"

              v-bind="scope"

          />



          <!--
            Default Rendering
          -->


          <span v-else>

            {{ scope.row[column.prop] }}

          </span>


        </template>


      </el-table-column>



      <!--
        ========================================================
        Operation Column
        ========================================================
      -->


      <el-table-column

          v-if="$slots.operation"

          label="操作"

          fixed="right"

          width="180"

          align="center"

      >


        <template #default="scope">


          <slot

              name="operation"

              v-bind="scope"

          />


        </template>


      </el-table-column>



      <!--
        ========================================================
        Empty
        ========================================================
      -->


      <template #empty>


        <slot name="empty">


          <el-empty
              description="暂无数据"
          />


        </slot>


      </template>


    </el-table>



    <!--
      ==========================================================
      Pagination
      ==========================================================
    -->


    <div

        v-if="pagination"

        class="data-table__pagination"

    >


      <el-pagination

          background

          layout="total, sizes, prev, pager, next, jumper"

          :current-page="pagination.pageNum"

          :page-size="pagination.pageSize"

          :total="pagination.total"

          @current-change="handlePageChange"

          @size-change="handleSizeChange"

      />


    </div>


  </div>


</template>



<script setup name="DataTable">


/**
 * ============================================================
 * Props
 * ============================================================
 */


defineProps({


  /**
   * Table Data
   */

  data: {

    type: Array,

    default: () => []

  },


  /**
   * Loading
   */

  loading: {

    type: Boolean,

    default: false

  },


  /**
   * Column Config
   */

  columns: {

    type: Array,

    default: () => []

  },


  /**
   * Table Height
   */

  height: {

    type: [String, Number],

    default: undefined

  },


  /**
   * Selection

   */

  showSelection: {

    type: Boolean,

    default: false

  },


  /**
   * Index

   */

  showIndex: {

    type: Boolean,

    default: false

  },


  /**
   * Pagination

   */

  pagination: {

    type: Object,

    default: null

  }


})
/**
 * ============================================================
 * Emits
 * ============================================================
 */


const emit = defineEmits([


  /**
   * Selection Change
   */

  'selection-change',



  /**
   * Page Change
   */

  'page-change',



  /**
   * Size Change
   */

  'size-change'


])



/**
 * ============================================================
 * Selection
 * ============================================================
 */


function handleSelectionChange(selection) {


  emit(

      'selection-change',

      selection

  )


}



/**
 * ============================================================
 * Pagination
 * ============================================================
 */


function handlePageChange(pageNum) {


  emit(

      'page-change',

      pageNum

  )


}



function handleSizeChange(pageSize) {


  emit(

      'size-change',

      pageSize

  )


}



/**
 * ============================================================
 * Expose
 * ============================================================
 *
 * 保留扩展能力。
 *
 * 父组件可以获取：
 *
 * tableRef.value
 *
 * ============================================================
 */


defineExpose({

  selectionChange:

  handleSelectionChange

})


</script>
<style scoped>
/* ============================================================
   AFES DataTable Style
   ============================================================ */


/* ==========================================
   Container
   ========================================== */

.data-table {

  width: 100%;

}


/* ==========================================
   Table
   ========================================== */

:deep(.el-table) {

  width: 100%;

  border-radius: 6px;

}


/* ==========================================
   Header
   ========================================== */

:deep(.el-table__header-wrapper th) {

  font-weight: 600;

}


/* ==========================================
   Cell
   ========================================== */

:deep(.el-table__cell) {

  padding: 10px 0;

}



/* ==========================================
   Operation
   ========================================== */

:deep(.el-table .el-button + .el-button) {

  margin-left: 8px;

}



/* ==========================================
   Pagination
   ========================================== */


.data-table__pagination {

  display: flex;

  justify-content: flex-end;

  margin-top: 20px;

}



/* ==========================================
   Empty
   ========================================== */


:deep(.el-empty) {

  padding: 30px 0;

}



/* ==========================================
   Responsive
   ========================================== */


@media (max-width: 768px) {


  .data-table__pagination {


    justify-content: center;


  }


}



/* ==========================================
   Dark Mode
   ========================================== */


html.dark .data-table {


  background: var(--el-bg-color);


}



/* ==========================================
   AFES Style Rules
   ========================================== */

/*

允许：

✓ 表格布局调整

✓ 分页布局调整

✓ Element Plus 样式微调



禁止：

× 固定业务颜色

× 页面样式污染

× 强绑定字段样式



*/


/* ==========================================
   AI Replace Rules
   ========================================== */

/*

AI 生成业务表格：

只修改：

columns

slots

operation



不修改：

table structure

pagination

loading

selection



*/


</style>
/**
* ============================================================
* AFES DataTable Component Rules
* ============================================================
*
* DataTable 是企业后台列表基础组件。
*
* 目标：
*
* 统一列表开发模式。
*
* ============================================================
*/


/*

组件职责：

✓ 表格展示

✓ 列配置

✓ Loading

✓ Empty

✓ Selection

✓ Pagination

✓ Slot 扩展


*/


/*

组件禁止：

× API 请求

× 数据查询

× 数据转换

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

Props 表达：

组件能力。


推荐：

data

loading

columns

pagination

showSelection

showIndex



禁止：

业务字段进入组件。



错误：

userList

orderList

productData



正确：

data

columns


*/


/**
* ============================================================
* Column Rules
* ============================================================
*/


/*

Column 配置负责：

字段展示。


支持：

label

prop

width

minWidth

align

fixed

slot



示例：

{
label:'用户名',
prop:'userName',
slot:'name'
}



*/


/**
* ============================================================
* Slot Rules
* ============================================================
*/


/*

复杂展示必须使用 Slot。


例如：


状态：

#status


操作：

#operation



禁止：

在组件内部判断业务类型。


*/


/**
* ============================================================
* Emit Rules
* ============================================================
*/


/*

Emit 只描述用户行为。


允许：

selection-change

page-change

size-change



禁止：

refresh-user

delete-order

approve-process



*/


/**
* ============================================================
* AI Replace Rules
* ============================================================
*/


/*

AI 生成业务列表：

保留：

DataTable

↓

Table

↓

Pagination



替换：

columns

slots

operations



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

□ Table 完整

□ Column 完整

□ Slot 完整

□ Loading

□ Empty

□ Selection

□ Pagination

□ Responsive

□ Dark Mode

□ 无 API

□ 无 Router

□ 无业务状态

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

DataTable Template 目标：


统一企业后台列表组件。


通过：

DataTable

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

标准列表组件



*/


/**
* ============================================================
* End
* ============================================================
*/
