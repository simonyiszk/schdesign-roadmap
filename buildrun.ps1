# build docker image
docker build -t roadmap .

# start docker image
#docker run -it -v "${PWD}:/docs" --rm --publish 8000:8000 roadmap
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs roadmap
