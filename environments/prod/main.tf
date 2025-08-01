terraform {
  required_version = ">= 1.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "cst8918-final-project-group-1"
    storage_account_name = "cst8918tfstate2025"
    container_name       = "terraform-state"
    key                  = "prod/terraform.tfstate"
  }
}

provider "azurerm" {
  features {}
}

locals {
  environment = "prod"
  location    = "East US"
  tags = {
    Environment = local.environment
    Project     = "CST8918-Final"
    Team        = "Group-1"
  }
}

# Network Module
module "network" {
  source = "../../modules/network"

  resource_group_name = "cst8918-final-project-group-1"
  location            = local.location
  environment         = local.environment
  tags                = local.tags
}

# AKS Module for Production Environment
module "aks" {
  source = "../../modules/aks"

  resource_group_name = module.network.resource_group_name
  location            = local.location
  environment         = local.environment
  subnet_id           = module.network.prod_subnet_id
  node_count          = 1
  enable_auto_scaling = true
  min_count           = 1
  max_count           = 3
  tags                = local.tags
}

# Weather App Module for Production Environment
# module "weather_app" {
#   source = "../../modules/weather-app"
#
#   resource_group_name = module.network.resource_group_name
#   location            = local.location
#   environment         = local.environment
#   acr_name            = "cst8918acr"
#   redis_capacity      = 1
#   redis_sku           = "Basic"
#   app_replicas        = 2
#   kubernetes_host     = module.aks.host
#   kubernetes_client_certificate = module.aks.client_certificate
#   kubernetes_client_key         = module.aks.client_key
#   kubernetes_cluster_ca_certificate = module.aks.cluster_ca_certificate
#   tags                = local.tags
# } 