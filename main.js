$(document).ready(function() {
    $('#form-button').click('submit',(e) => {
        e.preventDefault();
        const novoItem = $('#input-tarefa').val();
        const enderecoDaNovaTarefa = $(`<li>${novoItem}</li>`).click(function() {
            $(this).toggleClass('riscarTexto');
        })
        $(enderecoDaNovaTarefa).appendTo('ul');
        $('#input').val("");
    })        
})
   


