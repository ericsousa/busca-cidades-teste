document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DE DETECÇÃO DE AMBIENTE ---
    //
    // Verificamos se o endereço do site no navegador inclui 'github.io'.
    // Com base nisso, definimos um caminho base (PATH) para os nossos arquivos.
    //
    let PATH = ''; // Declaramos a variável de caminho

    if (window.location.hostname.includes('github.io')) {
      // Estamos no servidor online (GitHub Pages)
      PATH = 'https://ericsousa.github.io/busca-cidades-teste';
    } else {
      // Estamos no ambiente local
      // O caminho '..' sobe um nível de diretório.
      // Isso assume que seu 'main.js' está em uma pasta como /js/ e as views em /views/.
      PATH = '..'; 
    }
    // --- FIM DA LÓGICA DE DETECÇÃO ---


    // Função para carregar um componente HTML em um seletor específico
    // Nenhuma alteração é necessária aqui.
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => {
                // Verifica se a requisição foi bem sucedida
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${url}: Status ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                // Insere o conteúdo HTML no elemento selecionado
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(error));
    };

    // --- ATUALIZAÇÃO NAS CHAMADAS ---
    //
    // Agora, montamos a URL completa usando a constante PATH.
    // Usamos template literals (a crase `) para juntar o caminho e o nome do arquivo.
    //
    const headerURL = `${PATH}/views/header.html`;
    const footerURL = `${PATH}/views/footer.html`;

    console.log("Carregando header de:", headerURL); // Linha para depuração, pode ser removida depois
    
    // Carrega os componentes usando as URLs completas
    loadComponent('header', headerURL);
    loadComponent('footer', footerURL);
});
