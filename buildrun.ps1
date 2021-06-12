# remove previous image
docker image rm schdesign/roadmap:mkdocs-material

# build docker image
docker build -t schdesign/roadmap:mkdocs-material .

# start docker image
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs schdesign/roadmap:mkdocs-material
