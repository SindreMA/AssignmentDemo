#!/bin/bash

IMAGE_NAME="react-demo-1"
REGISTRY="registry.k8s.sindrema.com/images"
TAG="latest"

echo "Building Docker image..."
docker build -t ${IMAGE_NAME}:${TAG} .

echo "Tagging image for registry..."
docker tag ${IMAGE_NAME}:${TAG} ${REGISTRY}/${IMAGE_NAME}:${TAG}

echo "Pushing image to registry..."
docker push ${REGISTRY}/${IMAGE_NAME}:${TAG}

echo "Done! Image pushed to ${REGISTRY}/${IMAGE_NAME}:${TAG}"
