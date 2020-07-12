#!/bin/sh

echo "You should build your site before run."

docker run -it --rm --publish 8000:8000 roadmap
