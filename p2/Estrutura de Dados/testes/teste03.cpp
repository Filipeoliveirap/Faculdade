#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;
using std::string;
using std::getline;
//getline (cin,<NOME_DA_VARIAVEL>);

typedef struct reg{
    int conteudo;
    struct reg * prox;
} CELULA;

int main(){
    CELULA elemento1;
    elemento1.conteudo = 10;
    elemento1.prox = NULL;
 
    CELULA elemento2;
    elemento2.conteudo = 20;
    elemento2.prox = NULL;
   
    elemento1.prox = &elemento2;

    CELULA elemento3;
    elemento3.conteudo = 30;
    elemento3.prox = NULL;

    elemento2.prox = &elemento3;

    cout <<"\n"<< elemento1.conteudo;
    cout <<"\n"<< elemento1.prox->conteudo;
    cout <<"\n"<< elemento1.prox->prox->conteudo;
    cout << "\n";
}