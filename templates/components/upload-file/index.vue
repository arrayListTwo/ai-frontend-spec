<template>
  <!--
    ============================================================
    AFES UploadFile Template
    ============================================================

    Component:

    UploadFile


    Responsibility:

    ✓ File Select
    ✓ File Validation
    ✓ File List Display
    ✓ Remove File
    ✓ Preview Image
    ✓ Upload Events


    NOT Responsibility:

    × API Request
    × OSS SDK
    × File Storage
    × Business Submit
    × Router
    × Store


    ============================================================
  -->


  <div class="upload-file">


    <el-upload

        v-model:file-list="fileList"

        :multiple="multiple"

        :limit="limit"

        :accept="accept"

        :disabled="disabled"

        :list-type="imageMode ? 'picture-card' : 'text'"

        :before-upload="beforeUpload"

        :on-success="handleSuccess"

        :on-remove="handleRemove"

        :on-preview="handlePreview"

        :on-error="handleError"

    >


      <!--
        ========================================================
        Default Upload Button

        Business can replace:

        #default

      -->


      <slot>


        <el-icon>

          <Plus />

        </el-icon>


      </slot>



      <!--
        ========================================================
        Tip Slot

      -->


      <template #tip>


        <slot name="tip">


          <div class="upload-tip">


            <span>

              最大支持 {{ fileSize }} MB

            </span>


          </div>


        </slot>


      </template>


    </el-upload>



    <!--
      ==========================================================
      Image Preview
      ==========================================================
    -->


    <el-image-viewer

        v-if="previewVisible"

        :url-list="previewUrls"

        @close="previewVisible = false"

    />


  </div>


</template>



<script setup name="UploadFile">


import {

  computed,

  ref,

  watch


} from 'vue'


import {


  Plus


} from '@element-plus/icons-vue'



/**
 * ============================================================
 * Props
 * ============================================================
 */


const props = defineProps({


  /**
   * File List

   */

  modelValue: {


    type: Array,


    default: () => []


  },


  /**
   * Max File Count

   */

  limit: {


    type: Number,


    default: 1


  },


  /**
   * Max Size MB

   */

  fileSize: {


    type: Number,


    default: 10


  },


  /**
   * Accept

   */

  accept: {


    type: String,


    default: ''


  },


  /**
   * Multiple

   */

  multiple: {


    type: Boolean,


    default: false


  },


  /**
   * Disabled

   */

  disabled: {


    type: Boolean,


    default: false


  },


  /**
   * Image Mode

   */

  imageMode: {


    type: Boolean,


    default: false


  }


})

/**
 * ============================================================
 * Emits
 * ============================================================
 */


const emit = defineEmits([


  /**
   * v-model update
   */

  'update:modelValue',



  /**
   * Upload Success
   */

  'upload-success',



  /**
   * Remove File
   */

  'remove',



  /**
   * Upload Error
   */

  'error'


])



/**
 * ============================================================
 * File List
 * ============================================================
 */


const fileList = ref([

  ...props.modelValue

])



watch(

    () => props.modelValue,

    (value) => {


      fileList.value = [

        ...value

      ]


    },

    {

      deep:true

    }

)



watch(

    fileList,

    (value)=>{


      emit(

          'update:modelValue',

          value

      )


    },

    {

      deep:true

    }

)



/**
 * ============================================================
 * Image Preview
 * ============================================================
 */


const previewVisible = ref(false)



const previewUrls = ref([])



/**
 * ============================================================
 * File Validation
 * ============================================================
 *
 * before-upload
 *
 * Flow:
 *
 * Select File
 *
 * ↓
 *
 * Type Check
 *
 * ↓
 *
 * Size Check
 *
 * ↓
 *
 * Upload
 *
 */


function beforeUpload(file) {



  /**
   * File Size

   */


  const sizeLimit =


      file.size / 1024 / 1024 < props.fileSize



  if (!sizeLimit) {


    return false


  }



  /**
   * File Type

   */


  if (!props.accept) {


    return true


  }



  const fileName = file.name.toLowerCase()



  const accepts = props.accept

      .split(',')

      .map(item => item.trim())



  const validType = accepts.some(

      type => {


        if(type === 'image/*'){


          return file.type.startsWith(

              'image/'

          )


        }



        return fileName.endsWith(type)


      }

  )



  return validType


}



/**
 * ============================================================
 * Upload Success
 * ============================================================
 */


function handleSuccess(

    response,

    file,

    files

) {


  emit(

      'upload-success',

      {

        response,

        file,

        files

      }

  )


}



/**
 * ============================================================
 * Remove
 * ============================================================
 */


function handleRemove(

    file,

    files

) {


  emit(

      'remove',

      {

        file,

        files

      }

  )


}



/**
 * ============================================================
 * Preview
 * ============================================================
 */


function handlePreview(file) {


  if(!props.imageMode){


    return


  }



  previewUrls.value = [

    file.url

  ]



  previewVisible.value = true


}



/**
 * ============================================================
 * Error
 * ============================================================
 */


function handleError(error) {


  emit(

      'error',

      error

  )


}

/**
 * ============================================================
 * Computed
 * ============================================================
 *
 * 保留扩展能力。
 *
 * AI 生成业务组件时：
 *
 * 不修改上传核心流程。
 *
 * ============================================================
 */


const showTip = computed(() => {


  return Boolean(

      props.fileSize

  )


})



/**
 * ============================================================
 * Expose
 * ============================================================
 *
 * Parent Usage:
 *
 * uploadRef.value.clearFiles()
 *
 * ============================================================
 */


function clearFiles(){


  fileList.value = []


}



function getFiles(){


  return fileList.value


}



defineExpose({


  clearFiles,


  getFiles


})



</script>
<style scoped>
/* ============================================================
   AFES UploadFile Style
   ============================================================ */


/* ==========================================
   Container
   ========================================== */


.upload-file {

  width: 100%;

}



/* ==========================================
   Upload Button
   ========================================== */


:deep(.el-upload) {

  display: inline-flex;

}



/* ==========================================
   Picture Card
   ========================================== */


:deep(.el-upload--picture-card) {

  width: 100px;

  height: 100px;

}



/* ==========================================
   File List
   ========================================== */


:deep(.el-upload-list) {

  margin-top: 10px;

}



/* ==========================================
   Tip
   ========================================== */


.upload-tip {

  margin-top: 8px;

  font-size: 13px;

}



/* ==========================================
   Image Preview
   ========================================== */


:deep(.el-image-viewer__wrapper) {

  z-index: 3000;

}



/* ==========================================
   Responsive
   ========================================== */


@media (max-width: 768px) {


  :deep(.el-upload--picture-card) {


    width: 80px;


    height: 80px;


  }


}



/* ==========================================
   Dark Mode
   ========================================== */


html.dark .upload-file {


  color: var(--el-text-color-primary);


}



/* ==========================================
   AFES Style Rules
   ========================================== */


/*

允许：

✓ 上传布局

✓ 文件列表样式

✓ 图片预览样式

✓ 响应式调整



禁止：

× 固定业务样式

× 页面级 CSS

× OSS 相关样式



*/


/* ==========================================
   AI Replace Rules
   ========================================== */


/*

AI 生成业务上传组件：

只替换：

accept

limit

fileSize

imageMode



保持：

Upload

Validation

Emit

List



*/

</style>



<!--


============================================================
AFES UploadFile Component Rules
============================================================


组件职责：

✓ 文件选择

✓ 文件校验

✓ 文件展示

✓ 删除

✓ 预览

✓ 事件通知



组件禁止：

× API

× OSS

× 文件服务

× Store

× Router

× 页面状态



============================================================
Props Rules
============================================================


推荐：

modelValue

limit

fileSize

accept

multiple

disabled

imageMode



禁止：

avatarUrl

contractFile

productImage



业务字段应该由父组件管理。



============================================================
Emit Rules
============================================================


允许：

update:modelValue

upload-success

remove

error



禁止：

save-file

submit-form

refresh-page



============================================================
File Validation Rules
============================================================


组件负责：

类型检查

大小检查



组件不负责：

服务器校验



============================================================
AI Replace Rules
============================================================


AI 生成上传组件：


保留：


UploadFile

↓

Upload

↓

Validation

↓

Emit



替换：


文件类型

数量

大小

业务说明



============================================================
Quality Checklist
============================================================


生成完成检查：


□ Vue3

□ Composition API

□ script setup

□ Element Plus Upload

□ File Validation

□ Size Check

□ Type Check

□ Preview

□ Remove

□ Props

□ Emits

□ v-model

□ Slot

□ Responsive

□ Dark Mode

□ 无 API

□ 无 OSS

□ 无 Router

□ 无 Store

□ 无业务逻辑

□ 可复用

□ AI Friendly

□ 符合 AFES



============================================================
Template Goal
============================================================


UploadFile Template 目标：


建立企业后台统一文件上传能力。


通过：


UploadFile

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

标准上传组件



============================================================
End

============================================================


-->

