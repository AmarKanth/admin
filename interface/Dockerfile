FROM centos:7 

#install requirements
RUN yum install sudo -y 
RUN yum install curl -y

#install node js
RUN curl -sL https://rpm.nodesource.com/setup_17.x | sudo bash -
RUN yum install nodejs -y

#create new user
RUN useradd -ms /bin/bash amar
RUN echo 'amar ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
USER amar

#project setup
WORKDIR /app
COPY . /app/

#change node_modules folder permissions root to amar
RUN sudo mkdir -p node_modules
RUN sudo chown -R root:$(whoami) "node_modules"
RUN sudo chmod -R 775 "node_modules"

#install node packages
RUN sudo npm install