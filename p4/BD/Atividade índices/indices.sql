CREATE TABLE vinculos (
    NumFunc VARCHAR(20),
    NunVinc VARCHAR(20),
    cpf VARCHAR(20),
    orgao VARCHAR(100)
);

COPY vinculos FROM 'C:/Users/filip/Downloads/vinculos.csv' DELIMITER ';' CSV HEADER;

EXPLAIN ANALYZE SELECT * FROM vinculos WHERE NumFunc = '400123'; --"Execution Time: 1.452 ms"

--índice
CREATE INDEX idx_numfunc ON vinculos(NumFunc);

EXPLAIN ANALYZE SELECT * FROM vinculos WHERE NumFunc = '400123'; --"Execution Time:  "

CREATE TABLE orgaos (
    nome VARCHAR(100) PRIMARY KEY,
    sigla VARCHAR(10)
);

INSERT INTO orgaos VALUES
('Ministério da Saúde', 'MS'),
('MEC', 'MEC'),
('Justiça', 'MJ'),
('Defesa', 'MD'),
('Fazenda', 'MF');

--Consulta JOIN

SELECT v.NumFunc, v.cpf, o.sigla FROM vinculos v 
JOIN orgaos o ON v.orgao = o.nome;

--quantidade
SELECT COUNT(*) FROM vinculos;

