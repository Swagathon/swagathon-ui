FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye


# Update and upgrade the system
RUN apt-get update \
    && apt-get upgrade -y

# Install dependencies
RUN apt-get install -y \
    netcat 

# Clean up
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*


# Install Solidity
RUN npm install -g solc

# Install Hardhat
RUN npm install -g hardhat