#!/bin/bash

# Setup script for Azure backend infrastructure
# This script creates the resource group and storage account for Terraform backend

set -e

# Configuration
RESOURCE_GROUP_NAME="cst8918-final-project-group-1"
STORAGE_ACCOUNT_NAME="cst8918tfstate"
CONTAINER_NAME="terraform-state"
LOCATION="East US"

echo "Setting up Azure backend infrastructure for Terraform..."

# Create resource group
echo "Creating resource group: $RESOURCE_GROUP_NAME"
az group create \
  --name $RESOURCE_GROUP_NAME \
  --location $LOCATION

# Create storage account
echo "Creating storage account: $STORAGE_ACCOUNT_NAME"
az storage account create \
  --resource-group $RESOURCE_GROUP_NAME \
  --name $STORAGE_ACCOUNT_NAME \
  --sku Standard_LRS \
  --encryption-services blob

# Get storage account key
STORAGE_KEY=$(az storage account keys list \
  --resource-group $RESOURCE_GROUP_NAME \
  --account-name $STORAGE_ACCOUNT_NAME \
  --query '[0].value' -o tsv)

# Create blob container
echo "Creating blob container: $CONTAINER_NAME"
az storage container create \
  --name $CONTAINER_NAME \
  --account-name $STORAGE_ACCOUNT_NAME \
  --account-key $STORAGE_KEY

echo "Backend infrastructure setup complete!"
echo "Resource Group: $RESOURCE_GROUP_NAME"
echo "Storage Account: $STORAGE_ACCOUNT_NAME"
echo "Container: $CONTAINER_NAME"
echo ""
echo "You can now initialize Terraform with:"
echo "terraform init" 