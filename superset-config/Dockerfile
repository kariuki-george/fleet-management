FROM apache/superset:latest

WORKDIR /

COPY . .

RUN /usr/bin/env bash -c './secretkeyconfig.sh'

RUN /usr/bin/env bash -c './supersetinit.sh'