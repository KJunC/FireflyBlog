#!/bin/bash
# 开启开发模式预览（增加预装 pnpm 的步骤）
docker run --rm -it \
  -v $(pwd):/app \
  -w /app \
  -p 4321:4321 \
  node:20-slim \
  sh -c "npm install -g pnpm && pnpm install && pnpm dev --host"