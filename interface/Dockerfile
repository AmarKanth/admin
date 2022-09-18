FROM centos:7 

RUN yum install sudo -y

RUN yum install curl -y

RUN curl -sL https://rpm.nodesource.com/setup_17.x | sudo bash -

RUN yum install nodejs -y

RUN node --version

RUN npm --version

WORKDIR /app

COPY . /app/

RUN npm install