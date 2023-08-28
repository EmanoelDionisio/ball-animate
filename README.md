# ball-animate
Este script anima uma bola saltitando dentro de um contêiner.

Animação de Bola Saltitante
Este script anima uma bola saltitando dentro de um contêiner. A bola está inicialmente na parte inferior do contêiner e quando o usuário clica com o botão esquerdo do mouse ou pressiona a barra de espaço no teclado, a animação começa. A bola saltará para cima e para baixo, simulando a gravidade e uma perda de energia em cada salto. A animação pode ser interrompida clicando com o botão esquerdo do mouse ou pressionando a barra de espaço novamente.

Como funciona
O script usa JavaScript para animar a bola. Ele obtém referências aos elementos da bola e do contêiner usando seus atributos id e o método document.getElementById(). Em seguida, define variáveis para controlar o movimento da bola, incluindo sua posição vertical (y), velocidade vertical (yVel) e se está se movendo para cima ou para baixo (up).

A função animate() é chamada em intervalos regulares usando o método setInterval(). Esta função atualiza a posição e a velocidade da bola com base em seu estado atual. Se a bola estiver se movendo para baixo, a gravidade é aplicada à sua velocidade aumentando yVel em 1. Se a bola estiver se movendo para cima, a gravidade reversa é aplicada diminuindo yVel em 1. A posição da bola é então atualizada adicionando yVel a y, e a bola é movida para sua nova posição definindo sua propriedade style.bottom.

Se a bola atingir o topo ou o fundo do contêiner, sua direção é alterada e sua velocidade é invertida e reduzida para simular um salto. Isso é feito definindo up como true ou false, multiplicando yVel por -0.8 e ajustando y, se necessário.

O script também adiciona ouvintes de eventos ao documento para detectar cliques do botão esquerdo do mouse e pressionamentos da barra de espaço no teclado. Quando qualquer um desses eventos ocorre, a função toggleAnimation() é chamada, que inicia ou interrompe a animação definindo a variável animating como true ou false.

Uso
Para usar este script, basta incluí-lo em um arquivo HTML junto com o código HTML e CSS necessário para os elementos da bola e do contêiner. O usuário pode então iniciar e interromper a animação clicando com o botão esquerdo do mouse ou pressionando a barra de espaço no teclado.

------------------------------------------------------------------------------------------------

Bouncing Ball Animation
This script animates a ball bouncing inside a container. The ball is initially at the bottom of the container and when the user clicks the left mouse button or presses the space bar on the keyboard, the animation starts. The ball will bounce up and down, simulating gravity and a loss of energy on each bounce. The animation can be stopped by clicking the left mouse button or pressing the space bar again.

How it works
The script uses JavaScript to animate the ball. It obtains references to the ball and container elements using their id attributes and the document.getElementById() method. It then defines variables to control the movement of the ball, including its vertical position (y), vertical speed (yVel), and whether it is moving up or down (up).

The animate() function is called at regular intervals using the setInterval() method. This function updates the position and speed of the ball based on its current state. If the ball is moving down, gravity is applied to its speed by increasing yVel by 1. If the ball is moving up, reverse gravity is applied by decreasing yVel by 1. The position of the ball is then updated by adding yVel to y, and the ball is moved to its new position by setting its style.bottom property.

If the ball reaches the top or bottom of the container, its direction is changed and its speed is inverted and reduced to simulate a bounce. This is done by setting up to true or false, multiplying yVel by -0.8, and adjusting y if necessary.

The script also adds event listeners to the document to detect clicks of the left mouse button and presses of the space bar on the keyboard. When either of these events occurs, the toggleAnimation() function is called, which starts or stops the animation by setting the animating variable to true or false.

Usage
To use this script, simply include it in an HTML file along with the necessary HTML and CSS code for the ball and container elements. The user can then start and stop the animation by clicking the left mouse button or pressing the space bar on their keyboard.
