FROM squidfunk/mkdocs-material:7.1.8

ADD . /docs/

WORKDIR /docs

RUN mkdocs build
