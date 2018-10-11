process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === 'exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {            
            // console.log('Node version: ' + process.versions['node']);
            console.log('Node version: ' + process.versions.node);            
            console.log('Architektura: ' + process.config.variables.host_arch);
            process.stdout.write('\n Wpisz exit aby wyjść!! \n');
        }
    }
});

