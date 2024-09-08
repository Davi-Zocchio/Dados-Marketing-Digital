function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for uma string sem nada:
    if (!campoPesquisa) {
      section.innerHTML = "<h3>Sem correspondência para essa pesquisa. Favor incluir uma palavra para pesquisa.</h3>";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo ="";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descrição.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se no título includes campoPesquisa
      //Então,  faça....
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
           // Concatena HTML para criar um item de resultado
           //Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="https://www.youtube.com/watch/v=Bzhl4ca1DTU" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descrição}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
      </div>
    `;
      }
   
    }

    if (!resultados) {
      resultados = "<h3>Sem correspondência para essa pesquisa</h3>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }