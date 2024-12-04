let btnExpandedTab = false;

function expandedTab() {
    let elementos = document.getElementById('collapseWidthExample'); // Seleciona o elemento colapsável


    if (btnExpandedTab) {
        elementos.classList.remove('show'); // Remove a classe que expande o conteúdo
        btnExpandedTab = false;
    } else {
        elementos.classList.add('show'); // Adiciona a classe que expande o conteúdo

        btnExpandedTab = true;
    }
}
