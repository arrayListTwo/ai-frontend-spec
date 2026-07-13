# 组件规则

本章定义 AI 在创建和修改 Vue3 组件时的规则。

## 组件分类

| 类型 | 位置 | 说明 |
|------|------|------|
| 全局组件 | `src/components/` | 多模块复用的公共组件 |
| 页面组件 | `src/views/*/components/` | 页面私有组件 |
| 业务组件 | `src/components/` | 特定业务场景的组件 |

## 组件文件结构

```
components/
└── UserSelect/
    ├── index.vue          # 组件主文件
    ├── index.scss         # 组件样式
    └── types.ts           # 类型定义（按需）
```

## 组件编码规则

```vue
<template>
  <div class="user-select">
    <!-- 模板内容 -->
  </div>
</template>

<script setup name="UserSelect" lang="ts">
import { ref, computed, watch } from 'vue'

// Props 定义（必须有类型和注释）
const props = defineProps<{
  /** 绑定值 */
  modelValue?: string | number
  /** 是否禁用 */
  disabled?: boolean
}>()

// Emits 定义
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

// 组合式函数
// 公开方法通过 defineExpose 暴露
</script>

<style lang="scss" scoped>
.user-select {
  // 组件样式
}
</style>
```

## 组件设计原则

1. **单一职责**：每个组件只做一件事
2. **Props 下行**：数据通过 props 传入
3. **Events 上行**：事件通过 emit 传出
4. **Slots 扩展**：提供灵活的内容分发
5. **v-model 支持**：支持双向绑定的组件实现 v-model

## 组件通信方式

| 方式 | 场景 |
|------|------|
| Props | 父 → 子 |
| Emit | 子 → 父 |
| Provide/Inject | 跨层级 |
| Pinia Store | 全局状态 |
| Event Bus | 已废弃，不推荐 |
