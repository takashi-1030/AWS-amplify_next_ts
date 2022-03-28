FROM node:14.17.0

# amplify CLI
RUN npm install -g @aws-amplify/cli

WORKDIR /var/www/amplify