# Étape 1 : Build de l'application React / Vite
FROM node:24-alpine AS builder

WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

USER node

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /home/node/app/dist /usr/share/nginx/html

EXPOSE 8080

USER nginx

CMD ["nginx", "-g", "daemon off;"]
