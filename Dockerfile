FROM squidfunk/mkdocs-material:7.1.7

ADD . /docs/

WORKDIR /docs

RUN mkdocs build
