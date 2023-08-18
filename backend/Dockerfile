FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt -y update 
RUN apt install -y software-properties-common
RUN add-apt-repository -y ppa:deadsnakes/ppa
RUN apt install -y python3.10 python3.10-dev
RUN apt install -y python3-pip
RUN apt install -y libpq5
RUN apt install -y libpq-dev
RUN apt install -y iputils-ping vim
RUN apt install -y postgresql postgresql-contrib

ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY ./requirements.txt ./

# COPY . .

RUN python3.10 -m pip install -r requirements.txt

CMD python3.10 manage.py runserver 0.0.0.0:8000

# CMD while true; do sleep 1000; done
