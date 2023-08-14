FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run flip-board:build
RUN npm run wingv:build


FROM nginx:alpine
WORKDIR /app
# 复制构建好的应用到 Nginx 的默认站点目录
COPY --from=builder /app/dist/ /usr/share/nginx/html
# 替换默认的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf
# expose 1314 port
EXPOSE 1314
# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]

