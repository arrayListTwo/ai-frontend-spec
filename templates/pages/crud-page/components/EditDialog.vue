<template>
  <el-dialog
      v-model="visible"
      :title="dialogTitle"
      width="720px"
      destroy-on-close
      append-to-body
      :close-on-click-modal="false"
      @closed="handleClosed"
  >
    <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
    >
      <!-- ===========================
           AI Replace Area

           根据业务替换字段

           推荐：

           名称
           编码
           排序
           状态
           备注

      ============================ -->

      <el-row :gutter="20">

        <el-col :span="12">

          <el-form-item
              label="名称"
              prop="name"
          >
            <el-input
                v-model="form.name"
                placeholder="请输入名称"
                maxlength="50"
                show-word-limit
            />
          </el-form-item>

        </el-col>

        <el-col :span="12">

          <el-form-item
              label="编码"
              prop="code"
          >
            <el-input
                v-model="form.code"
                placeholder="请输入编码"
            />
          </el-form-item>

        </el-col>

      </el-row>

      <el-row :gutter="20">

        <el-col :span="12">

          <el-form-item
              label="排序"
              prop="sort"
          >
            <el-input-number
                v-model="form.sort"
                :min="0"
                :max="9999"
                controls-position="right"
            />
          </el-form-item>

        </el-col>

        <el-col :span="12">

          <el-form-item
              label="状态"
              prop="status"
          >
            <el-radio-group
                v-model="form.status"
            >

              <!--
                  推荐：

                  如果项目使用 Dict：

                  <dict-radio />

              -->

              <el-radio value="0">
                启用
              </el-radio>

              <el-radio value="1">
                停用
              </el-radio>

            </el-radio-group>

          </el-form-item>

        </el-col>

      </el-row>

      <el-form-item
          label="备注"
          prop="remark"
      >
        <el-input
            v-model="form.remark"
            type="textarea"
            :rows="4"
            maxlength="500"
            show-word-limit
            placeholder="请输入备注"
        />
      </el-form-item>

      <!--

        TODO

        根据业务继续增加：

        日期

        用户

        部门

        树

        上传

        富文本

        ...

      -->

    </el-form>

    <template #footer>

      <div class="dialog-footer">

        <el-button
            @click="handleCancel"
        >
          取消
        </el-button>

        <el-button
            type="primary"
            :loading="submitLoading"
            @click="handleSubmit"
        >
          保存
        </el-button>

      </div>

    </template>

  </el-dialog>
</template>
<script setup>
/**
 * ============================================================
 * AFES CRUD Template
 * EditDialog.vue
 * ------------------------------------------------------------
 * 作用：
 * 统一新增 / 编辑 Dialog
 *
 * 职责：
 * 1. 表单展示
 * 2. 表单校验
 * 3. 新增
 * 4. 编辑
 *
 * 不负责：
 * × 刷新列表
 * × 页面状态
 * × Loading（页面）
 * × 查询
 *
 * Dialog 保存成功后：
 * emit('success')
 *
 * 页面负责：
 * loadList()
 * ============================================================
 */

import { computed, reactive, ref, watch } from 'vue'

import {
  addDemo,
  getDemo,
  updateDemo
} from '../api'

import { ElMessage } from 'element-plus'

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
   * Dialog Title
   */
  title: {
    type: String,
    default: ''
  },

  /**
   * 当前编辑数据
   */
  row: {
    type: Object,
    default: () => null
  }

})

/**
 * ============================================================
 * Emits
 * ============================================================
 */

const emit = defineEmits([
  'update:modelValue',
  'success'
])

/**
 * ============================================================
 * Dialog Visible
 * ============================================================
 */

const visible = computed({

  get() {
    return props.modelValue
  },

  set(value) {
    emit('update:modelValue', value)
  }

})

/**
 * ============================================================
 * Dialog Title
 * ============================================================
 */

const dialogTitle = computed(() => {

  if (props.title) {
    return props.title
  }

  return form.id
      ? '编辑'
      : '新增'

})

/**
 * ============================================================
 * Refs
 * ============================================================
 */

const formRef = ref()

/**
 * ============================================================
 * Loading
 * ============================================================
 */

const submitLoading = ref(false)

/**
 * ============================================================
 * Form
 * ============================================================
 *
 * AI Replace：
 *
 * 根据业务替换字段
 *
 */

const getDefaultForm = () => ({

  id: undefined,

  name: '',

  code: '',

  sort: 0,

  status: '0',

  remark: ''

})

const form = reactive(
    getDefaultForm()
)

/**
 * ============================================================
 * Rules
 * ============================================================
 *
 * 推荐：
 *
 * 所有校验集中维护
 *
 */

const rules = {

  name: [

    {
      required: true,
      message: '请输入名称',
      trigger: 'blur'
    },

    {
      min: 2,
      max: 50,
      message: '长度为 2 ~ 50 个字符',
      trigger: 'blur'
    }

  ],

  code: [

    {
      required: true,
      message: '请输入编码',
      trigger: 'blur'
    }

  ],

  sort: [

    {
      required: true,
      message: '请输入排序',
      trigger: 'change'
    }

  ],

  status: [

    {
      required: true,
      message: '请选择状态',
      trigger: 'change'
    }

  ]

}
/**
 * ============================================================
 * Reset Form
 * ============================================================
 */

function resetForm() {

  Object.assign(
      form,
      getDefaultForm()
  )

  formRef.value?.clearValidate()

}

/**
 * ============================================================
 * Load Detail
 * ============================================================
 *
 * 编辑模式：
 *
 * 根据 ID 获取最新数据。
 *
 * 不建议：
 *
 * 直接使用 Table Row
 *
 * 防止：
 *
 * 数据不完整。
 *
 */

async function loadDetail(id) {

  const { data } = await getDemo(id)

  Object.assign(
      form,
      data
  )

}

/**
 * ============================================================
 * Init Dialog
 * ============================================================
 */

async function initDialog() {

  resetForm()

  if (!props.row?.id) {
    return
  }

  await loadDetail(
      props.row.id
  )

}

/**
 * ============================================================
 * Submit
 * ============================================================
 */

async function submitForm() {

  await formRef.value.validate()

  submitLoading.value = true

  try {

    if (form.id) {

      await updateDemo(form)

      ElMessage.success(
          '修改成功'
      )

    } else {

      await addDemo(form)

      ElMessage.success(
          '新增成功'
      )

    }

    visible.value = false

    emit('success')

  } finally {

    submitLoading.value = false

  }

}

/**
 * ============================================================
 * Events
 * ============================================================
 */

function handleSubmit() {

  submitForm()

}

function handleCancel() {

  visible.value = false

}

function handleClosed() {

  resetForm()

}

/**
 * ============================================================
 * Watch
 * ============================================================
 *
 * Dialog 打开：
 *
 * 初始化数据。
 *
 */

watch(

    () => visible.value,

    async (value) => {

      if (!value) {
        return
      }

      await initDialog()

    }

)

/**
 * ============================================================
 * AI Replace Area
 * ============================================================
 *
 * 根据业务可继续增加：
 *
 * - 加载部门树
 * - 加载角色列表
 * - 加载岗位
 * - 加载字典
 * - 上传附件
 * - 图片预览
 * - 富文本
 * - 子表
 * - TreeSelect
 *
 * 推荐：
 *
 * async function loadOptions() {}
 *
 * async function loadDict() {}
 *
 * async function loadDeptTree() {}
 *
 * Promise.all(...)
 *
 */
</script>
<style scoped>
/* ============================================================
   AFES CRUD Template
   EditDialog.vue
   ============================================================ */

/* ==========================================
   Dialog Footer
   ========================================== */

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}

/* ==========================================
   Form
   ========================================== */

:deep(.el-form) {
  padding-top: 8px;
}

:deep(.el-form-item) {
  margin-bottom: 20px;
}

:deep(.el-input),
:deep(.el-select),
:deep(.el-date-editor),
:deep(.el-cascader) {
  width: 100%;
}

:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-textarea) {
  width: 100%;
}

/* ==========================================
   Upload
   ========================================== */

:deep(.el-upload) {
  width: 100%;
}

/* ==========================================
   Responsive
   ========================================== */

@media (max-width: 768px) {

:deep(.el-dialog) {
    width: 95% !important;
    margin-top: 5vh !important;
  }

:deep(.el-col) {
    max-width: 100%;
    flex: 0 0 100%;
  }

.dialog-footer {
    justify-content: center;
    flex-wrap: wrap;
  }

.dialog-footer .el-button {
    flex: 1;
  }

}

/* ==========================================
   Dark Mode
   ========================================== */

html.dark :deep(.el-dialog__body) {
  border-top: 1px solid var(--el-border-color);
}

html.dark :deep(.el-dialog__footer) {
  border-top: 1px solid var(--el-border-color);
}

/* ==========================================
   AI Replace Guide
   ========================================== */

/*

生成业务 Dialog 时，应替换：

① Dialog 名称

例如：

UserDialog

RoleDialog

DeptDialog

MenuDialog

NoticeDialog

--------------------------------

② Form 字段

例如：

用户名

手机号

邮箱

部门

角色

岗位

状态

备注

--------------------------------

③ Rules

根据业务重新定义：

required

length

pattern

validator

--------------------------------

④ API

替换：

addDemo()

updateDemo()

getDemo()

为真实业务 API。

--------------------------------

⑤ Dict

推荐：

DictRadio

DictSelect

DictTag

不要自行维护状态映射。

--------------------------------

⑥ 上传组件

根据业务增加：

ImageUpload

FileUpload

AvatarUpload

--------------------------------

⑦ TreeSelect

组织机构

菜单

分类

推荐：

TreeSelect

--------------------------------

⑧ 子表

若存在：

明细

商品

附件

推荐拆分：

独立业务组件。

*/

/* ==========================================
   AFES Component Rules
   ========================================== */

/*

本组件必须保持：

✓ 单一职责

✓ 不刷新列表

✓ 不管理页面状态

✓ 不直接操作 Table

✓ 不维护 Query

✓ API 独立

✓ Rules 独立

✓ Props 清晰

✓ Emits 清晰

✓ 可重复复用

*/

/* ==========================================
   AI Checklist
   ========================================== */

/*

生成完成后检查：

□ Props 正确

□ Emits 正确

□ Form 已初始化

□ Rules 已配置

□ 编辑已回显

□ 新增已初始化

□ Loading 已处理

□ API 已替换

□ Dict 已替换

□ TODO 已全部替换

□ 无 console.log

□ 无 debugger

□ 无废弃代码

□ 无页面业务逻辑

□ 符合 AFES 全部规范

*/

/* ==========================================
   End
   ========================================== */
</style>
