# remove previous image
docker image rm schdesign/roadmap:mkdocs-material

# build docker image
docker build -t schdesign/roadmap:mkdocs-material .
