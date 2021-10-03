FROM squidfunk/mkdocs-material:7.3.1

ADD . /docs/

WORKDIR /docs

RUN mkdocs build --verbose --strict
