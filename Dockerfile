FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
RUN npm install -g serve
COPY dist ./dist
EXPOSE 5000
CMD ["serve", "dist", "-l", "5000"]