-- Deploy sql:customers to pg

BEGIN;

CREATE TABLE IF NOT EXISTS customer (
  id serial primary key,
  name varchar(200) NOT NULL,
  address text NOT NULL,
  email varchar(200) NOT NULL,
  phone varchar(20) NOT NULL
);


COMMIT;
