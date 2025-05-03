variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "key_name" {
  description = "Name of the EC2 key pair"
}

variable "public_key_path" {
  description = "Path to your public SSH key"
}
