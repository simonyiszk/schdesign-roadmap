FROM squidfunk/mkdocs-material

ADD . /docs/

WORKDIR /docs

RUN mkdocs build
