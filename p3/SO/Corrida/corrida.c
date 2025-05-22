#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void *thread_function(void *arg);
int NUM_THREADS = 4;
int i;
int count;

int main() {
    pthread_t threads[NUM_THREADS];

    for (i = 0; i < NUM_THREADS; i++) {
        // Aloca memória para armazenar o valor de 'i'
        int *arg = malloc(sizeof(int));
        if (arg == NULL) {
            perror("Memory allocation failed");
            exit(EXIT_FAILURE);
        }
        *arg = i;  // Atribui o valor de 'i' à memória alocada

        int res = pthread_create(&threads[i], NULL, thread_function, (void*) arg);
        if (res != 0) {
            perror("Thread creation failed");
            exit(EXIT_FAILURE);
        }
    }

    for (i = 0; i < NUM_THREADS; i++) {
        int res = pthread_join(threads[i], NULL);
        if (res != 0) {
            perror("Thread join failed");
            exit(EXIT_FAILURE);
        } else {
            printf("Thread %d terminou\n", i);
        }
    }

    printf("Count %d\n", count);
    exit(EXIT_SUCCESS);
}

void *thread_function(void *id) {
    int j;
    int *thread_id = (int*)id;  // Faz o cast de void* para int*
    printf("Thread ID: %d\n", *thread_id);  // Mostra o valor de 'i' da thread
    free(id);  // Libera a memória alocada para 'i'

    for (j = 0; j < 2000; j++) {
        count++;
    }

    return NULL;
}
