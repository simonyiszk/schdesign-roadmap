#!/bin/bash
docker build -t roadmap .
docker run -it --rm --publish 8000:8000 roadmap
