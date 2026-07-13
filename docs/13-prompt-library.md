# Prompt 模板库

本章收录适用于不同场景的 Prompt 模板，帮助用户高效使用 AI 完成前端开发任务。

## 通用模板

### 代码生成

```
请根据以下要求生成 Vue3 + Element Plus 页面代码：

- 页面名称：{page_name}
- 页面功能：{description}
- 包含功能：{features}

技术要求：
- 使用 <script setup> 语法
- 遵循 RuoYi-Vue3 规范
- 使用 TypeScript
- 符合 AFES 编码规范
```

### 代码重构

```
请重构以下代码，要求：

- 保持功能不变
- 提升可读性和可维护性
- 遵循 AFES 编码规范
- 符合项目既有风格
```

### Bug 修复

```
请帮我修复以下问题：

- 问题描述：{description}
- 复现步骤：{steps}
- 期望行为：{expected}
- 实际行为：{actual}
```

## 专项模板

### CRUD 页面生成

```
请生成一个标准的 CRUD 管理页面：

- 模块名称：{module_name}
- 字段列表：{fields}
- API 接口：{api_prefix}
- 功能需求：{features}
```

### 组件开发

```
请开发一个 Vue3 组件：

- 组件名称：{component_name}
- 功能描述：{description}
- Props 列表：{props}
- Events 列表：{events}
- Slots 列表：{slots}
```

## 使用建议

1. 根据实际需求调整模板内容
2. 提供尽可能详细的上下文信息
3. 将 AFES 规范文档作为系统提示使用
4. 分步骤引导 AI 完成复杂任务
