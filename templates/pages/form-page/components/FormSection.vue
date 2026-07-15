<template>
  <!--
    ============================================================
    AFES Form Page Template
    FormSection.vue

    Responsibility

    ✓ Form Layout
    ✓ Section Title
    ✓ Slot Container

    NOT Responsibility

    × API
    × Business Logic
    × Submit
    × Router
    ============================================================
  -->

  <div
      v-if="visible"
      class="form-section"
  >
    <!-- Title -->
    <div
        v-if="title"
        class="form-section__header"
    >
      <div class="form-section__title">

        <slot name="title">

          {{ title }}

        </slot>

      </div>

      <div
          v-if="$slots.extra"
          class="form-section__extra"
      >
        <slot name="extra" />
      </div>
    </div>

    <!-- Description -->
    <div
        v-if="description"
        class="form-section__description"
    >
      {{ description }}
    </div>

    <!-- Content -->
    <div class="form-section__body">

      <slot />

    </div>

  </div>
</template>

<script setup name="FormSection">

/**
 * ============================================================
 * Props
 * ============================================================
 */

defineProps({

  /**
   * 标题
   */
  title: {

    type: String,

    default: ''

  },

  /**
   * 描述
   */
  description: {

    type: String,

    default: ''

  },

  /**
   * 是否显示
   */
  visible: {

    type: Boolean,

    default: true

  }

})

</script>
<style scoped>
/* ============================================================
   AFES Form Section
   ============================================================ */

/* ==========================================
   Container
   ========================================== */

.form-section {
  margin-bottom: 24px;
  padding: 20px 24px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.form-section:last-child {
  margin-bottom: 0;
}

/* ==========================================
   Header
   ========================================== */

.form-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.form-section__title {
  position: relative;
  padding-left: 12px;
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  line-height: 1;
}

.form-section__title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--el-color-primary);
  border-radius: 2px;
  content: '';
}

.form-section__extra {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ==========================================
   Description
   ========================================== */

.form-section__description {
  margin-bottom: 18px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
  line-height: 1.7;
}

/* ==========================================
   Body
   ========================================== */

.form-section__body {
  width: 100%;
}

/* ==========================================
   Element Plus
   ========================================== */

:deep(.el-row:last-child) {
  margin-bottom: 0 !important;
}

:deep(.el-form-item:last-child) {
  margin-bottom: 0;
}

/* ==========================================
   Divider
   ========================================== */

.form-section + .form-section {
  margin-top: 20px;
}

/* ==========================================
   Hover
   ========================================== */

.form-section:hover {
  border-color: var(--el-border-color);
}

/* ==========================================
   Dark Mode
   ========================================== */

html.dark .form-section {
  border-color: var(--el-border-color);
}

/* ==========================================
   Responsive
   ========================================== */

@media (max-width: 768px) {

  .form-section {
    padding: 16px;
  }

  .form-section__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .form-section__extra {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

}
/* ==========================================
   Recommended Layout
   ========================================== */

/*

推荐一个 Section
负责一个业务区域。

例如：

<FormSection title="基础信息">

  基础字段...

</FormSection>


<FormSection title="业务信息">

  业务字段...

</FormSection>


<FormSection title="附件信息">

  上传组件...

</FormSection>

避免：

一个 Section 放置整个页面所有字段。

*/

/* ==========================================
   Slot Rules
   ========================================== */

/*

默认插槽：

<form-section>

  <el-row>

    ...

  </el-row>

</form-section>

--------------------------------

Title Slot：

<template #title>

  自定义标题

</template>

--------------------------------

Extra Slot：

<template #extra>

  <el-button />

</template>

*/

/* ==========================================
   AI Replace Guide
   ========================================== */

/*

AI 根据业务建议拆分：

用户页面：

BaseInfoSection

RoleInfoSection

OrganizationSection

AttachmentSection

--------------------------------

商品页面：

BaseInfoSection

PriceSection

InventorySection

ImageSection

--------------------------------

订单页面：

CustomerSection

ProductSection

PaymentSection

RemarkSection

--------------------------------

流程页面：

ApplicantSection

ApprovalSection

AttachmentSection

--------------------------------

每个 Section：

一个业务职责。

*/

/* ==========================================
   Accessibility
   ========================================== */

.form-section__title {

  user-select: none;

}

.form-section__description {

  word-break: break-word;

}

.form-section__body {

  overflow: hidden;

}

/* ==========================================
   Animation
   ========================================== */

.form-section {

  transition:

      border-color .2s ease,

      box-shadow .2s ease,

      background-color .2s ease;

}

.form-section:hover {

  box-shadow: 0 2px 8px rgb(0 0 0 / 4%);

}

/* ==========================================
   Layout Recommendation
   ========================================== */

/*

推荐字段布局：

普通输入：

span=12

--------------------------------

长文本：

span=24

--------------------------------

上传：

span=24

--------------------------------

富文本：

span=24

--------------------------------

子表：

span=24

--------------------------------

复杂区域：

独立 Section。

*/

/* ==========================================
   AFES Component Rules
   ========================================== */

/*

FormSection：

负责：

✓ 分组

✓ 标题

✓ 描述

✓ Slot 容器

✓ 页面可读性

--------------------------------

FormSection：

不负责：

× API

× Submit

× Router

× Permission

× Request

× Loading

× Validation

× Message

*/
/* ==========================================
   AI Output Rules
   ========================================== */

/*

AI 生成业务页面时：

推荐：

一个业务区域

↓

一个 FormSection

例如：

<FormSection title="基础信息">

...

</FormSection>

<FormSection title="联系人信息">

...

</FormSection>

<FormSection title="附件信息">

...

</FormSection>

--------------------------------

不要：

整个页面只使用一个 FormSection。

--------------------------------

字段超过：

10 个

建议拆分。

字段超过：

20 个

必须拆分。

*/

/* ==========================================
   Naming Rules
   ========================================== */

/*

推荐：

FormSection

BaseInfoSection

UserInfoSection

OrderInfoSection

AddressSection

PaymentSection

AttachmentSection

ApproveSection

--------------------------------

组件命名：

PascalCase

保持统一。

*/

/* ==========================================
   Extension Recommendation
   ========================================== */

/*

AFES 推荐：

复杂业务可继续封装：

FormSection

↓

CollapseSection

↓

CardSection

↓

TabsSection

↓

TableSection

↓

UploadSection

↓

TimelineSection

保持：

Section

只负责：

布局。

*/

/* ==========================================
   Performance
   ========================================== */

/*

推荐：

Slot 渲染。

保持：

轻组件。

不要：

维护业务状态。

不要：

维护业务数据。

不要：

监听业务变化。

*/

/* ==========================================
   Checklist
   ========================================== */

/*

□ 组件职责单一

□ Props 清晰

□ Slots 清晰

□ 无 API

□ 无 Router

□ 无 Request

□ 无 Loading

□ 无业务状态

□ 无 Form Data

□ 无 Validation

□ Scoped Style

□ Responsive

□ Dark Mode

□ Import 简洁

□ 无 console.log

□ 无 debugger

□ 无 TODO

□ 可复用

□ AI 易理解

□ 符合 AFES 全部规范

*/

/* ==========================================
   Component Goal
   ========================================== */

/*

FormSection 是 AFES 的基础布局组件。

目标：

✓ 提升页面可读性

✓ 降低表单复杂度

✓ 统一页面结构

✓ 提高 AI 生成一致性

✓ 提高代码复用率

✓ 支持长期维护

--------------------------------

推荐组合：

index.vue

↓

FormSection

↓

el-row

↓

el-col

↓

el-form-item

↓

Element Plus Component

形成统一的企业级表单开发模式。

*/

/* ==========================================
   Template Goal
   ========================================== */

/*

AFES Form Template：

View

↓

FormSection

↓

Hook

↓

API

形成：

View

↓

Component

↓

Logic

↓

Service

四层架构。

AI 仅需替换：

- 字段
- API
- 权限
- 校验
- 字典

即可生成新的业务页面。

*/

/* ==========================================
   End
   ========================================== */

</style>
