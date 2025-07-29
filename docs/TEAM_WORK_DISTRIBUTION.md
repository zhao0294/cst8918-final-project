# CST8918 期末作业 - 团队工作分配

## 项目概述

本文档概述了CST8918期末作业的工作分配计划，确保每个团队成员都有平等的贡献和pull request。

## 团队成员

- **Yuntian Du (DytAC-study)** - 基础设施和DevOps
- **Cong Zhao (zhao0294)** - 应用开发和CI/CD  
- **Yifan Jian (JianyiF)** - 测试和文档

## 工作分配计划

### 🏗️ **Yuntian Du (DytAC-study) - 基础设施和DevOps**

#### **Pull Request #1: 基础设施搭建**
**工作量**: 项目总量的20%
**重点**: Azure基础设施、Terraform模块

**任务**:
- ✅ 创建Terraform模块结构
- ✅ 配置Azure资源组和存储账户
- ✅ 设置多环境配置（dev/test/prod）
- ✅ 配置网络安全组和防火墙规则
- ✅ 实现后端状态管理

**包含的文件**:
```
modules/backend/main.tf
modules/backend/variables.tf
modules/backend/outputs.tf
modules/network/main.tf
modules/network/variables.tf
modules/network/outputs.tf
environments/dev/main.tf (基础配置)
environments/test/main.tf (基础配置)
environments/prod/main.tf (基础配置)
```

**Git命令**:
```bash
git checkout -b feature/infrastructure-setup
git add modules/backend/ modules/network/
git add environments/*/main.tf
git commit -m "feat: 添加基础设施Terraform模块"
git push origin feature/infrastructure-setup
# 创建Pull Request
```

#### **Pull Request #2: AKS部署**
**工作量**: 项目总量的20%
**重点**: Kubernetes、AKS集群、容器编排

**任务**:
- ✅ 在所有环境部署AKS集群
- ✅ 配置Kubernetes命名空间
- ✅ 设置Azure容器注册表
- ✅ 配置网络策略和负载均衡器
- ✅ 实现健康检查和监控

**包含的文件**:
```
modules/aks/main.tf
modules/aks/variables.tf
modules/aks/outputs.tf
environments/dev/main.tf (AKS配置)
environments/test/main.tf (AKS配置)
environments/prod/main.tf (AKS配置)
```

**Git命令**:
```bash
git checkout -b feature/aks-deployment
git add modules/aks/
git add environments/*/main.tf
git commit -m "feat: 部署AKS集群并配置Kubernetes"
git push origin feature/aks-deployment
# 创建Pull Request
```

---

### 💻 **Cong Zhao (zhao0294) - 应用开发和CI/CD**

#### **Pull Request #3: 天气应用开发**
**工作量**: 项目总量的20%
**重点**: Node.js开发、API集成、Docker

**任务**:
- ✅ 开发Node.js天气应用
- ✅ 集成OpenWeatherMap API
- ✅ 实现Docker容器化
- ✅ 创建应用配置文件
- ✅ 设置环境变量和密钥

**包含的文件**:
```
weather-app/app.js
weather-app/src/
weather-app/package.json
weather-app/Dockerfile
weather-app/.env.example
```

**Git命令**:
```bash
git checkout -b feature/weather-app
git add weather-app/
git commit -m "feat: 开发天气应用并集成API"
git push origin feature/weather-app
# 创建Pull Request
```

#### **Pull Request #4: CI/CD流水线**
**工作量**: 项目总量的20%
**重点**: GitHub Actions、自动化部署、代码质量

**任务**:
- ✅ 配置GitHub Actions工作流
- ✅ 设置自动化构建和部署
- ✅ 配置代码质量检查
- ✅ 实现多环境部署策略
- ✅ 在流水线中设置自动化测试

**包含的文件**:
```
.github/workflows/static-analysis.yml
.github/workflows/terraform-plan.yml
.github/workflows/terraform-apply.yml
.github/workflows/build-app.yml
.github/workflows/deploy-app.yml
```

**Git命令**:
```bash
git checkout -b feature/cicd-pipeline
git add .github/
git commit -m "feat: 添加GitHub Actions CI/CD流水线"
git push origin feature/cicd-pipeline
# 创建Pull Request
```

---

### 🧪 **Yifan Jian (JianyiF) - 测试和文档**

#### **Pull Request #5: 测试和质量保证**
**工作量**: 项目总量的10%
**重点**: 测试、监控、质量保证

**任务**:
- ✅ 编写单元测试和集成测试
- ✅ 配置健康检查和监控
- ✅ 实现错误处理和日志记录
- ✅ 性能测试和优化
- ✅ 安全测试和验证

**包含的文件**:
```
tests/unit/
tests/integration/
tests/performance/
monitoring/
health-checks/
```

**Git命令**:
```bash
git checkout -b feature/testing-monitoring
git add tests/ monitoring/
git commit -m "feat: 添加全面的测试和监控"
git push origin feature/testing-monitoring
# 创建Pull Request
```

#### **Pull Request #6: 文档和最终集成**
**工作量**: 项目总量的10%
**重点**: 文档、最终集成、项目演示

**任务**:
- ✅ 编写全面的项目文档
- ✅ 创建部署指南
- ✅ 最终集成测试
- ✅ 准备项目演示
- ✅ 创建API文档

**包含的文件**:
```
README.md
docs/PROJECT_OVERVIEW.md
docs/DEPLOYMENT_GUIDE.md
docs/API_DOCUMENTATION.md
docs/TROUBLESHOOTING.md
```

**Git命令**:
```bash
git checkout -b feature/documentation
git add docs/ README.md
git commit -m "feat: 添加全面的文档"
git push origin feature/documentation
# 创建Pull Request
```

## 工作量平衡总结

| 团队成员 | Pull Requests | 工作量 | 重点领域 |
|----------|---------------|--------|----------|
| **Yuntian Du** | 2个PR | 40% | 基础设施和DevOps |
| **Cong Zhao** | 2个PR | 40% | 应用开发和CI/CD |
| **Yifan Jian** | 2个PR | 20% | 测试和文档 |

## 开发工作流程

### 第一阶段：并行开发（第1-2周）
```
Yuntian: 基础设施搭建 (PR #1)
Cong: 天气应用开发 (PR #3)
Yifan: 测试框架 (PR #5)
```

### 第二阶段：集成（第3周）
```
Yuntian: AKS部署 (PR #2)
Cong: CI/CD流水线 (PR #4)
Yifan: 文档编写 (PR #6)
```

### 第三阶段：最终集成（第4周）
- 所有PR合并
- 端到端测试
- 最终文档审查
- 项目演示准备

## Pull Request指南

### 每个PR的要求：
1. **清晰的标题**: 描述所做的工作
2. **详细描述**: 实现了什么以及为什么
3. **测试**: 证明更改有效的证据
4. **文档**: 更新相关文档
5. **代码审查**: 至少2名团队成员必须批准

### PR模板：
```markdown
## Pull Request标题
对更改的简要描述

## 所做的更改
- [ ] 功能1
- [ ] 功能2
- [ ] 错误修复
- [ ] 文档更新

## 测试
- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试完成
- [ ] 无破坏性更改

## 文档
- [ ] README已更新
- [ ] API文档已更新
- [ ] 部署指南已更新

## 截图（如适用）
添加UI更改的截图

## 检查清单
- [ ] 代码遵循项目标准
- [ ] 自我审查完成
- [ ] 文档已更新
- [ ] 测试已添加/更新
```

## 成功标准

### 对每个团队成员：
- ✅ 至少提交2个pull request
- ✅ 代码被其他团队成员审查
- ✅ 文档已更新
- ✅ 测试已编写并通过
- ✅ 积极参与团队会议

### 对项目：
- ✅ 满足所有期末作业要求
- ✅ 应用已部署并可访问
- ✅ CI/CD流水线正常工作
- ✅ 文档完整
- ✅ 团队协作得到展示

## 时间线

| 周次 | Yuntian | Cong | Yifan |
|------|---------|------|-------|
| 1 | 基础设施搭建 | 天气应用 | 测试框架 |
| 2 | AKS部署 | CI/CD流水线 | 文档编写 |
| 3 | 集成测试 | 集成测试 | 最终集成 |
| 4 | 最终审查 | 最终审查 | 项目演示 |

## 沟通计划

### 每周团队会议：
- **周一**: 规划和进度审查
- **周三**: 周中检查
- **周五**: 周总结和下周规划

### 沟通渠道：
- **GitHub**: 代码审查和讨论
- **Slack/Discord**: 实时沟通
- **Email**: 正式更新和文档

## 风险缓解

### 潜在问题：
1. **工作量不均**: 定期检查和重新分配工作量
2. **集成冲突**: 早期沟通和协调
3. **技术困难**: 结对编程和知识共享
4. **时间线延迟**: 缓冲时间和灵活截止日期

### 应急计划：
- 团队成员在不同领域的交叉培训
- 每个团队成员的备用任务
- 定期进度跟踪和调整
- 阻塞问题的明确升级程序

## 结论

这种工作分配确保：
- ✅ 所有团队成员的平等贡献
- ✅ 不同项目领域的明确所有权
- ✅ 每人多个pull request
- ✅ 全面覆盖期末作业要求
- ✅ 团队间平衡的工作量
- ✅ 专业的开发工作流程

该计划促进协作，同时确保个人责任和对期末作业的贡献。 