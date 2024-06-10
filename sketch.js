let palavra;


function palavraAleatoria() {
  
  let palavras = ["é os guri do ", "é os pia", "é os colorado"];
  
  
  return random(palavras);
}
  
function setup() {
  
  createCanvas(400, 400);
  
  let maximo = width; 
  let minimo = 1; 
  

  palavra = palavraAleatoria();
}

function lugaresBacanasParaPassear(diaDaSemana, bairro) {

}


function inicializaCores() {
  
  background(220);
  

  fill("red");
  
  
  textSize(64);
  
  
  textAlign(CENTER, CENTER);
}


function palavraParcial(minimo, maximo){
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  
  
  let parcial = palavra.substring(0, quantidade);
  
  
  return parcial;
}

function draw() {
  
  
  inicializaCores();
  
  
  let parcial = palavraParcial(0, width);
  
  // Exibe o texto
  text(parcial, 200, 200);
}
