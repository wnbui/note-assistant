#!/bin/bash
set -e

# Log everything
exec > >(tee /var/log/setup.log|logger -t user-data -s 2>/dev/console) 2>&1

# Install Docker
apt-get update
apt-get install -y docker.io git

# Enable & start Docker
systemctl enable docker
systemctl start docker


usermod -aG docker ubuntu
# Clone your actual repo
cd /home/ubuntu
git clone --depth=1 https://github.com/wnbui/note-assistant.git
cd note-assistant

# Build the Docker image
docker build -t note-assistant .

# Run the app
docker run -d -p 3000:3000 note-assistant

