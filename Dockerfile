FROM node:20.13.1
LABEL authors="hridel"

# Setup workdir
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the project
RUN npm run build

# Port setting
ENV PORT 3000

# Port exposure
EXPOSE 3000

# Application start
CMD ["npm", "start"]