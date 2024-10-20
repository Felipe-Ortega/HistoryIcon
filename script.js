function buttonChoice(id, id2, id3, id4) {
  const bt = document.getElementById(id);
  const bt2 = document.getElementById(id2);
  const bt3 = document.getElementById(id3);
  const bt4 = document.getElementById(id4);

  if (bt.className == "butonPressed") {
    bt.classList.remove("butonPressed");
    bt.classList.add("buton");
  } else {
    bt.classList.remove("buton");
    bt.classList.add("butonPressed");
  }
  var verificacao2 = bt2.className;
  var verificacao3 = bt3.className;
  var verificacao4 = bt4.className;
  if (verificacao2 == "butonPressed") {
    bt2.classList.remove("butonPressed");
    bt2.classList.add("buton");
  }
  if (verificacao3 == "butonPressed") {
    bt3.classList.remove("butonPressed");
    bt3.classList.add("buton");
  }
  if (verificacao4 == "butonPressed") {
    bt4.classList.remove("butonPressed");
    bt4.classList.add("buton");
  }
}

//Controlando o índice das perguntas
var indicePergunta = 0;

// Armazenando as respostas
var respostasPolitica = [];

var imagemIcone = "images/JC.png";
var nomeIcone = "Julio Cesar";
var textoIcone =
  "foi um dos mais importantes líderes da história de Roma, conhecido por seu brilhantismo militar e ambição política. General habilidoso, conquistou a Gália, expandindo significativamente o território romano. Sua campanha vitoriosa o tornou extremamente popular entre os soldados e o povo, mas criou tensões com o Senado.Em 49 a.C., desafiou a autoridade senatorial ao atravessar o rio Rubicão com seu exército, iniciando uma guerra civil que culminou com sua ascensão como ditador vitalício. Durante seu governo, implementou várias reformas, como a reorganização do calendário, que deu origem ao calendário juliano.No entanto, seu crescente poder e título de ditador despertaram o temor de que ele se tornaria um rei, algo inaceitável para os romanos. Isso resultou em sua morte, assassinado em 44 a.C. por membros do Senado, num complô liderado por Bruto e Cássio. Sua morte marcou o fim da República e abriu caminho para o Império Romano.";
function nextQuestion(id, id2, id3, id4) {
  defineQuestao(id, id2, id3, id4);
}
function defineQuestao(id, id2, id3, id4) {
  const pergunta = document.getElementById("section_pergunta");
  const bt = document.getElementById(id);
  const bt2 = document.getElementById(id2);
  const bt3 = document.getElementById(id3);
  const bt4 = document.getElementById(id4);
  var valor = "";
  if (bt.className == "butonPressed") {
    valor = bt.value;
    if (indicePergunta == 2 && valor == "JC") {
      pergunta.innerHTML = iconesPolitica[0];
    } else {
      indicePergunta++;
      pergunta.innerHTML = perguntasPoliticas[indicePergunta];
    }
  } else if (bt2.className == "butonPressed") {
    valor = bt2.value;
    indicePergunta++;
  } else if (bt3.className == "butonPressed") {
    indicePergunta++;
    valor = bt3.value;
  } else if (bt4.className == "butonPressed") {
    indicePergunta++;
    valor = bt4.value;
  } else {
    alert("Escolha alguma opção");
  }
}

function defineVoltaQuestao() {
  const pergunta = document.getElementById("section_pergunta");
  pergunta.innerHTML = perguntasPoliticas[indicePergunta];
}
function backQuestion(id, id2, id3, id4) {
  indicePergunta--;
  defineVoltaQuestao(id, id2, id3, id4);
}
var iconesPolitica = [
  `<div class="section-davinci">
              <div class="container-sec">
                <img src="${imagemIcone}" alt="" />
                <div class="sobre">
                  <div>
                    <h1>${nomeIcone}</h1>
                    <p>${textoIcone}</p>
                  </div>
                </div>
              </div>
            </div>`,
];
var perguntasPoliticas = [
  `<div class="pergunta">
                    <h3>Qual área te interessa mais?</h3>
                    <div class="div_buttons">
                      <button
                      value="politica"
                        type="submit"
                        class="buton"
                        id="opt1"
                        onclick="buttonChoice('opt1','opt2','opt3','opt4')"
                      >
                        <img src="images/historia.png" alt="" /><br />Política
                      </button>
                      <button
                        value="fisica"
                        class="buton"
                        id="opt2"
                        onclick="buttonChoice('opt2','opt1','opt3','opt4')"
                      >
                        <img src="images/fisica.png" alt="" /><br />Física
                      </button>
                      <button
                      value="quimica"
                        class="buton"
                        id="opt3"
                        onclick="buttonChoice('opt3','opt1','opt2','opt4')"
                      >
                        <img src="images/ciencia.png" alt="" /><br />Química
                      </button>
                      <button
                      value="matematica"
                        class="buton"
                        id="opt4"
                        onclick="buttonChoice('opt4','opt1','opt2','opt3')"
                      >
                        <img
                          src="images/matematica.png"
                          alt=""
                        /><br />Matemática
                      </button>
                    </div>
                    <button
                      class="btn_prox_quest"
                      onclick="nextQuestion('opt1','opt2','opt3','opt4')"
                    >
                      Próxima questão
                    </button>
                  </div>`,
  `<div class="pergunta">
                    <h3>Qual época te atrai mais?</h3>
                    <div class="div_buttons">
                      <button
                      value="politica"
                        type="submit"
                        class="buton"
                        id="opt1"
                        onclick="buttonChoice('opt1','opt2','opt3','opt4')"
                      >
                        <img src="images/lanca.png" alt="" /><br />Idade Antiga
                      </button>
                      <button
                        value="fisica"
                        class="buton"
                        id="opt2"
                        onclick="buttonChoice('opt2','opt1','opt3','opt4')"
                      >
                        <img src="images/tiro-com-arco.png" alt="" /><br />Idade Média
                      </button>
                      <button
                      value="quimica"
                        class="buton"
                        id="opt3"
                        onclick="buttonChoice('opt3','opt1','opt2','opt4')"
                      >
                        <img src="images/submachine-gun.png" alt="" /><br />Idade Moderna
                      </button>
                      <button
                      value="matematica"
                        class="buton"
                        id="opt4"
                        onclick="buttonChoice('opt4','opt1','opt2','opt3')"
                      >
                        <img
                          src="images/bomba-nuclear.png"
                          alt=""
                        /><br />Idade Contemporânea
                      </button>
                    </div>
                    <button
                      class="btn_prox_quest"
                      onclick="backQuestion('opt1','opt2','opt3','opt4')"
                    >
                      Questão anterior
                    </button>
                    <button
                      class="btn_prox_quest"
                      onclick="nextQuestion('opt1','opt2','opt3','opt4')"
                    >
                      Próxima questão
                    </button>
                    
                  </div>`,
  `<div class="pergunta">
                    <h3>Se você pudesse escolher uma característica, qual seria?</h3>
                    <div class="div_buttons">
                      <button
                      value="JC"
                        type="submit"
                        class="buton"
                        id="opt1"
                        onclick="buttonChoice('opt1','opt2','opt3','opt4')"
                      >
                        <img src="images/ambicioso.png" alt="" /><br /> Ambicioso e carismático
                      </button>
                      <button
                        value="AG"
                        class="buton"
                        id="opt2"
                        onclick="buttonChoice('opt2','opt1','opt3','opt4')"
                      >
                        <img src="images/peca-de-xadrez.png" alt="" /><br />Estrategista e visionário
                      </button>
                      <button
                      value="CL"
                        class="buton"
                        id="opt3"
                        onclick="buttonChoice('opt3','opt1','opt2','opt4')"
                      >
                        <img src="images/balancas.png" alt="" /><br />Justo e revolucionário
                      </button>
                      <button
                      value="AU"
                        class="buton"
                        id="opt4"
                        onclick="buttonChoice('opt4','opt1','opt2','opt3')"
                      >
                        <img
                          src="images/raposa.png"
                          alt=""
                        /><br />Moderado e astuto
                      </button>
                    </div>
                    <button
                      class="btn_prox_quest"
                      onclick="backQuestion('opt1','opt2','opt3','opt4')"
                    >
                      Questão anterior
                    </button>
                    <button
                      class="btn_prox_quest"
                      onclick="nextQuestion('opt1','opt2','opt3','opt4')"
                    >
                      Próxima questão
                    </button>
                  </div>`,
];
