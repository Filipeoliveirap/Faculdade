#include <stdio.h>

int soma(int x, int y);

int main(){
    int a = 10;
    int b = 20;
    int c;

    c = soma(a, b);

    printf("A soma de %d e %d é %d\n", a, b, c);

    return 0;
}

int soma(int x, int y) {
        int z = x + y;

        return z;
}