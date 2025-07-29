# CST8918 Final Assignment - Team Work Distribution

## Project Overview

This document outlines the work distribution plan for the CST8918 final assignment, ensuring equal contribution and pull requests from each team member.

## Team Members

- **Yuntian Du (DytAC-study)** - Infrastructure and DevOps
- **Cong Zhao (zhao0294)** - Application Development and CI/CD  
- **Yifan Jian (JianyiF)** - Testing and Documentation

## Work Distribution Plan

### 🏗️ **Yuntian Du (DytAC-study) - Infrastructure and DevOps**

#### **Pull Request #1: Infrastructure Setup**
**Workload**: 20% of total project
**Focus**: Azure infrastructure, Terraform modules

**Tasks**:
- ✅ Create Terraform module structure
- ✅ Configure Azure resource groups and storage accounts
- ✅ Set up multi-environment configuration (dev/test/prod)
- ✅ Configure network security groups and firewall rules
- ✅ Implement backend state management

**Files included**:
```
modules/backend/main.tf
modules/backend/variables.tf
modules/backend/outputs.tf
modules/network/main.tf
modules/network/variables.tf
modules/network/outputs.tf
environments/dev/main.tf (basic configuration)
environments/test/main.tf (basic configuration)
environments/prod/main.tf (basic configuration)
```

**Git commands**:
```bash
git checkout -b feature/infrastructure-setup
git add modules/backend/ modules/network/
git add environments/*/main.tf
git commit -m "feat: add infrastructure Terraform modules"
git push origin feature/infrastructure-setup
# Create Pull Request
```

#### **Pull Request #2: AKS Deployment**
**Workload**: 20% of total project
**Focus**: Kubernetes, AKS clusters, container orchestration

**Tasks**:
- ✅ Deploy AKS clusters in all environments
- ✅ Configure Kubernetes namespaces
- ✅ Set up Azure Container Registry
- ✅ Configure network policies and load balancers
- ✅ Implement health checks and monitoring

**Files included**:
```
modules/aks/main.tf
modules/aks/variables.tf
modules/aks/outputs.tf
environments/dev/main.tf (AKS configuration)
environments/test/main.tf (AKS configuration)
environments/prod/main.tf (AKS configuration)
```

**Git commands**:
```bash
git checkout -b feature/aks-deployment
git add modules/aks/
git add environments/*/main.tf
git commit -m "feat: deploy AKS clusters and configure Kubernetes"
git push origin feature/aks-deployment
# Create Pull Request
```

---

### 💻 **Cong Zhao (zhao0294) - Application Development and CI/CD**

#### **Pull Request #3: Weather Application Development**
**Workload**: 20% of total project
**Focus**: Node.js development, API integration, Docker

**Tasks**:
- ✅ Develop Node.js weather application
- ✅ Integrate OpenWeatherMap API
- ✅ Implement Docker containerization
- ✅ Create application configuration files
- ✅ Set up environment variables and secrets

**Files included**:
```
weather-app/app.js
weather-app/src/
weather-app/Dockerfile
weather-app/package.json
```

**Git commands**:
```bash
git checkout -b feature/weather-app-development
git add weather-app/
git commit -m "feat: develop weather application with API integration"
git push origin feature/weather-app-development
# Create Pull Request
```

#### **Pull Request #4: CI/CD Pipeline Setup**
**Workload**: 20% of total project
**Focus**: GitHub Actions, automated deployment

**Tasks**:
- ✅ Configure GitHub Actions workflows
- ✅ Set up automated build and deployment
- ✅ Implement multi-environment deployment
- ✅ Configure Azure service principal
- ✅ Set up federated credentials

**Files included**:
```
.github/workflows/build-app.yml
.github/workflows/deploy-app.yml
.github/workflows/static-analysis.yml
```

**Git commands**:
```bash
git checkout -b feature/cicd-pipeline
git add .github/workflows/
git commit -m "feat: implement CI/CD pipeline with GitHub Actions"
git push origin feature/cicd-pipeline
# Create Pull Request
```

---

### 🧪 **Yifan Jian (JianyiF) - Testing and Documentation**

#### **Pull Request #5: Testing and Quality Assurance**
**Workload**: 20% of total project
**Focus**: Testing, quality assurance, monitoring

**Tasks**:
- ✅ Implement unit tests for application
- ✅ Set up integration testing
- ✅ Configure monitoring and logging
- ✅ Implement health checks
- ✅ Create test documentation

**Files included**:
```
weather-app/tests/
docs/TESTING_GUIDE.md
docs/MONITORING_SETUP.md
```

**Git commands**:
```bash
git checkout -b feature/testing-and-qa
git add weather-app/tests/
git add docs/TESTING_GUIDE.md docs/MONITORING_SETUP.md
git commit -m "feat: implement comprehensive testing and monitoring"
git push origin feature/testing-and-qa
# Create Pull Request
```

#### **Pull Request #6: Documentation and Final Review**
**Workload**: 20% of total project
**Focus**: Documentation, final review, project completion

**Tasks**:
- ✅ Create comprehensive project documentation
- ✅ Write deployment guides
- ✅ Create user manuals
- ✅ Final code review and cleanup
- ✅ Prepare project presentation

**Files included**:
```
docs/DEPLOYMENT_GUIDE.md
docs/USER_MANUAL.md
docs/PROJECT_PRESENTATION.md
README.md (updates)
```

**Git commands**:
```bash
git checkout -b feature/documentation-final
git add docs/
git add README.md
git commit -m "feat: complete project documentation and final review"
git push origin feature/documentation-final
# Create Pull Request
```

## Development Workflow

### Git Workflow
1. **Create feature branch**: `git checkout -b feature/your-feature`
2. **Make changes**: Edit files and test locally
3. **Commit changes**: `git commit -m "feat: descriptive message"`
4. **Push branch**: `git push origin feature/your-feature`
5. **Create Pull Request**: Use GitHub web interface
6. **Code review**: Team members review and approve
7. **Merge**: Merge to main branch after approval

### Pull Request Guidelines
- **Title format**: `type: brief description`
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Description**: Include detailed description of changes
- **Review**: At least one team member must approve
- **Testing**: Ensure all tests pass before merging

### Communication
- **Daily standups**: Brief updates on progress
- **Weekly reviews**: Code review sessions
- **Documentation**: Keep all documentation updated
- **Issues**: Use GitHub issues for bug tracking

## Success Criteria

### Technical Requirements
- ✅ Multi-environment deployment (dev/test/prod)
- ✅ Infrastructure as Code with Terraform
- ✅ Containerized application with Docker
- ✅ Kubernetes orchestration with AKS
- ✅ Automated CI/CD pipeline
- ✅ Comprehensive testing and monitoring
- ✅ Complete documentation

### Team Requirements
- ✅ Equal workload distribution (20% each)
- ✅ 6 pull requests total (2 per team member)
- ✅ Code review process
- ✅ Documentation completion
- ✅ Project presentation ready

## Timeline

### Week 1-2: Infrastructure Setup
- Yuntian: Infrastructure and AKS deployment
- Cong: Application development
- Yifan: Testing framework setup

### Week 3-4: Application Development
- Yuntian: Monitoring and security
- Cong: CI/CD pipeline implementation
- Yifan: Testing and quality assurance

### Week 5-6: Integration and Testing
- Yuntian: Performance optimization
- Cong: Final application features
- Yifan: Documentation and presentation

### Week 7: Final Review and Submission
- All team members: Final review and cleanup
- All team members: Documentation completion
- All team members: Project presentation preparation

## Conclusion

This work distribution ensures:
- **Equal contribution** from all team members
- **Clear responsibilities** for each pull request
- **Comprehensive coverage** of all project requirements
- **Quality assurance** through code reviews
- **Complete documentation** for project success

The project demonstrates modern cloud-native development practices with Infrastructure as Code, containerization, and automated deployment pipelines. 