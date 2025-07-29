# Azure Federated Credentials Configuration

This document records the Azure federated identity credentials configured for GitHub Actions.

## Service Principal Information

- **Application ID**: `e93e0bd6-0dd9-461d-ae83-acc7821297df`
- **Display Name**: `cst8918-final-project-sp`
- **Object ID**: `5dda868e-fec6-40e0-a6fd-643b3f46d2b4`

## Configured Federated Credentials

| Name | Subject | Purpose |
|------|---------|---------|
| `github-actions` | `repo:zhao0294/cst8918-final-project:environment:test` | Test environment deployments |
| `github-actions-dev` | `repo:zhao0294/cst8918-final-project:environment:dev` | Dev environment deployments |
| `github-actions-prod` | `repo:zhao0294/cst8918-final-project:environment:prod` | Production environment deployments |
| `github-actions-pr` | `repo:zhao0294/cst8918-final-project:pull_request` | Pull request workflows |
| `github-actions-push` | `repo:zhao0294/cst8918-final-project:ref:refs/heads/main` | Push to main branch workflows |

## Configuration Commands

### Create Federated Credentials

```bash
# For test environment
az ad app federated-credential create \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --parameters '{
    "name": "github-actions",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:zhao0294/cst8918-final-project:environment:test",
    "audiences": ["api://AzureADTokenExchange"]
  }'

# For dev environment
az ad app federated-credential create \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --parameters '{
    "name": "github-actions-dev",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:zhao0294/cst8918-final-project:environment:dev",
    "audiences": ["api://AzureADTokenExchange"]
  }'

# For production environment
az ad app federated-credential create \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --parameters '{
    "name": "github-actions-prod",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:zhao0294/cst8918-final-project:environment:prod",
    "audiences": ["api://AzureADTokenExchange"]
  }'

# For pull requests
az ad app federated-credential create \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --parameters '{
    "name": "github-actions-pr",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:zhao0294/cst8918-final-project:pull_request",
    "audiences": ["api://AzureADTokenExchange"]
  }'

# For push to main
az ad app federated-credential create \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --parameters '{
    "name": "github-actions-push",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:zhao0294/cst8918-final-project:ref:refs/heads/main",
    "audiences": ["api://AzureADTokenExchange"]
  }'
```

### List Federated Credentials

```bash
az ad app federated-credential list \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --query "[].{name:name, subject:subject}" \
  -o table
```

### Delete Federated Credential

```bash
az ad app federated-credential delete \
  --id e93e0bd6-0dd9-461d-ae83-acc7821297df \
  --federated-credential-id <credential-id>
```

## GitHub Secrets Required

The following secrets must be configured in the GitHub repository:

- `AZURE_CLIENT_ID`: `e93e0bd6-0dd9-461d-ae83-acc7821297df`
- `AZURE_TENANT_ID`: `e39de75c-b796-4bdd-888d-f3d21250910c`
- `AZURE_SUBSCRIPTION_ID`: `b296b604-9c48-4e98-bb66-56c661c39a1d`
- `ACR_LOGIN_SERVER`: Azure Container Registry login server
- `ACR_USERNAME`: ACR username
- `ACR_PASSWORD`: ACR password

## Troubleshooting

### Common Errors

1. **AADSTS70025**: No configured federated identity credentials
   - Solution: Create appropriate federated credential for the subject

2. **AADSTS700213**: No matching federated identity record found
   - Solution: Check subject, audience, and issuer match the presented assertion

3. **Interactive authentication needed**
   - Solution: Ensure federated credentials are properly configured

### Verification Steps

1. Check Azure service principal exists
2. Verify federated credentials are configured
3. Ensure GitHub secrets are set correctly
4. Test with a simple workflow first

## Security Notes

- Federated credentials are more secure than client secrets
- No need to store or rotate secrets
- Credentials are automatically managed by Azure AD
- Subject must match exactly with GitHub Actions context 