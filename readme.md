# Attempt to install npm
# https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
# OSX or Linux Node version managers
# nvm
# https://github.com/creationix/nvm

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Confirm nvm version
nvm --version # 0.40.1

# Install the latest node
nvm install node

# Confirm npm version
npm -v # 10.8.2

# Now install Yarn
# https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
npm install --global yarn

# Confirm Yarn version
yarn -v # 1.22.22

# Attempt to build backend
./gradlew build 
# zsh: permission denied: ./gradlew

# Modify rwx on gradle
chmod 777 ./gradlew

# Attempt to build backend
./gradlew build 
# > java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid'

# Upgrade Lombok to 1.18.30+ for Java 21
# https://stackoverflow.com/questions/77171270/compilation-error-after-upgrading-to-jdk-21-nosuchfielderror-jcimport-does-n

# Run the backend
java -jar build/libs/TDDPairing-0.0.1-SNAPSHOT.jar 

# Build the frontend Docker image
docker build -f Dockerfile -t tdd-pairing/tdd-frontend:0.0.1 .
# Run the frontend Docker image
docker run -d --rm -p 3000:3000 tdd-pairing/tdd-frontend:0.0.1

# Build the backend Docker image
docker build -f Dockerfile -t tdd-pairing/tdd-backend:0.0.1 .
# Run the backend Docker image
docker run -d --rm -p 8080:8080 tdd-pairing/tdd-backend:0.0.1
