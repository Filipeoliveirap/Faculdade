
# Atividade: Uso de Índices no PostgreSQL

## 1. Criação da tabela `vinculos`

```sql
CREATE TABLE vinculos (
    NumFunc VARCHAR(20),
    NunVinc VARCHAR(20),
    cpf VARCHAR(20),
    orgao VARCHAR(100)
);
```

---

## 2. Importação dos dados do arquivo CSV

Arquivo importado: `vinculos.csv` com aproximadamente 5000 registros.

Comando usado para importação (via psql):

```sql
\copy vinculos FROM 'C:/Users/filip/Downloads/vinculos.csv' DELIMITER ';' CSV HEADER;
```

---

## 3. Consulta sem índice e tempo de execução

Comando:

```sql
EXPLAIN ANALYZE SELECT * FROM vinculos WHERE NumFunc = '400123';
```

Resultado do tempo:  
`Execution Time:  1.452 ms`

---

## 4. Criação do índice na coluna `NumFunc`

```sql
CREATE INDEX idx_numfunc ON vinculos(NumFunc);
```

---

## 5. Consulta com índice e tempo de execução

```sql
EXPLAIN ANALYZE SELECT * FROM vinculos WHERE NumFunc = '400123';
```

Resultado do tempo:  
`Execution Time: 0.081 ms` 

---

## 6. Consulta com junção (JOIN)

Para melhorar a avaliação, criei a tabela auxiliar `orgaos`:

```sql
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
```

Consulta com junção:

```sql
SELECT v.NumFunc, v.cpf, o.sigla
FROM vinculos v
JOIN orgaos o ON v.orgao = o.nome
WHERE v.NumFunc = '400123';
```
Resultado do tempo: 
`Execution Time: 9.800 ms` 
---

---
## 7. Criação do índice para a consulta JOIN

```sql
CREATE INDEX orgaos_nome_idx ON orgaos(nome);
```
Consulta com com indice criado

```sql
EXPLAIN ANALYZE
SELECT v.NumFunc, v.cpf, o.sigla
FROM vinculos v
JOIN orgaos o ON v.orgao = o.nome;
```

Resultado do tempo:
`Execution Time: 5.654 ms` 

## 8. Quantidade de registros importados

```sql
SELECT COUNT(*) FROM vinculos;
```

Resultado:  
`5500 registros` 

---

## Observações finais

- O índice na coluna `NumFunc` melhorou significativamente o tempo da consulta.  
- A consulta com junção funciona corretamente relacionando os dados da tabela `vinculos` com `orgaos`.
- O índice na coluna `nome` também melhorou o tempo de consulta JOIN.

---

**Autor:** José Filipe Oliveira Pereira 
**Data:** 21/05/2025
