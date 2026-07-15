<template>
  <div class="app-container">

    <!--
      ============================================================
      AFES Form Page Template
      index.vue

      Responsibility:
      ✓ Page Layout
      ✓ Form Container
      ✓ Form Submit
      ✓ Navigation

      Not Responsibility:
      × API
      × Complex Business Logic
      × Validation Detail
      × Data Processing

      ============================================================
    -->


    <!-- Page Header -->
    <el-card shadow="never">

      <template #header>

        <div class="page-header">

          <span>
            {{ pageTitle }}
          </span>

        </div>

      </template>


      <!--
        Form Area

        AI Replace:

        UserForm

        OrderForm

        ConfigForm

      -->

      <el-form
          ref="formRef"
          :model="formData"
          :rules="rules"
          label-width="120px"
      >


        <!--
          ========================================================
          Form Section

          Complex Form Recommend:

          components/
          ├── FormSection.vue

          Example:

          BaseInfoSection

          DetailInfoSection

          ExtendInfoSection

          ========================================================
        -->


        <el-row :gutter="20">


          <!-- Demo Field -->

          <el-col :span="12">


            <el-form-item
                label="名称"
                prop="name"
            >

              <el-input
                  v-model="formData.name"
                  placeholder="请输入名称"
              />

            </el-form-item>


          </el-col>


          <!-- Status -->

          <el-col :span="12">


            <el-form-item
                label="状态"
                prop="status"
            >

              <!--
                AI Replace:

                dict-select

                el-select

                el-radio-group

              -->


              <el-select
                  v-model="formData.status"
                  placeholder="请选择状态"
              >

                <el-option
                    label="正常"
                    value="0"
                />

                <el-option
                    label="停用"
                    value="1"
                />

              </el-select>


            </el-form-item>


          </el-col>


          <!-- Remark -->


          <el-col :span="24">


            <el-form-item
                label="备注"
                prop="remark"
            >

              <el-input
                  v-model="formData.remark"
                  type="textarea"
                  :rows="4"
                  placeholder="请输入备注"
              />


            </el-form-item>


          </el-col>


        </el-row>


      </el-form>



      <!-- Footer Actions -->

      <div class="form-footer">


        <el-button
            type="primary"
            :loading="submitLoading"
            @click="handleSubmit"
        >

          保存

        </el-button>



        <el-button
            @click="handleCancel"
        >

          取消

        </el-button>


      </div>


    </el-card>


  </div>
</template>


<script setup name="DemoForm">

import {
  ref,
  reactive,
  onMounted
} from 'vue'


import {
  useRouter,
  useRoute
} from 'vue-router'


/**
 * ============================================================
 * API
 * ============================================================
 *
 * AI Replace:
 *
 * getDemo
 * addDemo
 * updateDemo
 *
 */

import {
  getDemo,
  addDemo,
  updateDemo
} from './api'


/**
 * ============================================================
 * Hook
 * ============================================================
 *
 * AI Replace:
 *
 * useForm
 *
 */

import {
  useForm
} from './hooks/useForm'



const router = useRouter()

const route = useRoute()



/**
 * ============================================================
 * Page
 * ============================================================
 */

const pageTitle = ref('新增 Demo')



/**
 * ============================================================
 * Form
 * ============================================================
 */


const formRef = ref()



const formData = reactive({

  id: undefined,

  name: '',

  status: '0',

  remark: ''

})



/**
 * ============================================================
 * Rules
 * ============================================================
 */


const rules = reactive({

  name: [

    {
      required: true,

      message: '请输入名称',

      trigger: 'blur'

    }

  ]

})



/**
 * ============================================================
 * Loading
 * ============================================================
 */

const submitLoading = ref(false)
const {
  /**
   * Methods
   */
  initForm,
  loadDetail,
  submitForm,
  resetForm
} = useForm({
  formRef,
  formData,
  rules,
  submitLoading,
  getApi: getDemo,
  addApi: addDemo,
  updateApi: updateDemo
})

/**
 * ============================================================
 * Route
 * ============================================================
 */

const id = route.query.id

/**
 * ============================================================
 * Is Edit
 * ============================================================
 */

const isEdit = !!id

/**
 * ============================================================
 * Page Init
 * ============================================================
 */

onMounted(async () => {

  if (isEdit) {

    pageTitle.value = '编辑 Demo'

    await loadDetail(id)

  } else {

    pageTitle.value = '新增 Demo'

    initForm()

  }

})

/**
 * ============================================================
 * Submit
 * ============================================================
 */

async function handleSubmit() {

  const success = await submitForm()

  if (!success) {

    return

  }

  router.back()

}

/**
 * ============================================================
 * Reset
 * ============================================================
 *
 * 推荐：
 *
 * 新增：
 * 恢复默认值
 *
 * 编辑：
 * 恢复服务器数据
 *
 */

async function handleReset() {

  if (isEdit) {

    await loadDetail(id)

    return

  }

  resetForm()

}

/**
 * ============================================================
 * Cancel
 * ============================================================
 */

function handleCancel() {

  router.back()

}

/**
 * ============================================================
 * AI Replace Guide
 * ============================================================
 *
 * 页面初始化时：
 *
 * Demo
 * ↓
 * User
 *
 * Demo
 * ↓
 * Product
 *
 * Demo
 * ↓
 * Order
 *
 * 页面标题同步修改。
 *
 */
</script>
<style scoped>
/* ============================================================
   AFES Form Page Template
   index.vue
   ============================================================ */

/* ==========================================
   Page
   ========================================== */

.app-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ==========================================
   Header
   ========================================== */

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-header > span {
  font-size: 18px;
  font-weight: 600;
}

/* ==========================================
   Form
   ========================================== */

:deep(.el-form) {
  padding-top: 8px;
}

:deep(.el-form-item) {
  margin-bottom: 22px;
}

:deep(.el-input),
:deep(.el-select),
:deep(.el-date-editor),
:deep(.el-cascader),
:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-textarea) {
  width: 100%;
}

/* ==========================================
   Card
   ========================================== */

:deep(.el-card) {
  border-radius: 6px;
}

:deep(.el-card__header) {
  font-weight: 600;
}

:deep(.el-card__body) {
  padding-top: 20px;
}

/* ==========================================
   Footer
   ========================================== */

.form-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--el-border-color-light);
}

/* ==========================================
   Responsive
   ========================================== */

@media (max-width: 992px) {

  :deep(.el-col) {
    max-width: 100%;
    flex: 0 0 100%;
  }

}

@media (max-width: 768px) {

  .form-footer {
    justify-content: center;
    flex-wrap: wrap;
  }

  .form-footer .el-button {
    flex: 1;
  }

}

/* ==========================================
   Dark Mode
   ========================================== */

html.dark :deep(.el-card) {
  border-color: var(--el-border-color);
}

html.dark .form-footer {
  border-top-color: var(--el-border-color);
}

/* ==========================================
   Section
   ========================================== */

.section-title {
  margin-bottom: 16px;
  padding-left: 10px;
  border-left: 4px solid var(--el-color-primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
}

.section-divider {
  margin: 28px 0 20px;
}

/* ==========================================
   Upload
   ========================================== */

:deep(.el-upload) {
  width: 100%;
}

/* ==========================================
   AI Replace Guide
   ========================================== */

/*

复杂页面建议拆分：

components/

├── FormSection.vue
├── BaseInfoSection.vue
├── BusinessInfoSection.vue
├── ExtendInfoSection.vue
└── AttachmentSection.vue

推荐：

一个 Section
负责一个业务区域。

不要：

一个 Section 放所有字段。

--------------------------------

推荐布局：

基础信息

↓

业务信息

↓

扩展信息

↓

附件信息

--------------------------------

字段数量：

≤10：

可以不拆分。

10~20：

建议拆分 Section。

20+：

必须拆分多个 Section。

*/

/* ==========================================
   Layout Rules
   ========================================== */

/*

推荐：

普通字段：

span=12

长文本：

span=24

上传：

span=24

富文本：

span=24

子表：

span=24

*/

/* ==========================================
   AFES Style Rules
   ========================================== */

/*

保持：

✓ Element Plus 默认风格

✓ Flex

✓ Responsive

✓ Scoped Style

禁止：

× !important（特殊情况除外）

× 行内 style

× 固定页面宽度

× 大量重复 CSS

*/
/* ==========================================
   Naming Rules
   ========================================== */

/*

页面命名：

UserForm

RoleForm

OrderForm

ProductForm

ConfigForm

--------------------------------

页面标题：

新增用户

编辑用户

新增订单

编辑订单

--------------------------------

不要保留：

Demo

DemoForm

Demo Page

*/

/* ==========================================
   Responsibility
   ========================================== */

/*

index.vue 负责：

✓ 页面布局

✓ 页面标题

✓ Form Container

✓ 页面按钮

✓ 路由跳转

✓ Hook 调用

--------------------------------

index.vue 不负责：

× API

× request

× 数据转换

× Message

× Confirm

× Form Rules

× Loading 管理

*/

/* ==========================================
   AI Output Rules
   ========================================== */

/*

AI 生成业务页面时：

必须替换：

① Demo

② API

③ Permission

④ 页面标题

⑤ 表单字段

⑥ Rules

⑦ 默认值

⑧ Dict

--------------------------------

推荐保持：

页面结构

Hook

组件拆分

Footer

Layout

不要重新设计页面结构。

*/

/* ==========================================
   Recommended Extension
   ========================================== */

/*

复杂业务允许增加：

components/

├── FormSection.vue
├── UploadSection.vue
├── AttachmentSection.vue
├── ItemTable.vue
├── AddressSection.vue
└── ApproverSection.vue

Hook：

hooks/

├── useForm.js
├── useUpload.js
└── useApprove.js

保持：

一个 Hook
一个职责。

*/

/* ==========================================
   AFES Checklist
   ========================================== */

/*

生成完成后检查：

□ Vue3

□ Composition API

□ script setup

□ API 已拆分

□ Hook 已拆分

□ Section 已拆分（复杂页面）

□ Form Rules 完整

□ Default Value 完整

□ Loading 完整

□ Submit 正常

□ Edit 正常

□ Add 正常

□ Detail 回显正常

□ Permission 正确

□ Dict 正确

□ Import 完整

□ Router 正确

□ 无 console.log

□ 无 debugger

□ 无 TODO

□ 无废弃代码

□ 无重复逻辑

□ 符合 AFES 全部规范

*/

/* ==========================================
   Template Goal
   ========================================== */

/*

Form Page Template 目标：

✓ 企业级

✓ AI Friendly

✓ 可维护

✓ 可扩展

✓ 可复用

✓ 可长期演进

与：

crud-page

组合后，

覆盖企业后台系统中绝大多数：

新增

编辑

配置

维护

录入

业务页面。

*/

/* ==========================================
   End
   ========================================== */

</style>
