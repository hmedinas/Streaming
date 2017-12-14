var _URL = 'innova.vservers.es:8090';
var _Device = idMaquina;
var socketes = io.connect('http://innova.vservers.es:8090');
var WebService = 'http://127.0.0.1:5000/api/'
var estaPulsadoContacto = false;

var Proy = Proy || {};

Proy.TipMensaje = {};
Proy.CocaCola = {};

sessionStorage['Condiciones'] = '';

Proy.TipMensaje = {
    Saludo: 'Saludo',
    Condiciones: 'Condiciones',
    Conexion: 'Conexion',
    Timer: 'Timer',
    Timer2: 'Timer2',
    Video: 'Video',
    Prepare: 'Prepare',
    Dispacher: 'Dispacher',
    Finish: 'Finish'
};

Proy.CocaCola = {
    URL: _URL,
    Device: _Device,
    SendMessage: function(msg) {
        msg = _Device + '|' + msg;

        socketes.emit('newMessage', msg)
    },
    Readmensaje: function() {
        sessionStorage['Condiciones'] = false;
        socketes.on('newMessage', function(msg) {
            var s = msg.split('|');
            if (s[0] == _Device) {
                return;
            } else {
                console.log(msg);
                if (s[1] == Proy.TipMensaje.Saludo)
                    Proy.CocaCola.Saludo();
                if (s[1] == Proy.TipMensaje.Condiciones) {
                    sessionStorage['Condiciones'] = true;
                }
                if (s[1] == Proy.TipMensaje.Timer) {
                    Proy.CocaCola.Timer();
                }
                if (s[1] == Proy.TipMensaje.Timer2)
                    Proy.CocaCola.Timer2();
                if (s[1] == Proy.TipMensaje.Conexion)
                    Proy.CocaCola.Conexion();
                if (s[1] == Proy.TipMensaje.Video)
                    Proy.CocaCola.Video();
                if (s[1] == Proy.TipMensaje.Prepare)
                    Proy.CocaCola.Prepare();
                if (s[1] == Proy.TipMensaje.Dispacher)
                    Proy.CocaCola.Dispacher();
                if (s[1] == Proy.TipMensaje.Finish)
                    Proy.CocaCola.Finish();

            }
        });

    },
    Saludo: function() {
        //AGREGAR tu codigo
        redirectCondicionesRemoto();
    },
    Conexion: function() {
        //AGREGAR tu codigo
        estaCargando = true;
        Proy.CocaCola.SendMessage(Proy.TipMensaje.Conexion);
    },
    Timer: function() {
        setTimeout(function() {
            Proy.CocaCola.SendMessage(Proy.TipMensaje.Timer2);
            location.href = "Video.html";
        }, 4000);
    },
    Timer2: function() {
        setTimeout(function() {
            location.href = "Video.html";
        }, 2000);
    },
    Video: function() {
        //AGREGAR tu codigo
        // if (estaCargando) {
        Proy.CocaCola.SendMessage(Proy.TipMensaje.Video);
        console.log("Video");
        return;
        location.href = "Video.html";

        // }
    },
    Prepare: function() {
        //AGREGAR tu codigo
        console.log("preparado");
        if (!estaPreparado) {
            // dialogMano();
        }

        // $getJSON(WebService + 'StremingPrepare', onSuccess, onError);
    },
    Dispacher: function() {
        //AGREGAR tu codigo 
        estaDespachado = true;
        cargando();
        console.log("despachando");
        // $getJSON(WebService + 'StremingDispacher', onSuccess, onError);
    },
    Finish: function() {
        if (estaDespachado) {
            redirectFinish();
        }
    },
    onSuccess: function(data) {

    },
    onError: function(err) {

    }

}