#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#define NUM_ITERATIONS 5

int var1 = 0;
int var2 = 0;

pthread_mutex_t mutex1;
pthread_mutex_t mutex2;

void *thread1_function(void *arg) {
    for (int i = 0; i < NUM_ITERATIONS; i++) {
        pthread_mutex_lock(&mutex1);
        var1++;
        printf("Var 1\n");
        pthread_mutex_unlock(&mutex1);
        usleep(100);
    }
    return NULL;
}

void *thread2_function(void *arg) {
    for (int i = 0; i < NUM_ITERATIONS; i++) {
        pthread_mutex_lock(&mutex2);
        var2++;
        printf("Var 2\n");
        pthread_mutex_unlock(&mutex2);
        usleep(100); 
    }
    return NULL;
}

int main() {
    pthread_t thread1, thread2;
    if (pthread_mutex_init(&mutex1, NULL) != 0 || pthread_mutex_init(&mutex2, NULL) != 0) {
        perror("Mutex initialization failed");
        exit(EXIT_FAILURE);
    }
    if (pthread_create(&thread1, NULL, thread1_function, NULL) != 0) {
        perror("Thread 1 creation failed");
        exit(EXIT_FAILURE);
    }
    if (pthread_create(&thread2, NULL, thread2_function, NULL) != 0) {
        perror("Thread 2 creation failed");
        exit(EXIT_FAILURE);
    }
    if (pthread_join(thread1, NULL) != 0) {
        perror("Thread 1 join failed");
        exit(EXIT_FAILURE);
    }
    if (pthread_join(thread2, NULL) != 0) {
        perror("Thread 2 join failed");
        exit(EXIT_FAILURE);
    }
    printf("Valor final de var1: %d\n", var1);
    printf("Valor final de var2: %d\n", var2);

    pthread_mutex_destroy(&mutex1);
    pthread_mutex_destroy(&mutex2);

    return 0;
}
