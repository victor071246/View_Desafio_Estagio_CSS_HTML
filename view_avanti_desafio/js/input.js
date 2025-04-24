console.log('Script carregado');

// Função para buscar no input de desktop
function buscarDesktop(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Acessa o input de desktop pelo ID
    const inputDesktop = document.getElementById('search_input_desktop');

    if (inputDesktop) {
        console.log('Valor buscado no desktop:', inputDesktop.value);
        let valorDigitado = inputDesktop.value;
        inputDesktop.value = `Você procurou por ${valorDigitado}`;
        // Aqui você pode adicionar a lógica para realizar a busca no desktop
    } else {
        console.log('Input de desktop não encontrado');
    }
}

// Função para buscar no input de celular
function buscarMobile(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Acessa o input de celular pelo ID
    const inputMobile = document.getElementById('search_input_mobile');

    if (inputMobile) {
        console.log('Valor buscado no celular:', inputMobile.value);
        let valorDigitado = inputMobile.value;
        inputMobile.value = `Você procurou por ${valorDigitado}`;
        // Aqui você pode adicionar a lógica para realizar a busca no celular
    } else {
        console.log('Input de celular não encontrado');
    }
}
