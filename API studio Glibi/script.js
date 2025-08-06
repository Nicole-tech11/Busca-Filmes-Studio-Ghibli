function buscar() {
    const filme = document.getElementById("filme").value.toLowerCase();


      fetch(`https://ghibliapi.vercel.app/films`)
        .then((response) => response.json())
        .then((dados) => {
            const resultado = dados.find(f => 
            f.title.toLowerCase().includes(filme)
      );
          if (!resultado) {
            alert("Filme não encontrado!");
            return;
          }
          document.getElementById("title").value = resultado.title;
          document.getElementById("description").value = resultado.description;
          document.getElementById("director").value = resultado.director;
          document.getElementById("release_date").value = resultado.release_date;
          document.getElementById("poster").src = resultado.image;
        })
        .catch(() => {
          alert("Erro ao buscar o Filme!");
        });
    }
