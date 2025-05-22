#include <cstdlib>
#include <stdio.h>
#include <iostream>

using namespace std;

int main() {
    //Criando vetores
    int vetor1[5], vetor2[5];

    //Preenchendo o primeiro vetor
    cout << "Preencha o primeiro vetor com 5 elementos:" << endl;
    for(int i = 0; i < 5; i++){
        cout << "vetor1[" << i << "] = ";
        cin >> vetor1[i];
    }
    //Preenchendo o segundo vetor
    cout << "Preencha o segundo vetor com 5 elementos:" << endl;
    for(int i = 0; i < 5; i++){
        cout << "vetor2[" << i << "] = ";
        cin >> vetor2[i];
    }
    //Verificando quais elementos dos vetores são iguais
    cout << "\nElementos iguais entre vetor1 e vetor2:" << endl;
    for(int i = 0; i < 5; i++) {
        for(int j = 0; j < 5; j++){
            if(vetor1[i] == vetor2[j]){
                cout << "vetor1[" << i <<"] é igual a vetor2[" << j << "]" << endl;
             }
        }
    }

    return 0;
}