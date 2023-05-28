//variavéis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//variavéis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variavéis da raquete
let xRaquete = 5;
let yRaquete = 150;


//variaveis da raquete do oponente
let xRaqueteOponente = 583;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// variável da colisão (biblioteca)
let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


//sons do jogo
let raquetada;
let ponto;
let trilha;

// função para carregamento de áudios
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  /*width and height*/
  trilha.loop();
}


function draw() {
  background(0);
  
  // informações da bolinha
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  bolinhaNaoFicaPresa();
  
  // informações da raquete do usuário
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  
  //informações da raquete do oponente
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  //movimentaRaqueteOponente();
  movimentaRaqueteMultiplayer();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  //informações do placar
  incluiPlacar();
  marcaPonto();

  
}

function mostraBolinha(Draw){
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
  
function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
  }
        if (yBolinha + raio > height|| yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
  }
}


// reutilização de funções
function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}


function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


// Raquete acompanha a bolinha
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente 
}

//multiplayer (w-s)
function movimentaRaqueteMultiplayer(){
    if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
//contorno
  stroke(255);
  textAlign(CENTER);
// tamanho das letras
  textSize(16);
  
  
  fill(color(39, 67, 99))
  rect(150, 10, 40, 20);
// preencher os textos com a cor branca
  fill(255);
//imprimir texto
  text(meusPontos, 170, 26);
  
  
  fill(color(39, 67, 99))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
// o limite da borda é 0 - 600 
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}