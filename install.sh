#!/usr/bin/env bash
sudo set -e
#set +o posix

# update instance
sudo yum -y update

#set psql path
sqitch config --user engine.pg.client /usr/bin/psql

#install postgresql
#start postgresql daemon
sudo /sbin/chkconfig --levels 235 postgresql on
sudo service postgresql start
echo 'Database server started....'

echo 'Setting permission....'
cd /home/
sudo chmod -R 755 /home/ec2-user/customers/
sudo cp /home/ec2-user/customers/pg_hba.conf /var/lib/pgsql9/data/pg_hba.conf

sudo service postgresql restart
echo 'Database server re-started....'

psql -U postgres -c "ALTER USER postgres WITH PASSWORD '123456'"
sudo -u postgres -H sh -c 'cd /home/ec2-user/customers/sql/; createdb nodejs; sqitch --engine pg deploy db:pg:nodejs'
echo 'Database deployed....'
