#!/bin/bash
# 自动获取当前目录并进行容器化构建
docker run --rm -v $(pwd):/app -w /app node:20-slim sh -c "npm install -g pnpm && pnpm install && pnpm build"