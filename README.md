# CST8918 Final Project: Terraform, Azure AKS, and GitHub Actions

## Project Overview

This capstone project applies Infrastructure as Code (IaC) concepts using Terraform to deploy Azure Kubernetes Service (AKS) clusters and managed Redis DB to support the Remix Weather Application. The project includes automated workflows using GitHub Actions for CI/CD pipelines.

## Team Members

- [Your Name](https://github.com/yourusername) - Team Lead
- [Team Member 2](https://github.com/teammember2) - Infrastructure Developer
- [Team Member 3](https://github.com/teammember3) - Application Developer

## Project Structure

```
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── modules/
│   ├── backend/            # Terraform backend configuration
│   ├── network/            # Base network infrastructure
│   ├── aks/               # AKS clusters
│   └── weather-app/       # Remix Weather Application resources
├── environments/
│   ├── dev/
│   ├── test/
│   └── prod/
├── app/                    # Remix Weather Application code
└── docs/                   # Documentation
```

## Prerequisites

- Azure CLI installed and authenticated
- Terraform installed (version >= 1.0)
- Docker installed
- kubectl installed
- GitHub account with repository access

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd final
   ```

2. **Initialize Terraform**
   ```bash
   cd environments/dev
   terraform init
   ```

3. **Deploy to development environment**
   ```bash
   terraform plan
   terraform apply
   ```

## Environments

- **Development (dev)**: Single-node AKS cluster for development and testing
- **Test**: Single-node AKS cluster for integration testing
- **Production (prod)**: Multi-node AKS cluster (1-3 nodes) for production workloads

## Infrastructure Components

- **Azure Resource Group**: `cst8918-final-project-group-<group-number>`
- **Virtual Network**: 10.0.0.0/14 with 4 subnets
- **AKS Clusters**: Kubernetes 1.32 with Standard B2s VM size
- **Azure Container Registry**: For Docker image storage
- **Azure Cache for Redis**: For weather API data caching
- **Azure Blob Storage**: Terraform backend storage

## GitHub Actions Workflows

1. **Static Analysis**: Runs on every push to any branch
2. **Terraform Plan**: Runs on pull requests to main branch
3. **Infrastructure Deployment**: Runs on merge to main branch
4. **Application Build**: Builds and pushes Docker images
5. **Application Deployment**: Deploys to test/prod environments

## Contributing

1. Create a feature branch from main
2. Make your changes
3. Create a pull request
4. Ensure all checks pass
5. Get approval from team members
6. Merge to main

## Clean Up

To avoid Azure charges, run the following after project completion:

```bash
cd environments/prod
terraform destroy
cd ../test
terraform destroy
cd ../dev
terraform destroy
```

## Screenshots

### GitHub Actions Workflows
![GitHub Actions Workflows](docs/github-actions.png)

## License

This project is for educational purposes as part of CST8918 - DevOps: Infrastructure as Code. 