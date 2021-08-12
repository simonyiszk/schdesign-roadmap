FROM squidfunk/mkdocs-material:7.2.4

ADD . /docs/

WORKDIR /docs

RUN mkdocs build --verbose --strict
