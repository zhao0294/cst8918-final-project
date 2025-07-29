# CST8918 Final Project - Infrastructure as Code with AKS

## 📋 Project Overview

This project demonstrates Infrastructure as Code (IaC) using Terraform, Azure Kubernetes Service (AKS), and GitHub Actions for a Remix Weather Application. The project includes multi-environment deployment (dev, test, prod) with automated CI/CD pipelines.

## 👥 Team Members

- [Yuntian Du](https://github.com/DytAC-study)
- [Cong Zhao](https://github.com/zhao0294) 
- [Yifan Jian](https://github.com/JianyiF)

## 🚀 Quick Start

### Prerequisites

- Azure CLI
- Terraform
- Docker
- Node.js 18+
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/zhao0294/cst8918-final-project.git
   cd cst8918-final-project
   ```

2. **Azure Authentication**
   ```bash
   az login
   az account set --subscription <your-subscription-id>
   ```

3. **Deploy Infrastructure**
   ```bash
   cd environments/dev
   terraform init
   terraform apply -auto-approve
   ```

4. **Deploy Application**
   ```bash
   cd ../../app
   npm install
   npm run build
   ```

## 🏗️ Infrastructure Components

### Azure Resources
- **Resource Group**: `cst8918-final-project-group-1`
- **Virtual Network**: `10.0.0.0/14` with 4 subnets
  - Production: `10.0.0.0/16`
  - Test: `10.1.0.0/16`
  - Development: `10.2.0.0/16`
  - Admin: `10.3.0.0/16`
- **AKS Clusters**: Multi-environment Kubernetes clusters
- **Azure Container Registry (ACR)**: Container image storage
- **Azure Cache for Redis**: Application caching
- **Network Security Groups**: Security policies

### Environments
- **Development**: Single node, basic resources
- **Test**: Single node, basic resources  
- **Production**: Multi-node with auto-scaling

## 🔄 GitHub Actions Workflows

### Static Analysis (`static-analysis.yml`)
- Runs on push to any branch
- Terraform format, validate, lint, and security scan

### Terraform Plan (`terraform-plan.yml`)
- Runs on pull requests to main
- Plans changes for dev, test, prod environments

### Terraform Apply (`terraform-apply.yml`)
- Runs on push to main
- Applies infrastructure changes

### Build Application (`build-app.yml`)
- Runs on pull requests with app changes
- Builds and pushes Docker images to ACR

### Deploy Application (`deploy-app.yml`)
- Deploys to test environment on PR
- Deploys to production on merge

## 🎯 Team Collaboration

### Current Status
- ✅ Infrastructure code completed
- ✅ GitHub Actions workflows configured
- ✅ Azure resources being deployed
- 🔄 Application development in progress

### Team Tasks

#### Yuntian Du (DytAC-study) - Frontend Development
**Current Tasks:**
- [ ] Clone repository and create feature branch
- [ ] Integrate OpenWeatherMap API
- [ ] Implement Redis caching
- [ ] Optimize UI/UX design
- [ ] Add error handling and loading states

**Commands to start:**
```bash
git clone https://github.com/zhao0294/cst8918-final-project.git
cd cst8918-final-project
git checkout -b feature/frontend-app
cd app
npm install
npm run dev
```

#### Yifan Jian (JianyiF) - DevOps & Deployment
**Current Tasks:**
- [ ] Clone repository and create feature branch
- [ ] Optimize AKS cluster configuration
- [ ] Set up monitoring and logging
- [ ] Configure health checks and auto-scaling
- [ ] Implement blue-green deployment strategy

**Commands to start:**
```bash
git clone https://github.com/zhao0294/cst8918-final-project.git
cd cst8918-final-project
git checkout -b feature/devops-deployment
```

#### Cong Zhao (zhao0294) - Infrastructure & Backend
**Current Tasks:**
- [ ] Complete infrastructure deployment
- [ ] Configure GitHub Secrets
- [ ] Test GitHub Actions workflows
- [ ] Deploy to test and production environments
- [ ] Monitor and maintain infrastructure

### Collaboration Workflow
1. **Create feature branches** for your work
2. **Make regular commits** with descriptive messages
3. **Create Pull Requests** for review
4. **Get 2-person approval** before merging
5. **Test thoroughly** before deployment

## 📁 Project Structure

```
cst8918-final-project/
├── .github/workflows/          # GitHub Actions
├── modules/                    # Terraform modules
│   ├── backend/               # Storage backend
│   ├── network/               # VNet and subnets
│   ├── aks/                   # Kubernetes clusters
│   └── weather-app/           # Application resources
├── environments/               # Environment configurations
│   ├── dev/                   # Development environment
│   ├── test/                  # Test environment
│   └── prod/                  # Production environment
├── app/                       # Remix weather application
│   ├── app/                   # Application code
│   ├── public/                # Static assets
│   └── Dockerfile             # Container configuration
└── docs/                      # Documentation
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the `app` directory:
```env
OPENWEATHER_API_KEY=your-api-key-here
REDIS_URL=redis://localhost:6379
```

### GitHub Secrets
Configure these secrets in your GitHub repository:
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`
- `AZURE_SUBSCRIPTION_ID`
- `AZURE_TENANT_ID`
- `ACR_USERNAME`
- `ACR_PASSWORD`

## 🧪 Testing

### Local Testing
```bash
cd app
npm install
npm run dev
```

### Infrastructure Testing
```bash
cd environments/dev
terraform plan
terraform apply
```

### GitHub Actions Testing
- Push changes to trigger workflows
- Check Actions tab for results

## 📊 Monitoring

### Azure Monitor
- AKS cluster metrics
- Application performance
- Resource utilization

### Application Health
- Health check endpoint: `/health`
- Kubernetes probes configured
- Auto-scaling based on metrics

## 🧹 Cleanup

### Destroy Infrastructure
```bash
cd environments/dev
terraform destroy -auto-approve
```

### Remove GitHub Secrets
- Delete secrets from repository settings
- Remove Azure service principal

## 📈 Future Enhancements

- [ ] Multi-region deployment
- [ ] Advanced monitoring and alerting
- [ ] Blue-green deployment strategy
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Cost optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
6. Get team approval
7. Merge after review

## 📞 Support

For questions or issues:
- Create GitHub Issues
- Contact team members
- Check documentation in `/docs`

---

**CST8918 Final Project - Infrastructure as Code with Azure Kubernetes Service** 