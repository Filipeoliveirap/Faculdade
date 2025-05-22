#include <cstdlib>
#include <stdio.h>
#include <iostream>

using namespace std;


int main(){
    // vetores tamanho 10 e 5
    int vetor1[10];
    int vetor2[5];

    //preenchendo o primeiro vetor 
    cout << "preenchendo o primeiro vetor (tamanho 10):"<<endl;
    for(int i = 0; i < 10; i++){
        cout << "digite o valor" << i + 1 <<":";
        cin >> vetor1[i];
    }
    //preenchendo segundo vetor
    cout << "preenchendo o segundo vetor (tamanho 5):" <<endl;
    for(int i = 0; i < 5; i++){
        cout << "digite o valor" << i + 1 <<":";
        cin >> vetor2[i]; 
    }
    //criando o terceiro vetor
    int vetor3[15]; //10 + 5
    
    //copiando os elementos do primeiro vetor para o terceiro 
    for(int i = 0; i < 10; i++) {
        vetor3[i] = vetor1[i];
    }
    //copiando os elementos do segundo vetor para o terceiro 
    for(int i = 0; i < 5; i++){
        vetor3[10 + i] = vetor2[i];
    }
    //exibindo o vetor concatenado
    cout << "\nvetor concatenado:" << endl;
    for(int i = 0; i < 15; i++){
        cout << vetor3[1] << " ";
    }  
    cout << endl;
    
    return 0;

}
