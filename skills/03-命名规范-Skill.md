# 命名规范 Skill (Naming Convention Skill)

## 核心原则

```
一致性 → 清晰性 → 追踪性 → 可读性 → 可维护性
```

一个清晰的命名体系让每一次更新都有迹可循。

---

## 1️⃣ Session 级别命名

### 格式
```
[项目类型]-[主要目标]·[版本]·[日期]
```

### 命名标签（项目类型）

| 标签 | 含义 | 示例 |
|------|------|------|
| `feat-` | 新功能开发 | `feat-dark-mode·实现深色主题·v1.0·2026-05-30` |
| `fix-` | Bug 修复 | `fix-login-crash·修复登录页崩溃·v0.9.1·2026-05-30` |
| `perf-` | 性能优化 | `perf-search·优化搜索性能·v1.2·2026-05-30` |
| `refactor-` | 代码重构 | `refactor-auth·重构认证模块·v2.0·2026-05-30` |
| `docs-` | 文档更新 | `docs-api·完善 API 文档·v1.5·2026-05-30` |
| `maint-` | 项目维护 | `maint-cleanup·项目深度维护·v1.2·2026-05-30` |
| `ci-` | CI/CD 改进 | `ci-docker·优化 Docker 配置·v2.1·2026-05-30` |
| `skill-` | 创建/更新 Skill | `skill-maint-mode·创建维护模式 Skill·v1.0·2026-05-30` |

### 好的 Session 命名
```
✅ feat-payment·集成支付功能·v1.2·2026-05-30
✅ fix-auth-token·修复 token 过期问题·v1.1.1·2026-05-30
✅ perf-database·优化数据库查询·v2.0·2026-05-30
✅ skill-commit·创建 Session Commit Skill·v1.0·2026-05-30
```

### 不好的 Session 命名
```
❌ work-today
❌ 做功能
❌ 修复 bug 和优化
❌ session-1
```

---

## 2️⃣ Skill 文件夹 + 名称

### 格式
```
.github/skills/{skill-name}/SKILL.md
.agents/skills/{skill-name}/SKILL.md
```

### 命名规则

- **kebab-case**（小写 + 短横线）
- 名字应该是**动词 + 对象**或**操作描述**
- 长度 2-4 个单词

### 好的 Skill 命名
```
✅ project-maintenance-mode      # 明确指出是项目维护模式
✅ session-commit                # 清楚说明是会话提交
✅ code-quality-audit            # 代码质量审计
✅ dependency-upgrade            # 依赖升级
✅ backup-versioning             # 备份版本控制
```

### 不好的 Skill 命名
```
❌ maint                         # 太缩写
❌ skill-1                       # 无意义
❌ do-stuff                      # 太模糊
❌ MaintenanceMode               # 应该是 kebab-case
```

---

## 3️⃣ Git Commit 消息

### Conventional Commits 格式（业界标准）

```
<type>([scope]): <subject>

<body>

<footer>
```

### Type 标签

| 标签 | 用途 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat(auth): add two-factor authentication` |
| `fix` | Bug 修复 | `fix(login): resolve token expiration issue` |
| `perf` | 性能优化 | `perf(search): optimize database queries` |
| `refactor` | 代码重构 | `refactor(api): simplify error handling` |
| `test` | 测试相关 | `test(auth): add unit tests for login` |
| `docs` | 文档更新 | `docs(readme): update installation guide` |
| `style` | 格式/样式 | `style(css): fix indentation` |
| `chore` | 构建/工具 | `chore(deps): upgrade typescript to 5.0` |
| `ci` | CI/CD | `ci(github): add automated testing workflow` |

### 详细格式说明

#### 最简单（快速 commit）
```bash
git commit -m "feat(auth): add two-factor authentication"
```

#### 标准格式（推荐）
```bash
git commit -m "feat(auth): add two-factor authentication

- 实现基于 TOTP 的双因素认证
- 添加恢复码功能
- 更新用户设置页面

关闭: #123"
```

#### 完整格式（重要改动）
```bash
git commit -m "feat(auth): add two-factor authentication

实现基于 TOTP 的双因素认证系统。

改动:
- 添加 TOTP 生成和验证
- 创建备份恢复码
- 更新用户设置 UI
- 添加数据库迁移脚本
- 添加完整的单元测试

这满足了 Q2 的安全需求。

破坏性改动: 无

关闭: #123, #124
共同作者: John Doe <john@example.com>"
```

### Scope（作用域）- 常见例子

```
feat(auth)       - 认证相关
feat(api)        - API 相关
feat(ui)         - 用户界面
feat(database)   - 数据库
feat(performance)- 性能优化
feat(docs)       - 文档
feat(config)     - 配置文件
feat(test)       - 测试
```

### Subject（主题）书写规则

- ✅ 使用**命令式**：`add` 而不是 `added` 或 `adds`
- ✅ **不要大写**开头：`fix` 不是 `Fix`
- ✅ **不要句号**：`fix issue` 不是 `fix issue.`
- ✅ **简洁**：50 字以内
- ✅ **具体清晰**：说明做了什么

---

## 4️⃣ 版本号命名

### 语义版本 (Semantic Versioning)

```
MAJOR.MINOR.PATCH[-prerelease][+metadata]

例如：v1.2.3-beta.1+build.20260530
```

| 场景 | 版本变化 | 示例 |
|------|---------|------|
| 新功能 | MINOR +1 | v1.0.0 → v1.1.0 |
| Bug 修复 | PATCH +1 | v1.1.0 → v1.1.1 |
| 重大改变 | MAJOR +1 | v1.1.1 → v2.0.0 |
| 测试版 | -alpha/-beta | v2.0.0-beta.1 |
| 候选版 | -rc | v2.0.0-rc.1 |

---

## 5️⃣ 项目结构中的文件/文件夹命名

### 文件夹命名

**kebab-case**（推荐）：
```
src/auth-module/
src/user-management/
src/payment-gateway/
```

**camelCase**（次选）：
```
src/authModule/
src/userManagement/
```

### 文件命名

**组件/模块文件（PascalCase）**：
```
src/components/UserProfile.tsx
src/pages/Dashboard.tsx
```

**工具/工具函数（camelCase）**：
```
src/utils/formatDate.ts
src/helpers/validateEmail.ts
```

**配置文件（kebab-case 或 lowercase）**：
```
config/auth-config.js
.github/workflows/ci-pipeline.yml
```

### 测试文件命名

**方案 1**（推荐）：测试文件在同目录
```
src/auth/login.ts
src/auth/login.test.ts
```

**方案 2**：测试文件在专门目录
```
src/auth/login.ts
__tests__/auth/login.test.ts
```

---

## 6️⃣ 分支命名

### 分支命名格式

```
{type}/{scope}/{description}

例如：
feature/user-authentication
fix/login-crash
refactor/database-schema
docs/api-guide
maintenance/cleanup
```

### 分支标签

| 标签 | 用途 | 示例 |
|------|------|------|
| `feature/` | 新功能分支 | `feature/dark-mode` |
| `fix/` | 修复分支 | `fix/memory-leak` |
| `refactor/` | 重构分支 | `refactor/auth-flow` |
| `docs/` | 文档分支 | `docs/api-reference` |
| `test/` | 测试分支 | `test/e2e-coverage` |
| `maintenance/` | 维护分支 | `maintenance/dependency-update` |

---

## 7️⃣ PR（Pull Request）标题

### 格式

```
[Type] Subject - 描述

例如：
[feat] Add two-factor authentication - Implement TOTP and recovery codes
[fix] Resolve login crash - Fix token validation logic
[perf] Optimize search queries - Add database indexing
```

### 标签

```
[feat]      新功能
[fix]       Bug 修复
[perf]      性能优化
[refactor]  代码重构
[docs]      文档更新
[test]      测试相关
[chore]     维护/工具
[wip]       进行中（Work In Progress）
```

---

## 8️⃣ Issue 标题

### 格式

```
[Priority] [Type] 具体问题描述

例如：
[P0] [bug] Login page crashes when entering special characters
[P2] [enhancement] Add dark mode support
[P1] [question] How to implement OAuth integration?
```

### 优先级

```
[P0] - Critical 紧急
[P1] - High    重要
[P2] - Medium  中等
[P3] - Low     低
```

### Issue 类型

```
[bug]           - 缺陷报告
[feature]       - 功能请求
[enhancement]   - 改进建议
[documentation] - 文档相关
[question]      - 提问
[discussion]    - 讨论
```

---

## 完整命名速查表

| 层级 | 格式 | 示例 |
|------|------|------|
| **Session** | `[type]-[name]·[desc]·[v]·[date]` | `feat-auth·add 2FA·v1.1·2026-05-30` |
| **Skill** | `kebab-case` | `session-commit` |
| **Commit** | `type(scope): subject` | `feat(auth): add two-factor auth` |
| **Branch** | `type/scope/description` | `feature/dark-mode` |
| **Version** | `MAJOR.MINOR.PATCH` | `v1.2.3` |
| **PR** | `[Type] Subject` | `[feat] Add dark mode` |
| **Issue** | `[P] [Type] Description` | `[P1] [bug] Login crash` |
| **Files** | `camelCase` 或 `kebab-case` | `formatDate.ts` 或 `auth-module/` |

---

## 💡 关键原则

1. **一致性** - 整个项目保持统一的命名风格
2. **清晰性** - 一眼能看懂这个更新做了什么
3. **追踪性** - 便于日后查找和理解改动
4. **可读性** - 在 Git 日志中能快速扫描
5. **可维护性** - 新成员也能理解命名含义

---

**记住**: 好的命名规范是团队协作的基础。花时间统一规范，长期来看能节省大量时间。
