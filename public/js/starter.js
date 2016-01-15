seajs.config({
    'base' : './',

    'alias' : {
        '$' : "lib/jquery/1.11.1/jquery.js",
        'io' : 'lib/socket.io/socket.io.js'
    }
});

seajs.use('js/shell', function(shell){
    //shell.init();
});
