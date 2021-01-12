    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    
    const alimento = urlParams.get('alimento')
    const calorias = urlParams.get('calorias')
    const grasas = urlParams.get('grasas')
    const proteina = urlParams.get('proteina')
    const carbohidratos = urlParams.get('carbohidratos')
    
    document.getElementById("alimento").innerHTML = alimento;
    document.getElementById("calorias").innerHTML = calorias;
    document.getElementById("grasas").innerHTML = grasas;
    document.getElementById("proteina").innerHTML = proteina;
    document.getElementById("carbohidratos").innerHTML = carbohidratos;

