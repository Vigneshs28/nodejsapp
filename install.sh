#!/usr/bin/env bash
sudo set -e

# update instance
sudo yum -y update

#install sqitch
curl -X GET -o RPM-GPG-KEY-lambda-epll https://lambda-linux.io/RPM-GPG-KEY-lambda-epll
sudo rpm --import RPM-GPG-KEY-lambda-epll
curl -X GET -o epll-release-2017.03-1.2.ll1.noarch.rpm https://lambda-linux.io/epll-release-2017.03-1.2.ll1.noarch.rpm
sudo yum -y install epll-release-2017.03-1.2.ll1.noarch.rpm
sudo yum --enablerepo=epll install sqitch-pg94

#set psql path
sqitch config --user engine.pg.client /usr/bin/psql

#install postgresql
#sudo yum install mysql-server -y
sudo yum -y install postgresql postgresql-server postgresql-devel postgresql-contrib postgresql-docs
sudo service postgresql initdb

#start postgresql daemon
#sudo service mysqld start
sudo /sbin/chkconfig --levels 235 postgresql on
sudo service postgresql start

#Create database
#cd ~/customers
#sudo cat customer.sql | mysql --user=root --password=''
sudo -u postgres -H sh -c 'createdb nodejs; cd ~/customers/sqls/bundle; sqitch deploy db:pg:nodejs'
echo 'Database created.'