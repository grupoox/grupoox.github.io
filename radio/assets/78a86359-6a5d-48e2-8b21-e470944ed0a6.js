// Beautify JavaScript - https://beautifier.io/
// Array de URLs das imagens
    const imagens = [
        "https://radio.50x.com.br/img/ads-fastmoney.jpg",
        "https://radio.50x.com.br/img/cafezinho-pix.jpg",
        "https://radio.50x.com.br/img/ads-fastmoney2.jpg",
        "https://radio.50x.com.br/img/features1.jpg",
        "https://radio.50x.com.br/img/features2.jpg",
        "https://radio.50x.com.br/img/features3.jpg",
        "https://radio.50x.com.br/img/features4.jpg",
        "https://radio.50x.com.br/img/features5.jpg",
        "https://radio.50x.com.br/img/features6.jpg",
        "https://radio.50x.com.br/img/features7.jpg",
        "https://radio.50x.com.br/img/features8.jpg",
        "https://radio.50x.com.br/img/features9.jpg",
        "https://radio.50x.com.br/img/features10.jpg",

        "https://radio.50x.com.br/img/pisadinha.jpg",
        "https://radio.50x.com.br/img/tropical.jpg",
        "https://radio.50x.com.br/img/pop2k.jpg",
        "https://radio.50x.com.br/img/lo-fi.jpg",
        "https://radio.50x.com.br/img/megamix.jpg",
        "https://radio.50x.com.br/img/boteco.jpg",

        "https://radio.50x.com.br/img/ads-profissao-afiliado.jpg",
        "https://radio.50x.com.br/img/ads-profissao-afiliado2.jpg",
        "https://radio.50x.com.br/img/ads-profissao-afiliado3.jpg",
        "https://radio.50x.com.br/img/ads-profissao-afiliado4.jpg",
        "https://radio.50x.com.br/img/ads-profissao-afiliado5.jpg",
        "https://radio.50x.com.br/img/ads-profissao-afiliado6.jpg",
    ];

    // Array de URLs dos links correspondentes
    const links = [
        "https://go.hotmart.com/A1939024g?ap=a838&src=radio",
        "https://geanramos.u1m.com.br/cafezinho",
        "https://go.hotmart.com/A1939024g?ap=a838&src=radio",
        "https://radio.50x.com.br/pagode.html",
        "https://radio.50x.com.br/pop.html",
        "https://radio.50x.com.br/sertanejo.html",
        "https://radio.50x.com.br/hits-brasil.html",
        "https://radio.50x.com.br/gospel.html",
        "https://radio.50x.com.br/rock.html",
        "https://radio.50x.com.br/libcast.html",
        "https://radio.50x.com.br/libbel.html",
        "https://radio.50x.com.br/libmusic.html",
        "https://radio.50x.com.br/mixfm.html",

        "https://radio.50x.com.br/pisadinha.html",
        "https://radio.50x.com.br/tropical.html",
        "https://radio.50x.com.br/pop2k.html",
        "https://radio.50x.com.br/lofi.html",
        "https://radio.50x.com.br/",
        "https://radio.50x.com.br/boteco.html",

        "https://geanramos.u1m.com.br/ig/",
        "https://geanramos.u1m.com.br/ig/",
        "https://go.hotmart.com/A1939024g?ap=06c5&src=radio",
        "https://go.hotmart.com/A1939024g?ap=06c5&src=radio",
        "https://go.hotmart.com/A1939024g?ap=0fbe&src=radio",
        "https://go.hotmart.com/A1939024g?ap=0fbe&src=radio",
    ];

    // Função para exibir um footer-banner aleatório
    function mostrarbannerAleatorio() {
        const indice = Math.floor(Math.random() * imagens.length); // Gera um índice aleatório
        const footerBannerDiv = document.getElementById("footer-banner");

        // Adiciona o footer-banner com o link no HTML
        footerBannerDiv.innerHTML = `
        <a href="${links[indice]}" target="_blank" class="footer-banner">
          <img src="${imagens[indice]}" alt="banner">
        </a>
      `;
    }

    // Chama a função ao carregar a página
    mostrarbannerAleatorio();

    // Função para trocar o banner a cada 10 segundos
    setInterval(mostrarbannerAleatorio, 10000); // Troca de banner a cada 10000 milissegundos (5 segundos)
