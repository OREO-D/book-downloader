const inp = document.getElementById('pegar')
const btn = document.getElementById('buscar')
const content = document.getElementById('content')

btn.addEventListener('click', () => {

  content.innerHTML = ''
  get_value = inp.value
  //
  url = `https://plmcbks.amanoteam.com/search/books?query_name=${get_value}&search_type=fast&page_number=0&max_items=1000`

  fetch(url)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      total_book = data.results.total_results
      dt = data.results.items

      for (let content_ = 0; content_ <= 1000; content_++)
      {
        //Formatando saida crua
        dt = data.results.items[content_]
        lista = [
          dt.title,
          dt.cover.id,
          dt.documents[0].id
        ]
        //Capturando capa e id de download
        //Pegando a img da capa do livro
        //ID de documento: É preciso para baixar o arquivo
        c_url = `https://plmcbks.amanoteam.com/view/${lista[1]}`
        get_download = `https://plmcbks.amanoteam.com/download/${lista[2]}`
        
        
        // Criação de elementos
        box = document.createElement('div')
        para = document.createElement('p')
        cover = document.createElement('img')
        download_btn = document.createElement('button')
        link = document.createElement('a')
        
        //Adicionando atributos
        cover.src = c_url
        cover.loading="lazy"
        link.href = get_download
        
        //Adcionando items e texto
        texto = document.createTextNode(`${lista[0]}`)
        capa = document.createTextNode(`${lista[1]}`)
        link_text = document.createTextNode('Download')
        
        // Adcionando a elemento pai
        para.appendChild(texto)
        link.appendChild(link_text)
        
        // Criando classe 
        para.classList.add('title-text')
        cover.classList.add('cover')
        link.classList.add('btn_d')
        box.classList.add("content_in")
        
        //adcionando a elemento pai
        box.appendChild(cover)
        box.appendChild(para)
        box.appendChild(link)
        
        
        // mostrando na tag raiz
        content.appendChild(box)

      }
      
    })
    
  })

  //pagination content
