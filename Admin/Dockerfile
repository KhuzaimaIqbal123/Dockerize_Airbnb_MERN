# C. Dockerfile for Admin (inside `Admin/` folder)
# File: Admin/Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5174
CMD ["npm", "run", "dev"]