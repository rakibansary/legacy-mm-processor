#!/bin/bash
set -eo pipefail
ENV=$1
#AWS_ACCOUNT_ID=$(eval "echo \$${ENV}_AWS_ACCOUNT_ID")
#AWS_REGION=$(eval "echo \$${ENV}_AWS_REGION")
#DB_SERVER_NAME=$(eval "echo \$${ENV}_DB_SERVER_NAME")
#DB_SERVER_PORT=$(eval "echo \$${ENV}_DB_SERVER_PORT")

# Builds Docker image of the app.
TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/legacy-mm-processor:$CIRCLE_SHA1
TAG="lsp-app:latest"

# Copies "node_modules" from the created image, if necessary for caching.
docker create --name app $TAG

if [ -d node_modules ]
then
  # If "node_modules" directory already exists, we should compare
  # "package-lock.json" from the code and from the container to decide,
  # whether we need to re-cache, and thus to copy "node_modules" from
  # the Docker container.
  mv package-lock.json old-package-lock.json
  docker cp app:/app/package-lock.json package-lock.json
  set +eo pipefail
  UPDATE_CACHE=$(cmp package-lock.json old-package-lock.json)
  set -eo pipefail
else
  # If "node_modules" does not exist, then cache must be created.
  UPDATE_CACHE=1
fi

if [ "$UPDATE_CACHE" == 1 ]
then
  docker cp app:/app/node_modules .
fi
