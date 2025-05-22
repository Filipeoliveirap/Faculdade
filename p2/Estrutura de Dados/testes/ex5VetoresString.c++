#include <cstdlib>
#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main(){
    string nomecompleto; //Armazenando o nome 

    //Lendo o nome completo
    cout << "Digite seu nome completo!: ";
    getline(cin, nomecompleto); //Use getline para let a linha completa(espaços e afins) 

    //Imprimindo na ordem inversa
    cout << "Seu nome ao contrário é: [";
    for(int i = nomecompleto.length() - 1; i >= 0; i--){
        cout << nomecompleto[i]; //Imprime cada caractere do final para o inicio 
    }
    cout << "]" << endl; //fechando o colchete na saída
    //Imprimindo a frase com o nome completo
    cout << "Meu nome completo é:" << nomecompleto << endl;

    return 0;
}    