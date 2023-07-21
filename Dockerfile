FROM node:18.16.0-alpine
ENV MYSQL_HOST='converte-me-test-instance-1.cm2ev0vm4g3w.sa-east-1.rds.amazonaws.com'
ENV MYSQL_PORT=3306
ENV MYSQL_USERNAME='admin'
ENV MYSQL_PASSWORD='vRnW>MlRt_P_+iX1N00E!LdKqa<D'
ENV JWT_SECRET_KEY='fb645857-7a93-48dd-91c0-001fa9d8f026'

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]