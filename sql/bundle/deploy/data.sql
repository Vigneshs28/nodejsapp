-- Deploy sql:data to pg

BEGIN;

INSERT INTO customer (id, name, address, email, phone) VALUES
(1, 'Nadya Eka', 'Jl. Ciwidey no 20', 'nadya@yahoo.com', '086454743743'),
(2, 'Amali', 'Jl. kemandoran no 10 Jakarta', 'amalia@langit.com', '03937263623'),
(3, 'Angel ', 'Jl. Ciledug no 45A. tanggerang', 'angel@gmail.com', '082271626121'),
(4, 'Ujang', 'Jl. ribut no 90 A', 'ujang@gmail.com', '07846352532'),
(5, 'Memet', 'Blok cepu no 14. Bandung', 'memet@ongkek.com', '038372636232'),
(6, 'Agung', 'Jl st Petersburg no 34. Russia', 'agung@yahoo.com', '038373273262'),
(7, 'Jhon Taylor', 'St paris A . Block 43. paris', 'jtaylor@yahoo.com', '039223232323');

COMMIT;
