var _URL = 'innova.vservers.es:8080';
var _Device = '';
var socketes = io.connect('http://innova.vservers.es:8081');
var WebService = 'http://127.0.0.1:5000/api/'

TipMensaje = {
    Saludo: 'Saludo',
    Prepare: 'Prepare',
    Dispacher: 'Dispacehr'
};
CocaCola = {
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
                if (s[1] == TipMensaje.Saludo)
                    CocaCola.Saludo();
                if (s[1] == TipMensaje.Prepare)
                    CocaCola.Saludo();
                if (s[1] == TipMensaje.Dispacher)
                    CocaCola.Saludo();

            }
        });

    },
    Saludo: function() {
        //AGREGAR tu codigo 
    },
    Prepare: function() {
        $getJSON(WebService + 'StremingPrepare', onSuccess, onError);
        //AGREGAR tu codigo 
    },
    Dispacher: function() {
        $getJSON(WebService + 'StremingDispacher', onSuccess, onError);
        //AGREGAR tu codigo 
    },
    onSuccess: function(data) {

    },
    onError: function(err) {

    }

}