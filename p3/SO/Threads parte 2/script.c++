#include <iostream>
#include <thread>
#include <mutex>

using namespace std;

const int ITERATIONS = 2000;
int arr[4] = {0, 0, 0, 0};
mutex mtx[4];

void thread1() {
    for (int i = 0; i < ITERATIONS; i++) {
        lock_guard<mutex> lock0(mtx[0]);
        lock_guard<mutex> lock1(mtx[1]);
        arr[0]++;
        arr[1]++;
        cout << "Thread1: arr[0]=" << arr[0] << " arr[1]=" << arr[1] << endl;
    }
}

void thread2() {
    for (int i = 0; i < ITERATIONS; i++) {
        lock_guard<mutex> lock1(mtx[1]);
        lock_guard<mutex> lock2(mtx[2]);
        arr[1]--;
        arr[2]--;
        cout << "Thread2: arr[1]=" << arr[1] << " arr[2]=" << arr[2] << endl;
    }
}

void thread3() {
    for (int i = 0; i < ITERATIONS; i++) {
        lock_guard<mutex> lock2(mtx[2]);
        lock_guard<mutex> lock3(mtx[3]);
        arr[2]++;
        arr[3]++;
        cout << "Thread3: arr[2]=" << arr[2] << " arr[3]=" << arr[3] << endl;
    }
}

int main() {
    thread t1(thread1);
    thread t2(thread2);
    thread t3(thread3);

    t1.join();
    t2.join();
    t3.join();

    cout << "Final array: " << arr[0] << " " << arr[1] << " " << arr[2] << " " << arr[3] << endl;
    return 0;
}