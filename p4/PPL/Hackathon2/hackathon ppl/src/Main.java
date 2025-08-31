import java.util.concurrent.locks.ReentrantLock;

class Aluno extends Thread {
    int id;
    ReentrantLock garfoEsquerda;
    ReentrantLock garfoDireita;

    public Aluno(int id, ReentrantLock garfoEsquerda, ReentrantLock garfoDireita) {
        this.id = id;
        this.garfoEsquerda = garfoEsquerda;
        this.garfoDireita = garfoDireita;
    }

    public void run() {
        int totalCelular = 0, totalComeu = 0;
        while (totalCelular < 5 || totalComeu < 5) {
            if (totalCelular < 5) {
                System.out.println("Aluno " + id + " mexendo no celular.");
                totalCelular++;
                try { Thread.sleep(500);
                } catch (Exception e) {

                }
            }
            if (totalComeu < 5) {
                if (garfoEsquerda.tryLock()) {
                    try {
                        System.out.println("Aluno " + id + " pegou o garfo esquerdo.");
                        if (garfoDireita.tryLock()) {
                            try {
                                System.out.println("Aluno " + id + " pegou o garfo direito e está comendo.");
                                totalComeu++;
                                try { Thread.sleep(500);
                                } catch (Exception e) {

                                }
                            } finally {
                                garfoDireita.unlock();
                                System.out.println("Aluno " + id + " largou o garfo direito.");
                            }
                        } else {
                            System.out.println("Aluno " + id + " não conseguiu o garfo direito.");
                        }
                    } finally {
                        garfoEsquerda.unlock();
                        System.out.println("Aluno " + id + " largou o garfo esquerdo.");
                    }
                } else {
                    System.out.println("Aluno " + id + " não conseguiu o garfo esquerdo. Volta a pegar no celular");
                }
                try { Thread.sleep(200);
                } catch (Exception e) {

                }
            }
        }
        System.out.println("Aluno " + id + " terminou!");
    }
}

public class Main {
    public static void main(String[] args) {
        int numAlunos = 5;
        ReentrantLock[] garfos = new ReentrantLock[numAlunos];
        for (int i = 0; i < numAlunos; i++) garfos[i] = new ReentrantLock();

        Aluno[] alunos = new Aluno[numAlunos];
        for (int i = 0; i < numAlunos; i++) {
            ReentrantLock garfoEsquerda = garfos[i];
            ReentrantLock garfoDireita = garfos[(i + 1) % numAlunos];
            alunos[i] = new Aluno(i, garfoEsquerda, garfoDireita);
        }

        for (int i = 0; i < numAlunos; i++) {
            alunos[i].start();
        }

        for (int i = 0; i < numAlunos; i++) {
            try { alunos[i].join(); } catch (Exception e) {}
        }
        System.out.println("Todos os alunos terminaram!");
    }
}