



# vuejs-portofolio

This project is cloned from  https://github.com/mahy209/vuejs-portofolio and adjusted to my preference

# Live Site
https://michaeltarriman.work/

# Docker image
docker pull tarmik0s/portfolio

### Prerequisites

1. Node 14
2. Docker
3. Kubernetes Cluster
4. Helm
5. ArgoCD

### Installation

```bash
# Clone the repository
git clone https://github.com/michaeltarriman/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Build the app
npm run build

# Run the vueJS
npm run serve


```bash
# If you want to run as docker container
# Clone the repository
git clone https://github.com/michaeltarriman/portfolio.git

# Navigate to the project directory
cd portfolio

# Build the project with docker
docker build -t portfolio .

# Run the app with docker
docker run -p 8080 portfolio

## 📝 License
MIT
