#include <stdio.h>
#include <pthread.h>
#include <unistd.h>
void *tarefa1(void *arg) {
    for (int i = 0; i < 5; i++) {
        printf("Tarefa 1: Executando passo %d\n", i + 1);
        sleep(1);
    }
    pthread_exit(NULL);
}
void *tarefa2(void *arg) {
    for (int i = 0; i < 3; i++) {
        printf("Tarefa 2: Executando passo %d\n", i + 1);
        sleep(2);
    }
    pthread_exit(NULL);
}
int main() {
    pthread_t thread1, thread2;
    if (pthread_create(&thread1, NULL, tarefa1, NULL) != 0) {
        perror("Erro ao criar a thread 1");
        return 1;
    }
    if (pthread_create(&thread2, NULL, tarefa2, NULL) != 0) {
        perror("Erro ao criar a thread 2");
        return 1;
    }
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    printf("Todas as threads terminaram suas tarefas.\n");

    return 0;
}
