FROM squidfunk/mkdocs-material:7.3.4

ADD . /docs/

WORKDIR /docs

RUN mkdocs build --verbose --strict
