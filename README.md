### Admin to do

1. add prettier, balck to git pre commit
1. convert react app to docker service
1. deployment to heroku

FROM centos:7 

RUN yum install sudo -y 

RUN yum install curl -y

RUN curl -sL https://rpm.nodesource.com/setup_17.x | sudo bash -

RUN yum install nodejs -y

WORKDIR /app
COPY . /app/

RUN npm install


adduser amar
usermod -aG wheel amar
gpasswd -a amar wheel
whoami
su amar

RUN useradd -ms /bin/bash amar
RUN echo 'amar ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

RUN adduser amar
RUN usermod -aG wheel amar
USER amar