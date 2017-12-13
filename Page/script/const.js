var _URL = 'innova.vservers.es:8090';
var _Device = '5678';
var socketes = io.connect('http://innova.vservers.es:8090');
var WebService = 'http://127.0.0.1:5000/api/'
var estaPulsadoContacto = false;

var Proy = Proy || {};

Proy.TipMensaje = {};
Proy.CocaCola = {};

Proy.TipMensaje = {
    Saludo: 'Saludo',
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
        socketes.on('newMessage', function(msg) {
            var s = msg.split('|');
            if (s[0] == _Device) {
                return;
            } else {
                if (s[1] == Proy.TipMensaje.Saludo)
                    Proy.CocaCola.Saludo();
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
        dialogIniciar();
    },
    Video: function() {
        //AGREGAR tu codigo
        redirect();
    },
    Prepare: function() {
        //AGREGAR tu codigo
        console.log("preparado");
        if (!estaPreparado) {
            dialogMano();
        }

        // $getJSON(WebService + 'StremingPrepare', onSuccess, onError);
    },
    Dispacher: function() {
        //AGREGAR tu codigo 
        estaDespachado = true;
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