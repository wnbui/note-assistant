# EC2 Deployment Infrastructure (Terraform)

This folder (`infra/`) contains the Terraform configuration used to deploy the Note Assistant application to an AWS EC2 instance.

## Overview

- Provisions an EC2 instance
- Configures security group rules to allow:
  - SSH access on port 22
  - Web access on port 3000
- Sets up basic infrastructure for manual application deployment

## Folder Structure

note-assistant/

└── infra/

├── main.tf
└── variables.tf


## Deployment Instructions

1. Navigate to the `infra` directory:
   ```bash
   cd infra

2. Initialize Terraform:
   ```bash
   terraform init
   
3. Apply Terraform:
   ```bash
   terraform apply


This setup assumes your AWS CLI is configured with valid credentials (aws configure).
The EC2 instance is expected to run a Next.js application on port 3000.
A .env.local file must be manually uploaded to the EC2 instance after provisioning.
The setup.sh script is not used in this deployment and has been excluded.
