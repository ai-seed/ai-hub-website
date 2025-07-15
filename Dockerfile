# 构建阶段
FROM node:22.17.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --frozen-lockfile && npm run build

# 运行阶段
FROM node:22.17.0-alpine
WORKDIR /app

# 只复制必要的文件
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
