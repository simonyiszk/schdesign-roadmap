FROM squidfunk/mkdocs-material:8.1.1

ADD . /docs/

WORKDIR /docs

RUN mkdocs build --verbose --strict
