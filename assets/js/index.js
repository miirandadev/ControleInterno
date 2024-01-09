if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./assets/html/singin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá, ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
  }
  
  function adicionarPastas() {
    var nav = document.getElementById('foldersNavigation');
  
    for (var i = 65; i <= 90; i++) { // Códigos ASCII de A a Z
      var folderName = String.fromCharCode(i);
      
      var folderLink = document.createElement('a');
      folderLink.href = 'clientes' + folderName.toLowerCase() + '.html'; // Link dinâmico
      folderLink.textContent = 'Clientes ' + folderName;
      var folderItem = document.createElement('li');
      folderItem.appendChild(folderLink);
      nav.appendChild(folderItem);
    }
  }


  
    function abrir() {
      var navegacaoLateral = document.getElementById('navegacaoLateral');
      navegacaoLateral.style.display = (navegacaoLateral.style.display === 'none' || navegacaoLateral.style.display === '') ? 'block' : 'none';
      if (navegacaoLateral.style.display === 'block'){
        document.getElementById('logo').style.marginLeft = '260px'
        document.getElementById('logado1').style.marginLeft = '250px'
        document.getElementById('btnsair').style.marginLeft = '365px'
      }else if(navegacaoLateral.style.display === 'none'){
        document.getElementById('logo').style.marginLeft = ''
        document.getElementById('logado1').style.marginLeft =''
        document.getElementById('btnsair').style.marginLeft= ''
      }
    }
  
    function abrirrepo(){
      var reposicao = document.getElementById('navreposicao')
      reposicao.style.display = (reposicao.style.display === 'none'  || reposicao.style.display === '') ? 'block' : 'none';
      if (reposicao.style.display === 'block'){
        document.getElementById('logo').style.marginLeft = '260px'
        document.getElementById('logado1').style.marginLeft = '250px'
        document.getElementById('btnsair').style.marginLeft = '365px'
      }else if (reposicao.style.display === 'none'){
        document.getElementById('logo').style.marginLeft = ''
        document.getElementById('logado1').style.marginLeft =''
        document.getElementById('btnsair').style.marginLeft= ''
      }else{
        
      }
    }

    function abrirreser(){
      var reservas = document.getElementById('navreservas');
      reservas.style.display = (reservas.style.display === 'none' || reservas.style.display === '') ? 'block' : 'none';
      if (reservas.style.display === 'block'){
        document.getElementById('logo').style.marginLeft = '260px'
        document.getElementById('logado1').style.marginLeft = '250px'
        document.getElementById('btnsair').style.marginLeft = '365px'
      }else if(reservas.style.display === 'none'){
        document.getElementById('logo').style.marginLeft = ''
        document.getElementById('logado1').style.marginLeft =''
        document.getElementById('btnsair').style.marginLeft= ''
      }
    }
  adicionarPastas();