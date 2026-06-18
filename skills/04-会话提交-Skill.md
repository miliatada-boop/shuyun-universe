# 会话提交 Skill (Session Commit Skill)

## 核心理念

**每次改完就提交** — 定向提交（Staged Commit）

这不是说要提交所有改动，而是：
- 🎯 只提交这一次功能修改的相关部分
- 📝 保持 Git 历史清晰和原子性
- 🧠 便于之后回顾和追踪改动

---

## 为什么重要

### ❌ 不及时提交的后果

```
// 你这样做了：
- 下午 2:00 - 修复了 Bug A
- 下午 3:00 - 优化了功能 B  
- 下午 4:00 - 添加了特性 C
- ...继续改动...

到了工作日结束：
✗ 5 个小时的改动混在一起
✗ 无法快速查找某个功能是何时修改的
✗ 如果要回滚，无法精确回滚单个功能
✗ Code Review 时很难理解改动的逻辑
✗ 项目历史混乱，难以维护
```

### ✅ 及时提交的优势

```
// 你这样做：
- 下午 2:00 - 修复 Bug A → 提交
- 下午 3:00 - 优化功能 B → 提交
- 下午 4:00 - 添加特性 C → 提交

结果：
✅ 每个提交都代表一个完整的改动单元
✅ Git 日志清晰易懂
✅ 回滚精确到功能级别
✅ Code Review 逻辑清晰
✅ 便于追踪项目演进
✅ 为记忆沉淀提供素材
```

---

## 定向提交流程

### 步骤 1️⃣：查看当前改动

```bash
# 查看工作区状态
git status

# 查看详细改动
git diff
```

输出示例：
```
On branch main
Changes not staged for commit:
  modified:   src/auth/login.js
  modified:   src/components/Button.tsx
  new file:   src/utils/helpers.js
  new file:   docs/auth-guide.md

Untracked files:
  .DS_Store
  temp-debug.log
```

---

### 步骤 2️⃣：确定本次改动的范围

**重要**：不要提交所有改动！确认这一次改动是什么。

示例：
```
本次改动: 修复登录页面 Bug

相关文件:
✅ src/auth/login.js - 修复的核心逻辑
✅ src/components/Button.tsx - 修复的 UI 反馈
✅ tests/auth.test.js - 添加相关测试

❌ 应忽略:
- temp-debug.log (临时文件)
- .DS_Store (系统文件)
- 其他无关改动
```

---

### 步骤 3️⃣：暂存（Stage）相关文件

**方式 A：按文件逐个添加**（最精确）
```bash
# 添加特定文件
git add src/auth/login.js
git add src/components/Button.tsx
git add tests/auth.test.js

# 验证暂存内容
git status
```

**方式 B：使用交互式暂存**（推荐，更灵活）
```bash
# 进入交互式暂存模式
git add -p

# 逐个查看改动，选择是否暂存
# y = 暂存这个 hunk
# n = 跳过
# s = 分割 hunk（更细粒度）
# e = 编辑 hunk
# q = 退出
```

**方式 C：只暂存已追踪文件的改动**
```bash
# 暂存所有已追踪文件的修改（不包括新文件）
git add -u

# 或只暂存特定文件夹
git add src/auth/
```

---

### 步骤 4️⃣：验证暂存内容

```bash
# 查看将要提交的改动
git diff --staged

# 或使用更直观的工具
git difftool --staged
```

✅ 确保：
- 只包含这一次改动的相关文件
- 没有临时文件或调试代码混入
- 改动是逻辑完整的

---

### 步骤 5️⃣：提交改动

**提交信息模板**（推荐）：

```
[类型] 简述改动 (50字以内)

详细说明（可选，60字以内每行）
- 这个改动做了什么
- 为什么这样做
- 关键实现细节

[关联 Issue]（如有）
Closes: #123
```

**提交示例**：

```bash
# 最小化提交（快速）
git commit -m "fix: 修复登录页面崩溃问题"

# 详细提交（推荐）
git commit -m "fix: 修复登录页面 Input 验证崩溃

修复了当输入特殊字符时验证器抛出异常的问题。
- 改进了输入验证的错误处理
- 添加了相应的单元测试
- 更新了错误消息

Closes: #456"
```

---

### 步骤 6️⃣：验证提交成功

```bash
# 查看最新提交
git log -1

# 查看提交详情
git show

# 输出应该看起来像：
# commit abc1234567... (HEAD -> main)
# Author: Your Name
# Date:   Fri May 30 14:30:00 2026 +0800
#
#     fix: 修复登录页面崩溃问题
```

---

## 常见场景和处理方式

### 场景 1：修改了多个无关的功能

**问题**：
```bash
git status
# modified: src/auth/login.js (Bug 修复)
# modified: src/utils/math.js (性能优化)
# modified: README.md (文档更新)
```

**解决**：分三次提交！
```bash
# 第一次提交：Bug 修复
git add src/auth/login.js
git commit -m "fix: 修复登录崩溃"

# 第二次提交：性能优化
git add src/utils/math.js
git commit -m "perf: 优化数学计算性能"

# 第三次提交：文档
git add README.md
git commit -m "docs: 更新 README"
```

### 场景 2：单个文件有多个不同的改动

**问题**：
```
src/auth/login.js 既修复了 Bug，又添加了新功能
```

**解决**：使用交互式暂存
```bash
git add -p src/auth/login.js
# 逐个选择要暂存的 hunk（代码段）

# 只提交 Bug 修复部分
git commit -m "fix: 修复登录验证"

# 然后提交新功能部分
git add -p src/auth/login.js
git commit -m "feat: 添加记住我功能"
```

### 场景 3：已经修改了，但想修改提交信息

```bash
# 修改最后一次提交
git commit --amend -m "新的提交信息"

# 或打开编辑器编辑
git commit --amend
```

### 场景 4：不小心提交了不该提交的文件

```bash
# 从暂存区移除（但保留本地文件）
git reset src/unwanted-file.js

# 取消最后一次提交（保留改动，可重新暂存）
git reset --soft HEAD~1
```

---

## 最佳实践 Checklist

- [ ] 每个改动都代表一个完整的功能或修复
- [ ] 提交信息清晰、有意义
- [ ] 提交前用 `git diff --staged` 确认内容
- [ ] 使用 `git add -p` 进行细粒度控制
- [ ] 避免混合不相关的改动
- [ ] 一天至少提交一次（保持历史连续）
- [ ] 大改动要拆分成多个小提交
- [ ] 提交信息使用过去式或命令式

---

## 为什么不能"最后一起提交"？

❌ **不好的做法**：
```
整个工作日做完所有改动 → 最后一个大提交
```

⚠️ 后果：
- 无法快速定位问题来源
- 回滚时可能影响无关功能
- 难以理解提交的目的
- 项目历史可读性差

✅ **推荐做法**：
```
修复 Bug A → 提交
优化功能 B → 提交  
添加特性 C → 提交
更新文档 → 提交
```

优势：
- 清晰的改动历史
- 便于 Code Review
- 精确的回滚能力
- 项目演进可追踪

---

## 与其他 Skills 的配合

这个 Skill 与其他 Skills 完美配合：

1. **开发过程**：每完成一个改动就 Session Commit
2. **工作日结束**：运行维护模式
   - 检查是否有未提交改动 ⚠️
   - 提醒还有哪些改动需要提交
   - 确保项目状态干净

```
工作流程：
修复 Bug → Session Commit → 下班前运行维护模式 → 确认无遗漏 ✅
```

---

## 总结

**Session Commit 的本质**：
- 🎯 及时 + 定向 + 原子
- 💾 每个提交都是有意义的功能单元
- 📚 为项目留下清晰的进化轨迹
- 🧠 为记忆沉淀提供有价值的记录

**关键一句话**：
> "改完即提，原子提交。让 Git 历史成为项目的清晰故事。"

---

## 实际使用命令速查表

```bash
# 查看状态
git status

# 交互式暂存（推荐）
git add -p

# 暂存特定文件
git add <file1> <file2>

# 查看暂存内容
git diff --staged

# 提交改动
git commit -m "type: 描述"

# 查看最新提交
git log -1

# 如果提交错了
git reset --soft HEAD~1  # 撤销提交，保留改动
```
