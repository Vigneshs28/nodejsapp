#!/usr/bin/env bash
#sudo set -e

# update instance
sudo yum -y update

#set psql path
sqitch config --user engine.pg.client /usr/bin/psql

#install postgresql
#start postgresql daemon
sudo /sbin/chkconfig --levels 235 postgresql on
sudo service postgresql start
echo 'Database server started.'

#Create database
#cd ~/customers
#sudo cat customer.sql | mysql --user=root --password=''
sudo -u postgres -H sh -c 'createdb nodejs; cd ~/customers/sqls/bundle; sqitch deploy db:pg:nodejs'
echo 'Database created.'
