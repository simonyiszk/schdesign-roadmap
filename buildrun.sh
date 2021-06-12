#!/bin/bash

docker build -t schdesign/roadmap:mkdocs-material .

docker run \
  -it \
  -v "$PWD:/docs" \
  --rm \
  --publish 8000:8000 \
  schdesign/roadmap:mkdocs-material

