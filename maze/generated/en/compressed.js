// Automatically generated file.  Do not edit!
'use strict'
var d,
  aa =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
  ba =
    'undefined' != typeof window && window === this
      ? this
      : 'undefined' != typeof global && null != global
      ? global
      : this
function ca(a, b) {
  if (b) {
    var c = ba
    a = a.split('.')
    for (var e = 0; e < a.length - 1; e++) {
      var f = a[e]
      f in c || (c[f] = {})
      c = c[f]
    }
    a = a[a.length - 1]
    e = c[a]
    b = b(e)
    b != e &&
      null != b &&
      aa(c, a, { configurable: !0, writable: !0, value: b })
  }
}
ca('String.prototype.startsWith', function (a) {
  return a
    ? a
    : function (b, c) {
        if (null == this)
          throw new TypeError(
            "The 'this' value for String.prototype.startsWith must not be null or undefined"
          )
        if (b instanceof RegExp)
          throw new TypeError(
            'First argument to String.prototype.startsWith must not be a regular expression'
          )
        var e = this + ''
        b += ''
        var f = e.length,
          h = b.length
        c = Math.max(0, Math.min(c | 0, e.length))
        for (var k = 0; k < h && c < f; ) if (e[c++] != b[k++]) return !1
        return k >= h
      }
})
function da(a) {
  var b = 0
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
  }
}
function ea() {
  ea = function () {}
  ba.Symbol || (ba.Symbol = fa)
}
function ha(a, b) {
  this.Ps = a
  aa(this, 'description', { configurable: !0, writable: !0, value: b })
}
ha.prototype.toString = function () {
  return this.Ps
}
var fa = (function () {
  function a(c) {
    if (this instanceof a) throw new TypeError('Symbol is not a constructor')
    return new ha('jscomp_symbol_' + (c || '') + '_' + b++, c)
  }
  var b = 0
  return a
})()
function ia() {
  ea()
  var a = ba.Symbol.iterator
  a || (a = ba.Symbol.iterator = ba.Symbol('Symbol.iterator'))
  'function' != typeof Array.prototype[a] &&
    aa(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
        return ja(da(this))
      }
    })
  ia = function () {}
}
function ja(a) {
  ia()
  a = { next: a }
  a[ba.Symbol.iterator] = function () {
    return this
  }
  return a
}
function ka(a, b) {
  ia()
  a instanceof String && (a += '')
  var c = 0,
    e = {
      next: function () {
        if (c < a.length) {
          var f = c++
          return { value: b(f, a[f]), done: !1 }
        }
        e.next = function () {
          return { done: !0, value: void 0 }
        }
        return e.next()
      }
    }
  e[Symbol.iterator] = function () {
    return e
  }
  return e
}
ca('Array.prototype.keys', function (a) {
  return a
    ? a
    : function () {
        return ka(this, function (b) {
          return b
        })
      }
})
ca('Math.sign', function (a) {
  return a
    ? a
    : function (b) {
        b = Number(b)
        return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
      }
})
var g = this || self
function u(a) {
  return 'string' == typeof a
}
function la(a) {
  return 'number' == typeof a
}
function ma(a, b) {
  a = a.split('.')
  var c = g
  a[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + a[0])
  for (var e; a.length && (e = a.shift()); )
    a.length || void 0 === b
      ? (c = c[e] && c[e] !== Object.prototype[e] ? c[e] : (c[e] = {}))
      : (c[e] = b)
}
function na() {}
function oa(a) {
  a.hn = void 0
  a.cf = function () {
    return a.hn ? a.hn : (a.hn = new a())
  }
}
function pa(a) {
  var b = typeof a
  if ('object' == b)
    if (a) {
      if (a instanceof Array) return 'array'
      if (a instanceof Object) return b
      var c = Object.prototype.toString.call(a)
      if ('[object Window]' == c) return 'object'
      if (
        '[object Array]' == c ||
        ('number' == typeof a.length &&
          'undefined' != typeof a.splice &&
          'undefined' != typeof a.propertyIsEnumerable &&
          !a.propertyIsEnumerable('splice'))
      )
        return 'array'
      if (
        '[object Function]' == c ||
        ('undefined' != typeof a.call &&
          'undefined' != typeof a.propertyIsEnumerable &&
          !a.propertyIsEnumerable('call'))
      )
        return 'function'
    } else return 'null'
  else if ('function' == b && 'undefined' == typeof a.call) return 'object'
  return b
}
function qa(a) {
  return 'array' == pa(a)
}
function ra(a) {
  var b = pa(a)
  return 'array' == b || ('object' == b && 'number' == typeof a.length)
}
function sa(a) {
  return 'function' == pa(a)
}
function ta(a) {
  var b = typeof a
  return ('object' == b && null != a) || 'function' == b
}
function ua(a) {
  return a[va] || (a[va] = ++wa)
}
var va = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
  wa = 0
function xa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ya(a, b, c) {
  if (!a) throw Error()
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2)
    return function () {
      var f = Array.prototype.slice.call(arguments)
      Array.prototype.unshift.apply(f, e)
      return a.apply(b, f)
    }
  }
  return function () {
    return a.apply(b, arguments)
  }
}
function za(a, b, c) {
  za =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf('native code')
      ? xa
      : ya
  return za.apply(null, arguments)
}
function Aa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1)
  return function () {
    var e = c.slice()
    e.push.apply(e, arguments)
    return a.apply(this, e)
  }
}
function w(a, b) {
  function c() {}
  c.prototype = b.prototype
  a.o = b.prototype
  a.prototype = new c()
  a.prototype.constructor = a
  a.Xx = function (e, f, h) {
    for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
      k[l - 2] = arguments[l]
    return b.prototype[f].apply(e, k)
  }
}
function Ba(a) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, Ba)
  else {
    var b = Error().stack
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
w(Ba, Error)
Ba.prototype.name = 'CustomError'
var Ca
function Da(a, b) {
  a = a.split('%s')
  for (var c = '', e = a.length - 1, f = 0; f < e; f++)
    c += a[f] + (f < b.length ? b[f] : '%s')
  Ba.call(this, c + a[e])
}
w(Da, Ba)
Da.prototype.name = 'AssertionError'
var Ea = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
      }
    : function (a, b) {
        if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
        return -1
      },
  Fa = Array.prototype.forEach
    ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
      }
    : function (a, b, c) {
        for (var e = a.length, f = u(a) ? a.split('') : a, h = 0; h < e; h++)
          h in f && b.call(c, f[h], h, a)
      },
  Ga = Array.prototype.filter
    ? function (a, b) {
        return Array.prototype.filter.call(a, b, void 0)
      }
    : function (a, b) {
        for (
          var c = a.length, e = [], f = 0, h = u(a) ? a.split('') : a, k = 0;
          k < c;
          k++
        )
          if (k in h) {
            var l = h[k]
            b.call(void 0, l, k, a) && (e[f++] = l)
          }
        return e
      },
  Ha = Array.prototype.map
    ? function (a, b) {
        return Array.prototype.map.call(a, b, void 0)
      }
    : function (a, b) {
        for (
          var c = a.length, e = Array(c), f = u(a) ? a.split('') : a, h = 0;
          h < c;
          h++
        )
          h in f && (e[h] = b.call(void 0, f[h], h, a))
        return e
      },
  Ia = Array.prototype.every
    ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0)
      }
    : function (a, b) {
        for (var c = a.length, e = u(a) ? a.split('') : a, f = 0; f < c; f++)
          if (f in e && !b.call(void 0, e[f], f, a)) return !1
        return !0
      }
function Ja(a, b) {
  return 0 <= Ea(a, b)
}
function Ka(a, b) {
  b = Ea(a, b)
  var c
  ;(c = 0 <= b) && Array.prototype.splice.call(a, b, 1)
  return c
}
function La(a) {
  return Array.prototype.concat.apply([], arguments)
}
function Ma(a) {
  var b = a.length
  if (0 < b) {
    for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e]
    return c
  }
  return []
}
function Na(a, b, c, e) {
  Array.prototype.splice.apply(a, Oa(arguments, 1))
}
function Oa(a, b, c) {
  return 2 >= arguments.length
    ? Array.prototype.slice.call(a, b)
    : Array.prototype.slice.call(a, b, c)
}
var Pa = String.prototype.trim
  ? function (a) {
      return a.trim()
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
function Qa(a, b) {
  if (b)
    a = a
      .replace(Ra, '&amp;')
      .replace(Sa, '&lt;')
      .replace(Ta, '&gt;')
      .replace(Ua, '&quot;')
      .replace(Va, '&#39;')
      .replace(Wa, '&#0;')
  else {
    if (!Xa.test(a)) return a
    ;-1 != a.indexOf('&') && (a = a.replace(Ra, '&amp;'))
    ;-1 != a.indexOf('<') && (a = a.replace(Sa, '&lt;'))
    ;-1 != a.indexOf('>') && (a = a.replace(Ta, '&gt;'))
    ;-1 != a.indexOf('"') && (a = a.replace(Ua, '&quot;'))
    ;-1 != a.indexOf("'") && (a = a.replace(Va, '&#39;'))
    ;-1 != a.indexOf('\x00') && (a = a.replace(Wa, '&#0;'))
  }
  return a
}
var Ra = /&/g,
  Sa = /</g,
  Ta = />/g,
  Ua = /"/g,
  Va = /'/g,
  Wa = /\x00/g,
  Xa = /[\x00&<>"']/
function Ya(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}
var Za
a: {
  var $a = g.navigator
  if ($a) {
    var bb = $a.userAgent
    if (bb) {
      Za = bb
      break a
    }
  }
  Za = ''
}
function x(a) {
  return -1 != Za.indexOf(a)
}
function cb(a, b, c) {
  for (var e in a) b.call(c, a[e], e, a)
}
var db =
  'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  )
function eb(a, b) {
  for (var c, e, f = 1; f < arguments.length; f++) {
    e = arguments[f]
    for (c in e) a[c] = e[c]
    for (var h = 0; h < db.length; h++)
      (c = db[h]), Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
  }
}
function fb(a) {
  var b = arguments.length
  if (1 == b && qa(arguments[0])) return fb.apply(null, arguments[0])
  for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0
  return c
}
var gb = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
}
function hb(a, b) {
  this.Fo = (a === ib && b) || ''
  this.Ct = jb
}
hb.prototype.Ud = !0
hb.prototype.md = function () {
  return this.Fo
}
hb.prototype.toString = function () {
  return 'Const{' + this.Fo + '}'
}
function kb(a) {
  return a instanceof hb && a.constructor === hb && a.Ct === jb
    ? a.Fo
    : 'type_error:Const'
}
var jb = {},
  ib = {}
function lb() {
  this.Sr = ''
}
lb.prototype.Ud = !0
lb.prototype.md = function () {
  return this.Sr.toString()
}
lb.prototype.hf = function (a) {
  this.Sr = a
  return this
}
new lb().hf('')
function mb() {
  this.Ur = ''
  this.Dt = nb
}
mb.prototype.Ud = !0
mb.prototype.md = function () {
  return this.Ur.toString()
}
mb.prototype.dn = !0
mb.prototype.Xf = function () {
  return 1
}
var nb = {}
function ob() {
  this.Wn = ''
  this.At = pb
}
ob.prototype.Ud = !0
ob.prototype.md = function () {
  return this.Wn.toString()
}
ob.prototype.dn = !0
ob.prototype.Xf = function () {
  return 1
}
function qb(a) {
  if (a instanceof ob && a.constructor === ob && a.At === pb) return a.Wn
  pa(a)
  return 'type_error:SafeUrl'
}
var rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
function sb(a) {
  if (a instanceof ob) return a
  a = 'object' == typeof a && a.Ud ? a.md() : String(a)
  rb.test(a) || (a = 'about:invalid#zClosurez')
  return tb(a)
}
var pb = {}
function tb(a) {
  var b = new ob()
  b.Wn = a
  return b
}
tb('about:blank')
function ub() {
  this.Vn = ''
  this.zt = vb
}
ub.prototype.Ud = !0
var vb = {}
ub.prototype.md = function () {
  return this.Vn
}
ub.prototype.hf = function (a) {
  this.Vn = a
  return this
}
var wb = new ub().hf('')
function xb(a) {
  var b = '',
    c
  for (c in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(c))
      throw Error('Name allows only [-_a-zA-Z0-9], got: ' + c)
    var e = a[c]
    null != e &&
      ((e = qa(e) ? Ha(e, yb).join(' ') : yb(e)), (b += c + ':' + e + ';'))
  }
  return b ? new ub().hf(b) : wb
}
function yb(a) {
  if (a instanceof ob)
    return (
      'url("' +
      qb(a).toString().replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') +
      '")'
    )
  if (a instanceof hb) a = kb(a)
  else {
    a = String(a)
    var b = a.replace(zb, '$1').replace(zb, '$1').replace(Ab, 'url')
    if (Bb.test(b)) {
      if ((b = !Cb.test(a))) {
        for (var c = (b = !0), e = 0; e < a.length; e++) {
          var f = a.charAt(e)
          "'" == f && c ? (b = !b) : '"' == f && b && (c = !c)
        }
        b = b && c && Db(a)
      }
      a = b ? Eb(a) : 'zClosurez'
    } else a = 'zClosurez'
  }
  if (/[{;}]/.test(a)) throw new Da('Value does not allow [{;}], got: %s.', [a])
  return a
}
function Db(a) {
  for (var b = !0, c = /^[-_a-zA-Z0-9]$/, e = 0; e < a.length; e++) {
    var f = a.charAt(e)
    if (']' == f) {
      if (b) return !1
      b = !0
    } else if ('[' == f) {
      if (!b) return !1
      b = !1
    } else if (!b && !c.test(f)) return !1
  }
  return b
}
var Bb = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
  Ab =
    /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
  zb =
    /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
  Cb = /\/\*/
function Eb(a) {
  return a.replace(Ab, function (b, c, e, f) {
    var h = ''
    e = e.replace(/^(['"])(.*)\1$/, function (k, l, m) {
      h = l
      return m
    })
    b = sb(e).md()
    return c + h + b + h + f
  })
}
function Fb() {
  this.Tr = ''
}
Fb.prototype.Ud = !0
Fb.prototype.md = function () {
  return this.Tr
}
Fb.prototype.hf = function (a) {
  this.Tr = a
  return this
}
new Fb().hf('')
function Gb() {
  this.Un = ''
  this.yt = Hb
  this.vq = null
}
Gb.prototype.dn = !0
Gb.prototype.Xf = function () {
  return this.vq
}
Gb.prototype.Ud = !0
Gb.prototype.md = function () {
  return this.Un.toString()
}
function Ib(a) {
  if (a instanceof Gb && a.constructor === Gb && a.yt === Hb) return a.Un
  pa(a)
  return 'type_error:SafeHtml'
}
function Jb(a) {
  if (a instanceof Gb) return a
  var b = 'object' == typeof a,
    c = null
  b && a.dn && (c = a.Xf())
  return Kb(Qa(b && a.Ud ? a.md() : String(a)), c)
}
var Lb = /^[a-zA-Z0-9-]+$/,
  Mb = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
  },
  Nb = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
  }
function Ob(a, b, c) {
  var e = String(a)
  if (!Lb.test(e)) throw Error('Invalid tag name <' + e + '>.')
  if (e.toUpperCase() in Nb)
    throw Error('Tag name <' + e + '> is not allowed for SafeHtml.')
  a = String(a)
  e = null
  var f = '<' + a,
    h = ''
  if (b)
    for (n in b) {
      if (!Lb.test(n)) throw Error('Invalid attribute name "' + n + '".')
      var k = b[n]
      if (null != k) {
        var l = a
        var m = n
        if (k instanceof hb) k = kb(k)
        else if ('style' == m.toLowerCase()) {
          if (!ta(k))
            throw Error(
              'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                typeof k +
                ' given: ' +
                k
            )
          k instanceof ub || (k = xb(k))
          k instanceof ub && k.constructor === ub && k.zt === vb
            ? (k = k.Vn)
            : (pa(k), (k = 'type_error:SafeStyle'))
        } else {
          if (/^on/i.test(m))
            throw Error(
              'Attribute "' +
                m +
                '" requires goog.string.Const value, "' +
                k +
                '" given.'
            )
          if (m.toLowerCase() in Mb)
            if (k instanceof mb)
              k instanceof mb && k.constructor === mb && k.Dt === nb
                ? (k = k.Ur)
                : (pa(k), (k = 'type_error:TrustedResourceUrl')),
                (k = k.toString())
            else if (k instanceof ob) k = qb(k).toString()
            else if (u(k)) k = sb(k).md()
            else
              throw Error(
                'Attribute "' +
                  m +
                  '" on tag "' +
                  l +
                  '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                  k +
                  '" given.'
              )
        }
        k.Ud && (k = k.md())
        m = m + '="' + Qa(String(k)) + '"'
        h += ' ' + m
      }
    }
  var n = f + h
  null != c ? qa(c) || (c = [c]) : (c = [])
  !0 === gb[a.toLowerCase()]
    ? (n += '>')
    : ((c = Pb(c)),
      (n += '>' + Ib(c).toString() + '</' + a + '>'),
      (e = c.Xf()))
  ;(b = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null)
  return Kb(n, e)
}
function Qb(a) {
  function b(h) {
    qa(h)
      ? Fa(h, b)
      : ((h = Jb(h)),
        f.push(Ib(h).toString()),
        (h = h.Xf()),
        0 == e ? (e = h) : 0 != h && e != h && (e = null))
  }
  var c = Jb(Rb),
    e = c.Xf(),
    f = []
  Fa(a, b)
  return Kb(f.join(Ib(c).toString()), e)
}
function Pb(a) {
  return Qb(Array.prototype.slice.call(arguments))
}
var Hb = {}
function Kb(a, b) {
  return new Gb().hf(a, b)
}
Gb.prototype.hf = function (a, b) {
  this.Un = a
  this.vq = b
  return this
}
Kb('<!DOCTYPE html>', 0)
var Rb = Kb('', 0),
  Sb = Kb('<br>', 0)
var Tb = (function (a) {
  var b = !1,
    c
  return function () {
    b || ((c = a()), (b = !0))
    return c
  }
})(function () {
  var a = document.createElement('div'),
    b = document.createElement('div')
  b.appendChild(document.createElement('div'))
  a.appendChild(b)
  b = a.firstChild.firstChild
  a.innerHTML = Ib(Rb)
  return !b.parentElement
})
function Ub(a, b) {
  if (Tb()) for (; a.lastChild; ) a.removeChild(a.lastChild)
  a.innerHTML = Ib(b)
}
function Vb(a, b) {
  Ub(a, b)
}
function Wb(a) {
  return a.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '')
}
function Xb(a) {
  return (a = Qa(a, void 0))
}
function Yb(a) {
  var b = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' }
  var c = g.document.createElement('div')
  return a.replace(Zb, function (e, f) {
    var h = b[e]
    if (h) return h
    '#' == f.charAt(0) &&
      ((f = Number('0' + f.substr(1))),
      isNaN(f) || (h = String.fromCharCode(f)))
    h ||
      ((h = Kb(e + ' ', null)),
      Ub(c, h),
      (h = c.firstChild.nodeValue.slice(0, -1)))
    return (b[e] = h)
  })
}
function $b(a) {
  return a.replace(/&([^;]+);/g, function (b, c) {
    switch (c) {
      case 'amp':
        return '&'
      case 'lt':
        return '<'
      case 'gt':
        return '>'
      case 'quot':
        return '"'
      default:
        return '#' != c.charAt(0) || ((c = Number('0' + c.substr(1))), isNaN(c))
          ? b
          : String.fromCharCode(c)
    }
  })
}
var Zb = /&([^;\s<&]+);?/g
function ac(a) {
  ac[' '](a)
  return a
}
ac[' '] = na
function bc(a, b) {
  var c = cc
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a))
}
var dc = x('Opera'),
  y = x('Trident') || x('MSIE'),
  ec = x('Edge'),
  z =
    x('Gecko') &&
    !(-1 != Za.toLowerCase().indexOf('webkit') && !x('Edge')) &&
    !(x('Trident') || x('MSIE')) &&
    !x('Edge'),
  A = -1 != Za.toLowerCase().indexOf('webkit') && !x('Edge'),
  fc = A && x('Mobile'),
  gc = x('Macintosh'),
  hc = x('Android'),
  ic = x('iPhone') && !x('iPod') && !x('iPad'),
  jc = x('iPad')
function kc() {
  var a = g.document
  return a ? a.documentMode : void 0
}
var lc
a: {
  var mc = '',
    nc = (function () {
      var a = Za
      if (z) return /rv:([^\);]+)(\)|;)/.exec(a)
      if (ec) return /Edge\/([\d\.]+)/.exec(a)
      if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
      if (A) return /WebKit\/(\S+)/.exec(a)
      if (dc) return /(?:Version)[ \/]?(\S+)/.exec(a)
    })()
  nc && (mc = nc ? nc[1] : '')
  if (y) {
    var oc = kc()
    if (null != oc && oc > parseFloat(mc)) {
      lc = String(oc)
      break a
    }
  }
  lc = mc
}
var cc = {}
function pc(a) {
  return bc(a, function () {
    for (
      var b = 0,
        c = Pa(String(lc)).split('.'),
        e = Pa(String(a)).split('.'),
        f = Math.max(c.length, e.length),
        h = 0;
      0 == b && h < f;
      h++
    ) {
      var k = c[h] || '',
        l = e[h] || ''
      do {
        k = /(\d*)(\D*)(.*)/.exec(k) || ['', '', '', '']
        l = /(\d*)(\D*)(.*)/.exec(l) || ['', '', '', '']
        if (0 == k[0].length && 0 == l[0].length) break
        b =
          Ya(
            0 == k[1].length ? 0 : parseInt(k[1], 10),
            0 == l[1].length ? 0 : parseInt(l[1], 10)
          ) ||
          Ya(0 == k[2].length, 0 == l[2].length) ||
          Ya(k[2], l[2])
        k = k[3]
        l = l[3]
      } while (0 == b)
    }
    return 0 <= b
  })
}
var qc
var rc = g.document
qc =
  rc && y
    ? kc() || ('CSS1Compat' == rc.compatMode ? parseInt(lc, 10) : 5)
    : void 0
var sc = !y || 9 <= Number(qc),
  tc = (!z && !y) || (y && 9 <= Number(qc)) || (z && pc('1.9.1')),
  uc = y && !pc('9')
function B(a, b) {
  this.x = void 0 !== a ? a : 0
  this.y = void 0 !== b ? b : 0
}
d = B.prototype
d.clone = function () {
  return new B(this.x, this.y)
}
function vc(a, b) {
  return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}
function wc(a, b) {
  var c = a.x - b.x
  a = a.y - b.y
  return Math.sqrt(c * c + a * a)
}
function xc(a, b) {
  return new B(a.x - b.x, a.y - b.y)
}
function yc(a, b) {
  return new B(a.x + b.x, a.y + b.y)
}
d.ceil = function () {
  this.x = Math.ceil(this.x)
  this.y = Math.ceil(this.y)
  return this
}
d.floor = function () {
  this.x = Math.floor(this.x)
  this.y = Math.floor(this.y)
  return this
}
d.round = function () {
  this.x = Math.round(this.x)
  this.y = Math.round(this.y)
  return this
}
d.translate = function (a, b) {
  a instanceof B
    ? ((this.x += a.x), (this.y += a.y))
    : ((this.x += Number(a)), la(b) && (this.y += b))
  return this
}
d.scale = function (a, b) {
  b = la(b) ? b : a
  this.x *= a
  this.y *= b
  return this
}
function zc(a, b) {
  this.width = a
  this.height = b
}
d = zc.prototype
d.clone = function () {
  return new zc(this.width, this.height)
}
d.aspectRatio = function () {
  return this.width / this.height
}
d.er = function () {
  return !(this.width * this.height)
}
d.ceil = function () {
  this.width = Math.ceil(this.width)
  this.height = Math.ceil(this.height)
  return this
}
d.floor = function () {
  this.width = Math.floor(this.width)
  this.height = Math.floor(this.height)
  return this
}
d.round = function () {
  this.width = Math.round(this.width)
  this.height = Math.round(this.height)
  return this
}
d.scale = function (a, b) {
  b = la(b) ? b : a
  this.width *= a
  this.height *= b
  return this
}
function Ac(a) {
  return a ? new Bc(Cc(a)) : Ca || (Ca = new Bc())
}
function Dc(a, b) {
  cb(b, function (c, e) {
    c && 'object' == typeof c && c.Ud && (c = c.md())
    'style' == e
      ? (a.style.cssText = c)
      : 'class' == e
      ? (a.className = c)
      : 'for' == e
      ? (a.htmlFor = c)
      : Ec.hasOwnProperty(e)
      ? a.setAttribute(Ec[e], c)
      : 0 == e.lastIndexOf('aria-', 0) || 0 == e.lastIndexOf('data-', 0)
      ? a.setAttribute(e, c)
      : (a[e] = c)
  })
}
var Ec = {
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  frameborder: 'frameBorder',
  height: 'height',
  maxlength: 'maxLength',
  nonce: 'nonce',
  role: 'role',
  rowspan: 'rowSpan',
  type: 'type',
  usemap: 'useMap',
  valign: 'vAlign',
  width: 'width'
}
function Fc() {
  var a = window.document
  a = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body
  return new zc(a.clientWidth, a.clientHeight)
}
function Gc(a) {
  var b = Hc(a)
  a = a.parentWindow || a.defaultView
  return y && pc('10') && a.pageYOffset != b.scrollTop
    ? new B(b.scrollLeft, b.scrollTop)
    : new B(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function Hc(a) {
  return a.scrollingElement
    ? a.scrollingElement
    : A || 'CSS1Compat' != a.compatMode
    ? a.body || a.documentElement
    : a.documentElement
}
function Ic(a, b, c, e) {
  function f(k) {
    k && b.appendChild(u(k) ? a.createTextNode(k) : k)
  }
  for (; e < c.length; e++) {
    var h = c[e]
    !ra(h) || (ta(h) && 0 < h.nodeType) ? f(h) : Fa(Jc(h) ? Ma(h) : h, f)
  }
}
function Kc(a) {
  for (var b; (b = a.firstChild); ) a.removeChild(b)
}
function Lc(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
function Mc(a, b) {
  if (!a || !b) return !1
  if (a.contains && 1 == b.nodeType) return a == b || a.contains(b)
  if ('undefined' != typeof a.compareDocumentPosition)
    return a == b || !!(a.compareDocumentPosition(b) & 16)
  for (; b && a != b; ) b = b.parentNode
  return b == a
}
function Cc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Nc(a, b) {
  if ('textContent' in a) a.textContent = b
  else if (3 == a.nodeType) a.data = String(b)
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild)
    a.firstChild.data = String(b)
  } else Kc(a), a.appendChild(Cc(a).createTextNode(String(b)))
}
var Oc = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
  Pc = { IMG: ' ', BR: '\n' }
function Qc(a) {
  return y && !pc('9')
    ? ((a = a.getAttributeNode('tabindex')), null != a && a.specified)
    : a.hasAttribute('tabindex')
}
function Rc(a) {
  a = a.tabIndex
  return la(a) && 0 <= a && 32768 > a
}
function Sc(a) {
  var b = []
  Tc(a, b, !1)
  return b.join('')
}
function Tc(a, b, c) {
  if (!(a.nodeName in Oc))
    if (3 == a.nodeType)
      c
        ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
        : b.push(a.nodeValue)
    else if (a.nodeName in Pc) b.push(Pc[a.nodeName])
    else for (a = a.firstChild; a; ) Tc(a, b, c), (a = a.nextSibling)
}
function Jc(a) {
  if (a && 'number' == typeof a.length) {
    if (ta(a)) return 'function' == typeof a.item || 'string' == typeof a.item
    if (sa(a)) return 'function' == typeof a.item
  }
  return !1
}
function Bc(a) {
  this.Kd = a || g.document || document
}
d = Bc.prototype
d.Pd = Ac
d.G = function (a) {
  return u(a) ? this.Kd.getElementById(a) : a
}
d.getElementsByTagName = function (a, b) {
  return (b || this.Kd).getElementsByTagName(String(a))
}
d.setProperties = Dc
d.X = function (a, b, c) {
  var e = this.Kd,
    f = arguments,
    h = String(f[0]),
    k = f[1]
  if (!sc && k && (k.name || k.type)) {
    h = ['<', h]
    k.name && h.push(' name="', Xb(k.name), '"')
    if (k.type) {
      h.push(' type="', Xb(k.type), '"')
      var l = {}
      eb(l, k)
      delete l.type
      k = l
    }
    h.push('>')
    h = h.join('')
  }
  h = e.createElement(h)
  k &&
    (u(k) ? (h.className = k) : qa(k) ? (h.className = k.join(' ')) : Dc(h, k))
  2 < f.length && Ic(e, h, f, 2)
  return h
}
d.createElement = function (a) {
  return this.Kd.createElement(String(a))
}
d.createTextNode = function (a) {
  return this.Kd.createTextNode(String(a))
}
d.appendChild = function (a, b) {
  a.appendChild(b)
}
d.append = function (a, b) {
  Ic(Cc(a), a, arguments, 1)
}
d.canHaveChildren = function (a) {
  if (1 != a.nodeType) return !1
  switch (a.tagName) {
    case 'APPLET':
    case 'AREA':
    case 'BASE':
    case 'BR':
    case 'COL':
    case 'COMMAND':
    case 'EMBED':
    case 'FRAME':
    case 'HR':
    case 'IMG':
    case 'INPUT':
    case 'IFRAME':
    case 'ISINDEX':
    case 'KEYGEN':
    case 'LINK':
    case 'NOFRAMES':
    case 'NOSCRIPT':
    case 'META':
    case 'OBJECT':
    case 'PARAM':
    case 'SCRIPT':
    case 'SOURCE':
    case 'STYLE':
    case 'TRACK':
    case 'WBR':
      return !1
  }
  return !0
}
d.Zr = Kc
d.removeNode = Lc
d.ye = function (a) {
  return tc && void 0 != a.children
    ? a.children
    : Ga(a.childNodes, function (b) {
        return 1 == b.nodeType
      })
}
d.contains = Mc
d.mf = function (a) {
  var b
  ;(b =
    ('A' == a.tagName && a.hasAttribute('href')) ||
    'INPUT' == a.tagName ||
    'TEXTAREA' == a.tagName ||
    'SELECT' == a.tagName ||
    'BUTTON' == a.tagName
      ? !a.disabled && (!Qc(a) || Rc(a))
      : Qc(a) && Rc(a)) && y
    ? ((a =
        !sa(a.getBoundingClientRect) || (y && null == a.parentElement)
          ? { height: a.offsetHeight, width: a.offsetWidth }
          : a.getBoundingClientRect()),
      (a = null != a && 0 < a.height && 0 < a.width))
    : (a = b)
  return a
}
// Copyright 2012 Google Inc.  Apache License 2.0
var C = { h: {} }
C.h.removeAttribute = function (a, b) {
  y && pc('10.0') ? a.setAttribute(b, null) : a.removeAttribute(b)
}
C.h.Ha = function (a, b) {
  var c = a.getAttribute('class') || ''
  if (-1 != (' ' + c + ' ').indexOf(' ' + b + ' ')) return !1
  c && (c += ' ')
  a.setAttribute('class', c + b)
  return !0
}
C.h.bb = function (a, b) {
  var c = a.getAttribute('class')
  if (-1 == (' ' + c + ' ').indexOf(' ' + b + ' ')) return !1
  c = c.split(/\s+/)
  for (var e = 0; e < c.length; e++)
    (c[e] && c[e] != b) || (c.splice(e, 1), e--)
  c.length
    ? a.setAttribute('class', c.join(' '))
    : C.h.removeAttribute(a, 'class')
  return !0
}
C.h.Sq = function (a, b) {
  return -1 != (' ' + a.getAttribute('class') + ' ').indexOf(' ' + b + ' ')
}
C.h.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
C.h.ew = function (a) {
  a.preventDefault()
  a.stopPropagation()
}
C.h.Xk = function (a) {
  return (
    'textarea' == a.target.type ||
    'text' == a.target.type ||
    'number' == a.target.type ||
    'email' == a.target.type ||
    'password' == a.target.type ||
    'search' == a.target.type ||
    'tel' == a.target.type ||
    'url' == a.target.type ||
    a.target.isContentEditable
  )
}
C.h.oc = function (a) {
  var b = new B(0, 0),
    c = a.getAttribute('x')
  c && (b.x = parseInt(c, 10))
  if ((c = a.getAttribute('y'))) b.y = parseInt(c, 10)
  if ((c = (c = a.getAttribute('transform')) && c.match(C.h.oc.Ht)))
    (b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]))
  ;(a = a.getAttribute('style')) &&
    -1 < a.indexOf('translate') &&
    ((c = a.match(C.h.oc.Ft)) || (c = a.match(C.h.oc.Gt)),
    c && ((b.x += parseFloat(c[1])), c[3] && (b.y += parseFloat(c[3]))))
  return b
}
C.h.Fk = function (a) {
  for (var b = 0, c = 0; a; ) {
    var e = C.h.oc(a)
    b += e.x
    c += e.y
    if (
      -1 !=
      (' ' + (a.getAttribute('class') || '') + ' ').indexOf(' injectionDiv ')
    )
      break
    a = a.parentNode
  }
  return new B(b, c)
}
C.h.oc.Ht = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/
C.h.oc.Gt =
  /transform:\s*translate3d\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px([ ,]\s*([-+\d.e]+)\s*)px\)?/
C.h.oc.Ft =
  /transform:\s*translate\(\s*([-+\d.e]+)px([ ,]\s*([-+\d.e]+)\s*)px\)?/
C.h.B = function (a, b, c) {
  a = document.createElementNS(C.Ac, a)
  for (var e in b) a.setAttribute(e, b[e])
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style)
  c && c.appendChild(a)
  return a
}
C.h.pf = function (a) {
  return a.ctrlKey && gc ? !0 : 2 == a.button
}
C.h.dj = function (a, b, c) {
  var e = b.createSVGPoint()
  e.x = a.clientX
  e.y = a.clientY
  c || (c = b.getScreenCTM().inverse())
  return e.matrixTransform(c)
}
C.h.Sm = function (a) {
  switch (a.deltaMode) {
    case 0:
      return { x: a.deltaX, y: a.deltaY }
    case 1:
      return { x: a.deltaX * C.$o, y: a.deltaY * C.$o }
    case 2:
      return { x: a.deltaX * C.kp, y: a.deltaY * C.kp }
  }
}
C.h.xo = function (a) {
  return a.length
    ? a.reduce(function (b, c) {
        return b.length < c.length ? b : c
      }).length
    : 0
}
C.h.pu = function (a, b) {
  if (!a.length) return 0
  if (1 == a.length) return a[0].length
  var c = 0
  b = b || C.h.xo(a)
  for (var e = 0; e < b; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return c
    ' ' == f && (c = e + 1)
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && ' ' != f) return c
  return b
}
C.h.qu = function (a, b) {
  if (!a.length) return 0
  if (1 == a.length) return a[0].length
  var c = 0
  b = b || C.h.xo(a)
  for (var e = 0; e < b; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return c
    ' ' == f && (c = e + 1)
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && ' ' != f) return c
  return b
}
C.h.Xw = function (a) {
  return C.h.Ho(a, !0)
}
C.h.Qb = function (a) {
  if ('string' != typeof a) return a
  a = C.h.Ho(a, !1)
  return a.length ? a[0] : ''
}
C.h.Fp = function (a) {
  for (var b = C.g, c = /%{(BKY_[A-Z][A-Z0-9_]*)}/gi, e = c.exec(a); e; ) {
    var f = e[1]
    f = f.toUpperCase()
    'BKY_' != f.substr(0, 4)
      ? console.log(
          'WARNING: Unsupported message table prefix in %{' + e[1] + '}.'
        )
      : void 0 == b[f.substr(4)] &&
        console.log('WARNING: No message string for %{' + e[1] + '}.')
    a = a.substring(e.index + f.length + 1)
    e = c.exec(a)
  }
}
C.h.Ho = function (a, b) {
  var c = [],
    e = a.split('')
  e.push('')
  var f = 0
  a = []
  for (var h = null, k = 0; k < e.length; k++) {
    var l = e[k]
    0 == f
      ? '%' == l
        ? ((l = a.join('')) && c.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? '%' == l
        ? (a.push(l), (f = 0))
        : b && '0' <= l && '9' >= l
        ? ((f = 2), (h = l), (l = a.join('')) && c.push(l), (a.length = 0))
        : '{' == l
        ? (f = 3)
        : (a.push('%', l), (f = 0))
      : 2 == f
      ? '0' <= l && '9' >= l
        ? (h += l)
        : (c.push(parseInt(h, 10)), k--, (f = 0))
      : 3 == f &&
        ('' == l
          ? (a.splice(0, 0, '%{'), k--, (f = 0))
          : '}' != l
          ? a.push(l)
          : ((f = a.join('')),
            /[a-zA-Z][a-zA-Z0-9_]*/.test(f)
              ? ((l = f.toUpperCase()),
                (l = C.h.startsWith(l, 'BKY_') ? l.substring(4) : null) &&
                l in C.g
                  ? ((f = C.g[l]),
                    'string' == typeof f
                      ? Array.prototype.push.apply(c, C.h.Ho(f, b))
                      : b
                      ? c.push(String(f))
                      : c.push(f))
                  : c.push('%{' + f + '}'))
              : c.push('%{' + f + '}'),
            (f = a.length = 0)))
  }
  ;(l = a.join('')) && c.push(l)
  b = []
  for (k = a.length = 0; k < c.length; ++k)
    'string' == typeof c[k]
      ? a.push(c[k])
      : ((l = a.join('')) && b.push(l), (a.length = 0), b.push(c[k]))
  ;(l = a.join('')) && b.push(l)
  a.length = 0
  return b
}
C.h.Od = function () {
  for (var a = C.h.Od.qs.length, b = [], c = 0; 20 > c; c++)
    b[c] = C.h.Od.qs.charAt(Math.random() * a)
  return b.join('')
}
C.h.Od.qs =
  '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
C.h.Ns = function (a, b) {
  a = a.split('\n')
  for (var c = 0; c < a.length; c++) a[c] = C.h.jx(a[c], b)
  return a.join('\n')
}
C.h.jx = function (a, b) {
  if (a.length <= b) return a
  for (var c = a.trim().split(/\s+/), e = 0; e < c.length; e++)
    c[e].length > b && (b = c[e].length)
  e = -Infinity
  var f = 1
  do {
    var h = e
    var k = a
    a = []
    var l = c.length / f,
      m = 1
    for (e = 0; e < c.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1)
    a = C.h.Os(c, a, b)
    e = C.h.Lo(c, a, b)
    a = C.h.kx(c, a)
    f++
  } while (e > h)
  return k
}
C.h.Lo = function (a, b, c) {
  for (var e = [0], f = [], h = 0; h < a.length; h++)
    (e[e.length - 1] += a[h].length),
      !0 === b[h]
        ? (e.push(0), f.push(a[h].charAt(a[h].length - 1)))
        : !1 === b[h] && e[e.length - 1]++
  a = Math.max.apply(Math, e)
  for (h = b = 0; h < e.length; h++)
    (b -= 2 * Math.pow(Math.abs(c - e[h]), 1.5)),
      (b -= Math.pow(a - e[h], 1.5)),
      -1 != '.?!'.indexOf(f[h])
        ? (b += c / 3)
        : -1 != ',;)]}'.indexOf(f[h]) && (b += c / 4)
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (b += 0.5)
  return b
}
C.h.Os = function (a, b, c) {
  for (var e = C.h.Lo(a, b, c), f, h = 0; h < b.length - 1; h++)
    if (b[h] != b[h + 1]) {
      var k = [].concat(b)
      k[h] = !k[h]
      k[h + 1] = !k[h + 1]
      var l = C.h.Lo(a, k, c)
      l > e && ((e = l), (f = k))
    }
  return f ? C.h.Os(a, f, c) : b
}
C.h.kx = function (a, b) {
  for (var c = [], e = 0; e < a.length; e++)
    c.push(a[e]), void 0 !== b[e] && c.push(b[e] ? '\n' : ' ')
  return c.join('')
}
C.h.lf = function () {
  if (void 0 !== C.h.lf.fm) return C.h.lf.fm
  if (!g.getComputedStyle) return !1
  var a = document.createElement('p'),
    b = 'none',
    c = {
      webkitTransform: '-webkit-transform',
      OTransform: '-o-transform',
      msTransform: '-ms-transform',
      MozTransform: '-moz-transform',
      transform: 'transform'
    }
  document.body.insertBefore(a, null)
  for (var e in c)
    if (void 0 !== a.style[e]) {
      a.style[e] = 'translate3d(1px,1px,1px)'
      b = g.getComputedStyle(a)
      if (!b) return document.body.removeChild(a), !1
      b = b.getPropertyValue(c[e])
    }
  document.body.removeChild(a)
  C.h.lf.fm = 'none' !== b
  return C.h.lf.fm
}
C.h.hg = function (a, b) {
  var c = b.nextSibling
  b = b.parentNode
  if (!b) throw Error('Reference node has no parent.')
  c ? b.insertBefore(a, c) : b.appendChild(a)
}
C.h.ds = function (a) {
  if ('object' != typeof document)
    throw Error('Blockly.utils.runAfterPageLoad() requires browser document.')
  if ('complete' == document.readyState) a()
  else
    var b = setInterval(function () {
      'complete' == document.readyState && (clearInterval(b), a())
    }, 10)
}
C.h.lj = function (a, b) {
  a.style.transform = b
  a.style['-webkit-transform'] = b
}
C.h.Mq = function () {
  var a = Fc(),
    b = Uc()
  return { right: a.width + b.x, bottom: a.height + b.y, top: b.y, left: b.x }
}
C.h.startsWith = function (a, b) {
  return 0 == a.lastIndexOf(b, 0)
}
C.h.ei = function (a, b) {
  b = a.indexOf(b)
  if (-1 == b) return !1
  a.splice(b, 1)
  return !0
}
C.h.yj = function (a) {
  return (a * Math.PI) / 180
}
C.h.Ww = function (a) {
  return (180 * a) / Math.PI
}
C.h.containsNode = function (a, b) {
  return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINED_BY)
}
C.h.Nm = function (a, b) {
  var c = Object.create(null),
    e = E(a, !0)
  b && (a = Vc(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a))
  for (a = 0; (b = e[a]); a++) c[b.type] ? c[b.type]++ : (c[b.type] = 1)
  return c
}
C.h.gm = function (a, b, c) {
  if (c < a) {
    var e = c
    c = a
    a = e
  }
  return Math.max(a, Math.min(b, c))
}
// Copyright 2016 Google Inc.  Apache License 2.0
C.i = {}
C.i.Hi = ''
C.i.Pb = !0
C.i.ym = 0
C.i.Nj = 'create'
C.i.Oo = C.i.Nj
C.i.Rl = 'delete'
C.i.Qs = C.i.Rl
C.i.Sg = 'change'
C.i.mx = C.i.Sg
C.i.bi = 'move'
C.i.Po = C.i.bi
C.i.qp = 'var_create'
C.i.rp = 'var_delete'
C.i.sp = 'var_rename'
C.i.Uj = 'ui'
C.i.Lj = 'comment_create'
C.i.So = 'comment_delete'
C.i.Ro = 'comment_change'
C.i.Mj = 'comment_move'
C.i.at = 'finished_loading'
C.i.Rs = [C.i.Oo, C.i.Po, C.i.Lj, C.i.Mj]
C.i.$h = []
C.i.M = function (a) {
  C.i.isEnabled() && (C.i.$h.length || setTimeout(C.i.Zu, 0), C.i.$h.push(a))
}
C.i.Zu = function () {
  for (
    var a = C.i.filter(C.i.$h, !0), b = (C.i.$h.length = 0), c;
    (c = a[b]);
    b++
  ) {
    var e = Wc[c.ob] || null
    if (e) {
      var f = c
      if (f.Pb)
        for (e.Mg.push(f), e.jj.length = 0; e.Mg.length > e.ap && 0 <= e.ap; )
          e.Mg.shift()
      for (var h = 0; (c = e.uc[h]); h++) c(f)
    }
  }
}
C.i.filter = function (a, b) {
  a = a.slice()
  b || a.reverse()
  for (var c = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.xh()) {
      var k = [h.type, h.Jb, h.ob].join(' '),
        l = e[k],
        m = l ? l.event : null
      if (!l) (e[k] = { event: h, index: f }), c.push(h)
      else if (h.type == C.i.bi && l.index == f - 1)
        (m.pg = h.pg), (m.og = h.og), (m.tf = h.tf), (l.index = f)
      else if (h.type == C.i.Sg && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue
      else if (
        h.type != C.i.Uj ||
        'click' != h.element ||
        ('commentOpen' != m.element &&
          'mutatorOpen' != m.element &&
          'warningOpen' != m.element)
      )
        (e[k] = { event: h, index: 1 }), c.push(h)
    }
  a = c.filter(function (n) {
    return !n.xh()
  })
  b || a.reverse()
  for (f = 1; (h = a[f]); f++)
    h.type == C.i.Sg && 'mutation' == h.element && a.unshift(a.splice(f, 1)[0])
  return a
}
C.i.ku = function () {
  for (var a = 0, b; (b = C.i.$h[a]); a++) b.Pb = !1
}
C.i.disable = function () {
  C.i.ym++
}
C.i.enable = function () {
  C.i.ym--
}
C.i.isEnabled = function () {
  return 0 == C.i.ym
}
C.i.tb = function () {
  return C.i.Hi
}
C.i.K = function (a) {
  C.i.Hi = 'boolean' == typeof a ? (a ? C.h.Od() : '') : a
}
C.i.Jq = function (a) {
  var b = []
  a = E(a, !1)
  for (var c = 0, e; (e = a[c]); c++) b[c] = e.id
  return b
}
C.i.Y = function (a) {
  switch (a.type) {
    case C.i.Nj:
      var b = new Xc(null)
      break
    case C.i.Rl:
      b = new Yc(null)
      break
    case C.i.Sg:
      b = new Zc(null, '', '', '', '')
      break
    case C.i.bi:
      b = new $c(null)
      break
    case C.i.qp:
      b = new ad(null)
      break
    case C.i.rp:
      b = new bd(null)
      break
    case C.i.sp:
      b = new cd(null, '')
      break
    case C.i.Uj:
      b = new F(null)
      break
    case C.i.Lj:
      b = new dd(null)
      break
    case C.i.Ro:
      b = new ed(null)
      break
    case C.i.Mj:
      b = new fd(null)
      break
    case C.i.So:
      b = new gd(null)
      break
    default:
      throw Error('Unknown event type.')
  }
  b.Y(a)
  b.ob = (void 0).id
  return b
}
C.i.Nu = function (a) {
  if (a.type == C.i.bi || a.type == C.i.Nj) {
    var b = Wc[a.ob] || null
    if ((a = hd(b, a.Jb)))
      if (a.getParent() && !a.getParent().disabled) {
        b = E(a, !1)
        a = 0
        for (var c; (c = b[a]); a++) c.Cf(!1)
      } else if ((a.P || a.S) && !b.cc()) {
        do a.Cf(!0), (a = Vc(a))
        while (a)
      }
  }
}
// Copyright 2018 Google Inc.  Apache License 2.0
function id() {
  this.ob = void 0
  this.group = C.i.Hi
  this.Pb = C.i.Pb
}
id.prototype.va = function () {
  var a = { type: this.type }
  this.group && (a.group = this.group)
  return a
}
id.prototype.Y = function (a) {
  this.group = a.group
}
id.prototype.xh = function () {
  return !1
}
id.prototype.run = function () {}
function jd(a) {
  a = Wc[a.ob] || null
  if (!a)
    throw Error(
      'Workspace is null. Event must have been generated from real Blockly events.'
    )
  return a
}
C.u = {}
C.u.h = {}
C.u.h.createElement = function (a) {
  return document.createElement(a)
}
C.u.h.createTextNode = function (a) {
  return document.createTextNode(a)
}
C.u.h.Sw = function (a) {
  return new DOMParser().parseFromString(a, 'text/xml')
}
C.u.h.Zb = function (a) {
  return new XMLSerializer().serializeToString(a)
}
function kd(a) {
  kd.o.constructor.call(this)
  this.Jb = a.id
  this.ob = a.m.id
}
w(kd, id)
kd.prototype.va = function () {
  var a = kd.o.va.call(this)
  a.blockId = this.Jb
  return a
}
kd.prototype.Y = function (a) {
  kd.o.va.call(this)
  this.Jb = a.blockId
}
function Zc(a, b, c, e, f) {
  a &&
    (Zc.o.constructor.call(this, a),
    (this.element = b),
    (this.name = c),
    (this.oldValue = e),
    (this.newValue = f))
}
w(Zc, kd)
C.i.zc = Zc
d = Zc.prototype
d.type = C.i.Sg
d.va = function () {
  var a = Zc.o.va.call(this)
  a.element = this.element
  this.name && (a.name = this.name)
  a.newValue = this.newValue
  return a
}
d.Y = function (a) {
  Zc.o.Y.call(this, a)
  this.element = a.element
  this.name = a.name
  this.newValue = a.newValue
}
d.xh = function () {
  return this.oldValue == this.newValue
}
d.run = function (a) {
  var b = hd(jd(this), this.Jb)
  if (b)
    switch (
      (b.xd && b.xd.la(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case 'field':
        ;(b = ld(b, this.name))
          ? (md(b, a), b.setValue(a))
          : console.warn("Can't set non-existent field: " + this.name)
        break
      case 'comment':
        b.kj(a || null)
        break
      case 'collapsed':
        b.xg(a)
        break
      case 'disabled':
        b.Cf(a)
        break
      case 'inline':
        b.Nh(a)
        break
      case 'mutation':
        var c = ''
        b.Ic && (c = (c = b.Ic()) && C.u.Zb(c))
        if (b.ve) {
          a = a || '<mutation></mutation>'
          var e = C.u.Lc('<xml>' + a + '</xml>')
          b.ve(e.firstChild)
        }
        C.i.M(new Zc(b, 'mutation', null, c, a))
        break
      default:
        console.warn('Unknown change type: ' + this.element)
    }
  else console.warn("Can't change non-existent block: " + this.Jb)
}
function Xc(a) {
  a &&
    (Xc.o.constructor.call(this, a),
    (this.xml = a.m.L ? C.u.dm(a) : C.u.Xe(a)),
    (this.fg = C.i.Jq(a)))
}
w(Xc, kd)
C.i.Kj = Xc
Xc.prototype.type = C.i.Nj
Xc.prototype.va = function () {
  var a = Xc.o.va.call(this)
  a.xml = C.u.Zb(this.xml)
  a.ids = this.fg
  return a
}
Xc.prototype.Y = function (a) {
  Xc.o.Y.call(this, a)
  this.xml = C.u.Lc('<xml>' + a.xml + '</xml>').firstChild
  this.fg = a.ids
}
Xc.prototype.run = function (a) {
  var b = jd(this)
  if (a) (a = C.u.h.createElement('xml')), a.appendChild(this.xml), C.u.$e(a, b)
  else {
    a = 0
    for (var c; (c = this.fg[a]); a++) {
      var e = hd(b, c)
      e
        ? e.A(!1, !1)
        : c == this.Jb &&
          console.warn("Can't uncreate non-existent block: " + c)
    }
  }
}
function Yc(a) {
  if (a) {
    if (a.getParent()) throw Error('Connected blocks cannot be deleted.')
    Yc.o.constructor.call(this, a)
    this.Cr = a.m.L ? C.u.dm(a) : C.u.Xe(a)
    this.fg = C.i.Jq(a)
  }
}
w(Yc, kd)
C.i.Qo = Yc
Yc.prototype.type = C.i.Rl
Yc.prototype.va = function () {
  var a = Yc.o.va.call(this)
  a.ids = this.fg
  return a
}
Yc.prototype.Y = function (a) {
  Yc.o.Y.call(this, a)
  this.fg = a.ids
}
Yc.prototype.run = function (a) {
  var b = jd(this)
  if (a) {
    a = 0
    for (var c; (c = this.fg[a]); a++) {
      var e = hd(b, c)
      e
        ? e.A(!1, !1)
        : c == this.Jb && console.warn("Can't delete non-existent block: " + c)
    }
  } else (a = C.u.h.createElement('xml')), a.appendChild(this.Cr), C.u.$e(a, b)
}
function $c(a) {
  a &&
    ($c.o.constructor.call(this, a),
    (a = nd(this)),
    (this.Ar = a.Nr),
    (this.zr = a.Zq),
    (this.Fn = a.Xp))
}
w($c, kd)
C.i.Zh = $c
d = $c.prototype
d.type = C.i.bi
d.va = function () {
  var a = $c.o.va.call(this)
  this.pg && (a.newParentId = this.pg)
  this.og && (a.newInputName = this.og)
  this.tf &&
    (a.newCoordinate = Math.round(this.tf.x) + ',' + Math.round(this.tf.y))
  return a
}
d.Y = function (a) {
  $c.o.Y.call(this, a)
  this.pg = a.newParentId
  this.og = a.newInputName
  a.newCoordinate &&
    ((a = a.newCoordinate.split(',')),
    (this.tf = new B(parseFloat(a[0]), parseFloat(a[1]))))
}
d.Ee = function () {
  var a = nd(this)
  this.pg = a.Nr
  this.og = a.Zq
  this.tf = a.Xp
}
function nd(a) {
  var b = hd(Wc[a.ob] || null, a.Jb)
  a = {}
  var c = b.getParent()
  if (c) {
    a.Nr = c.id
    a: {
      for (var e = 0, f; (f = c.T[e]); e++)
        if (f.connection && G(f.connection) == b) {
          b = f
          break a
        }
      b = null
    }
    b && (a.Zq = b.name)
  } else a.Xp = b.qa()
  return a
}
d.xh = function () {
  return this.Ar == this.pg && this.zr == this.og && vc(this.Fn, this.tf)
}
d.run = function (a) {
  var b = jd(this),
    c = hd(b, this.Jb)
  if (c) {
    var e = a ? this.pg : this.Ar,
      f = a ? this.og : this.zr
    a = a ? this.tf : this.Fn
    var h = null
    if (e && ((h = hd(b, e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e)
      return
    }
    c.getParent() && od(c)
    if (a) (f = c.qa()), c.moveBy(a.x - f.x, a.y - f.y)
    else {
      c = c.P || c.S
      if (f) {
        if ((b = pd(h, f))) var k = b.connection
      } else c.type == C.Te && (k = h.O)
      k
        ? c.connect(k)
        : console.warn("Can't connect to non-existent input: " + f)
    }
  } else console.warn("Can't move non-existent block: " + this.Jb)
}
C.Ca = {}
C.Ca.Am = 0
C.Ca.qk = null
C.Ca.Pu = function (a) {
  var b = a.m,
    c = a.R()
  b.Cc.play('delete')
  a = qd(b, c)
  c = c.cloneNode(!0)
  c.$w = a.x
  c.ax = a.y
  c.setAttribute('transform', 'translate(' + a.x + ',' + a.y + ')')
  H(b).appendChild(c)
  c.yp = c.getBBox()
  C.Ca.xq(c, b.s, new Date(), b.scale)
}
C.Ca.xq = function (a, b, c, e) {
  var f = (new Date() - c) / 150
  1 < f
    ? C.h.removeNode(a)
    : (a.setAttribute(
        'transform',
        'translate(' +
          (a.$w + (((b ? -1 : 1) * a.yp.width * e) / 2) * f) +
          ',' +
          (a.ax + a.yp.height * e * f) +
          ') scale(' +
          (1 - f) * e +
          ')'
      ),
      setTimeout(C.Ca.xq, 10, a, b, c, e))
}
C.Ca.tu = function (a) {
  var b = a.m,
    c = b.scale
  b.Cc.play('click')
  if (!(1 > c)) {
    var e = qd(b, a.R())
    a.P
      ? ((e.x += (a.s ? 3 : -3) * c), (e.y += 13 * c))
      : a.S && ((e.x += (a.s ? -23 : 23) * c), (e.y += 3 * c))
    a = C.h.B(
      'circle',
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: 'none',
        stroke: '#888',
        'stroke-width': 10
      },
      H(b)
    )
    C.Ca.Tp(a, new Date(), c)
  }
}
C.Ca.Tp = function (a, b, c) {
  var e = (new Date() - b) / 150
  1 < e
    ? C.h.removeNode(a)
    : (a.setAttribute('r', 25 * e * c),
      (a.style.opacity = 1 - e),
      (C.Ca.Am = setTimeout(C.Ca.Tp, 10, a, b, c)))
}
C.Ca.Ou = function (a) {
  a.m.Cc.play('disconnect')
  if (!(1 > a.m.scale)) {
    var b = a.Mb().height
    b = (Math.atan(10 / b) / Math.PI) * 180
    a.s || (b *= -1)
    C.Ca.wq(a.R(), b, new Date())
  }
}
C.Ca.wq = function (a, b, c) {
  var e = (new Date() - c) / 200
  1 < e
    ? (a.Dg = '')
    : ((a.Dg =
        'skewX(' + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * b) + ')'),
      (C.Ca.qk = a),
      (C.Ca.Am = setTimeout(C.Ca.wq, 10, a, b, c)))
  a.setAttribute('transform', a.Me + a.Dg)
}
C.Ca.Bm = function () {
  if (C.Ca.qk) {
    clearTimeout(C.Ca.Am)
    var a = C.Ca.qk
    a.Dg = ''
    a.setAttribute('transform', a.Me)
    C.Ca.qk = null
  }
}
// Copyright 2019 Google Inc.  Apache License 2.0
function rd(a) {
  this.ob = a.id
  this.group = C.i.Hi
  this.Pb = !1
}
w(rd, id)
rd.prototype.type = C.i.at
rd.prototype.va = function () {
  var a = { type: this.type }
  this.group && (a.group = this.group)
  this.ob && (a.workspaceId = this.ob)
  return a
}
rd.prototype.Y = function (a) {
  this.ob = a.workspaceId
  this.group = a.group
}
function sd(a) {
  sd.o.constructor.call(this)
  this.Jf = a.ga()
  this.ob = a.m.id
}
w(sd, id)
sd.prototype.va = function () {
  var a = sd.o.va.call(this)
  a.varId = this.Jf
  return a
}
sd.prototype.Y = function (a) {
  sd.o.va.call(this)
  this.Jf = a.varId
}
function ad(a) {
  a && (ad.o.constructor.call(this, a), (this.Og = a.type), (this.Ng = a.name))
}
w(ad, sd)
ad.prototype.type = C.i.qp
ad.prototype.va = function () {
  var a = ad.o.va.call(this)
  a.varType = this.Og
  a.varName = this.Ng
  return a
}
ad.prototype.Y = function (a) {
  ad.o.Y.call(this, a)
  this.Og = a.varType
  this.Ng = a.varName
}
ad.prototype.run = function (a) {
  var b = jd(this)
  a ? b.fd(this.Ng, this.Og, this.Jf) : b.Sf(this.Jf)
}
function bd(a) {
  a && (bd.o.constructor.call(this, a), (this.Og = a.type), (this.Ng = a.name))
}
w(bd, sd)
bd.prototype.type = C.i.rp
bd.prototype.va = function () {
  var a = bd.o.va.call(this)
  a.varType = this.Og
  a.varName = this.Ng
  return a
}
bd.prototype.Y = function (a) {
  bd.o.Y.call(this, a)
  this.Og = a.varType
  this.Ng = a.varName
}
bd.prototype.run = function (a) {
  var b = jd(this)
  a ? b.Sf(this.Jf) : b.fd(this.Ng, this.Og, this.Jf)
}
function cd(a, b) {
  a && (cd.o.constructor.call(this, a), (this.Hn = a.name), (this.En = b))
}
w(cd, sd)
cd.prototype.type = C.i.sp
cd.prototype.va = function () {
  var a = cd.o.va.call(this)
  a.oldName = this.Hn
  a.newName = this.En
  return a
}
cd.prototype.Y = function (a) {
  cd.o.Y.call(this, a)
  this.Hn = a.oldName
  this.En = a.newName
}
cd.prototype.run = function (a) {
  var b = jd(this)
  a ? b.vg(this.Jf, this.En) : b.vg(this.Jf, this.Hn)
}
C.u.Ll = function (a, b) {
  var c = C.u.h.createElement('xml'),
    e = C.u.gx(C.I.vp(a))
  e.hasChildNodes() && c.appendChild(e)
  var f = td(a, !0)
  e = 0
  for (var h; (h = f[e]); e++) c.appendChild(h.zj(b))
  a = ud(a, !0)
  for (e = 0; (f = a[e]); e++) c.appendChild(C.u.dm(f, b))
  return c
}
C.u.gx = function (a) {
  for (var b = C.u.h.createElement('variables'), c = 0, e; (e = a[c]); c++) {
    var f = C.u.h.createElement('variable')
    f.appendChild(C.u.h.createTextNode(e.name))
    f.setAttribute('type', e.type)
    f.setAttribute('id', e.ga())
    b.appendChild(f)
  }
  return b
}
C.u.dm = function (a, b) {
  var c
  a.m.s && (c = a.m.ac())
  b = C.u.Xe(a, b)
  var e = a.qa()
  b.setAttribute('x', Math.round(a.m.s ? c - e.x : e.x))
  b.setAttribute('y', Math.round(e.y))
  return b
}
C.u.Wu = function (a) {
  null == a.getValue() && (a.gg(), a.getValue())
  var b = a.sd()
  if (!b) throw Error('Tried to serialize a variable field with no variable.')
  var c = C.u.h.createElement('field')
  c.appendChild(C.u.h.createTextNode(b.name))
  c.setAttribute('name', a.name)
  c.setAttribute('id', b.ga())
  c.setAttribute('variabletype', b.type)
  return c
}
C.u.Xu = function (a) {
  var b = !1
  a.name &&
    (a.Ue
      ? (b = !0)
      : a.Lf &&
        (console.warn(
          'Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization.'
        ),
        (b = !0)))
  if (b) {
    if (a.Ih()) return C.u.Wu(a)
    b = C.u.h.createElement('field')
    b.appendChild(C.u.h.createTextNode(a.getValue()))
    b.setAttribute('name', a.name)
    return b
  }
  return null
}
C.u.Mt = function (a, b) {
  for (var c = 0, e; (e = a.T[c]); c++)
    for (var f = 0, h; (h = e.Ia[f]); f++) (h = C.u.Xu(h)) && b.appendChild(h)
}
C.u.Xe = function (a, b) {
  var c = C.u.h.createElement(a.La ? 'shadow' : 'block')
  c.setAttribute('type', a.type)
  b || c.setAttribute('id', a.id)
  if (a.Ic) {
    var e = a.Ic()
    e && (e.hasChildNodes() || e.hasAttributes()) && c.appendChild(e)
  }
  C.u.Mt(a, c)
  var f = a.Ck()
  f &&
    ((e = C.u.h.createElement('comment')),
    e.appendChild(C.u.h.createTextNode(f)),
    'object' == typeof a.Ka &&
      (e.setAttribute('pinned', a.Ka.isVisible()),
      (f = a.Ka.Wf()),
      e.setAttribute('h', f.height),
      e.setAttribute('w', f.width)),
    c.appendChild(e))
  a.data &&
    ((e = C.u.h.createElement('data')),
    e.appendChild(C.u.h.createTextNode(a.data)),
    c.appendChild(e))
  f = 0
  for (var h; (h = a.T[f]); f++) {
    var k,
      l = !0
    if (h.type != C.le) {
      var m = G(h.connection)
      h.type == C.Na
        ? (k = C.u.h.createElement('value'))
        : h.type == C.Da && (k = C.u.h.createElement('statement'))
      e = h.connection.ae
      !e || (m && m.La) || k.appendChild(C.u.Lp(e))
      m && (k.appendChild(C.u.Xe(m, b)), (l = !1))
      k.setAttribute('name', h.name)
      l || c.appendChild(k)
    }
  }
  a.Kv != a.kf && c.setAttribute('inline', a.kf)
  a.isCollapsed() && c.setAttribute('collapsed', !0)
  a.disabled && c.setAttribute('disabled', !0)
  a.Ob() || a.La || c.setAttribute('deletable', !1)
  a.Bb() || a.La || c.setAttribute('movable', !1)
  vd(a) || c.setAttribute('editable', !1)
  if ((f = Vc(a)))
    (k = C.u.h.createElement('next')),
      k.appendChild(C.u.Xe(f, b)),
      c.appendChild(k)
  e = a.O && a.O.ae
  !e || (f && f.La) || k.appendChild(C.u.Lp(e))
  return c
}
C.u.Lp = function (a) {
  for (var b = (a = a.cloneNode(!0)), c; b; )
    if (b.firstChild) b = b.firstChild
    else {
      for (; b && !b.nextSibling; )
        (c = b),
          (b = b.parentNode),
          3 == c.nodeType &&
            '' == c.data.trim() &&
            b.firstChild != c &&
            C.h.removeNode(c)
      b &&
        ((c = b),
        (b = b.nextSibling),
        3 == c.nodeType && '' == c.data.trim() && C.h.removeNode(c))
    }
  return a
}
C.u.Zb = function (a) {
  return C.u.h.Zb(a)
}
C.u.jy = function (a) {
  a = C.u.Zb(a).split('<')
  for (var b = '', c = 1; c < a.length; c++) {
    var e = a[c]
    '/' == e[0] && (b = b.substring(2))
    a[c] = b + '<' + e
    '/' != e[0] && '/>' != e.slice(-2) && (b += '  ')
  }
  a = a.join('\n')
  a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, '$1</$2>')
  return a.replace(/^\n/, '')
}
C.u.Lc = function (a) {
  a = C.u.h.Sw(a)
  if (
    !a ||
    !a.documentElement ||
    'xml' != a.documentElement.nodeName.toLowerCase()
  )
    throw TypeError('Blockly.Xml.textToDom expected an <xml> document.')
  return a.documentElement
}
C.u.by = function (a, b) {
  b.Hb(!1)
  b.clear()
  a = C.u.$e(a, b)
  b.Hb(!0)
  return a
}
C.u.$e = function (a, b) {
  if (a instanceof wd) {
    var c = a
    a = b
    b = c
    console.warn(
      'Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.'
    )
  }
  var e
  b.s && (e = b.ac())
  c = []
  xd()
  var f = a.childNodes.length,
    h = C.i.tb()
  h || C.i.K(!0)
  b.Hb && b.Hb(!1)
  var k = !0
  try {
    for (var l = 0; l < f; l++) {
      var m = a.childNodes[l],
        n = m.nodeName.toLowerCase()
      if ('block' == n || ('shadow' == n && !C.i.Pb)) {
        var p = C.u.fh(m, b)
        c.push(p.id)
        var t = m.hasAttribute('x') ? parseInt(m.getAttribute('x'), 10) : 10,
          r = m.hasAttribute('y') ? parseInt(m.getAttribute('y'), 10) : 10
        isNaN(t) || isNaN(r) || p.moveBy(b.s ? e - t : t, r)
        k = !1
      } else {
        if ('shadow' == n)
          throw TypeError('Shadow block cannot be a top-level block.')
        if ('comment' == n)
          if (b.L) yd(m, b, e)
          else {
            var q = m,
              v = b,
              D = zd(q),
              K = new Ad(v, D.content, D.Pq, D.Ks, D.id),
              R = parseInt(q.getAttribute('x'), 10),
              ab = parseInt(q.getAttribute('y'), 10)
            isNaN(R) || isNaN(ab) || K.moveBy(R, ab)
            Bd(K)
          }
        else if ('variables' == n) {
          if (k) C.u.Tu(m, b)
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            )
          k = !1
        }
      }
    }
  } finally {
    h || C.i.K(!1), Cd()
  }
  b.Hb && b.Hb(!0)
  C.i.M(new rd(b))
  return c
}
C.u.Wx = function (a, b) {
  if (b.hasOwnProperty('scale')) {
    var c = I
    try {
      I = 0
      var e = Dd(b)
    } finally {
      I = c
    }
  }
  a = C.u.$e(a, b)
  if (e && e.height) {
    c = e.y + e.height
    var f = e.x
    var h = Infinity,
      k = Infinity
    for (e = 0; e < a.length; e++) {
      var l = hd(b, a[e]).qa()
      l.y < k && (k = l.y)
      l.x < h && (h = l.x)
    }
    c = c - k + 10
    f -= h
    var m
    b.s && (m = b.ac())
    for (e = 0; e < a.length; e++) hd(b, a[e]).moveBy(b.s ? m - f : f, c)
  }
  return a
}
C.u.fh = function (a, b) {
  if (a instanceof wd) {
    var c = a
    a = b
    b = c
    console.warn(
      'Deprecated call to Blockly.Xml.domToBlock, swap the arguments.'
    )
  }
  C.i.disable()
  c = b.xe()
  try {
    var e = C.u.Dm(a, b),
      f = E(e, !1)
    if (b.L) {
      Ed(e, !0)
      for (var h = f.length - 1; 0 <= h; h--) f[h].Be()
      for (h = f.length - 1; 0 <= h; h--) f[h].$(!1)
      setTimeout(function () {
        e.m && Ed(e, !1)
      }, 1)
      Fd(e)
      Gd(b)
    } else for (h = f.length - 1; 0 <= h; h--) f[h].gg()
  } finally {
    C.i.enable()
  }
  if (C.i.isEnabled()) {
    a = C.I.Hq(b, c)
    for (h = 0; h < a.length; h++) C.i.M(new ad(a[h]))
    C.i.M(new C.i.Kj(e))
  }
  return e
}
C.u.Tu = function (a, b) {
  for (var c = 0, e; (e = a.childNodes[c]); c++)
    if (e.nodeType == Element.ELEMENT_NODE) {
      var f = e.getAttribute('type'),
        h = e.getAttribute('id')
      e = e.textContent
      if (null == f)
        throw Error('Variable with id, ' + h + ' is without a type')
      b.fd(e, f, h)
    }
}
C.u.Dm = function (a, b) {
  var c = null,
    e = a.getAttribute('type')
  if (!e) throw TypeError('Block type unspecified: ' + a.outerHTML)
  var f = a.getAttribute('id')
  c = b.Dn(e, f)
  var h = null
  f = 0
  for (var k; (k = a.childNodes[f]); f++)
    if (3 != k.nodeType) {
      for (var l = (h = null), m = 0, n; (n = k.childNodes[m]); m++)
        1 == n.nodeType &&
          ('block' == n.nodeName.toLowerCase()
            ? (h = n)
            : 'shadow' == n.nodeName.toLowerCase() && (l = n))
      !h && l && (h = l)
      m = k.getAttribute('name')
      switch (k.nodeName.toLowerCase()) {
        case 'mutation':
          c.ve && (c.ve(k), c.Be && c.Be())
          break
        case 'comment':
          c.kj(k.textContent)
          var p = k.getAttribute('pinned')
          p &&
            !c.Gc &&
            setTimeout(function () {
              c.Ka && c.Ka.la && c.Ka.la('true' == p)
            }, 1)
          h = parseInt(k.getAttribute('w'), 10)
          k = parseInt(k.getAttribute('h'), 10)
          !isNaN(h) && !isNaN(k) && c.Ka && c.Ka.la && c.Ka.Bf(h, k)
          break
        case 'data':
          c.data = k.textContent
          break
        case 'title':
        case 'field':
          C.u.Su(c, m, k)
          break
        case 'value':
        case 'statement':
          k = pd(c, m)
          if (!k) {
            console.warn('Ignoring non-existent input ' + m + ' in block ' + e)
            break
          }
          l && (k.connection.ae = l)
          if (h)
            if (((h = C.u.Dm(h, b)), h.P)) k.connection.connect(h.P)
            else if (h.S) k.connection.connect(h.S)
            else
              throw TypeError(
                'Child block does not have output or previous statement.'
              )
          break
        case 'next':
          l && c.O && (c.O.ae = l)
          if (h) {
            if (!c.O) throw TypeError('Next statement does not exist.')
            if (c.O.isConnected())
              throw TypeError('Next statement is already connected.')
            h = C.u.Dm(h, b)
            if (!h.S)
              throw TypeError('Next block does not have previous statement.')
            c.O.connect(h.S)
          }
          break
        default:
          console.warn('Ignoring unknown tag: ' + k.nodeName)
      }
    }
  ;(f = a.getAttribute('inline')) && c.Nh('true' == f)
  ;(f = a.getAttribute('disabled')) && c.Cf('true' == f || 'disabled' == f)
  ;(f = a.getAttribute('deletable')) && c.po('true' == f)
  ;(f = a.getAttribute('movable')) && c.zg('true' == f)
  ;(f = a.getAttribute('editable')) && c.qo('true' == f)
  ;(f = a.getAttribute('collapsed')) && c.xg('true' == f)
  if ('shadow' == a.nodeName.toLowerCase()) {
    a = c.ye(!1)
    for (f = 0; (b = a[f]); f++)
      if (!b.La) throw TypeError('Shadow block not allowed non-shadow child.')
    if (Hd(c).length)
      throw TypeError('Shadow blocks cannot have variable references.')
    c.vo(!0)
  }
  return c
}
C.u.Ru = function (a, b, c, e) {
  var f = b.getAttribute('variabletype') || ''
  "''" == f && (f = '')
  a = C.I.Kq(a, b.id, c, f)
  if (null != f && f !== a.type)
    throw Error(
      "Serialized variable type with id '" +
        a.ga() +
        "' had type " +
        a.type +
        ', and does not match variable field that references it: ' +
        C.u.Zb(b) +
        '.'
    )
  e.setValue(a.ga())
}
C.u.Su = function (a, b, c) {
  var e = ld(a, b)
  e
    ? ((a = a.m),
      (b = c.textContent),
      e.Ih() ? C.u.Ru(a, c, b, e) : e.setValue(b))
    : console.warn('Ignoring non-existent field ' + b + ' in block ' + a.type)
}
C.u.Ku = function (a) {
  for (var b = 0, c; (c = a.childNodes[b]); b++)
    if ('next' == c.nodeName.toLowerCase()) {
      a.removeChild(c)
      break
    }
}
g.Blockly || (g.Blockly = {})
g.Blockly.Xml || (g.Blockly.Xml = {})
g.Blockly.Xml.domToText = C.u.Zb
g.Blockly.Xml.domToWorkspace = C.u.$e
g.Blockly.Xml.textToDom = C.u.Lc
g.Blockly.Xml.workspaceToDom = C.u.Ll
// Copyright 2011 Google Inc.  Apache License 2.0
function Id(a, b) {
  this.v = a
  this.type = b
  a.m.mm &&
    ((this.gd = a.m.mm[b]), (this.jk = a.m.mm[C.Xg[b]]), (this.Rd = !this.gd))
}
d = Id.prototype
d.ta = null
d.oe = null
d.ae = null
d.pb = 0
d.za = 0
d.gf = !1
d.gd = null
d.jk = null
d.Rd = null
d.fk = function (a) {
  var b = this,
    c = b.v,
    e = a.v
  a.isConnected() && a.disconnect()
  if (b.isConnected()) {
    var f = G(b),
      h = b.ae
    b.ae = null
    if (f.La) (h = C.u.Xe(f)), f.A(), (f = null)
    else if (b.type == C.Na) {
      if (!f.P) throw Error('Orphan block does not have an output connection.')
      var k = Jd(e, f)
      k && (f.P.connect(k), (f = null))
    } else if (b.type == C.Da) {
      if (!f.S) throw Error('Orphan block does not have a previous connection.')
      for (k = e; k.O; ) {
        var l = Vc(k)
        if (l && !l.La) k = l
        else {
          Kd(f.S, k.O) && (k.O.connect(f.S), (f = null))
          break
        }
      }
    }
    if (f && (b.disconnect(), C.i.Pb)) {
      var m = C.i.tb()
      setTimeout(function () {
        f.m &&
          !f.getParent() &&
          (C.i.K(m), f.P ? Ld(f.P, b) : f.S && Ld(f.S, b), C.i.K(!1))
      }, C.Jj)
    }
    b.ae = h
  }
  var n
  C.i.isEnabled() && (n = new C.i.Zh(e))
  Md(b, a)
  e.Ag(c)
  n && (n.Ee(), C.i.M(n))
}
d.A = function () {
  if (this.isConnected())
    throw Error('Disconnect connection before disposing of it.')
  this.gf && Nd(this.gd, this)
  this.jk = this.gd = null
}
function Od(a) {
  return a.type == C.Na || a.type == C.Da
}
d.isConnected = function () {
  return !!this.ta
}
function Pd(a, b) {
  if (!b) return 3
  if (Od(a))
    var c = a.v,
      e = b.v
  else (e = a.v), (c = b.v)
  return c && c == e
    ? 1
    : b.type != C.Xg[a.type]
    ? 2
    : c && e && c.m !== e.m
    ? 5
    : Kd(a, b)
    ? c.La && !e.La
      ? 6
      : 0
    : 4
}
d.Sk = function (a) {
  if (a.v.vd || 0 != Pd(this, a)) return !1
  switch (a.type) {
    case C.Te:
      return (
        this.ta || -1 != C.si.indexOf(a)
          ? (a = !1)
          : a.ta
          ? ((a = G(a)), (a = a.vd ? !(a.S && G(a.S)) : !1))
          : (a = !0),
        a
      )
    case C.Se:
      if ((a.isConnected() && !G(a).vd) || this.isConnected()) return !1
      break
    case C.Na:
      if (a.isConnected() && !G(a).Bb() && !G(a).La) return !1
      break
    case C.Da:
      if (a.isConnected() && !this.v.O && !G(a).La && G(a).O) return !1
      break
    default:
      throw Error('Unknown connection type in isConnectionAllowed')
  }
  return -1 != C.si.indexOf(a) ? !1 : !0
}
d.connect = function (a) {
  if (this.ta != a) {
    switch (Pd(this, a)) {
      case 0:
        break
      case 1:
        throw Error('Attempted to connect a block to itself.')
      case 5:
        throw Error('Blocks not on same workspace.')
      case 2:
        throw Error('Attempt to connect incompatible types.')
      case 3:
        throw Error('Target connection is null.')
      case 4:
        throw Error(
          'Connection checks failed. ' +
            (this + ' expected ' + this.oe + ', found ' + a.oe)
        )
      case 6:
        throw Error('Connecting non-shadow to shadow block.')
      default:
        throw Error('Unknown connection failure: this should never happen!')
    }
    var b = C.i.tb()
    b || C.i.K(!0)
    Od(this) ? this.fk(a) : a.fk(this)
    b || C.i.K(!1)
  }
}
function Md(a, b) {
  if (!a || !b) throw Error('Cannot connect null connections.')
  a.ta = b
  b.ta = a
}
function Qd(a, b) {
  for (var c = !1, e = 0; e < a.T.length; e++) {
    var f = a.T[e].connection
    if (f && f.type == C.Na && Kd(b.P, f)) {
      if (c) return null
      c = f
    }
  }
  return c
}
function Jd(a, b) {
  for (var c; (c = Qd(a, b)); ) if (((a = G(c)), !a || a.La)) return c
  return null
}
d.disconnect = function () {
  var a = this.ta
  if (!a) throw Error('Source connection not connected.')
  if (a.ta != this)
    throw Error('Target connection not connected to source connection.')
  if (Od(this)) {
    var b = this.v
    var c = a.v
    a = this
  } else (b = a.v), (c = this.v)
  var e = C.i.tb()
  e || C.i.K(!0)
  this.zm(b, c)
  a.eo()
  e || C.i.K(!1)
}
d.zm = function (a, b) {
  var c
  C.i.isEnabled() && (c = new C.i.Zh(b))
  this.ta = this.ta.ta = null
  b.Ag(null)
  c && (c.Ee(), C.i.M(c))
}
d.eo = function () {
  var a = this.v,
    b = this.ae
  if (a.m && b && C.i.Pb)
    if (((a = C.u.fh(b, a.m)), a.P)) this.connect(a.P)
    else if (a.S) this.connect(a.S)
    else throw Error('Child block does not have output or previous statement.')
}
function G(a) {
  return a.isConnected() ? a.ta.v : null
}
function Kd(a, b) {
  if (!a.oe || !b.oe) return !0
  for (var c = 0; c < a.oe.length; c++)
    if (-1 != b.oe.indexOf(a.oe[c])) return !0
  return !1
}
d.Dr = function () {
  this.isConnected() && !Kd(this, this.ta) && od(Od(this) ? G(this) : this.v)
}
d.Lh = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.oe = a), this.Dr())
    : (this.oe = null)
}
d.xr = function () {
  return []
}
d.toString = function () {
  var a = this.v
  if (a)
    if (a.P == this) var b = 'Output Connection of '
    else if (a.S == this) b = 'Previous Connection of '
    else if (a.O == this) b = 'Next Connection of '
    else {
      b = null
      for (var c = 0, e; (e = a.T[c]); c++)
        if (e.connection == this) {
          b = e
          break
        }
      if (b) b = 'Input "' + b.name + '" connection on '
      else
        return (
          console.warn('Connection not actually connected to sourceBlock_'),
          'Orphan Connection'
        )
    }
  else return 'Orphan Connection'
  c = a.type ? '"' + a.type + '" block' : 'Block'
  a.id && (c += ' (id="' + a.id + '")')
  return b + c
}
function Rd(a, b) {
  Rd.o.constructor.call(this, a, b)
  this.ml = new B(0, 0)
}
w(Rd, Id)
function Sd(a, b) {
  var c = a.pb - b.pb
  a = a.za - b.za
  return Math.sqrt(c * c + a * a)
}
function Ld(a, b) {
  if (!a.v.m.cc()) {
    var c = Td(a.v)
    if (!c.Gc) {
      var e = !1
      if (!c.Bb()) {
        c = Td(b.v)
        if (!c.Bb()) return
        b = a
        e = !0
      }
      var f = C.selected == c
      f || c.Zg()
      var h = b.pb + C.Vb + Math.floor(Math.random() * C.Ql) - a.pb,
        k = b.za + C.Vb + Math.floor(Math.random() * C.Ql) - a.za
      e && (k = -k)
      c.s && (h = b.pb - C.Vb - Math.floor(Math.random() * C.Ql) - a.pb)
      c.moveBy(h, k)
      f || c.ug()
    }
  }
}
d = Rd.prototype
d.moveTo = function (a, b) {
  this.gf && Nd(this.gd, this)
  this.pb = a
  this.za = b
  this.Rd || Ud(this.gd, this)
}
d.moveBy = function (a, b) {
  this.moveTo(this.pb + a, this.za + b)
}
function Vd(a, b) {
  a.moveTo(b.x + a.ml.x, b.y + a.ml.y)
}
function Wd(a, b, c) {
  a.ml.x = b
  a.ml.y = c
}
function Xd(a) {
  var b = a.ta.pb - a.pb,
    c = a.ta.za - a.za
  if (0 != b || 0 != c) {
    a = G(a)
    var e = a.R()
    if (!e) throw Error('block is not rendered.')
    e = C.h.oc(e)
    a.R().setAttribute(
      'transform',
      'translate(' + (e.x - b) + ',' + (e.y - c) + ')'
    )
    Yd(a, -b, -c)
  }
}
d.closest = function (a, b) {
  var c = this.jk
  if (c.kb.length) {
    var e = this.za,
      f = this.pb
    this.pb = f + b.x
    this.za = e + b.y
    var h = Zd(c, this)
    b = null
    for (
      var k = a, l, m = h - 1;
      0 <= m && Math.abs(c.kb[m].za - this.za) <= a;

    )
      (l = c.kb[m]), this.Sk(l, k) && ((b = l), (k = Sd(l, this))), m--
    for (; h < c.kb.length && Math.abs(c.kb[h].za - this.za) <= a; )
      (l = c.kb[h]), this.Sk(l, k) && ((b = l), (k = Sd(l, this))), h++
    this.pb = f
    this.za = e
    a = { connection: b, wl: k }
  } else a = { connection: null, wl: a }
  return a
}
d.Qk = function () {
  var a =
    this.type == C.Na || this.type == C.Se
      ? 'm 0,0 ' + $d + ' v 5'
      : 'm -20,0 h 5 l 6,4 3,0 6,-4 h 5'
  var b = this.v.qa()
  Id.Wq = C.h.B(
    'path',
    {
      class: 'blocklyHighlightedConnectionPath',
      d: a,
      transform:
        'translate(' +
        (this.pb - b.x) +
        ',' +
        (this.za - b.y) +
        ')' +
        (this.v.s ? ' scale(-1 1)' : '')
    },
    this.v.R()
  )
}
function ae(a) {
  be(a, !1)
  var b = []
  if (a.type != C.Na && a.type != C.Da) return b
  if ((a = G(a))) {
    if (a.isCollapsed()) {
      var c = []
      a.P && c.push(a.P)
      a.O && c.push(a.O)
      a.S && c.push(a.S)
    } else c = a.ld(!0)
    for (var e = 0; e < c.length; e++) b.push.apply(b, ae(c[e]))
    b.length || (b[0] = a)
  }
  return b
}
function be(a, b) {
  ;(a.Rd = b) && a.gf ? Nd(a.gd, a) : b || a.gf || Ud(a.gd, a)
}
function ce(a) {
  be(a, !0)
  if (a.ta) {
    a = E(G(a), !1)
    for (var b = 0; b < a.length; b++) {
      for (var c = a[b], e = c.ld(!0), f = 0; f < e.length; f++) be(e[f], !0)
      c = de(c)
      for (f = 0; f < c.length; f++) c[f].la(!1)
    }
  }
}
d.Sk = function (a, b) {
  return Sd(this, a) > b ? !1 : Rd.o.Sk.call(this, a)
}
d.connect = function (a) {
  Rd.o.connect.call(this, a)
  if (this.Rd || a.Rd) {
    a = Od(this) ? this : a
    a.Rd ? ce(a) : ae(a)
    var b = G(a)
    b.R().style.display = a.Rd ? 'none' : 'block'
    b.L = !a.Rd
  }
}
d.disconnect = function () {
  var a = Od(this) ? this : this.ta
  if (this.ta && a.Rd) {
    ae(a)
    var b = G(a)
    b.R().style.display = 'block'
    b.L = !0
    be(a, !0)
  }
  Rd.o.disconnect.call(this)
}
d.zm = function (a, b) {
  Rd.o.zm.call(this, a, b)
  a.L && a.$()
  b.L && (Fd(b), b.$())
}
d.eo = function () {
  var a = this.v,
    b = this.ae
  if (a.m && b && C.i.Pb) {
    Rd.o.eo.call(this)
    b = G(this)
    if (!b)
      throw Error("Couldn't respawn the shadow block that should exist here.")
    b.Be()
    b.$(!1)
    a.L && !this.Rd && a.$()
  }
}
d.xr = function (a) {
  return ee(this.jk, this, a)
}
d.fk = function (a) {
  Rd.o.fk.call(this, a)
  var b = this.v
  a = a.v
  b.L && Fd(b)
  a.L && Fd(a)
  b.L && a.L && (this.type == C.Da || this.type == C.Te ? a.$() : b.$())
}
d.Dr = function () {
  this.isConnected() &&
    !Kd(this, this.ta) &&
    (od(Od(this) ? G(this) : this.v), this.v.kc())
}
// Copyright 2017 Google Inc.  Apache License 2.0
function fe(a) {
  this.Ed = C.selected = a
  this.j = a.m
  this.lg = this.pn = null
  this.hh = ge(this, this.Ed)
  this.Cb = this.Oa = null
  this.ke = !1
  this.Ah = null
  this.an = !1
  this.sh = null
  a = this.Ed.ld(!1)
  var b
  a: {
    for (b = this.Ed.O; b; ) {
      var c = G(b)
      if (!c) break a
      b = c.O
    }
    b = null
  }
  b && b != this.Ed.O && (a.push(b), (this.pn = b), (this.lg = ge(this, b.v)))
  this.bm = a
}
fe.prototype.A = function () {
  this.j = this.Ed = null
  this.bm.length = 0
  this.Cb = this.Oa = null
  C.i.disable()
  try {
    this.hh && (this.hh.A(), (this.hh = null)),
      this.lg && (this.lg.A(), (this.lg = null))
  } finally {
    C.i.enable()
  }
  this.sh = null
}
fe.prototype.update = function (a, b) {
  var c = this.Oa && this.Cb ? C.To : C.Vb
  for (var e = null, f = null, h = 0; h < this.bm.length; h++) {
    var k = this.bm[h],
      l = k.closest(c, a)
    l.connection && ((e = l.connection), (f = k), (c = l.wl))
  }
  e = ((c = { closest: e, local: f, wl: c }), !!c.closest) && b != C.Wo
  if (
    (this.ke = !!b && !this.Ed.getParent() && this.Ed.Ob() && !e) ||
    he(this, c, a)
  ) {
    C.i.disable()
    c.closest
      ? ((a = this.Oa != c.closest),
        (b = this.Cb != c.local),
        this.Oa && this.Cb && (a || b || this.ke) && ie(this))
      : ie(this)
    this.Cb = this.Oa = this.Ah = null
    if (!this.ke && ((a = c.closest), (b = c.local), a))
      if (a == this.Oa || a.v.vd)
        console.log('trying to connect to an insertion marker')
      else {
        this.Oa = a
        this.Cb = b
        a = this.Oa
        b = this.Cb
        if (b.type == C.Se) a = a.isConnected() && !Jd(this.Ed, a.ta.v)
        else {
          a: {
            for (c = 0; (e = b.v.T[c]); c++)
              if (e.connection && e.connection.type == C.Da) {
                c = e.connection
                break a
              }
            c = null
          }
          a = b == c ? 0 : !this.Ed.O && b.type == C.Te && a.isConnected()
        }
        if (a)
          (a = this.Oa),
            (b = this.Cb),
            G(a)
              ? ((this.sh = G(a)), je(G(a), !0))
              : b.type == C.Se && ((this.sh = a.v), a.v.Dv(a, !0)),
            (this.an = !0)
        else {
          c = this.Cb
          a = this.Oa
          b = this.pn && c == this.pn ? this.lg : this.hh
          a: {
            f = c.v
            e = b.ld(!0)
            f = f.ld(!0)
            if (e.length != f.length)
              throw Error('Connection lists did not match in length.')
            for (h = 0; h < f.length; h++)
              if (f[h] == c) {
                c = e[h]
                break a
              }
            c = null
          }
          b.$()
          b.L = !0
          b.R().setAttribute('visibility', 'visible')
          ;(c.type != C.Da && c.type != C.Na) ||
            b.moveBy(a.pb - c.pb, a.za - c.za)
          c.connect(a)
          this.Ah = c
        }
        this.Oa && this.Oa.Qk()
      }
    C.i.enable()
  }
}
function ge(a, b) {
  var c = b.type
  C.i.disable()
  try {
    var e = a.j.Dn(c)
    e.ks(!0)
    if (b.Ic) {
      var f = b.Ic()
      f && e.ve(f)
    }
    for (a = 0; a < b.T.length; a++) {
      var h = b.T[a]
      for (c = 0; c < h.Ia.length; c++) {
        var k = h.Ia[c],
          l = k.getValue(),
          m = k.name,
          n = ld(e, m)
        if (!n) throw Error('Field "' + m + '" not found.')
        n.setValue(l)
      }
    }
    e.Be()
    e.R().setAttribute('visibility', 'hidden')
  } finally {
    C.i.enable()
  }
  return e
}
function he(a, b, c) {
  var e = b.local,
    f = b.closest
  b = b.wl
  if (e && f) {
    if (a.Cb && a.Oa) {
      if (a.Oa == f && a.Cb == e) return !1
      e = a.Cb.pb + c.x - a.Oa.pb
      a = a.Cb.za + c.y - a.Oa.za
      a = Math.sqrt(e * e + a * a)
      return !(f && b > a - C.Vs)
    }
    if (a.Cb || a.Oa)
      console.error(
        'Only one of localConnection_ and closestConnection_ was set.'
      )
    else return !0
  } else return !(!a.Cb || !a.Oa)
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  )
  return !0
}
function ie(a) {
  a.Oa && (C.h.removeNode(Id.Wq), delete Id.Wq)
  if (a.an) {
    var b = a.Oa
    b.type != C.Na || b.isConnected() ? je(a.sh, !1) : a.sh.Dv(b, !1)
    a.sh = null
    a.an = !1
  } else if (a.Ah)
    if (a.Ah) {
      b = a.Ah
      var c = b.v,
        e = c.O,
        f = c.S,
        h = c.P
      h = b.type == C.Na && !(h && h.ta)
      !(b != e || (f && f.ta)) || h
        ? od(G(b), !1)
        : b.type == C.Da && b != e
        ? ((e = b.ta),
          od(e.v, !1),
          (f = f ? f.ta : null),
          od(c, !0),
          f && f.connect(e))
        : od(c, !0)
      if (b.ta)
        throw 'markerConnection_ still connected at the end of disconnectInsertionMarker'
      a.Ah = null
      c.R().setAttribute('visibility', 'hidden')
    } else console.log('No insertion marker connection to disconnect')
}
fe.prototype.lh = function () {
  var a = []
  this.hh && a.push(this.hh)
  this.lg && a.push(this.lg)
  return a
}
function ke(a, b) {
  this.Qa = a
  this.j = b
  this.Ld = new fe(this.Qa)
  this.Rf = null
  this.ke = !1
  this.ee = this.Qa.qa()
  b = []
  a = E(a, !1)
  for (var c = 0, e; (e = a[c]); c++) {
    e = de(e)
    for (var f = 0; f < e.length; f++) b.push({ location: e[f].uh, icon: e[f] })
  }
  this.tk = b
}
ke.prototype.A = function () {
  this.wb = this.j = this.Qa = null
  this.tk.length = 0
  this.Ld && (this.Ld.A(), (this.Ld = null))
}
function le(a, b, c) {
  c = a.Fh(c)
  a.Qa.il(yc(a.ee, c))
  for (var e = 0; e < a.tk.length; e++) {
    var f = a.tk[e]
    me(f.icon, yc(f.location, c))
  }
  a.Rf = ne(a.j, b)
  a.Ld.update(c, a.Rf)
  a.ke = a.Ld.ke
  b = a.j.Tb
  a.ke
    ? (a.Qa.mj(!0), a.Rf == C.Sl && b && oe(b, !0))
    : (a.Qa.mj(!1), b && oe(b, !1))
}
function pe(a, b, c) {
  le(a, b, c)
  a.tk = []
  Cd()
  C.Ca.Bm()
  b = a.Fh(c)
  a.Qa.wr(yc(a.ee, b))
  c = a.j.Tb
  a.ke
    ? (c && setTimeout(c.close.bind(c), 100), a.wi(), a.Qa.A(!1, !0))
    : c && c.close()
  a.ke ||
    (Yd(a.Qa, b.x, b.y),
    a.Qa.Df(!1),
    a.wi(),
    a.Ld.Oa
      ? ((b = a.Ld),
        b.Oa &&
          (C.i.disable(),
          ie(b),
          C.i.enable(),
          b.Cb.connect(b.Oa),
          b.Ed.L && (C.Ca.tu((Od(b.Cb) ? b.Oa : b.Cb).v), qe(Td(b.Ed)))))
      : a.Qa.$(),
    re(a.Qa))
  a.j.Hb(!0)
  ;(b = a.j.V) &&
    C.h.bb(b.gc, a.Qa.Ob() ? 'blocklyToolboxDelete' : 'blocklyToolboxGrab')
  C.i.K(!1)
}
ke.prototype.wi = function () {
  var a = new C.i.Zh(this.Qa)
  a.Fn = this.ee
  a.Ee()
  C.i.M(a)
}
ke.prototype.Fh = function (a) {
  a = new B(a.x / this.j.scale, a.y / this.j.scale)
  this.j.wh && (a = a.scale(1 / this.j.options.Jc.scale))
  return a
}
ke.prototype.lh = function () {
  return this.Ld && this.Ld.lh ? this.Ld.lh() : []
}
var se = !y || 9 <= Number(qc),
  te = !y || 9 <= Number(qc),
  ue = y && !pc('9'),
  ve =
    'ontouchstart' in g ||
    !!(
      g.document &&
      document.documentElement &&
      'ontouchstart' in document.documentElement
    ) ||
    !(
      !g.navigator ||
      (!g.navigator.maxTouchPoints && !g.navigator.msMaxTouchPoints)
    ),
  we = 'PointerEvent' in g,
  xe =
    'MSPointerEvent' in g && !(!g.navigator || !g.navigator.msPointerEnabled),
  ye = (function () {
    if (!g.addEventListener || !Object.defineProperty) return !1
    var a = !1,
      b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0
        }
      })
    try {
      g.addEventListener('test', na, b), g.removeEventListener('test', na, b)
    } catch (c) {}
    return a
  })()
C.Touch = {}
C.Touch.Aj = null
C.Touch.Hd = {}
g.PointerEvent
  ? (C.Touch.Hd = {
      mousedown: ['pointerdown'],
      mouseenter: ['pointerenter'],
      mouseleave: ['pointerleave'],
      mousemove: ['pointermove'],
      mouseout: ['pointerout'],
      mouseover: ['pointerover'],
      mouseup: ['pointerup', 'pointercancel'],
      touchend: ['pointerup'],
      touchcancel: ['pointercancel']
    })
  : ve &&
    (C.Touch.Hd = {
      mousedown: ['touchstart'],
      mousemove: ['touchmove'],
      mouseup: ['touchend', 'touchcancel']
    })
C.al = 0
C.Vv = function (a, b) {
  C.sf()
  ;(a.changedTouches && 1 != a.changedTouches.length) ||
    (C.al = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY))
      b && ze(b, a)
    }, C.ot))
}
C.sf = function () {
  C.al && (clearTimeout(C.al), (C.al = 0))
}
C.Touch.re = function () {
  C.Touch.Aj = null
}
C.Touch.zo = function (a) {
  return !C.Touch.Mv(a) || C.Touch.iu(a)
}
C.Touch.Lk = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : 'mouse'
}
C.Touch.iu = function (a) {
  var b = C.Touch.Lk(a)
  return void 0 !== C.Touch.Aj && null !== C.Touch.Aj
    ? C.Touch.Aj == b
    : 'mousedown' == a.type || 'touchstart' == a.type || 'pointerdown' == a.type
    ? ((C.Touch.Aj = b), !0)
    : !1
}
C.Touch.Gw = function (a) {
  if (C.h.startsWith(a.type, 'touch')) {
    var b = a.changedTouches[0]
    a.clientX = b.clientX
    a.clientY = b.clientY
  }
}
C.Touch.Mv = function (a) {
  return (
    C.h.startsWith(a.type, 'touch') ||
    C.h.startsWith(a.type, 'mouse') ||
    C.h.startsWith(a.type, 'pointer')
  )
}
C.Touch.Yk = function (a) {
  return C.h.startsWith(a.type, 'touch') || C.h.startsWith(a.type, 'pointer')
}
C.Touch.Kw = function (a) {
  var b = []
  if (a.changedTouches)
    for (var c = 0; c < a.changedTouches.length; c++)
      b[c] = {
        type: a.type,
        changedTouches: [a.changedTouches[c]],
        target: a.target,
        stopPropagation: function () {
          a.stopPropagation()
        },
        preventDefault: function () {
          a.preventDefault()
        }
      }
  else b.push(a)
  return b
}
function Ae(a) {
  this.pa = {}
  this.m = a
}
d = Ae.prototype
d.clear = function () {
  this.pa = Object(null)
}
d.Zn = function (a, b) {
  var c = this.sd(b, a.type),
    e = Be(this.m, !1)
  C.i.K(!0)
  try {
    if (c && c.ga() != a.ga()) {
      var f = a.type
      b != c.name && Ce(c, b, e)
      for (b = 0; b < e.length; b++)
        for (
          var h = void 0, k = e[b], l = a.ga(), m = c.ga(), n = 0;
          (h = k.T[n]);
          n++
        )
          for (var p = 0, t; (t = h.Ia[p]); p++)
            t.Ih() && l == t.getValue() && t.setValue(m)
      C.i.M(new bd(a))
      this.pa[f].splice(this.Fi(f).indexOf(a), 1)
    } else Ce(a, b, e)
  } finally {
    C.i.K(!1)
  }
}
d.vg = function (a, b) {
  var c = this.Ae(a)
  if (!c) throw Error("Tried to rename a variable that didn't exist. ID: " + a)
  this.Zn(c, b)
}
function Ce(a, b, c) {
  C.i.M(new cd(a, b))
  a.name = b
  for (b = 0; b < c.length; b++)
    for (var e, f = c[b], h = a, k = 0; (e = f.T[k]); k++)
      for (var l = 0, m; (m = e.Ia[l]); l++)
        m.Ih() && h.ga() == m.getValue() && m.cb(h.name)
}
d.fd = function (a, b, c) {
  var e = this.sd(a, b)
  if (e) {
    if (c && e.ga() != c)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.ga() +
          '" which conflicts with the passed in id, "' +
          c +
          '".'
      )
    return e
  }
  if (c && this.Ae(c))
    throw Error('Variable id, "' + c + '", is already in use.')
  c = c || C.h.Od()
  b = b || ''
  e = new De(this.m, a, b, c)
  this.pa[b] ? this.pa[b].push(e) : (this.pa[b] = [e])
  return e
}
d.Sf = function (a) {
  var b = this.Ae(a)
  if (b) {
    var c = b.name,
      e = this.Um(a)
    a = 0
    for (var f; (f = e[a]); a++)
      if (
        'procedures_defnoreturn' == f.type ||
        'procedures_defreturn' == f.type
      ) {
        a = Ee(f, 'NAME')
        c = C.g.CANNOT_DELETE_VARIABLE_PROCEDURE.replace('%1', c).replace(
          '%2',
          a
        )
        C.alert(c)
        return
      }
    var h = this
    1 < e.length
      ? ((c = C.g.DELETE_VARIABLE_CONFIRMATION.replace(
          '%1',
          String(e.length)
        ).replace('%2', c)),
        C.confirm(c, function (k) {
          k && h.mk(b, e)
        }))
      : h.mk(b, e)
  } else console.warn("Can't delete non-existent variable: " + a)
}
d.mk = function (a, b) {
  var c = C.i.tb()
  c || C.i.K(!0)
  try {
    for (var e = 0; e < b.length; e++) b[e].A(!0, !1)
    var f = this.pa[a.type]
    b = 0
    for (var h; (h = f[b]); b++)
      if (h.ga() == a.ga()) {
        f.splice(b, 1)
        C.i.M(new bd(a))
        break
      }
  } finally {
    c || C.i.K(!1)
  }
}
d.sd = function (a, b) {
  if ((b = this.pa[b || '']))
    for (var c = 0, e; (e = b[c]); c++)
      if (e.name.toLowerCase() == a.toLowerCase()) return e
  return null
}
d.Ae = function (a) {
  for (var b = Object.keys(this.pa), c = 0; c < b.length; c++)
    for (var e = b[c], f = 0, h; (h = this.pa[e][f]); f++)
      if (h.ga() == a) return h
  return null
}
d.Fi = function (a) {
  return (a = this.pa[a || '']) ? a.slice() : []
}
d.Tm = function () {
  for (var a = Object.keys(this.pa), b = !1, c = 0; c < a.length; c++)
    '' == a[c] && (b = !0)
  b || a.push('')
  return a
}
d.xe = function () {
  for (var a = [], b = Object.keys(this.pa), c = 0; c < b.length; c++)
    a = a.concat(this.pa[b[c]])
  return a
}
d.Um = function (a) {
  for (var b = [], c = Be(this.m, !1), e = 0; e < c.length; e++) {
    var f = Hd(c[e])
    if (f) for (var h = 0; h < f.length; h++) f[h].ga() == a && b.push(c[e])
  }
  return b
}
function Fe(a) {
  this.Jd = a.id
  this.ob = a.m.id
  this.group = C.i.Hi
  this.Pb = C.i.Pb
}
w(Fe, id)
Fe.prototype.va = function () {
  var a = { type: this.type }
  this.group && (a.group = this.group)
  this.Jd && (a.commentId = this.Jd)
  return a
}
Fe.prototype.Y = function (a) {
  this.Jd = a.commentId
  this.group = a.group
}
function ed(a, b, c) {
  a && (ed.o.constructor.call(this, a), (this.yr = b), (this.kl = c))
}
w(ed, Fe)
d = ed.prototype
d.type = C.i.Ro
d.va = function () {
  var a = ed.o.va.call(this)
  a.newContents = this.kl
  return a
}
d.Y = function (a) {
  ed.o.Y.call(this, a)
  this.kl = a.newValue
}
d.xh = function () {
  return this.yr == this.kl
}
d.run = function (a) {
  var b = Ge(jd(this), this.Jd)
  b
    ? b.$d(a ? this.kl : this.yr)
    : console.warn("Can't change non-existent comment: " + this.Jd)
}
function dd(a) {
  a && (dd.o.constructor.call(this, a), (this.xml = a.zj()))
}
w(dd, Fe)
dd.prototype.type = C.i.Lj
dd.prototype.va = function () {
  var a = dd.o.va.call(this)
  a.xml = C.u.Zb(this.xml)
  return a
}
dd.prototype.Y = function (a) {
  dd.o.Y.call(this, a)
  this.xml = C.u.Lc('<xml>' + a.xml + '</xml>').firstChild
}
dd.prototype.run = function (a) {
  C.i.Uo(this, a)
}
C.i.Uo = function (a, b) {
  var c = jd(a)
  b
    ? ((b = C.u.h.createElement('xml')), b.appendChild(a.xml), C.u.$e(b, c))
    : (c = Ge(c, a.Jd))
    ? c.A(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Jd)
}
function gd(a) {
  a && (gd.o.constructor.call(this, a), (this.xml = a.zj()))
}
w(gd, Fe)
gd.prototype.type = C.i.So
gd.prototype.va = function () {
  return gd.o.va.call(this)
}
gd.prototype.Y = function (a) {
  gd.o.Y.call(this, a)
}
gd.prototype.run = function (a) {
  C.i.Uo(this, !a)
}
function fd(a) {
  a &&
    (fd.o.constructor.call(this, a),
    (this.lm = a),
    (this.Gn = a.$c.clone()),
    (this.ng = null))
}
w(fd, Fe)
d = fd.prototype
d.Ee = function () {
  if (!this.lm)
    throw Error(
      'Tried to record the new position of a comment on the same event twice.'
    )
  this.ng = this.lm.$c.clone()
  this.lm = null
}
d.type = C.i.Mj
d.va = function () {
  var a = fd.o.va.call(this)
  this.ng &&
    (a.newCoordinate = Math.round(this.ng.x) + ',' + Math.round(this.ng.y))
  return a
}
d.Y = function (a) {
  fd.o.Y.call(this, a)
  a.newCoordinate &&
    ((a = a.newCoordinate.split(',')),
    (this.ng = new B(parseFloat(a[0]), parseFloat(a[1]))))
}
d.xh = function () {
  return vc(this.Gn, this.ng)
}
d.run = function (a) {
  var b = Ge(jd(this), this.Jd)
  if (b) {
    a = a ? this.ng : this.Gn
    var c = b.$c.clone()
    b.moveBy(a.x - c.x, a.y - c.y)
  } else console.warn("Can't move non-existent comment: " + this.Jd)
}
function Ad(a, b, c, e, f) {
  this.id = f && !Ge(a, f) ? f : C.h.Od()
  a.Rh.push(this)
  a.dk[this.id] &&
    console.warn(
      'Overriding an existing comment on this workspace, with id "' +
        this.id +
        '"'
    )
  a.dk[this.id] = this
  this.$c = new B(0, 0)
  this.ka = c
  this.W = e
  this.m = a
  this.s = a.s
  this.ej = this.ri = !0
  this.Ec = b
  this.ln = !0
  Bd(this)
}
d = Ad.prototype
d.A = function () {
  if (this.m) {
    C.i.isEnabled() && C.i.M(new gd(this))
    var a = this.m
    if (!C.h.ei(a.Rh, this))
      throw Error(
        "Comment not present in workspace's list of top-most comments."
      )
    delete a.dk[this.id]
    this.m = null
  }
}
d.kh = function () {
  return this.ka
}
d.ac = function () {
  return this.W
}
d.moveBy = function (a, b) {
  var c = new fd(this)
  this.$c.translate(a, b)
  c.Ee()
  C.i.M(c)
}
d.Ob = function () {
  return this.ri && !(this.m && this.m.options.readOnly)
}
d.po = function (a) {
  this.ri = a
}
d.Bb = function () {
  return this.ej && !(this.m && this.m.options.readOnly)
}
d.zg = function (a) {
  this.ej = a
}
d.bf = function () {
  return this.Ec
}
d.$d = function (a) {
  this.Ec != a && (C.i.M(new ed(this, this.Ec, a)), (this.Ec = a))
}
d.zj = function (a) {
  a = He(this, a)
  a.setAttribute('x', Math.round(this.$c.x))
  a.setAttribute('y', Math.round(this.$c.y))
  a.setAttribute('h', this.ka)
  a.setAttribute('w', this.W)
  return a
}
function He(a, b) {
  var c = C.u.h.createElement('comment')
  b || c.setAttribute('id', a.id)
  c.textContent = a.bf()
  return c
}
function Bd(a) {
  if (C.i.isEnabled()) {
    var b = C.i.tb()
    b || C.i.K(!0)
    try {
      C.i.M(new dd(a))
    } finally {
      b || C.i.K(!1)
    }
  }
}
function zd(a) {
  var b = a.getAttribute('h'),
    c = a.getAttribute('w')
  return {
    id: a.getAttribute('id'),
    Pq: b ? parseInt(b, 10) : 100,
    Ks: c ? parseInt(c, 10) : 100,
    x: parseInt(a.getAttribute('x'), 10),
    y: parseInt(a.getAttribute('y'), 10),
    content: a.textContent
  }
}
function wd(a) {
  this.id = C.h.Od()
  Wc[this.id] = this
  this.options = a || {}
  this.s = !!this.options.s
  this.Fc = !!this.options.Fc
  this.aa = this.options.aa
  this.Qh = []
  this.Rh = []
  this.dk = Object.create(null)
  this.uc = []
  this.Mg = []
  this.jj = []
  this.cm = Object.create(null)
  this.Ne = Object.create(null)
  this.pa = new Ae(this)
  this.Hh = null
}
d = wd.prototype
d.L = !1
d.kn = !1
d.ap = 1024
d.A = function () {
  this.uc.length = 0
  this.clear()
  delete Wc[this.id]
}
d.ce = function (a, b) {
  a = a.qa()
  b = b.qa()
  return (
    a.y + wd.prototype.ce.offset * a.x - (b.y + wd.prototype.ce.offset * b.x)
  )
}
function Ie(a, b) {
  if (!C.h.ei(a.Qh, b))
    throw Error("Block not present in workspace's list of top-most blocks.")
}
function ud(a, b) {
  var c = [].concat(a.Qh)
  b &&
    1 < c.length &&
    ((a.ce.offset = Math.sin(C.h.yj(3))),
    a.s && (a.ce.offset *= -1),
    c.sort(a.ce))
  return c
}
function td(a, b) {
  var c = [].concat(a.Rh)
  b &&
    1 < c.length &&
    ((a.ce.offset = Math.sin(C.h.yj(3))),
    a.s && (a.ce.offset *= -1),
    c.sort(a.ce))
  return c
}
function Be(a, b) {
  if (b) {
    a = ud(a, !0)
    b = []
    for (var c = 0; c < a.length; c++) b.push.apply(b, E(a[c], !0))
  } else
    for (b = ud(a, !1), c = 0; c < b.length; c++) b.push.apply(b, b[c].ye(!1))
  return b.filter(function (e) {
    return !e.vd
  })
}
d.clear = function () {
  this.kn = !0
  try {
    var a = C.i.tb()
    for (a || C.i.K(!0); this.Qh.length; ) this.Qh[0].A()
    for (; this.Rh.length; ) this.Rh[this.Rh.length - 1].A()
    a || C.i.K(!1)
    this.pa.clear()
    this.Hh && this.Hh.clear()
  } finally {
    this.kn = !1
  }
}
d.vg = function (a, b) {
  this.pa.vg(a, b)
}
d.fd = function (a, b, c) {
  return this.pa.fd(a, b, c)
}
d.Um = function (a) {
  return this.pa.Um(a)
}
d.Sf = function (a) {
  this.pa.Sf(a)
}
d.mk = function (a, b) {
  this.pa.mk(a, b)
}
d.sd = function (a, b) {
  return this.pa.sd(a, b)
}
d.Ae = function (a) {
  return this.pa.Ae(a)
}
d.Fi = function (a) {
  return this.pa.Fi(a)
}
d.Tm = function () {
  return this.pa.Tm()
}
d.xe = function () {
  return this.pa.xe()
}
d.ac = function () {
  return 0
}
d.Dn = function (a, b) {
  return new Je(this, a, b)
}
function Ke(a) {
  return isNaN(a.options.yn) ? Infinity : a.options.yn - Be(a).length
}
function Le(a, b) {
  if (!Me(a)) return !0
  var c = 0,
    e
  for (e in b) {
    var f = b[e]
    if (a.options.zn) {
      var h = a.options.zn[e] || Infinity
      var k = a.Ne[e] ? a.Ne[e].slice(0) : []
      h -= k.length
    } else h = Infinity
    if (f > h) return !1
    c += b[e]
  }
  return c > Ke(a) ? !1 : !0
}
function Me(a) {
  return Infinity != a.options.yn || !!a.options.zn
}
d.Jo = function (a) {
  var b = a ? this.jj : this.Mg,
    c = a ? this.Mg : this.jj,
    e = b.pop()
  if (e) {
    for (var f = [e]; b.length && e.group && e.group == b[b.length - 1].group; )
      f.push(b.pop())
    for (b = 0; (e = f[b]); b++) c.push(e)
    f = C.i.filter(f, a)
    C.i.Pb = !1
    try {
      for (b = 0; (e = f[b]); b++) e.run(a)
    } finally {
      C.i.Pb = !0
    }
  }
}
d.Kp = function () {
  this.Mg.length = 0
  this.jj.length = 0
  C.i.ku()
}
d.jc = function (a) {
  this.uc.push(a)
  return a
}
d.yf = function (a) {
  C.h.ei(this.uc, a)
}
function hd(a, b) {
  return a.cm[b] || null
}
function Ge(a, b) {
  return a.dk[b] || null
}
var Wc = Object.create(null)
function Ne() {
  var a = [],
    b
  for (b in Wc) a.push(Wc[b])
  return a
}
wd.prototype.clear = wd.prototype.clear
wd.prototype.clearUndo = wd.prototype.Kp
wd.prototype.addChangeListener = wd.prototype.jc
wd.prototype.removeChangeListener = wd.prototype.yf
function Oe(a, b, c, e, f, h) {
  this.j = a
  this.Ec = b
  this.os = c
  c = Pe
  this.j.s && (c = -c)
  this.Qt = C.h.yj(c)
  a.Xc.appendChild(this.ni(b, !(!f || !h)))
  this.ib = e
  this.wg && Qe(this)
  ;(f && h) ||
    ((b = this.Ec.getBBox()), (f = b.width + 2 * Re), (h = b.height + 2 * Re))
  this.Bf(f, h)
  Qe(this)
  Se(this)
  this.wg = !0
  a.options.readOnly ||
    (C.J(this.gi, 'mousedown', this, this.Yt),
    this.vb && C.J(this.vb, 'mousedown', this, this.ao))
}
var Re = 6,
  Pe = 20,
  Te = null,
  Ue = null
d = Oe.prototype
d.$n = null
function Ve() {
  Te && (C.wa(Te), (Te = null))
  Ue && (C.wa(Ue), (Ue = null))
}
function We() {
  C.Touch.re()
  Ve()
}
d.wg = !1
d.ib = null
d.Fe = 0
d.xf = 0
d.W = 0
d.ka = 0
d.Xj = !0
d.ni = function (a, b) {
  this.Qc = C.h.B('g', {}, null)
  var c = { filter: 'url(#' + this.j.options.Cq + ')' }
  ;-1 != Za.indexOf('JavaFX') && (c = {})
  c = C.h.B('g', c, this.Qc)
  this.em = C.h.B('path', {}, c)
  this.gi = C.h.B(
    'rect',
    { class: 'blocklyDraggable', x: 0, y: 0, rx: Re, ry: Re },
    c
  )
  b
    ? ((this.vb = C.h.B(
        'g',
        { class: this.j.s ? 'blocklyResizeSW' : 'blocklyResizeSE' },
        this.Qc
      )),
      (b = 2 * Re),
      C.h.B(
        'polygon',
        { points: '0,x x,x x,0'.replace(/x/g, b.toString()) },
        this.vb
      ),
      C.h.B(
        'line',
        {
          class: 'blocklyResizeLine',
          x1: b / 3,
          y1: b - 1,
          x2: b - 1,
          y2: b / 3
        },
        this.vb
      ),
      C.h.B(
        'line',
        {
          class: 'blocklyResizeLine',
          x1: (2 * b) / 3,
          y1: b - 1,
          x2: b - 1,
          y2: (2 * b) / 3
        },
        this.vb
      ))
    : (this.vb = null)
  this.Qc.appendChild(a)
  return this.Qc
}
d.R = function () {
  return this.Qc
}
function Xe(a, b) {
  a.Qc.dataset && (a.Qc.dataset.Jb = b)
}
d.Yt = function (a) {
  var b = this.j.Qd(a)
  b && Ye(b, a, this)
}
d.Ph = function () {}
d.Ob = function () {
  return !1
}
d.ao = function (a) {
  Ze(this)
  Ve()
  C.h.pf(a) ||
    (this.j.El(a, new B(this.j.s ? -this.W : this.W, this.ka)),
    (Te = C.J(document, 'mouseup', this, We)),
    (Ue = C.J(document, 'mousemove', this, this.bo)),
    C.Nb())
  a.stopPropagation()
}
d.bo = function (a) {
  this.Xj = !1
  a = $e(this.j, a)
  this.Bf(this.j.s ? -a.x : a.x, a.y)
  this.j.s && Qe(this)
}
function Ze(a) {
  var b = a.Qc.parentNode
  return b.lastChild !== a.Qc ? (b.appendChild(a.Qc), !0) : !1
}
function af(a, b, c) {
  var e = a.j.s ? a.ib.x - b.x - a.W : b.x + a.ib.x
  b = b.y + a.ib.y
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.W, c.Va + c.xa) - Math.max(e, c.Va)) *
        (Math.min(b + a.ka, c.gb + c.Ba) - Math.max(b, c.gb))) /
        (a.W * a.ka)
    )
  )
}
function Qe(a) {
  var b = a.ib.x
  b = a.j.s ? b - (a.Fe + a.W) : b + a.Fe
  a.moveTo(b, a.xf + a.ib.y)
}
d.moveTo = function (a, b) {
  this.Qc.setAttribute('transform', 'translate(' + a + ',' + b + ')')
}
d.Wf = function () {
  return { width: this.W, height: this.ka }
}
d.Bf = function (a, b) {
  var c = 2 * Re
  a = Math.max(a, c + 45)
  b = Math.max(b, c + 20)
  this.W = a
  this.ka = b
  this.gi.setAttribute('width', a)
  this.gi.setAttribute('height', b)
  this.vb &&
    (this.j.s
      ? this.vb.setAttribute(
          'transform',
          'translate(' + 2 * Re + ',' + (b - c) + ') scale(-1 1)'
        )
      : this.vb.setAttribute(
          'transform',
          'translate(' + (a - c) + ',' + (b - c) + ')'
        ))
  if (this.wg) {
    if (this.Xj) {
      a = this.j.ab()
      a.Va /= this.j.scale
      a.xa /= this.j.scale
      a.gb /= this.j.scale
      a.Ba /= this.j.scale
      b = -this.W / 4
      if (!(this.W > a.xa)) {
        if (this.j.s) {
          c = this.ib.x - b
          var e = c - this.W
          var f = a.Va + a.xa,
            h = a.Va + J / this.j.scale
        } else
          (e = b + this.ib.x),
            (c = e + this.W),
            (h = a.Va),
            (f = a.Va + a.xa - J / this.j.scale)
        this.j.s
          ? e < h
            ? (b = -(h - this.ib.x + this.W))
            : c > f && (b = -(f - this.ib.x))
          : e < h
          ? (b = h - this.ib.x)
          : c > f && (b = f - this.ib.x - this.W)
      }
      e = b
      b = -this.ka / 4
      if (!(this.ka > a.Ba)) {
        c = this.ib.y + b
        f = c + this.ka
        h = a.gb
        var k = a.gb + a.Ba - J / this.j.scale,
          l = this.ib.y
        c < h ? (b = h - l) : f > k && (b = k - l - this.ka)
      }
      h = b
      f = this.os.getBBox()
      b = { x: e, y: -this.ka - 25 }
      c = { x: -this.W - 30, y: h }
      h = { x: f.width, y: h }
      k = { x: e, y: f.height }
      e = f.width < f.height ? h : k
      f = f.width < f.height ? k : h
      h = af(this, b, a)
      k = af(this, c, a)
      l = af(this, e, a)
      a = Math.max(h, k, l, af(this, f, a))
      h == a
        ? ((this.Fe = b.x), (this.xf = b.y))
        : k == a
        ? ((this.Fe = c.x), (this.xf = c.y))
        : l == a
        ? ((this.Fe = e.x), (this.xf = e.y))
        : ((this.Fe = f.x), (this.xf = f.y))
    }
    Qe(this)
    Se(this)
  }
  this.$n && this.$n()
}
function Se(a) {
  var b = [],
    c = a.W / 2,
    e = a.ka / 2,
    f = -a.Fe,
    h = -a.xf
  if (c == f && e == h) b.push('M ' + c + ',' + e)
  else {
    h -= e
    f -= c
    a.j.s && (f *= -1)
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k)
    0 > h && (l = 2 * Math.PI - l)
    var m = l + Math.PI / 2
    m > 2 * Math.PI && (m -= 2 * Math.PI)
    var n = Math.sin(m),
      p = Math.cos(m),
      t = a.Wf()
    m = (t.width + t.height) / 5
    m = Math.min(m, t.width, t.height) / 4
    t = 1 - 8 / k
    f = c + t * f
    h = e + t * h
    t = c + m * p
    var r = e + m * n
    c -= m * p
    e -= m * n
    n = l + a.Qt
    n > 2 * Math.PI && (n -= 2 * Math.PI)
    l = (Math.sin(n) * k) / 4
    k = (Math.cos(n) * k) / 4
    b.push('M' + t + ',' + r)
    b.push(
      'C' + (t + k) + ',' + (r + l) + ' ' + f + ',' + h + ' ' + f + ',' + h
    )
    b.push(
      'C' + f + ',' + h + ' ' + (c + k) + ',' + (e + l) + ' ' + c + ',' + e
    )
  }
  b.push('z')
  a.em.setAttribute('d', b.join(' '))
}
d.Bd = function (a) {
  this.gi.setAttribute('fill', a)
  this.em.setAttribute('fill', a)
}
d.A = function () {
  Ve()
  C.h.removeNode(this.Qc)
  this.os = this.Ec = this.j = this.vb = this.gi = this.em = this.Qc = null
}
d.il = function (a, b) {
  a ? a.Le(b.x, b.y) : this.moveTo(b.x, b.y)
  this.Fe = this.j.s ? this.ib.x - b.x - this.W : b.x - this.ib.x
  this.xf = b.y - this.ib.y
  Se(this)
}
d.qa = function () {
  return new B(this.ib.x + this.Fe, this.ib.y + this.xf)
}
d.hs = function (a) {
  this.Xj = a
}
function bf(a, b, c, e, f) {
  this.w = C.h.B('g', { class: 'blocklyComment' }, null)
  this.w.Me = ''
  this.wj = C.h.B('rect', {
    class: 'blocklyCommentRect',
    x: 0,
    y: 0,
    rx: 3,
    ry: 3
  })
  this.w.appendChild(this.wj)
  this.wg = !1
  this.je = C.h.lf() && !!a.jb
  bf.o.constructor.call(this, a, b, c, e, f)
  this.$()
}
w(bf, Ad)
d = bf.prototype
d.A = function () {
  if (this.m) {
    if (C.selected == this) {
      this.If()
      var a = this.m
      a.lb && a.lb.cancel()
    }
    C.i.isEnabled() && C.i.M(new gd(this))
    C.h.removeNode(this.w)
    this.Hg = this.Gf = this.Rc = this.fb = this.wj = this.w = null
    this.ue = !0
    C.i.disable()
    bf.o.A.call(this)
    C.i.enable()
  }
}
d.Be = function () {
  if (!this.m.L) throw TypeError('Workspace is headless.')
  this.m.options.readOnly ||
    this.Gm ||
    (C.J(this.Gf, 'mousedown', this, this.Or),
    C.J(this.Hg, 'mousedown', this, this.Or))
  this.Gm = !0
  cf(this)
  this.R().parentNode || this.m.Xc.appendChild(this.R())
}
d.Or = function (a) {
  var b = this.m.Qd(a)
  b && Ye(b, a, this)
}
d.Ph = function (a) {
  if (!this.m.options.readOnly) {
    var b = []
    this.Ob() && this.Bb() && (b.push(C.ca.nu(this)), b.push(C.ca.mu(this)))
    C.ca.show(a, b, this.s)
  }
}
d.select = function () {
  if (C.selected != this) {
    var a = null
    if (C.selected) {
      a = C.selected.id
      C.i.disable()
      try {
        C.selected.If()
      } finally {
        C.i.enable()
      }
    }
    a = new F(null, 'selected', a, this.id)
    a.ob = this.m.id
    C.i.M(a)
    C.selected = this
    this.Zg()
  }
}
d.If = function () {
  if (C.selected == this) {
    var a = new F(null, 'selected', this.id, null)
    a.ob = this.m.id
    C.i.M(a)
    C.selected = null
    this.ug()
    df(this)
  }
}
d.Zg = function () {
  C.h.Ha(this.w, 'blocklySelected')
  this.so()
}
d.ug = function () {
  C.h.bb(this.w, 'blocklySelected')
  df(this)
}
d.qa = function () {
  var a = 0,
    b = 0,
    c = this.je ? this.m.jb.tb() : null,
    e = this.R()
  if (e) {
    do {
      var f = C.h.oc(e)
      a += f.x
      b += f.y
      this.je &&
        this.m.jb.hd.firstChild == e &&
        ((f = this.m.jb.Kk()), (a += f.x), (b += f.y))
      e = e.parentNode
    } while (e && e != this.m.Xc && e != c)
  }
  return (this.$c = new B(a, b))
}
d.moveBy = function (a, b) {
  var c = new fd(this),
    e = this.qa()
  this.translate(e.x + a, e.y + b)
  this.$c = new B(e.x + a, e.y + b)
  c.Ee()
  C.i.M(c)
  Gd(this.m)
}
d.translate = function (a, b) {
  this.$c = new B(a, b)
  this.R().setAttribute('transform', 'translate(' + a + ',' + b + ')')
}
d.jl = function () {
  if (this.je) {
    var a = this.qa()
    C.h.removeAttribute(this.R(), 'transform')
    this.m.jb.Le(a.x, a.y)
    ef(this.m.jb, this.R())
  }
}
d.wr = function (a) {
  this.je && (this.translate(a.x, a.y), this.m.jb.ji(this.m.Ea))
}
d.il = function (a, b) {
  a
    ? a.Le(b.x, b.y)
    : ((this.w.Me = 'translate(' + b.x + ',' + b.y + ')'),
      this.w.setAttribute('transform', this.w.Me + this.w.Dg))
}
d.moveTo = function (a, b) {
  this.translate(a, b)
}
d.yk = function () {
  var a = this.qa(),
    b = this.Mb()
  if (this.s) {
    var c = new B(a.x - b.width, a.y)
    a = new B(a.x, a.y + b.height)
  } else (c = new B(a.x, a.y)), (a = new B(a.x + b.width, a.y + b.height))
  return { xc: c, Pc: a }
}
function cf(a) {
  a.Bb() ? C.h.Ha(a.w, 'blocklyDraggable') : C.h.bb(a.w, 'blocklyDraggable')
}
d.zg = function (a) {
  bf.o.zg.call(this, a)
  cf(this)
}
d.Df = function (a) {
  a
    ? ((a = this.R()),
      (a.Me = ''),
      (a.Dg = ''),
      C.h.Ha(this.w, 'blocklyDragging'))
    : C.h.bb(this.w, 'blocklyDragging')
}
d.R = function () {
  return this.w
}
d.bf = function () {
  return this.fb ? this.fb.value : this.Ec
}
d.$d = function (a) {
  bf.o.$d.call(this, a)
  this.fb && (this.fb.value = a)
}
d.mj = function (a) {
  a
    ? C.h.Ha(this.w, 'blocklyDraggingDelete')
    : C.h.bb(this.w, 'blocklyDraggingDelete')
}
d.hs = function () {}
function yd(a, b, c) {
  C.i.disable()
  try {
    var e = zd(a),
      f = new bf(b, e.content, e.Pq, e.Ks, e.id)
    b.L && (f.Be(), f.$(!1))
    if (!isNaN(e.x) && !isNaN(e.y))
      if (b.s) {
        var h = c || b.ac()
        f.moveBy(h - e.x, e.y)
      } else f.moveBy(e.x, e.y)
  } finally {
    C.i.enable()
  }
  Bd(f)
  return f
}
d.zj = function (a) {
  var b
  this.m.s && (b = this.m.ac())
  a = He(this, a)
  var c = this.qa()
  a.setAttribute('x', Math.round(this.m.s ? b - c.x : c.x))
  a.setAttribute('y', Math.round(c.y))
  a.setAttribute('h', this.kh())
  a.setAttribute('w', this.ac())
  return a
}
function ff(a, b) {
  this.sb = a
  this.j = b
  this.Rf = null
  this.Ml = !1
  this.ee = this.sb.qa()
  this.Uf = C.h.lf() && b.jb ? b.jb : null
}
ff.prototype.A = function () {
  this.Uf = this.j = this.sb = null
}
function gf(a, b, c) {
  c = a.Fh(c)
  a.sb.il(a.Uf, yc(a.ee, c))
  a.sb.Ob() &&
    ((a.Rf = ne(a.j, b)),
    (a.Ml = a.Rf != C.Vo),
    (b = a.j.Tb),
    a.Ml
      ? (a.sb.mj(!0), a.Rf == C.Sl && b && oe(b, !0))
      : (a.sb.mj(!1), b && oe(b, !1)))
}
function hf(a, b, c) {
  gf(a, b, c)
  b = a.Fh(c)
  b = yc(a.ee, b)
  a.sb.moveTo(b.x, b.y)
  b = a.j.Tb
  a.Ml
    ? (b && setTimeout(b.close.bind(b), 100), a.wi(), a.sb.A(!1, !0))
    : b && b.close()
  a.Ml || (a.Uf && a.Uf.ji(a.j.Xc), a.sb.Df && a.sb.Df(!1), a.wi())
  a.j.Hb(!0)
  a.j.V &&
    C.h.bb(a.j.V.gc, a.sb.Ob() ? 'blocklyToolboxDelete' : 'blocklyToolboxGrab')
  C.i.K(!1)
}
ff.prototype.wi = function () {
  if (this.sb.ln) {
    var a = new fd(this.sb)
    a.Gn = this.ee
    a.Ee()
    C.i.M(a)
  }
}
ff.prototype.Fh = function (a) {
  a = new B(a.x / this.j.scale, a.y / this.j.scale)
  this.j.wh && (a = a.scale(1 / this.j.options.Jc.scale))
  return a
}
ff.prototype.jl = function () {
  this.sb.moveTo(0, 0)
  this.Uf.Le(this.ee.x, this.ee.y)
  ef(this.Uf, this.sb.R())
}
C.ey = {}
C.$o = 40
C.kp = 125
C.Xs = 5
C.bt = 10
C.Vb = 28
C.To = C.Vb
C.Vs = 8
C.mt = '#000000'
C.Jj = 250
C.Ql = 10
C.Ss = 30
C.ot = 750
C.Bt = 100
C.Ys = !0
C.ht = 0.45
C.jt = 0.65
C.hc = { width: 96, height: 124, url: 'sprites.png' }
C.Ac = 'http://www.w3.org/2000/svg'
C.Re = 'http://www.w3.org/1999/xhtml'
C.Na = 1
C.Se = 2
C.Da = 3
C.Te = 4
C.le = 5
C.Yh = -1
C.Gj = 0
C.Hj = 1
C.px = 0
C.qx = 1
C.nx = 1
C.ox = 2
C.Xg = []
C.Xg[C.Na] = C.Se
C.Xg[C.Se] = C.Na
C.Xg[C.Da] = C.Te
C.Xg[C.Te] = C.Da
C.ic = 0
C.Ve = 1
C.Bc = 2
C.Gd = 3
C.Vo = null
C.Sl = 1
C.Wo = 2
C.pp = 'VARIABLE'
C.Et = 'VARIABLE_DYNAMIC'
C.lp = 'PROCEDURE'
C.mp = 'RENAME_VARIABLE_ID'
C.Xo = 'DELETE_VARIABLE_ID'
function F(a, b, c, e) {
  F.o.constructor.call(this)
  this.Jb = a ? a.id : null
  this.ob = a ? a.m.id : null
  this.element = b
  this.oldValue = c
  this.newValue = e
  this.Pb = !1
}
w(F, id)
F.prototype.type = C.i.Uj
F.prototype.va = function () {
  var a = F.o.va.call(this)
  a.element = this.element
  void 0 !== this.newValue && (a.newValue = this.newValue)
  this.Jb && (a.blockId = this.Jb)
  return a
}
F.prototype.Y = function (a) {
  F.o.Y.call(this, a)
  this.element = a.element
  this.newValue = a.newValue
  this.Jb = a.blockId
}
function jf(a) {
  this.j = a
  this.Nw = new B(a.scrollX, a.scrollY)
}
jf.prototype.A = function () {
  this.j = null
}
jf.prototype.El = function () {
  C.selected && C.selected.If()
  kf(this.j)
}
jf.prototype.Tf = function (a) {
  a = yc(this.Nw, a)
  this.j.scroll(a.x, a.y)
}
function lf(a) {
  lf.o.constructor.call(this, a.Mk())
  this.Gb = a.Gb
  this.Sd = a.Sd
}
w(lf, jf)
C.C = {}
C.C.visible = !1
C.C.ah = !1
C.C.nt = 50
C.C.vr = 0
C.C.qj = 0
C.C.rn = 0
C.C.sn = 0
C.C.U = null
C.C.rl = null
C.C.bp = 0
C.C.cp = 10
C.C.xt = 10
C.C.gt = 750
C.C.Tl = 5
C.C.ba = null
C.C.X = function () {
  C.C.ba ||
    ((C.C.ba = document.createElement('div')),
    (C.C.ba.className = 'blocklyTooltipDiv'),
    document.body.appendChild(C.C.ba))
}
C.C.Of = function (a) {
  C.$a(a, 'mouseover', null, C.C.tw)
  C.$a(a, 'mouseout', null, C.C.sw)
  a.addEventListener('mousemove', C.C.rw, !1)
}
C.C.tw = function (a) {
  if (!C.C.ah) {
    for (a = a.target; 'string' != typeof a.Mc && 'function' != typeof a.Mc; )
      a = a.Mc
    C.C.U != a && (C.C.Aa(), (C.C.rl = null), (C.C.U = a))
    clearTimeout(C.C.vr)
  }
}
C.C.sw = function () {
  C.C.ah ||
    ((C.C.vr = setTimeout(function () {
      C.C.U = null
      C.C.rl = null
      C.C.Aa()
    }, 1)),
    clearTimeout(C.C.qj))
}
C.C.rw = function (a) {
  if (C.C.U && C.C.U.Mc && !C.H.isVisible() && !C.C.ah)
    if (C.C.visible) {
      var b = C.C.rn - a.pageX
      a = C.C.sn - a.pageY
      Math.sqrt(b * b + a * a) > C.C.xt && C.C.Aa()
    } else
      C.C.rl != C.C.U &&
        (clearTimeout(C.C.qj),
        (C.C.rn = a.pageX),
        (C.C.sn = a.pageY),
        (C.C.qj = setTimeout(C.C.Iw, C.C.gt)))
}
C.C.Aa = function () {
  C.C.visible && ((C.C.visible = !1), C.C.ba && (C.C.ba.style.display = 'none'))
  C.C.qj && clearTimeout(C.C.qj)
}
C.C.block = function () {
  C.C.Aa()
  C.C.ah = !0
}
C.C.bx = function () {
  C.C.ah = !1
}
C.C.Iw = function () {
  if (!C.C.ah && ((C.C.rl = C.C.U), C.C.ba)) {
    C.C.ba.innerHTML = ''
    for (var a = C.C.U.Mc; 'function' == typeof a; ) a = a()
    a = C.h.Ns(a, C.C.nt)
    a = a.split('\n')
    for (var b = 0; b < a.length; b++) {
      var c = document.createElement('div')
      c.appendChild(document.createTextNode(a[b]))
      C.C.ba.appendChild(c)
    }
    a = C.C.U.s
    b = Fc()
    C.C.ba.style.direction = a ? 'rtl' : 'ltr'
    C.C.ba.style.display = 'block'
    C.C.visible = !0
    c = C.C.rn
    c = a ? c - (C.C.bp + C.C.ba.offsetWidth) : c + C.C.bp
    var e = C.C.sn + C.C.cp
    e + C.C.ba.offsetHeight > b.height + window.scrollY &&
      (e -= C.C.ba.offsetHeight + 2 * C.C.cp)
    a
      ? (c = Math.max(C.C.Tl - window.scrollX, c))
      : c + C.C.ba.offsetWidth > b.width + window.scrollX - 2 * C.C.Tl &&
        (c = b.width - C.C.ba.offsetWidth - 2 * C.C.Tl)
    C.C.ba.style.top = e + 'px'
    C.C.ba.style.left = c + 'px'
  }
}
function mf(a, b) {
  this.wb = this.Sb = this.Fg = this.Gg = this.Vc = this.mc = this.rr = null
  this.wu = b
  this.Si = this.kg = this.Ti = this.$f = !1
  this.wd = a
  this.F = this.Kf = this.qd = this.ne = this.ql = this.ol = null
  this.Uk = this.ag = this.Cp = !1
  this.Uq = !C.Ys
}
d = mf.prototype
d.A = function () {
  C.Touch.re()
  C.C.bx()
  this.wu.lb = null
  this.ol && C.wa(this.ol)
  this.ql && C.wa(this.ql)
  this.F = this.wb = this.Sb = this.Fg = this.Gg = null
  this.qd && (this.qd.A(), (this.qd = null))
  this.Kf && (this.Kf.A(), (this.Kf = null))
  this.ne && (this.ne.A(), (this.ne = null))
}
function nf(a, b) {
  a.mc = xc(new B(b.clientX, b.clientY), a.rr)
  if (a.$f) var c = !1
  else
    (c = a.mc),
      (a.$f = Math.sqrt(c.x * c.x + c.y * c.y) > (a.F ? C.bt : C.Xs)),
      (c = a.$f)
  if (c) {
    if (a.Cp)
      throw Error('updateIsDragging_ should only be called once per gesture.')
    a.Cp = !0
    if (a.Vc) {
      a.Si = !0
      a.ne = new ff(a.Vc, a.wb)
      c = a.ne
      C.i.tb() || C.i.K(!0)
      c.j.Hb(!1)
      c.sb.hs(!1)
      c.Uf && c.jl()
      c.sb.Df && c.sb.Df(!0)
      var e = c.j.V
      e &&
        C.h.Ha(e.gc, c.sb.Ob() ? 'blocklyToolboxDelete' : 'blocklyToolboxGrab')
      gf(a.ne, a.wd, a.mc)
      c = !0
    } else c = !1
    if (!c) {
      if (a.Sb)
        if (
          (a.F
            ? (a.F.cr(a.Sb)
                ? !of(a.F) || a.F.dr(a.mc)
                  ? ((a.wb = a.F.ma),
                    pf(a.wb),
                    C.i.tb() || C.i.K(!0),
                    (a.Fg = null),
                    (a.Sb = qf(a.F, a.Sb)),
                    a.Sb.select(),
                    (c = !0))
                  : (c = !1)
                : (c = !1),
              (a.kg = c))
            : a.Sb.Bb() && (a.kg = !0),
          a.kg)
        ) {
          a.qd = new ke(a.Sb, a.wb)
          c = a.qd
          e = a.mc
          var f = a.Uq
          C.i.tb() || C.i.K(!0)
          c.j.wh && qe(c.Qa)
          xd()
          c.j.Hb(!1)
          C.Ca.Bm()
          if (c.Qa.getParent() || (f && c.Qa.O && G(c.Qa.O)))
            od(c.Qa, f),
              (e = c.Fh(e)),
              (e = yc(c.ee, e)),
              c.Qa.translate(e.x, e.y),
              C.Ca.Ou(c.Qa)
          c.Qa.Df(!0)
          c.Qa.jl()
          ;(e = c.j.V) &&
            C.h.Ha(
              e.gc,
              c.Qa.Ob() ? 'blocklyToolboxDelete' : 'blocklyToolboxGrab'
            )
          le(a.qd, a.wd, a.mc)
          c = !0
        } else c = !1
      else c = !1
      if ((c = !c))
        if (a.F) c = of(a.F)
        else if ((c = a.wb)) (c = a.wb), (c = c.options.Db && c.options.Db.Tf)
      c && ((a.Kf = a.F ? new lf(a.F) : new jf(a.wb)), (a.Ti = !0), a.Kf.El())
    }
    C.sf()
  }
  a.wd = b
}
d.Cm = function (a) {
  C.h.Xk(a)
    ? this.cancel()
    : ((this.ag = !0),
      C.Ca.Bm(),
      pf(this.wb),
      this.wb.wh && this.wb.resize(),
      rf(this.wb),
      (this.wd = a),
      C.Nb(!!this.F),
      C.C.block(),
      this.Sb && this.Sb.select(),
      C.h.pf(a)
        ? ze(this, a)
        : (('touchstart' != a.type.toLowerCase() &&
            'pointerdown' != a.type.toLowerCase()) ||
            'mouse' == a.pointerType ||
            C.Vv(a, this),
          (this.rr = new B(a.clientX, a.clientY)),
          (this.Uq = a.altKey || a.ctrlKey || a.metaKey),
          this.Of(a)))
}
d.Of = function (a) {
  this.ol = C.J(document, 'mousemove', null, this.Ki.bind(this))
  this.ql = C.J(document, 'mouseup', null, this.Ok.bind(this))
  a.preventDefault()
  a.stopPropagation()
}
d.Ki = function (a) {
  nf(this, a)
  this.Ti
    ? this.Kf.Tf(this.mc)
    : this.kg
    ? le(this.qd, this.wd, this.mc)
    : this.Si && gf(this.ne, this.wd, this.mc)
  a.preventDefault()
  a.stopPropagation()
}
d.Ok = function (a) {
  nf(this, a)
  C.sf()
  if (this.Uk) console.log('Trying to end a gesture recursively.')
  else {
    this.Uk = !0
    if (this.Si) hf(this.ne, a, this.mc)
    else if (this.kg) pe(this.qd, a, this.mc)
    else if (this.Ti) {
      var b = this.Kf
      b.Tf(this.mc)
      sf(b.j)
    } else
      this.Vc && !this.$f
        ? (this.Vc.so && this.Vc.so(), this.Vc.select && this.Vc.select())
        : tf(this)
        ? (this.Gg.Ff(), uf(this))
        : !this.Fg || this.$f || tf(this)
        ? this.Fg ||
          this.Vc ||
          this.Gg ||
          this.$f ||
          (C.selected && C.selected.If())
        : (this.F && this.F.$g
            ? this.Sb.disabled ||
              (C.i.tb() || C.i.K(!0), re(qf(this.F, this.Sb)))
            : C.i.M(new F(this.Fg, 'click', void 0, void 0)),
          uf(this),
          C.i.K(!1))
    a.preventDefault()
    a.stopPropagation()
    this.A()
  }
}
d.cancel = function () {
  if (!this.Uk) {
    C.sf()
    if (this.Si) hf(this.ne, this.wd, this.mc)
    else if (this.kg) pe(this.qd, this.wd, this.mc)
    else if (this.Ti) {
      var a = this.Kf
      a.Tf(this.mc)
      sf(a.j)
    }
    this.A()
  }
}
function ze(a, b) {
  a.Sb
    ? (uf(a), C.Nb(a.F), a.Sb.Ph(b))
    : a.Vc
    ? a.Vc.Ph(b)
    : a.wb && !a.F && (C.Nb(), a.wb.Ph(b))
  b.preventDefault()
  b.stopPropagation()
  a.A()
}
function vf(a, b, c) {
  if (a.ag)
    throw Error(
      'Tried to call gesture.handleWsStart, but the gesture had already been started.'
    )
  a.wb || (a.wb = c)
  a.wd = b
  a.Cm(b)
}
function wf(a, b, c) {
  if (a.ag)
    throw Error(
      'Tried to call gesture.handleFlyoutStart, but the gesture had already been started.'
    )
  a.F || (a.F = c)
  vf(a, b, c.Mk())
}
function Ye(a, b, c) {
  if (a.ag)
    throw Error(
      'Tried to call gesture.handleBubbleStart, but the gesture had already been started.'
    )
  a.Vc || (a.Vc = c)
  a.wd = b
}
function uf(a) {
  a.Sb && !a.F && qe(a.Sb)
}
function xf(a, b) {
  a.Fg || a.Vc || ((a.Fg = b), b.Gc && b != Td(b) ? yf(a, Td(b)) : yf(a, b))
}
function yf(a, b) {
  b.La ? yf(a, b.getParent()) : (a.Sb = b)
}
function tf(a) {
  if (a.Gg) {
    var b = a.Gg
    b = b.Lf && !!b.v && vd(b.v)
  } else b = !1
  return b && !a.$f && (!a.F || !a.F.$g)
}
d.cc = function () {
  return this.Ti || this.kg || this.Si
}
d.lh = function () {
  return this.qd ? this.qd.lh() : []
}
function zf() {
  for (var a = Ne(), b = 0, c; (c = a[b]); b++) if (c.lb) return !0
  return !1
}
function Af(a, b, c, e) {
  this.top = a
  this.right = b
  this.bottom = c
  this.left = e
}
d = Af.prototype
d.ac = function () {
  return this.right - this.left
}
d.kh = function () {
  return this.bottom - this.top
}
d.clone = function () {
  return new Af(this.top, this.right, this.bottom, this.left)
}
d.contains = function (a) {
  return this && a
    ? a instanceof Af
      ? a.left >= this.left &&
        a.right <= this.right &&
        a.top >= this.top &&
        a.bottom <= this.bottom
      : a.x >= this.left &&
        a.x <= this.right &&
        a.y >= this.top &&
        a.y <= this.bottom
    : !1
}
d.expand = function (a, b, c, e) {
  ta(a)
    ? ((this.top -= a.top),
      (this.right += a.right),
      (this.bottom += a.bottom),
      (this.left -= a.left))
    : ((this.top -= a),
      (this.right += Number(b)),
      (this.bottom += Number(c)),
      (this.left -= Number(e)))
  return this
}
d.ceil = function () {
  this.top = Math.ceil(this.top)
  this.right = Math.ceil(this.right)
  this.bottom = Math.ceil(this.bottom)
  this.left = Math.ceil(this.left)
  return this
}
d.floor = function () {
  this.top = Math.floor(this.top)
  this.right = Math.floor(this.right)
  this.bottom = Math.floor(this.bottom)
  this.left = Math.floor(this.left)
  return this
}
d.round = function () {
  this.top = Math.round(this.top)
  this.right = Math.round(this.right)
  this.bottom = Math.round(this.bottom)
  this.left = Math.round(this.left)
  return this
}
d.translate = function (a, b) {
  a instanceof B
    ? ((this.left += a.x),
      (this.right += a.x),
      (this.top += a.y),
      (this.bottom += a.y))
    : ((this.left += a),
      (this.right += a),
      la(b) && ((this.top += b), (this.bottom += b)))
  return this
}
d.scale = function (a, b) {
  b = la(b) ? b : a
  this.left *= a
  this.right *= a
  this.top *= b
  this.bottom *= b
  return this
}
function Bf(a, b, c, e) {
  this.left = a
  this.top = b
  this.width = c
  this.height = e
}
d = Bf.prototype
d.clone = function () {
  return new Bf(this.left, this.top, this.width, this.height)
}
d.contains = function (a) {
  return a instanceof B
    ? a.x >= this.left &&
        a.x <= this.left + this.width &&
        a.y >= this.top &&
        a.y <= this.top + this.height
    : this.left <= a.left &&
        this.left + this.width >= a.left + a.width &&
        this.top <= a.top &&
        this.top + this.height >= a.top + a.height
}
d.Di = function () {
  return new zc(this.width, this.height)
}
d.ceil = function () {
  this.left = Math.ceil(this.left)
  this.top = Math.ceil(this.top)
  this.width = Math.ceil(this.width)
  this.height = Math.ceil(this.height)
  return this
}
d.floor = function () {
  this.left = Math.floor(this.left)
  this.top = Math.floor(this.top)
  this.width = Math.floor(this.width)
  this.height = Math.floor(this.height)
  return this
}
d.round = function () {
  this.left = Math.round(this.left)
  this.top = Math.round(this.top)
  this.width = Math.round(this.width)
  this.height = Math.round(this.height)
  return this
}
d.translate = function (a, b) {
  a instanceof B
    ? ((this.left += a.x), (this.top += a.y))
    : ((this.left += a), la(b) && (this.top += b))
  return this
}
d.scale = function (a, b) {
  b = la(b) ? b : a
  this.left *= a
  this.width *= a
  this.top *= b
  this.height *= b
  return this
}
function Cf(a, b) {
  var c = Cc(a)
  return c.defaultView &&
    c.defaultView.getComputedStyle &&
    (a = c.defaultView.getComputedStyle(a, null))
    ? a[b] || a.getPropertyValue(b) || ''
    : ''
}
function Df(a, b) {
  return (
    Cf(a, b) ||
    (a.currentStyle ? a.currentStyle[b] : null) ||
    (a.style && a.style[b])
  )
}
function Uc() {
  var a = document,
    b = a.body
  a = a.documentElement
  return new B(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}
function Ef(a) {
  try {
    var b = a.getBoundingClientRect()
  } catch (c) {
    return { left: 0, top: 0, right: 0, bottom: 0 }
  }
  y &&
    a.ownerDocument.body &&
    ((a = a.ownerDocument),
    (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
    (b.top -= a.documentElement.clientTop + a.body.clientTop))
  return b
}
function Ff(a) {
  var b = Cc(a),
    c = new B(0, 0)
  var e = b ? Cc(b) : document
  e =
    !y || 9 <= Number(qc) || 'CSS1Compat' == Ac(e).Kd.compatMode
      ? e.documentElement
      : e.body
  if (a == e) return c
  a = Ef(a)
  b = Gc(Ac(b).Kd)
  c.x = a.left + b.x
  c.y = a.top + b.y
  return c
}
function Gf(a) {
  'number' == typeof a && (a += 'px')
  return a
}
function Hf(a) {
  var b = If
  if ('none' != Df(a, 'display')) return b(a)
  var c = a.style,
    e = c.display,
    f = c.visibility,
    h = c.position
  c.visibility = 'hidden'
  c.position = 'absolute'
  c.display = 'inline'
  a = b(a)
  c.display = e
  c.position = h
  c.visibility = f
  return a
}
function If(a) {
  var b = a.offsetWidth,
    c = a.offsetHeight,
    e = A && !b && !c
  return (void 0 === b || e) && a.getBoundingClientRect
    ? ((a = Ef(a)), new zc(a.right - a.left, a.bottom - a.top))
    : new zc(b, c)
}
function Jf(a, b) {
  a.style.display = b ? '' : 'none'
}
var Kf = z ? 'MozUserSelect' : A || ec ? 'WebkitUserSelect' : null
function Lf(a, b, c) {
  c = c ? null : a.getElementsByTagName('*')
  if (Kf) {
    if (((b = b ? 'none' : ''), a.style && (a.style[Kf] = b), c)) {
      a = 0
      for (var e; (e = c[a]); a++) e.style && (e.style[Kf] = b)
    }
  } else if (y || dc)
    if (((b = b ? 'on' : ''), a.setAttribute('unselectable', b), c))
      for (a = 0; (e = c[a]); a++) e.setAttribute('unselectable', b)
}
var Mf = { thin: 2, medium: 4, thick: 6 }
function Nf(a, b) {
  if ('none' == (a.currentStyle ? a.currentStyle[b + 'Style'] : null)) return 0
  var c = a.currentStyle ? a.currentStyle[b + 'Width'] : null
  if (c in Mf) a = Mf[c]
  else if (/^\d+px?$/.test(c)) a = parseInt(c, 10)
  else {
    b = a.style.left
    var e = a.runtimeStyle.left
    a.runtimeStyle.left = a.currentStyle.left
    a.style.left = c
    c = a.style.pixelLeft
    a.style.left = b
    a.runtimeStyle.left = e
    a = +c
  }
  return a
}
function Of(a, b) {
  this.eb = new zc(0, 25)
  this.setValue(a)
  this.Kl = b
}
var Pf = {}
function Qf(a, b) {
  if ('string' != typeof a || '' == a.trim())
    throw Error('Invalid field type "' + a + '"')
  if (!b || 'function' != typeof b.Y)
    throw Error('Field "' + b + '" must have a fromJson function')
  Pf[a] = b
}
var Rf = null,
  Sf = 0
d = Of.prototype
d.name = void 0
d.nr = 50
d.oa = ''
d.v = null
d.mn = !0
d.Fa = !0
d.Kl = null
d.im = null
d.Lf = !0
d.Ue = !1
d.wo = function (a) {
  if (this.v) throw Error('Field already bound to a block.')
  this.v = a
}
d.Z = function () {
  this.Ra ||
    ((this.Ra = C.h.B('g', {}, null)),
    this.Fa || (this.Ra.style.display = 'none'),
    (this.Oc = C.h.B(
      'rect',
      { rx: 4, ry: 4, x: -5, y: 0, height: 16 },
      this.Ra
    )),
    (this.ua = C.h.B(
      'text',
      { class: 'blocklyText', y: this.eb.height - 12.5 },
      this.Ra
    )),
    this.Pe(),
    (this.im = this.R()),
    this.v.R().appendChild(this.Ra),
    (this.hl = C.J(this.im, 'mousedown', this, this.uf)))
}
d.gg = function () {}
d.A = function () {
  this.hl && (C.wa(this.hl), (this.hl = null))
  this.v = null
  this.Ra && (C.h.removeNode(this.Ra), (this.Ra = null))
  this.Kl = this.Oc = this.ua = null
}
d.Pe = function () {
  var a = this.im || this.R()
  this.Lf &&
    a &&
    (vd(this.v)
      ? (C.h.Ha(a, 'blocklyEditableText'),
        C.h.bb(a, 'blocklyNonEditableText'),
        (a.style.cursor = this.Oj))
      : (C.h.Ha(a, 'blocklyNonEditableText'),
        C.h.bb(a, 'blocklyEditableText'),
        (a.style.cursor = '')))
}
d.isVisible = function () {
  return this.Fa
}
d.la = function (a) {
  if (this.Fa != a) {
    this.Fa = a
    var b = this.R()
    b && ((b.style.display = a ? 'block' : 'none'), this.Ge())
  }
}
d.hm = function (a) {
  return a
}
function md(a, b) {
  var c = a.hm(b)
  if (null === c) return null
  void 0 !== c && (b = c)
  if ((c = a.Kl)) {
    a = c.call(a, b)
    if (null === a) return null
    void 0 !== a && (b = a)
  }
  return b
}
d.R = function () {
  return this.Ra
}
d.Ge = function () {
  this.Fa
    ? ((this.ua.textContent = Tf(this)), this.Vh(), (this.mn = !1))
    : (this.eb.width = 0)
}
d.Vh = function () {
  var a = Uf(this.ua)
  this.Oc && this.Oc.setAttribute('width', a + 10)
  this.eb.width = a
}
function Uf(a) {
  var b = a.textContent + '\n' + a.className.baseVal,
    c
  if (Rf && (c = Rf[b])) return c
  try {
    c = y || ec ? a.getBBox().width : a.getComputedTextLength()
  } catch (e) {
    return 8 * a.textContent.length
  }
  Rf && (Rf[b] = c)
  return c
}
function xd() {
  Sf++
  Rf || (Rf = {})
}
function Cd() {
  Sf--
  Sf || (Rf = null)
}
d.Di = function () {
  this.mn
    ? this.Ge()
    : this.Fa &&
      0 == this.eb.width &&
      (console.warn(
        'Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead.'
      ),
      this.Ge())
  return this.eb
}
function Vf(a) {
  var b = a.Oc.getBBox(),
    c = b.height * a.v.m.scale
  b = b.width * a.v.m.scale
  a = Ff(a.Oc)
  return { top: a.y, bottom: a.y + c, left: a.x, right: a.x + b }
}
function Tf(a) {
  var b = a.oa
  if (!b) return '\u00a0'
  b.length > a.nr && (b = b.substring(0, a.nr - 2) + '\u2026')
  b = b.replace(/\s/g, '\u00a0')
  a.v.s && (b += '\u200f')
  return b
}
d.Ab = function () {
  return this.oa
}
d.cb = function (a) {
  null !== a && ((a = String(a)), a !== this.oa && ((this.oa = a), this.yi()))
}
d.yi = function () {
  this.mn = !0
  this.v && this.v.L && (this.v.$(), this.v.kc())
}
d.getValue = function () {
  return this.Ab()
}
d.setValue = function (a) {
  if (null !== a) {
    var b = md(this, a)
    null !== b && (a = b)
    b = this.getValue()
    b != a &&
      (this.v &&
        C.i.isEnabled() &&
        C.i.M(new C.i.zc(this.v, 'field', this.name, b, a)),
      this.cb(a))
  }
}
d.uf = function (a) {
  if (this.v && this.v.m && (a = this.v.m.Qd(a))) {
    if (a.ag)
      throw Error(
        'Tried to call gesture.setStartField, but the gesture had already been started.'
      )
    a.Gg || (a.Gg = this)
  }
}
d.pd = function () {}
d.Ih = function () {
  return !1
}
C.h.Th = {}
C.h.Th.Di = function (a) {
  a = a.G()
  var b = Hf(a)
  b.height = a.scrollHeight
  return b
}
C.h.Th.up = function (a, b, c) {
  b.left += c.width
  b.right += c.width
  a.left += c.width
  a.right += c.width
}
function Wf() {
  0 != Xf && (Yf[ua(this)] = this)
  this.ue = this.ue
  this.De = this.De
}
var Xf = 0,
  Yf = {}
Wf.prototype.ue = !1
Wf.prototype.A = function () {
  if (!this.ue && ((this.ue = !0), this.rb(), 0 != Xf)) {
    var a = ua(this)
    if (0 != Xf && this.De && 0 < this.De.length)
      throw Error(
        this +
          " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
      )
    delete Yf[a]
  }
}
function Zf(a, b) {
  a.ue ? b() : (a.De || (a.De = []), a.De.push(b))
}
Wf.prototype.rb = function () {
  if (this.De) for (; this.De.length; ) this.De.shift()()
}
function $f(a) {
  a && 'function' == typeof a.A && a.A()
}
function ag(a, b) {
  this.type = a
  this.currentTarget = this.target = b
  this.defaultPrevented = this.tg = !1
  this.bs = !0
}
ag.prototype.stopPropagation = function () {
  this.tg = !0
}
ag.prototype.preventDefault = function () {
  this.defaultPrevented = !0
  this.bs = !1
}
var bg = {
    Vg: we ? 'pointerdown' : xe ? 'MSPointerDown' : 'mousedown',
    Wg: we ? 'pointerup' : xe ? 'MSPointerUp' : 'mouseup',
    Ug: we ? 'pointercancel' : xe ? 'MSPointerCancel' : 'mousecancel',
    st: we ? 'pointermove' : xe ? 'MSPointerMove' : 'mousemove',
    ut: we ? 'pointerover' : xe ? 'MSPointerOver' : 'mouseover',
    tt: we ? 'pointerout' : xe ? 'MSPointerOut' : 'mouseout',
    qt: we ? 'pointerenter' : xe ? 'MSPointerEnter' : 'mouseenter',
    rt: we ? 'pointerleave' : xe ? 'MSPointerLeave' : 'mouseleave'
  },
  cg = {
    Vg: 'mousedown',
    Wg: 'mouseup',
    Ug: 'mousecancel',
    st: 'mousemove',
    ut: 'mouseover',
    tt: 'mouseout',
    qt: 'mouseenter',
    rt: 'mouseleave'
  }
function dg(a, b) {
  ag.call(this, a ? a.type : '')
  this.relatedTarget = this.currentTarget = this.target = null
  this.button =
    this.screenY =
    this.screenX =
    this.clientY =
    this.clientX =
    this.offsetY =
    this.offsetX =
      0
  this.key = ''
  this.charCode = this.keyCode = 0
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1
  this.state = null
  this.Qn = !1
  this.pointerId = 0
  this.pointerType = ''
  this.Md = null
  a && this.Z(a, b)
}
w(dg, ag)
var eg = [1, 4, 2],
  fg = { 2: 'touch', 3: 'pen', 4: 'mouse' }
dg.prototype.Z = function (a, b) {
  var c = (this.type = a.type),
    e = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null
  this.target = a.target || a.srcElement
  this.currentTarget = b
  if ((b = a.relatedTarget)) {
    if (z) {
      a: {
        try {
          ac(b.nodeName)
          var f = !0
          break a
        } catch (h) {}
        f = !1
      }
      f || (b = null)
    }
  } else
    'mouseover' == c
      ? (b = a.fromElement)
      : 'mouseout' == c && (b = a.toElement)
  this.relatedTarget = b
  e
    ? ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
      (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
      (this.screenX = e.screenX || 0),
      (this.screenY = e.screenY || 0))
    : ((this.offsetX = A || void 0 !== a.offsetX ? a.offsetX : a.layerX),
      (this.offsetY = A || void 0 !== a.offsetY ? a.offsetY : a.layerY),
      (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
      (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
      (this.screenX = a.screenX || 0),
      (this.screenY = a.screenY || 0))
  this.button = a.button
  this.keyCode = a.keyCode || 0
  this.key = a.key || ''
  this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0)
  this.ctrlKey = a.ctrlKey
  this.altKey = a.altKey
  this.shiftKey = a.shiftKey
  this.metaKey = a.metaKey
  this.Qn = gc ? a.metaKey : a.ctrlKey
  this.pointerId = a.pointerId || 0
  this.pointerType = u(a.pointerType) ? a.pointerType : fg[a.pointerType] || ''
  this.state = a.state
  this.Md = a
  a.defaultPrevented && this.preventDefault()
}
function gg(a) {
  return se
    ? 0 == a.Md.button
    : 'click' == a.type
    ? !0
    : !!(a.Md.button & eg[0])
}
dg.prototype.stopPropagation = function () {
  dg.o.stopPropagation.call(this)
  this.Md.stopPropagation
    ? this.Md.stopPropagation()
    : (this.Md.cancelBubble = !0)
}
dg.prototype.preventDefault = function () {
  dg.o.preventDefault.call(this)
  var a = this.Md
  if (a.preventDefault) a.preventDefault()
  else if (((a.returnValue = !1), ue))
    try {
      if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1
    } catch (b) {}
}
var hg = 'closure_listenable_' + ((1e6 * Math.random()) | 0)
function ig(a) {
  return !(!a || !a[hg])
}
var jg = 0
function kg(a, b, c, e, f) {
  this.listener = a
  this.proxy = null
  this.src = b
  this.type = c
  this.capture = !!e
  this.Pk = f
  this.key = ++jg
  this.Jh = this.Yj = !1
}
function lg(a) {
  a.Jh = !0
  a.listener = null
  a.proxy = null
  a.src = null
  a.Pk = null
}
function mg(a) {
  this.src = a
  this.tc = {}
  this.Cj = 0
}
mg.prototype.add = function (a, b, c, e, f) {
  var h = a.toString()
  a = this.tc[h]
  a || ((a = this.tc[h] = []), this.Cj++)
  var k = ng(a, b, e, f)
  ;-1 < k
    ? ((b = a[k]), c || (b.Yj = !1))
    : ((b = new kg(b, this.src, h, !!e, f)), (b.Yj = c), a.push(b))
  return b
}
mg.prototype.remove = function (a, b, c, e) {
  a = a.toString()
  if (!(a in this.tc)) return !1
  var f = this.tc[a]
  b = ng(f, b, c, e)
  return -1 < b
    ? (lg(f[b]),
      Array.prototype.splice.call(f, b, 1),
      0 == f.length && (delete this.tc[a], this.Cj--),
      !0)
    : !1
}
function og(a, b) {
  var c = b.type
  c in a.tc &&
    Ka(a.tc[c], b) &&
    (lg(b), 0 == a.tc[c].length && (delete a.tc[c], a.Cj--))
}
mg.prototype.removeAll = function (a) {
  a = a && a.toString()
  var b = 0,
    c
  for (c in this.tc)
    if (!a || c == a) {
      for (var e = this.tc[c], f = 0; f < e.length; f++) ++b, lg(e[f])
      delete this.tc[c]
      this.Cj--
    }
  return b
}
mg.prototype.Bi = function (a, b, c, e) {
  a = this.tc[a.toString()]
  var f = -1
  a && (f = ng(a, b, c, e))
  return -1 < f ? a[f] : null
}
function ng(a, b, c, e) {
  for (var f = 0; f < a.length; ++f) {
    var h = a[f]
    if (!h.Jh && h.listener == b && h.capture == !!c && h.Pk == e) return f
  }
  return -1
}
var pg = 'closure_lm_' + ((1e6 * Math.random()) | 0),
  qg = {},
  rg = 0
function sg(a, b, c, e, f) {
  if (e && e.once) return tg(a, b, c, e, f)
  if (qa(b)) {
    for (var h = 0; h < b.length; h++) sg(a, b[h], c, e, f)
    return null
  }
  c = ug(c)
  return ig(a)
    ? a.ra(b, c, ta(e) ? !!e.capture : !!e, f)
    : vg(a, b, c, !1, e, f)
}
function vg(a, b, c, e, f, h) {
  if (!b) throw Error('Invalid event type')
  var k = ta(f) ? !!f.capture : !!f,
    l = wg(a)
  l || (a[pg] = l = new mg(a))
  c = l.add(b, c, e, k, h)
  if (c.proxy) return c
  e = xg()
  c.proxy = e
  e.src = a
  e.listener = c
  if (a.addEventListener)
    ye || (f = k),
      void 0 === f && (f = !1),
      a.addEventListener(b.toString(), e, f)
  else if (a.attachEvent) a.attachEvent(yg(b.toString()), e)
  else if (a.addListener && a.removeListener) a.addListener(e)
  else throw Error('addEventListener and attachEvent are unavailable.')
  rg++
  return c
}
function xg() {
  var a = zg,
    b = te
      ? function (c) {
          return a.call(b.src, b.listener, c)
        }
      : function (c) {
          c = a.call(b.src, b.listener, c)
          if (!c) return c
        }
  return b
}
function tg(a, b, c, e, f) {
  if (qa(b)) {
    for (var h = 0; h < b.length; h++) tg(a, b[h], c, e, f)
    return null
  }
  c = ug(c)
  return ig(a)
    ? a.mr(b, c, ta(e) ? !!e.capture : !!e, f)
    : vg(a, b, c, !0, e, f)
}
function Ag(a, b, c, e, f) {
  if (qa(b)) for (var h = 0; h < b.length; h++) Ag(a, b[h], c, e, f)
  else
    (e = ta(e) ? !!e.capture : !!e),
      (c = ug(c)),
      ig(a)
        ? a.Yc(b, c, e, f)
        : a && (a = wg(a)) && (b = a.Bi(b, c, e, f)) && Bg(b)
}
function Bg(a) {
  if (!la(a) && a && !a.Jh) {
    var b = a.src
    if (ig(b)) og(b.we, a)
    else {
      var c = a.type,
        e = a.proxy
      b.removeEventListener
        ? b.removeEventListener(c, e, a.capture)
        : b.detachEvent
        ? b.detachEvent(yg(c), e)
        : b.addListener && b.removeListener && b.removeListener(e)
      rg--
      ;(c = wg(b))
        ? (og(c, a), 0 == c.Cj && ((c.src = null), (b[pg] = null)))
        : lg(a)
    }
  }
}
function yg(a) {
  return a in qg ? qg[a] : (qg[a] = 'on' + a)
}
function Cg(a, b, c, e) {
  var f = !0
  if ((a = wg(a)))
    if ((b = a.tc[b.toString()]))
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var h = b[a]
        h && h.capture == c && !h.Jh && ((h = Dg(h, e)), (f = f && !1 !== h))
      }
  return f
}
function Dg(a, b) {
  var c = a.listener,
    e = a.Pk || a.src
  a.Yj && Bg(a)
  return c.call(e, b)
}
function zg(a, b) {
  if (a.Jh) return !0
  if (!te) {
    if (!b)
      a: {
        b = ['window', 'event']
        for (var c = g, e = 0; e < b.length; e++)
          if (((c = c[b[e]]), null == c)) {
            b = null
            break a
          }
        b = c
      }
    e = b
    b = new dg(e, this)
    c = !0
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1
        if (0 == e.keyCode)
          try {
            e.keyCode = -1
            break a
          } catch (k) {
            f = !0
          }
        if (f || void 0 == e.returnValue) e.returnValue = !0
      }
      e = []
      for (f = b.currentTarget; f; f = f.parentNode) e.push(f)
      a = a.type
      for (f = e.length - 1; !b.tg && 0 <= f; f--) {
        b.currentTarget = e[f]
        var h = Cg(e[f], a, !0, b)
        c = c && h
      }
      for (f = 0; !b.tg && f < e.length; f++)
        (b.currentTarget = e[f]), (h = Cg(e[f], a, !1, b)), (c = c && h)
    }
    return c
  }
  return Dg(a, new dg(b, this))
}
function wg(a) {
  a = a[pg]
  return a instanceof mg ? a : null
}
var Eg = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
function ug(a) {
  if (sa(a)) return a
  a[Eg] ||
    (a[Eg] = function (b) {
      return a.handleEvent(b)
    })
  return a[Eg]
}
function Fg(a) {
  Wf.call(this)
  this.qh = a
  this.zh = {}
}
w(Fg, Wf)
var Gg = []
d = Fg.prototype
d.ra = function (a, b, c, e) {
  qa(b) || (b && (Gg[0] = b.toString()), (b = Gg))
  for (var f = 0; f < b.length; f++) {
    var h = sg(a, b[f], c || this.handleEvent, e || !1, this.qh || this)
    if (!h) break
    this.zh[h.key] = h
  }
  return this
}
d.mr = function (a, b, c, e) {
  return Hg(this, a, b, c, e)
}
function Hg(a, b, c, e, f, h) {
  if (qa(c)) for (var k = 0; k < c.length; k++) Hg(a, b, c[k], e, f, h)
  else {
    b = tg(b, c, e || a.handleEvent, f, h || a.qh || a)
    if (!b) return a
    a.zh[b.key] = b
  }
  return a
}
d.Yc = function (a, b, c, e, f) {
  if (qa(b)) for (var h = 0; h < b.length; h++) this.Yc(a, b[h], c, e, f)
  else
    (c = c || this.handleEvent),
      (e = ta(e) ? !!e.capture : !!e),
      (f = f || this.qh || this),
      (c = ug(c)),
      (e = !!e),
      (b = ig(a)
        ? a.Bi(b, c, e, f)
        : a
        ? (a = wg(a))
          ? a.Bi(b, c, e, f)
          : null
        : null),
      b && (Bg(b), delete this.zh[b.key])
  return this
}
d.removeAll = function () {
  cb(
    this.zh,
    function (a, b) {
      this.zh.hasOwnProperty(b) && Bg(a)
    },
    this
  )
  this.zh = {}
}
d.rb = function () {
  Fg.o.rb.call(this)
  this.removeAll()
}
d.handleEvent = function () {
  throw Error('EventHandler.handleEvent not implemented')
}
function Ig() {
  Wf.call(this)
  this.we = new mg(this)
  this.Jt = this
  this.Mn = null
}
w(Ig, Wf)
Ig.prototype[hg] = !0
d = Ig.prototype
d.Ik = function () {
  return this.Mn
}
d.uo = function (a) {
  this.Mn = a
}
d.addEventListener = function (a, b, c, e) {
  sg(this, a, b, c, e)
}
d.removeEventListener = function (a, b, c, e) {
  Ag(this, a, b, c, e)
}
d.dispatchEvent = function (a) {
  var b,
    c = this.Ik()
  if (c) for (b = []; c; c = c.Ik()) b.push(c)
  c = this.Jt
  var e = a.type || a
  if (u(a)) a = new ag(a, c)
  else if (a instanceof ag) a.target = a.target || c
  else {
    var f = a
    a = new ag(e, c)
    eb(a, f)
  }
  f = !0
  if (b)
    for (var h = b.length - 1; !a.tg && 0 <= h; h--) {
      var k = (a.currentTarget = b[h])
      f = Jg(k, e, !0, a) && f
    }
  a.tg ||
    ((k = a.currentTarget = c),
    (f = Jg(k, e, !0, a) && f),
    a.tg || (f = Jg(k, e, !1, a) && f))
  if (b)
    for (h = 0; !a.tg && h < b.length; h++)
      (k = a.currentTarget = b[h]), (f = Jg(k, e, !1, a) && f)
  return f
}
d.rb = function () {
  Ig.o.rb.call(this)
  this.removeAllListeners()
  this.Mn = null
}
d.ra = function (a, b, c, e) {
  return this.we.add(String(a), b, !1, c, e)
}
d.mr = function (a, b, c, e) {
  return this.we.add(String(a), b, !0, c, e)
}
d.Yc = function (a, b, c, e) {
  return this.we.remove(String(a), b, c, e)
}
d.removeAllListeners = function (a) {
  return this.we ? this.we.removeAll(a) : 0
}
function Jg(a, b, c, e) {
  b = a.we.tc[String(b)]
  if (!b) return !0
  b = b.concat()
  for (var f = !0, h = 0; h < b.length; ++h) {
    var k = b[h]
    if (k && !k.Jh && k.capture == c) {
      var l = k.listener,
        m = k.Pk || k.src
      k.Yj && og(a.we, k)
      f = !1 !== l.call(m, e) && f
    }
  }
  return f && 0 != e.bs
}
d.Bi = function (a, b, c, e) {
  return this.we.Bi(String(a), b, c, e)
}
function Kg() {}
oa(Kg)
Kg.prototype.dw = 0
Kg.prototype.Gv = ''
function Lg(a) {
  Ig.call(this)
  this.rk = a || Ac()
  this.Kh = Mg
  this.vh = null
  this.ya = !1
  this.U = null
  this.ef = void 0
  this.Ye = this.Yb = this.Zd = this.An = null
  this.Gh = this.hx = !1
}
w(Lg, Ig)
Lg.prototype.Fv = Kg.cf()
var Mg = null
function Ng(a, b) {
  switch (a) {
    case 1:
      return b ? 'disable' : 'enable'
    case 2:
      return b ? 'highlight' : 'unhighlight'
    case 4:
      return b ? 'activate' : 'deactivate'
    case 8:
      return b ? 'select' : 'unselect'
    case 16:
      return b ? 'check' : 'uncheck'
    case 32:
      return b ? 'focus' : 'blur'
    case 64:
      return b ? 'open' : 'close'
  }
  throw Error('Invalid component state')
}
d = Lg.prototype
d.ga = function () {
  var a
  ;(a = this.vh) ||
    ((a = this.Fv), (a = this.vh = a.Gv + ':' + (a.dw++).toString(36)))
  return a
}
d.G = function () {
  return this.U
}
function Og(a) {
  a.ef || (a.ef = new Fg(a))
  return a.ef
}
d.Ag = function (a) {
  if (this == a) throw Error('Unable to set parent component')
  if (a && this.Zd && this.vh && Pg(this.Zd, this.vh) && this.Zd != a)
    throw Error('Unable to set parent component')
  this.Zd = a
  Lg.o.uo.call(this, a)
}
d.getParent = function () {
  return this.Zd
}
d.uo = function (a) {
  if (this.Zd && this.Zd != a) throw Error('Method not supported')
  Lg.o.uo.call(this, a)
}
d.Pd = function () {
  return this.rk
}
d.X = function () {
  this.U = this.rk.createElement('DIV')
}
d.$ = function (a) {
  this.Ge(a)
}
d.Ge = function (a, b) {
  if (this.ya) throw Error('Component already rendered')
  this.U || this.X()
  a ? a.insertBefore(this.U, b || null) : this.rk.Kd.body.appendChild(this.U)
  ;(this.Zd && !this.Zd.ya) || this.Lb()
}
d.Lb = function () {
  this.ya = !0
  Qg(this, function (a) {
    !a.ya && a.G() && a.Lb()
  })
}
d.kd = function () {
  Qg(this, function (a) {
    a.ya && a.kd()
  })
  this.ef && this.ef.removeAll()
  this.ya = !1
}
d.rb = function () {
  this.ya && this.kd()
  this.ef && (this.ef.A(), delete this.ef)
  Qg(this, function (a) {
    a.A()
  })
  !this.hx && this.U && Lc(this.U)
  this.Zd = this.An = this.U = this.Ye = this.Yb = null
  Lg.o.rb.call(this)
}
d.Vj = function (a, b) {
  this.Yg(a, Rg(this), b)
}
d.Yg = function (a, b, c) {
  if (a.ya && (c || !this.ya)) throw Error('Component already rendered')
  if (0 > b || b > Rg(this)) throw Error('Child component index out of bounds')
  ;(this.Ye && this.Yb) || ((this.Ye = {}), (this.Yb = []))
  if (a.getParent() == this) {
    var e = a.ga()
    this.Ye[e] = a
    Ka(this.Yb, a)
  } else {
    e = this.Ye
    var f = a.ga()
    if (null !== e && f in e)
      throw Error('The object already contains the key "' + f + '"')
    e[f] = a
  }
  a.Ag(this)
  Na(this.Yb, b, 0, a)
  a.ya && this.ya && a.getParent() == this
    ? ((c = this.Sc()),
      (b = c.childNodes[b] || null),
      b != a.G() && c.insertBefore(a.G(), b))
    : c
    ? (this.U || this.X(),
      (b = L(this, b + 1)),
      a.Ge(this.Sc(), b ? b.U : null))
    : this.ya &&
      !a.ya &&
      a.U &&
      a.U.parentNode &&
      1 == a.U.parentNode.nodeType &&
      a.Lb()
}
d.Sc = function () {
  return this.U
}
function Sg(a) {
  null == a.Kh && (a.Kh = 'rtl' == Df(a.ya ? a.U : a.rk.Kd.body, 'direction'))
  return a.Kh
}
d.Je = function (a) {
  if (this.ya) throw Error('Component already rendered')
  this.Kh = a
}
function Tg(a) {
  return !!a.Yb && 0 != a.Yb.length
}
function Rg(a) {
  return a.Yb ? a.Yb.length : 0
}
function Pg(a, b) {
  a.Ye && b
    ? ((a = a.Ye), (b = (null !== a && b in a ? a[b] : void 0) || null))
    : (b = null)
  return b
}
function L(a, b) {
  return a.Yb ? a.Yb[b] || null : null
}
function Qg(a, b, c) {
  a.Yb && Fa(a.Yb, b, c)
}
function Ug(a, b) {
  return a.Yb && b ? Ea(a.Yb, b) : -1
}
d.removeChild = function (a, b) {
  if (a) {
    var c = u(a) ? a : a.ga()
    a = Pg(this, c)
    if (c && a) {
      var e = this.Ye
      c in e && delete e[c]
      Ka(this.Yb, a)
      b && (a.kd(), a.U && Lc(a.U))
      a.Ag(null)
    }
  }
  if (!a) throw Error('Child is not in parent component')
  return a
}
d.Zr = function (a) {
  for (var b = []; Tg(this); ) b.push(this.removeChild(L(this, 0), a))
  return b
}
var Vg
fb(
  'A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK'.split(
    ' '
  )
)
function Wg(a, b) {
  b ? a.setAttribute('role', b) : a.removeAttribute('role')
}
function M(a, b, c) {
  qa(c) && (c = c.join(' '))
  var e = 'aria-' + b
  '' === c || void 0 == c
    ? (Vg ||
        (Vg = {
          atomic: !1,
          autocomplete: 'none',
          dropeffect: 'none',
          haspopup: !1,
          live: 'off',
          multiline: !1,
          multiselectable: !1,
          orientation: 'vertical',
          readonly: !1,
          relevant: 'additions text',
          required: !1,
          sort: 'none',
          busy: !1,
          disabled: !1,
          hidden: !1,
          invalid: 'false'
        }),
      (c = Vg),
      b in c ? a.setAttribute(e, c[b]) : a.removeAttribute(e))
    : a.setAttribute(e, c)
}
function Xg(a, b, c, e, f, h) {
  if (A && !pc('525')) return !0
  if (gc && f) return Yg(a)
  if (f && !e) return !1
  if (!z) {
    la(b) && (b = Zg(b))
    var k = 17 == b || 18 == b || (gc && 91 == b)
    if (((!c || gc) && k) || (gc && 16 == b && (e || h))) return !1
  }
  if ((A || ec) && e && c)
    switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
    }
  if (y && e && b == a) return !1
  switch (a) {
    case 13:
      return z ? (h || f ? !1 : !(c && e)) : !0
    case 27:
      return !(A || ec || z)
  }
  return z && (e || f || h) ? !1 : Yg(a)
}
function Yg(a) {
  if (
    (48 <= a && 57 >= a) ||
    (96 <= a && 106 >= a) ||
    (65 <= a && 90 >= a) ||
    ((A || ec) && 0 == a)
  )
    return !0
  switch (a) {
    case 32:
    case 43:
    case 63:
    case 64:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
    case 163:
      return !0
    case 173:
      return z
    default:
      return !1
  }
}
function Zg(a) {
  if (z) a = $g(a)
  else if (gc && A)
    switch (a) {
      case 93:
        a = 91
    }
  return a
}
function $g(a) {
  switch (a) {
    case 61:
      return 187
    case 59:
      return 186
    case 173:
      return 189
    case 224:
      return 91
    case 0:
      return 224
    default:
      return a
  }
}
function ah(a, b) {
  Ig.call(this)
  a && bh(this, a, b)
}
w(ah, Ig)
d = ah.prototype
d.U = null
d.Zk = null
d.nn = null
d.$k = null
d.Hc = -1
d.Vd = -1
d.$l = !1
var ch = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  },
  dh = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    'U+007F': 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
  },
  eh = !A || pc('525'),
  fh = gc && z
d = ah.prototype
d.qv = function (a) {
  if (A || ec)
    if (
      (17 == this.Hc && !a.ctrlKey) ||
      (18 == this.Hc && !a.altKey) ||
      (gc && 91 == this.Hc && !a.metaKey)
    )
      this.Vd = this.Hc = -1
  ;-1 == this.Hc &&
    (a.ctrlKey && 17 != a.keyCode
      ? (this.Hc = 17)
      : a.altKey && 18 != a.keyCode
      ? (this.Hc = 18)
      : a.metaKey && 91 != a.keyCode && (this.Hc = 91))
  eh && !Xg(a.keyCode, this.Hc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
    ? this.handleEvent(a)
    : ((this.Vd = Zg(a.keyCode)), fh && (this.$l = a.altKey))
}
d.rv = function (a) {
  this.Vd = this.Hc = -1
  this.$l = a.altKey
}
d.handleEvent = function (a) {
  var b = a.Md,
    c = b.altKey
  if (y && 'keypress' == a.type) {
    var e = this.Vd
    var f = 13 != e && 27 != e ? b.keyCode : 0
  } else
    (A || ec) && 'keypress' == a.type
      ? ((e = this.Vd),
        (f = 0 <= b.charCode && 63232 > b.charCode && Yg(e) ? b.charCode : 0))
      : dc && !A
      ? ((e = this.Vd), (f = Yg(e) ? b.keyCode : 0))
      : ('keypress' == a.type
          ? (fh && (c = this.$l),
            b.keyCode == b.charCode
              ? 32 > b.keyCode
                ? ((e = b.keyCode), (f = 0))
                : ((e = this.Vd), (f = b.charCode))
              : ((e = b.keyCode || this.Vd), (f = b.charCode || 0)))
          : ((e = b.keyCode || this.Vd), (f = b.charCode || 0)),
        gc && 63 == f && 224 == e && (e = 191))
  var h = (e = Zg(e))
  e
    ? 63232 <= e && e in ch
      ? (h = ch[e])
      : 25 == e && a.shiftKey && (h = 9)
    : b.keyIdentifier && b.keyIdentifier in dh && (h = dh[b.keyIdentifier])
  ;(z &&
    eh &&
    'keypress' == a.type &&
    !Xg(h, this.Hc, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
    ((a = h == this.Hc),
    (this.Hc = h),
    (b = new gh(h, f, a, b)),
    (b.altKey = c),
    this.dispatchEvent(b))
}
d.G = function () {
  return this.U
}
function bh(a, b, c) {
  a.$k && a.detach()
  a.U = b
  a.Zk = sg(a.U, 'keypress', a, c)
  a.nn = sg(a.U, 'keydown', a.qv, c, a)
  a.$k = sg(a.U, 'keyup', a.rv, c, a)
}
d.detach = function () {
  this.Zk &&
    (Bg(this.Zk),
    Bg(this.nn),
    Bg(this.$k),
    (this.$k = this.nn = this.Zk = null))
  this.U = null
  this.Vd = this.Hc = -1
}
d.rb = function () {
  ah.o.rb.call(this)
  this.detach()
}
function gh(a, b, c, e) {
  dg.call(this, e)
  this.type = 'key'
  this.keyCode = a
  this.charCode = b
  this.repeat = c
}
w(gh, dg)
function hh(a) {
  if (a.classList) return a.classList
  a = a.className
  return (u(a) && a.match(/\S+/g)) || []
}
function ih(a, b) {
  return a.classList ? a.classList.contains(b) : Ja(hh(a), b)
}
function jh(a, b) {
  a.classList
    ? a.classList.add(b)
    : ih(a, b) || (a.className += 0 < a.className.length ? ' ' + b : b)
}
function kh(a, b) {
  if (a.classList)
    Fa(b, function (f) {
      jh(a, f)
    })
  else {
    var c = {}
    Fa(hh(a), function (f) {
      c[f] = !0
    })
    Fa(b, function (f) {
      c[f] = !0
    })
    a.className = ''
    for (var e in c) a.className += 0 < a.className.length ? ' ' + e : e
  }
}
function lh(a, b) {
  a.classList
    ? a.classList.remove(b)
    : ih(a, b) &&
      (a.className = Ga(hh(a), function (c) {
        return c != b
      }).join(' '))
}
function mh(a, b) {
  a.classList
    ? Fa(b, function (c) {
        lh(a, c)
      })
    : (a.className = Ga(hh(a), function (c) {
        return !Ja(b, c)
      }).join(' '))
}
function nh(a, b) {
  if (!a) throw Error('Invalid class name ' + a)
  if (!sa(b)) throw Error('Invalid decorator function ' + b)
}
var oh = {}
function ph(a) {
  this.xp = a
}
oa(ph)
d = ph.prototype
d.xk = function () {
  return this.xp
}
function qh(a, b) {
  a && (a.tabIndex = b ? 0 : -1)
}
d.X = function (a) {
  return a.Pd().X('DIV', this.Bk(a).join(' '))
}
d.Sc = function (a) {
  return a
}
d.Ri = function (a) {
  a = a.G()
  Lf(a, !0, z)
  y && (a.hideFocus = !0)
  var b = this.xk()
  b && Wg(a, b)
}
d.zb = function (a) {
  return a.G()
}
d.$b = function () {
  return 'goog-container'
}
d.Bk = function (a) {
  var b = this.$b(),
    c = [b, a.sg == rh ? b + '-horizontal' : b + '-vertical']
  a.isEnabled() || c.push(b + '-disabled')
  return c
}
function sh() {}
var th
oa(sh)
var uh = {
  button: 'pressed',
  checkbox: 'checked',
  menuitem: 'selected',
  menuitemcheckbox: 'checked',
  menuitemradio: 'checked',
  radio: 'checked',
  tab: 'selected',
  treeitem: 'selected'
}
d = sh.prototype
d.xk = function () {}
d.X = function (a) {
  return a.Pd().X('DIV', this.Bk(a).join(' '), a.bf())
}
d.Sc = function (a) {
  return a
}
d.ti = function (a, b, c) {
  if ((a = a.G ? a.G() : a)) {
    var e = [b]
    y && !pc('7') && ((e = vh(hh(a), b)), e.push(b))
    ;(c ? kh : mh)(a, e)
  }
}
d.Ri = function (a) {
  Sg(a) && this.Je(a.G(), !0)
  a.isEnabled() && this.Ef(a, a.isVisible())
}
function wh(a, b, c) {
  if ((a = c || a.xk()))
    (c = b.getAttribute('role') || null), a != c && Wg(b, a)
}
function xh(a, b, c) {
  var e = b.wp
  null != e && a.mo(c, e)
  b.isVisible() || M(c, 'hidden', !b.isVisible())
  b.isEnabled() || yh(c, 1, !b.isEnabled())
  b.mb & 8 && yh(c, 8, b.Wk())
  b.mb & 16 && yh(c, 16, !!(b.Ja & 16))
  b.mb & 64 && yh(c, 64, b.yh())
}
d.mo = function (a, b) {
  M(a, 'label', b)
}
d.lo = function (a, b) {
  Lf(a, !b, !y && !dc)
}
d.Je = function (a, b) {
  this.ti(a, this.$b() + '-rtl', b)
}
d.mf = function (a) {
  var b
  return a.mb & 32 && (b = a.zb()) ? Qc(b) && Rc(b) : !1
}
d.Ef = function (a, b) {
  var c
  if (a.mb & 32 && (c = a.zb())) {
    if (!b && a.Ja & 32) {
      try {
        c.blur()
      } catch (e) {}
      a.Ja & 32 && a.Ii(null)
    }
    ;(Qc(c) && Rc(c)) != b &&
      ((a = c),
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute('tabIndex')))
  }
}
d.la = function (a, b) {
  Jf(a, b)
  a && M(a, 'hidden', !b)
}
d.Dd = function (a, b, c) {
  var e = a.G()
  if (e) {
    var f = this.Ak(b)
    f && this.ti(a, f, c)
    yh(e, b, c)
  }
}
function yh(a, b, c) {
  th || (th = { 1: 'disabled', 8: 'selected', 16: 'checked', 64: 'expanded' })
  b = th[b]
  var e = a.getAttribute('role') || null
  e && ((e = uh[e] || b), (b = 'checked' == b || 'selected' == b ? e : b))
  b && M(a, b, c)
}
d.$d = function (a, b) {
  var c = this.Sc(a)
  c &&
    (Kc(c),
    b &&
      (u(b)
        ? Nc(c, b)
        : ((a = function (e) {
            if (e) {
              var f = Cc(c)
              c.appendChild(u(e) ? f.createTextNode(e) : e)
            }
          }),
          qa(b) ? Fa(b, a) : !ra(b) || 'nodeType' in b ? a(b) : Fa(Ma(b), a))))
}
d.zb = function (a) {
  return a.G()
}
d.$b = function () {
  return 'goog-control'
}
d.Bk = function (a) {
  var b = this.$b(),
    c = [b],
    e = this.$b()
  e != b && c.push(e)
  b = a.getState()
  for (e = []; b; ) {
    var f = b & -b
    e.push(this.Ak(f))
    b &= ~f
  }
  c.push.apply(c, e)
  ;(a = a.Nd) && c.push.apply(c, a)
  y && !pc('7') && c.push.apply(c, vh(c))
  return c
}
function vh(a, b) {
  var c = []
  b && (a = La(a, [b]))
  Fa([], function (e) {
    !Ia(e, Aa(Ja, a)) || (b && !Ja(e, b)) || c.push(e.join('_'))
  })
  return c
}
d.Ak = function (a) {
  if (!this.Hp) {
    var b = this.$b()
    b.replace(/\xa0|\s/g, ' ')
    this.Hp = {
      1: b + '-disabled',
      2: b + '-hover',
      4: b + '-active',
      8: b + '-selected',
      16: b + '-checked',
      32: b + '-focused',
      64: b + '-open'
    }
  }
  return this.Hp[a]
}
function N(a, b, c) {
  Lg.call(this, c)
  if (!b) {
    b = this.constructor
    for (var e; b; ) {
      e = ua(b)
      if ((e = oh[e])) break
      b = b.o ? b.o.constructor : null
    }
    b = e ? (sa(e.cf) ? e.cf() : new e()) : null
  }
  this.sa = b
  this.Ec = void 0 !== a ? a : null
  this.wp = null
}
w(N, Lg)
d = N.prototype
d.Ec = null
d.Ja = 0
d.mb = 39
d.Rt = 255
d.sj = 0
d.Fa = !0
d.Nd = null
d.Ji = !0
d.Zl = !1
d.zw = null
d.zb = function () {
  return this.sa.zb(this)
}
d.Gk = function () {
  return this.dc || (this.dc = new ah())
}
d.ti = function (a, b) {
  b
    ? a &&
      (this.Nd ? Ja(this.Nd, a) || this.Nd.push(a) : (this.Nd = [a]),
      this.sa.ti(this, a, !0))
    : a &&
      this.Nd &&
      Ka(this.Nd, a) &&
      (0 == this.Nd.length && (this.Nd = null), this.sa.ti(this, a, !1))
}
d.X = function () {
  var a = this.sa.X(this)
  this.U = a
  wh(this.sa, a, this.Jk())
  this.Zl || this.sa.lo(a, !1)
  this.isVisible() || this.sa.la(a, !1)
}
d.Jk = function () {
  return this.zw
}
d.mo = function (a) {
  this.wp = a
  var b = this.G()
  b && this.sa.mo(b, a)
}
d.Sc = function () {
  return this.sa.Sc(this.G())
}
d.Lb = function () {
  N.o.Lb.call(this)
  xh(this.sa, this, this.U)
  this.sa.Ri(this)
  if (this.mb & -2 && (this.Ji && zh(this, !0), this.mb & 32)) {
    var a = this.zb()
    if (a) {
      var b = this.Gk()
      bh(b, a)
      Og(this)
        .ra(b, 'key', this.td)
        .ra(a, 'focus', this.Nk)
        .ra(a, 'blur', this.Ii)
    }
  }
}
function zh(a, b) {
  var c = a.Gh ? bg : cg,
    e = Og(a),
    f = a.G()
  b
    ? (e
        .ra(f, c.Vg, a.oh)
        .ra(f, [c.Wg, c.Ug], a.ph)
        .ra(f, 'mouseover', a.Ym)
        .ra(f, 'mouseout', a.Xm),
      a.Gh && e.ra(f, 'gotpointercapture', a.vl),
      a.nh != na && e.ra(f, 'contextmenu', a.nh),
      y &&
        (pc(9) || e.ra(f, 'dblclick', a.Qq),
        a.Pi || ((a.Pi = new Ah(a)), Zf(a, Aa($f, a.Pi)))))
    : (e
        .Yc(f, c.Vg, a.oh)
        .Yc(f, [c.Wg, c.Ug], a.ph)
        .Yc(f, 'mouseover', a.Ym)
        .Yc(f, 'mouseout', a.Xm),
      a.Gh && e.Yc(f, 'gotpointercapture', a.vl),
      a.nh != na && e.Yc(f, 'contextmenu', a.nh),
      y && (pc(9) || e.Yc(f, 'dblclick', a.Qq), $f(a.Pi), (a.Pi = null)))
}
d.kd = function () {
  N.o.kd.call(this)
  this.dc && this.dc.detach()
  this.isVisible() && this.isEnabled() && this.sa.Ef(this, !1)
}
d.rb = function () {
  N.o.rb.call(this)
  this.dc && (this.dc.A(), delete this.dc)
  delete this.sa
  this.Pi = this.Nd = this.Ec = null
}
d.bf = function () {
  return this.Ec
}
d.$d = function (a) {
  this.sa.$d(this.G(), a)
  this.Ec = a
}
d.Om = function () {
  var a = this.bf()
  if (!a) return ''
  if (!u(a))
    if (qa(a)) a = Ha(a, Sc).join('')
    else {
      if (uc && null !== a && 'innerText' in a)
        a = a.innerText.replace(/(\r\n|\r|\n)/g, '\n')
      else {
        var b = []
        Tc(a, b, !0)
        a = b.join('')
      }
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      uc || (a = a.replace(/ +/g, ' '))
      ' ' != a && (a = a.replace(/^\s*/, ''))
    }
  return Wb(a)
}
d.Je = function (a) {
  N.o.Je.call(this, a)
  var b = this.G()
  b && this.sa.Je(b, a)
}
d.lo = function (a) {
  this.Zl = a
  var b = this.G()
  b && this.sa.lo(b, a)
}
d.isVisible = function () {
  return this.Fa
}
d.la = function (a, b) {
  return b || (this.Fa != a && this.dispatchEvent(a ? 'show' : 'hide'))
    ? ((b = this.G()) && this.sa.la(b, a),
      this.isEnabled() && this.sa.Ef(this, a),
      (this.Fa = a),
      !0)
    : !1
}
d.isEnabled = function () {
  return !(this.Ja & 1)
}
d.nj = function (a) {
  var b = this.getParent()
  ;(b && 'function' == typeof b.isEnabled && !b.isEnabled()) ||
    !Bh(this, 1, !a) ||
    (a || (this.setActive(!1), this.Kc(!1)),
    this.isVisible() && this.sa.Ef(this, a),
    this.Dd(1, !a, !0))
}
d.Kc = function (a) {
  Bh(this, 2, a) && this.Dd(2, a)
}
d.setActive = function (a) {
  Bh(this, 4, a) && this.Dd(4, a)
}
d.Wk = function () {
  return !!(this.Ja & 8)
}
function Ch(a, b) {
  Bh(a, 16, b) && a.Dd(16, b)
}
d.yh = function () {
  return !!(this.Ja & 64)
}
function Dh(a, b) {
  Bh(a, 64, b) && a.Dd(64, b)
}
d.getState = function () {
  return this.Ja
}
d.Dd = function (a, b, c) {
  c || 1 != a
    ? this.mb & a &&
      b != !!(this.Ja & a) &&
      (this.sa.Dd(this, a, b), (this.Ja = b ? this.Ja | a : this.Ja & ~a))
    : this.nj(!b)
}
d.Uc = function (a, b) {
  if (this.ya && this.Ja & a && !b) throw Error('Component already rendered')
  !b && this.Ja & a && this.Dd(a, !1)
  this.mb = b ? this.mb | a : this.mb & ~a
}
function Eh(a, b) {
  return !!(a.Rt & b) && !!(a.mb & b)
}
function Bh(a, b, c) {
  return (
    !!(a.mb & b) &&
    !!(a.Ja & b) != c &&
    (!(a.sj & b) || a.dispatchEvent(Ng(b, c))) &&
    !a.ue
  )
}
d.Ym = function (a) {
  !Fh(a, this.G()) &&
    this.dispatchEvent('enter') &&
    this.isEnabled() &&
    Eh(this, 2) &&
    this.Kc(!0)
}
d.Xm = function (a) {
  !Fh(a, this.G()) &&
    this.dispatchEvent('leave') &&
    (Eh(this, 4) && this.setActive(!1), Eh(this, 2) && this.Kc(!1))
}
d.vl = function (a) {
  var b = a.target
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId)
}
d.nh = na
function Fh(a, b) {
  return !!a.relatedTarget && Mc(b, a.relatedTarget)
}
d.oh = function (a) {
  this.isEnabled() &&
    (Eh(this, 2) && this.Kc(!0),
    !gg(a) ||
      (A && gc && a.ctrlKey) ||
      (Eh(this, 4) && this.setActive(!0),
      this.sa && this.sa.mf(this) && this.zb().focus()))
  this.Zl || !gg(a) || (A && gc && a.ctrlKey) || a.preventDefault()
}
d.ph = function (a) {
  this.isEnabled() &&
    (Eh(this, 2) && this.Kc(!0),
    this.Ja & 4 && Gh(this, a) && Eh(this, 4) && this.setActive(!1))
}
d.Qq = function (a) {
  this.isEnabled() && Gh(this, a)
}
function Gh(a, b) {
  Eh(a, 16) && Ch(a, !(a.Ja & 16))
  Eh(a, 8) && Bh(a, 8, !0) && a.Dd(8, !0)
  Eh(a, 64) && Dh(a, !a.yh())
  var c = new ag('action', a)
  b &&
    ((c.altKey = b.altKey),
    (c.ctrlKey = b.ctrlKey),
    (c.metaKey = b.metaKey),
    (c.shiftKey = b.shiftKey),
    (c.Qn = b.Qn))
  return a.dispatchEvent(c)
}
d.Nk = function () {
  Eh(this, 32) && Bh(this, 32, !0) && this.Dd(32, !0)
}
d.Ii = function () {
  Eh(this, 4) && this.setActive(!1)
  Eh(this, 32) && Bh(this, 32, !1) && this.Dd(32, !1)
}
d.td = function (a) {
  return this.isVisible() && this.isEnabled() && this.Zf(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1
}
d.Zf = function (a) {
  return 13 == a.keyCode && Gh(this, a)
}
if (!sa(N)) throw Error('Invalid component class ' + N)
if (!sa(sh)) throw Error('Invalid renderer class ' + sh)
var Hh = ua(N)
oh[Hh] = sh
nh('goog-control', function () {
  return new N(null)
})
function Ah(a) {
  Wf.call(this)
  this.gk = a
  this.ak = !1
  this.qh = new Fg(this)
  Zf(this, Aa($f, this.qh))
  a = this.gk.U
  this.qh
    .ra(a, 'mousedown', this.tv)
    .ra(a, 'mouseup', this.uv)
    .ra(a, 'click', this.kv)
}
w(Ah, Wf)
var Ih = !y || 9 <= Number(qc)
Ah.prototype.tv = function () {
  this.ak = !1
}
Ah.prototype.uv = function () {
  this.ak = !0
}
function Jh(a, b) {
  if (!Ih) return (a.button = 0), (a.type = b), a
  var c = document.createEvent('MouseEvents')
  c.initMouseEvent(
    b,
    a.bubbles,
    a.cancelable,
    a.view || null,
    a.detail,
    a.screenX,
    a.screenY,
    a.clientX,
    a.clientY,
    a.ctrlKey,
    a.altKey,
    a.shiftKey,
    a.metaKey,
    0,
    a.relatedTarget || null
  )
  return c
}
Ah.prototype.kv = function (a) {
  if (this.ak) this.ak = !1
  else {
    var b = a.Md,
      c = b.button,
      e = b.type,
      f = Jh(b, 'mousedown')
    this.gk.oh(new dg(f, a.currentTarget))
    f = Jh(b, 'mouseup')
    this.gk.ph(new dg(f, a.currentTarget))
    Ih || ((b.button = c), (b.type = e))
  }
}
Ah.prototype.rb = function () {
  this.gk = null
  Ah.o.rb.call(this)
}
function Kh(a, b, c) {
  Lg.call(this, c)
  this.sa = b || ph.cf()
  this.sg = a || Lh
}
w(Kh, Lg)
var rh = 'horizontal',
  Lh = 'vertical'
d = Kh.prototype
d.on = null
d.dc = null
d.sa = null
d.sg = null
d.Fa = !0
d.Vf = !0
d.Lm = !0
d.Ua = -1
d.ub = null
d.Dh = !1
d.Ot = !1
d.yw = !0
d.qe = null
d.zb = function () {
  return this.on || this.sa.zb(this)
}
d.Gk = function () {
  return this.dc || (this.dc = new ah(this.zb()))
}
d.X = function () {
  this.U = this.sa.X(this)
}
d.Sc = function () {
  return this.sa.Sc(this.G())
}
d.Lb = function () {
  Kh.o.Lb.call(this)
  Qg(
    this,
    function (c) {
      c.ya && Mh(this, c)
    },
    this
  )
  var a = this.G()
  this.sa.Ri(this)
  this.la(this.Fa, !0)
  var b = this.Gh ? bg : cg
  Og(this)
    .ra(this, 'enter', this.Vm)
    .ra(this, 'highlight', this.pv)
    .ra(this, 'unhighlight', this.yv)
    .ra(this, 'open', this.vv)
    .ra(this, 'close', this.mv)
    .ra(a, b.Vg, this.oh)
    .ra(Cc(a), [b.Wg, b.Ug], this.nv)
    .ra(a, [b.Vg, b.Wg, b.Ug, 'mouseover', 'mouseout', 'contextmenu'], this.jv)
  this.Gh && Og(this).ra(a, 'gotpointercapture', this.vl)
  this.mf() && Nh(this, !0)
}
d.vl = function (a) {
  var b = a.target
  b.releasePointerCapture && b.releasePointerCapture(a.pointerId)
}
function Nh(a, b) {
  var c = Og(a),
    e = a.zb()
  b
    ? c.ra(e, 'focus', a.Nk).ra(e, 'blur', a.Ii).ra(a.Gk(), 'key', a.td)
    : c.Yc(e, 'focus', a.Nk).Yc(e, 'blur', a.Ii).Yc(a.Gk(), 'key', a.td)
}
d.kd = function () {
  this.Mh(-1)
  this.ub && Dh(this.ub, !1)
  this.Dh = !1
  Kh.o.kd.call(this)
}
d.rb = function () {
  Kh.o.rb.call(this)
  this.dc && (this.dc.A(), (this.dc = null))
  this.sa = this.ub = this.qe = this.on = null
}
d.Vm = function () {
  return !0
}
d.pv = function (a) {
  var b = Ug(this, a.target)
  if (-1 < b && b != this.Ua) {
    var c = L(this, this.Ua)
    c && c.Kc(!1)
    this.Ua = b
    c = L(this, this.Ua)
    this.Dh && c.setActive(!0)
    this.yw &&
      this.ub &&
      c != this.ub &&
      (c.mb & 64 ? Dh(c, !0) : Dh(this.ub, !1))
  }
  b = this.G()
  null != a.target.G() && M(b, 'activedescendant', a.target.G().id)
}
d.yv = function (a) {
  a.target == L(this, this.Ua) && (this.Ua = -1)
  this.G().removeAttribute('aria-activedescendant')
}
d.vv = function (a) {
  ;(a = a.target) &&
    a != this.ub &&
    a.getParent() == this &&
    (this.ub && Dh(this.ub, !1), (this.ub = a))
}
d.mv = function (a) {
  a.target == this.ub && (this.ub = null)
  var b = this.G(),
    c = a.target.G()
  b &&
    a.target.Ja & 2 &&
    c &&
    ((a = ''), c && (a = c.id), M(b, 'activedescendant', a))
}
d.oh = function (a) {
  this.Vf && (this.Dh = !0)
  var b = this.zb()
  b && Qc(b) && Rc(b) ? b.focus() : a.preventDefault()
}
d.nv = function () {
  this.Dh = !1
}
d.jv = function (a) {
  var b = this.Gh ? bg : cg
  a: {
    var c = a.target
    if (this.qe)
      for (var e = this.G(); c && c !== e; ) {
        var f = c.id
        if (f in this.qe) {
          c = this.qe[f]
          break a
        }
        c = c.parentNode
      }
    c = null
  }
  if (c)
    switch (a.type) {
      case b.Vg:
        c.oh(a)
        break
      case b.Wg:
      case b.Ug:
        c.ph(a)
        break
      case 'mouseover':
        c.Ym(a)
        break
      case 'mouseout':
        c.Xm(a)
        break
      case 'contextmenu':
        c.nh(a)
    }
}
d.Nk = function () {}
d.Ii = function () {
  this.Mh(-1)
  this.Dh = !1
  this.ub && Dh(this.ub, !1)
}
d.td = function (a) {
  return this.isEnabled() &&
    this.isVisible() &&
    (0 != Rg(this) || this.on) &&
    this.Zf(a)
    ? (a.preventDefault(), a.stopPropagation(), !0)
    : !1
}
d.Zf = function (a) {
  var b = L(this, this.Ua)
  if (
    (b && 'function' == typeof b.td && b.td(a)) ||
    (this.ub &&
      this.ub != b &&
      'function' == typeof this.ub.td &&
      this.ub.td(a))
  )
    return !0
  if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1
  switch (a.keyCode) {
    case 27:
      if (this.mf()) this.zb().blur()
      else return !1
      break
    case 36:
      Oh(this)
      break
    case 35:
      Ph(this)
      break
    case 38:
      if (this.sg == Lh) Qh(this)
      else return !1
      break
    case 37:
      if (this.sg == rh) Sg(this) ? Rh(this) : Qh(this)
      else return !1
      break
    case 40:
      if (this.sg == Lh) Rh(this)
      else return !1
      break
    case 39:
      if (this.sg == rh) Sg(this) ? Qh(this) : Rh(this)
      else return !1
      break
    default:
      return !1
  }
  return !0
}
function Mh(a, b) {
  var c = b.G()
  c = c.id || (c.id = b.ga())
  a.qe || (a.qe = {})
  a.qe[c] = b
}
d.Vj = function (a, b) {
  Kh.o.Vj.call(this, a, b)
}
d.Yg = function (a, b, c) {
  a.sj |= 2
  a.sj |= 64
  ;(!this.mf() && this.Ot) || a.Uc(32, !1)
  a.ya && 0 != a.Ji && zh(a, !1)
  a.Ji = !1
  var e = a.getParent() == this ? Ug(this, a) : -1
  Kh.o.Yg.call(this, a, b, c)
  a.ya && this.ya && Mh(this, a)
  a = e
  ;-1 == a && (a = Rg(this))
  a == this.Ua
    ? (this.Ua = Math.min(Rg(this) - 1, b))
    : a > this.Ua && b <= this.Ua
    ? this.Ua++
    : a < this.Ua && b > this.Ua && this.Ua--
}
d.removeChild = function (a, b) {
  if ((a = u(a) ? Pg(this, a) : a)) {
    var c = Ug(this, a)
    ;-1 != c &&
      (c == this.Ua ? (a.Kc(!1), (this.Ua = -1)) : c < this.Ua && this.Ua--)
    var e = a.G()
    e && e.id && this.qe && ((c = this.qe), (e = e.id), e in c && delete c[e])
  }
  b = a = Kh.o.removeChild.call(this, a, b)
  b.ya && 1 != b.Ji && zh(b, !0)
  b.Ji = !0
  return a
}
d.setOrientation = function (a) {
  if (this.G()) throw Error('Component already rendered')
  this.sg = a
}
d.isVisible = function () {
  return this.Fa
}
d.la = function (a, b) {
  if (b || (this.Fa != a && this.dispatchEvent(a ? 'show' : 'hide'))) {
    this.Fa = a
    var c = this.G()
    c &&
      (Jf(c, a),
      this.mf() && qh(this.zb(), this.Vf && this.Fa),
      b || this.dispatchEvent(this.Fa ? 'aftershow' : 'afterhide'))
    return !0
  }
  return !1
}
d.isEnabled = function () {
  return this.Vf
}
d.nj = function (a) {
  this.Vf != a &&
    this.dispatchEvent(a ? 'enable' : 'disable') &&
    (a
      ? ((this.Vf = !0),
        Qg(this, function (b) {
          b.Ls ? delete b.Ls : b.nj(!0)
        }))
      : (Qg(this, function (b) {
          b.isEnabled() ? b.nj(!1) : (b.Ls = !0)
        }),
        (this.Dh = this.Vf = !1)),
    this.mf() && qh(this.zb(), a && this.Fa))
}
d.mf = function () {
  return this.Lm
}
d.Ef = function (a) {
  a != this.Lm && this.ya && Nh(this, a)
  this.Lm = a
  this.Vf && this.Fa && qh(this.zb(), a)
}
d.Mh = function (a) {
  ;(a = L(this, a)) ? a.Kc(!0) : -1 < this.Ua && L(this, this.Ua).Kc(!1)
}
d.Kc = function (a) {
  this.Mh(Ug(this, a))
}
function Oh(a) {
  Sh(
    a,
    function (b, c) {
      return (b + 1) % c
    },
    Rg(a) - 1
  )
}
function Ph(a) {
  Sh(
    a,
    function (b, c) {
      b--
      return 0 > b ? c - 1 : b
    },
    0
  )
}
function Rh(a) {
  Sh(
    a,
    function (b, c) {
      return (b + 1) % c
    },
    a.Ua
  )
}
function Qh(a) {
  Sh(
    a,
    function (b, c) {
      b--
      return 0 > b ? c - 1 : b
    },
    a.Ua
  )
}
function Sh(a, b, c) {
  c = 0 > c ? Ug(a, a.ub) : c
  var e = Rg(a)
  c = b.call(a, c, e)
  for (var f = 0; f <= e; ) {
    var h = L(a, c)
    if (h && a.Dp(h)) {
      a.Mh(c)
      break
    }
    f++
    c = b.call(a, c, e)
  }
}
d.Dp = function (a) {
  return a.isVisible() && a.isEnabled() && !!(a.mb & 2)
}
function Th() {}
w(Th, sh)
oa(Th)
Th.prototype.$b = function () {
  return 'goog-menuheader'
}
function Uh(a, b, c) {
  N.call(this, a, c || Th.cf(), b)
  this.Uc(1, !1)
  this.Uc(2, !1)
  this.Uc(4, !1)
  this.Uc(32, !1)
  this.Ja = 1
}
w(Uh, N)
nh('goog-menuheader', function () {
  return new Uh(null)
})
function Vh() {
  this.Ip = []
}
w(Vh, sh)
oa(Vh)
function Wh(a, b) {
  var c = a.Ip[b]
  if (!c) {
    switch (b) {
      case 0:
        c = a.$b() + '-highlight'
        break
      case 1:
        c = a.$b() + '-checkbox'
        break
      case 2:
        c = a.$b() + '-content'
    }
    a.Ip[b] = c
  }
  return c
}
d = Vh.prototype
d.xk = function () {
  return 'menuitem'
}
d.X = function (a) {
  var b = a.Pd().X('DIV', this.Bk(a).join(' '), Xh(this, a.bf(), a.Pd()))
  Yh(this, a, b, !!(a.mb & 8) || !!(a.mb & 16))
  return b
}
d.Sc = function (a) {
  return a && a.firstChild
}
d.$d = function (a, b) {
  var c = this.Sc(a),
    e = Zh(this, a) ? c.firstChild : null
  Vh.o.$d.call(this, a, b)
  e && !Zh(this, a) && c.insertBefore(e, c.firstChild || null)
}
function Xh(a, b, c) {
  a = Wh(a, 2)
  return c.X('DIV', a, b)
}
d.ns = function (a, b, c) {
  a && b && Yh(this, a, b, c)
}
d.oo = function (a, b, c) {
  a && b && Yh(this, a, b, c)
}
function Zh(a, b) {
  return (b = a.Sc(b))
    ? ((b = b.firstChild),
      (a = Wh(a, 1)),
      !!b && ta(b) && 1 == b.nodeType && ih(b, a))
    : !1
}
function Yh(a, b, c, e) {
  wh(a, c, b.Jk())
  xh(a, b, c)
  e != Zh(a, c) &&
    (e ? jh(c, 'goog-option') : lh(c, 'goog-option'),
    (c = a.Sc(c)),
    e
      ? ((a = Wh(a, 1)),
        c.insertBefore(b.Pd().X('DIV', a), c.firstChild || null))
      : c.removeChild(c.firstChild))
}
d.Ak = function (a) {
  switch (a) {
    case 2:
      return Wh(this, 0)
    case 16:
    case 8:
      return 'goog-option-selected'
    default:
      return Vh.o.Ak.call(this, a)
  }
}
d.$b = function () {
  return 'goog-menuitem'
}
function $h(a, b, c, e) {
  N.call(this, a, e || Vh.cf(), c)
  this.setValue(b)
}
w($h, N)
d = $h.prototype
d.getValue = function () {
  var a = this.An
  return null != a ? a : this.Om()
}
d.setValue = function (a) {
  this.An = a
}
d.Uc = function (a, b) {
  $h.o.Uc.call(this, a, b)
  switch (a) {
    case 8:
      this.Ja & 16 && !b && Ch(this, !1)
      ;(a = this.G()) && this.sa.ns(this, a, b)
      break
    case 16:
      ;(a = this.G()) && this.sa.oo(this, a, b)
  }
}
d.ns = function (a) {
  this.Uc(8, a)
}
d.oo = function (a) {
  this.Uc(16, a)
}
d.Om = function () {
  var a = this.bf()
  return qa(a)
    ? ((a = Ha(a, function (b) {
        return ta(b) &&
          1 == b.nodeType &&
          (ih(b, 'goog-menuitem-accel') ||
            ih(b, 'goog-menuitem-mnemonic-separator'))
          ? ''
          : Sc(b)
      }).join('')),
      Wb(a))
    : $h.o.Om.call(this)
}
d.ph = function (a) {
  var b = this.getParent()
  if (b) {
    var c = b.Mr
    b.Mr = null
    if (c && la(a.clientX) && vc(c, new B(a.clientX, a.clientY))) return
  }
  $h.o.ph.call(this, a)
}
d.Zf = function (a) {
  return a.keyCode == this.qr && Gh(this, a) ? !0 : $h.o.Zf.call(this, a)
}
d.gv = function () {
  return this.qr
}
nh('goog-menuitem', function () {
  return new $h(null)
})
$h.prototype.Jk = function () {
  return this.mb & 16
    ? 'menuitemcheckbox'
    : this.mb & 8
    ? 'menuitemradio'
    : $h.o.Jk.call(this)
}
$h.prototype.getParent = function () {
  return N.prototype.getParent.call(this)
}
$h.prototype.Ik = function () {
  return N.prototype.Ik.call(this)
}
function ai() {}
w(ai, sh)
oa(ai)
ai.prototype.X = function (a) {
  return a.Pd().X('DIV', this.$b())
}
ai.prototype.$d = function () {}
ai.prototype.$b = function () {
  return 'goog-menuseparator'
}
function bi(a, b) {
  N.call(this, null, a || ai.cf(), b)
  this.Uc(1, !1)
  this.Uc(2, !1)
  this.Uc(4, !1)
  this.Uc(32, !1)
  this.Ja = 1
}
w(bi, N)
bi.prototype.Lb = function () {
  bi.o.Lb.call(this)
  var a = this.G()
  Wg(a, 'separator')
}
nh('goog-menuseparator', function () {
  return new bi()
})
function ci(a) {
  this.xp = a || 'menu'
}
w(ci, ph)
oa(ci)
ci.prototype.$b = function () {
  return 'goog-menu'
}
ci.prototype.Ri = function (a) {
  ci.o.Ri.call(this, a)
  a = a.G()
  M(a, 'haspopup', 'true')
}
nh('goog-menuseparator', function () {
  return new bi()
})
function di(a, b) {
  Kh.call(this, Lh, b || ci.cf(), a)
  this.Ef(!1)
}
w(di, Kh)
d = di.prototype
d.Wj = !0
d.Pt = !1
d.$b = function () {
  return this.sa.$b()
}
d.removeItem = function (a) {
  ;(a = this.removeChild(a, !0)) && a.A()
}
d.setPosition = function (a, b) {
  var c = this.isVisible()
  c || Jf(this.G(), !0)
  var e = this.G(),
    f = a
  a = Ff(e)
  f instanceof B && ((b = f.y), (f = f.x))
  var h = e.offsetLeft + (f - a.x)
  h instanceof B
    ? ((f = h.x), (b = h.y))
    : ((f = h), (b = e.offsetTop + (Number(b) - a.y)))
  e.style.left = Gf(f)
  e.style.top = Gf(b)
  c || Jf(this.G(), !1)
}
d.Lq = function () {
  return this.isVisible() ? Ff(this.G()) : null
}
d.la = function (a, b, c) {
  ;(b = di.o.la.call(this, a, b)) &&
    a &&
    this.ya &&
    this.Wj &&
    this.zb().focus()
  this.Mr = a && c && la(c.clientX) ? new B(c.clientX, c.clientY) : null
  return b
}
d.Vm = function (a) {
  this.Wj && this.zb().focus()
  return di.o.Vm.call(this, a)
}
d.Dp = function (a) {
  return (this.Pt || a.isEnabled()) && a.isVisible() && !!(a.mb & 2)
}
d.Zf = function (a) {
  var b = di.o.Zf.call(this, a)
  b ||
    Qg(
      this,
      function (c) {
        !b &&
          c.gv &&
          c.qr == a.keyCode &&
          (this.isEnabled() && this.Kc(c), (b = c.td(a)))
      },
      this
    )
  return b
}
d.Mh = function (a) {
  di.o.Mh.call(this, a)
  if ((a = L(this, a))) {
    var b = a.G()
    a = this.G() || Hc(document)
    var c = a || Hc(document)
    var e = Ff(b),
      f = Ff(c)
    if (!y || 9 <= Number(qc)) {
      k = Cf(c, 'borderLeftWidth')
      var h = Cf(c, 'borderRightWidth')
      l = Cf(c, 'borderTopWidth')
      m = Cf(c, 'borderBottomWidth')
      h = new Af(parseFloat(l), parseFloat(h), parseFloat(m), parseFloat(k))
    } else {
      var k = Nf(c, 'borderLeft')
      h = Nf(c, 'borderRight')
      var l = Nf(c, 'borderTop'),
        m = Nf(c, 'borderBottom')
      h = new Af(l, h, m, k)
    }
    c == Hc(document)
      ? ((k = e.x - c.scrollLeft),
        (e = e.y - c.scrollTop),
        !y || 10 <= Number(qc) || ((k += h.left), (e += h.top)))
      : ((k = e.x - f.x - h.left), (e = e.y - f.y - h.top))
    b = If(b)
    f = c.clientHeight - b.height
    h = c.scrollLeft
    l = c.scrollTop
    h += Math.min(k, Math.max(k - (c.clientWidth - b.width), 0))
    l += Math.min(e, Math.max(e - f, 0))
    c = new B(h, l)
    a.scrollLeft = c.x
    a.scrollTop = c.y
  }
}
function ei(a, b) {
  'function' != typeof a && fi(a)
  this.mg = a
  this.Go = this.Rn = null
  a = this.mg
  if (Array.isArray(a)) {
    for (var c = !1, e = 0; e < a.length; e++) {
      var f = a[e][0]
      'string' == typeof f
        ? (a[e][0] = C.h.Qb(f))
        : (null != f.alt && (a[e][0].alt = C.h.Qb(f.alt)), (c = !0))
    }
    if (!(c || 2 > a.length)) {
      f = []
      for (e = 0; e < a.length; e++) f.push(a[e][0])
      var h = C.h.xo(f)
      e = C.h.pu(f, h)
      c = C.h.qu(f, h)
      if ((e || c) && !(h <= e + c)) {
        e && (this.Rn = f[0].substring(0, e - 1))
        c && (this.Go = f[0].substr(1 - c))
        f = []
        for (h = 0; h < a.length; h++) {
          var k = a[h][0],
            l = a[h][1]
          k = k.substring(e, k.length - c)
          f[h] = [k, l]
        }
        this.mg = f
      }
    }
  }
  a = this.getOptions()[0]
  ei.o.constructor.call(this, a[1], b)
}
w(ei, Of)
ei.Y = function (a) {
  return new ei(a.options)
}
ei.prototype.Ue = !0
var gi = hc ? '\u25bc' : '\u25be'
d = ei.prototype
d.Oj = 'default'
d.Ib = ''
d.bc = null
d.Td = null
d.Z = function () {
  this.Ra ||
    ((this.We = C.h.B('tspan', {}, null)),
    this.We.appendChild(
      document.createTextNode(this.v.s ? gi + ' ' : ' ' + gi)
    ),
    ei.o.Z.call(this))
}
d.Ff = function () {
  C.H.show(this, this.v.s, null)
  var a = new di()
  a.Je(this.v.s)
  for (var b = this.getOptions(), c = 0; c < b.length; c++) {
    var e = b[c][0],
      f = b[c][1]
    if ('object' == typeof e) {
      var h = new Image(e.width, e.height)
      h.src = e.src
      h.alt = e.alt || ''
      e = h
    }
    e = new $h(e)
    e.Je(this.v.s)
    e.setValue(f)
    e.oo(!0)
    a.Vj(e, !0)
    Ch(e, f == this.Ib)
  }
  hi(this, a)
  b = C.h.Mq()
  c = Vf(this)
  this.v.s ? (c.right += 25) : (c.left -= 25)
  this.pi(a)
  f = C.h.Th.Di(a)
  e = 0.45 * document.documentElement.clientHeight
  f.height > e && (f.height = e)
  this.v.s && C.h.Th.up(b, c, f)
  C.H.Rr(b, c, f, this.v.s)
  a.G().focus()
}
function hi(a, b) {
  sg(b, 'action', function (c) {
    ;(c = c.target) && a.Gr(c)
    C.H.Mi(a)
    C.i.K(!1)
  })
}
d.pi = function (a) {
  a.$(C.H.ba)
  C.h.Ha(a.G(), 'blocklyDropdownMenu')
  a.Wj = !0
  a.Ef(!0)
}
d.Gr = function (a) {
  a = a.getValue()
  this.v && (a = md(this, a))
  null !== a && this.setValue(a)
}
d.getOptions = function () {
  if ('function' == typeof this.mg) {
    var a = this.mg.call(this)
    fi(a)
    return a
  }
  return this.mg
}
d.getValue = function () {
  return this.Ib
}
d.setValue = function (a) {
  if (!(null === a || (a === this.Ib && this.oa))) {
    this.v &&
      C.i.isEnabled() &&
      C.i.M(new C.i.zc(this.v, 'field', this.name, this.Ib, a))
    this.Ib = a
    for (var b = this.getOptions(), c = 0; c < b.length; c++)
      if (b[c][1] == a) {
        a = b[c][0]
        'object' == typeof a
          ? ((this.Td = a), (this.oa = a.alt))
          : ((this.Td = null), (this.oa = a))
        this.yi()
        return
      }
    this.oa = a
    this.yi()
  }
}
d.Ge = function () {
  if (this.Fa) {
    this.v && this.We && (this.We.style.fill = this.v.ed)
    for (var a; (a = this.ua.firstChild); ) this.ua.removeChild(a)
    this.bc && (C.h.removeNode(this.bc), (this.bc = null))
    this.Td
      ? ((this.bc = C.h.B(
          'image',
          { y: 5, height: this.Td.height + 'px', width: this.Td.width + 'px' },
          this.Ra
        )),
        this.bc.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'xlink:href',
          this.Td.src
        ),
        this.ua.appendChild(this.We),
        (a = Uf(this.We)),
        (this.eb.height = Number(this.Td.height) + 19),
        (this.eb.width = Number(this.Td.width) + a),
        this.v.s
          ? (this.bc.setAttribute('x', a), this.ua.setAttribute('x', -1))
          : (this.ua.setAttribute('text-anchor', 'end'),
            this.ua.setAttribute('x', this.eb.width + 1)))
      : ((a = document.createTextNode(Tf(this))),
        this.ua.appendChild(a),
        this.v.s
          ? this.ua.insertBefore(this.We, this.ua.firstChild)
          : this.ua.appendChild(this.We),
        this.ua.setAttribute('text-anchor', 'start'),
        this.ua.setAttribute('x', 0),
        (this.eb.height = 25),
        (this.eb.width = Uf(this.ua)))
    this.Oc.setAttribute('height', this.eb.height - 9)
    this.Oc.setAttribute('width', this.eb.width + 10)
  } else this.eb.width = 0
}
d.Vh = function () {
  if (this.Td && (y || ec)) {
    var a = Uf(this.We)
    a = Number(this.Td.width) + a + 10
    this.Oc && this.Oc.setAttribute('width', a)
    this.eb.width = a
  } else Of.prototype.Vh.call(this)
}
d.A = function () {
  C.H.Mi(this)
  ei.o.A.call(this)
}
function fi(a) {
  if (!Array.isArray(a))
    throw TypeError('FieldDropdown options must be an array.')
  for (var b = !1, c = 0; c < a.length; ++c) {
    var e = a[c]
    Array.isArray(e)
      ? 'string' != typeof e[1]
        ? ((b = !0),
          console.error(
            'Invalid option[' +
              c +
              ']: Each FieldDropdown option id must be a string. Found ' +
              e[1] +
              ' in: ',
            e
          ))
        : 'string' != typeof e[0] &&
          'string' != typeof e[0].src &&
          ((b = !0),
          console.error(
            'Invalid option[' +
              c +
              ']: Each FieldDropdown option must have a string label or image description. Found' +
              e[0] +
              ' in: ',
            e
          ))
      : ((b = !0),
        console.error(
          'Invalid option[' +
            c +
            ']: Each FieldDropdown option must be an array. Found: ',
          e
        ))
  }
  if (b) throw TypeError('Found invalid FieldDropdown options.')
}
Qf('field_dropdown', ei)
// Copyright 2013 Google Inc.  Apache License 2.0
C.hb = Object(null)
function ii(a) {
  this.N = a
}
d = ii.prototype
d.Mp = !0
d.Wl = 17
d.Ta = null
d.uh = null
function ji(a) {
  a.rc ||
    ((a.rc = C.h.B('g', { class: 'blocklyIconGroup' }, null)),
    a.N.Gc && C.h.Ha(a.rc, 'blocklyIconGroupReadonly'),
    a.Em(a.rc),
    a.N.R().appendChild(a.rc),
    C.J(a.rc, 'mouseup', a, a.cn),
    a.Pe())
}
d.A = function () {
  C.h.removeNode(this.rc)
  this.rc = null
  this.la(!1)
  this.N = null
}
d.Pe = function () {}
d.isVisible = function () {
  return !!this.Ta
}
d.cn = function (a) {
  this.N.m.cc() || this.N.Gc || C.h.pf(a) || this.la(!this.isVisible())
}
d.Oe = function () {
  this.isVisible() && this.Ta.Bd(this.N.ed)
}
function me(a, b) {
  a.uh = b
  a.isVisible() && ((a = a.Ta), (a.ib = b), a.wg && Qe(a))
}
function ki(a) {
  var b = a.N.qa(),
    c = C.h.oc(a.rc)
  b = new B(b.x + c.x + a.Wl / 2, b.y + c.y + a.Wl / 2)
  vc(a.uh, b) || me(a, b)
}
function li(a) {
  li.o.constructor.call(this, a)
  ji(this)
}
w(li, ii)
d = li.prototype
d.oa = ''
d.W = 160
d.ka = 80
d.Em = function (a) {
  C.h.B('circle', { class: 'blocklyIconShape', r: '8', cx: '8', cy: '8' }, a)
  C.h.B(
    'path',
    {
      class: 'blocklyIconSymbol',
      d: 'm6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z'
    },
    a
  )
  C.h.B(
    'rect',
    {
      class: 'blocklyIconSymbol',
      x: '6.8',
      y: '10.78',
      height: '2',
      width: '2'
    },
    a
  )
}
d.oi = function () {
  this.Rc = C.h.B('foreignObject', { x: Re, y: Re }, null)
  var a = document.createElementNS(C.Re, 'body')
  a.setAttribute('xmlns', C.Re)
  a.className = 'blocklyMinimalBody'
  var b = document.createElementNS(C.Re, 'textarea')
  b.className = 'blocklyCommentTextarea'
  b.setAttribute('dir', this.N.s ? 'RTL' : 'LTR')
  a.appendChild(b)
  this.fb = b
  this.Rc.appendChild(a)
  C.J(b, 'mouseup', this, this.Tw, !0, !0)
  C.J(b, 'wheel', this, function (c) {
    c.stopPropagation()
  })
  C.J(b, 'change', this, function () {
    this.oa != b.value &&
      (C.i.M(new C.i.zc(this.N, 'comment', null, this.oa, b.value)),
      (this.oa = b.value))
  })
  setTimeout(function () {
    b.focus()
  }, 0)
  return this.Rc
}
d.Pe = function () {
  this.isVisible() && (this.la(!1), this.la(!0))
  ii.prototype.Pe.call(this)
}
d.yl = function () {
  if (this.isVisible()) {
    var a = this.Ta.Wf(),
      b = 2 * Re
    this.Rc.setAttribute('width', a.width - b)
    this.Rc.setAttribute('height', a.height - b)
    this.fb.style.width = a.width - b - 4 + 'px'
    this.fb.style.height = a.height - b - 4 + 'px'
  }
}
d.la = function (a) {
  if (a != this.isVisible())
    if (
      (C.i.M(new F(this.N, 'commentOpen', !a, a)),
      (!vd(this.N) && !this.fb) || y)
    )
      mi.prototype.la.call(this, a)
    else {
      var b = this.Ab(),
        c = this.Wf()
      a
        ? ((this.Ta = new Oe(
            this.N.m,
            this.oi(),
            this.N.vc,
            this.uh,
            this.W,
            this.ka
          )),
          Xe(this.Ta, this.N.id),
          (a = this.yl.bind(this)),
          (this.Ta.$n = a),
          this.Oe())
        : (this.Ta.A(), (this.Rc = this.fb = this.Ta = null))
      this.cb(b)
      this.Bf(c.width, c.height)
    }
}
d.Tw = function () {
  Ze(this.Ta) && this.fb.focus()
}
d.Wf = function () {
  return this.isVisible() ? this.Ta.Wf() : { width: this.W, height: this.ka }
}
d.Bf = function (a, b) {
  this.fb ? this.Ta.Bf(a, b) : ((this.W = a), (this.ka = b))
}
d.Ab = function () {
  return this.fb ? this.fb.value : this.oa
}
d.cb = function (a) {
  this.oa != a &&
    (C.i.M(new C.i.zc(this.N, 'comment', null, this.oa, a)), (this.oa = a))
  this.fb && (this.fb.value = a)
}
d.A = function () {
  C.i.isEnabled() && this.cb('')
  this.N.Ka = null
  ii.prototype.A.call(this)
}
function ni() {
  this.kb = []
}
function Ud(a, b) {
  if (b.gf) throw Error('Connection already in database.')
  b.v.Gc || (a.kb.splice(Zd(a, b), 0, b), (b.gf = !0))
}
function oi(a, b) {
  if (!a.kb.length) return -1
  var c = Zd(a, b)
  if (c >= a.kb.length) return -1
  for (var e = b.za, f = c; 0 <= f && a.kb[f].za == e; ) {
    if (a.kb[f] == b) return f
    f--
  }
  for (; c < a.kb.length && a.kb[c].za == e; ) {
    if (a.kb[c] == b) return c
    c++
  }
  return -1
}
function Zd(a, b) {
  if (!a.kb.length) return 0
  for (var c = 0, e = a.kb.length; c < e; ) {
    var f = Math.floor((c + e) / 2)
    if (a.kb[f].za < b.za) c = f + 1
    else if (a.kb[f].za > b.za) e = f
    else {
      c = f
      break
    }
  }
  return c
}
function Nd(a, b) {
  if (!b.gf) throw Error('Connection not in database.')
  var c = oi(a, b)
  if (-1 == c) throw Error('Unable to find connection in connectionDB.')
  b.gf = !1
  a.kb.splice(c, 1)
}
function ee(a, b, c) {
  function e(n) {
    var p = h - f[n].pb,
      t = k - f[n].za
    Math.sqrt(p * p + t * t) <= c && m.push(f[n])
    return t < c
  }
  var f = a.kb,
    h = b.pb,
    k = b.za
  a = 0
  for (var l = (b = f.length - 2); a < l; )
    f[l].za < k ? (a = l) : (b = l), (l = Math.floor((a + b) / 2))
  var m = []
  b = a = l
  if (f.length) {
    for (; 0 <= a && e(a); ) a--
    do b++
    while (b < f.length && e(b))
  }
  return m
}
function pi(a, b) {
  this.mh = a
  this.Co = b.spacing
  this.kr = b.length
  this.Qv = (this.un = a.firstChild) && this.un.nextSibling
  this.Jw = b.snap
}
pi.prototype.Af = 1
pi.prototype.A = function () {
  this.mh = null
}
pi.prototype.update = function (a) {
  this.Af = a
  var b = this.Co * a || 100
  this.mh.setAttribute('width', b)
  this.mh.setAttribute('height', b)
  b = Math.floor(this.Co / 2) + 0.5
  var c = b - this.kr / 2,
    e = b + this.kr / 2
  b *= a
  c *= a
  e *= a
  qi(this.un, a, c, e, b, b)
  qi(this.Qv, a, b, b, c, e)
}
function qi(a, b, c, e, f, h) {
  a &&
    (a.setAttribute('stroke-width', b),
    a.setAttribute('x1', c),
    a.setAttribute('y1', f),
    a.setAttribute('x2', e),
    a.setAttribute('y2', h))
}
pi.prototype.moveTo = function (a, b) {
  this.mh.setAttribute('x', a)
  this.mh.setAttribute('y', b)
  ;(y || ec) && this.update(this.Af)
}
C.op = {}
C.op.Ws = new (function () {
  this.Xt = {
    colour_blocks: { colourPrimary: '20' },
    list_blocks: { colourPrimary: '260' },
    logic_blocks: { colourPrimary: '210' },
    loop_blocks: { colourPrimary: '120' },
    math_blocks: { colourPrimary: '230' },
    procedure_blocks: { colourPrimary: '290' },
    text_blocks: { colourPrimary: '160' },
    variable_blocks: { colourPrimary: '330' },
    variable_dynamic_blocks: { colourPrimary: '310' },
    hat_blocks: { colourPrimary: '330', hat: 'cap' }
  }
  this.au = {
    colour_category: { colour: '20' },
    list_category: { colour: '260' },
    logic_category: { colour: '210' },
    loop_category: { colour: '120' },
    math_category: { colour: '230' },
    procedure_category: { colour: '290' },
    text_category: { colour: '160' },
    variable_category: { colour: '330' },
    variable_dynamic_category: { colour: '310' }
  }
})()
function ri(a) {
  var b = !!a.readOnly
  if (b)
    var c = null,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      l = !1,
      m = !1
  else {
    c = si(a.toolbox)
    e = !(!c || !c.getElementsByTagName('category').length)
    f = a.trashcan
    void 0 === f && (f = e)
    var n = a.maxTrashcanContents
    f ? void 0 === n && (n = 32) : (n = 0)
    h = a.collapse
    void 0 === h && (h = e)
    k = a.comments
    void 0 === k && (k = e)
    l = a.disable
    void 0 === l && (l = e)
    m = a.sounds
    void 0 === m && (m = !0)
  }
  var p = !!a.rtl,
    t = a.horizontalLayout
  void 0 === t && (t = !1)
  var r = a.toolboxPosition
  r = 'end' === r ? !1 : !0
  r = t ? (r ? C.ic : C.Ve) : r == p ? C.Gd : C.Bc
  var q = a.css
  void 0 === q && (q = !0)
  var v = 'https://blockly-demo.appspot.com/static/media/'
  a.media ? (v = a.media) : a.path && (v = a.path + 'media/')
  var D = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    K = a.theme || C.op.Ws
  this.s = p
  this.vf = D
  this.collapse = h
  this.ou = k
  this.disable = l
  this.readOnly = b
  this.yn = a.maxBlocks || Infinity
  this.zn = a.maxInstances
  this.zd = v
  this.Rq = e
  b = a.move || {}
  h = {}
  h.scrollbars =
    void 0 === b.scrollbars && void 0 === a.scrollbars
      ? e
      : !!b.scrollbars || !!a.scrollbars
  h.Pg = h.scrollbars && void 0 !== b.wheel ? !!b.wheel : !1
  h.Tf = h.scrollbars ? (void 0 === b.drag ? !0 : !!b.drag) : !1
  this.Db = h
  this.Tq = f
  this.Ch = n
  this.Av = m
  this.zv = q
  this.Fc = t
  this.Wd = c
  c = a.grid || {}
  e = {}
  e.spacing = parseFloat(c.spacing) || 0
  e.Np = c.colour || '#888'
  e.length = parseFloat(c.length) || 1
  e.Gy = 0 < e.spacing && !!c.snap
  this.Nq = e
  a = a.zoom || {}
  c = {}
  c.controls = void 0 === a.controls ? !1 : !!a.controls
  c.Pg = void 0 === a.wheel ? !1 : !!a.wheel
  c.vs = void 0 === a.startScale ? 1 : parseFloat(a.startScale)
  c.bj = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale)
  c.cj = void 0 === a.minScale ? 0.3 : parseFloat(a.minScale)
  c.Fw = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed)
  this.Ma = c
  this.aa = r
  this.Uw = K
}
ri.prototype.Jc = null
ri.prototype.Ie = null
ri.prototype.ab = null
function si(a) {
  a
    ? ('string' != typeof a &&
        ('undefined' == typeof XSLTProcessor && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      'string' == typeof a && (a = C.u.Lc(a)))
    : (a = null)
  return a
}
function ti(a) {
  this.j = a
  this.Tc = new ui(a, !0, !0, 'blocklyMainWorkspaceScrollbar')
  this.Zc = new ui(a, !1, !0, 'blocklyMainWorkspaceScrollbar')
  this.mi = C.h.B(
    'rect',
    { height: J, width: J, class: 'blocklyScrollbarBackground' },
    null
  )
  C.h.hg(this.mi, a.Xc)
}
ti.prototype.Sa = null
ti.prototype.A = function () {
  C.h.removeNode(this.mi)
  this.Sa = this.j = this.mi = null
  this.Tc.A()
  this.Tc = null
  this.Zc.A()
  this.Zc = null
}
ti.prototype.resize = function () {
  var a = this.j.ab()
  if (a) {
    var b = !1,
      c = !1
    this.Sa &&
    this.Sa.xa == a.xa &&
    this.Sa.Ba == a.Ba &&
    this.Sa.Za == a.Za &&
    this.Sa.Ya == a.Ya
      ? ((this.Sa &&
          this.Sa.Dc == a.Dc &&
          this.Sa.Va == a.Va &&
          this.Sa.Kb == a.Kb) ||
          (b = !0),
        (this.Sa &&
          this.Sa.lc == a.lc &&
          this.Sa.gb == a.gb &&
          this.Sa.yb == a.yb) ||
          (c = !0))
      : (c = b = !0)
    b && this.Tc.resize(a)
    c && this.Zc.resize(a)
    ;(this.Sa && this.Sa.xa == a.xa && this.Sa.Ya == a.Ya) ||
      this.mi.setAttribute('x', this.Zc.ec.x)
    ;(this.Sa && this.Sa.Ba == a.Ba && this.Sa.Za == a.Za) ||
      this.mi.setAttribute('y', this.Tc.ec.y)
    this.Sa = a
  }
}
ti.prototype.set = function (a, b) {
  var c = {}
  a *= this.Tc.Eb
  b *= this.Zc.Eb
  var e = this.Zc.od,
    f = a / this.Tc.od
  c.x = isNaN(f) ? 0 : f
  e = b / e
  c.y = isNaN(e) ? 0 : e
  this.j.Ie(c)
  vi(this.Tc, a)
  vi(this.Zc, b)
}
function ui(a, b, c, e) {
  this.j = a
  this.Eh = c || !1
  this.eg = b
  this.Sa = null
  this.ni(e)
  this.ec = new B(0, 0)
  a = J
  b
    ? (this.Wc.setAttribute('height', a),
      this.Xd.setAttribute('height', a),
      this.ge.setAttribute('height', a - 5),
      this.ge.setAttribute('y', 2.5),
      (this.Xi = 'width'),
      (this.Pr = 'x'))
    : (this.Wc.setAttribute('width', a),
      this.Xd.setAttribute('width', a),
      this.ge.setAttribute('width', a - 5),
      this.ge.setAttribute('x', 2.5),
      (this.Xi = 'height'),
      (this.Pr = 'y'))
  this.Ir = C.J(this.Wc, 'mousedown', this, this.ow)
  this.Jr = C.J(this.ge, 'mousedown', this, this.pw)
}
var wi, xi
d = ui.prototype
d.Ln = new B(0, 0)
d.us = 0
d.od = 0
d.ff = 0
d.Li = 0
d.qf = !0
d.Pf = !0
var J = 15
ve && (J = 25)
ui.prototype.A = function () {
  yi()
  C.wa(this.Ir)
  this.Ir = null
  C.wa(this.Jr)
  this.Jr = null
  C.h.removeNode(this.Xd)
  this.j = this.ge = this.Wc = this.w = this.Xd = null
}
function vi(a, b) {
  a.Li = b
  a.ge.setAttribute(a.Pr, a.Li)
}
function zi(a, b) {
  a.od = b
  a.Xd.setAttribute(a.Xi, a.od)
  a.Wc.setAttribute(a.Xi, a.od)
}
ti.prototype.yg = function (a) {
  this.Tc.yg(a)
  this.Zc.yg(a)
}
function Ai(a, b, c) {
  a.ec.x = b
  a.ec.y = c
  C.h.lj(
    a.Xd,
    'translate(' + (a.ec.x + a.Ln.x) + 'px,' + (a.ec.y + a.Ln.y) + 'px)'
  )
}
d = ui.prototype
d.resize = function (a) {
  if (!a && ((a = this.j.ab()), !a)) return
  var b = this.Sa
  ;(a &&
    b &&
    a.xa == b.xa &&
    a.Ba == b.Ba &&
    a.Va == b.Va &&
    a.gb == b.gb &&
    a.Za == b.Za &&
    a.Ya == b.Ya &&
    a.Dc == b.Dc &&
    a.lc == b.lc &&
    a.Kb == b.Kb &&
    a.yb == b.yb) ||
    ((this.Sa = a), this.eg ? Bi(this, a) : Ci(this, a), Di(this))
}
function Bi(a, b) {
  var c = b.xa - 1
  a.Eh && (c -= J)
  zi(a, Math.max(0, c))
  c = b.Ya + 0.5
  a.Eh && a.j.s && (c += J)
  Ai(a, c, b.Za + b.Ba - J - 0.5)
  Ei(a, b)
}
function Ei(a, b) {
  a.Eh || a.la(a.od < b.Dc)
  a.Eb = a.od / b.Dc
  if (-Infinity == a.Eb || Infinity == a.Eb || isNaN(a.Eb)) a.Eb = 0
  a.ff = Math.max(0, b.xa * a.Eb)
  a.ge.setAttribute(a.Xi, a.ff)
  vi(a, Fi(a, (b.Va - b.Kb) * a.Eb))
}
function Ci(a, b) {
  var c = b.Ba - 1
  a.Eh && (c -= J)
  zi(a, Math.max(0, c))
  c = b.Ya + 0.5
  a.j.s || (c += b.xa - J - 1)
  Ai(a, c, b.Za + 0.5)
  Gi(a, b)
}
function Gi(a, b) {
  a.Eh || a.la(a.od < b.lc)
  a.Eb = a.od / b.lc
  if (-Infinity == a.Eb || Infinity == a.Eb || isNaN(a.Eb)) a.Eb = 0
  a.ff = Math.max(0, b.Ba * a.Eb)
  a.ge.setAttribute(a.Xi, a.ff)
  vi(a, Fi(a, (b.gb - b.yb) * a.Eb))
}
d.ni = function (a) {
  var b = 'blocklyScrollbar' + (this.eg ? 'Horizontal' : 'Vertical')
  a && (b += ' ' + a)
  this.Xd = C.h.B('svg', { class: b }, null)
  this.w = C.h.B('g', {}, this.Xd)
  this.Wc = C.h.B('rect', { class: 'blocklyScrollbarBackground' }, this.w)
  a = Math.floor((J - 5) / 2)
  this.ge = C.h.B(
    'rect',
    { class: 'blocklyScrollbarHandle', rx: a, ry: a },
    this.w
  )
  C.h.hg(this.Xd, H(this.j))
}
d.isVisible = function () {
  return this.qf
}
d.yg = function (a) {
  var b = a != this.Pf
  this.Pf = a
  b && this.Dj()
}
d.la = function (a) {
  var b = a != this.isVisible()
  if (this.Eh) throw Error('Unable to toggle visibility of paired scrollbars.')
  this.qf = a
  b && this.Dj()
}
d.Dj = function () {
  this.Pf && this.isVisible()
    ? this.Xd.setAttribute('display', 'block')
    : this.Xd.setAttribute('display', 'none')
}
d.ow = function (a) {
  rf(this.j)
  C.Touch.re()
  yi()
  if (C.h.pf(a)) a.stopPropagation()
  else {
    var b = C.h.dj(a, H(this.j), Hi(this.j))
    b = this.eg ? b.x : b.y
    var c = C.h.Fk(this.ge)
    c = this.eg ? c.x : c.y
    var e = this.Li,
      f = 0.95 * this.ff
    b <= c ? (e -= f) : b >= c + this.ff && (e += f)
    vi(this, Fi(this, e))
    Di(this)
    a.stopPropagation()
    a.preventDefault()
  }
}
d.pw = function (a) {
  rf(this.j)
  yi()
  C.h.pf(a)
    ? a.stopPropagation()
    : ((this.Mw = this.Li),
      kf(this.j),
      (this.us = this.eg ? a.clientX : a.clientY),
      (wi = C.J(document, 'mouseup', this, this.uw)),
      (xi = C.J(document, 'mousemove', this, this.qw)),
      a.stopPropagation(),
      a.preventDefault())
}
d.qw = function (a) {
  vi(this, Fi(this, this.Mw + ((this.eg ? a.clientX : a.clientY) - this.us)))
  Di(this)
}
d.uw = function () {
  sf(this.j)
  C.Touch.re()
  yi()
}
function yi() {
  C.Nb(!0)
  wi && (C.wa(wi), (wi = null))
  xi && (C.wa(xi), (xi = null))
}
function Fi(a, b) {
  return (b = 0 >= b || isNaN(b) || a.od < a.ff ? 0 : Math.min(b, a.od - a.ff))
}
function Di(a) {
  var b = a.Li / a.od
  isNaN(b) && (b = 0)
  var c = {}
  a.eg ? (c.x = b) : (c.y = b)
  a.j.Ie(c)
}
d.set = function (a) {
  vi(this, Fi(this, a * this.Eb))
  Di(this)
}
function Ii(a, b) {
  Ii.o.constructor.call(this, a, b)
  this.Vk = !1
  this.dd = {}
  this.ts = this.ij = 0
  this.Kn = null
}
w(Ii, mf)
d = Ii.prototype
d.Cm = function (a) {
  Ii.o.Cm.call(this, a)
  !this.Uk && C.Touch.Yk(a) && Ji(this, a)
}
d.Of = function (a) {
  this.Kn = C.J(document, 'mousedown', null, this.wv.bind(this), !0)
  this.ol = C.J(document, 'mousemove', null, this.Ki.bind(this), !0)
  this.ql = C.J(document, 'mouseup', null, this.Ok.bind(this), !0)
  a.preventDefault()
  a.stopPropagation()
}
d.wv = function (a) {
  !this.cc() && C.Touch.Yk(a) && (Ji(this, a), this.Vk && C.sf())
}
d.Ki = function (a) {
  if (this.cc()) C.Touch.zo(a) && Ii.o.Ki.call(this, a)
  else if (this.Vk) {
    if (C.Touch.Yk(a)) {
      this.dd[C.Touch.Lk(a)] = Ki(this, a)
      var b = Object.keys(this.dd)
      if (2 == b.length) {
        b = wc(this.dd[b[0]], this.dd[b[1]]) / this.ts
        if (0 < this.ij && Infinity > this.ij) {
          var c = b - this.ij
          c = 0 < c ? 5 * c : 6 * c
          var e = this.wb,
            f = C.h.dj(a, H(e), Hi(e))
          e.zoom(f.x, f.y, c)
        }
        this.ij = b
        a.preventDefault()
      }
    }
    C.sf()
  } else Ii.o.Ki.call(this, a)
}
d.Ok = function (a) {
  if (C.Touch.Yk(a) && !this.cc()) {
    var b = C.Touch.Lk(a)
    this.dd[b] && delete this.dd[b]
    2 > Object.keys(this.dd).length && ((this.dd = {}), (this.ij = 0))
  }
  !this.Vk || this.cc()
    ? C.Touch.zo(a) && Ii.o.Ok.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.A())
}
d.A = function () {
  Ii.o.A.call(this)
  this.Kn && C.wa(this.Kn)
}
function Ji(a, b) {
  a.dd[C.Touch.Lk(b)] = Ki(a, b)
  var c = Object.keys(a.dd)
  2 == c.length &&
    ((a.ts = wc(a.dd[c[0]], a.dd[c[1]])), (a.Vk = !0), b.preventDefault())
}
function Ki(a, b) {
  return a.wb
    ? new B(
        b.pageX ? b.pageX : b.changedTouches[0].pageX,
        b.pageY ? b.pageY : b.changedTouches[0].pageY
      )
    : null
}
function Li(a) {
  this.j = a
  this.Zm = !1
  this.bh = []
  0 >= this.j.options.Ch ||
    ((a = {
      scrollbars: !0,
      te: this.j.options.te,
      Jc: this.j,
      s: this.j.s,
      vf: this.j.options.vf
    }),
    this.j.Fc
      ? ((a.aa = this.j.aa == C.ic ? C.Ve : C.ic), (this.F = new Mi(a)))
      : ((a.aa = this.j.aa == C.Gd ? C.Bc : C.Gd), (this.F = new Ni(a))),
    this.j.jc(Oi(this)))
}
d = Li.prototype
d.Nf = 47
d.Ij = 44
d.Tg = 16
d.Ul = 20
d.ai = 20
d.Pj = 10
d.Xl = 0
d.Yl = 32
d.ft = 0.1
d.yh = !1
d.fl = 0
d.w = null
d.Gl = null
d.tn = 0
d.rf = 0
d.Wi = 0
d.Sh = 0
d.X = function () {
  this.w = C.h.B('g', { class: 'blocklyTrash' }, null)
  var a = String(Math.random()).substring(2)
  var b = C.h.B('clipPath', { id: 'blocklyTrashBodyClipPath' + a }, this.w)
  C.h.B('rect', { width: this.Nf, height: this.Ij, y: this.Tg }, b)
  var c = C.h.B(
    'image',
    {
      width: C.hc.width,
      x: -this.Xl,
      height: C.hc.height,
      y: -this.Yl,
      'clip-path': 'url(#blocklyTrashBodyClipPath' + a + ')'
    },
    this.w
  )
  c.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    this.j.options.zd + C.hc.url
  )
  b = C.h.B('clipPath', { id: 'blocklyTrashLidClipPath' + a }, this.w)
  C.h.B('rect', { width: this.Nf, height: this.Tg }, b)
  this.Gl = C.h.B(
    'image',
    {
      width: C.hc.width,
      x: -this.Xl,
      height: C.hc.height,
      y: -this.Yl,
      'clip-path': 'url(#blocklyTrashLidClipPath' + a + ')'
    },
    this.w
  )
  this.Gl.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    this.j.options.zd + C.hc.url
  )
  C.J(this.w, 'mouseup', this, this.click)
  C.$a(c, 'mouseover', this, this.Zv)
  C.$a(c, 'mouseout', this, this.Yv)
  this.am()
  return this.w
}
d.Z = function (a) {
  0 < this.j.options.Ch &&
    (C.h.hg(this.F.X('svg'), H(this.j)),
    this.F.Z(this.j),
    (this.F.cr = function () {
      return !0
    }))
  this.Qe = this.Ul + a
  oe(this, !1)
  return this.Qe + this.Ij + this.Tg
}
d.A = function () {
  this.w && (C.h.removeNode(this.w), (this.w = null))
  this.j = this.Gl = null
  clearTimeout(this.tn)
}
d.position = function () {
  if (this.Qe) {
    var a = this.j.ab()
    a &&
      ((this.Wi =
        a.aa == C.Bc || (this.j.Fc && !this.j.s)
          ? a.xa + a.Ya - this.Nf - this.ai - J
          : this.ai + J),
      (this.Sh =
        a.aa == C.Ve ? this.Qe : a.Ba + a.Za - (this.Ij + this.Tg) - this.Qe),
      this.w.setAttribute(
        'transform',
        'translate(' + this.Wi + ',' + this.Sh + ')'
      ))
  }
}
d.ih = function () {
  if (!this.w) return null
  var a = this.w.getBoundingClientRect()
  return new Bf(
    a.left + this.Xl - this.Pj,
    a.top + this.Yl - this.Pj,
    this.Nf + 2 * this.Pj,
    this.Tg + this.Ij + 2 * this.Pj
  )
}
function oe(a, b) {
  a.yh != b && (clearTimeout(a.tn), (a.yh = b), a.am())
}
d.am = function () {
  this.rf += this.yh ? 0.2 : -0.2
  this.rf = Math.min(Math.max(this.rf, this.fl), 1)
  Pi(this, 45 * this.rf)
  this.w.style.opacity = 0.4 + 0.4 * this.rf
  this.rf > this.fl &&
    1 > this.rf &&
    (this.tn = setTimeout(this.am.bind(this), 20))
}
function Pi(a, b) {
  var c = a.j.aa == C.Gd || (a.j.Fc && a.j.s)
  a.Gl.setAttribute(
    'transform',
    'rotate(' + (c ? -b : b) + ',' + (c ? 4 : a.Nf - 4) + ',' + (a.Tg - 2) + ')'
  )
}
d.close = function () {
  oe(this, !1)
}
d.click = function () {
  if (this.Zm) {
    for (var a = [], b = 0, c; (c = this.bh[b]); b++)
      a[b] = C.u.Lc(c).firstChild
    this.F.show(a)
  }
}
d.Zv = function () {
  this.Zm && oe(this, !0)
}
d.Yv = function () {
  oe(this, !1)
}
function Oi(a) {
  return function (b) {
    if (!(0 >= a.j.options.Ch) && b.type == C.i.Qs) {
      for (var c = (b = b.Cr.cloneNode(!0)); c; ) {
        c.removeAttribute &&
          (c.removeAttribute('x'),
          c.removeAttribute('y'),
          c.removeAttribute('id'))
        var e = c.firstChild || c.nextSibling
        if (!e)
          for (e = c.parentNode; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling
              break
            }
            e = e.parentNode
          }
        c = e
      }
      b = '<xml>' + C.u.Zb(b) + '</xml>'
      ;-1 == a.bh.indexOf(b) &&
        (a.bh.unshift(b),
        a.bh.length > a.j.options.Ch &&
          a.bh.splice(a.j.options.Ch, a.bh.length - a.j.options.Ch),
        (a.Zm = !0),
        (a.fl = a.ft),
        Pi(a, 45 * a.fl))
    }
  }
}
function De(a, b, c, e) {
  this.m = a
  this.name = b
  this.type = c || ''
  this.vh = e || C.h.Od()
  C.i.M(new ad(this))
}
De.prototype.ga = function () {
  return this.vh
}
function Qi(a, b) {
  a = a.name.toLowerCase()
  b = b.name.toLowerCase()
  return a < b ? -1 : a == b ? 0 : 1
}
C.I = {}
C.I.ci = C.pp
C.I.vp = function (a) {
  var b = Be(a, !1)
  a = Object.create(null)
  for (var c = 0; c < b.length; c++) {
    var e = Hd(b[c])
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.ga()
        k && (a[k] = h)
      }
  }
  b = []
  for (k in a) b.push(a[k])
  return b
}
C.I.Vx = function () {
  console.warn(
    'Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.'
  )
}
C.I.No = {}
C.I.Lt = function (a) {
  a = Be(a, !1)
  for (var b = Object.create(null), c = 0, e; (e = a[c]); c++) {
    var f = e.sy
    !f &&
      e.ev &&
      ((f = e.ev),
      C.I.No[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (C.I.No[e.type] = !0)))
    if (f) for (e = f(), f = 0; f < e.length; f++) b[e[f]] = !0
  }
  return Object.keys(b)
}
C.I.af = function (a) {
  var b = [],
    c = document.createElement('button')
  c.setAttribute('text', '%{BKY_NEW_VARIABLE}')
  c.setAttribute('callbackKey', 'CREATE_VARIABLE')
  Ri(a, 'CREATE_VARIABLE', function (e) {
    C.I.dh(e.ma)
  })
  b.push(c)
  a = C.I.Jm(a)
  return (b = b.concat(a))
}
C.I.Jm = function (a) {
  a = a.Fi('')
  var b = []
  if (0 < a.length) {
    var c = C.I.Ai(a[a.length - 1])
    if (C.hb.variables_set) {
      var e = C.hb.math_change ? 8 : 24
      e = C.u.Lc(
        '<xml><block type="variables_set" gap="' +
          e +
          '">' +
          c +
          '</block></xml>'
      ).firstChild
      b.push(e)
    }
    C.hb.math_change &&
      ((e = C.hb.variables_get ? 20 : 8),
      (e = C.u.Lc(
        '<xml><block type="math_change" gap="' +
          e +
          '">' +
          c +
          '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></xml>'
      ).firstChild),
      b.push(e))
    if (C.hb.variables_get)
      for (a.sort(Qi), c = 0; (e = a[c]); c++)
        (e =
          '<xml><block type="variables_get" gap="8">' +
          C.I.Ai(e) +
          '</block></xml>'),
          (e = C.u.Lc(e).firstChild),
          b.push(e)
  }
  return b
}
C.I.cv = function (a) {
  a = a.xe()
  var b = ''
  if (a.length)
    for (var c = 1, e = 0, f = 'ijkmnopqrstuvwxyzabcdefgh'.charAt(e); !b; ) {
      for (var h = !1, k = 0; k < a.length; k++)
        if (a[k].name.toLowerCase() == f) {
          h = !0
          break
        }
      h
        ? (e++,
          25 == e && ((e = 0), c++),
          (f = 'ijkmnopqrstuvwxyzabcdefgh'.charAt(e)),
          1 < c && (f += c))
        : (b = f)
    }
  else b = 'i'
  return b
}
C.I.dh = function (a, b, c) {
  function e(h) {
    C.I.Wr(C.g.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = C.I.aw(k, a)
        if (l) {
          var m = k.toLowerCase()
          if (l.type == f) var n = C.g.VARIABLE_ALREADY_EXISTS.replace('%1', m)
          else
            (n = C.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (n = n.replace('%1', m).replace('%2', l.type))
          C.alert(n, function () {
            e(k)
          })
        } else a.fd(k, f), b && b(k)
      } else b && b(null)
    })
  }
  var f = c || ''
  e('')
}
ma('Blockly.Variables.createVariableButtonHandler', C.I.dh)
C.I.fd = C.I.dh
ma('Blockly.Variables.createVariable', C.I.fd)
C.I.Zn = function (a, b) {
  function c(e) {
    var f = C.g.RENAME_VARIABLE_TITLE.replace('%1', b.name)
    C.I.Wr(f, e, function (h) {
      if (h) {
        var k = C.I.bw(h, b.type, a)
        k
          ? ((k = C.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              '%1',
              h.toLowerCase()
            ).replace('%2', k.type)),
            C.alert(k, function () {
              c(h)
            }))
          : a.vg(b.ga(), h)
      }
    })
  }
  c('')
}
C.I.Wr = function (a, b, c) {
  C.prompt(a, b, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '')),
      e == C.g.RENAME_VARIABLE || e == C.g.NEW_VARIABLE) &&
      (e = null)
    c(e)
  })
}
C.I.bw = function (a, b, c) {
  c = c.pa.xe()
  a = a.toLowerCase()
  for (var e = 0, f; (f = c[e]); e++)
    if (f.name.toLowerCase() == a && f.type != b) return f
  return null
}
C.I.aw = function (a, b) {
  b = b.pa.xe()
  a = a.toLowerCase()
  for (var c = 0, e; (e = b[c]); c++) if (e.name.toLowerCase() == a) return e
  return null
}
C.I.Ai = function (a) {
  var b = a.type
  '' == b && (b = "''")
  return (
    '<field name="VAR" id="' +
    a.ga() +
    '" variabletype="' +
    Xb(b) +
    '">' +
    Xb(a.name) +
    '</field>'
  )
}
C.I.oy = function (a) {
  a = '<xml>' + C.I.Ai(a) + '</xml>'
  return C.u.Lc(a).firstChild
}
C.I.Kq = function (a, b, c, e) {
  var f = C.I.sd(a, b, c, e)
  f || (f = C.I.vu(a, b, c, e))
  return f
}
C.I.sd = function (a, b, c, e) {
  var f = a.Hh
  if (b) {
    var h = a.Ae(b)
    !h && f && (h = f.Ae(b))
    if (h) return h
  }
  if (c) {
    if (void 0 == e)
      throw Error('Tried to look up a variable by name without a type')
    h = a.sd(c, e)
    !h && f && (h = f.sd(c, e))
  }
  return h
}
C.I.vu = function (a, b, c, e) {
  var f = a.Hh
  c || (c = C.I.cv(a.Ce ? a.Kg : a))
  return f ? f.fd(c, e, b) : a.fd(c, e, b)
}
C.I.Hq = function (a, b) {
  a = a.xe()
  var c = []
  if (b.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e]
      ;-1 == b.indexOf(f) && c.push(f)
    }
  return c
}
C.cd = {}
C.cd.hw = function (a) {
  C.I.dh(a.ma, null, 'String')
}
C.cd.gw = function (a) {
  C.I.dh(a.ma, null, 'Number')
}
C.cd.fw = function (a) {
  C.I.dh(a.ma, null, 'Colour')
}
C.cd.af = function (a) {
  var b = [],
    c = document.createElement('button')
  c.setAttribute('text', C.g.NEW_STRING_VARIABLE)
  c.setAttribute('callbackKey', 'CREATE_VARIABLE_STRING')
  b.push(c)
  c = document.createElement('button')
  c.setAttribute('text', C.g.NEW_NUMBER_VARIABLE)
  c.setAttribute('callbackKey', 'CREATE_VARIABLE_NUMBER')
  b.push(c)
  c = document.createElement('button')
  c.setAttribute('text', C.g.NEW_COLOUR_VARIABLE)
  c.setAttribute('callbackKey', 'CREATE_VARIABLE_COLOUR')
  b.push(c)
  Ri(a, 'CREATE_VARIABLE_STRING', C.cd.hw)
  Ri(a, 'CREATE_VARIABLE_NUMBER', C.cd.gw)
  Ri(a, 'CREATE_VARIABLE_COLOUR', C.cd.fw)
  a = C.cd.Jm(a)
  return (b = b.concat(a))
}
C.cd.Jm = function (a) {
  a = a.xe()
  var b = []
  if (0 < a.length) {
    if (C.hb.variables_set_dynamic) {
      var c =
        '<xml><block type="variables_set_dynamic" gap="24">' +
        C.I.Ai(a[a.length - 1]) +
        '</block></xml>'
      c = C.u.Lc(c).firstChild
      b.push(c)
    }
    if (C.hb.variables_get_dynamic) {
      a.sort(Qi)
      for (var e = 0; (c = a[e]); e++)
        (c =
          '<xml><block type="variables_get_dynamic" gap="8">' +
          C.I.Ai(c) +
          '</block></xml>'),
          (c = C.u.Lc(c).firstChild),
          b.push(c)
    }
  }
  return b
}
function Si(a) {
  this.Nn = a
  this.di = Object.create(null)
}
d = Si.prototype
d.qn = null
d.A = function () {
  this.di = this.Nn = null
}
d.load = function (a, b) {
  if (a.length) {
    try {
      var c = new window.Audio()
    } catch (l) {
      return
    }
    for (var e, f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/)
      if (k && c.canPlayType('audio/' + k[1])) {
        e = new window.Audio(h)
        break
      }
    }
    e && e.play && (this.di[b] = e)
  }
}
d.preload = function () {
  for (var a in this.di) {
    var b = this.di[a]
    b.volume = 0.01
    b.play().catch(function () {})
    b.pause()
    if (jc || ic) break
  }
}
d.play = function (a, b) {
  var c = this.di[a]
  c
    ? ((a = new Date()),
      (null != this.qn && a - this.qn < C.Bt) ||
        ((this.qn = a),
        (c = (qc && 9 === qc) || jc || hc ? c : c.cloneNode()),
        (c.volume = void 0 === b ? 1 : b),
        c.play()))
    : this.Nn && this.Nn.Cc.play(a, b)
}
d = bf.prototype
d.Mb = function () {
  return { width: this.ac(), height: this.kh() }
}
d.$ = function () {
  if (!this.wg) {
    var a = this.Mb()
    this.oi()
    this.w.appendChild(this.Rc)
    this.Hg = C.h.B('rect', { class: 'blocklyCommentHandleTarget', x: 0, y: 0 })
    this.w.appendChild(this.Hg)
    this.Gf = C.h.B('rect', {
      class: 'blocklyCommentTarget',
      x: 0,
      y: 0,
      rx: 3,
      ry: 3
    })
    this.w.appendChild(this.Gf)
    this.vb = C.h.B(
      'g',
      { class: this.s ? 'blocklyResizeSW' : 'blocklyResizeSE' },
      this.w
    )
    C.h.B(
      'polygon',
      { points: '0,x x,x x,0'.replace(/x/g, (8).toString()) },
      this.vb
    )
    C.h.B(
      'line',
      { class: 'blocklyResizeLine', x1: 8 / 3, y1: 7, x2: 7, y2: 8 / 3 },
      this.vb
    )
    C.h.B(
      'line',
      { class: 'blocklyResizeLine', x1: 16 / 3, y1: 7, x2: 7, y2: 16 / 3 },
      this.vb
    )
    this.Ob() &&
      ((this.Ze = C.h.B('g', { class: 'blocklyCommentDeleteIcon' }, this.w)),
      (this.pq = C.h.B(
        'circle',
        { class: 'blocklyDeleteIconShape', r: '7', cx: '7.5', cy: '7.5' },
        this.Ze
      )),
      C.h.B(
        'line',
        {
          x1: '5',
          y1: '10',
          x2: '10',
          y2: '5',
          stroke: '#fff',
          'stroke-width': '2'
        },
        this.Ze
      ),
      C.h.B(
        'line',
        {
          x1: '5',
          y1: '5',
          x2: '10',
          y2: '10',
          stroke: '#fff',
          'stroke-width': '2'
        },
        this.Ze
      ))
    Ti(this, a.width, a.height)
    this.fb.value = this.Ec
    this.wg = !0
    this.vb && C.J(this.vb, 'mousedown', this, this.ao)
    this.Ob() &&
      (C.J(this.Ze, 'mousedown', this, this.Hu),
      C.J(this.Ze, 'mouseout', this, this.Iu),
      C.J(this.Ze, 'mouseup', this, this.Ju))
  }
}
d.oi = function () {
  this.Rc = C.h.B(
    'foreignObject',
    { x: 0, y: 10, class: 'blocklyCommentForeignObject' },
    null
  )
  var a = document.createElementNS(C.Re, 'body')
  a.setAttribute('xmlns', C.Re)
  a.className = 'blocklyMinimalBody'
  var b = document.createElementNS(C.Re, 'textarea')
  b.className = 'blocklyCommentTextarea'
  b.setAttribute('dir', this.s ? 'RTL' : 'LTR')
  a.appendChild(b)
  this.fb = b
  this.Rc.appendChild(a)
  C.J(b, 'wheel', this, function (c) {
    c.stopPropagation()
  })
  C.J(b, 'change', this, function () {
    this.$d(b.value)
  })
  return this.Rc
}
d.ao = function (a) {
  Ui(this)
  C.h.pf(a) ||
    (this.m.El(a, new B(this.m.s ? -this.W : this.W, this.ka)),
    (this.rg = C.J(document, 'mouseup', this, this.Cw)),
    (this.Jn = C.J(document, 'mousemove', this, this.bo)),
    C.Nb())
  a.stopPropagation()
}
d.Hu = function (a) {
  C.h.Ha(this.pq, 'blocklyDeleteIconHighlighted')
  a.stopPropagation()
}
d.Iu = function () {
  C.h.bb(this.pq, 'blocklyDeleteIconHighlighted')
}
d.Ju = function (a) {
  this.A(!0, !0)
  a.stopPropagation()
}
function Ui(a) {
  a.rg && (C.wa(a.rg), (a.rg = null))
  a.Jn && (C.wa(a.Jn), (a.Jn = null))
}
d.Cw = function () {
  C.Touch.re()
  Ui(this)
}
d.bo = function (a) {
  this.Xj = !1
  a = $e(this.m, a)
  Ti(this, this.s ? -a.x : a.x, a.y)
}
function Ti(a, b, c) {
  b = Math.max(b, 45)
  c = Math.max(c, 30)
  a.W = b
  a.ka = c
  a.wj.setAttribute('width', b)
  a.wj.setAttribute('height', c)
  a.Gf.setAttribute('width', b)
  a.Gf.setAttribute('height', c)
  a.Hg.setAttribute('width', b)
  a.Hg.setAttribute('height', 10)
  a.s &&
    (a.wj.setAttribute('transform', 'scale(-1 1)'),
    a.Gf.setAttribute('transform', 'scale(-1 1)'))
  a.vb &&
    (a.s
      ? (a.vb.setAttribute(
          'transform',
          'translate(' + (-b + 8) + ',' + (c - 8) + ') scale(-1 1)'
        ),
        a.Ze.setAttribute(
          'transform',
          'translate(' + (-b + 8) + ',-8) scale(-1 1)'
        ))
      : (a.vb.setAttribute(
          'transform',
          'translate(' + (b - 8) + ',' + (c - 8) + ')'
        ),
        a.Ze.setAttribute('transform', 'translate(' + (b - 8) + ',-8)')))
  b = a.Mb()
  a.Rc.setAttribute('width', b.width)
  a.Rc.setAttribute('height', b.height - 10)
  a.s && a.Rc.setAttribute('x', -b.width)
  a.fb.style.width = b.width - 4 + 'px'
  a.fb.style.height = b.height - 4 - 10 + 'px'
}
d.so = function () {
  var a = this
  this.xi = !0
  setTimeout(function () {
    a.ue ||
      (a.fb.focus(),
      C.h.Ha(a.w, 'blocklyFocused'),
      C.h.Ha(a.Gf, 'blocklyCommentTargetFocused'),
      C.h.Ha(a.Hg, 'blocklyCommentHandleTargetFocused'))
  }, 0)
}
function df(a) {
  a.xi = !1
  setTimeout(function () {
    a.ue ||
      (a.fb.blur(),
      C.h.bb(a.w, 'blocklyFocused'),
      C.h.bb(a.Gf, 'blocklyCommentTargetFocused'),
      C.h.bb(a.Hg, 'blocklyCommentHandleTargetFocused'))
  }, 0)
}
function Vi(a) {
  this.li = a
  this.X()
}
d = Vi.prototype
d.Ga = null
d.hd = null
d.li = null
d.X = function () {
  this.Ga ||
    ((this.Ga = C.h.B(
      'svg',
      {
        xmlns: C.Ac,
        'xmlns:html': C.Re,
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        version: '1.1',
        class: 'blocklyWsDragSurface blocklyOverflowVisible'
      },
      null
    )),
    this.li.appendChild(this.Ga))
}
d.Le = function (a, b) {
  a = a.toFixed(0)
  b = b.toFixed(0)
  this.Ga.style.display = 'block'
  C.h.lj(this.Ga, 'translate3d(' + a + 'px, ' + b + 'px, 0px)')
}
d.Kk = function () {
  return C.h.oc(this.Ga)
}
d.ji = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    )
  var b = this.Ga.childNodes[0],
    c = this.Ga.childNodes[1]
  if (
    !(
      b &&
      c &&
      C.h.Sq(b, 'blocklyBlockCanvas') &&
      C.h.Sq(c, 'blocklyBubbleCanvas')
    )
  )
    throw Error("Couldn't clear and hide the drag surface. A node was missing.")
  null != this.Ad ? C.h.hg(b, this.Ad) : a.insertBefore(b, a.firstChild)
  C.h.hg(c, b)
  this.Ga.style.display = 'none'
  if (this.Ga.childNodes.length) throw Error('Drag surface was not cleared.')
  C.h.lj(this.Ga, '')
  this.Ad = null
}
// Copyright 2015 Google Inc.  Apache License 2.0
function Wi(a) {
  this.j = a
}
d = Wi.prototype
d.Nf = 32
d.Yo = 110
d.Ul = 20
d.ai = 20
d.w = null
d.Wi = 0
d.Sh = 0
d.X = function () {
  this.w = C.h.B('g', {}, null)
  var a = String(Math.random()).substring(2)
  Xi(this, a)
  Yi(this, a)
  this.j.Bb() && Zi(this, a)
  return this.w
}
d.Z = function (a) {
  this.Qe = this.Ul + a
  return this.Qe + this.Yo
}
d.A = function () {
  this.w && (C.h.removeNode(this.w), (this.w = null))
  this.j = null
}
d.position = function () {
  if (this.Qe) {
    var a = this.j.ab()
    a &&
      ((this.Wi =
        a.aa == C.Bc || (this.j.Fc && !this.j.s)
          ? a.xa + a.Ya - this.Nf - this.ai - J
          : this.ai + J),
      a.aa == C.Ve
        ? ((this.Sh = this.Qe),
          this.Nl.setAttribute('transform', 'translate(0, 34)'),
          this.Ol && this.Ol.setAttribute('transform', 'translate(0, 77)'))
        : ((this.Sh = a.Ba + a.Za - this.Yo - this.Qe),
          this.Nl.setAttribute('transform', 'translate(0, 43)'),
          this.Mo.setAttribute('transform', 'translate(0, 77)')),
      this.w.setAttribute(
        'transform',
        'translate(' + this.Wi + ',' + this.Sh + ')'
      ))
  }
}
function Xi(a, b) {
  var c = a.j
  a.Mo = C.h.B('g', { class: 'blocklyZoom' }, a.w)
  var e = C.h.B('clipPath', { id: 'blocklyZoomoutClipPath' + b }, a.Mo)
  C.h.B('rect', { width: 32, height: 32 }, e)
  a = C.h.B(
    'image',
    {
      width: C.hc.width,
      height: C.hc.height,
      x: -64,
      y: -92,
      'clip-path': 'url(#blocklyZoomoutClipPath' + b + ')'
    },
    a.Mo
  )
  a.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    c.options.zd + C.hc.url
  )
  C.J(a, 'mousedown', null, function (f) {
    rf(c)
    $i(c, -1)
    C.Touch.re()
    f.stopPropagation()
    f.preventDefault()
  })
}
function Yi(a, b) {
  var c = a.j
  a.Nl = C.h.B('g', { class: 'blocklyZoom' }, a.w)
  var e = C.h.B('clipPath', { id: 'blocklyZoominClipPath' + b }, a.Nl)
  C.h.B('rect', { width: 32, height: 32 }, e)
  a = C.h.B(
    'image',
    {
      width: C.hc.width,
      height: C.hc.height,
      x: -32,
      y: -92,
      'clip-path': 'url(#blocklyZoominClipPath' + b + ')'
    },
    a.Nl
  )
  a.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    c.options.zd + C.hc.url
  )
  C.J(a, 'mousedown', null, function (f) {
    rf(c)
    $i(c, 1)
    C.Touch.re()
    f.stopPropagation()
    f.preventDefault()
  })
}
function Zi(a, b) {
  var c = a.j
  a.Ol = C.h.B('g', { class: 'blocklyZoom' }, a.w)
  var e = C.h.B('clipPath', { id: 'blocklyZoomresetClipPath' + b }, a.Ol)
  C.h.B('rect', { width: 32, height: 32 }, e)
  a = C.h.B(
    'image',
    {
      width: C.hc.width,
      height: C.hc.height,
      y: -92,
      'clip-path': 'url(#blocklyZoomresetClipPath' + b + ')'
    },
    a.Ol
  )
  a.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    c.options.zd + C.hc.url
  )
  C.J(a, 'mousedown', null, function (f) {
    rf(c)
    c.setScale(c.options.Ma.vs)
    aj(c)
    bj(c)
    setTimeout(function () {
      C.h.bb(c.Ea, 'blocklyCanvasTransitioning')
      C.h.bb(c.Xc, 'blocklyCanvasTransitioning')
    }, 500)
    C.Touch.re()
    f.stopPropagation()
    f.preventDefault()
  })
}
// Copyright 2014 Google Inc.  Apache License 2.0
function cj(a, b, c) {
  cj.o.constructor.call(this, a)
  this.ab = a.ab || dj
  this.Ie = a.Ie || ej
  var e = []
  e[C.Na] = new ni()
  e[C.Se] = new ni()
  e[C.Da] = new ni()
  e[C.Te] = new ni()
  this.mm = e
  b && (this.jb = b)
  c && (this.Qg = c)
  this.Jl = this.Qg && C.h.lf()
  this.Ni = []
  this.Cc = new Si(a.Jc)
  this.nd = this.options.Oq ? new pi(a.Oq, a.Nq) : null
  C.I && C.I.af && fj(this, C.pp, C.I.af)
  C.cd && C.cd.af && fj(this, C.Et, C.cd.af)
  C.Xa && C.Xa.af && fj(this, C.lp, C.Xa.af)
}
w(cj, wd)
d = cj.prototype
d.Al = null
d.L = !0
d.qf = !0
d.Ce = !1
d.wh = !1
d.co = !0
d.scrollX = 0
d.scrollY = 0
d.zq = null
d.scale = 1
d.Tb = null
d.Wa = null
d.lb = null
d.jb = null
d.Qg = null
d.Jl = !1
d.Tk = !1
d.gn = null
d.ir = null
d.Im = {}
d.Io = {}
d.Rp = null
d.Kg = null
d.$q = null
d.jn = !0
function Hi(a) {
  if (a.jn) {
    var b = H(a).getScreenCTM()
    b && ((a.$q = b.inverse()), (a.jn = !1))
  }
  return a.$q
}
d.Ej = function () {
  this.jn = !0
}
d.isVisible = function () {
  return this.qf
}
function qd(a, b) {
  var c = 0,
    e = 0,
    f = 1
  if (C.h.containsNode(a.Ea, b) || C.h.containsNode(a.Xc, b)) f = a.scale
  do {
    var h = C.h.oc(b)
    if (b == a.Ea || b == a.Xc) f = 1
    c += h.x * f
    e += h.y * f
    b = b.parentNode
  } while (b && b != H(a))
  return new B(c, e)
}
d.X = function (a) {
  this.w = C.h.B('g', { class: 'blocklyWorkspace' }, null)
  a &&
    ((this.Wc = C.h.B(
      'rect',
      { height: '100%', width: '100%', class: a },
      this.w
    )),
    'blocklyMainBackground' == a &&
      this.nd &&
      (this.Wc.style.fill = 'url(#' + this.nd.mh.id + ')'))
  this.Ea = C.h.B('g', { class: 'blocklyBlockCanvas' }, this.w)
  this.Xc = C.h.B('g', { class: 'blocklyBubbleCanvas' }, this.w)
  this.Ce ||
    (C.J(this.w, 'mousedown', this, this.uf, !1, !0),
    C.J(this.w, 'wheel', this, this.ww))
  this.options.Rq && (this.V = new gj(this))
  this.nd && this.nd.update(this.scale)
  hj(this)
  return this.w
}
d.A = function () {
  this.L = !1
  this.lb && this.lb.cancel()
  cj.o.A.call(this)
  this.w && (C.h.removeNode(this.w), (this.w = null))
  this.Xc = this.Ea = null
  this.V && (this.V.A(), (this.V = null))
  this.F && (this.F.A(), (this.F = null))
  this.Tb && (this.Tb.A(), (this.Tb = null))
  this.Wa && (this.Wa.A(), (this.Wa = null))
  this.Rg && (this.Rg.A(), (this.Rg = null))
  this.Cc && (this.Cc.A(), (this.Cc = null))
  this.nd && (this.nd.A(), (this.nd = null))
  this.Im = this.Io = null
  if (!this.options.Jc) {
    var a = H(this).parentNode
    a && C.h.removeNode(a)
  }
  this.Al && (C.wa(this.Al), (this.Al = null))
}
d.Dn = function (a, b) {
  return new O(this, a, b)
}
function ij(a) {
  a.Tb = new Li(a)
  var b = a.Tb.X()
  a.w.insertBefore(b, a.Ea)
}
function jj(a) {
  a.Rg = new Wi(a)
  var b = a.Rg.X()
  a.w.appendChild(b)
}
function kj(a, b) {
  var c = {
    te: a.options.te,
    Jc: a,
    s: a.s,
    vf: a.options.vf,
    Fc: a.Fc,
    aa: a.options.aa
  }
  a.F = null
  a.F = a.Fc ? new Mi(c) : new Ni(c)
  a.F.$g = !1
  return a.F.X(b)
}
function lj(a) {
  return a.F ? a.F : a.V ? a.V.F : null
}
function Gd(a) {
  if (a.co && a.L) {
    if (a.Wa) {
      var b = a.ab()
      Ei(a.Wa.Tc, b)
      Gi(a.Wa.Zc, b)
    }
    a.Ej()
  }
}
d.resize = function () {
  this.V && this.V.position()
  this.F && this.F.position()
  this.Tb && this.Tb.position()
  this.Rg && this.Rg.position()
  this.Wa && this.Wa.resize()
  this.Ej()
  hj(this)
}
function pf(a) {
  var b = Gc(document)
  vc(a.ir, b) || ((a.ir = b), a.Ej(), hj(a))
}
function H(a) {
  if (a.Ap) return a.Ap
  for (var b = a.w; b; ) {
    if ('svg' == b.tagName) return (a.Ap = b)
    b = b.parentNode
  }
  return null
}
d.translate = function (a, b) {
  if (this.Jl && this.Tk) this.Qg.Le(a, b)
  else {
    var c = 'translate(' + a + ',' + b + ') scale(' + this.scale + ')'
    this.Ea.setAttribute('transform', c)
    this.Xc.setAttribute('transform', c)
  }
  if (this.jb) {
    c = this.jb
    var e = this.scale
    c.Af = e
    c.hd.setAttribute(
      'transform',
      'translate(' + a.toFixed(0) + ',' + b.toFixed(0) + ') scale(' + e + ')'
    )
  }
  this.nd && this.nd.moveTo(a, b)
}
function sf(a) {
  if (a.Jl) {
    a.Tk = !1
    var b = a.Qg.Kk()
    a.Qg.ji(a.w)
    b = 'translate(' + b.x + ',' + b.y + ') scale(' + a.scale + ')'
    a.Ea.setAttribute('transform', b)
    a.Xc.setAttribute('transform', b)
  }
}
function kf(a) {
  if (a.Jl && !a.Tk) {
    a.Tk = !0
    var b = a.Ea.previousSibling,
      c = parseInt(H(a).getAttribute('width'), 10),
      e = parseInt(H(a).getAttribute('height'), 10),
      f = C.h.oc(a.Ea),
      h = a.Qg,
      k = a.Ea,
      l = a.Xc,
      m = a.scale
    if (h.Ga.childNodes.length) throw Error('Already dragging a block.')
    h.Ad = b
    k.setAttribute('transform', 'translate(0, 0) scale(' + m + ')')
    l.setAttribute('transform', 'translate(0, 0) scale(' + m + ')')
    h.Ga.setAttribute('width', c)
    h.Ga.setAttribute('height', e)
    h.Ga.appendChild(k)
    h.Ga.appendChild(l)
    h.Ga.style.display = 'block'
    a.Qg.Le(f.x, f.y)
  }
}
d.ac = function () {
  var a = this.ab()
  return a ? a.xa / this.scale : 0
}
d.la = function (a) {
  this.Wa && this.Wa.yg(a)
  lj(this) && lj(this).yg(a)
  H(this).style.display = a ? 'block' : 'none'
  this.V && (this.V.gc.style.display = a ? 'block' : 'none')
  a ? (this.$(), this.V && this.V.position()) : C.Nb(!0)
  this.qf = a
}
d.$ = function () {
  for (var a = Be(this, !1), b = a.length - 1; 0 <= b; b--) a[b].$(!1)
  if (this.lb) for (a = this.lb.lh(), b = 0; b < a.length; b++) a[b].$(!1)
}
function mj(a, b) {
  var c = P
  if (void 0 === b) {
    for (var e = 0, f; (f = c.Ni[e]); e++) f.Kc(!1)
    c.Ni.length = 0
  }
  if ((f = a ? hd(c, a) : null))
    (a = void 0 === b || b)
      ? -1 == c.Ni.indexOf(f) && c.Ni.push(f)
      : C.h.ei(c.Ni, f),
      f.Kc(a)
}
function nj(a) {
  var b = C.ki
  if (a.L && !(b.getElementsByTagName('block').length >= Ke(a)))
    if ((a.lb && a.lb.cancel(), 'comment' == b.tagName.toLowerCase())) {
      C.i.disable()
      try {
        var c = yd(b, a),
          e = parseInt(b.getAttribute('x'), 10),
          f = parseInt(b.getAttribute('y'), 10)
        isNaN(e) || isNaN(f) || (a.s && (e = -e), c.moveBy(e + 50, f + 50))
      } finally {
        C.i.enable()
      }
      c.select()
    } else {
      C.i.disable()
      try {
        var h = C.u.fh(b, a),
          k = parseInt(b.getAttribute('x'), 10),
          l = parseInt(b.getAttribute('y'), 10)
        if (!isNaN(k) && !isNaN(l)) {
          a.s && (k = -k)
          do {
            b = !1
            var m = Be(a, !1)
            c = 0
            for (var n; (n = m[c]); c++) {
              var p = n.qa()
              if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                b = !0
                break
              }
            }
            if (!b) {
              var t = h.ld(!1)
              c = 0
              for (var r; (r = t[c]); c++)
                if (r.closest(C.Vb, new B(k, l)).connection) {
                  b = !0
                  break
                }
            }
            b && ((k = a.s ? k - C.Vb : k + C.Vb), (l += 2 * C.Vb))
          } while (b)
          h.moveBy(k, l)
        }
      } finally {
        C.i.enable()
      }
      C.i.isEnabled() && !h.La && C.i.M(new C.i.Kj(h))
      h.select()
    }
}
function oj(a) {
  if ((a = a.Ce ? a.Kg : a) && !a.lb && a.V && a.V.F) {
    a = a.V
    var b = a.yc.fc
    b && b.Id && a.F.show(b.Id)
  }
}
d.vg = function (a, b) {
  cj.o.vg.call(this, a, b)
  oj(this)
}
d.Sf = function (a) {
  cj.o.Sf.call(this, a)
  oj(this)
}
d.fd = function (a, b, c) {
  a = cj.o.fd.call(this, a, b, c)
  oj(this)
  return a
}
function hj(a) {
  a.oq = a.Tb && a.w.parentNode ? a.Tb.ih() : null
  a.nq = a.F ? a.F.ih() : a.V ? a.V.ih() : null
}
function ne(a, b) {
  b = new B(b.clientX, b.clientY)
  return a.oq && a.oq.contains(b)
    ? C.Sl
    : a.nq && a.nq.contains(b)
    ? C.Wo
    : C.Vo
}
d.uf = function (a) {
  var b = this.Qd(a)
  b && vf(b, a, this)
}
d.El = function (a, b) {
  a = C.h.dj(a, H(this), Hi(this))
  a.x /= this.scale
  a.y /= this.scale
  this.zq = xc(b, a)
}
function $e(a, b) {
  b = C.h.dj(b, H(a), Hi(a))
  b.x /= a.scale
  b.y /= a.scale
  return yc(a.zq, b)
}
d.cc = function () {
  return null != this.lb && this.lb.cc()
}
function pj(a) {
  return (
    (a.options.Db && a.options.Db.scrollbars) ||
    (a.options.Db && a.options.Db.Pg) ||
    (a.options.Db && a.options.Db.Tf) ||
    (a.options.Ma && a.options.Ma.controls) ||
    (a.options.Ma && a.options.Ma.Pg)
  )
}
d.Bb = function () {
  return (
    (this.options.Db && this.options.Db.scrollbars) ||
    (this.options.Db && this.options.Db.Pg) ||
    (this.options.Db && this.options.Db.Tf) ||
    (this.options.Ma && this.options.Ma.Pg)
  )
}
d.ww = function (a) {
  if (zf()) a.preventDefault(), a.stopPropagation()
  else {
    var b = this.options.Ma && this.options.Ma.Pg,
      c = this.options.Db && this.options.Db.Pg
    if (b || c) {
      var e = C.h.Sm(a)
      !b || (!a.ctrlKey && c)
        ? ((b = this.scrollX - e.x),
          (c = this.scrollY - e.y),
          a.shiftKey && !e.x && ((b = this.scrollX - e.y), (c = this.scrollY)),
          this.scroll(b, c))
        : ((e = -e.y / 50),
          (b = C.h.dj(a, H(this), Hi(this))),
          this.zoom(b.x, b.y, e))
      a.preventDefault()
    }
  }
}
function Dd(a) {
  var b = ud(a, !1)
  a = td(a, !1)
  b = b.concat(a)
  if (!b.length) return { x: 0, y: 0, width: 0, height: 0 }
  a = b[0].yk()
  for (var c = 1; c < b.length; c++) {
    var e = b[c].yk()
    e.xc.x < a.xc.x && (a.xc.x = e.xc.x)
    e.Pc.x > a.Pc.x && (a.Pc.x = e.Pc.x)
    e.xc.y < a.xc.y && (a.xc.y = e.xc.y)
    e.Pc.y > a.Pc.y && (a.Pc.y = e.Pc.y)
  }
  return {
    x: a.xc.x,
    y: a.xc.y,
    width: a.Pc.x - a.xc.x,
    height: a.Pc.y - a.xc.y
  }
}
d.ju = function () {
  this.Hb(!1)
  C.i.K(!0)
  for (var a = ud(this, !0), b = 0, c = 0, e; (e = a[c]); c++)
    if (e.Bb()) {
      var f = e.qa()
      e.moveBy(-f.x, b - f.y)
      qj(e)
      b = e.qa().y + e.Mb().height + 25
    }
  C.i.K(!1)
  this.Hb(!0)
}
d.Ph = function (a) {
  function b(q) {
    if (q.Ob()) r = r.concat(E(q, !1))
    else {
      q = q.ye(!1)
      for (var v = 0; v < q.length; v++) b(q[v])
    }
  }
  function c() {
    C.i.K(h)
    var q = r.shift()
    q && (q.m ? (q.A(!1, !0), setTimeout(c, 10)) : c())
    C.i.K(!1)
  }
  if (!this.options.readOnly && !this.Ce) {
    var e = [],
      f = ud(this, !0),
      h = C.h.Od(),
      k = this,
      l = {}
    l.text = C.g.UNDO
    l.enabled = 0 < this.Mg.length
    l.xb = this.Jo.bind(this, !1)
    e.push(l)
    l = {}
    l.text = C.g.REDO
    l.enabled = 0 < this.jj.length
    l.xb = this.Jo.bind(this, !0)
    e.push(l)
    this.Bb() &&
      ((l = {}),
      (l.text = C.g.CLEAN_UP),
      (l.enabled = 1 < f.length),
      (l.xb = this.ju.bind(this)),
      e.push(l))
    if (this.options.collapse) {
      for (var m = (l = !1), n = 0; n < f.length; n++)
        for (var p = f[n]; p; )
          p.isCollapsed() ? (l = !0) : (m = !0), (p = Vc(p))
      var t = function (q) {
        for (var v = 0, D = 0; D < f.length; D++)
          for (var K = f[D]; K; )
            setTimeout(K.xg.bind(K, q), v), (K = Vc(K)), (v += 10)
      }
      m = { enabled: m }
      m.text = C.g.COLLAPSE_ALL
      m.xb = function () {
        t(!0)
      }
      e.push(m)
      l = { enabled: l }
      l.text = C.g.EXPAND_ALL
      l.xb = function () {
        t(!1)
      }
      e.push(l)
    }
    var r = []
    for (n = 0; n < f.length; n++) b(f[n])
    l = {
      text:
        1 == r.length
          ? C.g.DELETE_BLOCK
          : C.g.DELETE_X_BLOCKS.replace('%1', String(r.length)),
      enabled: 0 < r.length,
      xb: function () {
        k.lb && k.lb.cancel()
        2 > r.length
          ? c()
          : C.confirm(
              C.g.DELETE_ALL_BLOCKS.replace('%1', r.length),
              function (q) {
                q && c()
              }
            )
      }
    }
    e.push(l)
    this.Rp && this.Rp(e)
    C.ca.show(a, e, this.s)
  }
}
d.Gs = function (a) {
  if ((a = si(a))) {
    if (!this.options.Wd)
      throw Error("Existing toolbox is null.  Can't create new toolbox.")
    if (a.getElementsByTagName('category').length) {
      if (!this.V)
        throw Error("Existing toolbox has no categories.  Can't change mode.")
      this.options.Wd = a
      a = this.V.tl(a)
      rj(this.V)
      this.V.position()
      this.V.yc.Ke(a)
    } else {
      if (!this.F)
        throw Error("Existing toolbox has categories.  Can't change mode.")
      this.options.Wd = a
      this.F.show(a.childNodes)
    }
  } else if (this.options.Wd) throw Error("Can't nullify an existing toolbox.")
}
function rf(a) {
  if (a.options.Jc) rf(a.options.Jc)
  else {
    C.Yi = a
    document.activeElement && document.activeElement.blur()
    try {
      H(a).focus()
    } catch (b) {
      try {
        H(a).parentNode.setActive()
      } catch (c) {
        H(a).parentNode.focus()
      }
    }
  }
}
d.zoom = function (a, b, c) {
  c = Math.pow(this.options.Ma.Fw, c)
  var e = this.scale * c
  if (this.scale != e) {
    e > this.options.Ma.bj
      ? (c = this.options.Ma.bj / this.scale)
      : e < this.options.Ma.cj && (c = this.options.Ma.cj / this.scale)
    var f = this.Ea.getCTM(),
      h = H(this).createSVGPoint()
    h.x = a
    h.y = b
    h = h.matrixTransform(f.inverse())
    a = h.x
    b = h.y
    f = f.translate(a * (1 - c), b * (1 - c)).scale(c)
    this.scrollX = f.e
    this.scrollY = f.f
    this.setScale(e)
  }
}
function $i(a, b) {
  var c = a.ab()
  if (a.F) {
    var e = c.Rw / 2
    c = c.Qw / 2
  } else (e = c.xa / 2 + c.Ya), (c = c.Ba / 2 + c.Za)
  a.zoom(e, c, b)
}
function aj(a) {
  C.h.Ha(a.Ea, 'blocklyCanvasTransitioning')
  C.h.Ha(a.Xc, 'blocklyCanvasTransitioning')
}
function bj(a) {
  if (a.Bb()) {
    var b = a.ab(),
      c = (b.Dc - b.xa) / 2,
      e = (b.lc - b.Ba) / 2
    c = -c - b.Kb
    e = -e - b.yb
    a.scroll(c, e)
  } else
    console.warn(
      'Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.'
    )
}
d.setScale = function (a) {
  this.options.Ma.bj && a > this.options.Ma.bj
    ? (a = this.options.Ma.bj)
    : this.options.Ma.cj && a < this.options.Ma.cj && (a = this.options.Ma.cj)
  this.scale = a
  C.Nb(!1)
  this.F && (this.F.Xn(), hj(this))
  this.nd && this.nd.update(this.scale)
  a = this.ab()
  this.scrollX -= a.Ya
  this.scrollY -= a.Za
  a.Va += a.Ya
  a.gb += a.Za
  this.scroll(this.scrollX, this.scrollY)
  this.Wa &&
    (this.F
      ? (Bi(this.Wa.Tc, a), Ci(this.Wa.Zc, a))
      : (Ei(this.Wa.Tc, a), Gi(this.Wa.Zc, a)))
}
d.scroll = function (a, b) {
  var c = this.ab(),
    e = c.Dc + c.Kb - c.xa,
    f = c.lc + c.yb - c.Ba
  a = Math.min(a, -c.Kb)
  b = Math.min(b, -c.yb)
  a = Math.max(a, -e)
  b = Math.max(b, -f)
  this.scrollX = a
  this.scrollY = b
  this.Wa &&
    (vi(this.Wa.Tc, -(a + c.Kb) * this.Wa.Tc.Eb),
    vi(this.Wa.Zc, -(b + c.yb) * this.Wa.Zc.Eb))
  C.H.Aa(!0)
  a += c.Ya
  b += c.Za
  this.translate(a, b)
}
function sj(a) {
  var b = 0,
    c = 0
  a && ((b = a.ac()), (c = a.kh()))
  return { width: b, height: c }
}
function tj(a) {
  var b = Dd(a),
    c = a.scale
  a = b.width * c
  var e = b.height * c,
    f = b.x * c
  b = b.y * c
  return { left: f, top: b, right: f + a, bottom: b + e, width: a, height: e }
}
function dj() {
  var a = sj(this.V),
    b = sj(this.F),
    c = C.zs(H(this)),
    e = c.height,
    f = c.width
  if (this.V)
    if (this.aa == C.ic || this.aa == C.Ve) e -= a.height
    else {
      if (this.aa == C.Bc || this.aa == C.Gd) f -= a.width
    }
  else if (this.F)
    if (this.aa == C.ic || this.aa == C.Ve) e -= b.height
    else if (this.aa == C.Bc || this.aa == C.Gd) f -= b.width
  if (pj(this)) {
    var h = tj(this)
    var k = f,
      l = e,
      m = k / 2,
      n = l / 2,
      p = Math.min(h.left - m, h.right - k),
      t = Math.min(h.top - n, h.bottom - l)
    h = {
      left: p,
      top: t,
      height: Math.max(h.bottom + n, h.top + l) - t,
      width: Math.max(h.right + m, h.left + k) - p
    }
  } else h = tj(this)
  k = 0
  this.V && this.aa == C.Bc
    ? (k = a.width)
    : this.F && this.aa == C.Bc && (k = b.width)
  l = 0
  this.V && this.aa == C.ic
    ? (l = a.height)
    : this.F && this.aa == C.ic && (l = b.height)
  return {
    lc: h.height,
    Dc: h.width,
    yb: h.top,
    Kb: h.left,
    Ba: e,
    xa: f,
    gb: -this.scrollY,
    Va: -this.scrollX,
    Za: l,
    Ya: k,
    Qw: c.height,
    Rw: c.width,
    Ds: a.width,
    Cs: a.height,
    ny: b.width,
    ly: b.height,
    aa: this.aa
  }
}
function ej(a) {
  var b = this.ab()
  'number' == typeof a.x && (this.scrollX = -b.Dc * a.x - b.Kb)
  'number' == typeof a.y && (this.scrollY = -b.lc * a.y - b.yb)
  this.translate(this.scrollX + b.Ya, this.scrollY + b.Za)
}
d.Hb = function (a) {
  var b = !this.co && a
  this.co = a
  b && Gd(this)
}
d.clear = function () {
  this.Hb(!1)
  cj.o.clear.call(this)
  this.Hb(!0)
}
function Ri(a, b, c) {
  if ('function' != typeof c)
    throw TypeError('Button callbacks must be functions.')
  a.Im[b] = c
}
function uj(a, b) {
  return (a = a.Im[b]) ? a : null
}
function fj(a, b, c) {
  if ('function' != typeof c)
    throw TypeError('Toolbox category callbacks must be functions.')
  a.Io[b] = c
}
d.Qd = function (a) {
  var b =
      'mousedown' == a.type ||
      'touchstart' == a.type ||
      'pointerdown' == a.type,
    c = this.lb
  return c
    ? b && c.ag
      ? (console.warn('Tried to start the same gesture twice.'),
        c.cancel(),
        null)
      : c
    : b
    ? (this.lb = new Ii(a, this))
    : null
}
cj.prototype.setVisible = cj.prototype.la
function vj(a) {
  vj.o.constructor.call(this, null)
  this.Xr = a
}
w(vj, ii)
d = vj.prototype
d.Xh = 0
d.Fj = 0
d.Em = function (a) {
  C.h.B(
    'rect',
    { class: 'blocklyIconShape', rx: '4', ry: '4', height: '16', width: '16' },
    a
  )
  C.h.B(
    'path',
    {
      class: 'blocklyIconSymbol',
      d: 'm4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z'
    },
    a
  )
  C.h.B('circle', { class: 'blocklyIconShape', r: '2.7', cx: '8', cy: '8' }, a)
}
d.cn = function (a) {
  vd(this.N) && ii.prototype.cn.call(this, a)
}
d.oi = function () {
  this.vj = C.h.B('svg', { x: Re, y: Re }, null)
  if (this.Xr.length)
    for (var a = C.u.h.createElement('xml'), b = 0, c; (c = this.Xr[b]); b++) {
      var e = C.u.h.createElement('block')
      e.setAttribute('type', c)
      a.appendChild(e)
    }
  else a = null
  a = {
    disable: !1,
    te: this.N.m.options.te,
    Wd: a,
    Jc: this.N.m,
    zd: this.N.m.options.zd,
    s: this.N.s,
    aa: this.N.s ? C.Gd : C.Bc,
    Fc: !1,
    ab: this.fv.bind(this),
    Ie: null
  }
  this.j = new cj(a)
  this.j.wh = !0
  this.j.jc(C.i.Nu)
  a = kj(this.j, 'g')
  b = this.j.X('blocklyMutatorBackground')
  b.insertBefore(a, this.j.Ea)
  this.vj.appendChild(b)
  return this.vj
}
d.Pe = function () {
  this.N.Gc ||
    (vd(this.N)
      ? this.rc && C.h.bb(this.rc, 'blocklyIconGroupReadonly')
      : (this.la(!1), this.rc && C.h.Ha(this.rc, 'blocklyIconGroupReadonly')))
  ii.prototype.Pe.call(this)
}
d.yl = function () {
  var a = 2 * Re,
    b = this.j.Ea.getBBox()
  var c = this.N.s ? -b.x : b.width + b.x
  b = b.height + 3 * a
  if (this.j.F) {
    var e = this.j.F.ze()
    b = Math.max(b, e.lc + 20)
  }
  c += 3 * a
  if (Math.abs(this.Xh - c) > a || Math.abs(this.Fj - b) > a)
    (this.Xh = c),
      (this.Fj = b),
      this.Ta.Bf(c + a, b + a),
      this.vj.setAttribute('width', this.Xh),
      this.vj.setAttribute('height', this.Fj)
  this.N.s &&
    this.j.Ea.setAttribute('transform', 'translate(' + this.Xh + ',0)')
  this.j.resize()
}
d.la = function (a) {
  if (a != this.isVisible())
    if ((C.i.M(new F(this.N, 'mutatorOpen', !a, a)), a)) {
      this.Ta = new Oe(this.N.m, this.oi(), this.N.vc, this.uh, null, null)
      Xe(this.Ta, this.N.id)
      if ((a = this.j.options.Wd))
        this.j.F.Z(this.j), this.j.F.show(a.childNodes)
      this.He = this.N.kk(this.j)
      a = E(this.He, !1)
      for (var b = 0, c; (c = a[b]); b++) c.$()
      this.He.zg(!1)
      this.He.po(!1)
      this.j.F
        ? ((a = 2 * this.j.F.ea), (b = lj(this.j).ac() + a))
        : (b = a = 16)
      this.N.s && (b = -b)
      this.He.moveBy(b, a)
      if (this.N.fs) {
        var e = this
        this.N.fs(this.He)
        this.Dl = function () {
          e.N.fs(e.He)
        }
        this.N.m.jc(this.Dl)
      }
      this.yl()
      this.j.jc(this.ix.bind(this))
      this.Oe()
    } else
      (this.vj = null),
        this.j.A(),
        (this.He = this.j = null),
        this.Ta.A(),
        (this.Ta = null),
        (this.Fj = this.Xh = 0),
        this.Dl && (this.N.m.yf(this.Dl), (this.Dl = null))
}
d.ix = function (a) {
  if (a.type != C.i.Uj && (a.type != C.i.Sg || 'disabled' != a.element)) {
    if (!this.j.cc()) {
      a = ud(this.j, !1)
      for (var b = 0, c; (c = a[b]); b++) {
        var e = c.qa(),
          f = c.Mb()
        20 > e.y + f.height && c.moveBy(0, 20 - f.height - e.y)
      }
    }
    if (this.He.m == this.j) {
      C.i.K(!0)
      c = this.N
      a = (a = c.Ic()) && C.u.Zb(a)
      b = c.L
      c.L = !1
      c.ek(this.He)
      c.L = b
      c.Be()
      b = (b = c.Ic()) && C.u.Zb(b)
      if (a != b) {
        C.i.M(new C.i.zc(c, 'mutation', null, a, b))
        var h = C.i.tb()
        setTimeout(function () {
          C.i.K(h)
          c.kc()
          C.i.K(!1)
        }, C.Jj)
      }
      c.L && c.$()
      this.j.cc() || this.yl()
      C.i.K(!1)
    }
  }
}
d.fv = function () {
  return {
    Ba: this.Fj,
    xa: this.Xh - lj(this.j).ac(),
    Za: 0,
    Ya: this.j.s ? 0 : lj(this.j).ac()
  }
}
d.A = function () {
  this.N.xd = null
  ii.prototype.A.call(this)
}
g.Blockly || (g.Blockly = {})
g.Blockly.Mutator || (g.Blockly.Mutator = {})
g.Blockly.Mutator.reconnect = function (a, b, c) {
  if (!a || !a.v.m) return !1
  c = pd(b, c).connection
  var e = G(a)
  return (e && e != b) || c.ta == a
    ? !1
    : (c.isConnected() && c.disconnect(), c.connect(a), !0)
}
C.na = {}
C.na.Pl = {}
C.na.register = function (a, b) {
  if ('string' != typeof a || '' == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"')
  if (C.na.Pl[a])
    throw Error('Error: Extension "' + a + '" is already registered.')
  if ('function' != typeof b)
    throw Error('Error: Extension "' + a + '" must be a function')
  C.na.Pl[a] = b
}
C.na.By = function (a, b) {
  if (!b || 'object' != typeof b)
    throw Error('Error: Mixin "' + a + '" must be a object')
  C.na.register(a, function () {
    wj(this, b)
  })
}
C.na.Cy = function (a, b, c, e) {
  var f = 'Error when registering mutator "' + a + '": '
  C.na.Ep(f, b.ve, 'domToMutation')
  C.na.Ep(f, b.Ic, 'mutationToDom')
  var h = C.na.Gp(b, f)
  if (c && 'function' != typeof c)
    throw Error('Extension "' + a + '" is not a function')
  C.na.register(a, function () {
    h && this.ls(new vj(e))
    wj(this, b)
    c && c.apply(this)
  })
}
C.na.apply = function (a, b, c) {
  var e = C.na.Pl[a]
  if ('function' != typeof e)
    throw Error('Error: Extension "' + a + '" not found.')
  if (c) C.na.gu(a, b)
  else var f = C.na.Rm(b)
  e.apply(b)
  if (c) C.na.du('Error after applying mutator "' + a + '": ', b)
  else if (!C.na.$v(f, b))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    )
}
C.na.Ep = function (a, b, c) {
  if (!b) throw Error(a + 'missing required property "' + c + '"')
  if ('function' != typeof b)
    throw Error(a + '" required property "' + c + '" must be a function')
}
C.na.gu = function (a, b) {
  if (C.na.Rm(b).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        b.id
    )
}
C.na.Gp = function (a, b) {
  var c = void 0 !== a.ek,
    e = void 0 !== a.kk
  if (c && e) {
    if ('function' != typeof a.ek)
      throw Error(b + 'compose must be a function.')
    if ('function' != typeof a.kk)
      throw Error(b + 'decompose must be a function.')
    return !0
  }
  if (c || e)
    throw Error(b + 'Must have both or neither of "compose" and "decompose"')
  return !1
}
C.na.du = function (a, b) {
  if ('function' != typeof b.ve)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"')
  if ('function' != typeof b.Ic)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"')
  C.na.Gp(b, a)
}
C.na.Rm = function (a) {
  var b = []
  void 0 !== a.ve && b.push(a.ve)
  void 0 !== a.Ic && b.push(a.Ic)
  void 0 !== a.ek && b.push(a.ek)
  void 0 !== a.kk && b.push(a.kk)
  return b
}
C.na.$v = function (a, b) {
  b = C.na.Rm(b)
  if (b.length != a.length) return !1
  for (var c = 0; c < b.length; c++) if (a[c] != b[c]) return !1
  return !0
}
C.na.Yx = function (a, b) {
  var c = []
  'object' == typeof document &&
    C.h.ds(function () {
      for (var e in b) C.h.Fp(b[e])
    })
  return function () {
    this.type &&
      -1 === c.indexOf(this.type) &&
      (C.na.fu(this, a, b), c.push(this.type))
    this.pd(
      function () {
        var e = Ee(this, a),
          f = b[e]
        null == f
          ? -1 === c.indexOf(this.type) &&
            ((e = 'No tooltip mapping for value ' + e + ' of field ' + a),
            null != this.type && (e += ' of block type ' + this.type),
            console.warn(e + '.'))
          : (f = C.h.Qb(f))
        return f
      }.bind(this)
    )
  }
}
C.na.fu = function (a, b, c) {
  var e = ld(a, b)
  if ('function' != typeof e.mg) {
    e = e.getOptions()
    for (var f = 0; f < e.length; ++f) {
      var h = e[f][1]
      null == c[h] &&
        console.warn(
          'No tooltip mapping for value ' +
            h +
            ' of field ' +
            b +
            ' of block type ' +
            a.type
        )
    }
  }
}
C.na.Zx = function (a, b) {
  'object' == typeof document &&
    C.h.ds(function () {
      C.h.Fp(a)
    })
  return function () {
    this.pd(
      function () {
        var c = ld(this, b)
        return C.h.Qb(a).replace('%1', c ? c.Ab() : '')
      }.bind(this)
    )
  }
}
C.na.Vu = function () {
  this.Zw = this.Mc
  this.pd(
    function () {
      var a = this.getParent()
      return (a && xj(a) && a.Mc) || this.Zw
    }.bind(this)
  )
}
C.na.register('parent_tooltip_when_inline', C.na.Vu)
function yj(a, b) {
  this.eb = new zc(0, 17.5)
  this.Jp = b
  this.setValue(a)
  this.Lg = ''
}
w(yj, Of)
yj.Y = function (a) {
  var b = C.h.Qb(a.text)
  return new yj(b, a['class'])
}
d = yj.prototype
d.Lf = !1
d.Z = function () {
  this.ua ||
    ((this.ua = C.h.B(
      'text',
      { class: 'blocklyText', y: this.eb.height - 5 },
      null
    )),
    this.Jp && C.h.Ha(this.ua, this.Jp),
    this.Fa || (this.ua.style.display = 'none'),
    this.v.R().appendChild(this.ua),
    (this.ua.Mc = this.Lg ? this.Lg : this.v),
    C.C.Of(this.ua))
}
d.A = function () {
  this.ua && (C.h.removeNode(this.ua), (this.ua = null))
}
d.R = function () {
  return this.ua
}
d.pd = function (a) {
  this.Lg = a
  this.ua && (this.ua.Mc = a)
}
Qf('field_label', yj)
function zj(a, b, c, e) {
  if (a != C.le && !b)
    throw Error('Value inputs and statement inputs must have non-empty name.')
  this.type = a
  this.name = b
  this.v = c
  this.connection = e
  this.Ia = []
}
d = zj.prototype
d.align = C.Yh
d.Fa = !0
function Aj(a, b, c) {
  Bj(a, a.Ia.length, b, c)
  return a
}
function Bj(a, b, c, e) {
  if (0 > b || b > a.Ia.length) throw Error('index ' + b + ' out of bounds.')
  if (!c && !e) return b
  'string' == typeof c && (c = new yj(c))
  c.wo(a.v)
  a.v.L && c.Z()
  c.name = e
  c.Rn && (b = Bj(a, b, c.Rn))
  a.Ia.splice(b, 0, c)
  ++b
  c.Go && (b = Bj(a, b, c.Go))
  a.v.L && (a.v.$(), a.v.kc())
  return b
}
d.isVisible = function () {
  return this.Fa
}
d.la = function (a) {
  var b = []
  if (this.Fa == a) return b
  for (
    var c = (this.Fa = a) ? 'block' : 'none', e = 0, f;
    (f = this.Ia[e]);
    e++
  )
    f.la(a)
  this.connection &&
    (a ? (b = ae(this.connection)) : ce(this.connection),
    (e = G(this.connection))) &&
    ((e.R().style.display = c), a || (e.L = !1))
  return b
}
d.Lh = function (a) {
  if (!this.connection) throw Error('This input does not have a connection.')
  this.connection.Lh(a)
}
d.Z = function () {
  if (this.v.m.L) for (var a = 0; a < this.Ia.length; a++) this.Ia[a].Z()
}
d.A = function () {
  for (var a = 0, b; (b = this.Ia[a]); a++) b.A()
  this.connection && this.connection.A()
  this.v = null
}
function mi(a) {
  mi.o.constructor.call(this, a)
  ji(this)
  this.oa = {}
}
w(mi, ii)
d = mi.prototype
d.Mp = !1
d.Em = function (a) {
  C.h.B(
    'path',
    {
      class: 'blocklyIconShape',
      d: 'M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z'
    },
    a
  )
  C.h.B(
    'path',
    {
      class: 'blocklyIconSymbol',
      d: 'm7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z'
    },
    a
  )
  C.h.B(
    'rect',
    { class: 'blocklyIconSymbol', x: '7', y: '11', height: '2', width: '2' },
    a
  )
}
d.la = function (a) {
  if (a != this.isVisible())
    if ((C.i.M(new F(this.N, 'warningOpen', !a, a)), a)) {
      var b = this.Ab()
      a = C.h.B('text', { class: 'blocklyText blocklyBubbleText', y: Re }, null)
      b = b.split('\n')
      for (var c = 0; c < b.length; c++)
        C.h
          .B('tspan', { dy: '1em', x: Re }, a)
          .appendChild(document.createTextNode(b[c]))
      this.Ta = new Oe(this.N.m, a, this.N.vc, this.uh, null, null)
      Xe(this.Ta, this.N.id)
      if (this.N.s) {
        b = a.getBBox().width
        c = 0
        for (var e; (e = a.childNodes[c]); c++)
          e.setAttribute('text-anchor', 'end'), e.setAttribute('x', b + Re)
      }
      this.Oe()
      a = this.Ta.Wf()
      this.Ta.Bf(a.width, a.height)
    } else this.Ta.A(), (this.Ta = null)
}
d.cb = function (a, b) {
  this.oa[b] != a &&
    (a ? (this.oa[b] = a) : delete this.oa[b],
    this.isVisible() && (this.la(!1), this.la(!0)))
}
d.Ab = function () {
  var a = [],
    b
  for (b in this.oa) a.push(this.oa[b])
  return a.join('\n')
}
d.A = function () {
  this.N.Ub = null
  ii.prototype.A.call(this)
}
function Je(a, b, c) {
  if ('undefined' !== typeof Cj.prototype[b])
    throw Error(
      'Block prototypeName "' +
        b +
        '" conflicts with Blockly.Generator members.'
    )
  this.id = c && !hd(a, c) ? c : C.h.Od()
  a.cm[this.id] = this
  this.S = this.O = this.P = null
  this.T = []
  this.kf = void 0
  this.disabled = !1
  this.Mc = ''
  this.contextMenu = !0
  this.Yd = null
  this.pe = []
  this.Bq = this.ej = this.ri = !0
  this.se = this.La = !1
  this.Ka = null
  this.$c = new B(0, 0)
  this.m = a
  this.Gc = a.Ce
  this.s = a.s
  this.vd = !1
  this.cg = void 0
  if (b) {
    this.type = b
    c = C.hb[b]
    if (!c || 'object' != typeof c) throw TypeError('Unknown block type: ' + b)
    for (var e in c) this[e] = c[e]
  }
  a.Qh.push(this)
  a.Ne[this.type] || (a.Ne[this.type] = [])
  a.Ne[this.type].push(this)
  'function' == typeof this.Z && this.Z()
  this.Kv = this.kf
  if (C.i.isEnabled()) {
    ;(a = C.i.tb()) || C.i.K(!0)
    try {
      C.i.M(new C.i.Kj(this))
    } finally {
      a || C.i.K(!1)
    }
  }
  if ('function' == typeof this.onchange) {
    if ((a = this.onchange) && 'function' != typeof a)
      throw Error('onchange must be a function.')
    this.gj && this.m.yf(this.gj)
    if ((this.onchange = a)) (this.gj = a.bind(this)), this.m.jc(this.gj)
  }
}
d = Je.prototype
d.data = null
d.ed = '#000000'
d.Op = null
d.Pp = null
d.tj = null
d.A = function (a) {
  if (this.m) {
    this.gj && this.m.yf(this.gj)
    od(this, a)
    C.i.isEnabled() && C.i.M(new C.i.Qo(this))
    C.i.disable()
    try {
      if (this.m) {
        Ie(this.m, this)
        var b = this.m
        b.Ne[this.type].splice(b.Ne[this.type].indexOf(this), 1)
        b.Ne[this.type].length || delete b.Ne[this.type]
        delete this.m.cm[this.id]
        this.m = null
      }
      C.selected == this && (C.selected = null)
      for (var c = this.pe.length - 1; 0 <= c; c--) this.pe[c].A(!1)
      c = 0
      for (var e; (e = this.T[c]); c++) e.A()
      this.T.length = 0
      var f = this.ld(!0)
      for (c = 0; c < f.length; c++) {
        var h = f[c]
        h.isConnected() && h.disconnect()
        f[c].A()
      }
    } finally {
      C.i.enable()
    }
  }
}
d.gg = function () {
  for (var a = 0, b; (b = this.T[a]); a++)
    for (var c = 0, e; (e = b.Ia[c]); c++) e.gg && e.gg()
}
function od(a, b) {
  if (a.P) {
    var c = null
    a.P.isConnected() && ((c = a.P.ta), a.P.disconnect())
    if (c && b) {
      a: {
        b = null
        for (var e = 0; e < a.T.length; e++) {
          var f = a.T[e].connection
          if (f && f.type == C.Na && f.ta) {
            if (b) {
              a = null
              break a
            }
            b = f
          }
        }
        a = b
      }
      a &&
        a.isConnected() &&
        !G(a).La &&
        ((a = a.ta), Kd(a, c) && (a.disconnect(), c.connect(a)))
    }
  } else
    a.S &&
      ((c = null),
      a.S.isConnected() && ((c = a.S.ta), a.S.disconnect()),
      (e = Vc(a)),
      b &&
        e &&
        !e.La &&
        ((a = a.O.ta), a.disconnect(), c && Kd(c, a) && c.connect(a)))
}
d.ld = function () {
  var a = []
  this.P && a.push(this.P)
  this.S && a.push(this.S)
  this.O && a.push(this.O)
  for (var b = 0, c; (c = this.T[b]); b++) c.connection && a.push(c.connection)
  return a
}
d.kc = function () {
  console.warn(
    'Not expected to reach Block.bumpNeighbours_ function. BlockSvg.bumpNeighbours_ was expected to be called instead.'
  )
}
d.getParent = function () {
  return this.Yd
}
function Dj(a) {
  do {
    var b = a
    a = a.getParent()
    if (!a) return null
  } while (Vc(a) == b)
  return a
}
function Vc(a) {
  return a.O && G(a.O)
}
function Td(a) {
  var b = a
  do (a = b), (b = a.Yd)
  while (b)
  return a
}
d.ye = function (a) {
  if (!a) return this.pe
  a = []
  for (var b = 0, c; (c = this.T[b]); b++)
    c.connection && (c = G(c.connection)) && a.push(c)
  ;(b = Vc(this)) && a.push(b)
  return a
}
d.Ag = function (a) {
  if (a != this.Yd) {
    if (this.Yd) {
      C.h.ei(this.Yd.pe, this)
      if (this.S && this.S.isConnected())
        throw Error('Still connected to previous block.')
      if (this.P && this.P.isConnected())
        throw Error('Still connected to parent block.')
      this.Yd = null
    } else Ie(this.m, this)
    ;(this.Yd = a) ? a.pe.push(this) : this.m.Qh.push(this)
  }
}
function E(a, b) {
  var c = [a]
  a = a.ye(b)
  for (var e, f = 0; (e = a[f]); f++) c.push.apply(c, E(e, b))
  return c
}
d.Ob = function () {
  return this.ri && !this.La && !(this.m && this.m.options.readOnly)
}
d.po = function (a) {
  this.ri = a
}
d.Bb = function () {
  return this.ej && !this.La && !(this.m && this.m.options.readOnly)
}
d.zg = function (a) {
  this.ej = a
}
d.vo = function (a) {
  this.La = a
}
d.ks = function (a) {
  this.vd = a
}
function vd(a) {
  return a.Bq && !(a.m && a.m.options.readOnly)
}
d.qo = function (a) {
  this.Bq = a
  a = 0
  for (var b; (b = this.T[a]); a++)
    for (var c = 0, e; (e = b.Ia[c]); c++) e.Pe()
}
function Ed(a, b) {
  if (!b && a.isCollapsed()) {
    if ((a.P && be(a.P, b), a.S && be(a.S, b), a.O)) {
      be(a.O, b)
      var c = G(a.O)
      c && Ed(c, b)
    }
  } else {
    a = a.ld(!0)
    for (var e = 0; (c = a[e]); e++) be(c, b), Od(c) && (c = G(c)) && Ed(c, b)
  }
}
d.pd = function (a) {
  this.Mc = a
}
d.Bd = function (a) {
  var b = 'string' == typeof a ? C.h.Qb(a) : a,
    c = Number(b)
  if (!isNaN(c) && 0 <= c && 360 >= c) this.ed = C.Xq(c)
  else if ('string' == typeof b && /^#[0-9a-fA-F]{6}$/.test(b)) this.ed = b
  else
    throw (
      ((c = 'Invalid colour: "' + b + '"'),
      a != b && (c += ' (from "' + a + '")'),
      Error(c))
    )
}
function Ej(a, b) {
  var c = C.xj
  if (!c)
    throw Error(
      'Trying to set block style to ' +
        b +
        ' before theme was defined via Blockly.setTheme().'
    )
  c = c.Xt[b]
  a.tj = b
  if (c)
    (a.Op = c.colourSecondary),
      (a.Pp = c.colourTertiary),
      (a.cg = c.cg),
      a.Bd(c.colourPrimary)
  else throw Error('Invalid style name: ' + b)
}
function ld(a, b) {
  for (var c = 0, e; (e = a.T[c]); c++)
    for (var f = 0, h; (h = e.Ia[f]); f++) if (h.name === b) return h
  return null
}
function Hd(a) {
  for (var b = [], c = 0, e; (e = a.T[c]); c++)
    for (var f = 0, h; (h = e.Ia[f]); f++)
      h.Ih() && (h = a.m.Ae(h.getValue())) && b.push(h)
  return b
}
function Ee(a, b) {
  return (a = ld(a, b)) ? a.getValue() : null
}
d.Bg = function (a, b) {
  if (a) {
    void 0 === b && (b = null)
    if (!this.S) {
      if (this.P)
        throw Error(
          'Remove output connection prior to adding previous connection.'
        )
      this.S = this.Zi(C.Te)
    }
    this.S.Lh(b)
  } else if (this.S) {
    if (this.S.isConnected())
      throw Error(
        'Must disconnect previous statement before removing connection.'
      )
    this.S.A()
    this.S = null
  }
}
d.Oh = function (a, b) {
  if (a)
    void 0 === b && (b = null), this.O || (this.O = this.Zi(C.Da)), this.O.Lh(b)
  else if (this.O) {
    if (this.O.isConnected())
      throw Error('Must disconnect next statement before removing connection.')
    this.O.A()
    this.O = null
  }
}
d.to = function (a, b) {
  if (a) {
    void 0 === b && (b = null)
    if (!this.P) {
      if (this.S)
        throw Error(
          'Remove previous connection prior to adding output connection.'
        )
      this.P = this.Zi(C.Se)
    }
    this.P.Lh(b)
  } else if (this.P) {
    if (this.P.isConnected())
      throw Error('Must disconnect output value before removing connection.')
    this.P.A()
    this.P = null
  }
}
d.Nh = function (a) {
  this.kf != a &&
    (C.i.M(new C.i.zc(this, 'inline', null, this.kf, a)), (this.kf = a))
}
function xj(a) {
  if (void 0 != a.kf) return a.kf
  for (var b = 1; b < a.T.length; b++)
    if (a.T[b - 1].type == C.le && a.T[b].type == C.le) return !1
  for (b = 1; b < a.T.length; b++)
    if (a.T[b - 1].type == C.Na && a.T[b].type == C.le) return !0
  return !1
}
d.Cf = function (a) {
  this.disabled != a &&
    (C.i.M(new C.i.zc(this, 'disabled', null, this.disabled, a)),
    (this.disabled = a))
}
function Fj(a) {
  for (a = Dj(a); a; ) {
    if (a.disabled) return !0
    a = Dj(a)
  }
  return !1
}
d.isCollapsed = function () {
  return this.se
}
d.xg = function (a) {
  this.se != a &&
    (C.i.M(new C.i.zc(this, 'collapsed', null, this.se, a)), (this.se = a))
}
d.toString = function (a, b) {
  var c = [],
    e = b || '?'
  if (this.se) c.push(pd(this, '_TEMP_COLLAPSED_INPUT').Ia[0].oa)
  else
    for (var f = 0, h; (h = this.T[f]); f++) {
      for (var k = 0, l; (l = h.Ia[k]); k++)
        l instanceof ei && !l.getValue() ? c.push(e) : c.push(l.Ab())
      h.connection &&
        ((h = G(h.connection)) ? c.push(h.toString(void 0, b)) : c.push(e))
    }
  c = c.join(' ').trim() || '???'
  a && c.length > a && (c = c.substring(0, a - 3) + '...')
  return c
}
function Gj(a, b) {
  return a.me(C.le, b || '')
}
function Hj(a, b) {
  var c = b.type ? 'Block "' + b.type + '": ' : ''
  if (b.output && b.previousStatement)
    throw Error(c + 'Must not have both an output and a previousStatement.')
  b.style && b.style.cg && ((a.cg = b.style.cg), (b.style = null))
  if (b.style && b.colour)
    throw Error(c + 'Must not have both a colour and a style.')
  if (b.style) {
    var e = b.style
    try {
      Ej(a, e)
    } catch (q) {
      console.warn(c + 'Style does not exist: ', e)
    }
  } else if ('colour' in b)
    if (void 0 === b.colour) console.warn(c + 'Undefined colour value.')
    else {
      e = b.colour
      try {
        a.Bd(e)
      } catch (q) {
        console.warn(c + 'Illegal colour value: ', e)
      }
    }
  for (e = 0; void 0 !== b['message' + e]; ) {
    for (
      var f = a,
        h = b['args' + e] || [],
        k = b['lastDummyAlign' + e],
        l = C.h.Xw(b['message' + e]),
        m = [],
        n = 0,
        p = [],
        t = 0;
      t < l.length;
      t++
    ) {
      var r = l[t]
      if ('number' == typeof r) {
        if (0 >= r || r > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + r + ' out of range.'
          )
        if (m[r])
          throw Error(
            'Block "' + f.type + '": Message index %' + r + ' duplicated.'
          )
        m[r] = !0
        n++
        p.push(h[r - 1])
      } else (r = r.trim()) && p.push(r)
    }
    if (n != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          ' arg(s).'
      )
    p.length &&
      ('string' == typeof p[p.length - 1] ||
        C.h.startsWith(p[p.length - 1].type, 'field_')) &&
      ((t = { type: 'input_dummy' }), k && (t.align = k), p.push(t))
    k = { LEFT: C.Yh, RIGHT: C.Hj, CENTRE: C.Gj }
    h = []
    for (t = 0; t < p.length; t++)
      if (((m = p[t]), 'string' == typeof m)) h.push([m, void 0])
      else {
        l = r = null
        do
          if (((n = !1), 'string' == typeof m)) r = new yj(m)
          else
            switch (m.type) {
              case 'input_value':
                l = f.me(C.Na, m.name)
                break
              case 'input_statement':
                l = f.me(C.Da, m.name)
                break
              case 'input_dummy':
                l = Gj(f, m.name)
                break
              default:
                ;(r = (r = Pf[m.type]) ? r.Y(m) : null),
                  r ||
                    (m.alt
                      ? ((m = m.alt), (n = !0))
                      : console.warn(
                          'Blockly could not create a field of type ' +
                            m.type +
                            '. You may need to register your custom field.  See github.com/google/blockly/issues/1584'
                        ))
            }
        while (n)
        if (r) h.push([r, m.name])
        else if (l) {
          m.check && l.Lh(m.check)
          m.align && ((n = l), (n.align = k[m.align]), n.v.L && n.v.$())
          for (m = 0; m < h.length; m++) Aj(l, h[m][0], h[m][1])
          h.length = 0
        }
      }
    e++
  }
  void 0 !== b.inputsInline && a.Nh(b.inputsInline)
  void 0 !== b.output && a.to(!0, b.output)
  void 0 !== b.previousStatement && a.Bg(!0, b.previousStatement)
  void 0 !== b.nextStatement && a.Oh(!0, b.nextStatement)
  void 0 !== b.tooltip && ((e = b.tooltip), (e = C.h.Qb(e)), a.pd(e))
  void 0 !== b.enableContextMenu &&
    ((e = b.enableContextMenu), (a.contextMenu = !!e))
  void 0 !== b.helpUrl && ((e = b.helpUrl), (e = C.h.Qb(e)), (a.rh = e))
  'string' == typeof b.extensions &&
    (console.warn(
      c +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        b.type +
        "' block."
    ),
    (b.extensions = [b.extensions]))
  void 0 !== b.mutator && C.na.apply(b.mutator, a, !0)
  if (Array.isArray(b.extensions))
    for (b = b.extensions, c = 0; c < b.length; ++c) C.na.apply(b[c], a, !1)
}
function wj(a, b) {
  var c = [],
    e
  for (e in b) void 0 !== a[e] && c.push(e)
  if (c.length)
    throw Error('Mixin will overwrite block members: ' + JSON.stringify(c))
  for (var f in b) a[f] = b[f]
}
d.me = function (a, b) {
  var c = null
  if (a == C.Na || a == C.Da) c = this.Zi(a)
  a = new zj(a, b, this, c)
  this.T.push(a)
  return a
}
d.Yn = function (a, b) {
  for (var c = 0, e; (e = this.T[c]); c++)
    if (e.name == a) {
      e.connection &&
        e.connection.isConnected() &&
        ((e.connection.ae = null), (a = G(e.connection)), a.La ? a.A() : od(a))
      e.A()
      this.T.splice(c, 1)
      return
    }
  if (!b) throw Error('Input not found: ' + a)
}
function pd(a, b) {
  for (var c = 0, e; (e = a.T[c]); c++) if (e.name == b) return e
  return null
}
function Ij(a, b) {
  return (a = pd(a, b)) && a.connection && G(a.connection)
}
d.Ck = function () {
  return this.Ka || ''
}
d.kj = function (a) {
  this.Ka != a &&
    (C.i.M(new C.i.zc(this, 'comment', null, this.Ka, a || '')), (this.Ka = a))
}
d.oj = function () {}
d.ls = function () {}
d.qa = function () {
  return this.$c
}
d.moveBy = function (a, b) {
  if (this.Yd) throw Error('Block has parent.')
  var c = new C.i.Zh(this)
  this.$c.translate(a, b)
  c.Ee()
  C.i.M(c)
}
d.Zi = function (a) {
  return new Id(this, a)
}
C.ca = {}
C.ca.ik = null
C.ca.Dq = null
C.ca.show = function (a, b, c) {
  C.H.show(C.ca, c, null)
  if (b.length) {
    var e = C.ca.tl(b, c)
    sg(e, 'action', C.ca.Aa)
    C.ca.ec(e, a, c)
    setTimeout(function () {
      e.G().focus()
    }, 1)
    C.ca.ik = null
  } else C.ca.Aa()
}
C.ca.tl = function (a, b) {
  var c = new di()
  c.Je(b)
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new $h(f.text)
    h.Je(b)
    c.Vj(h, !0)
    h.nj(f.enabled)
    f.enabled &&
      (sg(h, 'action', f.xb),
      (h.nh = function () {
        this.dispatchEvent('action')
      }))
  }
  return c
}
C.ca.ec = function (a, b, c) {
  var e = C.h.Mq()
  b = {
    top: b.clientY + e.top,
    bottom: b.clientY + e.top,
    left: b.clientX + e.left,
    right: b.clientX + e.left
  }
  C.ca.pi(a)
  var f = C.h.Th.Di(a)
  c && C.h.Th.up(e, b, f)
  C.H.Rr(e, b, f, c)
  a.G().focus()
}
C.ca.pi = function (a) {
  a.$(C.H.ba)
  var b = a.G()
  C.h.Ha(b, 'blocklyContextMenu')
  C.J(b, 'contextmenu', null, C.h.ew)
  a.Wj = !0
  a.Ef(!0)
}
C.ca.Aa = function () {
  C.H.Mi(C.ca)
  C.ca.ik = null
  C.ca.Dq && C.wa(C.ca.Dq)
}
C.ca.ay = function (a, b) {
  return function () {
    C.i.disable()
    try {
      var c = C.u.fh(b, a.m),
        e = a.qa()
      e.x = a.s ? e.x - C.Vb : e.x + C.Vb
      e.y += 2 * C.Vb
      c.moveBy(e.x, e.y)
    } finally {
      C.i.enable()
    }
    C.i.isEnabled() && !c.La && C.i.M(new C.i.Kj(c))
    c.select()
  }
}
C.ca.Ut = function (a) {
  var b = E(a, !1).length,
    c = Vc(a)
  c && (b -= E(c, !1).length)
  return {
    text:
      1 == b ? C.g.DELETE_BLOCK : C.g.DELETE_X_BLOCKS.replace('%1', String(b)),
    enabled: !0,
    xb: function () {
      C.i.K(!0)
      a.A(!0, !0)
      C.i.K(!1)
    }
  }
}
C.ca.Wt = function (a) {
  return {
    enabled: !('function' == typeof a.rh ? !a.rh() : !a.rh),
    text: C.g.HELP,
    xb: function () {
      var b = 'function' == typeof a.rh ? a.rh() : a.rh
      b && window.open(b)
    }
  }
}
C.ca.Vt = function (a) {
  var b = Me(a.m) ? Le(a.m, C.h.Nm(a, !0)) : !0
  return {
    text: C.g.DUPLICATE_BLOCK,
    enabled: b,
    xb: function () {
      C.Aq(a)
    }
  }
}
C.ca.Tt = function (a) {
  var b = { enabled: !y }
  a.Ka
    ? ((b.text = C.g.REMOVE_COMMENT),
      (b.xb = function () {
        a.kj(null)
      }))
    : ((b.text = C.g.ADD_COMMENT),
      (b.xb = function () {
        a.kj('')
      }))
  return b
}
C.ca.mu = function (a) {
  return {
    text: C.g.Sx,
    enabled: !0,
    xb: function () {
      C.i.K(!0)
      a.A(!0, !0)
      C.i.K(!1)
    }
  }
}
C.ca.nu = function (a) {
  return {
    text: C.g.sx,
    enabled: !0,
    xb: function () {
      C.Aq(a)
    }
  }
}
C.ca.Hy = function (a, b) {
  var c = { enabled: !y }
  c.text = C.g.lx
  c.xb = function () {
    var e = new bf(a, C.g.Tx, 100, 100)
    if (!a.gn)
      for (var f = a.w; f; ) {
        if (
          -1 !=
          (' ' + (f.getAttribute('class') || '') + ' ').indexOf(
            ' injectionDiv '
          )
        ) {
          a.gn = f
          break
        }
        f = f.parentNode
      }
    f = a.gn.getBoundingClientRect()
    f = new B(b.clientX - f.left, b.clientY - f.top)
    var h = C.h.Fk(a.Ea)
    f = xc(f, h).scale(1 / a.scale)
    e.moveBy(f.x, f.y)
    a.L && (e.Be(), e.$(!1), e.select())
  }
  return c
}
var Jj = /#(.)(.)(.)/
function Kj(a) {
  var b = a[0],
    c = a[1]
  a = a[2]
  b = Number(b)
  c = Number(c)
  a = Number(a)
  if (b != (b & 255) || c != (c & 255) || a != (a & 255))
    throw Error('"(' + b + ',' + c + ',' + a + '") is not a valid RGB color')
  c = (b << 16) | (c << 8) | a
  return 16 > b
    ? '#' + (16777216 | c).toString(16).substr(1)
    : '#' + c.toString(16)
}
var Lj = /^#(?:[0-9a-f]{3}){1,2}$/i
function Mj(a, b, c) {
  c = Math.min(Math.max(c, 0), 1)
  return [
    Math.round(b[0] + c * (a[0] - b[0])),
    Math.round(b[1] + c * (a[1] - b[1])),
    Math.round(b[2] + c * (a[2] - b[2]))
  ]
}
function O(a, b, c) {
  this.w = C.h.B('g', {}, null)
  this.w.Me = ''
  this.Ig = C.h.B(
    'path',
    { class: 'blocklyPathDark', transform: 'translate(1,1)' },
    this.w
  )
  this.vc = C.h.B('path', { class: 'blocklyPath' }, this.w)
  this.ie = C.h.B('path', { class: 'blocklyPathLight' }, this.w)
  this.vc.Mc = this
  this.L = !1
  this.je = C.h.lf() && !!a.jb
  C.C.Of(this.vc)
  O.o.constructor.call(this, a, b, c)
  this.w.dataset && (this.w.dataset.id = this.id)
}
w(O, Je)
d = O.prototype
d.height = 0
d.width = 0
d.Nc = null
d.Be = function () {
  if (!this.m.L) throw TypeError('Workspace is headless.')
  for (var a = 0, b; (b = this.T[a]); a++) b.Z()
  b = de(this)
  for (a = 0; a < b.length; a++) ji(b[a])
  this.Oe()
  cf(this)
  this.m.options.readOnly ||
    this.Gm ||
    C.J(this.R(), 'mousedown', this, this.uf)
  this.Gm = !0
  this.R().parentNode || this.m.Ea.appendChild(this.R())
}
d.select = function () {
  if (this.La && this.getParent()) this.getParent().select()
  else if (C.selected != this) {
    var a = null
    if (C.selected) {
      a = C.selected.id
      C.i.disable()
      try {
        C.selected.If()
      } finally {
        C.i.enable()
      }
    }
    a = new F(null, 'selected', a, this.id)
    a.ob = this.m.id
    C.i.M(a)
    C.selected = this
    this.Zg()
  }
}
d.If = function () {
  if (C.selected == this) {
    var a = new F(null, 'selected', this.id, null)
    a.ob = this.m.id
    C.i.M(a)
    C.selected = null
    this.ug()
  }
}
d.xd = null
d.Ka = null
d.Ub = null
function de(a) {
  var b = []
  a.xd && b.push(a.xd)
  a.Ka && b.push(a.Ka)
  a.Ub && b.push(a.Ub)
  return b
}
d.Ag = function (a) {
  var b = this.Yd
  if (a != b) {
    xd()
    O.o.Ag.call(this, a)
    Cd()
    var c = this.R()
    if (!this.m.kn && c) {
      var e = this.qa()
      a
        ? (a.R().appendChild(c),
          (a = this.qa()),
          Yd(this, a.x - e.x, a.y - e.y))
        : b && (this.m.Ea.appendChild(c), this.translate(e.x, e.y))
    }
  }
}
d.qa = function () {
  var a = 0,
    b = 0,
    c = this.je ? this.m.jb.tb() : null,
    e = this.R()
  if (e) {
    do {
      var f = C.h.oc(e)
      a += f.x
      b += f.y
      this.je &&
        this.m.jb.hd.firstChild == e &&
        ((f = this.m.jb.Kk()), (a += f.x), (b += f.y))
      e = e.parentNode
    } while (e && e != this.m.Ea && e != c)
  }
  return new B(a, b)
}
d.moveBy = function (a, b) {
  if (this.Yd) throw Error('Block has parent.')
  var c = C.i.isEnabled()
  if (c) var e = new C.i.Zh(this)
  var f = this.qa()
  this.translate(f.x + a, f.y + b)
  Yd(this, a, b)
  c && (e.Ee(), C.i.M(e))
  Gd(this.m)
}
d.translate = function (a, b) {
  this.R().setAttribute('transform', 'translate(' + a + ',' + b + ')')
}
d.jl = function () {
  if (this.je) {
    var a = this.qa()
    C.h.removeAttribute(this.R(), 'transform')
    this.m.jb.Le(a.x, a.y)
    ef(this.m.jb, this.R())
  }
}
d.wr = function (a) {
  this.je && (this.translate(a.x, a.y), this.m.jb.ji(this.m.Ea))
}
d.il = function (a) {
  this.je
    ? this.m.jb.Le(a.x, a.y)
    : ((this.w.Me = 'translate(' + a.x + ',' + a.y + ')'),
      this.w.setAttribute('transform', this.w.Me + this.w.Dg))
}
function qj(a) {
  if (a.m && !a.m.cc() && !a.getParent() && !a.Gc) {
    var b = a.m.nd
    if (b && b.Jw) {
      var c = b.Co,
        e = c / 2,
        f = a.qa()
      b = Math.round((f.x - e) / c) * c + e - f.x
      c = Math.round((f.y - e) / c) * c + e - f.y
      b = Math.round(b)
      c = Math.round(c)
      ;(0 == b && 0 == c) || a.moveBy(b, c)
    }
  }
}
d.yk = function () {
  var a = this.qa(),
    b = this.P ? I : 0,
    c = this.Mb()
  if (this.s) {
    var e = new B(a.x - (c.width - b), a.y)
    a = new B(a.x + b, a.y + c.height)
  } else
    (e = new B(a.x - b, a.y)), (a = new B(a.x + c.width - b, a.y + c.height))
  return { xc: e, Pc: a }
}
d.xg = function (a) {
  if (this.se != a) {
    for (var b = [], c = 0, e; (e = this.T[c]); c++) b.push.apply(b, e.la(!a))
    if (a) {
      e = de(this)
      for (c = 0; c < e.length; c++) e[c].la(!1)
      c = this.toString(C.Ss)
      Aj(Gj(this, '_TEMP_COLLAPSED_INPUT'), c).Z()
      e = E(this, !0)
      if ((c = Vc(this))) (c = e.indexOf(c)), e.splice(c, e.length - c)
      c = 1
      for (var f; (f = e[c]); c++)
        if (f.Ub) {
          this.oj(C.g.COLLAPSED_WARNINGS_WARNING, 'TEMP_COLLAPSED_WARNING_')
          break
        }
    } else
      this.Yn('_TEMP_COLLAPSED_INPUT'),
        this.Ub &&
          (this.Ub.cb('', 'TEMP_COLLAPSED_WARNING_'),
          Object.keys(this.Ub.oa).length || this.oj(null))
    O.o.xg.call(this, a)
    b.length || (b[0] = this)
    if (this.L) for (c = 0; (f = b[c]); c++) f.$()
  }
}
function Nj(a, b, c) {
  for (var e = [], f = 0, h; (h = a.T[f]); f++) {
    for (var k = 0, l; (l = h.Ia[k]); k++) l instanceof Oj && e.push(l)
    h.connection && (h = G(h.connection)) && e.push(h)
  }
  b = e.indexOf(b)
  ;-1 == b && (b = c ? -1 : e.length)
  ;(e = e[c ? b + 1 : b - 1])
    ? e instanceof Of
      ? e.Ff()
      : Nj(e, null, c)
    : (e = a.getParent()) && Nj(e, a, c)
}
d.uf = function (a) {
  var b = this.m && this.m.Qd(a)
  if (b) {
    if (b.ag)
      throw Error(
        'Tried to call gesture.handleBlockStart, but the gesture had already been started.'
      )
    xf(b, this)
    b.wd = a
  }
}
d.Ph = function (a) {
  if (!this.m.options.readOnly && this.contextMenu) {
    var b = this,
      c = []
    if (!this.Gc) {
      this.Ob() && this.Bb() && c.push(C.ca.Vt(b))
      this.m.options.ou && !this.se && vd(this) && c.push(C.ca.Tt(b))
      if (this.Bb())
        if (this.se)
          this.m.options.collapse &&
            ((e = { enabled: !0 }),
            (e.text = C.g.EXPAND_BLOCK),
            (e.xb = function () {
              b.xg(!1)
            }),
            c.push(e))
        else {
          for (var e = 1; e < this.T.length; e++)
            if (this.T[e - 1].type != C.Da && this.T[e].type != C.Da) {
              e = { enabled: !0 }
              var f = xj(this)
              e.text = f ? C.g.EXTERNAL_INPUTS : C.g.INLINE_INPUTS
              e.xb = function () {
                b.Nh(!f)
              }
              c.push(e)
              break
            }
          this.m.options.collapse &&
            ((e = { enabled: !0 }),
            (e.text = C.g.COLLAPSE_BLOCK),
            (e.xb = function () {
              b.xg(!0)
            }),
            c.push(e))
        }
      this.m.options.disable &&
        vd(this) &&
        ((e = {
          text: this.disabled ? C.g.ENABLE_BLOCK : C.g.DISABLE_BLOCK,
          enabled: !Fj(this),
          xb: function () {
            var h = C.i.tb()
            h || C.i.K(!0)
            b.Cf(!b.disabled)
            h || C.i.K(!1)
          }
        }),
        c.push(e))
      this.Ob() && c.push(C.ca.Ut(b))
    }
    c.push(C.ca.Wt(b))
    this.Eu && this.Eu(c)
    C.ca.show(a, c, this.s)
    C.ca.ik = this
  }
}
function Yd(a, b, c) {
  if (a.L) {
    for (var e = a.ld(!1), f = 0; f < e.length; f++) e[f].moveBy(b, c)
    e = de(a)
    for (f = 0; f < e.length; f++) ki(e[f])
    for (f = 0; f < a.pe.length; f++) Yd(a.pe[f], b, c)
  }
}
d.Df = function (a) {
  if (a) {
    var b = this.R()
    b.Me = ''
    b.Dg = ''
    C.si = C.si.concat(this.ld(!0))
    C.h.Ha(this.w, 'blocklyDragging')
  } else (C.si = []), C.h.bb(this.w, 'blocklyDragging')
  for (b = 0; b < this.pe.length; b++) this.pe[b].Df(a)
}
d.zg = function (a) {
  O.o.zg.call(this, a)
  cf(this)
}
d.qo = function (a) {
  O.o.qo.call(this, a)
  a = de(this)
  for (var b = 0; b < a.length; b++) a[b].Pe()
}
d.vo = function (a) {
  O.o.vo.call(this, a)
  this.Oe()
}
d.ks = function (a) {
  this.vd != a &&
    (this.vd = a) &&
    (this.Bd(C.mt), C.h.Ha(this.w, 'blocklyInsertionMarker'))
}
d.R = function () {
  return this.w
}
d.A = function (a, b) {
  if (this.m) {
    C.C.Aa()
    xd()
    var c = this.m
    if (C.selected == this) {
      this.If()
      var e = this.m
      e.lb && e.lb.cancel()
    }
    C.ca.ik == this && C.ca.Aa()
    b && this.L && (od(this, a), C.Ca.Pu(this))
    this.L = !1
    if (this.Nc) {
      for (var f in this.Nc) clearTimeout(this.Nc[f])
      this.Nc = null
    }
    od(this, a)
    var h
    C.i.isEnabled() && (h = new C.i.Qo(this))
    C.i.disable()
    try {
      var k = de(this)
      for (b = 0; b < k.length; b++) k[b].A()
      O.o.A.call(this, a)
    } finally {
      C.i.enable()
    }
    C.i.isEnabled() && h && C.i.M(h)
    C.h.removeNode(this.w)
    Gd(c)
    this.Ig = this.ie = this.vc = this.w = null
    Cd()
  }
}
d.Oe = function () {
  if (!this.disabled) {
    var a = this.ed,
      b = this.Op,
      c = this.Pp
    var e = a
    if (!Lj.test(e)) throw Error("'" + e + "' is not a valid hex color")
    4 == e.length && (e = e.replace(Jj, '#$1$1$2$2$3$3'))
    e = e.toLowerCase()
    e = parseInt(e.substr(1), 16)
    e = [e >> 16, (e >> 8) & 255, e & 255]
    this.La
      ? ((a = e),
        b
          ? ((this.ie.style.display = 'none'),
            (this.Ig.style.display = 'none'),
            this.vc.setAttribute('fill', b),
            (a = b))
          : ((a = Mj([255, 255, 255], a, 0.6)),
            (a = Kj(a)),
            (this.ie.style.display = 'none'),
            this.Ig.setAttribute('fill', a)))
      : c
      ? (this.ie.setAttribute('stroke', 'none'),
        this.Ig.setAttribute('fill', 'none'),
        this.vc.setAttribute('stroke', c))
      : ((this.ie.style.display = ''),
        (b = Kj(Mj([255, 255, 255], e, 0.3))),
        (c = Kj(Mj([0, 0, 0], e, 0.2))),
        this.ie.setAttribute('stroke', b),
        this.Ig.setAttribute('fill', c),
        this.vc.setAttribute('stroke', 'none'))
    this.vc.setAttribute('fill', a)
    a = de(this)
    for (b = 0; b < a.length; b++) a[b].Oe()
    for (a = 0; (b = this.T[a]); a++) for (c = 0; (e = b.Ia[c]); c++) e.yi()
  }
}
function Fd(a) {
  a.disabled || Fj(a)
    ? C.h.Ha(a.w, 'blocklyDisabled') &&
      a.vc.setAttribute('fill', 'url(#' + a.m.options.te + ')')
    : C.h.bb(a.w, 'blocklyDisabled') && a.Oe()
  a = a.ye(!1)
  for (var b = 0, c; (c = a[b]); b++) Fd(c)
}
d.Ck = function () {
  return this.Ka ? this.Ka.Ab().replace(/\s+$/, '').replace(/ +\n/g, '\n') : ''
}
d.kj = function (a) {
  var b = !1
  'string' == typeof a
    ? (this.Ka || ((this.Ka = new li(this)), (b = !0)), this.Ka.cb(a))
    : this.Ka && (this.Ka.A(), (b = !0))
  b && this.L && (this.$(), this.kc())
}
d.oj = function (a, b) {
  this.Nc || (this.Nc = Object.create(null))
  var c = b || ''
  if (c) this.Nc[c] && (clearTimeout(this.Nc[c]), delete this.Nc[c])
  else for (var e in this.Nc) clearTimeout(this.Nc[e]), delete this.Nc[e]
  if (this.m.cc()) {
    var f = this
    this.Nc[c] = setTimeout(function () {
      f.m && (delete f.Nc[c], f.oj(a, c))
    }, 100)
  } else {
    this.Gc && (a = null)
    b = Dj(this)
    for (e = null; b; ) b.isCollapsed() && (e = b), (b = Dj(b))
    e && e.oj(C.g.COLLAPSED_WARNINGS_WARNING, 'TEMP_COLLAPSED_WARNING_')
    b = !1
    'string' == typeof a
      ? (this.Ub || ((this.Ub = new mi(this)), (b = !0)), this.Ub.cb(a, c))
      : this.Ub && !c
      ? (this.Ub.A(), (b = !0))
      : this.Ub &&
        ((b = this.Ub.Ab()),
        this.Ub.cb('', c),
        (e = this.Ub.Ab()) || this.Ub.A(),
        (b = b != e))
    b && this.L && (this.$(), this.kc())
  }
}
d.ls = function (a) {
  this.xd && this.xd !== a && this.xd.A()
  a && ((a.N = this), (this.xd = a), ji(a))
}
d.Cf = function (a) {
  this.disabled != a && (O.o.Cf.call(this, a), this.L && Fd(this))
}
d.Kc = function (a) {
  this.L &&
    (a
      ? (this.vc.setAttribute('filter', 'url(#' + this.m.options.Cq + ')'),
        (this.ie.style.display = 'none'))
      : (C.h.removeAttribute(this.vc, 'filter'), delete this.ie.style.display))
}
d.Zg = function () {
  C.h.Ha(this.w, 'blocklySelected')
}
d.ug = function () {
  C.h.bb(this.w, 'blocklySelected')
}
d.mj = function (a) {
  a
    ? C.h.Ha(this.w, 'blocklyDraggingDelete')
    : C.h.bb(this.w, 'blocklyDraggingDelete')
}
d.Bd = function (a) {
  O.o.Bd.call(this, a)
  this.L && this.Oe()
}
function qe(a) {
  do {
    var b = a.R()
    b.parentNode.appendChild(b)
    a = a.getParent()
  } while (a)
}
d.Bg = function (a, b) {
  O.o.Bg.call(this, a, b)
  this.L && (this.$(), this.kc())
}
d.Oh = function (a, b) {
  O.o.Oh.call(this, a, b)
  this.L && (this.$(), this.kc())
}
d.to = function (a, b) {
  O.o.to.call(this, a, b)
  this.L && (this.$(), this.kc())
}
d.Nh = function (a) {
  O.o.Nh.call(this, a)
  this.L && (this.$(), this.kc())
}
d.Yn = function (a, b) {
  O.o.Yn.call(this, a, b)
  this.L && (this.$(), this.kc())
}
d.me = function (a, b) {
  a = O.o.me.call(this, a, b)
  this.L && (this.$(), this.kc())
  return a
}
d.ld = function (a) {
  var b = []
  if (a || this.L)
    if (
      (this.P && b.push(this.P),
      this.S && b.push(this.S),
      this.O && b.push(this.O),
      a || !this.se)
    ) {
      a = 0
      for (var c; (c = this.T[a]); a++) c.connection && b.push(c.connection)
    }
  return b
}
d.Zi = function (a) {
  return new Rd(this, a)
}
d.kc = function () {
  if (this.m && !this.m.cc()) {
    var a = Td(this)
    if (!a.Gc)
      for (var b = this.ld(!1), c = 0, e; (e = b[c]); c++) {
        e.isConnected() && Od(e) && G(e).kc()
        for (var f = e.xr(C.Vb), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (Td(k.v) != a && (Od(e) ? Ld(k, e) : Ld(e, k)))
      }
  }
}
function re(a) {
  var b = C.i.tb()
  setTimeout(function () {
    C.i.K(b)
    qj(a)
    C.i.K(!1)
  }, C.Jj / 2)
  setTimeout(function () {
    C.i.K(b)
    a.kc()
    C.i.K(!1)
  }, C.Jj)
}
function Pj() {
  this.fe = []
  this.ud = []
  this.Yq = []
  this.Vq = []
}
var I = 8,
  Qj = 7.5 * (1 - Math.SQRT1_2) + 0.5,
  Rj = 8.5 * (1 - Math.SQRT1_2) - 0.5,
  $d = 'v 5 c 0,10 -' + I + ',-8 -' + I + ',7.5 s ' + I + ',-2.5 ' + I + ',7.5',
  Sj =
    'v 6.5 m -' +
    0.97 * I +
    ',3 q -' +
    0.05 * I +
    ',10 ' +
    0.3 * I +
    ',9.5 m ' +
    0.67 * I +
    ',-1.9 v 1.4',
  Uj = 'm ' + Qj + ',' + Qj,
  Vj = 'a 8,8 0 0,0 ' + (-Rj - 0.5) + ',' + (8 - Rj),
  Wj = 'a 8.5,8.5 0 0,0 ' + (8 - Rj) + ',' + (Rj + 0.5)
O.prototype.Mb = function () {
  var a = this.height,
    b = this.width,
    c = Vc(this)
  c
    ? ((c = c.Mb()), (a += c.height - 4), (b = Math.max(b, c.width)))
    : this.O || this.P || (a += 2)
  return { height: a, width: b }
}
O.prototype.$ = function (a) {
  if (this.m) {
    xd()
    this.L = !0
    var b = 10
    this.s && (b = -b)
    for (var c = de(this), e = 0; e < c.length; e++) {
      var f = c[e]
      if ((f.Mp && f.N.isCollapsed()) || f.N.vd)
        f.rc.setAttribute('display', 'none')
      else {
        f.rc.setAttribute('display', 'block')
        var h = f.Wl
        f.N.s && (b -= h)
        f.rc.setAttribute('transform', 'translate(' + b + ',5)')
        ki(f)
        b = f.N.s ? b - 10 : b + (h + 10)
      }
    }
    var k = (b += this.s ? 10 : -10),
      l = this.T
    c = []
    c.Rb = k + 20
    if (this.S || this.O) c.Rb = Math.max(c.Rb, 40)
    f = e = 0
    for (
      var m = (h = !1),
        n = !1,
        p = void 0,
        t = xj(this) && !this.isCollapsed(),
        r = 0,
        q;
      (q = l[r]);
      r++
    )
      if (q.isVisible()) {
        if (t && p && p != C.Da && q.type != C.Da) var v = c[c.length - 1]
        else
          (p = q.type),
            (v = []),
            (v.type = t && q.type != C.Da ? -1 : q.type),
            (v.height = 0),
            c.push(v)
        v.push(q)
        q.zf = 25
        q.Fb = t && q.type == C.Na ? I + 12.5 : 0
        if (q.connection && q.connection.isConnected()) {
          var D = G(q.connection).Mb()
          q.zf = Math.max(q.zf, D.height)
          q.Fb = Math.max(q.Fb, D.width)
        }
        t || r != l.length - 1
          ? !t && q.type == C.Na && l[r + 1] && l[r + 1].type == C.Da && q.zf--
          : q.zf--
        v.height = Math.max(v.height, q.zf)
        q.rd = 0
        1 == c.length && (q.rd += this.s ? -k : k)
        D = !1
        for (var K = 0, R; (R = q.Ia[K]); K++) {
          0 != K && (q.rd += 10)
          var ab = R.Di()
          R.Fb = ab.width
          R.xl = D && R.Lf ? 10 : 0
          q.rd += R.Fb + R.xl
          v.height = Math.max(v.height, ab.height)
          D = R.Lf
        }
        ;-1 != v.type &&
          (v.type == C.Da
            ? ((m = !0), (f = Math.max(f, q.rd)))
            : (v.type == C.Na ? (h = !0) : v.type == C.le && (n = !0),
              (e = Math.max(e, q.rd))))
      }
    for (k = 0; (v = c[k]); k++)
      if (((v.Bs = !1), -1 == v.type))
        for (l = 0; (q = v[l]); l++)
          if (q.type == C.Na) {
            v.height += 10
            v.Bs = !0
            break
          }
    c.Fl = 20 + f
    m && (c.Rb = Math.max(c.Rb, c.Fl + 30))
    h
      ? (c.Rb = Math.max(c.Rb, e + 20 + I))
      : n && (c.Rb = Math.max(c.Rb, e + 20))
    c.Bv = h
    c.vy = m
    c.uy = n
    e = b
    this.Eo = !1
    this.height = 0
    this.P
      ? (this.Do = this.rj = !0)
      : ((b = this.cg ? 'cap' === this.cg : !1),
        (this.Do = this.rj = !1),
        this.S
          ? (b = G(this.S)) && Vc(b) == this && (this.rj = !0)
          : b &&
            ((this.Eo = this.rj = !0),
            (this.height += 15),
            (c.Rb = Math.max(c.Rb, 100))),
        Vc(this) && (this.Do = !0))
    b = new Pj()
    f = c.Rb
    h = b.fe
    m = b.ud
    this.rj
      ? (h.push('m 0,0'),
        m.push('m 0.5,0.5'),
        this.Eo &&
          (h.push('c 30,-15 70,-15 100,0'),
          m.push(
            this.s
              ? 'm 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7'
              : 'c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5'
          )))
      : (h.push('m 0,8'),
        m.push(this.s ? Uj : 'm 0.5,7.5'),
        h.push('A 8,8 0 0,1 8,0'),
        m.push('A 7.5,7.5 0 0,1 8,0.5'))
    this.S &&
      (h.push('H', 15),
      m.push('H', 15),
      h.push('l 6,4 3,0 6,-4'),
      m.push('l 6,4 3,0 6,-4'),
      Wd(this.S, this.s ? -30 : 30, 0))
    h.push('H', f)
    m.push('H', f - 0.5)
    this.width = f
    f = { x: 0, y: 0 }
    h = { x: 0, y: 0 }
    for (m = 0; (n = c[m]); m++) {
      f.x = 10
      0 == m && (f.x += this.s ? -e : e)
      b.ud.push('M', c.Rb - 0.5 + ',' + (f.y + 0.5))
      if (this.isCollapsed())
        (k = n),
          (q = b.fe),
          (v = b.ud),
          Xj(this, k[0].Ia, f.x, f.y),
          q.push('l 8,0 0,4 8,4 -16,8 8,4'),
          v.push('h 8'),
          (k = k.height - 20),
          q.push('v', k),
          this.s &&
            (v.push('v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5'),
            v.push('v', k - 0.7)),
          (this.width += 15)
      else if (-1 == n.type) {
        v = n
        k = f
        l = h
        p = c.Rb
        t = b.Yq
        r = b.Vq
        D = b.fe
        K = b.ud
        for (R = 0; (q = v[R]); R++) {
          ab = k.x
          var Tj = k.y
          v.Bs && (Tj += 5)
          k.x = Xj(this, q.Ia, ab, Tj)
          q.type != C.le && (k.x += q.Fb + 10)
          q.type == C.Na &&
            (t.push('M', k.x - 10 + ',' + (k.y + 5)),
            t.push('h', I - 2 - q.Fb),
            t.push($d),
            t.push('v', q.zf + 1 - 20),
            t.push('h', q.Fb + 2 - I),
            t.push('z'),
            this.s
              ? (r.push('M', k.x - 10 - 2.5 + I - q.Fb + ',' + (k.y + 5 + 0.5)),
                r.push(Sj),
                r.push('v', q.zf - 20 + 2.5),
                r.push('h', q.Fb - I + 2))
              : (r.push('M', k.x - 10 + 0.5 + ',' + (k.y + 5 + 0.5)),
                r.push('v', q.zf + 1),
                r.push('h', I - 2 - q.Fb),
                r.push('M', k.x - q.Fb - 10 + 0.9 + ',' + (k.y + 5 + 20 - 0.7)),
                r.push('l', 0.46 * I + ',-2.1')),
            (l.x = this.s ? -k.x - I + 10 + q.Fb + 1 : k.x + I - 10 - q.Fb - 1),
            (l.y = k.y + 5 + 1),
            Wd(q.connection, l.x, l.y))
        }
        k.x = Math.max(k.x, p)
        this.width = Math.max(this.width, k.x)
        D.push('H', k.x)
        K.push('H', k.x - 0.5)
        D.push('v', v.height)
        this.s && K.push('v', v.height - 1)
      } else
        n.type == C.Na
          ? ((r = n),
            (q = f),
            (v = h),
            (k = c.Rb),
            (l = b.fe),
            (p = b.ud),
            (t = r[0]),
            (D = q.x),
            (K = q.y),
            t.align != C.Yh &&
              ((R = k - t.rd - I - 20),
              t.align == C.Hj ? (D += R) : t.align == C.Gj && (D += R / 2)),
            Xj(this, t.Ia, D, K),
            l.push($d),
            (r = r.height - 20),
            l.push('v', r),
            this.s
              ? (p.push(Sj), p.push('v', r + 0.5))
              : (p.push('M', k - 5 + ',' + (q.y + 20 - 0.7)),
                p.push('l', 0.46 * I + ',-2.1')),
            (v.x = this.s ? -k - 1 : k + 1),
            Wd(t.connection, v.x, q.y),
            t.connection.isConnected() &&
              (this.width = Math.max(
                this.width,
                k + G(t.connection).Mb().width - I + 1
              )))
          : n.type == C.le
          ? ((q = n),
            (v = b.fe),
            (k = b.ud),
            (l = q[0]),
            (p = f.x),
            (t = f.y),
            l.align != C.Yh &&
              ((r = c.Rb - l.rd - 20),
              c.Bv && (r -= I),
              l.align == C.Hj ? (p += r) : l.align == C.Gj && (p += r / 2)),
            Xj(this, l.Ia, p, t),
            v.push('v', q.height),
            this.s && k.push('v', q.height - 1))
          : n.type == C.Da &&
            ((q = n),
            (v = f),
            (k = h),
            (l = c),
            (p = m),
            (t = b.fe),
            (r = b.ud),
            (D = q[0]),
            0 == p && (t.push('v', 10), this.s && r.push('v', 9), (v.y += 10)),
            (K = v.x),
            (R = v.y),
            D.align != C.Yh &&
              ((ab = l.Fl - D.rd - 20),
              D.align == C.Hj ? (K += ab) : D.align == C.Gj && (K += ab / 2)),
            Xj(this, D.Ia, K, R),
            (v.x = l.Fl + 30),
            t.push('H', v.x),
            t.push('l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8'),
            t.push('v', q.height - 16),
            t.push('a 8,8 0 0,0 8,8'),
            t.push('H', l.Rb),
            this.s
              ? (r.push('M', v.x - 30 + Rj + ',' + (v.y + Rj)),
                r.push(Vj),
                r.push('v', q.height - 16),
                r.push('a 8.5,8.5 0 0,0 8.5,8.5'))
              : (r.push('M', v.x - 30 + Rj + ',' + (v.y + q.height - Rj)),
                r.push(Wj)),
            r.push('H', l.Rb - 0.5),
            (k.x = this.s ? -v.x : v.x + 1),
            Wd(D.connection, k.x, v.y + 1),
            D.connection.isConnected() &&
              (this.width = Math.max(
                this.width,
                l.Fl + G(D.connection).Mb().width
              )),
            p == l.length - 1 || l[p + 1].type == C.Da) &&
            (t.push('v', 10), this.s && r.push('v', 9), (v.y += 10))
      f.y += n.height
    }
    c.length ||
      ((f.y = 25), b.fe.push('V', f.y), this.s && b.ud.push('V', f.y - 1))
    c = f.y
    e = b.fe
    f = b.ud
    this.height += c + 1
    this.O &&
      (e.push('H', 30 + (this.s ? 0.5 : -0.5) + ' l -6,4 -3,0 -6,-4'),
      Wd(this.O, this.s ? -30 : 30, c + 1),
      (this.height += 4))
    this.Do
      ? (e.push('H 0'), this.s || f.push('M', '0.5,' + (c - 0.5)))
      : (e.push('H', 8),
        e.push('a', '8,8 0 0,1 -8,-8'),
        this.s ||
          (f.push('M', Qj + ',' + (c - Qj)),
          f.push('A', '7.5,7.5 0 0,1 0.5,' + (c - 8))))
    c = b.fe
    e = b.ud
    this.P
      ? (Wd(this.P, 0, 0),
        c.push('V', 20),
        c.push(
          'c 0,-10 -' + I + ',8 -' + I + ',-7.5 s ' + I + ',2.5 ' + I + ',-7.5'
        ),
        this.s
          ? (e.push('M', -0.25 * I + ',8.4'), e.push('l', -0.45 * I + ',-2.1'))
          : (e.push('V', 18.5),
            e.push('m', -0.92 * I + ',-0.5 q ' + -0.19 * I + ',-5.5 0,-11'),
            e.push('m', 0.92 * I + ',1 V 0.5 H 1')),
        (this.width += I))
      : this.s || (this.rj ? e.push('V', 0.5) : e.push('V', 8))
    c.push('z')
    c = b.fe.join(' ') + '\n' + b.Yq.join(' ')
    this.vc.setAttribute('d', c)
    this.Ig.setAttribute('d', c)
    c = b.ud.join(' ') + '\n' + b.Vq.join(' ')
    this.ie.setAttribute('d', c)
    this.s &&
      (this.vc.setAttribute('transform', 'scale(-1 1)'),
      this.ie.setAttribute('transform', 'scale(-1 1)'),
      this.Ig.setAttribute('transform', 'translate(1,1) scale(-1 1)'))
    c = this.qa()
    this.S && Vd(this.S, c)
    this.P && Vd(this.P, c)
    for (b = 0; b < this.T.length; b++)
      if ((e = this.T[b].connection)) Vd(e, c), e.isConnected() && Xd(e)
    this.O && (Vd(this.O, c), this.O.isConnected() && Xd(this.O))
    !1 !== a && ((a = this.getParent()) ? a.$(!0) : Gd(this.m))
    Cd()
  }
}
function Xj(a, b, c, e) {
  e += 5
  a.s && (c = -c)
  for (var f = 0, h; (h = b[f]); f++) {
    var k = h.R()
    if (k) {
      var l = ''
      if (a.s) {
        var m = (c -= h.xl + h.Fb)
        h.Fb && (c -= 10)
      } else (m = c + h.xl), h.Fb && (c += h.xl + h.Fb + 10)
      a.s && h instanceof Yj && h.$u && ((l = 'scale(-1 1)'), (m += h.Fb))
      k.setAttribute('transform', 'translate(' + m + ',' + e + ')' + l)
      a.vd && k.setAttribute('display', 'none')
    }
  }
  return a.s ? -c : c
}
function je(a, b) {
  b ? C.h.Ha(a.w, 'blocklyReplaceable') : C.h.bb(a.w, 'blocklyReplaceable')
} /*

 Visual Blocks Editor

 Copyright 2016 Massachusetts Institute of Technology
 All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Zj,
  ak,
  bk = null,
  ck = null,
  dk = null,
  ek = null,
  fk = 0
function gk() {
  if (!bk) {
    var a = document.createElement('div')
    a.className = 'blocklyDropDownDiv'
    document.body.appendChild(a)
    bk = a
    var b = document.createElement('div')
    b.className = 'blocklyDropDownContent'
    a.appendChild(b)
    Zj = b
    b = document.createElement('div')
    b.className = 'blocklyDropDownArrow'
    a.appendChild(b)
    ak = b
    bk.style.transition = 'transform 0.25s, opacity 0.25s'
  }
}
function hk() {
  Zj.innerHTML = ''
  Zj.style.width = ''
}
function ik(a) {
  var b = a.Ra.getBoundingClientRect()
  var c = b.left + b.width / 2
  var e = b.bottom
  b = b.top
  ck = H(a.v.m).parentNode
  dk = a
  fk = void 0
  a = ck.getBoundingClientRect()
  var f = Hf(ck)
  var h = a.left
  var k = a.left + f.width
  var l = a.top
  f = a.top + f.height
  a = Hf(bk)
  if (e + a.height > f)
    if (b - a.height < l) {
      f = c
      l = 0
      c = !1
      var m = !0
    } else (f = c), (l = b - a.height - 16), (c = !0)
  else (f = c), (l = e + 16), (c = !1)
  var n = f
  f -= a.width / 2
  f = C.h.gm(h, f, k - a.width)
  k = C.h.gm(h, n - 8, k) - f
  k = C.h.gm(12, k, a.width - 12 - 16)
  h = f
  e = c ? b - a.height : e
  b = f
  a = (c ? a.height - 1 : 0) - 9
  m = !m
  ak.style.transform = 'translate(' + k + 'px,' + a + 'px) rotate(45deg)'
  ak.setAttribute(
    'class',
    c ? 'blocklyDropDownArrow arrowBottom' : 'blocklyDropDownArrow arrowTop'
  )
  ak.style.display = m ? '' : 'none'
  jk(h, e, b, l)
}
function kk() {
  var a = bk
  a.style.transform = 'translate(0px, 0px)'
  a.style.opacity = 0
  ek = setTimeout(function () {
    lk()
  }, 250)
  fk && (fk(), (fk = null))
}
function lk() {
  dk &&
    (ek && window.clearTimeout(ek),
    jk(),
    hk(),
    (dk = null),
    fk && (fk(), (fk = null)))
}
function jk(a, b, c, e) {
  a = null == a ? a : Math.floor(a)
  b = null == b ? b : Math.floor(b)
  c = null == c ? c : Math.floor(c)
  e = null == e ? e : Math.floor(e)
  var f = bk
  f.style.left = null != a ? a + 'px' : ''
  f.style.top = null != b ? b + 'px' : ''
  null != c
    ? ((f.style.display = 'block'),
      (f.style.opacity = 1),
      (f.style.transform = 'translate(' + (c - a) + 'px,' + (e - b) + 'px)'))
    : ((f.style.display = 'none'), (f.style.transform = ''))
}
C.g = {}
function Oj(a, b) {
  Oj.o.constructor.call(this, a, b)
}
w(Oj, Of)
Oj.Y = function (a) {
  var b = C.h.Qb(a.text)
  b = new Oj(b, a['class'])
  'boolean' === typeof a.spellcheck && (b.rs = a.spellcheck)
  return b
}
Oj.prototype.Ue = !0
var mk = null
d = Oj.prototype
d.Oj = 'text'
d.rs = !0
d.A = function () {
  C.H.Mi(this)
  Oj.o.A.call(this)
}
d.setValue = function (a) {
  if (null !== a) {
    if (this.v) {
      var b = md(this, a)
      null !== b && (a = b)
    }
    Of.prototype.setValue.call(this, a)
  }
}
d.cb = function (a) {
  null !== a &&
    ((a = String(a)),
    a !== this.oa &&
      (this.v &&
        C.i.isEnabled() &&
        C.i.M(new C.i.zc(this.v, 'field', this.name, this.oa, a)),
      Of.prototype.cb.call(this, a)))
}
d.Ff = function (a) {
  this.j = this.v.m
  a = a || !1
  if (!a && (fc || hc || jc)) nk(this)
  else {
    C.H.show(this, this.v.s, ok(this))
    var b = C.H.ba,
      c = document.createElement('input')
    c.className = 'blocklyHtmlInput'
    c.setAttribute('spellcheck', this.rs)
    var e = 11 * this.j.scale + 'pt'
    b.style.fontSize = e
    c.style.fontSize = e
    mk = c
    b.appendChild(c)
    c.value = c.defaultValue = this.oa
    c.Br = null
    pk(this)
    this.zl()
    a || (c.focus(), c.select())
    c.kw = C.J(c, 'keydown', this, this.jw)
    c.nw = C.J(c, 'keyup', this, this.Fr)
    c.mw = C.J(c, 'keypress', this, this.Fr)
    c.Lr = this.zl.bind(this)
    this.j.jc(c.Lr)
  }
}
function nk(a) {
  C.prompt(C.g.CHANGE_VALUE_TITLE, a.oa, function (b) {
    a.v && (b = md(a, b))
    a.setValue(b)
  })
}
d.jw = function (a) {
  var b = mk
  13 == a.keyCode
    ? (C.H.Aa(), dk === this && kk())
    : 27 == a.keyCode
    ? ((b.value = b.defaultValue), C.H.Aa(), dk === this && kk())
    : 9 == a.keyCode &&
      (C.H.Aa(),
      dk === this && kk(),
      Nj(this.v, this, !a.shiftKey),
      a.preventDefault())
}
d.Fr = function () {
  var a = mk,
    b = a.value
  b !== a.Br
    ? ((a.Br = b), C.i.K(!0), this.setValue(b), C.i.K(!1), pk(this))
    : A && this.v.$()
  this.zl()
  C.Jg(this.v.m)
}
function pk(a) {
  var b = !0
  if (!mk) throw Error('htmlInput not defined')
  var c = mk
  a.v && (b = md(a, c.value))
  null === b
    ? C.h.Ha(c, 'blocklyInvalidInput')
    : C.h.bb(c, 'blocklyInvalidInput')
}
d.zl = function () {
  var a = C.H.ba,
    b = Vf(this)
  a.style.width = b.right - b.left + 'px'
  a.style.height = b.bottom - b.top + 'px'
  b = new B(this.v.s ? b.right - a.offsetWidth : b.left, b.top)
  b.y += 1
  z && C.H.ba.style.top && (--b.x, --b.y)
  A && (b.y -= 3)
  a.style.left = b.x + 'px'
  a.style.top = b.y + 'px'
}
function ok(a) {
  return function () {
    var b = mk,
      c = mk,
      e = c.value
    a.v && ((e = md(a, e)), null === e ? (e = c.defaultValue) : a.iw && a.iw(e))
    a.cb(e)
    a.v.L && a.v.$()
    C.wa(b.kw)
    C.wa(b.nw)
    C.wa(b.mw)
    a.j.yf(b.Lr)
    mk = null
    C.i.K(!1)
    b = C.H.ba.style
    b.width = 'auto'
    b.height = 'auto'
    b.fontSize = ''
  }
}
Qf('field_input', Oj)
function qk(a, b) {
  this.As = C.h.B('tspan', {}, null)
  this.As.appendChild(document.createTextNode('\u00b0'))
  a = a && !isNaN(a) ? String(a) : '0'
  qk.o.constructor.call(this, a, b)
}
w(qk, Oj)
qk.Y = function (a) {
  return new qk(a.angle)
}
d = qk.prototype
d.Ue = !0
d.Ge = function () {
  this.Fa
    ? ((this.ua.textContent = Tf(this)),
      this.ua.appendChild(this.As),
      this.Vh())
    : (this.eb.width = 0)
}
d.eh = function () {
  var a = this
  return function () {
    qk.o.eh.call(a)()
    a.zi = null
    a.jm && C.wa(a.jm)
    a.Bn && C.wa(a.Bn)
    a.Cn && C.wa(a.Cn)
  }
}
d.Ff = function () {
  qk.o.Ff.call(this, fc || hc || jc)
  lk()
  hk()
  var a = C.h.B(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:html': 'http://www.w3.org/1999/xhtml',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        version: '1.1',
        height: '100px',
        width: '100px'
      },
      Zj
    ),
    b = C.h.B(
      'circle',
      { cx: 50, cy: 50, r: 49, class: 'blocklyAngleCircle' },
      a
    )
  this.zi = C.h.B('path', { class: 'blocklyAngleGauge' }, a)
  this.lr = C.h.B('line', { x1: 50, y1: 50, class: 'blocklyAngleLine' }, a)
  for (var c = 0; 360 > c; c += 15)
    C.h.B(
      'line',
      {
        x1: 99,
        y1: 50,
        x2: 99 - (0 == c % 45 ? 10 : 5),
        y2: 50,
        class: 'blocklyAngleMarks',
        transform: 'rotate(' + c + ',50,50)'
      },
      a
    )
  c = this.v.ed
  bk.style.backgroundColor = this.v.ed
  bk.style.borderColor = c
  ik(this)
  this.jm = C.$a(a, 'click', this, this.Cv.bind(this))
  this.Bn = C.$a(b, 'mousemove', this, this.Kr)
  this.Cn = C.$a(this.zi, 'mousemove', this, this.Kr)
  rk(this)
}
d.Cv = function () {
  C.wa(this.Bn)
  C.wa(this.Cn)
  C.wa(this.jm)
  dk === this && kk()
  C.H.Aa()
}
d.Kr = function (a) {
  var b = this.zi.ownerSVGElement.getBoundingClientRect(),
    c = a.clientX - b.left - 50
  a = a.clientY - b.top - 50
  b = Math.atan(-a / c)
  isNaN(b) ||
    ((b = C.h.Ww(b)),
    0 > c ? (b += 180) : 0 < a && (b += 360),
    (b = 15 * Math.round((b - 0) / 15)),
    (b = md(this, b)),
    (mk.value = b),
    this.setValue(b),
    pk(this),
    this.zl())
}
d.cb = function (a) {
  qk.o.cb.call(this, a)
  this.ua && rk(this)
}
function rk(a) {
  if (a.zi) {
    var b = Number(a.Ab()) + 0
    b = C.h.yj(b)
    var c = ['M ', 50, ',', 50],
      e = 50,
      f = 50
    if (!isNaN(b)) {
      var h = C.h.yj(0),
        k = 49 * Math.cos(h),
        l = -49 * Math.sin(h)
      e += 49 * Math.cos(b)
      f -= 49 * Math.sin(b)
      c.push(
        ' l ',
        k,
        ',',
        l,
        ' A ',
        49,
        ',',
        49,
        ' 0 ',
        Math.abs(Math.floor((b - h) / Math.PI) % 2),
        ' ',
        Number(!1),
        ' ',
        e,
        ',',
        f,
        ' z'
      )
    }
    a.zi.setAttribute('d', c.join(''))
    a.lr.setAttribute('x2', e)
    a.lr.setAttribute('y2', f)
  }
}
d.hm = function (a) {
  if (null === a) return null
  a = parseFloat(a || 0)
  if (isNaN(a)) return null
  a %= 360
  0 > a && (a += 360)
  360 < a && (a -= 360)
  return String(a)
}
Qf('field_angle', qk)
function sk(a, b) {
  sk.o.constructor.call(this, '', b)
  this.setValue(a)
}
w(sk, Of)
sk.Y = function (a) {
  return new sk(a.checked ? 'TRUE' : 'FALSE')
}
d = sk.prototype
d.Ue = !0
d.Oj = 'default'
d.Z = function () {
  this.Ra ||
    (sk.o.Z.call(this),
    (this.$j = C.h.B(
      'text',
      { class: 'blocklyText blocklyCheckbox', x: -3, y: 14 },
      this.Ra
    )),
    this.$j.appendChild(document.createTextNode('\u2713')),
    (this.$j.style.display = this.Ja ? 'block' : 'none'))
}
d.getValue = function () {
  return String(this.Ja).toUpperCase()
}
d.setValue = function (a) {
  a = 'string' == typeof a ? 'TRUE' == a.toUpperCase() : !!a
  this.Ja !== a &&
    (this.v &&
      C.i.isEnabled() &&
      C.i.M(new C.i.zc(this.v, 'field', this.name, this.Ja, a)),
    (this.Ja = a),
    this.$j && (this.$j.style.display = a ? 'block' : 'none'))
}
d.Ff = function () {
  var a = !this.Ja
  this.v && (a = md(this, a))
  null !== a && this.setValue(String(a).toUpperCase())
}
Qf('field_checkbox', sk)
function tk(a, b) {
  tk.o.constructor.call(this, a, b)
  this.cb('\u00a0\u00a0\u00a0')
}
w(tk, Of)
tk.Y = function (a) {
  return new tk(a.colour)
}
d = tk.prototype
d.Ue = !0
d.lu = null
d.Vw = null
d.Qp = 0
d.$s = 'silver'
d.Zs = 'white'
d.Z = function () {
  tk.o.Z.call(this)
  this.eb = new zc(16, 12)
  this.Oc.style.fillOpacity = 1
  this.Oc.setAttribute('width', this.eb.width + 10)
  this.setValue(this.getValue())
}
d.Oj = 'default'
d.A = function () {
  C.H.Mi(this)
  tk.o.A.call(this)
}
d.Vh = function () {}
d.getValue = function () {
  return this.ed
}
d.setValue = function (a) {
  this.v &&
    C.i.isEnabled() &&
    this.ed != a &&
    C.i.M(new C.i.zc(this.v, 'field', this.name, this.ed, a))
  this.ed = a
  this.Oc && (this.Oc.style.fill = a)
}
d.Ab = function () {
  var a = this.ed,
    b = a.match(/^#(.)\1(.)\2(.)\3$/)
  b && (a = '#' + b[1] + b[2] + b[3])
  return a
}
var uk =
    '#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033'.split(
      ' '
    ),
  vk = []
tk.prototype.setColumns = function (a) {
  this.Qp = a
  return this
}
tk.prototype.Ff = function () {
  lk()
  hk()
  var a = this.pi()
  Zj.appendChild(a)
  var b = this.$s
  bk.style.backgroundColor = this.Zs
  bk.style.borderColor = b
  ik(this)
  C.$a(a, 'mouseup', this, this.fj)
}
tk.prototype.fj = function (a) {
  ;(a = a.target) && !a.label && (a = a.parentNode)
  a = a && a.label
  C.H.Aa()
  this.v && (a = md(this, a))
  null !== a && this.setValue(a)
}
tk.prototype.pi = function () {
  var a = this.Qp || 7,
    b = this.lu || uk,
    c = this.Vw || vk,
    e = this.getValue(),
    f = document.createElement('table')
  f.className = 'blocklyColourTable'
  for (var h, k = 0; k < b.length; k++) {
    0 == k % a && ((h = document.createElement('tr')), f.appendChild(h))
    var l = document.createElement('td')
    h.appendChild(l)
    var m = document.createElement('div')
    l.appendChild(m)
    l.label = b[k]
    l.title = c[k] || b[k]
    m.style.backgroundColor = b[k]
    b[k] == e && (m.className = 'blocklyColourSelected')
  }
  return f
}
Qf('field_colour', tk)
function Yj(a, b, c, e, f, h) {
  this.v = null
  this.ka = Number(c)
  this.W = Number(b)
  this.eb = new zc(this.W, this.ka + 10)
  this.$u = h
  this.Lg = ''
  this.setValue(a)
  this.cb(e)
  'function' == typeof f && (this.bk = f)
}
w(Yj, Of)
Yj.Y = function (a) {
  var b = C.h.Qb(a.src),
    c = Number(C.h.Qb(a.width)),
    e = Number(C.h.Qb(a.height)),
    f = C.h.Qb(a.alt)
  return new Yj(b, c, e, f, null, !!a.flipRtl)
}
d = Yj.prototype
d.Lf = !1
d.Z = function () {
  this.Ra ||
    ((this.Ra = C.h.B('g', {}, null)),
    this.Fa || (this.Ra.style.display = 'none'),
    (this.bc = C.h.B(
      'image',
      { height: this.ka + 'px', width: this.W + 'px' },
      this.Ra
    )),
    this.setValue(this.ss),
    this.cb(this.oa),
    this.v.R().appendChild(this.Ra),
    this.Lg ? (this.bc.Mc = this.Lg) : this.pd(this.v),
    C.C.Of(this.bc),
    this.bk && (this.hl = C.J(this.Ra, 'mousedown', this, this.bk)))
}
d.A = function () {
  this.Ra && (C.h.removeNode(this.Ra), (this.Ra = null))
  this.bc = null
}
d.pd = function (a) {
  this.Lg = a
  this.bc && (this.bc.Mc = a)
}
d.getValue = function () {
  return this.ss
}
d.setValue = function (a) {
  null !== a &&
    ((this.ss = a),
    this.bc &&
      this.bc.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        a || ''
      ))
}
d.cb = function (a) {
  null !== a && ((this.oa = a), this.bc && this.bc.setAttribute('alt', a || ''))
}
d.Ge = function () {}
d.yi = function () {}
d.Vh = function () {}
d.Ff = function () {
  this.bk && this.bk(this)
}
Qf('field_image', Yj)
function wk(a, b, c, e, f) {
  e = parseFloat(e)
  this.ul = isNaN(e) ? 0 : e
  e = this.ul.toString()
  var h = e.indexOf('.')
  this.Fq = -1 == h ? -1 : e.length - (h + 1)
  b = parseFloat(b)
  this.Xv = isNaN(b) ? -Infinity : b
  c = parseFloat(c)
  this.Wv = isNaN(c) ? Infinity : c
  a = a && !isNaN(a) ? String(a) : '0'
  wk.o.constructor.call(this, a, f)
}
w(wk, Oj)
wk.Y = function (a) {
  return new wk(a.value, a.min, a.max, a.precision)
}
wk.prototype.Ue = !0
wk.prototype.hm = function (a) {
  if (null === a) return null
  a = String(a)
  a = a.replace(/O/gi, '0')
  a = a.replace(/,/g, '')
  a = parseFloat(a || 0)
  if (isNaN(a)) return null
  a = Math.min(Math.max(a, this.Xv), this.Wv)
  this.ul && isFinite(a) && (a = Math.round(a / this.ul) * this.ul)
  return -1 == this.Fq ? String(a) : a.toFixed(this.Fq)
}
Qf('field_number', wk)
function xk(a, b, c, e) {
  this.mg = yk
  this.eb = new zc(0, 25)
  this.Kl = b
  this.Gu = a || ''
  a = e || ''
  if (null == c || void 0 == c) c = null
  else if (Array.isArray(c)) {
    b = !1
    for (e = 0; e < c.length; e++) c[e] == a && (b = !0)
    if (!b)
      throw Error(
        "Invalid default type '" + a + "' in the definition of a FieldVariable"
      )
  } else
    throw Error(
      "'variableTypes' was not an array in the definition of a FieldVariable"
    )
  this.Fu = a
  this.ex = c
  this.Ib = null
}
w(xk, ei)
xk.Y = function (a) {
  var b = C.h.Qb(a.variable)
  return new xk(b, null, a.variableTypes, a.defaultType)
}
d = xk.prototype
d.Ue = !0
d.Z = function () {
  this.Ra || (xk.o.Z.call(this), this.gg())
}
d.gg = function () {
  if (!this.Fd) {
    this.j = this.v.m
    var a = C.I.Kq(this.j, null, this.Gu, this.Fu)
    C.i.disable()
    try {
      this.setValue(a.ga())
    } finally {
      C.i.enable()
    }
  }
}
d.A = function () {
  xk.o.A.call(this)
  this.pa = this.j = null
}
d.wo = function (a) {
  if (a.La)
    throw Error('Variable fields are not allowed to exist on shadow blocks.')
  xk.o.wo.call(this, a)
}
d.getValue = function () {
  return this.Fd ? this.Fd.ga() : null
}
d.Ab = function () {
  return this.Fd ? this.Fd.name : ''
}
d.sd = function () {
  return this.Fd
}
d.setValue = function (a) {
  var b = C.I.sd(this.v.m, a)
  if (!b)
    throw Error("Variable id doesn't point to a real variable!  ID was " + a)
  var c = b.type,
    e
  a: if ((e = zk(this))) {
    for (var f = 0; f < e.length; f++)
      if (c == e[f]) {
        e = !0
        break a
      }
    e = !1
  } else e = !0
  if (!e) throw Error("Variable type doesn't match this field!  Type was " + c)
  this.v &&
    C.i.isEnabled() &&
    ((c = this.Fd ? this.Fd.ga() : null),
    C.i.M(new C.i.zc(this.v, 'field', this.name, c, a)))
  this.Fd = b
  this.Ib = a
  this.cb(b.name)
}
function zk(a) {
  var b = a.ex
  if (null === b && a.v) return a.v.m.Tm()
  b = b || ['']
  if (0 == b.length)
    throw (
      ((a = a.Ab()),
      Error("'variableTypes' of field variable " + a + ' was an empty list'))
    )
  return b
}
function yk() {
  if (!this.Fd)
    throw Error(
      'Tried to call dropdownCreate on a variable field with no variable selected.'
    )
  var a = this.Ab(),
    b = null
  this.v && (b = this.v.m)
  var c = []
  if (b)
    for (var e = zk(this), f = 0; f < e.length; f++) c = c.concat(b.Fi(e[f]))
  c.sort(Qi)
  b = []
  for (f = 0; f < c.length; f++) b[f] = [c[f].name, c[f].ga()]
  b.push([C.g.RENAME_VARIABLE, C.mp])
  C.g.DELETE_VARIABLE && b.push([C.g.DELETE_VARIABLE.replace('%1', a), C.Xo])
  return b
}
d.Gr = function (a) {
  a = a.getValue()
  if (this.v && this.v.m) {
    var b = this.v.m
    if (a == C.mp) {
      C.I.Zn(b, this.Fd)
      return
    }
    if (a == C.Xo) {
      b.Sf(this.Fd.ga())
      return
    }
  }
  this.setValue(a)
}
d.Ih = function () {
  return !0
}
Qf('field_variable', xk)
function Cj() {
  this.cw = 'JavaScript'
}
d = Cj.prototype
d.Zo = null
d.np = null
d.kt = '  '
d.Ts = 60
d.Tj = []
function Ak() {
  var a = C.D,
    b = P
  b ||
    (console.warn('No workspace specified in workspaceToCode call.  Guessing.'),
    (b = C.df()))
  var c = []
  a.Z(b)
  b = ud(b, !0)
  for (var e = 0, f; (f = b[e]); e++) {
    var h = Bk(a, f)
    Array.isArray(h) && (h = h[0])
    h && (f.P && (h = a.gs(h)), c.push(h))
  }
  c = c.join('\n')
  c = a.finish(c)
  c = c.replace(/^\s+\n/, '')
  c = c.replace(/\n\s+$/, '\n')
  return (c = c.replace(/[ \t]+\n/g, '\n'))
}
function Ck(a, b) {
  return b + a.replace(/(?!\n$)\n/g, '\n' + b)
}
function Bk(a, b) {
  if (!b) return ''
  if (b.disabled) return Bk(a, Vc(b))
  var c = a[b.type]
  if ('function' != typeof c)
    throw Error(
      'Language "' +
        a.cw +
        '" does not know how to generate  code for block type "' +
        b.type +
        '".'
    )
  c = c.call(b, b)
  if (Array.isArray(c)) {
    if (!b.P)
      throw TypeError('Expecting string from statement block: ' + b.type)
    return [a.io(b, c[0], void 0), c[1]]
  }
  if ('string' == typeof c) {
    var e = b.id.replace(/\$/g, '$$$$')
    a.np && (c = a.np.replace(/%1/g, "'" + e + "'") + c)
    return a.io(b, c, void 0)
  }
  if (null === c) return ''
  throw SyntaxError('Invalid code generated: ' + c)
}
function Dk(a, b, c) {
  var e = C.D
  if (isNaN(c)) throw TypeError('Expecting valid order from block: ' + a.type)
  var f = Ij(a, b)
  if (!f) return ''
  b = Bk(e, f)
  if ('' === b) return ''
  if (!Array.isArray(b))
    throw TypeError('Expecting tuple from value block: ' + f.type)
  a = b[0]
  b = b[1]
  if (isNaN(b))
    throw TypeError('Expecting valid order from value block: ' + f.type)
  if (!a) return ''
  f = !1
  var h = Math.floor(c),
    k = Math.floor(b)
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.Tj.length; h++)
      if (e.Tj[h][0] == c && e.Tj[h][1] == b) {
        f = !1
        break
      }
  f && (a = '(' + a + ')')
  return a
}
function Ek(a, b) {
  var c = C.D
  a = Ij(a, b)
  b = Bk(c, a)
  if ('string' != typeof b)
    throw TypeError('Expecting code from statement block: ' + (a && a.type))
  b && (b = Ck(b, c.kt))
  return b
}
d.Vl = ''
function Fk(a) {
  var b = C.D
  b.Vl += a + ','
}
d.Z = function () {}
d.io = function (a, b) {
  return b
}
d.finish = function (a) {
  return a
}
d.gs = function (a) {
  return a
}
function Gk() {
  var a = C.D.Vl
  this.Hs = ''
  this.$r = Object.create(null)
  if (a) {
    a = a.split(',')
    for (var b = 0; b < a.length; b++) this.$r[a[b]] = !0
  }
  this.reset()
}
Gk.prototype.reset = function () {
  this.gd = Object.create(null)
  this.mq = Object.create(null)
  this.pa = null
}
Gk.prototype.getName = function (a, b) {
  if (b == C.I.ci) {
    var c = a
    this.pa
      ? (c = (c = this.pa.Ae(c)) ? c.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (c = null))
    c && (a = c)
  }
  c = a.toLowerCase() + '_' + b
  var e = b == C.I.ci || 'DEVELOPER_VARIABLE' == b ? this.Hs : ''
  if (c in this.gd) return e + this.gd[c]
  a
    ? ((a = encodeURI(a.replace(/ /g, '_')).replace(/[^\w]/g, '_')),
      -1 != '0123456789'.indexOf(a[0]) && (a = 'my_' + a))
    : (a = 'unnamed')
  for (var f = ''; this.mq[a + f] || a + f in this.$r; ) f = f ? f + 1 : 2
  a += f
  this.mq[a] = !0
  b = (b == C.I.ci || 'DEVELOPER_VARIABLE' == b ? this.Hs : '') + a
  this.gd[c] = b.substr(e.length)
  return b
}
C.Xa = {}
C.Xa.ci = C.lp
C.Xa.Nt = function (a) {
  a = Be(a, !1)
  for (var b = [], c = [], e = 0; e < a.length; e++)
    if (a[e].Yf) {
      var f = a[e].Yf()
      f && (f[2] ? b.push(f) : c.push(f))
    }
  c.sort(C.Xa.Vr)
  b.sort(C.Xa.Vr)
  return [c, b]
}
C.Xa.Vr = function (a, b) {
  return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
}
C.Xa.Yu = function (a, b) {
  if (b.Gc) return a
  for (; !C.Xa.Lv(a, b.m, b); ) {
    var c = a.match(/^(.*?)(\d+)$/)
    a = c ? c[1] + (parseInt(c[2], 10) + 1) : a + '2'
  }
  return a
}
C.Xa.Lv = function (a, b, c) {
  return !C.Xa.Nv(a, b, c)
}
C.Xa.Nv = function (a, b, c) {
  b = Be(b, !1)
  for (var e = 0; e < b.length; e++)
    if (b[e] != c && b[e].Yf && b[e].Yf()[0].toLowerCase() == a.toLowerCase())
      return !0
  return !1
}
C.Xa.Dy = function (a) {
  a = a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
  var b = C.Xa.Yu(a, this.v),
    c = this.oa
  if (c != a && c != b) {
    a = Be(this.v.m, !1)
    for (var e = 0; e < a.length; e++) a[e].Bw && a[e].Bw(c, b)
  }
  return b
}
C.Xa.af = function (a) {
  function b(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        p = C.u.h.createElement('block')
      p.setAttribute('type', k)
      p.setAttribute('gap', 16)
      var t = C.u.h.createElement('mutation')
      t.setAttribute('name', m)
      p.appendChild(t)
      for (m = 0; m < n.length; m++) {
        var r = C.u.h.createElement('arg')
        r.setAttribute('name', n[m])
        t.appendChild(r)
      }
      c.push(p)
    }
  }
  var c = []
  if (C.hb.procedures_defnoreturn) {
    var e = C.u.h.createElement('block')
    e.setAttribute('type', 'procedures_defnoreturn')
    e.setAttribute('gap', 16)
    var f = C.u.h.createElement('field')
    f.setAttribute('name', 'NAME')
    f.appendChild(C.u.h.createTextNode(C.g.PROCEDURES_DEFNORETURN_PROCEDURE))
    e.appendChild(f)
    c.push(e)
  }
  C.hb.procedures_defreturn &&
    ((e = C.u.h.createElement('block')),
    e.setAttribute('type', 'procedures_defreturn'),
    e.setAttribute('gap', 16),
    (f = C.u.h.createElement('field')),
    f.setAttribute('name', 'NAME'),
    f.appendChild(C.u.h.createTextNode(C.g.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    c.push(e))
  C.hb.procedures_ifreturn &&
    ((e = C.u.h.createElement('block')),
    e.setAttribute('type', 'procedures_ifreturn'),
    e.setAttribute('gap', 16),
    c.push(e))
  c.length && c[c.length - 1].setAttribute('gap', 24)
  a = C.Xa.Nt(a)
  b(a[0], 'procedures_callnoreturn')
  b(a[1], 'procedures_callreturn')
  return c
}
C.Xa.dv = function (a, b) {
  var c = []
  b = Be(b, !1)
  for (var e = 0; e < b.length; e++)
    if (b[e].hv) {
      var f = b[e].hv()
      f && f.toLowerCase() == a.toLowerCase() && c.push(b[e])
    }
  return c
}
C.Xa.yy = function (a) {
  var b = C.i.Pb,
    c = a.Yf()[0],
    e = a.Ic(!0)
  a = C.Xa.dv(c, a.m)
  c = 0
  for (var f; (f = a[c]); c++) {
    var h = f.Ic()
    h = h && C.u.Zb(h)
    f.ve(e)
    var k = f.Ic()
    k = k && C.u.Zb(k)
    h != k &&
      ((C.i.Pb = !1),
      C.i.M(new C.i.zc(f, 'mutation', null, h, k)),
      (C.i.Pb = b))
  }
}
C.Xa.qy = function (a, b) {
  b = ud(b, !1)
  for (var c = 0; c < b.length; c++)
    if (b[c].Yf) {
      var e = b[c].Yf()
      if (e && e[0].toLowerCase() == a.toLowerCase()) return b[c]
    }
  return null
}
function Hk(a, b, c, e) {
  this.j = a
  this.ma = b
  this.oa = c.getAttribute('text')
  this.ec = new B(0, 0)
  this.nf = e
  this.Zj = c.getAttribute('callbackKey')
  this.$p = c.getAttribute('web-class') || null
}
d = Hk.prototype
d.width = 0
d.height = 0
d.rg = null
d.X = function () {
  var a = this.nf ? 'blocklyFlyoutLabel' : 'blocklyFlyoutButton'
  this.$p && (a += ' ' + this.$p)
  this.w = C.h.B('g', { class: a }, this.j.Ea)
  if (!this.nf)
    var b = C.h.B(
      'rect',
      { class: 'blocklyFlyoutButtonShadow', rx: 4, ry: 4, x: 1, y: 1 },
      this.w
    )
  a = C.h.B(
    'rect',
    {
      class: this.nf
        ? 'blocklyFlyoutLabelBackground'
        : 'blocklyFlyoutButtonBackground',
      rx: 4,
      ry: 4
    },
    this.w
  )
  var c = C.h.B(
    'text',
    {
      class: this.nf ? 'blocklyFlyoutLabelText' : 'blocklyText',
      x: 0,
      y: 0,
      'text-anchor': 'middle'
    },
    this.w
  )
  c.textContent = C.h.Qb(this.oa)
  this.width = Uf(c)
  this.height = 20
  this.nf ||
    ((this.width += 10),
    b.setAttribute('width', this.width),
    b.setAttribute('height', this.height))
  a.setAttribute('width', this.width)
  a.setAttribute('height', this.height)
  c.setAttribute('x', this.width / 2)
  c.setAttribute('y', this.height - 5)
  Ik(this)
  this.rg = C.J(this.w, 'mouseup', this, this.vw)
  return this.w
}
d.show = function () {
  Ik(this)
  this.w.setAttribute('display', 'block')
}
function Ik(a) {
  a.w.setAttribute('transform', 'translate(' + a.ec.x + ',' + a.ec.y + ')')
}
d.moveTo = function (a, b) {
  this.ec.x = a
  this.ec.y = b
  Ik(this)
}
d.Lq = function () {
  return this.ec
}
d.A = function () {
  this.rg && C.wa(this.rg)
  this.w && (C.h.removeNode(this.w), (this.w = null))
  this.ma = this.j = null
}
d.vw = function (a) {
  ;(a = this.ma.Qd(a)) && a.cancel()
  this.nf && this.Zj
    ? console.warn('Labels should not have callbacks. Label text: ' + this.oa)
    : this.nf || (this.Zj && uj(this.ma, this.Zj))
    ? this.nf || uj(this.ma, this.Zj)(this)
    : console.warn('Buttons should have callbacks. Button text: ' + this.oa)
}
function Jk(a) {
  a.ab = this.ze.bind(this)
  a.Ie = this.Bl.bind(this)
  this.j = new cj(a)
  this.j.Ce = !0
  this.s = !!a.s
  this.wc = a.aa
  this.Fm = []
  this.dl = []
  this.ii = []
  this.uc = []
  this.Pn = []
}
d = Jk.prototype
d.$g = !0
d.qf = !1
d.Pf = !0
d.ea = 8
d.bd = Jk.prototype.ea
d.dt = 3 * Jk.prototype.bd
d.et = 3 * Jk.prototype.bd
d.Mf = 2
d.W = 0
d.ka = 0
d.yq = 70
d.X = function (a) {
  this.w = C.h.B(a, { class: 'blocklyFlyout', style: 'display: none' }, null)
  this.Wc = C.h.B('path', { class: 'blocklyFlyoutBackground' }, this.w)
  this.w.appendChild(this.j.X())
  return this.w
}
d.Z = function (a) {
  this.ma = a
  this.j.Kg = a
  this.Gb = new ui(this.j, this.Sd, !1, 'blocklyFlyoutScrollbar')
  this.Aa()
  Array.prototype.push.apply(this.Fm, C.J(this.w, 'wheel', this, this.Ms))
  this.$g || ((this.vk = this.Hm.bind(this)), this.ma.jc(this.vk))
  Array.prototype.push.apply(this.Fm, C.J(this.Wc, 'mousedown', this, this.uf))
  this.j.Qd = this.ma.Qd.bind(this.ma)
  this.j.pa = this.ma.pa
  a = this.j
  a.Hh = new Ae(a)
}
d.A = function () {
  this.Aa()
  C.wa(this.Fm)
  this.vk && (this.ma.yf(this.vk), (this.vk = null))
  this.Gb && (this.Gb.A(), (this.Gb = null))
  this.j && ((this.j.Kg = null), this.j.A(), (this.j = null))
  this.w && (C.h.removeNode(this.w), (this.w = null))
  this.ma = this.Wc = null
}
d.ac = function () {
  return this.W
}
d.kh = function () {
  return this.ka
}
d.Mk = function () {
  return this.j
}
d.isVisible = function () {
  return this.qf
}
d.la = function (a) {
  var b = a != this.isVisible()
  this.qf = a
  b && this.Dj()
}
d.yg = function (a) {
  var b = a != this.Pf
  this.Pf = a
  b && this.Dj()
}
d.Dj = function () {
  var a = this.Pf ? this.isVisible() : !1
  this.w.style.display = a ? 'block' : 'none'
  this.Gb.yg(a)
}
function Kk(a, b, c, e, f) {
  a.w.setAttribute('width', b)
  a.w.setAttribute('height', c)
  'svg' == a.w.tagName
    ? C.h.lj(a.w, 'translate(' + e + 'px,' + f + 'px)')
    : a.w.setAttribute('transform', 'translate(' + e + ',' + f + ')')
  a.Gb &&
    ((a.Gb.Ln = new B(e, f)), a.Gb.resize(), Ai(a.Gb, a.Gb.ec.x, a.Gb.ec.y))
}
d.Aa = function () {
  if (this.isVisible()) {
    this.la(!1)
    for (var a = 0, b; (b = this.uc[a]); a++) C.wa(b)
    this.uc.length = 0
    this.wf && (this.j.yf(this.wf), (this.wf = null))
  }
}
d.show = function (a) {
  this.j.Hb(!1)
  this.Aa()
  Lk(this)
  if ('string' == typeof a) {
    a = this.j.Kg.Io[a] || null
    if ('function' != typeof a)
      throw TypeError(
        "Couldn't find a callback function when opening a toolbox category."
      )
    a = a(this.j.Kg)
    if (!Array.isArray(a))
      throw TypeError('Result of toolbox category callback must be an array.')
  }
  this.la(!0)
  var b = [],
    c = []
  this.Pn.length = 0
  for (var e = this.Sd ? this.dt : this.et, f = 0, h; (h = a[f]); f++)
    if (h.tagName)
      switch (h.tagName.toUpperCase()) {
        case 'BLOCK':
          var k = C.u.fh(h, this.j)
          k.disabled && this.Pn.push(k)
          b.push({ type: 'block', block: k })
          h = parseInt(h.getAttribute('gap'), 10)
          c.push(isNaN(h) ? e : h)
          break
        case 'SEP':
          h = parseInt(h.getAttribute('gap'), 10)
          !isNaN(h) && 0 < c.length ? (c[c.length - 1] = h) : c.push(e)
          break
        case 'LABEL':
          var l = !0
        case 'BUTTON':
          ;(h = new Hk(this.j, this.ma, h, l)),
            b.push({ type: 'button', button: h }),
            c.push(e)
      }
  this.jr(b, c)
  this.uc.push(
    C.J(this.Wc, 'mouseover', this, function () {
      for (var m = ud(this.j, !1), n = 0, p; (p = m[n]); n++) p.ug()
    })
  )
  this.Sd ? (this.ka = 0) : (this.W = 0)
  this.j.Hb(!0)
  this.Xn()
  this.Hm()
  this.position()
  this.wf = this.Xn.bind(this)
  this.j.jc(this.wf)
}
function Lk(a) {
  for (var b = ud(a.j, !1), c = 0, e; (e = b[c]); c++) e.m == a.j && e.A(!1, !1)
  for (c = 0; c < a.dl.length; c++) (b = a.dl[c]) && C.h.removeNode(b)
  for (c = a.dl.length = 0; (b = a.ii[c]); c++) b.A()
  a.ii.length = 0
  a.j.Hh.clear()
}
function Mk(a, b, c, e) {
  a.uc.push(C.J(b, 'mousedown', null, Nk(a, c)))
  a.uc.push(C.J(e, 'mousedown', null, Nk(a, c)))
  a.uc.push(C.$a(b, 'mouseover', c, c.Zg))
  a.uc.push(C.$a(b, 'mouseout', c, c.ug))
  a.uc.push(C.$a(e, 'mouseover', c, c.Zg))
  a.uc.push(C.$a(e, 'mouseout', c, c.ug))
}
function Nk(a, b) {
  return function (c) {
    var e = a.ma.Qd(c)
    e && (xf(e, b), wf(e, c, a))
  }
}
d.uf = function (a) {
  var b = this.ma.Qd(a)
  b && wf(b, a, this)
}
d.cr = function (a) {
  return !a.disabled
}
function qf(a, b) {
  var c = null
  C.i.disable()
  var e = a.ma.xe()
  a.ma.Hb(!1)
  try {
    var f = a.ma
    if (!b.R()) throw Error('oldBlock is not rendered.')
    var h = C.u.Xe(b)
    f.Hb(!1)
    var k = C.u.fh(h, f)
    if (!k.R()) throw Error('block is not rendered.')
    var l = C.h.Fk(f.Ea),
      m = C.h.Fk(a.j.Ea),
      n = b.qa().scale(a.j.scale),
      p = xc(yc(m, n), l).scale(1 / f.scale)
    k.moveBy(p.x, p.y)
    c = k
    C.Nb()
  } finally {
    C.i.enable()
  }
  b = C.I.Hq(a.ma, e)
  if (C.i.isEnabled())
    for (C.i.K(!0), C.i.M(new Xc(c)), e = 0; e < b.length; e++)
      C.i.M(new ad(b[e]))
  a.$g ? a.Aa() : a.Hm()
  return c
}
function Ok(a, b, c, e) {
  var f = b.X()
  b.moveTo(c, e)
  b.show()
  a.uc.push(C.J(f, 'mousedown', a, a.uf))
  a.ii.push(b)
}
function Pk(a, b, c, e, f, h) {
  c = C.h.B(
    'rect',
    { 'fill-opacity': 0, x: c, y: e, height: f.height, width: f.width },
    null
  )
  c.Mc = b
  C.C.Of(c)
  a.j.Ea.insertBefore(c, b.R())
  b.wk = c
  return (a.dl[h] = c)
}
function Qk(a, b, c) {
  var e = c.Mb()
  b.setAttribute('width', e.width)
  b.setAttribute('height', e.height)
  var f = c.Eo ? 15 : 0
  f && c.moveBy(0, f)
  f = c.P ? I : 0
  c = c.qa()
  b.setAttribute('y', c.y)
  b.setAttribute('x', a.s ? c.x - e.width + f : c.x - f)
}
d.Hm = function () {
  for (var a = ud(this.j, !1), b = 0, c; (c = a[b]); b++)
    if (-1 == this.Pn.indexOf(c))
      for (var e = !Le(this.ma, C.h.Nm(c)); c; ) c.Cf(e), (c = Vc(c))
}
d.Xn = function () {
  this.wf && this.j.yf(this.wf)
  this.Yr()
  this.wf && this.j.jc(this.wf)
}
function of(a) {
  return a.Gb ? a.Gb.isVisible() : !1
}
function Mi(a) {
  a.ab = this.ze.bind(this)
  a.Ie = this.Bl.bind(this)
  Mi.o.constructor.call(this, a)
  this.Sd = !0
}
w(Mi, Jk)
d = Mi.prototype
d.ze = function () {
  if (!this.isVisible()) return null
  try {
    var a = this.j.Ea.getBBox()
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 }
  }
  var b = this.Mf,
    c = this.Mf
  this.wc == C.Ve && (b = 0)
  var e = this.ka
  this.wc == C.ic && (e -= this.Mf)
  return {
    Ba: e,
    xa: this.W - 2 * this.Mf,
    lc: (a.height + 2 * this.bd) * this.j.scale,
    Dc: (a.width + 2 * this.bd) * this.j.scale,
    gb: -this.j.scrollY,
    Va: -this.j.scrollX,
    yb: 0,
    Kb: 0,
    Za: b,
    Ya: c
  }
}
d.Bl = function (a) {
  var b = this.ze()
  b &&
    ('number' == typeof a.x && (this.j.scrollX = -b.Dc * a.x),
    this.j.translate(this.j.scrollX + b.Ya, this.j.scrollY + b.Za))
}
d.position = function () {
  if (this.isVisible()) {
    var a = this.ma.ab()
    a &&
      ((this.W = a.xa),
      this.no(a.xa - 2 * this.ea, this.ka - this.ea),
      Kk(
        this,
        this.W,
        this.ka,
        0,
        this.ma.aa == this.wc
          ? a.Cs
            ? this.wc == C.ic
              ? a.Cs
              : a.Ba - this.ka
            : this.wc == C.ic
            ? 0
            : a.Ba
          : this.wc == C.ic
          ? 0
          : a.Ba + a.Za - this.ka
      ))
  }
}
d.no = function (a, b) {
  var c = this.wc == C.ic,
    e = ['M 0,' + (c ? 0 : this.ea)]
  c
    ? (e.push('h', a + 2 * this.ea),
      e.push('v', b),
      e.push('a', this.ea, this.ea, 0, 0, 1, -this.ea, this.ea),
      e.push('h', -1 * a),
      e.push('a', this.ea, this.ea, 0, 0, 1, -this.ea, -this.ea))
    : (e.push('a', this.ea, this.ea, 0, 0, 1, this.ea, -this.ea),
      e.push('h', a),
      e.push('a', this.ea, this.ea, 0, 0, 1, this.ea, this.ea),
      e.push('v', b),
      e.push('h', -a - 2 * this.ea))
  e.push('z')
  this.Wc.setAttribute('d', e.join(' '))
}
d.ho = function () {
  this.Gb.set(this.s ? Infinity : 0)
}
d.Ms = function (a) {
  var b = C.h.Sm(a),
    c = b.x || b.y
  c &&
    ((b = this.ze()),
    (c = b.Va + c),
    (c = Math.min(c, b.Dc - b.xa)),
    (c = Math.max(c, 0)),
    this.Gb.set(c),
    C.H.Aa())
  a.preventDefault()
  a.stopPropagation()
}
d.jr = function (a, b) {
  this.j.scale = this.ma.scale
  var c = this.bd,
    e = this.s ? c : c + I
  this.s && (a = a.reverse())
  for (var f = 0, h; (h = a[f]); f++)
    if ('block' == h.type) {
      h = h.block
      for (var k = E(h, !1), l = 0, m; (m = k[l]); l++) m.Gc = !0
      h.$()
      k = h.R()
      l = h.Mb()
      m = h.P ? I : 0
      m = this.s ? e + l.width : e + m
      h.moveBy(m, c)
      m = Pk(this, h, m, c, l, f)
      e += l.width + b[f]
      Mk(this, k, h, m)
    } else
      'button' == h.type &&
        (Ok(this, h.button, e, c), (e += h.button.width + b[f]))
}
d.dr = function (a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180
  var b = this.yq
  return (a < 90 + b && a > 90 - b) || (a > -90 - b && a < -90 + b) ? !0 : !1
}
d.ih = function () {
  if (!this.w) return null
  var a = this.w.getBoundingClientRect(),
    b = a.top
  a = a.height
  if (this.wc == C.ic) return new Bf(-1e9, b - 1e9, 2e9, 1e9 + a)
  if (this.wc == C.Ve) return new Bf(-1e9, b, 2e9, 1e9 + a)
}
d.Yr = function () {
  this.j.scale = this.ma.scale
  for (var a = 0, b = ud(this.j, !1), c = 0, e; (e = b[c]); c++)
    a = Math.max(a, e.Mb().height)
  a += 1.5 * this.bd
  a *= this.j.scale
  a += J
  if (this.ka != a) {
    for (c = 0; (e = b[c]); c++) e.wk && Qk(this, e.wk, e)
    this.ka = a
    this.position()
  }
}
function Ni(a) {
  a.ab = this.ze.bind(this)
  a.Ie = this.Bl.bind(this)
  Ni.o.constructor.call(this, a)
  this.Sd = !1
}
w(Ni, Jk)
d = Ni.prototype
d.ze = function () {
  if (!this.isVisible()) return null
  try {
    var a = this.j.Ea.getBBox()
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 }
  }
  var b = this.Mf,
    c = this.ka - 2 * this.Mf,
    e = this.W
  this.s || (e -= this.Mf)
  return {
    Ba: c,
    xa: e,
    lc: a.height * this.j.scale + 2 * this.bd,
    Dc: a.width * this.j.scale + 2 * this.bd,
    gb: -this.j.scrollY + a.y,
    Va: -this.j.scrollX,
    yb: a.y,
    Kb: a.x,
    Za: b,
    Ya: 0
  }
}
d.Bl = function (a) {
  var b = this.ze()
  b &&
    ('number' == typeof a.y && (this.j.scrollY = -b.lc * a.y),
    this.j.translate(this.j.scrollX + b.Ya, this.j.scrollY + b.Za))
}
d.position = function () {
  if (this.isVisible()) {
    var a = this.ma.ab()
    a &&
      ((this.ka = a.Ba),
      this.no(this.W - this.ea, a.Ba - 2 * this.ea),
      Kk(
        this,
        this.W,
        this.ka,
        this.ma.aa == this.wc
          ? a.Ds
            ? this.wc == C.Bc
              ? a.Ds
              : a.xa - this.W
            : this.wc == C.Bc
            ? 0
            : a.xa
          : this.wc == C.Bc
          ? 0
          : a.xa + a.Ya - this.W,
        0
      ))
  }
}
d.no = function (a, b) {
  var c = this.wc == C.Gd,
    e = a + this.ea
  e = ['M ' + (c ? e : 0) + ',0']
  e.push('h', c ? -a : a)
  e.push(
    'a',
    this.ea,
    this.ea,
    0,
    0,
    c ? 0 : 1,
    c ? -this.ea : this.ea,
    this.ea
  )
  e.push('v', Math.max(0, b))
  e.push(
    'a',
    this.ea,
    this.ea,
    0,
    0,
    c ? 0 : 1,
    c ? this.ea : -this.ea,
    this.ea
  )
  e.push('h', c ? a : -a)
  e.push('z')
  this.Wc.setAttribute('d', e.join(' '))
}
d.ho = function () {
  this.Gb.set(0)
}
d.Ms = function (a) {
  var b = C.h.Sm(a)
  if (b.y) {
    var c = this.ze()
    b = c.gb - c.yb + b.y
    b = Math.min(b, c.lc - c.Ba)
    b = Math.max(b, 0)
    this.Gb.set(b)
    C.H.Aa()
  }
  a.preventDefault()
  a.stopPropagation()
}
d.jr = function (a, b) {
  this.j.scale = this.ma.scale
  for (var c = this.bd, e = this.s ? c : c + I, f = 0, h; (h = a[f]); f++)
    if ('block' == h.type) {
      h = h.block
      for (var k = E(h, !1), l = 0, m; (m = k[l]); l++) m.Gc = !0
      h.$()
      k = h.R()
      l = h.Mb()
      h.moveBy(e, c)
      m = Pk(this, h, this.s ? e - l.width : e, c, l, f)
      Mk(this, k, h, m)
      c += l.height + b[f]
    } else
      'button' == h.type &&
        (Ok(this, h.button, e, c), (c += h.button.height + b[f]))
}
d.dr = function (a) {
  a = (Math.atan2(a.y, a.x) / Math.PI) * 180
  var b = this.yq
  return (a < b && a > -b) || a < -180 + b || a > 180 - b ? !0 : !1
}
d.ih = function () {
  if (!this.w) return null
  var a = this.w.getBoundingClientRect(),
    b = a.left
  a = a.width
  if (this.wc == C.Bc) return new Bf(b - 1e9, -1e9, 1e9 + a, 2e9)
  if (z && this.ma && this.ma.wh) {
    var c = this.ma.w.getBoundingClientRect().x
    10 > Math.abs(c - b) && (b += this.xy * this.ma.options.Jc.scale)
  }
  return new Bf(b, -1e9, 1e9 + a, 2e9)
}
d.Yr = function () {
  this.j.scale = this.ma.scale
  for (var a = 0, b = ud(this.j, !1), c = 0, e; (e = b[c]); c++) {
    var f = e.Mb().width
    e.P && (f -= I)
    a = Math.max(a, f)
  }
  for (c = 0; (e = this.ii[c]); c++) a = Math.max(a, e.width)
  a += 1.5 * this.bd + I
  a *= this.j.scale
  a += J
  if (this.W != a) {
    for (c = 0; (e = b[c]); c++)
      this.s &&
        ((f = e.qa().x), e.moveBy(a / this.j.scale - this.bd - I - f, 0)),
        e.wk && Qk(this, e.wk, e)
    if (this.s)
      for (c = 0; (e = this.ii[c]); c++)
        (b = e.Lq().y), e.moveTo(a / this.j.scale - e.width - this.bd - I, b)
    this.W = a
    this.position()
  }
}
function Rk(a) {
  Ig.call(this)
  this.U = a
  a = y ? 'focusout' : 'blur'
  this.Rv = sg(this.U, y ? 'focusin' : 'focus', this, !y)
  this.Sv = sg(this.U, a, this, !y)
}
w(Rk, Ig)
Rk.prototype.handleEvent = function (a) {
  var b = new dg(a.Md)
  b.type = 'focusin' == a.type || 'focus' == a.type ? 'focusin' : 'focusout'
  this.dispatchEvent(b)
}
Rk.prototype.rb = function () {
  Rk.o.rb.call(this)
  Bg(this.Rv)
  Bg(this.Sv)
  delete this.U
}
function Sk(a, b) {
  null != a && this.append.apply(this, arguments)
}
d = Sk.prototype
d.qb = ''
d.set = function (a) {
  this.qb = '' + a
}
d.append = function (a, b, c) {
  this.qb += String(a)
  if (null != b)
    for (var e = 1; e < arguments.length; e++) this.qb += arguments[e]
  return this
}
d.clear = function () {
  this.qb = ''
}
d.toString = function () {
  return this.qb
}
function Tk(a, b, c) {
  Lg.call(this, c)
  this.Pa = b || Uk
  a instanceof Gb ||
    ((a = Jb(a)),
    (a = Kb(
      Ib(a)
        .toString()
        .replace(/(\r\n|\r|\n)/g, '<br>'),
      a.Xf()
    )))
  this.Oi = a
  this.ui = this.jo = !1
  this.Yw = null
  this.Kt = Rb
  this.Ui = !0
  this.nk = -1
}
w(Tk, Lg)
var Vk = {}
d = Tk.prototype
d.rb = function () {
  Tk.o.rb.call(this)
  this.Hf && (this.Hf.removeNode(this), (this.Hf = null))
  this.U = null
}
d.Rk = function () {
  var a = this.G()
  if (a) {
    var b = Wk(this)
    b && !b.id && (b.id = this.ga() + '.label')
    Wg(a, 'treeitem')
    M(a, 'selected', !1)
    M(a, 'level', this.jh())
    b && M(a, 'labelledby', b.id)
    ;(b = this.Ek()) && Wg(b, 'presentation')
    ;(b = this.Dk()) && Wg(b, 'presentation')
    if ((b = Xk(this)))
      if ((Wg(b, 'group'), b.hasChildNodes()))
        for (M(a, 'expanded', !1), a = Rg(this), b = 1; b <= a; b++) {
          var c = L(this, b - 1).G()
          M(c, 'setsize', a)
          M(c, 'posinset', b)
        }
  }
}
d.X = function () {
  var a = this.Pd()
  var b = this.Il(),
    c = a.Kd
  a = c.createElement('DIV')
  y ? ((b = Pb(Sb, b)), Ub(a, b), a.removeChild(a.firstChild)) : Ub(a, b)
  if (1 == a.childNodes.length) a = a.removeChild(a.firstChild)
  else {
    for (b = c.createDocumentFragment(); a.firstChild; )
      b.appendChild(a.firstChild)
    a = b
  }
  this.U = a
}
d.Lb = function () {
  Tk.o.Lb.call(this)
  Vk[this.ga()] = this
  this.Rk()
}
d.kd = function () {
  Tk.o.kd.call(this)
  delete Vk[this.ga()]
}
d.Yg = function (a, b) {
  var c = L(this, b - 1),
    e = L(this, b)
  Tk.o.Yg.call(this, a, b)
  a.Ad = c
  a.yd = e
  c ? (c.yd = a) : (this.Eq = a)
  e ? (e.Ad = a) : (this.gr = a)
  ;(b = this.pc()) && Yk(a, b)
  Zk(a, this.jh() + 1)
  if ((b = this.G()))
    if ((this.Uh(), M(b, 'expanded', this.nc()), this.nc())) {
      b = Xk(this)
      a.G() || a.X()
      var f = a.G(),
        h = e && e.G()
      b.insertBefore(f, h)
      this.ya && a.Lb()
      e || (c ? c.Uh() : (Jf(b, !0), this.Cd(this.nc())))
    }
}
d.add = function (a, b) {
  a.getParent() && a.getParent().removeChild(a)
  this.Yg(a, b ? Ug(this, b) : Rg(this))
  return a
}
d.removeChild = function (a) {
  var b = this.pc(),
    c = b ? b.fc : null
  if (c == a || a.contains(c))
    if (b.hasFocus()) {
      this.select()
      c = this.xw
      if (sa(c)) this && (c = za(c, this))
      else if (c && 'function' == typeof c.handleEvent) c = za(c.handleEvent, c)
      else throw Error('Invalid listener argument')
      2147483647 < Number(10) || g.setTimeout(c, 10)
    } else this.select()
  Tk.o.removeChild.call(this, a)
  this.gr == a && (this.gr = a.Ad)
  this.Eq == a && (this.Eq = a.yd)
  a.Ad && (a.Ad.yd = a.yd)
  a.yd && (a.yd.Ad = a.Ad)
  c = !a.yd
  a.Hf = null
  a.nk = -1
  if (b && (b.removeNode(a), this.ya)) {
    b = Xk(this)
    if (a.ya) {
      var e = a.G()
      b.removeChild(e)
      a.kd()
    }
    c && (c = L(this, Rg(this) - 1)) && c.Uh()
    Tg(this) ||
      ((b.style.display = 'none'),
      this.Uh(),
      (this.Ek().className = this.zk()),
      (b = this.G()) && b.removeAttribute('aria-expanded'))
  }
  return a
}
d.remove = Tk.prototype.removeChild
d.xw = function () {
  this.select()
}
d.jh = function () {
  var a = this.nk
  0 > a && ((a = (a = this.getParent()) ? a.jh() + 1 : 0), Zk(this, a))
  return a
}
function Zk(a, b) {
  if (b != a.nk) {
    a.nk = b
    var c = $k(a)
    if (c) {
      var e = al(a) + 'px'
      Sg(a) ? (c.style.paddingRight = e) : (c.style.paddingLeft = e)
    }
    Qg(a, function (f) {
      Zk(f, b + 1)
    })
  }
}
d.contains = function (a) {
  for (; a; ) {
    if (a == this) return !0
    a = a.getParent()
  }
  return !1
}
d.ye = function () {
  var a = []
  Qg(this, function (b) {
    a.push(b)
  })
  return a
}
d.Wk = function () {
  return this.jo
}
d.select = function () {
  var a = this.pc()
  a && a.Ke(this)
}
function bl(a, b) {
  if (a.jo != b) {
    a.jo = b
    cl(a)
    var c = a.G()
    c &&
      (M(c, 'selected', b),
      b && ((b = a.pc().G()), M(b, 'activedescendant', a.ga())))
  }
}
d.nc = function () {
  return this.ui
}
d.Cd = function (a) {
  var b = a != this.ui
  if (!b || this.dispatchEvent(a ? 'beforeexpand' : 'beforecollapse')) {
    this.ui = a
    var c = this.pc()
    var e = this.G()
    if (Tg(this)) {
      if ((!a && c && this.contains(c.fc) && this.select(), e)) {
        if ((c = Xk(this)))
          if (
            (Jf(c, a), M(e, 'expanded', a), a && this.ya && !c.hasChildNodes())
          ) {
            var f = []
            Qg(this, function (h) {
              f.push(h.Il())
            })
            Vb(c, Pb(f))
            Qg(this, function (h) {
              h.Lb()
            })
          }
        this.Uh()
      }
    } else (c = Xk(this)) && Jf(c, !1)
    e && (this.Ek().className = this.zk())
    b && this.dispatchEvent(a ? 'expand' : 'collapse')
  }
}
d.toggle = function () {
  this.Cd(!this.nc())
}
d.expand = function () {
  this.Cd(!0)
}
d.collapse = function () {
  this.Cd(!1)
}
d.fo = function () {
  var a = this.getParent()
  a && (a.Cd(!0), a.fo())
}
d.Il = function () {
  var a = this.pc(),
    b = !a.pj || (a == this.getParent() && !a.Bo) ? this.Pa.Zp : this.Pa.Yp
  a = this.nc() && Tg(this)
  b = { class: b, style: dl(this) }
  var c = []
  a &&
    Qg(this, function (e) {
      c.push(e.Il())
    })
  a = Ob('div', b, c)
  return Ob('div', { class: this.Pa.iq, id: this.ga() }, [el(this), a])
}
function al(a) {
  return Math.max(0, (a.jh() - 1) * a.Pa.fn)
}
function el(a) {
  var b = {}
  b['padding-' + (Sg(a) ? 'right' : 'left')] = al(a) + 'px'
  b = { class: a.Ci(), style: b }
  var c = a.Qm(),
    e = Ob('span', { style: { display: 'inline-block' }, class: a.zk() }),
    f = Ob('span', { class: a.Pa.jq, title: a.Yw || null }, a.Oi)
  a = Pb(f, Ob('span', {}, a.Kt))
  return Ob('div', b, [c, e, a])
}
d.Ci = function () {
  return this.Pa.tm + (this.Wk() ? ' ' + this.Pa.lq : '')
}
d.Qm = function () {
  return Ob('span', {
    type: 'expand',
    style: { display: 'inline-block' },
    class: fl(this)
  })
}
function fl(a) {
  var b = a.pc(),
    c = !b.pj || (b == a.getParent() && !b.Bo),
    e = a.Pa,
    f = new Sk()
  f.append(e.Qf, ' ', e.xu, ' ')
  if (Tg(a)) {
    var h = 0
    b.Ao && a.Ui && (h = a.nc() ? 2 : 1)
    c || (h = a.yd ? h + 8 : h + 4)
    switch (h) {
      case 1:
        f.append(e.Bu)
        break
      case 2:
        f.append(e.Au)
        break
      case 4:
        f.append(e.eq)
        break
      case 5:
        f.append(e.zu)
        break
      case 6:
        f.append(e.yu)
        break
      case 8:
        f.append(e.fq)
        break
      case 9:
        f.append(e.Du)
        break
      case 10:
        f.append(e.Cu)
        break
      default:
        f.append(e.cq)
    }
  } else c ? f.append(e.cq) : a.yd ? f.append(e.fq) : f.append(e.eq)
  return f.toString()
}
function dl(a) {
  var b = a.nc() && Tg(a)
  return xb({ 'background-position': gl(a), display: b ? null : 'none' })
}
function gl(a) {
  return (a.yd ? (a.jh() - 1) * a.Pa.fn : '-100') + 'px 0'
}
d.G = function () {
  var a = Tk.o.G.call(this)
  a || (this.U = a = this.Pd().G(this.ga()))
  return a
}
function $k(a) {
  return (a = a.G()) ? a.firstChild : null
}
d.Dk = function () {
  var a = $k(this)
  return a ? a.firstChild : null
}
d.Ek = function () {
  var a = $k(this)
  return a ? a.childNodes[1] : null
}
function Wk(a) {
  return (a = $k(a)) && a.lastChild ? a.lastChild.previousSibling : null
}
function Xk(a) {
  return (a = a.G()) ? a.lastChild : null
}
d.cb = function (a) {
  this.Oi = a = Jb(a)
  var b = Wk(this)
  b && Ub(b, a)
  ;(a = this.pc()) && hl(a, this)
}
d.Ab = function () {
  var a = Ib(this.Oi).toString()
  return -1 != a.indexOf('&') ? ('document' in g ? Yb(a) : $b(a)) : a
}
function cl(a) {
  var b = $k(a)
  b && (b.className = a.Ci())
}
d.Uh = function () {
  var a = this.Dk()
  a && (a.className = fl(this))
  if ((a = Xk(this))) a.style.backgroundPosition = gl(this)
}
d.Hr = function (a) {
  'expand' == a.target.getAttribute('type') && Tg(this)
    ? this.Ui && this.toggle()
    : (this.select(), cl(this))
}
d.fj = function (a) {
  a.preventDefault()
}
d.Er = function (a) {
  ;('expand' == a.target.getAttribute('type') && Tg(this)) ||
    (this.Ui && this.toggle())
}
d.In = function (a) {
  var b = !0
  switch (a.keyCode) {
    case 39:
      if (a.altKey) break
      Tg(this) && (this.nc() ? L(this, 0).select() : this.Cd(!0))
      break
    case 37:
      if (a.altKey) break
      if (Tg(this) && this.nc() && this.Ui) this.Cd(!1)
      else {
        var c = this.getParent(),
          e = this.pc()
        c && (e.Cg || c != e) && c.select()
      }
      break
    case 40:
      a: if (Tg(this) && this.nc()) c = L(this, 0)
      else {
        for (c = this; c != this.pc(); ) {
          e = c.yd
          if (null != e) {
            c = e
            break a
          }
          c = c.getParent()
        }
        c = null
      }
      c && c.select()
      break
    case 38:
      c = this.Ad
      null != c
        ? (c = il(c))
        : ((c = this.getParent()),
          (e = this.pc()),
          (c = (!e.Cg && c == e) || this == e ? null : c))
      c && c.select()
      break
    default:
      b = !1
  }
  b && (a.preventDefault(), (e = this.pc()) && e.Bj.clear())
  return b
}
function il(a) {
  return a.nc() && Tg(a) ? il(L(a, Rg(a) - 1)) : a
}
function Yk(a, b) {
  a.Hf != b &&
    ((a.Hf = b),
    hl(b, a),
    Qg(a, function (c) {
      Yk(c, b)
    }))
}
var Uk = {
  fn: 19,
  kq: 'goog-tree-root goog-tree-item',
  hq: 'goog-tree-hide-root',
  iq: 'goog-tree-item',
  Yp: 'goog-tree-children',
  Zp: 'goog-tree-children-nolines',
  tm: 'goog-tree-row',
  jq: 'goog-tree-item-label',
  Qf: 'goog-tree-icon',
  xu: 'goog-tree-expand-icon',
  Bu: 'goog-tree-expand-icon-plus',
  Au: 'goog-tree-expand-icon-minus',
  Du: 'goog-tree-expand-icon-tplus',
  Cu: 'goog-tree-expand-icon-tminus',
  zu: 'goog-tree-expand-icon-lplus',
  yu: 'goog-tree-expand-icon-lminus',
  fq: 'goog-tree-expand-icon-t',
  eq: 'goog-tree-expand-icon-l',
  cq: 'goog-tree-expand-icon-blank',
  rm: 'goog-tree-expanded-folder-icon',
  aq: 'goog-tree-collapsed-folder-icon',
  sm: 'goog-tree-file-icon',
  gq: 'goog-tree-expanded-folder-icon',
  bq: 'goog-tree-collapsed-folder-icon',
  lq: 'selected'
}
function jl(a, b, c) {
  Tk.call(this, a, b, c)
}
w(jl, Tk)
jl.prototype.pc = function () {
  if (this.Hf) return this.Hf
  var a = this.getParent()
  return a && (a = a.pc()) ? (Yk(this, a), a) : null
}
jl.prototype.zk = function () {
  var a = this.nc(),
    b = this.Uu
  if (a && b) return b
  b = this.Ev
  if (!a && b) return b
  b = this.Pa
  if (Tg(this)) {
    if (a && b.rm) return b.Qf + ' ' + b.rm
    if (!a && b.aq) return b.Qf + ' ' + b.aq
  } else if (b.sm) return b.Qf + ' ' + b.sm
  return ''
}
function kl(a) {
  if (a.Ei && 'function' == typeof a.Ei) return a.Ei()
  if (u(a)) return a.split('')
  if (ra(a)) {
    for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e])
    return b
  }
  b = []
  c = 0
  for (e in a) b[c++] = a[e]
  return b
}
function ll(a) {
  this.Ib = void 0
  this.Xb = {}
  if (a) {
    if (a.Hk && 'function' == typeof a.Hk) var b = a.Hk()
    else if (a.Ei && 'function' == typeof a.Ei) b = void 0
    else if (ra(a) || u(a)) {
      b = []
      for (var c = a.length, e = 0; e < c; e++) b.push(e)
    } else for (e in ((b = []), (c = 0), a)) b[c++] = e
    a = kl(a)
    for (c = 0; c < b.length; c++) this.set(b[c], a[c])
  }
}
d = ll.prototype
d.set = function (a, b) {
  ml(this, a, b, !1)
}
d.add = function (a, b) {
  ml(this, a, b, !0)
}
function ml(a, b, c, e) {
  for (var f = 0; f < b.length; f++) {
    var h = b.charAt(f)
    a.Xb[h] || (a.Xb[h] = new ll())
    a = a.Xb[h]
  }
  if (e && void 0 !== a.Ib)
    throw Error('The collection already contains the key "' + b + '"')
  a.Ib = c
}
d.get = function (a) {
  a: {
    for (var b = this, c = 0; c < a.length; c++)
      if (((b = b.Xb[a.charAt(c)]), !b)) {
        a = void 0
        break a
      }
    a = b
  }
  return a ? a.Ib : void 0
}
d.Ei = function () {
  var a = []
  nl(this, a)
  return a
}
function nl(a, b) {
  void 0 !== a.Ib && b.push(a.Ib)
  for (var c in a.Xb) nl(a.Xb[c], b)
}
d.Hk = function (a) {
  var b = []
  if (a) {
    for (var c = this, e = 0; e < a.length; e++) {
      var f = a.charAt(e)
      if (!c.Xb[f]) return []
      c = c.Xb[f]
    }
    ol(c, a, b)
  } else ol(this, '', b)
  return b
}
function ol(a, b, c) {
  void 0 !== a.Ib && c.push(b)
  for (var e in a.Xb) ol(a.Xb[e], b + e, c)
}
d.clear = function () {
  this.Xb = {}
  this.Ib = void 0
}
d.remove = function (a) {
  for (var b = this, c = [], e = 0; e < a.length; e++) {
    var f = a.charAt(e)
    if (!b.Xb[f])
      throw Error('The collection does not have the key "' + a + '"')
    c.push([b, f])
    b = b.Xb[f]
  }
  a = b.Ib
  for (delete b.Ib; 0 < c.length; )
    if (((f = c.pop()), (b = f[0]), (f = f[1]), b.Xb[f].er())) delete b.Xb[f]
    else break
  return a
}
d.clone = function () {
  return new ll(this)
}
d.er = function () {
  var a
  if ((a = void 0 === this.Ib))
    a: {
      for (var b in this.Xb) {
        a = !1
        break a
      }
      a = !0
    }
  return a
}
function pl() {
  this.qg = new ll()
  this.qb = ''
  this.cl = this.xn = null
  this.Bh = this.aj = 0
}
function ql(a, b) {
  var c = b.Ab()
  if (c && !/^[\s\xa0]*$/.test(null == c ? '' : String(c))) {
    c = c.toLowerCase()
    var e = a.qg.get(c)
    if (e) {
      for (var f = Rg(b), h = 0; h < f; h++) ql(a, L(b, h))
      Ka(e, b)
      e.length || a.qg.remove(c)
    }
  }
}
function rl(a, b) {
  var c = !1
  ;(b = a.qg.Hk(b)) &&
    b.length &&
    ((a.Bh = 0), (a.aj = 0), (c = a.qg.get(b[0])), (c = sl(a, c))) &&
    (a.xn = b)
  return c
}
function sl(a, b) {
  if (b) {
    if (a.Bh < b.length) {
      var c = b[a.Bh]
      a.cl = b
    }
    c && (c.fo(), c.select())
  }
  return !!c
}
pl.prototype.clear = function () {
  this.qb = ''
}
function tl(a, b, c) {
  Tk.call(this, a, b, c)
  this.ui = !0
  bl(this, !0)
  this.fc = this
  this.Bj = new pl()
  this.Km = this.dc = null
  this.xi = !1
  this.av = null
  this.Bo = this.Cg = this.Ao = this.pj = !0
  if (y)
    try {
      document.execCommand('BackgroundImageCache', !1, !0)
    } catch (e) {}
}
w(tl, Tk)
d = tl.prototype
d.pc = function () {
  return this
}
d.jh = function () {
  return 0
}
d.fo = function () {}
d.ov = function () {
  this.xi = !0
  jh(this.G(), 'focused')
  this.fc && this.fc.select()
}
d.iv = function () {
  this.xi = !1
  lh(this.G(), 'focused')
}
d.hasFocus = function () {
  return this.xi
}
d.nc = function () {
  return !this.Cg || tl.o.nc.call(this)
}
d.Cd = function (a) {
  this.Cg ? tl.o.Cd.call(this, a) : (this.ui = a)
}
d.Qm = function () {
  return Rb
}
d.Ek = function () {
  var a = $k(this)
  return a ? a.firstChild : null
}
d.Dk = function () {
  return null
}
d.Uh = function () {}
d.Ci = function () {
  return tl.o.Ci.call(this) + (this.Cg ? '' : ' ' + this.Pa.hq)
}
d.zk = function () {
  var a = this.nc(),
    b = this.Uu
  if (a && b) return b
  b = this.Ev
  if (!a && b) return b
  b = this.Pa
  return a && b.gq ? b.Qf + ' ' + b.gq : !a && b.bq ? b.Qf + ' ' + b.bq : ''
}
d.Ke = function (a) {
  if (this.fc != a) {
    var b = !1
    this.fc && ((b = this.fc == this.av), bl(this.fc, !1))
    if ((this.fc = a)) bl(a, !0), b && a.select()
    this.dispatchEvent('change')
  }
}
function ul(a) {
  0 != a.pj && ((a.pj = !1), a.ya && vl(a))
}
function vl(a) {
  function b(h) {
    var k = Xk(h)
    if (k) {
      var l = !e || (c == h.getParent() && !f) ? h.Pa.Zp : h.Pa.Yp
      k.className = l
      if ((k = h.Dk())) k.className = fl(h)
    }
    Qg(h, b)
  }
  var c = a,
    e = c.pj,
    f = c.Bo
  b(a)
}
function wl(a) {
  0 != a.Ao && ((a.Ao = !1), a.ya && vl(a))
}
function xl(a) {
  if (0 != a.Cg) {
    a.Cg = !1
    if (a.ya) {
      var b = $k(a)
      b && (b.className = a.Ci())
    }
    a.fc == a && L(a, 0) && a.Ke(L(a, 0))
  }
}
d.Rk = function () {
  tl.o.Rk.call(this)
  var a = this.G()
  Wg(a, 'tree')
  M(a, 'labelledby', Wk(this).id)
}
d.Lb = function () {
  tl.o.Lb.call(this)
  var a = this.G()
  a.className = this.Pa.kq
  a.setAttribute('hideFocus', 'true')
  a = this.G()
  a.tabIndex = 0
  var b = (this.dc = new ah(a)),
    c = (this.Km = new Rk(a))
  Og(this)
    .ra(c, 'focusout', this.iv)
    .ra(c, 'focusin', this.ov)
    .ra(b, 'key', this.td)
    .ra(a, 'mousedown', this.Wm)
    .ra(a, 'click', this.Wm)
    .ra(a, 'dblclick', this.Wm)
  this.Rk()
}
d.kd = function () {
  tl.o.kd.call(this)
  this.dc.A()
  this.dc = null
  this.Km.A()
  this.Km = null
}
d.Wm = function (a) {
  var b = yl(this, a)
  if (b)
    switch (a.type) {
      case 'mousedown':
        b.Hr(a)
        break
      case 'click':
        b.fj(a)
        break
      case 'dblclick':
        b.Er(a)
    }
}
d.td = function (a) {
  var b = this.Bj
  var c = !1
  switch (a.keyCode) {
    case 40:
    case 38:
      if (a.ctrlKey) {
        c = 40 == a.keyCode ? 1 : -1
        var e = b.xn
        if (e) {
          var f = null,
            h = !1
          if (b.cl) {
            var k = b.Bh + c
            0 <= k && k < b.cl.length ? ((b.Bh = k), (f = b.cl)) : (h = !0)
          }
          f ||
            ((k = b.aj + c),
            0 <= k && k < e.length && (b.aj = k),
            e.length > b.aj && (f = b.qg.get(e[b.aj])),
            f && f.length && h && (b.Bh = -1 == c ? f.length - 1 : 0))
          sl(b, f) && (b.xn = e)
        }
        c = !0
      }
      break
    case 8:
      e = b.qb.length - 1
      c = !0
      0 < e
        ? ((b.qb = b.qb.substring(0, e)), rl(b, b.qb))
        : 0 == e
        ? (b.qb = '')
        : (c = !1)
      break
    case 27:
      ;(b.qb = ''), (c = !0)
  }
  ;(b = c || (this.fc && this.fc.In(a))) ||
    ((b = this.Bj),
    (c = !1),
    a.ctrlKey ||
      a.altKey ||
      ((e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase()),
      ((1 == e.length && ' ' <= e && '~' >= e) ||
        ('\u0080' <= e && '\ufffd' >= e)) &&
        (' ' != e || b.qb) &&
        ((b.qb += e), (c = rl(b, b.qb)))),
    (b = c))
  b && a.preventDefault()
  return b
}
function yl(a, b) {
  for (var c = b.target; null != c; ) {
    if ((b = Vk[c.id])) return b
    if (c == a.G()) break
    c = c.parentNode
  }
  return null
}
d.createNode = function (a) {
  return new jl(a || Rb, this.Pa, this.Pd())
}
function hl(a, b) {
  a = a.Bj
  var c = b.Ab()
  if (c && !/^[\s\xa0]*$/.test(null == c ? '' : String(c))) {
    c = c.toLowerCase()
    var e = a.qg.get(c)
    e ? e.push(b) : a.qg.set(c, [b])
  }
}
d.removeNode = function (a) {
  ql(this.Bj, a)
}
function gj(a) {
  this.j = a
  this.s = a.options.s
  this.Sd = a.options.Fc
  this.aa = a.options.aa
  this.Pa = {
    fn: 19,
    kq: 'blocklyTreeRoot',
    hq: 'blocklyHidden',
    iq: '',
    tm: 'blocklyTreeRow',
    jq: 'blocklyTreeLabel',
    Qf: 'blocklyTreeIcon',
    rm: 'blocklyTreeIconOpen',
    sm: 'blocklyTreeIconNone',
    lq: 'blocklyTreeSelected'
  }
  this.Es = { tm: 'blocklyTreeSeparator' }
  this.Sd &&
    ((this.Pa.cssTreeRow += a.s
      ? ' blocklyHorizontalTreeRtl'
      : ' blocklyHorizontalTree'),
    (this.Es.cssTreeRow =
      'blocklyTreeSeparatorHorizontal ' +
      (a.s ? 'blocklyHorizontalTreeRtl' : 'blocklyHorizontalTree')),
    (this.Pa.cssTreeIcon = ''))
}
d = gj.prototype
d.width = 0
d.height = 0
d.Vi = null
d.Z = function () {
  var a = this.j,
    b = H(this.j)
  this.gc = document.createElement('div')
  this.gc.className = 'blocklyToolboxDiv'
  this.gc.setAttribute('dir', a.s ? 'RTL' : 'LTR')
  b.parentNode.insertBefore(this.gc, b)
  C.J(
    this.gc,
    'mousedown',
    this,
    function (c) {
      C.h.pf(c) || c.target == this.gc ? C.Nb(!1) : C.Nb(!0)
      C.Touch.re()
    },
    !1,
    !0
  )
  b = {
    te: a.options.te,
    Jc: a,
    s: a.s,
    vf: a.options.vf,
    Fc: a.Fc,
    aa: a.options.aa
  }
  this.F = null
  this.F = a.Fc ? new Mi(b) : new Ni(b)
  C.h.hg(this.F.X('svg'), H(this.j))
  this.F.Z(a)
  this.Pa.cleardotPath = a.options.zd + '1x1.gif'
  this.Pa.cssCollapsedFolderIcon =
    'blocklyTreeIconClosed' + (a.s ? 'Rtl' : 'Ltr')
  this.yc = b = new zl(this, this.Pa)
  xl(b)
  ul(b)
  wl(b)
  b.Ke(null)
  a = this.tl(a.options.Wd)
  b.$(this.gc)
  a && b.Ke(a)
  rj(this)
  this.position()
}
d.A = function () {
  this.F.A()
  this.yc.A()
  C.h.removeNode(this.gc)
  this.Vi = this.j = null
}
d.ac = function () {
  return this.width
}
d.kh = function () {
  return this.height
}
d.position = function () {
  var a = this.gc
  if (a) {
    var b = H(this.j)
    b = C.zs(b)
    this.Sd
      ? ((a.style.left = '0'),
        (a.style.height = 'auto'),
        (a.style.width = b.width + 'px'),
        (this.height = a.offsetHeight),
        this.aa == C.ic ? (a.style.top = '0') : (a.style.bottom = '0'))
      : (this.aa == C.Gd ? (a.style.right = '0') : (a.style.left = '0'),
        (a.style.height = b.height + 'px'),
        (this.width = a.offsetWidth))
    this.F.position()
  }
}
d.tl = function (a) {
  this.yc.Zr()
  this.yc.Id = []
  this.$m = !1
  a = Al(this, a, this.yc, this.j.options.zd)
  if (this.yc.Id.length)
    throw Error(
      'Toolbox cannot have both blocks and categories in the root level.'
    )
  Gd(this.j)
  return a
}
function Al(a, b, c, e) {
  for (var f = null, h = null, k = 0, l; (l = b.childNodes[k]); k++)
    if (l.tagName)
      switch (l.tagName.toUpperCase()) {
        case 'CATEGORY':
          h = C.h.Qb(l.getAttribute('name'))
          var m = a.yc.createNode(h)
          m.Id = []
          c.add(m)
          var n = l.getAttribute('custom')
          n ? (m.Id = n) : (n = Al(a, l, m, e)) && (f = n)
          n = l.getAttribute('categorystyle')
          var p = l.getAttribute('colour')
          p && n
            ? ((m.dg = ''),
              console.warn(
                'Toolbox category "' +
                  h +
                  '" can not have both a style and a colour'
              ))
            : n
            ? Bl(a, n, m, h)
            : Cl(a, p, m, h)
          'true' == l.getAttribute('expanded')
            ? (m.Id.length && (f = m), m.Cd(!0))
            : m.Cd(!1)
          h = l
          break
        case 'SEP':
          if (h && 'CATEGORY' == h.tagName.toUpperCase()) {
            c.add(new Dl(a.Es))
            break
          }
        case 'BLOCK':
        case 'SHADOW':
        case 'LABEL':
        case 'BUTTON':
          c.Id.push(l), (h = l)
      }
  return f
}
function Cl(a, b, c, e) {
  b = C.h.Qb(b)
  null === b || '' === b
    ? (c.dg = '')
    : /^#[0-9a-fA-F]{6}$/.test(b)
    ? ((c.dg = b), (a.$m = !0))
    : 'number' === typeof b || ('string' === typeof b && !isNaN(Number(b)))
    ? ((c.dg = C.Xq(Number(b))), (a.$m = !0))
    : ((c.dg = ''),
      console.warn(
        'Toolbox category "' + e + '" has unrecognized colour attribute: ' + b
      ))
}
function Bl(a, b, c, e) {
  if ((c.xs = b) && C.xj) {
    var f
    ;(f = C.xj.au[b]) && f.Np
      ? Cl(a, f.Np, c, e)
      : console.warn('Style "' + b + '" must exist and contain a colour value')
  }
}
function El(a, b) {
  if ((b = b || a.yc)) {
    b = b.ye(!1)
    for (var c = 0, e; (e = b[c]); c++)
      e.xs && (Bl(a, e.xs, e, ''), rj(a)), El(a, e)
  }
}
function Fl(a) {
  var b = a.yc
  if (b && (El(a, b), (a = b.fc))) {
    var c = a.dg || '#57e'
    $k(a).style.backgroundColor = c
    rj(b.V, a)
  }
}
function rj(a, b) {
  b = (b || a.yc).ye(!1)
  for (var c = 0, e; (e = b[c]); c++) {
    var f = $k(e)
    if (f) {
      var h = a.$m ? '8px solid ' + (e.dg || '#ddd') : 'none'
      a.j.s ? (f.style.borderRight = h) : (f.style.borderLeft = h)
    }
    rj(a, e)
  }
}
d.ih = function () {
  if (!this.gc) return null
  var a = this.gc.getBoundingClientRect(),
    b = a.left,
    c = a.top,
    e = a.width
  a = a.height
  return this.aa == C.Bc
    ? new Bf(-1e7, -1e7, 1e7 + b + e, 2e7)
    : this.aa == C.Gd
    ? new Bf(b, -1e7, 1e7 + e, 2e7)
    : this.aa == C.ic
    ? new Bf(-1e7, -1e7, 2e7, 1e7 + c + a)
    : new Bf(0, c, 2e7, 1e7 + e)
}
function zl(a, b) {
  this.V = a
  tl.call(this, Rb, b)
}
w(zl, tl)
zl.prototype.Lb = function () {
  zl.o.Lb.call(this)
  if (ve) {
    var a = this.G()
    C.J(a, 'touchend', this, this.xv)
  }
}
zl.prototype.xv = function (a) {
  var b = yl(this, a)
  b &&
    'touchend' === a.type &&
    setTimeout(function () {
      b.fj(a)
    }, 1)
}
zl.prototype.createNode = function (a) {
  a = a ? Jb(a) : Rb
  return new Gl(this.V, a, this.Pa)
}
zl.prototype.Ke = function (a) {
  var b = this.V
  if (a != this.fc && a != b.yc) {
    b.Vi && ($k(b.Vi).style.backgroundColor = '')
    if (a) {
      var c = a.dg || '#57e'
      $k(a).style.backgroundColor = c
      rj(b, a)
    }
    c = this.fc
    tl.prototype.Ke.call(this, a)
    a && a.Id && a.Id.length
      ? (b.F.show(a.Id), b.Vi != a && b.F.ho())
      : b.F.Aa()
    c != a &&
      c != this &&
      ((c = new F(
        null,
        'category',
        c && Ib(c.Oi).toString(),
        a && Ib(a.Oi).toString()
      )),
      (c.ob = b.j.id),
      C.i.M(c))
    a && (b.Vi = a)
  }
}
function Gl(a, b, c) {
  Tk.call(this, b, c, void 0)
  a &&
    ((b = function () {
      C.Jg(a.j)
    }),
    sg(a.yc, 'expand', b),
    sg(a.yc, 'collapse', b))
}
w(Gl, jl)
d = Gl.prototype
d.Qm = function () {
  return Ob('span')
}
d.fj = function () {
  Tg(this) && this.Ui
    ? (this.toggle(), this.select())
    : this.Wk()
    ? this.pc().Ke(null)
    : this.select()
  cl(this)
}
d.Hr = function () {}
d.Er = function () {}
d.In = function (a) {
  if (this.Hf.V.Sd) {
    var b = {}
    b[39] = this.Kh ? 38 : 40
    b[37] = this.Kh ? 40 : 38
    b[38] = 37
    b[40] = 39
    a.keyCode = b[a.keyCode] || a.keyCode
  }
  return Gl.o.In.call(this, a)
}
function Dl(a) {
  Gl.call(this, null, Rb, a)
}
w(Dl, Gl)
C.ad = {}
C.ad.gy = ''
C.ad.ys = null
C.ad.pr = ''
C.ad.jf = function (a, b) {
  if (!C.ad.ys) {
    var c = '.blocklyDraggable {}\n'
    a && ((c += C.ad.Us.join('\n')), C.ct && (c += C.ct.CSS.join('\n')))
    C.ad.pr = b.replace(/[\\\/]$/, '')
    c = c.replace(/<<<PATH>>>/g, C.ad.pr)
    a = document.createElement('style')
    document.head.insertBefore(a, document.head.firstChild)
    a.appendChild(document.createTextNode(c))
    C.ad.ys = a.sheet
  }
}
C.ad.Fy = function () {
  console.warn(
    'Deprecated call to Blockly.Css.setCursor. See https://github.com/google/blockly/issues/981 for context'
  )
}
C.ad.Us = [
  '.blocklySvg {',
  'background-color: #fff;',
  'outline: none;',
  'overflow: hidden;',
  'position: absolute;',
  'display: block;',
  '}',
  '.blocklyWidgetDiv {',
  'display: none;',
  'position: absolute;',
  'z-index: 99999;',
  '}',
  '.injectionDiv {',
  'height: 100%;',
  'position: relative;',
  'overflow: hidden;',
  'touch-action: none',
  '}',
  '.blocklyNonSelectable {',
  'user-select: none;',
  '-moz-user-select: none;',
  '-ms-user-select: none;',
  '-webkit-user-select: none;',
  '}',
  '.blocklyWsDragSurface {',
  'display: none;',
  'position: absolute;',
  'top: 0;',
  'left: 0;',
  '}',
  '.blocklyWsDragSurface.blocklyOverflowVisible {',
  'overflow: visible;',
  '}',
  '.blocklyBlockDragSurface {',
  'display: none;',
  'position: absolute;',
  'top: 0;',
  'left: 0;',
  'right: 0;',
  'bottom: 0;',
  'overflow: visible !important;',
  'z-index: 50;',
  '}',
  '.blocklyBlockCanvas.blocklyCanvasTransitioning,',
  '.blocklyBubbleCanvas.blocklyCanvasTransitioning {',
  'transition: transform .5s;',
  '}',
  '.blocklyTooltipDiv {',
  'background-color: #ffffc7;',
  'border: 1px solid #ddc;',
  'box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);',
  'color: #000;',
  'display: none;',
  'font-family: sans-serif;',
  'font-size: 9pt;',
  'opacity: .9;',
  'padding: 2px;',
  'position: absolute;',
  'z-index: 100000;',
  '}',
  '.blocklyDropDownDiv {',
  'position: fixed;',
  'left: 0;',
  'top: 0;',
  'z-index: 1000;',
  'display: none;',
  'border: 1px solid;',
  'border-radius: 2px;',
  'padding: 4px;',
  '-webkit-user-select: none;',
  '}',
  '.blocklyDropDownContent {',
  'max-height: 300px;',
  'overflow: auto;',
  'overflow-x: hidden;',
  '}',
  '.blocklyDropDownArrow {',
  'position: absolute;',
  'left: 0;',
  'top: 0;',
  'width: 16px;',
  'height: 16px;',
  'z-index: -1;',
  'background-color: inherit;',
  'border-color: inherit;',
  '}',
  '.blocklyDropDownButton {',
  'display: inline-block;',
  'float: left;',
  'padding: 0;',
  'margin: 4px;',
  'border-radius: 4px;',
  'outline: none;',
  'border: 1px solid;',
  'transition: box-shadow .1s;',
  'cursor: pointer;',
  '}',
  '.arrowTop {',
  'border-top: 1px solid;',
  'border-left: 1px solid;',
  'border-top-left-radius: 4px;',
  'border-color: inherit;',
  '}',
  '.arrowBottom {',
  'border-bottom: 1px solid;',
  'border-right: 1px solid;',
  'border-bottom-right-radius: 4px;',
  'border-color: inherit;',
  '}',
  '.blocklyResizeSE {',
  'cursor: se-resize;',
  'fill: #aaa;',
  '}',
  '.blocklyResizeSW {',
  'cursor: sw-resize;',
  'fill: #aaa;',
  '}',
  '.blocklyResizeLine {',
  'stroke: #515A5A;',
  'stroke-width: 1;',
  '}',
  '.blocklyHighlightedConnectionPath {',
  'fill: none;',
  'stroke: #fc3;',
  'stroke-width: 4px;',
  '}',
  '.blocklyPathLight {',
  'fill: none;',
  'stroke-linecap: round;',
  'stroke-width: 1;',
  '}',
  '.blocklySelected>.blocklyPath {',
  'stroke: #fc3;',
  'stroke-width: 3px;',
  '}',
  '.blocklySelected>.blocklyPathLight {',
  'display: none;',
  '}',
  '.blocklyDraggable {',
  'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
  'cursor: grab;',
  'cursor: -webkit-grab;',
  '}',
  '.blocklyDragging {',
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  'cursor: grabbing;',
  'cursor: -webkit-grabbing;',
  '}',
  '.blocklyDraggable:active {',
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  'cursor: grabbing;',
  'cursor: -webkit-grabbing;',
  '}',
  '.blocklyBlockDragSurface .blocklyDraggable {',
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  'cursor: grabbing;',
  'cursor: -webkit-grabbing;',
  '}',
  '.blocklyDragging.blocklyDraggingDelete {',
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  '}',
  '.blocklyToolboxDelete {',
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  '}',
  '.blocklyToolboxGrab {',
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  'cursor: grabbing;',
  'cursor: -webkit-grabbing;',
  '}',
  '.blocklyDragging>.blocklyPath,',
  '.blocklyDragging>.blocklyPathLight {',
  'fill-opacity: .8;',
  'stroke-opacity: .8;',
  '}',
  '.blocklyDragging>.blocklyPathDark {',
  'display: none;',
  '}',
  '.blocklyDisabled>.blocklyPath {',
  'fill-opacity: .5;',
  'stroke-opacity: .5;',
  '}',
  '.blocklyDisabled>.blocklyPathLight,',
  '.blocklyDisabled>.blocklyPathDark {',
  'display: none;',
  '}',
  '.blocklyInsertionMarker>.blocklyPath,',
  '.blocklyInsertionMarker>.blocklyPathLight,',
  '.blocklyInsertionMarker>.blocklyPathDark {',
  'fill-opacity: .2;',
  'stroke: none',
  '}',
  '.blocklyReplaceable .blocklyPath {',
  'fill-opacity: 0.5;',
  '}',
  '.blocklyReplaceable .blocklyPathLight,',
  '.blocklyReplaceable .blocklyPathDark {',
  'display: none;',
  '}',
  '.blocklyText {',
  'cursor: default;',
  'fill: #fff;',
  'font-family: sans-serif;',
  'font-size: 11pt;',
  '}',
  '.blocklyNonEditableText>text {',
  'pointer-events: none;',
  '}',
  '.blocklyNonEditableText>rect,',
  '.blocklyEditableText>rect {',
  'fill: #fff;',
  'fill-opacity: .6;',
  '}',
  '.blocklyNonEditableText>text,',
  '.blocklyEditableText>text {',
  'fill: #000;',
  '}',
  '.blocklyEditableText:hover>rect {',
  'stroke: #fff;',
  'stroke-width: 2;',
  '}',
  '.blocklyBubbleText {',
  'fill: #000;',
  '}',
  '.blocklyFlyout {',
  'position: absolute;',
  'z-index: 20;',
  '}',
  '.blocklyFlyoutButton {',
  'fill: #888;',
  'cursor: default;',
  '}',
  '.blocklyFlyoutButtonShadow {',
  'fill: #666;',
  '}',
  '.blocklyFlyoutButton:hover {',
  'fill: #aaa;',
  '}',
  '.blocklyFlyoutLabel {',
  'cursor: default;',
  '}',
  '.blocklyFlyoutLabelBackground {',
  'opacity: 0;',
  '}',
  '.blocklyFlyoutLabelText {',
  'fill: #000;',
  '}',
  '.blocklySvg text, .blocklyBlockDragSurface text {',
  'user-select: none;',
  '-moz-user-select: none;',
  '-ms-user-select: none;',
  '-webkit-user-select: none;',
  'cursor: inherit;',
  '}',
  '.blocklyHidden {',
  'display: none;',
  '}',
  '.blocklyFieldDropdown:not(.blocklyHidden) {',
  'display: block;',
  '}',
  '.blocklyIconGroup {',
  'cursor: default;',
  '}',
  '.blocklyIconGroup:not(:hover),',
  '.blocklyIconGroupReadonly {',
  'opacity: .6;',
  '}',
  '.blocklyIconShape {',
  'fill: #00f;',
  'stroke: #fff;',
  'stroke-width: 1px;',
  '}',
  '.blocklyIconSymbol {',
  'fill: #fff;',
  '}',
  '.blocklyMinimalBody {',
  'margin: 0;',
  'padding: 0;',
  '}',
  '.blocklyCommentForeignObject {',
  'position: relative;',
  'z-index: 0;',
  '}',
  '.blocklyCommentRect {',
  'fill: #E7DE8E;',
  'stroke: #bcA903;',
  'stroke-width: 1px',
  '}',
  '.blocklyCommentTarget {',
  'fill: transparent;',
  'stroke: #bcA903;',
  '}',
  '.blocklyCommentTargetFocused {',
  'fill: none;',
  '}',
  '.blocklyCommentHandleTarget {',
  'fill: none;',
  '}',
  '.blocklyCommentHandleTargetFocused {',
  'fill: transparent;',
  '}',
  '.blocklyFocused>.blocklyCommentRect {',
  'fill: #B9B272;',
  'stroke: #B9B272;',
  '}',
  '.blocklySelected>.blocklyCommentTarget {',
  'stroke: #fc3;',
  'stroke-width: 3px;',
  '}',
  '.blocklyCommentTextarea {',
  'background-color: #fef49c;',
  'border: 0;',
  'outline: 0;',
  'margin: 0;',
  'padding: 3px;',
  'resize: none;',
  'display: block;',
  'overflow: hidden;',
  '}',
  '.blocklyCommentDeleteIcon {',
  'cursor: pointer;',
  'fill: #000;',
  'display: none',
  '}',
  '.blocklySelected > .blocklyCommentDeleteIcon {',
  'display: block',
  '}',
  '.blocklyDeleteIconShape {',
  'fill: #000;',
  'stroke: #000;',
  'stroke-width: 1px;',
  '}',
  '.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {',
  'stroke: #fc3;',
  '}',
  '.blocklyHtmlInput {',
  'border: none;',
  'border-radius: 4px;',
  'font-family: sans-serif;',
  'height: 100%;',
  'margin: 0;',
  'outline: none;',
  'padding: 0 1px;',
  'width: 100%',
  '}',
  '.blocklyMainBackground {',
  'stroke-width: 1;',
  'stroke: #c6c6c6;',
  '}',
  '.blocklyMutatorBackground {',
  'fill: #fff;',
  'stroke: #ddd;',
  'stroke-width: 1;',
  '}',
  '.blocklyFlyoutBackground {',
  'fill: #ddd;',
  'fill-opacity: .8;',
  '}',
  '.blocklyTransparentBackground {',
  'opacity: 0;',
  '}',
  '.blocklyMainWorkspaceScrollbar {',
  'z-index: 20;',
  '}',
  '.blocklyFlyoutScrollbar {',
  'z-index: 30;',
  '}',
  '.blocklyScrollbarHorizontal, .blocklyScrollbarVertical {',
  'position: absolute;',
  'outline: none;',
  '}',
  '.blocklyScrollbarBackground {',
  'opacity: 0;',
  '}',
  '.blocklyScrollbarHandle {',
  'fill: #ccc;',
  '}',
  '.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,',
  '.blocklyScrollbarHandle:hover {',
  'fill: #bbb;',
  '}',
  '.blocklyZoom>image, .blocklyZoom>svg>image {',
  'opacity: .4;',
  '}',
  '.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {',
  'opacity: .6;',
  '}',
  '.blocklyZoom>image:active, .blocklyZoom>svg>image:active {',
  'opacity: .8;',
  '}',
  '.blocklyFlyout .blocklyScrollbarHandle {',
  'fill: #bbb;',
  '}',
  '.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,',
  '.blocklyFlyout .blocklyScrollbarHandle:hover {',
  'fill: #aaa;',
  '}',
  '.blocklyInvalidInput {',
  'background: #faa;',
  '}',
  '.blocklyAngleCircle {',
  'stroke: #444;',
  'stroke-width: 1;',
  'fill: #ddd;',
  'fill-opacity: .8;',
  '}',
  '.blocklyAngleMarks {',
  'stroke: #444;',
  'stroke-width: 1;',
  '}',
  '.blocklyAngleGauge {',
  'fill: #f88;',
  'fill-opacity: .8;',
  '}',
  '.blocklyAngleLine {',
  'stroke: #f00;',
  'stroke-width: 2;',
  'stroke-linecap: round;',
  'pointer-events: none;',
  '}',
  '.blocklyContextMenu {',
  'border-radius: 4px;',
  'max-height: 100%;',
  '}',
  '.blocklyDropdownMenu {',
  'padding: 0 !important;',
  '}',
  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,',
  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {',
  'background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;',
  '}',
  '.blocklyToolboxDiv {',
  'background-color: #ddd;',
  'overflow-x: visible;',
  'overflow-y: auto;',
  'position: absolute;',
  'user-select: none;',
  '-moz-user-select: none;',
  '-ms-user-select: none;',
  '-webkit-user-select: none;',
  'z-index: 70;',
  '-webkit-tap-highlight-color: transparent;',
  '}',
  '.blocklyTreeRoot {',
  'padding: 4px 0;',
  '}',
  '.blocklyTreeRoot:focus {',
  'outline: none;',
  '}',
  '.blocklyTreeRow {',
  'height: 22px;',
  'line-height: 22px;',
  'margin-bottom: 3px;',
  'padding-right: 8px;',
  'white-space: nowrap;',
  '}',
  '.blocklyHorizontalTree {',
  'float: left;',
  'margin: 1px 5px 8px 0;',
  '}',
  '.blocklyHorizontalTreeRtl {',
  'float: right;',
  'margin: 1px 0 8px 5px;',
  '}',
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  'margin-left: 8px;',
  '}',
  '.blocklyTreeRow:not(.blocklyTreeSelected):hover {',
  'background-color: #e4e4e4;',
  '}',
  '.blocklyTreeSeparator {',
  'border-bottom: solid #e5e5e5 1px;',
  'height: 0;',
  'margin: 5px 0;',
  '}',
  '.blocklyTreeSeparatorHorizontal {',
  'border-right: solid #e5e5e5 1px;',
  'width: 0;',
  'padding: 5px 0;',
  'margin: 0 5px;',
  '}',
  '.blocklyTreeIcon {',
  'background-image: url(<<<PATH>>>/sprites.png);',
  'height: 16px;',
  'vertical-align: middle;',
  'width: 16px;',
  '}',
  '.blocklyTreeIconClosedLtr {',
  'background-position: -32px -1px;',
  '}',
  '.blocklyTreeIconClosedRtl {',
  'background-position: 0 -1px;',
  '}',
  '.blocklyTreeIconOpen {',
  'background-position: -16px -1px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconClosedLtr {',
  'background-position: -32px -17px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconClosedRtl {',
  'background-position: 0 -17px;',
  '}',
  '.blocklyTreeSelected>.blocklyTreeIconOpen {',
  'background-position: -16px -17px;',
  '}',
  '.blocklyTreeIconNone,',
  '.blocklyTreeSelected>.blocklyTreeIconNone {',
  'background-position: -48px -1px;',
  '}',
  '.blocklyTreeLabel {',
  'cursor: default;',
  'font-family: sans-serif;',
  'font-size: 16px;',
  'padding: 0 3px;',
  'vertical-align: middle;',
  '}',
  '.blocklyToolboxDelete .blocklyTreeLabel {',
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  '}',
  '.blocklyTreeSelected .blocklyTreeLabel {',
  'color: #fff;',
  '}',
  '.blocklyColourTable {',
  'border-collapse: collapse;',
  '}',
  '.blocklyColourTable>tr>td {',
  'border: 1px solid #666;',
  'padding: 0;',
  '}',
  '.blocklyColourTable>tr>td>div {',
  'border: 1px solid #666;',
  'height: 13px;',
  'width: 15px;',
  '}',
  '.blocklyColourTable>tr>td>div:hover {',
  'border: 1px solid #fff;',
  '}',
  '.blocklyColourSelected, .blocklyColourSelected:hover {',
  'border: 1px solid #000 !important;',
  '}',
  '.blocklyWidgetDiv .goog-menu {',
  'background: #fff;',
  'border-color: #ccc #666 #666 #ccc;',
  'border-style: solid;',
  'border-width: 1px;',
  'cursor: default;',
  'font: normal 13px Arial, sans-serif;',
  'margin: 0;',
  'outline: none;',
  'padding: 4px 0;',
  'position: absolute;',
  'overflow-y: auto;',
  'overflow-x: hidden;',
  'max-height: 100%;',
  'z-index: 20000;',
  '}',
  '.blocklyDropDownDiv .goog-menu {',
  'cursor: default;',
  'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
  'outline: none;',
  'z-index: 20000;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem, ',
  '.blocklyDropDownDiv .goog-menuitem {',
  'color: #000;',
  'font: normal 13px Arial, sans-serif;',
  'list-style: none;',
  'margin: 0;',
  'min-width: 7em;',
  'padding: 5px 5px 5px 28px;',
  'white-space: nowrap;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl, ',
  '.blocklyDropDownDiv .goog-menuitem.goog-menuitem-rtl {',
  'padding-left: 5px;',
  'padding-right: 28px;',
  '}',
  '.blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem, ',
  '.blocklyWidgetDiv .goog-menu-noicon .goog-menuitem, ',
  '.blocklyDropDownDiv .goog-menu-nocheckbox .goog-menuitem, ',
  '.blocklyDropDownDiv .goog-menu-noicon .goog-menuitem { ',
  'padding-left: 12px;',
  '}',
  '.blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem, ',
  '.blocklyDropDownDiv .goog-menu-noaccel .goog-menuitem {',
  'padding-right: 20px;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-content, ',
  '.blocklyDropDownDiv .goog-menuitem-content {',
  'color: #000;',
  'font: normal 13px Arial, sans-serif;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel, ',
  '.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content, ',
  '.blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-accel, ',
  '.blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {',
  'color: #ccc !important;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon, ',
  '.blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-icon {',
  'opacity: 0.3;',
  'filter: alpha(opacity=30);',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-highlight, ',
  '.blocklyWidgetDiv .goog-menuitem-hover {',
  'background-color: #d6e9f8;',
  'border-color: #d6e9f8;',
  'border-style: dotted;',
  'border-width: 1px 0;',
  'padding-bottom: 4px;',
  'padding-top: 4px;',
  '}',
  '.blocklyDropDownDiv .goog-menuitem-highlight, ',
  '.blocklyDropDownDiv .goog-menuitem-hover {',
  'background-color: rgba(0, 0, 0, 0.2);',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-checkbox, ',
  '.blocklyWidgetDiv .goog-menuitem-icon, ',
  '.blocklyDropDownDiv .goog-menuitem-checkbox, ',
  '.blocklyDropDownDiv .goog-menuitem-icon {',
  'background-repeat: no-repeat;',
  'height: 16px;',
  'left: 6px;',
  'position: absolute;',
  'right: auto;',
  'vertical-align: middle;',
  'width: 16px;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox, ',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon, ',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox, ',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {',
  'left: auto;',
  'right: 6px;',
  '}',
  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox, ',
  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon, ',
  '.blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox, ',
  '.blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {',
  'background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;',
  'position: static;',
  'float: left;',
  'margin-left: -24px;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox, ',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon, ',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox, ',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {',
  'float: right;',
  'margin-right: -24px;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-accel, ',
  '.blocklyDropDownDiv .goog-menuitem-accel {',
  'color: #999;',
  'direction: ltr;',
  'left: auto;',
  'padding: 0 6px;',
  'position: absolute;',
  'right: 0;',
  'text-align: right;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel, ',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-accel {',
  'left: 0;',
  'right: auto;',
  'text-align: left;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-mnemonic-hint, ',
  '.blocklyDropDownDiv .goog-menuitem-mnemonic-hint {',
  'text-decoration: underline;',
  '}',
  '.blocklyWidgetDiv .goog-menuitem-mnemonic-separator, ',
  '.blocklyDropDownDiv .goog-menuitem-mnemonic-separator {',
  'color: #999;',
  'font-size: 12px;',
  'padding-left: 4px;',
  '}',
  '.blocklyWidgetDiv .goog-menuseparator, ',
  '.blocklyDropDownDiv .goog-menuseparator {',
  'border-top: 1px solid #ccc;',
  'margin: 4px 0;',
  'padding: 0;',
  '}',
  ''
]
C.H = {}
C.H.ba = null
C.H.hj = null
C.H.eh = null
C.H.X = function () {
  C.H.ba ||
    ((C.H.ba = document.createElement('div')),
    (C.H.ba.className = 'blocklyWidgetDiv'),
    document.body.appendChild(C.H.ba))
}
C.H.show = function (a, b, c) {
  C.H.Aa()
  C.H.hj = a
  C.H.eh = c
  C.H.ba.style.top = Uc().y + 'px'
  C.H.ba.style.direction = b ? 'rtl' : 'ltr'
  C.H.ba.style.display = 'block'
}
C.H.Aa = function () {
  C.H.hj &&
    ((C.H.hj = null),
    (C.H.ba.style.display = 'none'),
    (C.H.ba.style.left = ''),
    (C.H.ba.style.top = ''),
    C.H.eh && C.H.eh(),
    (C.H.eh = null),
    (C.H.ba.innerHTML = ''))
}
C.H.isVisible = function () {
  return !!C.H.hj
}
C.H.Mi = function (a) {
  C.H.hj == a && C.H.Aa()
}
C.H.Qr = function (a, b, c) {
  C.H.ba.style.left = a + 'px'
  C.H.ba.style.top = b + 'px'
  C.H.ba.style.height = c + 'px'
}
C.H.Rr = function (a, b, c, e) {
  var f = C.H.$t(a, b, c)
  a = C.H.Zt(a, b, c, e)
  0 > f ? C.H.Qr(a, 0, c.height + f) : C.H.Qr(a, f, c.height)
}
C.H.Zt = function (a, b, c, e) {
  if (e)
    return (
      (b = Math.max(b.right - c.width, a.left)), Math.min(b, a.right - c.width)
    )
  b = Math.min(b.left, a.right - c.width)
  return Math.max(b, a.left)
}
C.H.$t = function (a, b, c) {
  return b.bottom + c.height >= a.bottom ? b.top - c.height : b.bottom
}
function Hl(a) {
  this.li = a
  this.X()
}
d = Hl.prototype
d.Ga = null
d.hd = null
d.li = null
d.Af = 1
d.uj = null
d.X = function () {
  this.Ga ||
    ((this.Ga = C.h.B(
      'svg',
      {
        xmlns: C.Ac,
        'xmlns:html': C.Re,
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        version: '1.1',
        class: 'blocklyBlockDragSurface'
      },
      this.li
    )),
    (this.hd = C.h.B('g', {}, this.Ga)))
}
function ef(a, b) {
  if (a.hd.childNodes.length) throw Error('Already dragging a block.')
  a.hd.appendChild(b)
  a.Ga.style.display = 'block'
  a.uj = new B(0, 0)
}
d.Le = function (a, b) {
  this.uj = new B(a * this.Af, b * this.Af)
  a = this.uj.x
  b = this.uj.y
  a = a.toFixed(0)
  b = b.toFixed(0)
  this.Ga.style.display = 'block'
  C.h.lj(this.Ga, 'translate3d(' + a + 'px, ' + b + 'px, 0px)')
}
d.Kk = function () {
  var a = C.h.oc(this.Ga)
  return new B(a.x / this.Af, a.y / this.Af)
}
d.tb = function () {
  return this.hd
}
d.ji = function (a) {
  a
    ? a.appendChild(this.hd.firstChild)
    : this.hd.removeChild(this.hd.firstChild)
  this.Ga.style.display = 'none'
  if (this.hd.childNodes.length) throw Error('Drag group was not cleared.')
  this.uj = null
}
C.jf = function (a, b) {
  C.cu()
  'string' == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a))
  if (!C.h.containsNode(document, a))
    throw Error('Error: container is not in current document.')
  b = new ri(b || {})
  var c = document.createElement('div')
  c.className = 'injectionDiv'
  a.appendChild(c)
  a = C.ni(c, b)
  var e = new Hl(c)
  c = new Vi(c)
  c = C.uu(a, b, e, c)
  C.Hw(b.Uw)
  C.Jv(c)
  C.Yi = c
  C.Jg(c)
  return c
}
C.ni = function (a, b) {
  a.setAttribute('dir', 'LTR')
  Mg = b.s
  C.ad.jf(b.zv, b.zd)
  a = C.h.B(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:html': 'http://www.w3.org/1999/xhtml',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      version: '1.1',
      class: 'blocklySvg'
    },
    a
  )
  var c = C.h.B('defs', {}, a),
    e = String(Math.random()).substring(2),
    f = C.h.B('filter', { id: 'blocklyEmbossFilter' + e }, c)
  C.h.B(
    'feGaussianBlur',
    { in: 'SourceAlpha', stdDeviation: 1, result: 'blur' },
    f
  )
  var h = C.h.B(
    'feSpecularLighting',
    {
      in: 'blur',
      surfaceScale: 1,
      specularConstant: 0.5,
      specularExponent: 10,
      'lighting-color': 'white',
      result: 'specOut'
    },
    f
  )
  C.h.B('fePointLight', { x: -5e3, y: -1e4, z: 2e4 }, h)
  C.h.B(
    'feComposite',
    { in: 'specOut', in2: 'SourceAlpha', operator: 'in', result: 'specOut' },
    f
  )
  C.h.B(
    'feComposite',
    {
      in: 'SourceGraphic',
      in2: 'specOut',
      operator: 'arithmetic',
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0
    },
    f
  )
  b.Cq = f.id
  f = C.h.B(
    'pattern',
    {
      id: 'blocklyDisabledPattern' + e,
      patternUnits: 'userSpaceOnUse',
      width: 10,
      height: 10
    },
    c
  )
  C.h.B('rect', { width: 10, height: 10, fill: '#aaa' }, f)
  C.h.B('path', { d: 'M 0 0 L 10 10 M 10 0 L 0 10', stroke: '#cc0' }, f)
  b.te = f.id
  f = b.Nq
  c = C.h.B(
    'pattern',
    { id: 'blocklyGridPattern' + e, patternUnits: 'userSpaceOnUse' },
    c
  )
  0 < f.length && 0 < f.spacing
    ? (C.h.B('line', { stroke: f.colour }, c),
      1 < f.length && C.h.B('line', { stroke: f.colour }, c))
    : C.h.B('line', {}, c)
  b.Oq = c
  return a
}
C.uu = function (a, b, c, e) {
  b.Jc = null
  var f = new cj(b, c, e)
  f.scale = b.Ma.vs
  a.appendChild(f.X('blocklyMainBackground'))
  !b.Rq && b.Wd && ((c = kj(f, 'svg')), C.h.hg(c, a))
  b.Tq && ij(f)
  b.Ma && b.Ma.controls && jj(f)
  f.translate(0, 0)
  C.Yi = f
  b.readOnly ||
    f.Bb() ||
    f.jc(function (h) {
      if (!f.cc() && !f.Bb() && -1 != C.i.Rs.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.ab(),
          m = f.scale
        k.Va = l.Va / m
        k.gb = l.gb / m
        k.Js = (l.Va + l.xa) / m
        k.Is = (l.gb + l.Ba) / m
        pj(f)
          ? ((l = Dd(f)),
            (k.Kb = l.x),
            (k.yb = l.y),
            (k.Wp = l.x + l.width),
            (k.Vp = l.y + l.height))
          : ((k.Kb = l.Kb / m),
            (k.yb = l.yb / m),
            (k.Wp = (l.Kb + l.Dc) / m),
            (k.Vp = (l.yb + l.lc) / m))
        if (k.yb < k.gb || k.Vp > k.Is || k.Kb < k.Va || k.Wp > k.Js) {
          l = null
          h && ((l = C.i.tb()), C.i.K(h.group))
          switch (h.type) {
            case C.i.Oo:
            case C.i.Po:
              var n = hd(f, h.Jb)
              break
            case C.i.Lj:
            case C.i.Mj:
              n = Ge(f, h.Jd)
          }
          if (n) {
            m = n.yk()
            var p = k.gb - m.xc.y
            0 < p && n.moveBy(0, p)
            p = k.Is - m.Pc.y
            0 > p && n.moveBy(0, p)
            p = k.Va - m.xc.x
            0 < p && n.moveBy(p, 0)
            k = k.Js - m.Pc.x
            0 > k && n.moveBy(k, 0)
          }
          h &&
            (h.group ||
              console.log(
                'WARNING: Moved object in bounds but there was no event group. This may break undo.'
              ),
            C.i.K(l))
        }
      }
    })
  C.Jg(f)
  C.H.X()
  gk()
  C.C.X()
  return f
}
C.Jv = function (a) {
  var b = a.options,
    c = H(a)
  C.J(c.parentNode, 'contextmenu', null, function (e) {
    C.h.Xk(e) || e.preventDefault()
  })
  c = C.J(window, 'resize', null, function () {
    C.Nb(!0)
    C.Jg(a)
  })
  a.Al = c
  C.jf.St()
  b.Wd &&
    (a.V ? a.V.Z(a) : a.F && (a.F.Z(a), a.F.show(b.Wd.childNodes), a.F.ho()))
  c = J
  b.Tq && (c = a.Tb.Z(c))
  b.Ma && b.Ma.controls && a.Rg.Z(c)
  b.Db && b.Db.scrollbars
    ? ((a.Wa = new ti(a)), a.Wa.resize())
    : a.Ie({ x: 0.5, y: 0.5 })
  b.Av && C.jf.Uv(b.zd, a)
}
C.jf.St = function () {
  C.Qu ||
    (C.J(document, 'scroll', null, function () {
      for (var a = Ne(), b = 0, c; (c = a[b]); b++) c.Ej && c.Ej()
    }),
    C.J(document, 'keydown', null, C.lw),
    C.$a(document, 'touchend', null, C.sf),
    C.$a(document, 'touchcancel', null, C.sf),
    jc &&
      C.J(window, 'orientationchange', document, function () {
        C.Jg(C.df())
      }))
  C.Qu = !0
}
C.jf.Uv = function (a, b) {
  function c() {
    for (; f.length; ) C.wa(f.pop())
    e.preload()
  }
  var e = b.Cc
  e.load([a + 'click.mp3', a + 'click.wav', a + 'click.ogg'], 'click')
  e.load(
    [a + 'disconnect.wav', a + 'disconnect.mp3', a + 'disconnect.ogg'],
    'disconnect'
  )
  e.load([a + 'delete.mp3', a + 'delete.ogg', a + 'delete.wav'], 'delete')
  var f = []
  f.push(C.J(document, 'mousemove', null, c, !0))
  f.push(C.J(document, 'touchstart', null, c, !0))
}
C.Gs = function (a) {
  console.warn(
    'Deprecated call to Blockly.updateToolbox, use workspace.updateToolbox instead.'
  )
  C.df().Gs(a)
}
C.Yi = null
C.selected = null
C.si = []
C.ki = null
C.ck = null
C.km = null
C.$x = null
C.xj = null
C.Xq = function (a) {
  var b = C.ht,
    c = 255 * C.jt,
    e = 0,
    f = 0,
    h = 0
  if (0 == b) h = f = e = c
  else {
    var k = Math.floor(a / 60),
      l = a / 60 - k
    a = c * (1 - b)
    var m = c * (1 - b * l)
    b = c * (1 - b * (1 - l))
    switch (k) {
      case 1:
        e = m
        f = c
        h = a
        break
      case 2:
        e = a
        f = c
        h = b
        break
      case 3:
        e = a
        f = m
        h = c
        break
      case 4:
        e = b
        f = a
        h = c
        break
      case 5:
        e = c
        f = a
        h = m
        break
      case 6:
      case 0:
        ;(e = c), (f = b), (h = a)
    }
  }
  return Kj([Math.floor(e), Math.floor(f), Math.floor(h)])
}
C.zs = function (a) {
  return { width: a.Bp, height: a.zp }
}
C.Ey = function (a) {
  Gd(a)
}
C.Jg = function (a) {
  for (; a.options.Jc; ) a = a.options.Jc
  var b = H(a),
    c = b.parentNode
  if (c) {
    var e = c.offsetWidth
    c = c.offsetHeight
    b.Bp != e && (b.setAttribute('width', e + 'px'), (b.Bp = e))
    b.zp != c && (b.setAttribute('height', c + 'px'), (b.zp = c))
    a.resize()
  }
}
C.lw = function (a) {
  var b = C.Yi
  if (!(b.options.readOnly || C.h.Xk(a) || (b.L && !b.isVisible()))) {
    var c = !1
    if (27 == a.keyCode) C.Nb()
    else if (8 == a.keyCode || 46 == a.keyCode) {
      a.preventDefault()
      if (zf()) return
      C.selected && C.selected.Ob() && (c = !0)
    } else if (a.altKey || a.ctrlKey || a.metaKey) {
      if (zf()) return
      C.selected &&
        C.selected.Ob() &&
        C.selected.Bb() &&
        (67 == a.keyCode
          ? (C.Nb(), C.pm(C.selected))
          : 88 != a.keyCode || C.selected.m.Ce || (C.pm(C.selected), (c = !0)))
      86 == a.keyCode
        ? C.ki &&
          ((b = C.ck),
          b.Ce && (b = b.Kg),
          C.km && Le(b, C.km) && (C.i.K(!0), nj(b), C.i.K(!1)))
        : 90 == a.keyCode && (C.Nb(), b.Jo(a.shiftKey))
    }
    c &&
      !C.selected.m.Ce &&
      (C.i.K(!0), C.Nb(), C.selected.A(!0, !0), C.i.K(!1))
  }
}
C.pm = function (a) {
  if (a.ln) var b = a.zj()
  else {
    b = C.u.Xe(a)
    C.u.Ku(b)
    var c = a.qa()
    b.setAttribute('x', a.s ? -c.x : c.x)
    b.setAttribute('y', c.y)
  }
  C.ki = b
  C.ck = a.m
  C.km = a.ln ? null : C.h.Nm(a, !0)
}
C.Aq = function (a) {
  var b = C.ki,
    c = C.ck
  C.pm(a)
  nj(a.m)
  C.ki = b
  C.ck = c
}
C.zy = function (a) {
  C.h.Xk(a) || a.preventDefault()
}
C.Nb = function (a) {
  C.C.Aa()
  C.H.Aa()
  lk()
  var b = C.df()
  b.Tb && b.Tb.F && b.Tb.F.Aa()
  a || (b.V && b.V.F && b.V.F.$g && b.V.yc.Ke(null))
}
C.jc = function (a) {
  console.warn(
    'Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.'
  )
  return C.df().jc(a)
}
C.df = function () {
  return C.Yi
}
C.alert = function (a, b) {
  window.alert(a)
  b && b()
}
C.confirm = function (a, b) {
  b(window.confirm(a))
}
C.prompt = function (a, b, c) {
  c(window.prompt(a, b))
}
C.Pv = function (a) {
  return function () {
    Hj(this, a)
  }
}
C.iy = function (a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b]
    if (c) {
      var e = c.type
      null == e || '' === e
        ? console.warn(
            'Block definition #' +
              b +
              ' in JSON array is missing a type attribute. Skipping.'
          )
        : (C.hb[e] &&
            console.warn(
              'Block definition #' +
                b +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (C.hb[e] = { Z: C.Pv(c) }))
    } else
      console.warn(
        'Block definition #' + b + ' in JSON array is ' + c + '. Skipping.'
      )
  }
}
C.J = function (a, b, c, e, f, h) {
  function k(r) {
    var q = !f
    r = C.Touch.Kw(r)
    for (var v = 0, D; (D = r[v]); v++)
      if (!q || C.Touch.zo(D)) C.Touch.Gw(D), c ? e.call(c, D) : e(D), (l = !0)
  }
  var l = !1,
    m = []
  if (g.PointerEvent && b in C.Touch.Hd)
    for (var n = 0, p; (p = C.Touch.Hd[b][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k])
  else if ((a.addEventListener(b, k, !1), m.push([a, b, k]), b in C.Touch.Hd)) {
    var t = function (r) {
      k(r)
      var q = !h
      l && q && r.preventDefault()
    }
    for (n = 0; (p = C.Touch.Hd[b][n]); n++)
      a.addEventListener(p, t, !1), m.push([a, p, t])
  }
  return m
}
C.$a = function (a, b, c, e) {
  function f(n) {
    c ? e.call(c, n) : e(n)
  }
  var h = [],
    k = g.window
  if (k && k.PointerEvent && b in C.Touch.Hd) {
    k = 0
    for (var l; (l = C.Touch.Hd[b][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f])
  } else if (
    (a.addEventListener(b, f, !1), h.push([a, b, f]), b in C.Touch.Hd)
  ) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var p = n.changedTouches[0]
        n.clientX = p.clientX
        n.clientY = p.clientY
      }
      f(n)
      n.preventDefault()
    }
    for (k = 0; (l = C.Touch.Hd[b][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m])
  }
  return h
}
C.wa = function (a) {
  for (; a.length; ) {
    var b = a.pop()
    b[0].removeEventListener(b[1], b[2], !1)
  }
}
C.Ov = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
}
C.cu = function () {
  C.Wb('LOGIC_HUE', ['Blocks', 'logic', 'HUE'], void 0)
  C.Wb('LOGIC_HUE', ['Constants', 'Logic', 'HUE'], 210)
  C.Wb('LOOPS_HUE', ['Blocks', 'loops', 'HUE'], void 0)
  C.Wb('LOOPS_HUE', ['Constants', 'Loops', 'HUE'], 120)
  C.Wb('MATH_HUE', ['Blocks', 'math', 'HUE'], void 0)
  C.Wb('MATH_HUE', ['Constants', 'Math', 'HUE'], 230)
  C.Wb('TEXTS_HUE', ['Blocks', 'texts', 'HUE'], void 0)
  C.Wb('TEXTS_HUE', ['Constants', 'Text', 'HUE'], 160)
  C.Wb('LISTS_HUE', ['Blocks', 'lists', 'HUE'], void 0)
  C.Wb('LISTS_HUE', ['Constants', 'Lists', 'HUE'], 260)
  C.Wb('COLOUR_HUE', ['Blocks', 'colour', 'HUE'], void 0)
  C.Wb('COLOUR_HUE', ['Constants', 'Colour', 'HUE'], 20)
  C.Wb('VARIABLES_HUE', ['Blocks', 'variables', 'HUE'], void 0)
  C.Wb('VARIABLES_HUE', ['Constants', 'Variables', 'HUE'], 330)
  C.Wb('VARIABLES_DYNAMIC_HUE', ['Constants', 'VariablesDynamic', 'HUE'], 310)
  C.Wb('PROCEDURES_HUE', ['Blocks', 'procedures', 'HUE'], void 0)
}
C.Wb = function (a, b, c) {
  for (var e = 'Blockly', f = C, h = 0; h < b.length; ++h)
    (e += '.' + b[h]), f && (f = f[b[h]])
  f &&
    f !== c &&
    ((a = (
      void 0 === c
        ? '%1 has been removed. Use Blockly.Msg["%2"].'
        : '%1 is deprecated and unused. Override Blockly.Msg["%2"].'
    )
      .replace('%1', e)
      .replace('%2', a)),
    console.warn(a))
}
C.Hw = function (a) {
  this.xj = a
  ;(a = C.df()) && this.Aw(a)
}
C.Aw = function (a) {
  this.Fs(
    Be(a).filter(function (c) {
      return void 0 !== c.tj
    })
  )
  !a.V && a.F && a.F.j ? this.Fs(Be(a.F.j)) : oj(a)
  a.V && Fl(a.V)
  var b = new F(null, 'theme')
  b.ob = a.id
  C.i.M(b)
}
C.Fs = function (a) {
  for (var b = 0, c; (c = a[b]); b++)
    if ((Ej(c, c.tj), c.xd)) {
      var e = c.xd.j
      if (e && Be(e)) {
        var f = Be(e)
        for (c = 0; c < f.length; c++) {
          var h = f[c]
          Ej(h, h.tj)
        }
        e = Be(e.F.j)
        for (c = 0; c < e.length; c++) (h = e[c]), Ej(h, h.tj)
      }
    }
}
C.ty = function () {
  return this.xj
}
g.Blockly || (g.Blockly = {})
g.Blockly.getMainWorkspace = C.df
g.Blockly.addChangeListener = C.jc
function Il(a, b) {
  var c = a.className
  c = (u(c) && c.match(/\S+/g)) || []
  for (var e = Oa(arguments, 1), f = 0; f < e.length; f++)
    Ja(c, e[f]) || c.push(e[f])
  c = c.join(' ')
  a.className = c
}
var Jl = {
    ar: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
    be: '\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456',
    'be-tarask': 'Tara\u0161kievica',
    bg: '\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a',
    bn: '\u09ac\u09be\u0982\u09b2\u09be',
    br: 'Brezhoneg',
    cs: '\u010cesky',
    da: 'Dansk',
    de: 'Deutsch',
    el: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
    en: 'English',
    es: 'Espa\u00f1ol',
    eu: 'Euskara',
    fa: '\u0641\u0627\u0631\u0633\u06cc',
    fi: 'Suomi',
    fr: 'Fran\u00e7ais',
    gl: 'Galego',
    ha: 'Hausa',
    he: '\u05e2\u05d1\u05e8\u05d9\u05ea',
    hi: '\u0939\u093f\u0928\u094d\u0926\u0940',
    hu: 'Magyar',
    hy: '\u0570\u0561\u0575\u0565\u0580\u0567\u0576',
    ia: 'Interlingua',
    id: 'Bahasa Indonesia',
    ig: 'As\u1ee5s\u1ee5 Igbo',
    is: '\u00cdslenska',
    it: 'Italiano',
    ja: '\u65e5\u672c\u8a9e',
    kab: 'Taqbaylit',
    ko: '\ud55c\uad6d\uc5b4',
    lt: 'Lietuvi\u0173',
    lv: 'Latvie\u0161u',
    ms: 'Bahasa Melayu',
    my: '\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c',
    nb: 'Norsk Bokm\u00e5l',
    nl: 'Nederlands, Vlaams',
    pl: 'Polski',
    pms: 'Piemont\u00e8is',
    pt: 'Portugu\u00eas',
    'pt-br': 'Portugu\u00eas Brasileiro',
    ro: 'Rom\u00e2n\u0103',
    ru: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
    sc: 'Sardu',
    sk: 'Sloven\u010dina',
    sl: 'Sloven\u0161\u010dina',
    sq: 'Shqip',
    sr: '\u0421\u0440\u043f\u0441\u043a\u0438',
    sv: 'Svenska',
    th: '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22',
    tr: 'T\u00fcrk\u00e7e',
    uk: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
    ur: '\u0627\u064f\u0631\u062f\u064f\u0648\u202c',
    vi: 'Ti\u1ebfng Vi\u1ec7t',
    yo: '\u00c8d\u00e8 Yor\u00f9b\u00e1',
    'zh-hans': '\u7b80\u4f53\u4e2d\u6587',
    'zh-hant': '\u6b63\u9ad4\u4e2d\u6587'
  },
  Kl = 'ace ar fa he mzn ps ur'.split(' '),
  Ll = window.BlocklyGamesLang,
  Ml = window.BlocklyGamesLanguages,
  Nl = !!window.location.pathname.match(/\.html$/),
  P = null
function Ol(a, b, c) {
  var e = Number
  a = (a = window.location.search.match(new RegExp('[?&]' + a + '=([^&]+)')))
    ? decodeURIComponent(a[1].replace(/\+/g, '%20'))
    : 'NaN'
  e = e(a)
  return isNaN(e) ? b : Math.min(Math.max(b, e), c)
}
var Pl = 10,
  Q = Ol('level', 1, Pl)
function Ql() {
  document.title = document.getElementById('title').textContent
  document.dir = -1 != Kl.indexOf(Ll) ? 'rtl' : 'ltr'
  document.head.parentElement.setAttribute('lang', Ll)
  var a = document.getElementById('languageMenu')
  if (a) {
    for (var b = [], c = 0; c < Ml.length; c++) {
      var e = Ml[c]
      b.push([Jl[e], e])
    }
    b.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0
    })
    for (c = a.options.length = 0; c < b.length; c++) {
      var f = b[c]
      e = f[1]
      f = new Option(f[0], e)
      e == Ll && (f.selected = !0)
      a.options.add(f)
    }
    1 >= a.options.length && (a.style.display = 'none')
  }
  for (c = 1; c <= Pl; c++)
    (a = document.getElementById('level' + c)),
      (b = !!Rl(c)),
      a && b && Il(a, 'level_done')
  ;(c = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    c.setAttribute('content', 'width=725, initial-scale=.35, user-scalable=no')
  setTimeout(Sl, 1)
}
function Rl(a) {
  var b = Tl
  try {
    var c = window.localStorage[b + a]
  } catch (e) {}
  return c
}
function S(a) {
  var b
  ;(b = document.getElementById(a))
    ? ((b = b.textContent), (b = b.replace(/\\n/g, '\n')))
    : (b = null)
  return null === b ? '[Unknown message: ' + a + ']' : b
}
function Ul(a, b) {
  if (!a) throw TypeError('Element not found: ' + a)
  'string' == typeof a && (a = document.getElementById(a))
  a.addEventListener('click', b, !0)
  a.addEventListener('touchend', b, !0)
}
function Sl() {
  if (!Nl) {
    window.GoogleAnalyticsObject = 'GoogleAnalyticsFunction'
    var a = function (c) {
      ;(a.q = a.q || []).push(arguments)
    }
    window.GoogleAnalyticsFunction = a
    a.l = 1 * new Date()
    var b = document.createElement('script')
    b.async = 1
    b.src = '//www.google-analytics.com/analytics.js'
    document.head.appendChild(b)
    a('create', 'UA-50448074-1', 'auto')
    a('send', 'pageview')
  }
}
C.g.ky = {}
C.g.ADD_COMMENT = 'Add Comment'
C.g.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'"
C.g.CHANGE_VALUE_TITLE = 'Change value:'
C.g.CLEAN_UP = 'Clean up Blocks'
C.g.COLLAPSED_WARNINGS_WARNING = 'Collapsed blocks contain warnings.'
C.g.COLLAPSE_ALL = 'Collapse Blocks'
C.g.COLLAPSE_BLOCK = 'Collapse Block'
C.g.COLOUR_BLEND_COLOUR1 = 'colour 1'
C.g.COLOUR_BLEND_COLOUR2 = 'colour 2'
C.g.COLOUR_BLEND_HELPURL =
  'https://meyerweb.com/eric/tools/color-blend/#:::rgbp'
C.g.COLOUR_BLEND_RATIO = 'ratio'
C.g.COLOUR_BLEND_TITLE = 'blend'
C.g.COLOUR_BLEND_TOOLTIP =
  'Blends two colours together with a given ratio (0.0 - 1.0).'
C.g.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color'
C.g.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.'
C.g.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com'
C.g.COLOUR_RANDOM_TITLE = 'random colour'
C.g.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.'
C.g.COLOUR_RGB_BLUE = 'blue'
C.g.COLOUR_RGB_GREEN = 'green'
C.g.COLOUR_RGB_HELPURL =
  'https://www.december.com/html/spec/colorpercompact.html'
C.g.COLOUR_RGB_RED = 'red'
C.g.COLOUR_RGB_TITLE = 'colour with'
C.g.COLOUR_RGB_TOOLTIP =
  'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.'
C.g.CONTROLS_FLOW_STATEMENTS_HELPURL =
  'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks'
C.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop'
C.g.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  'continue with next iteration of loop'
C.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.'
C.g.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  'Skip the rest of this loop, and continue with the next iteration.'
C.g.CONTROLS_FLOW_STATEMENTS_WARNING =
  'Warning: This block may only be used within a loop.'
C.g.CONTROLS_FOREACH_HELPURL =
  'https://github.com/google/blockly/wiki/Loops#for-each'
C.g.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2'
C.g.CONTROLS_FOREACH_TOOLTIP =
  "For each item in a list, set the variable '%1' to the item, and then do some statements."
C.g.CONTROLS_FOR_HELPURL =
  'https://github.com/google/blockly/wiki/Loops#count-with'
C.g.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4'
C.g.CONTROLS_FOR_TOOLTIP =
  "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks."
C.g.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.'
C.g.CONTROLS_IF_ELSE_TOOLTIP =
  'Add a final, catch-all condition to the if block.'
C.g.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse'
C.g.CONTROLS_IF_IF_TOOLTIP =
  'Add, remove, or reorder sections to reconfigure this if block.'
C.g.CONTROLS_IF_MSG_ELSE = 'else'
C.g.CONTROLS_IF_MSG_ELSEIF = 'else if'
C.g.CONTROLS_IF_MSG_IF = 'if'
C.g.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.'
C.g.CONTROLS_IF_TOOLTIP_2 =
  'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.'
C.g.CONTROLS_IF_TOOLTIP_3 =
  'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.'
C.g.CONTROLS_IF_TOOLTIP_4 =
  'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.'
C.g.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop'
C.g.CONTROLS_REPEAT_INPUT_DO = 'do'
C.g.CONTROLS_REPEAT_TITLE = 'repeat %1 times'
C.g.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.'
C.g.CONTROLS_WHILEUNTIL_HELPURL =
  'https://github.com/google/blockly/wiki/Loops#repeat'
C.g.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until'
C.g.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while'
C.g.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  'While a value is false, then do some statements.'
C.g.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  'While a value is true, then do some statements.'
C.g.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?'
C.g.DELETE_BLOCK = 'Delete Block'
C.g.DELETE_VARIABLE = "Delete the '%1' variable"
C.g.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?"
C.g.DELETE_X_BLOCKS = 'Delete %1 Blocks'
C.g.DISABLE_BLOCK = 'Disable Block'
C.g.DUPLICATE_BLOCK = 'Duplicate'
C.g.DUPLICATE_COMMENT = 'Duplicate Comment'
C.g.ENABLE_BLOCK = 'Enable Block'
C.g.EXPAND_ALL = 'Expand Blocks'
C.g.EXPAND_BLOCK = 'Expand Block'
C.g.EXTERNAL_INPUTS = 'External Inputs'
C.g.HELP = 'Help'
C.g.INLINE_INPUTS = 'Inline Inputs'
C.g.IOS_CANCEL = 'Cancel'
C.g.IOS_ERROR = 'Error'
C.g.IOS_OK = 'OK'
C.g.IOS_PROCEDURES_ADD_INPUT = '+ Add Input'
C.g.IOS_PROCEDURES_ALLOW_STATEMENTS = 'Allow statements'
C.g.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR =
  'This function has duplicate inputs.'
C.g.IOS_PROCEDURES_INPUTS = 'INPUTS'
C.g.IOS_VARIABLES_ADD_BUTTON = 'Add'
C.g.IOS_VARIABLES_ADD_VARIABLE = '+ Add Variable'
C.g.IOS_VARIABLES_DELETE_BUTTON = 'Delete'
C.g.IOS_VARIABLES_EMPTY_NAME_ERROR = "You can't use an empty variable name."
C.g.IOS_VARIABLES_RENAME_BUTTON = 'Rename'
C.g.IOS_VARIABLES_VARIABLE_NAME = 'Variable name'
C.g.LISTS_CREATE_EMPTY_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#create-empty-list'
C.g.LISTS_CREATE_EMPTY_TITLE = 'create empty list'
C.g.LISTS_CREATE_EMPTY_TOOLTIP =
  'Returns a list, of length 0, containing no data records'
C.g.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list'
C.g.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  'Add, remove, or reorder sections to reconfigure this list block.'
C.g.LISTS_CREATE_WITH_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#create-list-with'
C.g.LISTS_CREATE_WITH_INPUT_WITH = 'create list with'
C.g.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.'
C.g.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.'
C.g.LISTS_GET_INDEX_FIRST = 'first'
C.g.LISTS_GET_INDEX_FROM_END = '# from end'
C.g.LISTS_GET_INDEX_FROM_START = '#'
C.g.LISTS_GET_INDEX_GET = 'get'
C.g.LISTS_GET_INDEX_GET_REMOVE = 'get and remove'
C.g.LISTS_GET_INDEX_LAST = 'last'
C.g.LISTS_GET_INDEX_RANDOM = 'random'
C.g.LISTS_GET_INDEX_REMOVE = 'remove'
C.g.LISTS_GET_INDEX_TAIL = ''
C.g.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  'Returns the item at the specified position in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  'Removes and returns the first item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  'Removes and returns the item at the specified position in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  'Removes and returns the last item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  'Removes and returns a random item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  'Removes the item at the specified position in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.'
C.g.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.'
C.g.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end'
C.g.LISTS_GET_SUBLIST_END_FROM_START = 'to #'
C.g.LISTS_GET_SUBLIST_END_LAST = 'to last'
C.g.LISTS_GET_SUBLIST_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#getting-a-sublist'
C.g.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first'
C.g.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end'
C.g.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #'
C.g.LISTS_GET_SUBLIST_TAIL = ''
C.g.LISTS_GET_SUBLIST_TOOLTIP =
  'Creates a copy of the specified portion of a list.'
C.g.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.'
C.g.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.'
C.g.LISTS_INDEX_OF_FIRST = 'find first occurrence of item'
C.g.LISTS_INDEX_OF_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list'
C.g.LISTS_INDEX_OF_LAST = 'find last occurrence of item'
C.g.LISTS_INDEX_OF_TOOLTIP =
  'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.'
C.g.LISTS_INLIST = 'in list'
C.g.LISTS_ISEMPTY_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#is-empty'
C.g.LISTS_ISEMPTY_TITLE = '%1 is empty'
C.g.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.'
C.g.LISTS_LENGTH_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#length-of'
C.g.LISTS_LENGTH_TITLE = 'length of %1'
C.g.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.'
C.g.LISTS_REPEAT_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#create-list-with'
C.g.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times'
C.g.LISTS_REPEAT_TOOLTIP =
  'Creates a list consisting of the given value repeated the specified number of times.'
C.g.LISTS_REVERSE_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#reversing-a-list'
C.g.LISTS_REVERSE_MESSAGE0 = 'reverse %1'
C.g.LISTS_REVERSE_TOOLTIP = 'Reverse a copy of a list.'
C.g.LISTS_SET_INDEX_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#in-list--set'
C.g.LISTS_SET_INDEX_INPUT_TO = 'as'
C.g.LISTS_SET_INDEX_INSERT = 'insert at'
C.g.LISTS_SET_INDEX_SET = 'set'
C.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  'Inserts the item at the start of a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  'Inserts the item at the specified position in a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  'Append the item to the end of a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  'Inserts the item randomly in a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  'Sets the item at the specified position in a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.'
C.g.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.'
C.g.LISTS_SORT_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#sorting-a-list'
C.g.LISTS_SORT_ORDER_ASCENDING = 'ascending'
C.g.LISTS_SORT_ORDER_DESCENDING = 'descending'
C.g.LISTS_SORT_TITLE = 'sort %1 %2 %3'
C.g.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.'
C.g.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case'
C.g.LISTS_SORT_TYPE_NUMERIC = 'numeric'
C.g.LISTS_SORT_TYPE_TEXT = 'alphabetic'
C.g.LISTS_SPLIT_HELPURL =
  'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists'
C.g.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text'
C.g.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list'
C.g.LISTS_SPLIT_TOOLTIP_JOIN =
  'Join a list of texts into one text, separated by a delimiter.'
C.g.LISTS_SPLIT_TOOLTIP_SPLIT =
  'Split text into a list of texts, breaking at each delimiter.'
C.g.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter'
C.g.LOGIC_BOOLEAN_FALSE = 'false'
C.g.LOGIC_BOOLEAN_HELPURL =
  'https://github.com/google/blockly/wiki/Logic#values'
C.g.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.'
C.g.LOGIC_BOOLEAN_TRUE = 'true'
C.g.LOGIC_COMPARE_HELPURL =
  'https://en.wikipedia.org/wiki/Inequality_(mathematics)'
C.g.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.'
C.g.LOGIC_COMPARE_TOOLTIP_GT =
  'Return true if the first input is greater than the second input.'
C.g.LOGIC_COMPARE_TOOLTIP_GTE =
  'Return true if the first input is greater than or equal to the second input.'
C.g.LOGIC_COMPARE_TOOLTIP_LT =
  'Return true if the first input is smaller than the second input.'
C.g.LOGIC_COMPARE_TOOLTIP_LTE =
  'Return true if the first input is smaller than or equal to the second input.'
C.g.LOGIC_COMPARE_TOOLTIP_NEQ =
  'Return true if both inputs are not equal to each other.'
C.g.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not'
C.g.LOGIC_NEGATE_TITLE = 'not %1'
C.g.LOGIC_NEGATE_TOOLTIP =
  'Returns true if the input is false. Returns false if the input is true.'
C.g.LOGIC_NULL = 'null'
C.g.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type'
C.g.LOGIC_NULL_TOOLTIP = 'Returns null.'
C.g.LOGIC_OPERATION_AND = 'and'
C.g.LOGIC_OPERATION_HELPURL =
  'https://github.com/google/blockly/wiki/Logic#logical-operations'
C.g.LOGIC_OPERATION_OR = 'or'
C.g.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.'
C.g.LOGIC_OPERATION_TOOLTIP_OR =
  'Return true if at least one of the inputs is true.'
C.g.LOGIC_TERNARY_CONDITION = 'test'
C.g.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:'
C.g.LOGIC_TERNARY_IF_FALSE = 'if false'
C.g.LOGIC_TERNARY_IF_TRUE = 'if true'
C.g.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value."
C.g.MATH_ADDITION_SYMBOL = '+'
C.g.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic'
C.g.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.'
C.g.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.'
C.g.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.'
C.g.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.'
C.g.MATH_ARITHMETIC_TOOLTIP_POWER =
  'Return the first number raised to the power of the second number.'
C.g.MATH_ATAN2_HELPURL = 'https://en.wikipedia.org/wiki/Atan2'
C.g.MATH_ATAN2_TITLE = 'atan2 of X:%1 Y:%2'
C.g.MATH_ATAN2_TOOLTIP =
  'Return the arctangent of point (X, Y) in degrees from -180 to 180.'
C.g.MATH_CHANGE_HELPURL =
  'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter'
C.g.MATH_CHANGE_TITLE = 'change %1 by %2'
C.g.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'."
C.g.MATH_CONSTANT_HELPURL =
  'https://en.wikipedia.org/wiki/Mathematical_constant'
C.g.MATH_CONSTANT_TOOLTIP =
  'Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).'
C.g.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_(graphics)'
C.g.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3'
C.g.MATH_CONSTRAIN_TOOLTIP =
  'Constrain a number to be between the specified limits (inclusive).'
C.g.MATH_DIVISION_SYMBOL = '\u00f7'
C.g.MATH_IS_DIVISIBLE_BY = 'is divisible by'
C.g.MATH_IS_EVEN = 'is even'
C.g.MATH_IS_NEGATIVE = 'is negative'
C.g.MATH_IS_ODD = 'is odd'
C.g.MATH_IS_POSITIVE = 'is positive'
C.g.MATH_IS_PRIME = 'is prime'
C.g.MATH_IS_TOOLTIP =
  'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.'
C.g.MATH_IS_WHOLE = 'is whole'
C.g.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation'
C.g.MATH_MODULO_TITLE = 'remainder of %1 \u00f7 %2'
C.g.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.'
C.g.MATH_MULTIPLICATION_SYMBOL = '\u00d7'
C.g.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number'
C.g.MATH_NUMBER_TOOLTIP = 'A number.'
C.g.MATH_ONLIST_HELPURL = ''
C.g.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list'
C.g.MATH_ONLIST_OPERATOR_MAX = 'max of list'
C.g.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list'
C.g.MATH_ONLIST_OPERATOR_MIN = 'min of list'
C.g.MATH_ONLIST_OPERATOR_MODE = 'modes of list'
C.g.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list'
C.g.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list'
C.g.MATH_ONLIST_OPERATOR_SUM = 'sum of list'
C.g.MATH_ONLIST_TOOLTIP_AVERAGE =
  'Return the average (arithmetic mean) of the numeric values in the list.'
C.g.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.'
C.g.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.'
C.g.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.'
C.g.MATH_ONLIST_TOOLTIP_MODE =
  'Return a list of the most common item(s) in the list.'
C.g.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.'
C.g.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.'
C.g.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.'
C.g.MATH_POWER_SYMBOL = '^'
C.g.MATH_RANDOM_FLOAT_HELPURL =
  'https://en.wikipedia.org/wiki/Random_number_generation'
C.g.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction'
C.g.MATH_RANDOM_FLOAT_TOOLTIP =
  'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).'
C.g.MATH_RANDOM_INT_HELPURL =
  'https://en.wikipedia.org/wiki/Random_number_generation'
C.g.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2'
C.g.MATH_RANDOM_INT_TOOLTIP =
  'Return a random integer between the two specified limits, inclusive.'
C.g.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding'
C.g.MATH_ROUND_OPERATOR_ROUND = 'round'
C.g.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down'
C.g.MATH_ROUND_OPERATOR_ROUNDUP = 'round up'
C.g.MATH_ROUND_TOOLTIP = 'Round a number up or down.'
C.g.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root'
C.g.MATH_SINGLE_OP_ABSOLUTE = 'absolute'
C.g.MATH_SINGLE_OP_ROOT = 'square root'
C.g.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.'
C.g.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.'
C.g.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.'
C.g.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.'
C.g.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.'
C.g.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.'
C.g.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.'
C.g.MATH_SUBTRACTION_SYMBOL = '-'
C.g.MATH_TRIG_ACOS = 'acos'
C.g.MATH_TRIG_ASIN = 'asin'
C.g.MATH_TRIG_ATAN = 'atan'
C.g.MATH_TRIG_COS = 'cos'
C.g.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions'
C.g.MATH_TRIG_SIN = 'sin'
C.g.MATH_TRIG_TAN = 'tan'
C.g.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.'
C.g.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.'
C.g.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.'
C.g.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).'
C.g.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).'
C.g.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).'
C.g.NEW_COLOUR_VARIABLE = 'Create colour variable...'
C.g.NEW_NUMBER_VARIABLE = 'Create number variable...'
C.g.NEW_STRING_VARIABLE = 'Create string variable...'
C.g.NEW_VARIABLE = 'Create variable...'
C.g.NEW_VARIABLE_TITLE = 'New variable name:'
C.g.NEW_VARIABLE_TYPE_TITLE = 'New variable type:'
C.g.ORDINAL_NUMBER_SUFFIX = ''
C.g.PROCEDURES_ALLOW_STATEMENTS = 'allow statements'
C.g.PROCEDURES_BEFORE_PARAMS = 'with:'
C.g.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine'
C.g.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'."
C.g.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine'
C.g.PROCEDURES_CALLRETURN_TOOLTIP =
  "Run the user-defined function '%1' and use its output."
C.g.PROCEDURES_CALL_BEFORE_PARAMS = 'with:'
C.g.PROCEDURES_CREATE_DO = "Create '%1'"
C.g.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...'
C.g.PROCEDURES_DEFNORETURN_DO = ''
C.g.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine'
C.g.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something'
C.g.PROCEDURES_DEFNORETURN_TITLE = 'to'
C.g.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.'
C.g.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine'
C.g.PROCEDURES_DEFRETURN_RETURN = 'return'
C.g.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.'
C.g.PROCEDURES_DEF_DUPLICATE_WARNING =
  'Warning: This function has duplicate parameters.'
C.g.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition'
C.g.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause'
C.g.PROCEDURES_IFRETURN_TOOLTIP =
  'If a value is true, then return a second value.'
C.g.PROCEDURES_IFRETURN_WARNING =
  'Warning: This block may be used only within a function definition.'
C.g.PROCEDURES_MUTATORARG_TITLE = 'input name:'
C.g.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.'
C.g.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs'
C.g.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  'Add, remove, or reorder inputs to this function.'
C.g.REDO = 'Redo'
C.g.REMOVE_COMMENT = 'Remove Comment'
C.g.RENAME_VARIABLE = 'Rename variable...'
C.g.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:"
C.g.TEXT_APPEND_HELPURL =
  'https://github.com/google/blockly/wiki/Text#text-modification'
C.g.TEXT_APPEND_TITLE = 'to %1 append text %2'
C.g.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'."
C.g.TEXT_CHANGECASE_HELPURL =
  'https://github.com/google/blockly/wiki/Text#adjusting-text-case'
C.g.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case'
C.g.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case'
C.g.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE'
C.g.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.'
C.g.TEXT_CHARAT_FIRST = 'get first letter'
C.g.TEXT_CHARAT_FROM_END = 'get letter # from end'
C.g.TEXT_CHARAT_FROM_START = 'get letter #'
C.g.TEXT_CHARAT_HELPURL =
  'https://github.com/google/blockly/wiki/Text#extracting-text'
C.g.TEXT_CHARAT_LAST = 'get last letter'
C.g.TEXT_CHARAT_RANDOM = 'get random letter'
C.g.TEXT_CHARAT_TAIL = ''
C.g.TEXT_CHARAT_TITLE = 'in text %1 %2'
C.g.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.'
C.g.TEXT_COUNT_HELPURL =
  'https://github.com/google/blockly/wiki/Text#counting-substrings'
C.g.TEXT_COUNT_MESSAGE0 = 'count %1 in %2'
C.g.TEXT_COUNT_TOOLTIP =
  'Count how many times some text occurs within some other text.'
C.g.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.'
C.g.TEXT_CREATE_JOIN_TITLE_JOIN = 'join'
C.g.TEXT_CREATE_JOIN_TOOLTIP =
  'Add, remove, or reorder sections to reconfigure this text block.'
C.g.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end'
C.g.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #'
C.g.TEXT_GET_SUBSTRING_END_LAST = 'to last letter'
C.g.TEXT_GET_SUBSTRING_HELPURL =
  'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text'
C.g.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text'
C.g.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter'
C.g.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end'
C.g.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #'
C.g.TEXT_GET_SUBSTRING_TAIL = ''
C.g.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.'
C.g.TEXT_INDEXOF_HELPURL =
  'https://github.com/google/blockly/wiki/Text#finding-text'
C.g.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text'
C.g.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text'
C.g.TEXT_INDEXOF_TITLE = 'in text %1 %2 %3'
C.g.TEXT_INDEXOF_TOOLTIP =
  'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.'
C.g.TEXT_ISEMPTY_HELPURL =
  'https://github.com/google/blockly/wiki/Text#checking-for-empty-text'
C.g.TEXT_ISEMPTY_TITLE = '%1 is empty'
C.g.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.'
C.g.TEXT_JOIN_HELPURL =
  'https://github.com/google/blockly/wiki/Text#text-creation'
C.g.TEXT_JOIN_TITLE_CREATEWITH = 'create text with'
C.g.TEXT_JOIN_TOOLTIP =
  'Create a piece of text by joining together any number of items.'
C.g.TEXT_LENGTH_HELPURL =
  'https://github.com/google/blockly/wiki/Text#text-modification'
C.g.TEXT_LENGTH_TITLE = 'length of %1'
C.g.TEXT_LENGTH_TOOLTIP =
  'Returns the number of letters (including spaces) in the provided text.'
C.g.TEXT_PRINT_HELPURL =
  'https://github.com/google/blockly/wiki/Text#printing-text'
C.g.TEXT_PRINT_TITLE = 'print %1'
C.g.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.'
C.g.TEXT_PROMPT_HELPURL =
  'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user'
C.g.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.'
C.g.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.'
C.g.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message'
C.g.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message'
C.g.TEXT_REPLACE_HELPURL =
  'https://github.com/google/blockly/wiki/Text#replacing-substrings'
C.g.TEXT_REPLACE_MESSAGE0 = 'replace %1 with %2 in %3'
C.g.TEXT_REPLACE_TOOLTIP =
  'Replace all occurances of some text within some other text.'
C.g.TEXT_REVERSE_HELPURL =
  'https://github.com/google/blockly/wiki/Text#reversing-text'
C.g.TEXT_REVERSE_MESSAGE0 = 'reverse %1'
C.g.TEXT_REVERSE_TOOLTIP = 'Reverses the order of the characters in the text.'
C.g.TEXT_TEXT_HELPURL =
  'https://en.wikipedia.org/wiki/String_(computer_science)'
C.g.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.'
C.g.TEXT_TRIM_HELPURL =
  'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces'
C.g.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of'
C.g.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of'
C.g.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of'
C.g.TEXT_TRIM_TOOLTIP =
  'Return a copy of the text with spaces removed from one or both ends.'
C.g.TODAY = 'Today'
C.g.UNDO = 'Undo'
C.g.VARIABLES_DEFAULT_NAME = 'item'
C.g.VARIABLES_GET_CREATE_SET = "Create 'set %1'"
C.g.VARIABLES_GET_HELPURL =
  'https://github.com/google/blockly/wiki/Variables#get'
C.g.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.'
C.g.VARIABLES_SET = 'set %1 to %2'
C.g.VARIABLES_SET_CREATE_GET = "Create 'get %1'"
C.g.VARIABLES_SET_HELPURL =
  'https://github.com/google/blockly/wiki/Variables#set'
C.g.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.'
C.g.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists."
C.g.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'."
C.g.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...'
C.g.CONTROLS_FOREACH_INPUT_DO = C.g.CONTROLS_REPEAT_INPUT_DO
C.g.CONTROLS_FOR_INPUT_DO = C.g.CONTROLS_REPEAT_INPUT_DO
C.g.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = C.g.CONTROLS_IF_MSG_ELSEIF
C.g.CONTROLS_IF_ELSE_TITLE_ELSE = C.g.CONTROLS_IF_MSG_ELSE
C.g.CONTROLS_IF_IF_TITLE_IF = C.g.CONTROLS_IF_MSG_IF
C.g.CONTROLS_IF_MSG_THEN = C.g.CONTROLS_REPEAT_INPUT_DO
C.g.CONTROLS_WHILEUNTIL_INPUT_DO = C.g.CONTROLS_REPEAT_INPUT_DO
C.g.LISTS_CREATE_WITH_ITEM_TITLE = C.g.VARIABLES_DEFAULT_NAME
C.g.LISTS_GET_INDEX_HELPURL = C.g.LISTS_INDEX_OF_HELPURL
C.g.LISTS_GET_INDEX_INPUT_IN_LIST = C.g.LISTS_INLIST
C.g.LISTS_GET_SUBLIST_INPUT_IN_LIST = C.g.LISTS_INLIST
C.g.LISTS_INDEX_OF_INPUT_IN_LIST = C.g.LISTS_INLIST
C.g.LISTS_SET_INDEX_INPUT_IN_LIST = C.g.LISTS_INLIST
C.g.MATH_CHANGE_TITLE_ITEM = C.g.VARIABLES_DEFAULT_NAME
C.g.PROCEDURES_DEFRETURN_COMMENT = C.g.PROCEDURES_DEFNORETURN_COMMENT
C.g.PROCEDURES_DEFRETURN_DO = C.g.PROCEDURES_DEFNORETURN_DO
C.g.PROCEDURES_DEFRETURN_PROCEDURE = C.g.PROCEDURES_DEFNORETURN_PROCEDURE
C.g.PROCEDURES_DEFRETURN_TITLE = C.g.PROCEDURES_DEFNORETURN_TITLE
C.g.TEXT_APPEND_VARIABLE = C.g.VARIABLES_DEFAULT_NAME
C.g.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = C.g.VARIABLES_DEFAULT_NAME
C.g.MATH_HUE = '230'
C.g.LOOPS_HUE = '120'
C.g.LISTS_HUE = '260'
C.g.LOGIC_HUE = '210'
C.g.VARIABLES_HUE = '330'
C.g.TEXTS_HUE = '160'
C.g.PROCEDURES_HUE = '290'
C.g.COLOUR_HUE = '20'
C.g.VARIABLES_DYNAMIC_HUE = '310'
var U = {
  gh: null,
  Z: function () {
    Ql()
    var a = document.getElementById('linkButton')
    'BlocklyStorage' in window
      ? ((BlocklyStorage.HTTPREQUEST_ERROR = S('Games_httpRequestError')),
        (BlocklyStorage.LINK_ALERT = S('Games_linkAlert')),
        (BlocklyStorage.HASH_ERROR = S('Games_hashError')),
        (BlocklyStorage.XML_ERROR = S('Games_xmlError')),
        (BlocklyStorage.alert = T.ws.bind(T, a)),
        a && Ul(a, BlocklyStorage.link))
      : a && (a.style.display = 'none')
    ;(a = document.getElementById('languageMenu')) &&
      a.addEventListener('change', U.bu, !0)
    C.hb && (C.hb.vt = !1)
    C.D && (C.D.vt = !1)
  },
  Tv: function (a, b) {
    if ('BlocklyStorage' in window && 1 < window.location.hash.length)
      BlocklyStorage.retrieveXml(window.location.hash.substring(1))
    else {
      var c = null
      try {
        c = window.sessionStorage.vn
      } catch (h) {}
      c && delete window.sessionStorage.vn
      var e = Rl(Q),
        f = b && Rl(Q - 1)
      f && 'function' == typeof b && (f = b(f))
      ;(a = c || e || f || a) && U.js(a)
    }
  },
  js: function (a) {
    U.gh
      ? U.gh.setValue(a, -1)
      : ((a = C.u.Lc(a)), P.clear(), C.u.$e(a, P), P.Kp())
  },
  Pm: function () {
    if (U.gh) var a = U.gh.getValue()
    else {
      a = C.u.Ll(P, !0)
      if (1 == ud(P, !1).length && a.querySelector) {
        var b = a.querySelector('block')
        b && (b.removeAttribute('x'), b.removeAttribute('y'))
      }
      a = C.u.Zb(a)
    }
    return a
  },
  Mk: function () {
    return P
  },
  Ew: function () {
    window.localStorage && (window.localStorage[Tl + Q] = U.Pm())
  },
  Qi: function () {
    window.parent.postMessage('mensagem vinda do iframe', '*')
    window.location = 'https://myblocklymaze.vercel.app/'
  },
  bu: function () {
    if (window.sessionStorage) {
      if (U.gh) var a = U.gh.getValue()
      else (a = C.u.Ll(P)), (a = C.u.Zb(a))
      window.sessionStorage.vn = a
    }
    a = document.getElementById('languageMenu')
    a = encodeURIComponent(a.options[a.selectedIndex].value)
    var b = window.location.search
    b =
      1 >= b.length
        ? '?lang=' + a
        : b.match(/[?&]lang=[^&]*/)
        ? b.replace(/([?&]lang=)[^&]*/, '$1' + a)
        : b.replace(/\?/, '?lang=' + a + '&')
    window.location =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      b
  },
  ll: function () {
    Q < Pl
      ? (window.location =
          window.location.protocol +
          '//' +
          window.location.host +
          window.location.pathname +
          '?lang=' +
          Ll +
          '&level=' +
          (Q + 1))
      : U.Qi()
  },
  Qk: function (a, b) {
    if (a) {
      var c = a.match(/^block_id_([^']+)$/)
      c && (a = c[1])
    }
    mj(a, b)
  },
  wy: function (a, b) {
    a = document.getElementById(a)
    a.firstChild ||
      ((a = C.jf(a, { rtl: -1 != Kl.indexOf(Ll), readOnly: !0 })),
      'string' != typeof b && (b = b.join('')),
      C.u.$e(C.u.Lc(b), a))
  },
  Pw: function (a) {
    return a
      .replace(/(,\s*)?'block_id_[^']+'\)/g, ')')
      .replace(/[\s\xa0]+$/, '')
  },
  jd: function (a) {
    if (
      ('click' == a.type &&
        'touchend' == U.jd.Tn &&
        U.jd.Sn + 2e3 > Date.now()) ||
      (U.jd.Tn == a.type && U.jd.Sn + 400 > Date.now())
    )
      return a.preventDefault(), a.stopPropagation(), !0
    U.jd.Tn = a.type
    U.jd.Sn = Date.now()
    return !1
  }
}
U.jd.Tn = null
U.jd.Sn = 0
U.Hv = function () {
  var a = document.createElement('script')
  a.setAttribute('type', 'text/javascript')
  a.setAttribute('src', 'third-party/JS-Interpreter/compiled.js')
  document.head.appendChild(a)
}
U.Iv = function () {
  var a = document.createElement('link')
  a.setAttribute('rel', 'stylesheet')
  a.setAttribute('type', 'text/css')
  a.setAttribute('href', 'common/prettify.css')
  document.head.appendChild(a)
  a = document.createElement('script')
  a.setAttribute('type', 'text/javascript')
  a.setAttribute('src', 'common/prettify.js')
  document.head.appendChild(a)
}
window.BlocklyInterface = U
U.setCode = U.js
U.getCode = U.Pm
U.getWorkspace = U.Mk
var T = {
  jg: !1,
  rq: null,
  pk: null,
  Cl: function (a, b, c, e, f, h) {
    function k() {
      T.jg &&
        ((l.style.visibility = 'visible'),
        (l.style.zIndex = 10),
        (m.style.visibility = 'hidden'))
    }
    if (!a) throw TypeError('Content not found: ' + a)
    T.jg && T.qc(!1)
    C.df() && C.Nb(!0)
    T.jg = !0
    T.rq = b
    T.pk = h
    var l = document.getElementById('dialog')
    h = document.getElementById('dialogShadow')
    var m = document.getElementById('dialogBorder'),
      n
    for (n in f) l.style[n] = f[n]
    e &&
      ((h.style.visibility = 'visible'),
      (h.style.opacity = 0.3),
      (h.style.zIndex = 9),
      (e = document.createElement('div')),
      (e.id = 'dialogHeader'),
      l.appendChild(e),
      (T.um = C.$a(e, 'mousedown', null, T.Lu)))
    l.appendChild(a)
    a.className = a.className.replace('dialogHiddenContent', '')
    c && b ? (T.bl(b, !1, 0.2), T.bl(l, !0, 0.8), setTimeout(k, 175)) : k()
  },
  tq: 0,
  uq: 0,
  Lu: function (a) {
    T.xm()
    if (!C.h.pf(a)) {
      var b = document.getElementById('dialog')
      T.tq = b.offsetLeft - a.clientX
      T.uq = b.offsetTop - a.clientY
      T.wm = C.$a(document, 'mouseup', null, T.xm)
      T.vm = C.$a(document, 'mousemove', null, T.Mu)
      a.stopPropagation()
    }
  },
  Mu: function (a) {
    var b = document.getElementById('dialog'),
      c = T.tq + a.clientX
    a = T.uq + a.clientY
    a = Math.max(a, 0)
    a = Math.min(a, window.innerHeight - b.offsetHeight)
    c = Math.max(c, 0)
    c = Math.min(c, window.innerWidth - b.offsetWidth)
    b.style.left = c + 'px'
    b.style.top = a + 'px'
  },
  xm: function () {
    T.wm && (C.wa(T.wm), (T.wm = null))
    T.vm && (C.wa(T.vm), (T.vm = null))
  },
  qc: function (a) {
    function b() {
      e.style.zIndex = -1
      e.style.visibility = 'hidden'
      document.getElementById('dialogBorder').style.visibility = 'hidden'
    }
    if (T.jg) {
      T.xm()
      T.um && (C.wa(T.um), (T.um = null))
      T.jg = !1
      T.pk && T.pk()
      T.pk = null
      var c = !1 === a ? null : T.rq
      a = document.getElementById('dialog')
      var e = document.getElementById('dialogShadow')
      e.style.opacity = 0
      c && a ? (T.bl(a, !1, 0.8), T.bl(c, !0, 0.2), setTimeout(b, 175)) : b()
      a.style.visibility = 'hidden'
      a.style.zIndex = -1
      for (
        (c = document.getElementById('dialogHeader')) &&
        c.parentNode.removeChild(c);
        a.firstChild;

      )
        (c = a.firstChild),
          (c.className += ' dialogHiddenContent'),
          document.body.appendChild(c)
    }
  },
  bl: function (a, b, c) {
    function e() {
      f.style.width = h.width + 'px'
      f.style.height = h.height + 'px'
      f.style.left = h.x + 'px'
      f.style.top = h.y + 'px'
      f.style.opacity = c
    }
    if (a) {
      var f = document.getElementById('dialogBorder'),
        h = T.Iq(a)
      b
        ? ((f.className = 'dialogAnimate'), setTimeout(e, 1))
        : ((f.className = ''), e())
      f.style.visibility = 'visible'
    }
  },
  Iq: function (a) {
    var b = Ff(a)
    b = { x: b.x, y: b.y }
    a.getBBox
      ? ((a = a.getBBox()), (b.height = a.height), (b.width = a.width))
      : ((b.height = a.offsetHeight), (b.width = a.offsetWidth))
    return b
  },
  ws: function (a, b) {
    var c = document.getElementById('containerStorage')
    c.textContent = ''
    b = b.split('\n')
    for (var e = 0; e < b.length; e++) {
      var f = document.createElement('p')
      f.appendChild(document.createTextNode(b[e]))
      c.appendChild(f)
    }
    c = document.getElementById('dialogStorage')
    T.Cl(c, a, !0, !0, { width: '50%', left: '25%', top: '5em' }, T.Ow)
    T.Lw()
  },
  It: function () {
    if (!Rl(Q))
      if (T.jg || P.cc()) setTimeout(T.It, 15e3)
      else {
        var a = document.getElementById('dialogAbort'),
          b = document.getElementById('abortCancel')
        b.addEventListener('click', T.qc, !0)
        b.addEventListener('touchend', T.qc, !0)
        b = document.getElementById('abortOk')
        b.addEventListener('click', U.Qi, !0)
        b.addEventListener('touchend', U.Qi, !0)
        T.Cl(
          a,
          null,
          !1,
          !0,
          { width: '40%', left: '30%', top: '3em' },
          function () {
            document.body.removeEventListener('keydown', T.tp, !0)
          }
        )
        document.body.addEventListener('keydown', T.tp, !0)
      }
  },
  ps: function () {
    document.getElementById('galleryXml').value = U.Pm()
    var a = document.getElementById('galleryDialog')
    if (!T.ps.Dw) {
      var b = document.getElementById('galleryCancel')
      b.addEventListener('click', T.qc, !0)
      b.addEventListener('touchend', T.qc, !0)
      b = document.getElementById('galleryOk')
      b.addEventListener('click', T.Mm, !0)
      b.addEventListener('touchend', T.Mm, !0)
      T.ps.Dw = !0
    }
    b = document.getElementById('submitButton')
    T.Cl(a, b, !0, !0, { width: '40%', left: '30%', top: '3em' }, function () {
      document.body.removeEventListener('keydown', T.Gq, !0)
    })
    document.body.addEventListener('keydown', T.Gq, !0)
    setTimeout(function () {
      document.getElementById('galleryTitle').focus()
    }, 250)
  },
  su: function () {
    var a = document.getElementById('dialogDone')
    if (P) {
      var b = document.getElementById('dialogLinesText')
      b.textContent = ''
      var c = Ak()
      c = U.Pw(c)
      var e = c.replace(/\/\/[^\n]*/g, '')
      e = e.replace(/\/\*.*\*\//g, '')
      e = e.replace(/[ \t]+\n/g, '\n')
      e = e.replace(/\n+/g, '\n')
      e = e.trim()
      e = e.split('\n').length
      var f = document.getElementById('containerCode')
      f.textContent = c
      'function' == typeof prettyPrintOne &&
        ((c = f.innerHTML), (c = prettyPrintOne(c, 'js')), (f.innerHTML = c))
      c =
        1 == e
          ? S('Games_linesOfCode1')
          : S('Games_linesOfCode2').replace('%1', String(e))
      b.appendChild(document.createTextNode(c))
    }
    c =
      Q < Pl
        ? S('Games_nextLevel').replace('%1', String(Q + 1))
        : S('Games_finalLevel')
    b = document.getElementById('doneCancel')
    b.addEventListener('click', T.qc, !0)
    b.addEventListener('touchend', T.qc, !0)
    b = document.getElementById('doneOk')
    b.addEventListener('click', U.ll, !0)
    b.addEventListener('touchend', U.ll, !0)
    T.Cl(
      a,
      null,
      !1,
      !0,
      { width: '40%', left: '30%', top: '3em' },
      function () {
        document.body.removeEventListener('keydown', T.Sp, !0)
      }
    )
    document.body.addEventListener('keydown', T.Sp, !0)
    document.getElementById('dialogDoneText').textContent = c
  },
  qq: function (a) {
    !T.jg ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (T.qc(!0), a.stopPropagation(), a.preventDefault())
  },
  Lw: function () {
    document.body.addEventListener('keydown', T.qq, !0)
  },
  Ow: function () {
    document.body.removeEventListener('keydown', T.qq, !0)
  },
  Sp: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      T.qc(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && U.ll()
  },
  tp: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      T.qc(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && U.Qi()
  },
  Gq: function (a) {
    27 == a.keyCode ? T.qc(!0) : 13 == a.keyCode && T.Mm()
  },
  Mm: function () {
    var a = document.getElementById('galleryTitle')
    if (a.value.trim()) {
      a = document.getElementById('galleryForm')
      for (var b = [], c = 0, e; (e = a.elements[c]); c++)
        e.name &&
          (b[c] =
            encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value))
      var f = new XMLHttpRequest()
      f.open('POST', a.action)
      f.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      f.onload = function () {
        if (4 == f.readyState) {
          var h =
            200 == f.status
              ? S('Games_submitted')
              : S('Games_httpRequestError') + '\nStatus: ' + f.status
          T.ws(null, h)
        }
      }
      f.send(b.join('&'))
      T.qc(!0)
    } else (a.value = ''), a.focus()
  }
}
window.BlocklyDialogs = T
T.hideDialog = T.qc
// Copyright 2012 Google Inc.  Apache License 2.0
C.D = new Cj()
Fk(
  'Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan'
)
C.D.ux = 0
C.D.Mx = 1.1
C.D.Sj = 1.2
C.D.Rj = 2
C.D.Jx = 3
C.D.Dx = 3
C.D.xx = 4.1
C.D.Px = 4.2
C.D.jp = 4.3
C.D.fp = 4.4
C.D.Ox = 4.5
C.D.Qx = 4.6
C.D.Ex = 4.7
C.D.vx = 4.8
C.D.Hx = 5
C.D.hp = 5.1
C.D.Fx = 5.2
C.D.Lx = 5.3
C.D.ip = 6.1
C.D.Qj = 6.2
C.D.zx = 7
C.D.Nx = 8
C.D.Ix = 8
C.D.Kx = 8
C.D.Gx = 9
C.D.wx = 10
C.D.Ax = 11
C.D.yx = 12
C.D.ep = 13
C.D.gp = 14
C.D.Cx = 15
C.D.tx = 16
C.D.Rx = 17
C.D.Bx = 18
C.D.wt = 99
C.D.Tj = [
  [C.D.Rj, C.D.Sj],
  [C.D.Rj, C.D.Rj],
  [C.D.Sj, C.D.Sj],
  [C.D.Sj, C.D.Rj],
  [C.D.fp, C.D.fp],
  [C.D.hp, C.D.hp],
  [C.D.Qj, C.D.Qj],
  [C.D.ep, C.D.ep],
  [C.D.gp, C.D.gp]
]
C.D.Z = function (a) {
  C.D.lk = Object.create(null)
  C.D.bv = Object.create(null)
  C.D.Wh ? C.D.Wh.reset() : (C.D.Wh = new Gk())
  C.D.Wh.pa = a.pa
  for (var b = [], c = C.I.Lt(a), e = 0; e < c.length; e++)
    b.push(C.D.Wh.getName(c[e], 'DEVELOPER_VARIABLE'))
  a = C.I.vp(a)
  for (e = 0; e < a.length; e++) b.push(C.D.Wh.getName(a[e].ga(), C.I.ci))
  b.length && (C.D.lk.variables = 'var ' + b.join(', ') + ';')
}
C.D.finish = function (a) {
  var b = [],
    c
  for (c in C.D.lk) b.push(C.D.lk[c])
  delete C.D.lk
  delete C.D.bv
  C.D.Wh.reset()
  return b.join('\n\n') + '\n\n\n' + a
}
C.D.gs = function (a) {
  return a + ';\n'
}
C.D.Ay = function (a) {
  a = a.replace(/\\/g, '\\\\').replace(/\n/g, '\\\n').replace(/'/g, "\\'")
  return "'" + a + "'"
}
C.D.io = function (a, b, c) {
  var e = ''
  if (!a.P || !a.P.ta) {
    var f = a.Ck()
    ;(f = C.h.Ns(f, C.D.Ts - 3)) &&
      (e = a.Yf
        ? e + ('/**\n' + Ck(f + '\n', ' * ') + ' */\n')
        : e + Ck(f + '\n', '// '))
    for (var h = 0; h < a.T.length; h++)
      if (a.T[h].type == C.Na) {
        var k = G(a.T[h].connection)
        if (k) {
          f = []
          k = E(k, !0)
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Ck()
            m && f.push(m)
          }
          f.length && f.push('')
          ;(f = f.join('\n')) && (e += Ck(f, '// '))
        }
      }
  }
  a = a.O && G(a.O)
  c = c ? '' : Bk(C.D, a)
  return e + b + c
}
C.D.py = function (a, b, c, e, f) {
  c = c || 0
  f = f || C.D.wt
  a.m.options.vf && c--
  var h = a.m.options.vf ? '1' : '0'
  a =
    0 < c
      ? Dk(a, b, C.D.Qj) || h
      : 0 > c
      ? Dk(a, b, C.D.ip) || h
      : e
      ? Dk(a, b, C.D.jp) || h
      : Dk(a, b, f) || h
  if (C.Ov(a)) (a = parseFloat(a) + c), e && (a = -a)
  else {
    if (0 < c) {
      a = a + ' + ' + c
      var k = C.D.Qj
    } else 0 > c && ((a = a + ' - ' + -c), (k = C.D.ip))
    e && ((a = c ? '-(' + a + ')' : '-' + a), (k = C.D.jp))
    k = Math.floor(k)
    f = Math.floor(f)
    k && f >= k && (a = '(' + a + ')')
  }
  return a
}
var Vl = {},
  V,
  Wl,
  Xl,
  W,
  X,
  Y,
  Yl
C.hb.maze_moveForward = {
  Z: function () {
    Hj(this, {
      message0: S('Maze_moveForward'),
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: S('Maze_moveForwardTooltip')
    })
  }
}
C.D.maze_moveForward = function (a) {
  return "moveForward('block_id_" + a.id + "');\n"
}
C.hb.maze_turn = {
  Z: function () {
    var a = [
      [S('Maze_turnLeft'), 'turnLeft'],
      [S('Maze_turnRight'), 'turnRight']
    ]
    a[0][0] += ' \u21ba'
    a[1][0] += ' \u21bb'
    this.Bd(290)
    Aj(Gj(this), new ei(a), 'DIR')
    this.Bg(!0)
    this.Oh(!0)
    this.pd(S('Maze_turnTooltip'))
  }
}
C.D.maze_turn = function (a) {
  return Ee(a, 'DIR') + "('block_id_" + a.id + "');\n"
}
C.hb.maze_if = {
  Z: function () {
    var a = [
      [S('Maze_pathAhead'), 'isPathForward'],
      [S('Maze_pathLeft'), 'isPathLeft'],
      [S('Maze_pathRight'), 'isPathRight']
    ]
    a[1][0] += ' \u21ba'
    a[2][0] += ' \u21bb'
    this.Bd(210)
    Aj(Gj(this), new ei(a), 'DIR')
    Aj(this.me(C.Da, 'DO'), S('Maze_doCode'))
    this.pd(S('Maze_ifTooltip'))
    this.Bg(!0)
    this.Oh(!0)
  }
}
C.D.maze_if = function (a) {
  var b = Ee(a, 'DIR') + "('block_id_" + a.id + "')"
  a = Ek(a, 'DO')
  return 'if (' + b + ') {\n' + a + '}\n'
}
C.hb.maze_ifElse = {
  Z: function () {
    var a = [
      [S('Maze_pathAhead'), 'isPathForward'],
      [S('Maze_pathLeft'), 'isPathLeft'],
      [S('Maze_pathRight'), 'isPathRight']
    ]
    a[1][0] += ' \u21ba'
    a[2][0] += ' \u21bb'
    this.Bd(210)
    Aj(Gj(this), new ei(a), 'DIR')
    Aj(this.me(C.Da, 'DO'), S('Maze_doCode'))
    Aj(this.me(C.Da, 'ELSE'), S('Maze_elseCode'))
    this.pd(S('Maze_ifelseTooltip'))
    this.Bg(!0)
    this.Oh(!0)
  }
}
C.D.maze_ifElse = function (a) {
  var b = Ee(a, 'DIR') + "('block_id_" + a.id + "')",
    c = Ek(a, 'DO')
  a = Ek(a, 'ELSE')
  return 'if (' + b + ') {\n' + c + '} else {\n' + a + '}\n'
}
C.hb.maze_forever = {
  Z: function () {
    this.Bd(120)
    Aj(Aj(Gj(this), S('Maze_repeatUntil')), new Yj(Zl.$i, 12, 16))
    Aj(this.me(C.Da, 'DO'), S('Maze_doCode'))
    this.Bg(!0)
    this.pd(S('Maze_whileTooltip'))
  }
}
C.D.maze_forever = function (a) {
  var b = Ek(a, 'DO')
  C.D.Zo && (b = C.D.Zo.replace(/%1/g, "'block_id_" + a.id + "'") + b)
  return 'while (notDone()) {\n' + b + '}\n'
}
var $l = {},
  am = {}
function bm() {
  throw Error('Do not instantiate directly')
}
bm.prototype.nm = null
bm.prototype.bf = function () {
  return this.content
}
bm.prototype.toString = function () {
  return this.content
}
bm.prototype.Il = function () {
  if (this.om === am) return Jb(this.toString())
  if (this.om !== $l)
    throw Error('Sanitized content was not of kind TEXT or HTML.')
  return Kb(this.toString(), this.nm || null)
}
function cm(a) {
  if (null != a)
    switch (a.nm) {
      case 1:
        return 1
      case -1:
        return -1
      case 0:
        return 0
    }
  return null
}
function dm() {
  bm.call(this)
}
w(dm, bm)
dm.prototype.om = $l
function em(a) {
  return null != a && a.om === $l
    ? a
    : fm(String(String(a)).replace(gm, hm), cm(a))
}
var fm = (function (a) {
    function b() {}
    b.prototype = a.prototype
    return function (c, e) {
      var f = new b()
      f.content = String(c)
      void 0 !== e && (f.nm = e)
      return f
    }
  })(dm),
  im = {
    '\x00': '&#0;',
    '"': '&quot;',
    '&': '&amp;',
    "'": '&#39;',
    '<': '&lt;',
    '>': '&gt;',
    '\t': '&#9;',
    '\n': '&#10;',
    '\x0B': '&#11;',
    '\f': '&#12;',
    '\r': '&#13;',
    ' ': '&#32;',
    '-': '&#45;',
    '/': '&#47;',
    '=': '&#61;',
    '`': '&#96;',
    '\u0085': '&#133;',
    '\u00a0': '&#160;',
    '\u2028': '&#8232;',
    '\u2029': '&#8233;'
  }
function hm(a) {
  return im[a]
}
var gm = /[\x00\x22\x26\x27\x3c\x3e]/g
function jm() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
}
function km() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  var lv = urlSearchParams.get("levels")
  var url_image = urlSearchParams.get("url_image")
  var a = Pl,
    b = lm,
    c =
      '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">Você solucionou esse nível com 1 linha de JavaScript:</span><span id="Games_linesOfCode2">Você solucionou esse nível com %1 linhas de JavaScript:</span><span id="Games_nextLevel">Você esta preparado para o nível %1?</span><span id="Games_finalLevel">Você está pronto para o próximo desafio?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Maze_moveForward">avançar</span><span id="Maze_turnLeft">vire à esquerda</span><span id="Maze_turnRight">vire à direita</span><span id="Maze_doCode">faça</span><span id="Maze_elseCode">se não</span><span id="Maze_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Maze_pathAhead">se caminho à frente</span><span id="Maze_pathLeft">se caminho à esquerda</span><span id="Maze_pathRight">se caminho à direita</span><span id="Maze_repeatUntil">repetir até</span><span id="Maze_moveForwardTooltip">Move o jogador um espaço para frente.</span><span id="Maze_turnTooltip">Vira o jogador 90 graus para esquerda ou direita.</span><span id="Maze_ifTooltip">Se há um caminho na direção especificada, \\nentão faça algumas ações.</span><span id="Maze_ifelseTooltip">Se há um caminho na direção especificada, \\nentão faça o primeiro bloco de ações. \\nCaso contrário, faça o segundo bloco de \\nações.</span><span id="Maze_whileTooltip">Repetir as ações inclusas até que o ponto final \\nseja alcançado.</span><span id="Maze_capacity0">You have %0 blocks left.</span><span id="Maze_capacity1">You have %1 block left.</span><span id="Maze_capacity2">You have %2 blocks left.</span></div><table width="100%"><tr><td><h1>' +
      ('<span id="title">' +
        (Nl
          ? '<a href="https://myblocklymaze.vercel.app/">'
          : '<a href="./?lang=' + em(Ll) + '">') +
        'My Blockly Maze</a></span>')
  b = '&skin=' + em(b)
  lv = '&levels=' + em(lv)
  url_image = '&url_image=' + em(url_image)
  for (var e = ' &nbsp; ', f = a + 1, h = 1; h < f; h++)
    e +=
      ' ' +
      (h == Q
        ? '<span class="level_number level_done" id="level' +
          em(h) +
          '">' +
          em(h) +
          '</span>'
        : h == a
        ? '<a class="level_number" id="level' +
          em(h) +
          '" href="?lang=' +
          em(Ll) +
          '&level=' +
          em(h) +
          em(b) +
          em(lv) +
          em(url_image) +
          '">' +
          em(h) +
          '</a>'
        : '<a class="level_dot" id="level' +
          em(h) +
          '" href="?lang=' +
          em(Ll) +
          '&level=' +
          em(h) +
          em(b) +
          em(lv) +
          em(url_image) +
          '"></a>')
  return (
    c +
    e +
    '</h1></td><td class="farSide"><select id="languageMenu" style="visibility: hidden"></select>&nbsp;<button id="linkButton" style="visibility: hidden" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button class="secondary" style="margin-right: 20px;" id="clearData" onclick = "switchModal()" >Ajuda</span></button><div class="modal" style="display: none"><div class="content"><h2>Instruções para jogar:</h2><p><video class="videoYT" width="827" height="465" controls><source src="maze/tutorial_com_texto.mov" type="video/mp4">Your browser does not support the video tag.</video></p><button class="buttonClose" onclick="clickClose();">Fechar</button></div></div><button id="pegmanButton" style="visibility: hidden"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Faz o jogador executar o que os blocos dizem."><img src="common/1x1.gif" class="run icon21">Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Coloca o jogador de volta ao início do labirinto."><img src="common/1x1.gif" class="stop icon21">Reiniciar</button></td></tr></table><xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block><block type="maze_forever"></block><block type="maze_if"></block><block type="maze_ifElse"></block></xml><div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Parabéns!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>' +
    ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
      jm() +
      '</div>') +
    (1 == Q
      ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Stack a couple of \'move forward\' blocks together to help me reach the goal.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>On this level, you need to stack together all of the blocks in the white workspace.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Run your program to see what happens.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>'
      : 2 == Q
      ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t solve the maze. Press \'Reset\' and try again.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>'
      : 3 == Q || 4 == Q
      ? (3 == Q
          ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Reach the end of this path using only two blocks. Use \'repeat\' to run a block more than once.</td><td><img src="common/help.png"></td></tr></table></div>'
          : '') +
        '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>You can fit more than one block inside a \'repeat\' block.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 5 == Q
      ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>'
      : 6 == Q
      ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>An \'if\' block will do something only if the condition is true. Try turning left if there is a path to the left.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 7 == Q
      ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 9 == Q
      ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else blocks will do one thing or the other.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 10 == Q
      ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Can you solve this complicated maze? Try following the left-hand wall. Advanced programmers only!' +
        jm() +
        '</td></tr></table></div>'
      : '')
  )
}
var Tl = 'maze'
U.ll = function () {
  const urlSearchParams = new URLSearchParams(window.location.search)
  var a = urlSearchParams.get("levels")
  var url_image = urlSearchParams.get("url_image")
  Q < Pl
    ? (window.location =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?lang=' +
        Ll +
        '&level=' +
        (Q + 1) +
        '&skin=' +
        lm +
        '&levels=' +
        a +
        '&url_image=' +
        url_image)
    : U.Qi()
}
var mm = [
    void 0,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity
  ][Q],
  nm = [
    {
      Eg: 'maze/pegman.png',
      Hl: 'maze/tiles.png',
      $i: 'maze/marker.png',
      background: 'maze/bg_ufsm.jpg',
      Gi: !1,
      wn: '#000',
      Ko: ['maze/win.mp3', 'maze/win.ogg'],
      qm: ['maze/fail_pegman.mp3', 'maze/fail_pegman.ogg'],
      hk: 1
    },
    {
      Eg: 'maze/astro.png',
      Hl: 'maze/tiles_astro.png',
      $i: 'maze/marker.png',
      background: 'maze/bg_astro.jpg',
      Gi: !1,
      wn: '#fff',
      Ko: ['maze/win.mp3', 'maze/win.ogg'],
      qm: ['maze/fail_astro.mp3', 'maze/fail_astro.ogg'],
      hk: 2
    },
    {
      Eg: 'maze/panda.png',
      Hl: 'maze/tiles_panda.png',
      $i: 'maze/marker.png',
      background: 'maze/bg_panda.jpg',
      Gi: !1,
      wn: '#000',
      Ko: ['maze/win.mp3', 'maze/win.ogg'],
      qm: ['maze/fail_panda.mp3', 'maze/fail_panda.ogg'],
      hk: 3
    }
  ],
  lm = Ol('skin', 0, nm.length),
  Zl = nm[lm],
  om = [
    void 0,
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 3, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 3, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 3, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 3, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  ][Q],
  pm = om.length,
  qm = om[0].length,
  rm = 50 * qm,
  sm = 50 * pm,
  tm = 0,
  Z = [],
  um = {
    10010: [4, 0],
    10001: [3, 3],
    11e3: [0, 1],
    10100: [0, 2],
    11010: [4, 1],
    10101: [3, 2],
    10110: [0, 0],
    10011: [2, 0],
    11001: [4, 2],
    11100: [2, 3],
    11110: [1, 1],
    10111: [1, 0],
    11011: [2, 1],
    11101: [1, 2],
    11111: [2, 2],
    null0: [4, 3],
    null1: [3, 0],
    null2: [3, 1],
    null3: [0, 3],
    null4: [1, 3]
  }
function vm() {
  function a(n, p) {
    return 0 > n || n >= qm || 0 > p || p >= pm
      ? '0'
      : 0 == om[p][n]
      ? '0'
      : '1'
  }
  var b = document.getElementById('svgMaze')
  b.setAttribute('viewBox', '0 0 ' + rm + ' ' + sm)
  b.setAttribute('width', rm)
  b.setAttribute('height', sm)
  var c = document.createElementNS(C.Ac, 'rect')
  c.setAttribute('width', rm)
  c.setAttribute('height', sm)
  c.setAttribute('fill', '#F1EEE7')
  c.setAttribute('stroke-width', 1)
  c.setAttribute('stroke', '#CCB')
  b.appendChild(c)
  if (Zl.background) {
    var e = document.createElementNS(C.Ac, 'image')
    e.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      Zl.background
    )
    e.setAttribute('height', sm)
    e.setAttribute('width', rm)
    e.setAttribute('x', 0)
    e.setAttribute('y', 0)
    b.appendChild(e)
  }
  if (Zl.Gi) {
    for (c = 0; c < pm; c++) {
      var f = document.createElementNS(C.Ac, 'line')
      f.setAttribute('y1', 50 * c + 25.5)
      f.setAttribute('x2', rm)
      f.setAttribute('y2', 50 * c + 25.5)
      f.setAttribute('stroke', Zl.Gi)
      f.setAttribute('stroke-width', 1)
      b.appendChild(f)
    }
    for (c = 0; c < qm; c++)
      (f = document.createElementNS(C.Ac, 'line')),
        f.setAttribute('x1', 50 * c + 25.5),
        f.setAttribute('x2', 50 * c + 25.5),
        f.setAttribute('y2', sm),
        f.setAttribute('stroke', Zl.Gi),
        f.setAttribute('stroke-width', 1),
        b.appendChild(f)
  }
  for (f = c = 0; f < pm; f++)
    for (var h = 0; h < qm; h++) {
      var k = a(h, f) + a(h, f - 1) + a(h + 1, f) + a(h, f + 1) + a(h - 1, f)
      um[k] ||
        (k =
          '00000' == k && 0.3 < Math.random()
            ? 'null0'
            : 'null' + Math.floor(1 + 4 * Math.random()))
      var l = um[k][0]
      k = um[k][1]
      var m = document.createElementNS(C.Ac, 'clipPath')
      m.setAttribute('id', 'tileClipPath' + c)
      e = document.createElementNS(C.Ac, 'rect')
      e.setAttribute('width', 50)
      e.setAttribute('height', 50)
      e.setAttribute('x', 50 * h)
      e.setAttribute('y', 50 * f)
      m.appendChild(e)
      b.appendChild(m)
      e = document.createElementNS(C.Ac, 'image')
      e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Zl.Hl)
      e.setAttribute('opacity', 1)
      e.setAttribute('height', 200)
      e.setAttribute('width', 250)
      e.setAttribute('clip-path', 'url(#tileClipPath' + c + ')')
      e.setAttribute('x', 50 * (h - l))
      e.setAttribute('y', 50 * (f - k))
      b.appendChild(e)
      c++
    }
  c = document.createElementNS(C.Ac, 'image')
  c.setAttribute('id', 'finish')
  c.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Zl.$i)
  c.setAttribute('height', 34)
  c.setAttribute('width', 20)
  b.appendChild(c)
  c = document.createElementNS(C.Ac, 'clipPath')
  c.setAttribute('id', 'pegmanClipPath')
  e = document.createElementNS(C.Ac, 'rect')
  e.setAttribute('id', 'clipRect')
  e.setAttribute('width', 49)
  e.setAttribute('height', 52)
  c.appendChild(e)
  b.appendChild(c)
  c = document.createElementNS(C.Ac, 'image')
  c.setAttribute('id', 'pegman')
  c.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Zl.Eg)
  c.setAttribute('height', 52)
  c.setAttribute('width', 1029)
  c.setAttribute('clip-path', 'url(#pegmanClipPath)')
  b.appendChild(c)
}

/*async function wm() {
  const mazeBody = document.querySelector('.mazeBody')

  fetch("https://maze-game-backend.herokuapp.com/api/mazes/205")
  .then((response) => {
      if (response.ok) {
      return response.json();
      }
      throw new Error("Ocorreu um erro, por favor tente mais tarde.");
  })
  .then((data) => {
      data = data.data
      //console.log(data)
      
      var a
      
      a = JSON.stringify(data.levels)
      console.log('levelData =',a)
      console.log('url_image =',data.url_image)
      Pl = a.length
      om = a[Q - 1]
      nm[0].background = data.url_image
      nm[0].Hl = 'maze/tiles.png'
      nm[0].Eg = 'maze/pegman.png'
      nm[0].$i = 'maze/marker.png'
      pm = om.length
      qm = om[0].length
      rm = 50 * qm
      sm = 50 * pm

      mazeBody.style.visibility  = 'visible'
  })
  .catch((error) => {
    alert(error.message)
    //window.location.assign('https://myblocklymaze.vercel.app/')
  });
}*/

function wm() {
  //var a = document.getElementById( "levelData" ).innerHTML
  
  const mazeBody = document.querySelector('.mazeBody')
  mazeBody.style.visibility  = 'visible'

  const urlSearchParams = new URLSearchParams(window.location.search)
  var a = urlSearchParams.get("levels")

  if(a === null){
    //console.log(a)
    alert('Acesse por My Blockly Maze.')
    window.location.assign('https://myblocklymaze.vercel.app/')
  }

  var url_image = urlSearchParams.get("url_image")

  //console.log('levelData =',a)
  a = JSON.parse(a)
  Pl = a.length
  om = a[Q - 1]
  nm[0].background = url_image
  nm[0].Hl = 'maze/tiles.png'
  nm[0].Eg = 'maze/pegman.png'
  nm[0].$i = 'maze/marker.png'
  pm = om.length
  qm = om[0].length
  rm = 50 * qm
  sm = 50 * pm
}
function xm(a) {
  var b = document.getElementById('pegmanMenu')
  'block' == b.style.display
    ? ym(a)
    : U.jd(a) ||
      ((a = document.getElementById('pegmanButton')),
      a.classList.add('buttonHover'),
      (b.style.top = a.offsetTop + a.offsetHeight + 'px'),
      (b.style.left = a.offsetLeft + 'px'),
      (b.style.display = 'block'),
      (Vl.On = C.$a(document.body, 'mousedown', null, ym)),
      (b = document.getElementById('dialogHelpSkins')) &&
        'dialogHiddenContent' != b.className &&
        T.qc(!1),
      (xm.Ux = !0))
}
function ym(a) {
  U.jd(a) ||
    ((document.getElementById('pegmanMenu').style.display = 'none'),
    document.getElementById('pegmanButton').classList.remove('buttonHover'),
    Vl.On && (C.wa(Vl.On), delete Vl.On))
}
function zm(a) {
  for (var b = 0; b < Z.length; b++) window.clearTimeout(Z[b])
  Z = []
  W = Wl.x
  X = Wl.y
  a
    ? ((Y = 2),
      Am(!1),
      Z.push(
        setTimeout(function () {
          V = 100
          Bm([W, X, 4 * Y - 4])
          Y++
        }, 5 * V)
      ))
    : ((Y = 1), Cm(W, X, 4 * Y))
  b = document.getElementById('finish')
  b.setAttribute('x', 50 * (Xl.x + 0.5) - b.getAttribute('width') / 2)
  b.setAttribute('y', 50 * (Xl.y + 0.6) - b.getAttribute('height'))
  b = document.getElementById('look')
  b.style.display = 'none'
  b.parentNode.appendChild(b)
  a = b.getElementsByTagName('path')
  b = 0
  for (var c; (c = a[b]); b++) c.setAttribute('stroke', Zl.wn)
}
function Dm(a) {
  if (
    !U.jd(a) &&
    (T.qc(!1), !(1 == Q && 1 < ud(P, !1).length && 1 != tm) || Rl(Q))
  ) {
    a = document.getElementById('runButton')
    var b = document.getElementById('resetButton')
    b.style.minWidth || (b.style.minWidth = a.offsetWidth + 'px')
    a.style.display = 'none'
    b.style.display = 'inline'
    zm(!1)
    Em()
  }
}
function Fm(a) {
  U.jd(a) ||
    ((document.getElementById('runButton').style.display = 'inline'),
    (document.getElementById('resetButton').style.display = 'none'),
    mj(null),
    zm(!1))
}
function Gm(a, b) {
  var c = function (e) {
    Hm(0, e)
  }
  a.setProperty(b, 'moveForward', a.createNativeFunction(c))
  c = function (e) {
    Hm(2, e)
  }
  a.setProperty(b, 'moveBackward', a.createNativeFunction(c))
  c = function (e) {
    Im(0, e)
  }
  a.setProperty(b, 'turnLeft', a.createNativeFunction(c))
  c = function (e) {
    Im(1, e)
  }
  a.setProperty(b, 'turnRight', a.createNativeFunction(c))
  c = function (e) {
    return Jm(0, e)
  }
  a.setProperty(b, 'isPathForward', a.createNativeFunction(c))
  c = function (e) {
    return Jm(1, e)
  }
  a.setProperty(b, 'isPathRight', a.createNativeFunction(c))
  c = function (e) {
    return Jm(2, e)
  }
  a.setProperty(b, 'isPathBackward', a.createNativeFunction(c))
  c = function (e) {
    return Jm(3, e)
  }
  a.setProperty(b, 'isPathLeft', a.createNativeFunction(c))
  a.setProperty(
    b,
    'notDone',
    a.createNativeFunction(function () {
      return W != Xl.x || X != Xl.y
    })
  )
}
function Em() {
  if ('Interpreter' in window) {
    Yl = []
    C.selected && C.selected.If()
    var a = Ak()
    tm = 0
    a = new Interpreter(a, Gm)
    try {
      for (var b = 1e4; a.step(); ) if (0 == b--) throw Infinity
      tm = W != Xl.x || X != Xl.y ? -1 : 1
    } catch (c) {
      Infinity === c ? (tm = 2) : !1 === c ? (tm = -2) : ((tm = -2), alert(c))
    }
    1 == tm ? ((V = 100), Yl.push(['finish', null])) : (V = 150)
    zm(!1)
    Z.push(setTimeout(Km, 100))
  } else setTimeout(Em, 250)
}
function Km() {
  var a = Yl.shift()
  if (a) {
    U.Qk(a[1])
    switch (a[0]) {
      case 'north':
        Bm([W, X - 1, 4 * Y])
        X--
        break
      case 'east':
        Bm([W + 1, X, 4 * Y])
        W++
        break
      case 'south':
        Bm([W, X + 1, 4 * Y])
        X++
        break
      case 'west':
        Bm([W - 1, X, 4 * Y])
        W--
        break
      case 'look_north':
        Lm(0)
        break
      case 'look_east':
        Lm(1)
        break
      case 'look_south':
        Lm(2)
        break
      case 'look_west':
        Lm(3)
        break
      case 'fail_forward':
        Mm(!0)
        break
      case 'fail_backward':
        Mm(!1)
        break
      case 'left':
        Bm([W, X, 4 * Y - 4])
        Y = Nm(Y - 1)
        break
      case 'right':
        Bm([W, X, 4 * Y + 4])
        Y = Nm(Y + 1)
        break
      case 'finish':
        Am(!0), U.Ew(), setTimeout(T.su, 1e3)
    }
    Z.push(setTimeout(Km, 5 * V))
  } else U.Qk(null)
}
function Om(a) {
  if (
    'dialogHiddenContent' != document.getElementById('dialogDone').className
  ) {
    var b = document.getElementById('pegSpin'),
      c = T.Iq(b),
      e = a.clientX - (c.x + c.width / 2 - window.pageXOffset)
    a = Math.atan((a.clientY - (c.y + c.height / 2 - window.pageYOffset)) / e)
    a = (a / Math.PI) * 180
    e = Math.round(((0 < e ? a + 90 : a + 270) / 360) * 16)
    16 == e && (e = 15)
    b.style.backgroundPosition = 49 * -e + 'px 0px'
  }
}
function Bm(a) {
  var b = [W, X, 4 * Y],
    c = [(a[0] - b[0]) / 4, (a[1] - b[1]) / 4, (a[2] - b[2]) / 4]
  Cm(b[0] + c[0], b[1] + c[1], Pm(b[2] + c[2]))
  Z.push(
    setTimeout(function () {
      Cm(b[0] + 2 * c[0], b[1] + 2 * c[1], Pm(b[2] + 2 * c[2]))
    }, V)
  )
  Z.push(
    setTimeout(function () {
      Cm(b[0] + 3 * c[0], b[1] + 3 * c[1], Pm(b[2] + 3 * c[2]))
    }, 2 * V)
  )
  Z.push(
    setTimeout(function () {
      Cm(a[0], a[1], Pm(a[2]))
    }, 3 * V)
  )
}
function Mm(a) {
  var b = 0,
    c = 0
  switch (Y) {
    case 0:
      c = -1
      break
    case 1:
      b = 1
      break
    case 2:
      c = 1
      break
    case 3:
      b = -1
  }
  a || ((b = -b), (c = -c))
  if (1 == Zl.hk) {
    b /= 4
    c /= 4
    var e = Pm(4 * Y)
    Cm(W + b, X + c, e)
    P.Cc.play('fail', 0.5)
    Z.push(
      setTimeout(function () {
        Cm(W, X, e)
      }, V)
    )
    Z.push(
      setTimeout(function () {
        Cm(W + b, X + c, e)
        P.Cc.play('fail', 0.5)
      }, 2 * V)
    )
    Z.push(
      setTimeout(function () {
        Cm(W, X, e)
      }, 3 * V)
    )
  } else {
    var f = 10 * (Math.random() - 0.5),
      h = (Math.random() - 0.5) / 2
    b += (Math.random() - 0.5) / 4
    c += (Math.random() - 0.5) / 4
    b /= 8
    c /= 8
    var k = 0
    3 == Zl.hk && (k = 0.01)
    Z.push(
      setTimeout(function () {
        P.Cc.play('fail', 0.5)
      }, 2 * V)
    )
    a = function (m) {
      return function () {
        Cm(W + b * m, X + c * m, Pm(4 * Y + h * m), f * m)
        c += k
      }
    }
    for (var l = 1; 100 > l; l++) Z.push(setTimeout(a(l), (V * l) / 2))
  }
}
function Am(a) {
  var b = Pm(4 * Y)
  Cm(W, X, 16)
  a && P.Cc.play('win', 0.5)
  V = 150
  Z.push(
    setTimeout(function () {
      Cm(W, X, 18)
    }, V)
  )
  Z.push(
    setTimeout(function () {
      Cm(W, X, 16)
    }, 2 * V)
  )
  Z.push(
    setTimeout(function () {
      Cm(W, X, b)
    }, 3 * V)
  )
}
function Cm(a, b, c, e) {
  var f = document.getElementById('pegman')
  f.setAttribute('x', 50 * a - 49 * c + 1)
  f.setAttribute('y', 50 * (b + 0.5) - 26 - 8)
  e
    ? f.setAttribute(
        'transform',
        'rotate(' + e + ', ' + (50 * a + 25) + ', ' + (50 * b + 25) + ')'
      )
    : f.setAttribute('transform', 'rotate(0, 0, 0)')
  b = document.getElementById('clipRect')
  b.setAttribute('x', 50 * a + 1)
  b.setAttribute('y', f.getAttribute('y'))
}
function Lm(a) {
  var b = W,
    c = X
  switch (a) {
    case 0:
      b += 0.5
      break
    case 1:
      b += 1
      c += 0.5
      break
    case 2:
      b += 0.5
      c += 1
      break
    case 3:
      c += 0.5
  }
  b *= 50
  c *= 50
  var e = 90 * a - 45
  a = document.getElementById('look')
  a.setAttribute(
    'transform',
    'translate(' + b + ', ' + c + ') rotate(' + e + ' 0 0) scale(.4)'
  )
  b = a.getElementsByTagName('path')
  a.style.display = 'inline'
  for (c = 0; (a = b[c]); c++) Qm(a, V * c)
}
function Qm(a, b) {
  Z.push(
    setTimeout(function () {
      a.style.display = 'inline'
      setTimeout(function () {
        a.style.display = 'none'
      }, 2 * V)
    }, b)
  )
}
function Nm(a) {
  a = Math.round(a) % 4
  0 > a && (a += 4)
  return a
}
function Pm(a) {
  a = Math.round(a) % 16
  0 > a && (a += 16)
  return a
}
function Hm(a, b) {
  if (!Jm(a, null))
    throw (Yl.push(['fail_' + (a ? 'backward' : 'forward'), b]), !1)
  switch (Nm(Y + a)) {
    case 0:
      X--
      var c = 'north'
      break
    case 1:
      W++
      c = 'east'
      break
    case 2:
      X++
      c = 'south'
      break
    case 3:
      W--, (c = 'west')
  }
  Yl.push([c, b])
}
function Im(a, b) {
  a ? (Y++, Yl.push(['right', b])) : (Y--, Yl.push(['left', b]))
  Y = Nm(Y)
}
function Jm(a, b) {
  switch (Nm(Y + a)) {
    case 0:
      var c = om[X - 1] && om[X - 1][W]
      var e = 'look_north'
      break
    case 1:
      c = om[X][W + 1]
      e = 'look_east'
      break
    case 2:
      c = om[X + 1] && om[X + 1][W]
      e = 'look_south'
      break
    case 3:
      ;(c = om[X][W - 1]), (e = 'look_west')
  }
  b && Yl.push([e, b])
  return 0 !== c && void 0 !== c
}
window.addEventListener('load', function () {
  function a() {
    l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + 'px'
    l.style.left = k ? '10px' : '590px'
    l.style.width = window.innerWidth - 700 + 'px'
  }
  function b(n) {
    const urlSearchParams = new URLSearchParams(window.location.search)
    var a = urlSearchParams.get("levels")
    var url_image = urlSearchParams.get("url_image")
    return function () {
      if (window.sessionStorage) {
        var p = C.u.Ll(P)
        p = C.u.Zb(p)
        window.sessionStorage.vn = p
      }
      window.location =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?lang=' +
        Ll +
        '&level=' +
        Q +
        '&skin=' +
        n +
        '&levels=' +
        a +
        '&url_image=' +
        url_image
    }
  }
  wm()
  document.body.innerHTML = km()
  U.Z()
  document.querySelector('#pegmanButton>img').style.backgroundImage =
    'url(' + Zl.Eg + ')'
  for (var c = document.getElementById('pegmanMenu'), e = 0; e < nm.length; e++)
    if (e != lm) {
      var f = document.createElement('div'),
        h = document.createElement('img')
      h.src = 'common/1x1.gif'
      h.style.backgroundImage = 'url(' + nm[e].Eg + ')'
      f.appendChild(h)
      c.appendChild(f)
      C.$a(f, 'mousedown', null, b(e))
    }
  C.$a(window, 'resize', null, ym)
  c = document.getElementById('pegmanButton')
  C.$a(c, 'mousedown', null, xm)
  document
    .getElementById('pegmanButtonArrow')
    .appendChild(document.createTextNode(gi))
  var k = -1 != Kl.indexOf(Ll),
    l = document.getElementById('blockly'),
    m = document.getElementById('visualization')
  window.addEventListener('scroll', function () {
    a(null)
    C.Jg(P)
  })
  window.addEventListener('resize', a)
  a(null)
  c = document.getElementById('toolbox')
  P = C.jf('blockly', {
    media: 'third-party/blockly/media/',
    maxBlocks: mm,
    rtl: k,
    toolbox: c,
    trashcan: !0,
    zoom: { startScale: 1 }
  })
  P.Cc.load(Zl.Ko, 'win')
  P.Cc.load(Zl.qm, 'fail')
  Fk(
    'moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft'
  )
  vm()
  U.Tv(
    '<xml>  <block movable="' +
      (1 != Q) +
      '" type="maze_moveForward" x="70" y="70"></block></xml>',
    !1
  )
  for (c = 0; c < pm; c++)
    for (e = 0; e < qm; e++)
      2 == om[c][e]
        ? (Wl = { x: e, y: c })
        : 3 == om[c][e] && (Xl = { x: e, y: c })
  zm(!0)
  P.jc(function () {
    var n = Ke(P),
      p = document.getElementById('capacity')
    if (Infinity == n) p.style.display = 'none'
    else {
      p.style.display = 'inline'
      p.innerHTML = ''
      n = Number(n)
      var t = document.createElement('span')
      t.className = 'capacityNumber'
      t.appendChild(document.createTextNode(n))
      n = (
        0 == n
          ? S('Maze_capacity0')
          : 1 == n
          ? S('Maze_capacity1')
          : S('Maze_capacity2')
      ).split(/%\d/)
      for (var r = 0; r < n.length; r++)
        p.appendChild(document.createTextNode(n[r])),
          r != n.length - 1 && p.appendChild(t.cloneNode(!0))
    }
  })
  document.body.addEventListener('mousemove', Om, !0)
  Ul('runButton', Dm)
  Ul('resetButton', Fm)
  1 == Q && ((C.Vb *= 2), (C.To = C.Vb))
  c = document.getElementById('dialogDoneButtons')
  e = document.createElement('img')
  e.id = 'pegSpin'
  e.src = 'common/1x1.gif'
  e.style.backgroundImage = 'url(' + Zl.Eg + ')'
  c.parentNode.insertBefore(e, c)
  setTimeout(U.Hv, 1)
  setTimeout(U.Iv, 1)
})

function resetLocalStorage () {
  const urlSearchParams = new URLSearchParams(window.location.search)
  var reset = urlSearchParams.get("reset")

  if (reset == 1) {
    localStorage.clear()
  }
}

const switchModal = () => {
  const modal = document.querySelector('.modal')
  const actualStyle = modal.style.display
  const videoYT = document.querySelector('.videoYT')
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    videoYT.autoplay = true;
    videoYT.load();
    videoYT.loop = true;
    modal.style.display = 'flex'
  }
}

const clickClose = () => {
  //switchModal()
  const videoYT = document.querySelector('.videoYT')
  const modal = document.querySelector('.modal')
  modal.style.display = 'none'

  //console.log(videoYT)
  //console.log(videoYT.src)
  videoYT.autoplay = false;
  videoYT.load();
  videoYT.loop = false;
}

window.onclick = function(event) {
  const modal = document.querySelector('.modal')
  const videoYT = document.querySelector('.videoYT')

  if (event.target == modal) {
    //switchModal()
    modal.style.display = 'none'
    videoYT.autoplay = false;
    videoYT.load();
    videoYT.loop = false;
  }
}
