# 编码规则

本章定义 AI 在 Vue3 + Element Plus + RuoYi-Vue3 项目中的通用编码规则。

## 文件组织

```
src/
├── api/              # 接口请求
├── assets/           # 静态资源
├── components/       # 公共组件
├── composables/      # 组合式函数
├── directive/        # 自定义指令
├── layout/           # 布局组件
├── plugins/          # 插件
├── router/           # 路由配置
├── store/            # 状态管理（Pinia）
├── styles/           # 全局样式
├── utils/            # 工具函数
└── views/            # 页面视图
```

## 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 文件/目录名 | kebab-case | `user-manage.vue` |
| 组件名 | PascalCase | `UserManage.vue` |
| 组合式函数 | use + PascalCase | `useTable.ts` |
| 工具函数 | camelCase | `formatDate.ts` |
| 常量 | UPPER_SNAKE_CASE | `API_TIMEOUT` |
| CSS 类名 | BEM | `.user-manage__header--active` |

## 导入规范

```typescript
// 1. Vue 核心
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// 2. 第三方库
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios'

// 3. 项目模块
import { listUser, addUser } from '@/api/user'
import { parseTime } from '@/utils/ruoyi'

// 4. 组件
import Pagination from '@/components/Pagination/index.vue'

// 5. 样式
import './index.scss'
```

## TypeScript 规范

- 优先使用 TypeScript 编写 Vue 组件
- 为 props 定义明确的类型
- 为 API 返回值定义接口
- 避免使用 `any` 类型
- 合理使用泛型提升代码复用性

## 注释规范

```typescript
// 组件描述（必填）
// @description 用户管理页面

// 复杂逻辑说明（必填）
// 使用防抖处理搜索输入，避免频繁请求

// TODO 标记（按需）
// TODO: 待后端接口对接后完善错误处理
```
