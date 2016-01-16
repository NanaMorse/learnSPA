seajs.config({
    'base' : './',

    'alias' : {
        '$' : "lib/jquery/1.11.1/jquery.js",
        'io' : 'lib/socket.io/socket.io.js',
        'utils' : 'corejs/utils.js',
        'config' : 'corejs/config.js'
    }
});

seajs.use('corejs/shell', function(shell){
    //shell.init();
});
