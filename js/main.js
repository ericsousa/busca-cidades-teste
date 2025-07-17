document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar um componente HTML em um seletor específico
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => {
                // Verifica se a requisição foi bem sucedida
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                // Insere o conteúdo HTML no elemento selecionado
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(error));
    };

    // Carrega views
    loadComponent('header', '../views/header.html');
    loadComponent('footer', '../views/footer.html');
});