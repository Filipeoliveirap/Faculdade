#include <cstdlib>
#include <stdio.h>
#include <iostream>

using namespace std;

#define TAM 10

int main() {
    float notas[TAM];
    for(int i = 0; i < TAM ; i++){
        cin >> notas[i];
    }
    for (int i = 0 ; i < TAM ; i++){
        cout << notas[i] << "\n";
    }
    system("PAUSE");
    
    cin.get();
    cin.get();
    
    return EXIT_SUCCESS;
}  