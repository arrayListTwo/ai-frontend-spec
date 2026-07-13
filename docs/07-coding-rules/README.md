# 07 Coding Rules

> AI Frontend Engineering Specification（AFES）  
> Coding Rules 定义了 AI 在企业级 Vue3 项目中的编码规范。

---

# 1. 文档目标

Coding Rules 用于规范 AI 在项目中的代码生成行为。

AI 在开始编码前，必须阅读本目录下的全部规范。

Coding Rules 不描述业务逻辑，仅描述编码规范。

所有页面模板、组件模板均依赖本规范。

---

# 2. 适用范围

本规范适用于：

- Claude Code
- ChatGPT
- Gemini
- Cursor
- Copilot
- Trae
- Roo Code
- 支持 Prompt 的 AI Coding Agent

---

# 3. 技术基线

Coding Rules 基于以下项目：

- Vue3
- Composition API
- `<script setup>`
- JavaScript
- Vite
- Element Plus
- Pinia
- Vue Router 4
- Axios
- SCSS

项目框架：

- RuoYi-Vue3

详细内容请参考：

> docs/00-project-baseline.md

---

# 4. 文档组织

本目录共分为八个部分。

| 文件 | 内容 |
|------|------|
| 01-vue3.md | Vue3 编码规范 |
| 02-project-structure.md | 项目目录规范 |
| 03-api.md | API 调用规范 |
| 04-page.md | 页面开发规范 |
| 05-component.md | 公共组件规范 |
| 06-state.md | 状态管理规范 |
| 07-style.md | 样式规范 |
| 08-quality.md | 代码质量规范 |

---

# 5. 规则等级

本规范采用 RFC 2119 关键字描述规则等级。

| 等级 | 含义 |
|------|------|
| MUST | 必须遵守 |
| SHOULD | 推荐遵守 |
| MAY | 可根据情况选择 |
| MUST NOT | 严禁使用 |

AI 应优先遵循 MUST。

---

# 6. AI 执行要求

AI 在生成代码前必须：

1. 阅读 Project Baseline
2. 阅读 Context Awareness
3. 阅读 Decision Rules
4. 阅读对应 Coding Rules
5. 按 Workflow 执行开发

不得跳过任何步骤。

---

# 7. 与其他规范关系

Coding Rules 依赖：

- 00 Project Baseline
- 03 Principles
- 04 Context Awareness
- 05 Decision Rules
- 06 Workflow

Coding Rules 将作为以下文档的基础：

- 08 Page Rules
- 09 Component Rules
- Templates
- Knowledge

---

# 8. 总结

Coding Rules 是 AFES 的核心规范。

AI 在开发过程中必须严格遵循本目录中的所有规则，确保生成代码符合企业级项目规范，并保持项目的一致性和可维护性。
