#include <cstdlib>
#include <stdio.h>
#include <iostream>

using namespace std;

int main () {
    int vetor[20];
    
    //Preenchendo o vetor com elementos fornecidos pelo usuário
    cout << "Preencha o vetor com 20 elementos:" << endl;
    for(int i = 0; i < 20; i++){
        cout << "Digite o valor para a posição:" << i << ":";
        cin >> vetor[i];
    }
    //Exibindo o vetor na ordem inversa (da posição 19 a 0)
    cout << "\nElementos do valor na ordem inversa:" <<endl;
    for(int i = 19; i >= 0; i--) {
        cout << vetor[i] << " ";
    }
    cout << endl;



    return 0;
}
