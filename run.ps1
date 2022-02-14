$version = "8.1.11"

# remove previous image
#docker image rm squidfunk/mkdocs-material:$version

# start docker image
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material:$version