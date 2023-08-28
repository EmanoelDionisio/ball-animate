// Obtém referências para os elementos da bola e do contêiner
var ball = document.getElementById("ball");
var container = document.getElementById("container");

// Define variáveis para controlar o movimento da bola
var up = false; // se a bola está subindo ou descendo
var y = 0; // posição vertical da bola
var yVel = 0; // velocidade vertical da bola
var animating = false; // se a animação está em execução ou não

// Função para animar a bola
function animate() {
    // Se a animação estiver em execução
    if (animating) {
        // Se a bola estiver descendo
        if (up == false) {
            yVel += 1; // aplica a gravidade à velocidade da bola
        } else { // Se a bola estiver subindo
            yVel -= 1; // aplica a gravidade reversa à velocidade da bola
        }
        y += yVel; // atualiza a posição da bola com base em sua velocidade
        ball.style.bottom = y + "px"; // move a bola para sua nova posição

        // Se a bola atingir o topo do contêiner
        if (y > (container.offsetHeight - ball.offsetHeight)) {
            up = true; // muda a direção da bola para cima
            yVel *= -0.8; // inverte e reduz a velocidade da bola para simular um salto
        }
        // Se a bola atingir o fundo do contêiner
        if (y < 0) {
            up = false; // muda a direção da bola para baixo
            yVel *= -0.8; // inverte e reduz a velocidade da bola para simular um salto
            y = 0; // ajusta a posição da bola para que ela não ultrapasse o fundo do contêiner
        }
    }
}

// Adiciona um ouvinte de evento ao documento para detectar cliques do mouse e pressionamentos de tecla
document.addEventListener("click", toggleAnimation);
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        toggleAnimation();
    }
});

// Função para alternar entre iniciar e parar a animação quando o usuário clica com o botão esquerdo do mouse ou pressiona a barra de espaço do teclado
function toggleAnimation() {
    if (animating) { // se a animação estiver em execução
        animating = false; // para a animação
    } else { // se a animação não estiver em execução
        animating = true; // inicia a animação
    }
}

// Chama a função de animação a cada 20 milissegundos para animar a bola
setInterval(animate, 20);