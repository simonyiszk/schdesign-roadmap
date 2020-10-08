FROM squidfunk/mkdocs-material:5.5.14

ADD . /docs/

WORKDIR /docs

RUN mkdocs build
