# AI Frontend Engineering Specification (AFES)

> 一套适用于 Vue3 + Element Plus + RuoYi-Vue3 的 AI 前端编码规范

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.1.0-green.svg)](CHANGELOG.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)

## 项目介绍

AFES（AI Frontend Engineering Specification）是一套专门为 AI 辅助编码场景设计的前端工程规范。它定义了 AI 在 Vue3 + Element Plus + RuoYi-Vue3 技术栈下的角色定位、工作原则、编码规则和输出标准，确保 AI 生成的代码具有一致性、可维护性和生产级质量。

本项目不是一套通用的前端规范，而是一套 **AI 专用** 的编码协议——它告诉 AI "你是谁"、"你该怎么做"、"你不能做什么"。

## 项目目标

- 建立 AI 在前端编码场景中的标准工作流程
- 定义 AI 的角色边界与决策规则
- 提供 Vue3 + Element Plus + RuoYi-Vue3 的完整编码规则
- 确保 AI 生成代码的一致性、可读性和可维护性
- 减少人工审查成本，提升协作效率

## 项目结构

```
.
├── README.md                # 项目说明
├── LICENSE                  # MIT 许可证
├── CHANGELOG.md             # 版本变更记录
├── CONTRIBUTING.md          # 贡献指南
├── .gitignore               # Git 忽略配置
│
├── docs/                    # 核心规范文档
│   ├── 00-introduction.md       # 规范介绍
│   ├── 01-role.md               # AI 角色定义
│   ├── 02-principles.md         # AI 工作原则
│   ├── 03-context-awareness.md  # 上下文感知
│   ├── 04-decision-rules.md     # 决策规则
│   ├── 05-workflow.md           # 工作流程
│   ├── 06-coding-rules.md       # 编码规则
│   ├── 07-page-rules.md         # 页面规则
│   ├── 08-component-rules.md    # 组件规则
│   ├── 09-api-rules.md          # API 规则
│   ├── 10-style-rules.md        # 样式规则
│   ├── 11-quality-rules.md      # 质量规则
│   ├── 12-self-review.md        # 自检清单
│   ├── 13-prompt-library.md     # Prompt 模板库
│   ├── 14-output-rules.md       # 输出规则
│   └── 15-forbidden-rules.md    # 禁止规则
│
├── templates/               # 代码模板
│   ├── pages/                   # 页面模板
│   └── components/              # 组件模板
│
├── prompts/                 # Prompt 工程
├── examples/                # 示例代码
├── checklists/              # 检查清单
├── knowledge/               # 知识库
├── references/              # 参考资料
└── assets/                  # 静态资源
```

## Roadmap

### v0.1.0 — 基础框架（当前）

- [x] 项目初始化
- [x] 核心规范文档（16 章）
- [ ] 基础页面模板
- [ ] 基础组件模板

### v0.2.0 — 模板与示例

- [ ] 完整页面模板集（CRUD、表单、详情、仪表盘）
- [ ] 完整组件模板集（表格、表单、弹窗、图表）
- [ ] Prompt 模板库
- [ ] 典型场景示例

### v0.3.0 — 工具链集成

- [ ] ESLint + Prettier 配置
- [ ] VSCode 配置建议
- [ ] AI 工具（Cursor / Copilot）配置集成
- [ ] 自动化检查脚本

### v1.0.0 — 正式发布

- [ ] 完整文档站
- [ ] 社区贡献机制
- [ ] 多技术栈扩展（React 等）

## 如何使用

### 作为 AI 的系统提示

将 `docs/` 目录下的规范文档作为 AI 工具的上下文或系统提示使用：

```
请先阅读以下规范文档，然后按照规范要求完成开发任务：

- docs/01-role.md
- docs/02-principles.md
- docs/06-coding-rules.md
- ...
```

### 作为团队规范

将本项目作为团队 AI 编码规范的参考标准，统一团队成员使用 AI 辅助编码的方式。

### 作为 Prompt 工程基础

参考 `prompts/` 目录下的模板，快速构建适用于不同场景的 Prompt。

## 目录介绍

| 目录 | 说明 |
|------|------|
| `docs/` | 核心规范文档，共 16 章，定义 AI 的角色、原则、流程和规则 |
| `templates/` | Vue3 + Element Plus 代码模板，开箱即用 |
| `prompts/` | 针对不同场景的 Prompt 模板 |
| `examples/` | 符合规范的示例代码 |
| `checklists/` | 开发、审查、部署各阶段的检查清单 |
| `knowledge/` | 技术知识库，包含 Vue3、Element Plus、RuoYi-Vue3 的最佳实践 |
| `references/` | 参考资料与外部链接 |
| `assets/` | 静态资源（图片、图标等） |

## 版本规划

| 版本 | 状态 | 说明 |
|------|------|------|
| v0.1.0 | 开发中 | 基础框架，核心规范文档 |
| v0.2.0 | 规划中 | 模板与示例完善 |
| v0.3.0 | 规划中 | 工具链集成 |
| v1.0.0 | 远期 | 正式发布，社区化运营 |

## 贡献方式

欢迎贡献！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细流程。

快速开始：

1. Fork 本仓库
2. 创建你的分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的修改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## License 说明

本项目采用 [MIT License](LICENSE) 开源许可证。

MIT License 是最宽松的开源许可证之一，允许你自由使用、修改、分发本项目的代码，仅需保留原始版权声明和许可证声明。

---

<p align="center">Built with ❤️ for AI-assisted frontend development</p>
