var MD5 = function (e) {
    function n(d) {
        for (var a = 0, b = ""; 3 >= a; a++)b += "0123456789abcdef".charAt(d >> 8 * a + 4 & 15) + "0123456789abcdef".charAt(d >> 8 * a & 15);
        return b
    }

    function m(a, b) {
        var d = (a & 65535) + (b & 65535);
        return (a >> 16) + (b >> 16) + (d >> 16) << 16 | d & 65535
    }

    function h(a, b, d, c, e, f) {
        a = m(m(b, a), m(c, f));
        return m(a << e | a >>> 32 - e, d)
    }

    function g(a, b, d, c, e, f, g) {
        return h(b & d | ~b & c, a, b, e, f, g)
    }

    function k(a, b, d, c, e, f, g) {
        return h(b & c | d & ~c, a, b, e, f, g)
    }

    function l(a, b, d, c, e, f, g) {
        return h(d ^ (b | ~c), a, b, e, f, g)
    }

    e = function (a) {
        for (var b =
            (a.length + 8 >> 6) + 1, d = Array(16 * b), c = 0; c < 16 * b; c++)d[c] = 0;
        for (c = 0; c < a.length; c++)d[c >> 2] |= a.charCodeAt(c) << c % 4 * 8;
        d[c >> 2] |= 128 << c % 4 * 8;
        d[16 * b - 2] = 8 * a.length;
        return d
    }(e);
    for (var d = 1732584193, a = -271733879, b = -1732584194, c = 271733878, f = 0; f < e.length; f += 16)var p = d, q = a, r = b, t = c, d = g(d, a, b, c, e[f + 0], 7, -680876936), c = g(c, d, a, b, e[f + 1], 12, -389564586), b = g(b, c, d, a, e[f + 2], 17, 606105819), a = g(a, b, c, d, e[f + 3], 22, -1044525330), d = g(d, a, b, c, e[f + 4], 7, -176418897), c = g(c, d, a, b, e[f + 5], 12, 1200080426), b = g(b, c, d, a, e[f + 6], 17, -1473231341),
        a = g(a, b, c, d, e[f + 7], 22, -45705983), d = g(d, a, b, c, e[f + 8], 7, 1770035416), c = g(c, d, a, b, e[f + 9], 12, -1958414417), b = g(b, c, d, a, e[f + 10], 17, -42063), a = g(a, b, c, d, e[f + 11], 22, -1990404162), d = g(d, a, b, c, e[f + 12], 7, 1804603682), c = g(c, d, a, b, e[f + 13], 12, -40341101), b = g(b, c, d, a, e[f + 14], 17, -1502002290), a = g(a, b, c, d, e[f + 15], 22, 1236535329), d = k(d, a, b, c, e[f + 1], 5, -165796510), c = k(c, d, a, b, e[f + 6], 9, -1069501632), b = k(b, c, d, a, e[f + 11], 14, 643717713), a = k(a, b, c, d, e[f + 0], 20, -373897302), d = k(d, a, b, c, e[f + 5], 5, -701558691), c = k(c, d, a, b, e[f + 10], 9, 38016083),
        b = k(b, c, d, a, e[f + 15], 14, -660478335), a = k(a, b, c, d, e[f + 4], 20, -405537848), d = k(d, a, b, c, e[f + 9], 5, 568446438), c = k(c, d, a, b, e[f + 14], 9, -1019803690), b = k(b, c, d, a, e[f + 3], 14, -187363961), a = k(a, b, c, d, e[f + 8], 20, 1163531501), d = k(d, a, b, c, e[f + 13], 5, -1444681467), c = k(c, d, a, b, e[f + 2], 9, -51403784), b = k(b, c, d, a, e[f + 7], 14, 1735328473), a = k(a, b, c, d, e[f + 12], 20, -1926607734), d = h(a ^ b ^ c, d, a, e[f + 5], 4, -378558), c = h(d ^ a ^ b, c, d, e[f + 8], 11, -2022574463), b = h(c ^ d ^ a, b, c, e[f + 11], 16, 1839030562), a = h(b ^ c ^ d, a, b, e[f + 14], 23, -35309556), d = h(a ^ b ^ c, d, a, e[f +
        1], 4, -1530992060), c = h(d ^ a ^ b, c, d, e[f + 4], 11, 1272893353), b = h(c ^ d ^ a, b, c, e[f + 7], 16, -155497632), a = h(b ^ c ^ d, a, b, e[f + 10], 23, -1094730640), d = h(a ^ b ^ c, d, a, e[f + 13], 4, 681279174), c = h(d ^ a ^ b, c, d, e[f + 0], 11, -358537222), b = h(c ^ d ^ a, b, c, e[f + 3], 16, -722521979), a = h(b ^ c ^ d, a, b, e[f + 6], 23, 76029189), d = h(a ^ b ^ c, d, a, e[f + 9], 4, -640364487), c = h(d ^ a ^ b, c, d, e[f + 12], 11, -421815835), b = h(c ^ d ^ a, b, c, e[f + 15], 16, 530742520), a = h(b ^ c ^ d, a, b, e[f + 2], 23, -995338651), d = l(d, a, b, c, e[f + 0], 6, -198630844), c = l(c, d, a, b, e[f + 7], 10, 1126891415), b = l(b, c, d, a, e[f + 14], 15,
            -1416354905), a = l(a, b, c, d, e[f + 5], 21, -57434055), d = l(d, a, b, c, e[f + 12], 6, 1700485571), c = l(c, d, a, b, e[f + 3], 10, -1894986606), b = l(b, c, d, a, e[f + 10], 15, -1051523), a = l(a, b, c, d, e[f + 1], 21, -2054922799), d = l(d, a, b, c, e[f + 8], 6, 1873313359), c = l(c, d, a, b, e[f + 15], 10, -30611744), b = l(b, c, d, a, e[f + 6], 15, -1560198380), a = l(a, b, c, d, e[f + 13], 21, 1309151649), d = l(d, a, b, c, e[f + 4], 6, -145523070), c = l(c, d, a, b, e[f + 11], 10, -1120210379), b = l(b, c, d, a, e[f + 2], 15, 718787259), a = l(a, b, c, d, e[f + 9], 21, -343485551), d = m(d, p), a = m(a, q), b = m(b, r), c = m(c, t);
    return n(d) +
        n(a) + n(b) + n(c)
};
module.exports = MD5;