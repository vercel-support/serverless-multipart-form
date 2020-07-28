let multiparty = require('multiparty')
let http = require('http')
let util = require('util')

module.exports = (req, res) => {
    if (req.method === "POST") {
        let form = new multiparty.Form();
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.write('received upload: \n\n');
            res.end(util.inspect({ fields: fields, files: files }));
        });
        return;
    } else {
        res.end("Send a POST request.");
        return;
    }
}
