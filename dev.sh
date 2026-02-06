#!/bin/bash

# 定义一个固定名字
CONTAINER_NAME="devblog"

# 1. 先尝试停止并删除旧的同名容器（防止冲突）
docker stop $CONTAINER_NAME >/dev/null 2>&1
docker rm $CONTAINER_NAME >/dev/null 2>&1

echo "正在后台启动开发环境..."

# 2. 使用 -d 后台运行，并指定 --name
docker run -d \
  --name $CONTAINER_NAME \
  --rm \
  -v $(pwd):/app \
  -w /app \
  -p 4321:4321 \
  node:20-slim \
  sh -c "npm install -g pnpm && pnpm install && pnpm dev --host"

echo "容器已在后台运行。名字: $CONTAINER_NAME"
echo "查看日志请运行: docker logs -f $CONTAINER_NAME"
echo "停止运行请运行: docker stop $CONTAINER_NAME"
