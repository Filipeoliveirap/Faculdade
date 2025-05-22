//INICIO DAS DIRETIVAS DO COMPILADOR
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;
//FIM DAS DIRETIVAS DO COMPILADOR
//INICIO DAS VARIAVEIS GLOBAIS E DAS FUNCOES

float mediaAritmetica(float * n1, float * n2){
    float m = ((*n1)+(*n2))/2;
    (*n1)++;
    return m;
}
//FIM DAS VARIAVEIS GLOBAIS E DAS FUNCOES
//FUNCAO PRINCIPAL
int main(){
   float x, y;
   cin >> x; //5
   scanf("%f",&y); //5
   float resultado = mediaAritmetica(&x,&y);
   float * ptrX = &x;
   float * ptrY = &y;
   cout << "\n";
   printf("valor de x = %f\n",x);
   printf("valor de y = %f\n",y);
   printf("------------\n");
   printf("end de x = %p\n",&x);
   printf("end de y = %p\n",&y);
   printf("------------\n");
   printf("end de x = %p\n",ptrX);
   printf("end de y = %p\n",ptrY);
   printf("------------\n");
   *ptrX = 83;
   *ptrY = 77;
   printf("valor de x = %f\n",*ptrX);
   printf("valor de y = %f\n",*ptrY);
   cout << "\n";

}
//FIM DA FUNCAO PRINCIPAL