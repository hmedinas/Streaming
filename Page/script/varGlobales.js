if (localStorage.getItem('LS_Codigo')) {
    var codigo = JSON.parse(localStorage.getItem('LS_Codigo'));
    switch (codigo) {
        case "M":
            console.log("MADRID");
            //MADRID
            var idMaquina = "1234";
            var origen = "Madrid";
            var destino = "Barcelona";
            break;
        case "B":
            console.log("BARCELONA");
            //BARCELONA
            var idMaquina = "5678";
            var origen = "Barcelona";
            var destino = "Madrid";
            break;
    }
}