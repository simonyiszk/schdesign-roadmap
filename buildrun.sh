#!/bin/bash

docker build -t roadmap .

docker run \
  -it \
  -v "$PWD:/docs" \
  --rm \
  --publish 8000:8000 \
  roadmap

