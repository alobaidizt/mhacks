var page = require('webpage').create(),
    url = 'https://www.fbo.gov/';

page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        console.log('derp');
        //var results = page.evaluate(function() {
            //var list = document.querySelectorAll('address'), pizza = [], i;
            //for (i = 0; i < list.length; i++) {
                //pizza.push(list[i].innerText);
            //}
            //return pizza;
        //});
        //console.log(results.join('\n'));
    }
    phantom.exit();
});
