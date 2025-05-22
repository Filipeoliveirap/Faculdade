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

void imprimeLista(CELULA * primeiro){
    if(primeiro == NULL){
        cout<<"\n"<<"LISTA VAZIA\n";
    }else{
        //se entrou nesse else e pq a lista n e vazia
        while(primeiro != NULL){
            cout<<"\n"<<primeiro->conteudo;
            primeiro = primeiro->prox;
        }
    }
    cout<<"\n";
}

void addNovoElemento(){

}

int main(){
    //CELULA elemento1;
    CELULA * elemento1 = (CELULA *) malloc(sizeof(CELULA));
    elemento1->conteudo = 10;
    elemento1->prox = NULL;

    elemento1->prox = (CELULA *) malloc(sizeof(CELULA));
    elemento1->prox->conteudo = 20;

    elemento1->prox->prox = (CELULA *) malloc(sizeof(CELULA));
    elemento1->prox->prox->conteudo = 30;

    elemento1->prox->prox->prox = (CELULA *) malloc(sizeof(CELULA));
    elemento1->prox->prox->prox->conteudo = 40;
    elemento1->prox->prox->prox->prox = NULL;
    //como chamar a funcao
    imprimeLista(elemento1);
}


/*
void imprimeLista(CELULA * primeiro){
    if(primeiro == NULL){
        cout<<"\n"<<"LISTA VAZIA\n";
    }else{
        //se entrou nesse else e pq a lista n e vazia
        cout << primeiro->conteudo;
        while(primeiro->prox != NULL){
            primeiro = primeiro->prox;
            cout << primeiro->conteudo;
        }
    }
}
*/