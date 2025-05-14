$(document).ready(function(){
    $('#opcao-sobre').click(function(){
        const destinoSobre = $('#section-sobre');
        
        $('html').animate({
            scrollTop: destinoSobre.offset().top
        }, 0o600)
    })

    $('#opcao-produtos').click(function(){
        const destinoProduto = $('#section-produtos');
        
        $('html').animate({
            scrollTop: destinoProduto.offset().top
        }, 0o600)
    })

    $('#opcao-pedido').click(function(){
        const destinoPedido = $('#section-pedido');
        
        $('html').animate({
            scrollTop: destinoPedido.offset().top
        }, 0o600)
    })
})