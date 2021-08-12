# start docker image
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs schdesign/roadmap:mkdocs-material
