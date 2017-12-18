if (localStorage.getItem('LS_Codigo')) {
    var codigo = JSON.parse(localStorage.getItem('LS_Codigo'));
    switch (codigo) {
        case "M":
            //MADRID
            var idMaquina = "1234";
            var origen = "Madrid";
            var destino = "Barcelona";
            break;
        case "B":
            //BARCELONA
            var idMaquina = "5678";
            var origen = "Barcelona";
            var destino = "Madrid";
            break;
    }
}