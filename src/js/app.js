var Vue = require('vue');
var crypto = require('crypto');

var demo = new Vue({
    el: '.crypto-app',
    data: {
        plaintext: 'I am mr robot',
        hashes: ['sha512', 'sha384', 'sha256', 'sha224', 'sha1', 'md5'],
        selected_hash: 'sha1'
    },
    computed: {
        ciphertext: function() {
            var hash = crypto.createHash(this.selected_hash);
            hash.update(this.plaintext);
            return hash.digest('hex');
        }
    }
})
