#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>

int main(){
    pid_t pid;
    
    //Novo processo
    pid = fork();

    if (pid < 0) {
        // Se retornar um valor negativo deu falha na criação do processo
        perror("Erro ao criar o processo");
        exit(1);
    }else if (pid == 0){
        //executado pelo processo filho
        printf("Esse é o processo filho. PID: %d, PPID %d \n", getpid(), getppid());
    }else {
        //executado pelo pai
        printf("Esse é o processo pai. PID: %d, filho PID: %d\n", getpid(), pid);
        
        //espera o processo filho terminar
        wait(NULL);

    }
    
    //executado por ambos os processos 
    printf("Processo com PID %d finalizado.\n", getpid());


    return 0;
}