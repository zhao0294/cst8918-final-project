# CST8918 Final Project Setup Guide

## Prerequisites

Before starting this project, ensure you have the following installed:

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Terraform](https://www.terraform.io/downloads.html) (version >= 1.0)
- [Docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Node.js](https://nodejs.org/) (version >= 18)
- [Git](https://git-scm.com/)

## Initial Setup

### 1. Azure Authentication

First, authenticate with Azure:

```bash
az login
az account set --subscription <your-subscription-id>
```

### 2. Create Backend Infrastructure

Run the setup script to create the Azure backend infrastructure:

```bash
./setup-backend.sh
```

This script creates:
- Resource group: `cst8918-final-project-group-1`
- Storage account: `cst8918tfstate`
- Blob container: `terraform-state`

### 3. GitHub Repository Setup

1. Create a new GitHub repository
2. Add your professor (rlmckenney) as a collaborator
3. Add your team members as collaborators
4. Configure branch protection rules for the main branch:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Require at least one approving review before merging

### 4. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

- `AZURE_CLIENT_ID`: Azure service principal client ID
- `AZURE_TENANT_ID`: Azure tenant ID
- `AZURE_SUBSCRIPTION_ID`: Azure subscription ID
- `ACR_LOGIN_SERVER`: Azure Container Registry login server
- `ACR_USERNAME`: Azure Container Registry username
- `ACR_PASSWORD`: Azure Container Registry password

### 5. Azure Service Principal Setup

Create a service principal for GitHub Actions:

```bash
az ad sp create-for-rbac --name "cst8918-github-actions" \
  --role contributor \
  --scopes /subscriptions/<subscription-id>/resourceGroups/cst8918-final-project-group-1 \
  --sdk-auth
```

Use the output to configure GitHub secrets.

## Project Structure

```
├── .github/workflows/     # GitHub Actions workflows
├── modules/              # Terraform modules
│   ├── backend/          # Azure Blob Storage backend
│   ├── network/          # Network infrastructure
│   ├── aks/             # AKS clusters
│   └── weather-app/     # Application resources
├── environments/         # Environment configurations
│   ├── dev/            # Development environment
│   ├── test/           # Test environment
│   └── prod/           # Production environment
├── app/                 # Remix Weather Application
└── docs/               # Documentation
```

## Deployment Process

### 1. Infrastructure Deployment

The infrastructure is deployed automatically via GitHub Actions:

- **Static Analysis**: Runs on every push to any branch
- **Terraform Plan**: Runs on pull requests to main branch
- **Terraform Apply**: Runs on merge to main branch

### 2. Application Deployment

The application is deployed automatically:

- **Pull Request**: Deploys to test environment
- **Merge to Main**: Deploys to production environment

### 3. Manual Deployment

To deploy manually:

```bash
# Initialize Terraform
cd environments/dev
terraform init
terraform plan
terraform apply

# Repeat for test and prod environments
```

## Testing

### 1. Local Development

```bash
cd app
npm install
npm run dev
```

### 2. Infrastructure Testing

```bash
# Run static analysis
terraform fmt -check -recursive
terraform validate

# Run TFLint
tflint --init
tflint --recursive

# Run tfsec
tfsec
```

### 3. Application Testing

```bash
# Build the application
cd app
npm run build

# Test the build
npm run start
```

## Monitoring and Troubleshooting

### 1. Check AKS Clusters

```bash
# Get cluster credentials
az aks get-credentials --resource-group cst8918-final-project-group-1 --name <cluster-name>

# Check pods
kubectl get pods -n weather-app

# Check services
kubectl get services -n weather-app
```

### 2. Check Application Logs

```bash
kubectl logs -f deployment/weather-app -n weather-app
```

### 3. Check Infrastructure Status

```bash
# Check resource group
az group show --name cst8918-final-project-group-1

# Check AKS clusters
az aks list --resource-group cst8918-final-project-group-1

# Check Redis cache
az redis list --resource-group cst8918-final-project-group-1
```

## Clean Up

To avoid Azure charges, destroy all resources:

```bash
# Destroy production environment
cd environments/prod
terraform destroy

# Destroy test environment
cd ../test
terraform destroy

# Destroy development environment
cd ../dev
terraform destroy

# Delete resource group
az group delete --name cst8918-final-project-group-1 --yes
```

## Troubleshooting

### Common Issues

1. **Terraform Backend Error**: Ensure the storage account and container exist
2. **AKS Authentication Error**: Check service principal permissions
3. **Docker Build Error**: Ensure Docker is running and ACR credentials are correct
4. **GitHub Actions Failure**: Check secrets configuration and permissions

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Verify Azure resource permissions
- Ensure all required secrets are configured in GitHub
- Check Terraform state files for resource conflicts

## Security Considerations

- All sensitive data is stored in GitHub secrets
- Azure resources use managed identities where possible
- Network security groups are configured for each subnet
- Redis cache uses SSL connections only
- AKS clusters use Azure AD integration

## Cost Optimization

- Use Basic SKU for Redis cache in non-production environments
- Use Standard_B2s VM size for AKS nodes
- Enable auto-scaling for production AKS cluster
- Monitor resource usage in Azure portal
- Clean up resources after testing 