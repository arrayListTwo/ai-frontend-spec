# 样式规则

本章定义 AI 在编写 Vue3 + Element Plus 项目样式时的规则。

## 技术选型

| 类型 | 选择 | 说明 |
|------|------|------|
| 预处理器 | SCSS | RuoYi-Vue3 默认 |
| 命名规范 | BEM | 保证样式隔离 |
| 单位 | rem / px | Element Plus 用 px |

## BEM 命名规范

```scss
// 块
.user-manage {
  // 元素
  &__header {
    // 修饰符
    &--sticky {
      position: sticky;
      top: 0;
    }
  }

  // 修饰符
  &--full-screen {
    height: 100vh;
  }
}
```

## 样式组织

```vue
<style lang="scss" scoped>
// 1. 变量定义
$spacing-base: 16px;

// 2. 混入
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 3. 组件样式
.user-manage {
  padding: $spacing-base;

  &__header {
    margin-bottom: $spacing-base;
  }

  &__table {
    // 表格样式
  }
}
</style>
```

## 样式规则要点

1. **必须使用** `scoped` 避免样式污染
2. **必须使用** BEM 命名规范
3. **避免使用** `!important`
4. **避免使用** 深度选择器（`::v-deep`），除非必须覆盖 Element Plus 样式
5. **颜色和间距** 使用 CSS 变量或 SCSS 变量
6. **响应式** 使用媒体查询断点变量

## RuoYi-Vue3 样式约定

```scss
// 常用工具类（RuoYi-Vue3 已提供）
.mb8 { margin-bottom: 8px; }
.mr8 { margin-right: 8px; }
.ml8 { margin-left: 8px; }
.mt8 { margin-top: 8px; }

// 弹窗操作按钮区
.dialog-footer {
  text-align: right;
}

// 表格操作列
.el-table .el-button.is-link {
  padding: 4px 8px;
}
```

## 样式覆盖 Element Plus

当需要覆盖 Element Plus 组件样式时：

```scss
// 推荐方式：使用全局样式 + 精确选择器
:deep(.el-table__header th) {
  background-color: var(--el-fill-color-light);
}

// 避免：使用全局样式污染所有实例
```
