/* Elfsight (c) elfsight.com */

! function e(t, i, n) {
    function o(a, s) {
        if (!i[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(a, !0);
                if (r) return r(a, !0);
                throw new Error("Cannot find module '" + a + "'")
            }
            var p = i[a] = {
                exports: {}
            };
            t[a][0].call(p.exports, function(e) {
                var i = t[a][1][e];
                return o(i ? i : e)
            }, p, p.exports, e, t, i, n)
        }
        return i[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
    return o
}({
    1: [function(e, t, i) {
        "use strict";
        ! function(e, n) {
            "function" == typeof define && define.amd ? define([], n) : "object" == typeof i ? t.exports = n() : e.Handlebars = e.Handlebars || n()
        }(this, function() {
            var e = function() {
                    function e(e) {
                        this.string = e
                    }
                    var t;
                    return e.prototype.toString = function() {
                        return "" + this.string
                    }, t = e
                }(),
                t = function(e) {
                    function t(e) {
                        return l[e]
                    }

                    function i(e) {
                        for (var t = 1; t < arguments.length; t++)
                            for (var i in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], i) && (e[i] = arguments[t][i]);
                        return e
                    }

                    function n(e) {
                        return e instanceof s ? e.toString() : null == e ? "" : e ? (e = "" + e, d.test(e) ? e.replace(p, t) : e) : e + ""
                    }

                    function o(e) {
                        return e || 0 === e ? f(e) && 0 === e.length ? !0 : !1 : !0
                    }

                    function r(e, t) {
                        return (e ? e + "." : "") + t
                    }
                    var a = {},
                        s = e,
                        l = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        },
                        p = /[&<>"'`]/g,
                        d = /[&<>"'`]/;
                    a.extend = i;
                    var u = Object.prototype.toString;
                    a.toString = u;
                    var c = function(e) {
                        return "function" == typeof e
                    };
                    c(/x/) && (c = function(e) {
                        return "function" == typeof e && "[object Function]" === u.call(e)
                    });
                    var c;
                    a.isFunction = c;
                    var f = Array.isArray || function(e) {
                        return e && "object" == typeof e ? "[object Array]" === u.call(e) : !1
                    };
                    return a.isArray = f, a.escapeExpression = n, a.isEmpty = o, a.appendContextPath = r, a
                }(e),
                i = function() {
                    function e(e, t) {
                        var n;
                        t && t.firstLine && (n = t.firstLine, e += " - " + n + ":" + t.firstColumn);
                        for (var o = Error.prototype.constructor.call(this, e), r = 0; r < i.length; r++) this[i[r]] = o[i[r]];
                        n && (this.lineNumber = n, this.column = t.firstColumn)
                    }
                    var t, i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                    return e.prototype = new Error, t = e
                }(),
                n = function(e, t) {
                    function i(e, t) {
                        this.helpers = e || {}, this.partials = t || {}, n(this)
                    }

                    function n(e) {
                        e.registerHelper("helperMissing", function() {
                            if (1 !== arguments.length) throw new a("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                        }), e.registerHelper("blockHelperMissing", function(t, i) {
                            var n = i.inverse,
                                o = i.fn;
                            if (t === !0) return o(this);
                            if (t === !1 || null == t) return n(this);
                            if (d(t)) return t.length > 0 ? (i.ids && (i.ids = [i.name]), e.helpers.each(t, i)) : n(this);
                            if (i.data && i.ids) {
                                var a = g(i.data);
                                a.contextPath = r.appendContextPath(i.data.contextPath, i.name), i = {
                                    data: a
                                }
                            }
                            return o(t, i)
                        }), e.registerHelper("each", function(e, t) {
                            if (!t) throw new a("Must pass iterator to #each");
                            var i, n, o = t.fn,
                                s = t.inverse,
                                l = 0,
                                p = "";
                            if (t.data && t.ids && (n = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), u(e) && (e = e.call(this)), t.data && (i = g(t.data)), e && "object" == typeof e)
                                if (d(e))
                                    for (var c = e.length; c > l; l++) i && (i.index = l, i.first = 0 === l, i.last = l === e.length - 1, n && (i.contextPath = n + l)), p += o(e[l], {
                                        data: i
                                    });
                                else
                                    for (var f in e) e.hasOwnProperty(f) && (i && (i.key = f, i.index = l, i.first = 0 === l, n && (i.contextPath = n + f)), p += o(e[f], {
                                        data: i
                                    }), l++);
                            return 0 === l && (p = s(this)), p
                        }), e.registerHelper("if", function(e, t) {
                            return u(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
                        }), e.registerHelper("unless", function(t, i) {
                            return e.helpers["if"].call(this, t, {
                                fn: i.inverse,
                                inverse: i.fn,
                                hash: i.hash
                            })
                        }), e.registerHelper("with", function(e, t) {
                            u(e) && (e = e.call(this));
                            var i = t.fn;
                            if (r.isEmpty(e)) return t.inverse(this);
                            if (t.data && t.ids) {
                                var n = g(t.data);
                                n.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                                    data: n
                                }
                            }
                            return i(e, t)
                        }), e.registerHelper("log", function(t, i) {
                            var n = i.data && null != i.data.level ? parseInt(i.data.level, 10) : 1;
                            e.log(n, t)
                        }), e.registerHelper("lookup", function(e, t) {
                            return e && e[t]
                        })
                    }
                    var o = {},
                        r = e,
                        a = t,
                        s = "2.0.0-beta.1";
                    o.VERSION = s;
                    var l = 6;
                    o.COMPILER_REVISION = l;
                    var p = {
                        1: "<= 1.0.rc.2",
                        2: "== 1.0.0-rc.3",
                        3: "== 1.0.0-rc.4",
                        4: "== 1.x.x",
                        5: "== 2.0.0-alpha.x",
                        6: ">= 2.0.0-beta.1"
                    };
                    o.REVISION_CHANGES = p;
                    var d = r.isArray,
                        u = r.isFunction,
                        c = r.toString,
                        f = "[object Object]";
                    o.HandlebarsEnvironment = i, i.prototype = {
                        constructor: i,
                        logger: h,
                        log: A,
                        registerHelper: function(e, t) {
                            if (c.call(e) === f) {
                                if (t) throw new a("Arg not supported with multiple helpers");
                                r.extend(this.helpers, e)
                            } else this.helpers[e] = t
                        },
                        unregisterHelper: function(e) {
                            delete this.helpers[e]
                        },
                        registerPartial: function(e, t) {
                            c.call(e) === f ? r.extend(this.partials, e) : this.partials[e] = t
                        },
                        unregisterPartial: function(e) {
                            delete this.partials[e]
                        }
                    };
                    var h = {
                        methodMap: {
                            0: "debug",
                            1: "info",
                            2: "warn",
                            3: "error"
                        },
                        DEBUG: 0,
                        INFO: 1,
                        WARN: 2,
                        ERROR: 3,
                        level: 3,
                        log: function(e, t) {
                            if (h.level <= e) {
                                var i = h.methodMap[e];
                                "undefined" != typeof console && console[i] && console[i].call(console, t)
                            }
                        }
                    };
                    o.logger = h;
                    var A = h.log;
                    o.log = A;
                    var g = function(e) {
                        var t = r.extend({}, e);
                        return t._parent = e, t
                    };
                    return o.createFrame = g, o
                }(t, i),
                o = function(e, t, i) {
                    function n(e) {
                        var t = e && e[0] || 1,
                            i = c;
                        if (t !== i) {
                            if (i > t) {
                                var n = f[i],
                                    o = f[t];
                                throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + o + ").")
                            }
                            throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                        }
                    }

                    function o(e, t) {
                        if (!t) throw new u("No environment passed to template");
                        if (!e || !e.main) throw new u("Unknown template object: " + typeof e);
                        t.VM.checkRevision(e.compiler);
                        var i = function(i, n, o, r, a, s, l, p, c) {
                                a && (r = d.extend({}, r, a));
                                var f = t.VM.invokePartial.call(this, i, o, r, s, l, p, c);
                                if (null == f && t.compile) {
                                    var h = {
                                        helpers: s,
                                        partials: l,
                                        data: p,
                                        depths: c
                                    };
                                    l[o] = t.compile(i, {
                                        data: void 0 !== p,
                                        compat: e.compat
                                    }, t), f = l[o](r, h)
                                }
                                if (null != f) {
                                    if (n) {
                                        for (var A = f.split("\n"), g = 0, m = A.length; m > g && (A[g] || g + 1 !== m); g++) A[g] = n + A[g];
                                        f = A.join("\n")
                                    }
                                    return f
                                }
                                throw new u("The partial " + o + " could not be compiled when running in runtime-only mode")
                            },
                            n = {
                                lookup: function(e, t) {
                                    for (var i = e.length, n = 0; i > n; n++)
                                        if (e[n] && null != e[n][t]) return e[n][t]
                                },
                                lambda: function(e, t) {
                                    return "function" == typeof e ? e.call(t) : e
                                },
                                escapeExpression: d.escapeExpression,
                                invokePartial: i,
                                fn: function(t) {
                                    return e[t]
                                },
                                programs: [],
                                program: function(e, t, i) {
                                    var n = this.programs[e],
                                        o = this.fn(e);
                                    return t || i ? n = r(this, e, o, t, i) : n || (n = this.programs[e] = r(this, e, o)), n
                                },
                                data: function(e, t) {
                                    for (; e && t--;) e = e._parent;
                                    return e
                                },
                                merge: function(e, t) {
                                    var i = e || t;
                                    return e && t && e !== t && (i = d.extend({}, t, e)), i
                                },
                                noop: t.VM.noop,
                                compilerInfo: e.compiler
                            },
                            o = function(t, i) {
                                i = i || {};
                                var r = i.data;
                                o._setup(i), !i.partial && e.useData && (r = l(t, r));
                                var a;
                                return e.useDepths && (a = i.depths ? [t].concat(i.depths) : [t]), e.main.call(n, t, n.helpers, n.partials, r, a)
                            };
                        return o.isTop = !0, o._setup = function(i) {
                            i.partial ? (n.helpers = i.helpers, n.partials = i.partials) : (n.helpers = n.merge(i.helpers, t.helpers), e.usePartial && (n.partials = n.merge(i.partials, t.partials)))
                        }, o._child = function(t, i, o) {
                            if (e.useDepths && !o) throw new u("must pass parent depths");
                            return r(n, t, e[t], i, o)
                        }, o
                    }

                    function r(e, t, i, n, o) {
                        var r = function(t, r) {
                            return r = r || {}, i.call(e, t, e.helpers, e.partials, r.data || n, o && [t].concat(o))
                        };
                        return r.program = t, r.depth = o ? o.length : 0, r
                    }

                    function a(e, t, i, n, o, r, a) {
                        var s = {
                            partial: !0,
                            helpers: n,
                            partials: o,
                            data: r,
                            depths: a
                        };
                        if (void 0 === e) throw new u("The partial " + t + " could not be found");
                        return e instanceof Function ? e(i, s) : void 0
                    }

                    function s() {
                        return ""
                    }

                    function l(e, t) {
                        return t && "root" in t || (t = t ? h(t) : {}, t.root = e), t
                    }
                    var p = {},
                        d = e,
                        u = t,
                        c = i.COMPILER_REVISION,
                        f = i.REVISION_CHANGES,
                        h = i.createFrame;
                    return p.checkRevision = n, p.template = o, p.program = r, p.invokePartial = a, p.noop = s, p
                }(t, i, n),
                r = function(e, t, i, n, o) {
                    var r, a = e,
                        s = t,
                        l = i,
                        p = n,
                        d = o,
                        u = function() {
                            var e = new a.HandlebarsEnvironment;
                            return p.extend(e, a), e.SafeString = s, e.Exception = l, e.Utils = p, e.escapeExpression = p.escapeExpression, e.VM = d, e.template = function(t) {
                                return d.template(t, e)
                            }, e
                        },
                        c = u();
                    return c.create = u, c["default"] = c, r = c
                }(n, e, i, t, o);
            return r
        })
    }, {}],
    2: [function(e, t, i) {
        "use strict";
        ! function(e, i) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return i(e)
            } : i(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            function i(e) {
                var t = !!e && "length" in e && e.length,
                    i = re.type(e);
                return "function" === i || re.isWindow(e) ? !1 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function n(e, t, i) {
                if (re.isFunction(t)) return re.grep(e, function(e, n) {
                    return !!t.call(e, n, e) !== i
                });
                if (t.nodeType) return re.grep(e, function(e) {
                    return e === t !== i
                });
                if ("string" == typeof t) {
                    if (Ae.test(t)) return re.filter(t, e, i);
                    t = re.filter(t, e)
                }
                return re.grep(e, function(e) {
                    return K.call(t, e) > -1 !== i
                })
            }

            function o(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function r(e) {
                var t = {};
                return re.each(e.match(be) || [], function(e, i) {
                    t[i] = !0
                }), t
            }

            function a() {
                $.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), re.ready()
            }

            function s() {
                this.expando = re.expando + s.uid++
            }

            function l(e, t, i) {
                var n;
                if (void 0 === i && 1 === e.nodeType)
                    if (n = "data-" + t.replace(De, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                        try {
                            i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ee.test(i) ? re.parseJSON(i) : i
                        } catch (o) {}
                        Te.set(e, t, i)
                    } else i = void 0;
                return i
            }

            function p(e, t, i, n) {
                var o, r = 1,
                    a = 20,
                    s = n ? function() {
                        return n.cur()
                    } : function() {
                        return re.css(e, t, "")
                    },
                    l = s(),
                    p = i && i[3] || (re.cssNumber[t] ? "" : "px"),
                    d = (re.cssNumber[t] || "px" !== p && +l) && Se.exec(re.css(e, t));
                if (d && d[3] !== p) {
                    p = p || d[3], i = i || [], d = +l || 1;
                    do r = r || ".5", d /= r, re.style(e, t, d + p); while (r !== (r = s() / l) && 1 !== r && --a)
                }
                return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = p, n.start = d, n.end = o)), o
            }

            function d(e, t) {
                var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], i) : i
            }

            function u(e, t) {
                for (var i = 0, n = e.length; n > i; i++) Me.set(e[i], "globalEval", !t || Me.get(t[i], "globalEval"))
            }

            function c(e, t, i, n, o) {
                for (var r, a, s, l, p, c, f = t.createDocumentFragment(), h = [], A = 0, g = e.length; g > A; A++)
                    if (r = e[A], r || 0 === r)
                        if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                        else if (He.test(r)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Ne.exec(r) || ["", ""])[1].toLowerCase(), l = Pe[s] || Pe._default, a.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
                    re.merge(h, a.childNodes), a = f.firstChild, a.textContent = ""
                } else h.push(t.createTextNode(r));
                for (f.textContent = "", A = 0; r = h[A++];)
                    if (n && re.inArray(r, n) > -1) o && o.push(r);
                    else if (p = re.contains(r.ownerDocument, r), a = d(f.appendChild(r), "script"), p && u(a), i)
                    for (c = 0; r = a[c++];) Le.test(r.type || "") && i.push(r);
                return f
            }

            function f() {
                return !0
            }

            function h() {
                return !1
            }

            function A() {
                try {
                    return $.activeElement
                } catch (e) {}
            }

            function g(e, t, i, n, o, r) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof i && (n = n || i, i = void 0);
                    for (s in t) g(e, s, i, n, t[s], r);
                    return e
                }
                if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = h;
                else if (!o) return this;
                return 1 === r && (a = o, o = function(e) {
                    return re().off(e), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = re.guid++)), e.each(function() {
                    re.event.add(this, t, o, n, i)
                })
            }

            function m(e, t) {
                return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
            }

            function v(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function y(e) {
                var t = Ye.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function w(e, t) {
                var i, n, o, r, a, s, l, p;
                if (1 === t.nodeType) {
                    if (Me.hasData(e) && (r = Me.access(e), a = Me.set(t, r), p = r.events)) {
                        delete a.handle, a.events = {};
                        for (o in p)
                            for (i = 0, n = p[o].length; n > i; i++) re.event.add(t, o, p[o][i])
                    }
                    Te.hasData(e) && (s = Te.access(e), l = re.extend({}, s), Te.set(t, l))
                }
            }

            function b(e, t) {
                var i = t.nodeName.toLowerCase();
                "input" === i && Be.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
            }

            function x(e, t, i, n) {
                t = Z.apply([], t);
                var o, r, a, s, l, p, u = 0,
                    f = e.length,
                    h = f - 1,
                    A = t[0],
                    g = re.isFunction(A);
                if (g || f > 1 && "string" == typeof A && !ne.checkClone && qe.test(A)) return e.each(function(o) {
                    var r = e.eq(o);
                    g && (t[0] = A.call(this, o, r.html())), x(r, t, i, n)
                });
                if (f && (o = c(t, e[0].ownerDocument, !1, e, n), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
                    for (a = re.map(d(o, "script"), v), s = a.length; f > u; u++) l = o, u !== h && (l = re.clone(l, !0, !0), s && re.merge(a, d(l, "script"))), i.call(e[u], l, u);
                    if (s)
                        for (p = a[a.length - 1].ownerDocument, re.map(a, y), u = 0; s > u; u++) l = a[u], Le.test(l.type || "") && !Me.access(l, "globalEval") && re.contains(p, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Ve, "")))
                }
                return e
            }

            function C(e, t, i) {
                for (var n, o = t ? re.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || re.cleanData(d(n)), n.parentNode && (i && re.contains(n.ownerDocument, n) && u(d(n, "script")), n.parentNode.removeChild(n));
                return e
            }

            function k(e, t) {
                var i = re(t.createElement(e)).appendTo(t.body),
                    n = re.css(i[0], "display");
                return i.detach(), n
            }

            function M(e) {
                var t = $,
                    i = _e[e];
                return i || (i = k(e, t), "none" !== i && i || (Ue = (Ue || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), i = k(e, t), Ue.detach()), _e[e] = i), i
            }

            function T(e, t, i) {
                var n, o, r, a, s = e.style;
                return i = i || Xe(e), i && (a = i.getPropertyValue(t) || i[t], "" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), !ne.pixelMarginRight() && $e.test(a) && We.test(t) && (n = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = i.width, s.width = n, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
            }

            function E(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function D(e) {
                if (e in nt) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--;)
                    if (e = it[i] + t, e in nt) return e
            }

            function I(e, t, i) {
                var n = Se.exec(t);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
            }

            function S(e, t, i, n, o) {
                for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === i && (a += re.css(e, i + ze[r], !0, o)), n ? ("content" === i && (a -= re.css(e, "padding" + ze[r], !0, o)), "margin" !== i && (a -= re.css(e, "border" + ze[r] + "Width", !0, o))) : (a += re.css(e, "padding" + ze[r], !0, o), "padding" !== i && (a += re.css(e, "border" + ze[r] + "Width", !0, o)));
                return a
            }

            function z(t, i, n) {
                var o = !0,
                    r = "width" === i ? t.offsetWidth : t.offsetHeight,
                    a = Xe(t),
                    s = "border-box" === re.css(t, "boxSizing", !1, a);
                if ($.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[i])), 0 >= r || null == r) {
                    if (r = T(t, i, a), (0 > r || null == r) && (r = t.style[i]), $e.test(r)) return r;
                    o = s && (ne.boxSizingReliable() || r === t.style[i]), r = parseFloat(r) || 0
                }
                return r + S(t, i, n || (s ? "border" : "content"), o, a) + "px"
            }

            function j(e, t) {
                for (var i, n, o, r = [], a = 0, s = e.length; s > a; a++) n = e[a], n.style && (r[a] = Me.get(n, "olddisplay"), i = n.style.display, t ? (r[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && je(n) && (r[a] = Me.access(n, "olddisplay", M(n.nodeName)))) : (o = je(n), "none" === i && o || Me.set(n, "olddisplay", o ? i : re.css(n, "display"))));
                for (a = 0; s > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[a] || "" : "none"));
                return e
            }

            function B(e, t, i, n, o) {
                return new B.prototype.init(e, t, i, n, o)
            }

            function N() {
                return e.setTimeout(function() {
                    ot = void 0
                }), ot = re.now()
            }

            function L(e, t) {
                var i, n = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = ze[n], o["margin" + i] = o["padding" + i] = e;
                return t && (o.opacity = o.width = e), o
            }

            function P(e, t, i) {
                for (var n, o = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), r = 0, a = o.length; a > r; r++)
                    if (n = o[r].call(i, t, e)) return n
            }

            function H(e, t, i) {
                var n, o, r, a, s, l, p, d, u = this,
                    c = {},
                    f = e.style,
                    h = e.nodeType && je(e),
                    A = Me.get(e, "fxshow");
                i.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || l()
                }), s.unqueued++, u.always(function() {
                    u.always(function() {
                        s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], p = re.css(e, "display"), d = "none" === p ? Me.get(e, "olddisplay") || M(e.nodeName) : p, "inline" === d && "none" === re.css(e, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function() {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                }));
                for (n in t)
                    if (o = t[n], at.exec(o)) {
                        if (delete t[n], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                            if ("show" !== o || !A || void 0 === A[n]) continue;
                            h = !0
                        }
                        c[n] = A && A[n] || re.style(e, n)
                    } else p = void 0;
                if (re.isEmptyObject(c)) "inline" === ("none" === p ? M(e.nodeName) : p) && (f.display = p);
                else {
                    A ? "hidden" in A && (h = A.hidden) : A = Me.access(e, "fxshow", {}), r && (A.hidden = !h), h ? re(e).show() : u.done(function() {
                        re(e).hide()
                    }), u.done(function() {
                        var t;
                        Me.remove(e, "fxshow");
                        for (t in c) re.style(e, t, c[t])
                    });
                    for (n in c) a = P(h ? A[n] : 0, n, u), n in A || (A[n] = a.start, h && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
                }
            }

            function O(e, t) {
                var i, n, o, r, a;
                for (i in e)
                    if (n = re.camelCase(i), o = t[n], r = e[i], re.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), a = re.cssHooks[n], a && "expand" in a) {
                        r = a.expand(r), delete e[n];
                        for (i in r) i in e || (e[i] = r[i], t[i] = o)
                    } else t[n] = o
            }

            function Q(e, t, i) {
                var n, o, r = 0,
                    a = Q.prefilters.length,
                    s = re.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (o) return !1;
                        for (var t = ot || N(), i = Math.max(0, p.startTime + p.duration - t), n = i / p.duration || 0, r = 1 - n, a = 0, l = p.tweens.length; l > a; a++) p.tweens[a].run(r);
                        return s.notifyWith(e, [p, r, i]), 1 > r && l ? i : (s.resolveWith(e, [p]), !1)
                    },
                    p = s.promise({
                        elem: e,
                        props: re.extend({}, t),
                        opts: re.extend(!0, {
                            specialEasing: {},
                            easing: re.easing._default
                        }, i),
                        originalProperties: t,
                        originalOptions: i,
                        startTime: ot || N(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function(t, i) {
                            var n = re.Tween(e, p.opts, t, i, p.opts.specialEasing[t] || p.opts.easing);
                            return p.tweens.push(n), n
                        },
                        stop: function(t) {
                            var i = 0,
                                n = t ? p.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n > i; i++) p.tweens[i].run(1);
                            return t ? (s.notifyWith(e, [p, 1, 0]), s.resolveWith(e, [p, t])) : s.rejectWith(e, [p, t]), this
                        }
                    }),
                    d = p.props;
                for (O(d, p.opts.specialEasing); a > r; r++)
                    if (n = Q.prefilters[r].call(p, e, d, p.opts)) return re.isFunction(n.stop) && (re._queueHooks(p.elem, p.opts.queue).stop = re.proxy(n.stop, n)), n;
                return re.map(d, P, p), re.isFunction(p.opts.start) && p.opts.start.call(e, p), re.fx.timer(re.extend(l, {
                    elem: e,
                    anim: p,
                    queue: p.opts.queue
                })), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
            }

            function G(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function F(e) {
                return function(t, i) {
                    "string" != typeof t && (i = t, t = "*");
                    var n, o = 0,
                        r = t.toLowerCase().match(be) || [];
                    if (re.isFunction(i))
                        for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
                }
            }

            function R(e, t, i, n) {
                function o(s) {
                    var l;
                    return r[s] = !0, re.each(e[s] || [], function(e, s) {
                        var p = s(t, i, n);
                        return "string" != typeof p || a || r[p] ? a ? !(l = p) : void 0 : (t.dataTypes.unshift(p), o(p), !1)
                    }), l
                }
                var r = {},
                    a = e === Mt;
                return o(t.dataTypes[0]) || !r["*"] && o("*")
            }

            function q(e, t) {
                var i, n, o = re.ajaxSettings.flatOptions || {};
                for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
                return n && re.extend(!0, e, n), e
            }

            function Y(e, t, i) {
                for (var n, o, r, a, s = e.contents, l = e.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)
                    for (o in s)
                        if (s[o] && s[o].test(n)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in i) r = l[0];
                else {
                    for (o in i) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            r = o;
                            break
                        }
                        a || (a = o)
                    }
                    r = r || a
                }
                return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
            }

            function V(e, t, i, n) {
                var o, r, a, s, l, p = {},
                    d = e.dataTypes.slice();
                if (d[1])
                    for (a in e.converters) p[a.toLowerCase()] = e.converters[a];
                for (r = d.shift(); r;)
                    if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                        if ("*" === r) r = l;
                        else if ("*" !== l && l !== r) {
                    if (a = p[l + " " + r] || p["* " + r], !a)
                        for (o in p)
                            if (s = o.split(" "), s[1] === r && (a = p[l + " " + s[0]] || p["* " + s[0]])) {
                                a === !0 ? a = p[o] : p[o] !== !0 && (r = s[0], d.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch (u) {
                            return {
                                state: "parsererror",
                                error: a ? u : "No conversion from " + l + " to " + r
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function U(e, t, i, n) {
                var o;
                if (re.isArray(t)) re.each(t, function(t, o) {
                    i || It.test(e) ? n(e, o) : U(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
                });
                else if (i || "object" !== re.type(t)) n(e, t);
                else
                    for (o in t) U(e + "[" + o + "]", t[o], i, n)
            }

            function _(e) {
                return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var W = [],
                $ = e.document,
                X = W.slice,
                Z = W.concat,
                J = W.push,
                K = W.indexOf,
                ee = {},
                te = ee.toString,
                ie = ee.hasOwnProperty,
                ne = {},
                oe = "2.2.0",
                re = function(e, t) {
                    return new re.fn.init(e, t)
                },
                ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                se = /^-ms-/,
                le = /-([\da-z])/gi,
                pe = function(e, t) {
                    return t.toUpperCase()
                };
            re.fn = re.prototype = {
                jquery: oe,
                constructor: re,
                selector: "",
                length: 0,
                toArray: function() {
                    return X.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
                },
                pushStack: function(e) {
                    var t = re.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e) {
                    return re.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(re.map(this, function(t, i) {
                        return e.call(t, i, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(X.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        i = +e + (0 > e ? t : 0);
                    return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: J,
                sort: W.sort,
                splice: W.splice
            }, re.extend = re.fn.extend = function() {
                var e, t, i, n, o, r, a = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    p = !1;
                for ("boolean" == typeof a && (p = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) i = a[t], n = e[t], a !== n && (p && n && (re.isPlainObject(n) || (o = re.isArray(n))) ? (o ? (o = !1, r = i && re.isArray(i) ? i : []) : r = i && re.isPlainObject(i) ? i : {}, a[t] = re.extend(p, r, n)) : void 0 !== n && (a[t] = n));
                return a
            }, re.extend({
                expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === re.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(e) {
                    return "object" !== re.type(e) || e.nodeType || re.isWindow(e) ? !1 : e.constructor && !ie.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    var t, i = eval;
                    e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = $.createElement("script"), t.text = e, $.head.appendChild(t).parentNode.removeChild(t)) : i(e))
                },
                camelCase: function(e) {
                    return e.replace(se, "ms-").replace(le, pe)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, o = 0;
                    if (i(e))
                        for (n = e.length; n > o && t.call(e[o], o, e[o]) !== !1; o++);
                    else
                        for (o in e)
                            if (t.call(e[o], o, e[o]) === !1) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ae, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (i(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : J.call(n, e)), n
                },
                inArray: function(e, t, i) {
                    return null == t ? -1 : K.call(t, e, i)
                },
                merge: function(e, t) {
                    for (var i = +t.length, n = 0, o = e.length; i > n; n++) e[o++] = t[n];
                    return e.length = o, e
                },
                grep: function(e, t, i) {
                    for (var n, o = [], r = 0, a = e.length, s = !i; a > r; r++) n = !t(e[r], r), n !== s && o.push(e[r]);
                    return o
                },
                map: function(e, t, n) {
                    var o, r, a = 0,
                        s = [];
                    if (i(e))
                        for (o = e.length; o > a; a++) r = t(e[a], a, n), null != r && s.push(r);
                    else
                        for (a in e) r = t(e[a], a, n), null != r && s.push(r);
                    return Z.apply([], s)
                },
                guid: 1,
                proxy: function(e, t) {
                    var i, n, o;
                    return "string" == typeof t && (i = e[t], t = e, e = i), re.isFunction(e) ? (n = X.call(arguments, 2), o = function() {
                        return e.apply(t || this, n.concat(X.call(arguments)))
                    }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
                },
                now: Date.now,
                support: ne
            }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = W[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                ee["[object " + t + "]"] = t.toLowerCase()
            });
            var de = function(e) {
                function t(e, t, i, n) {
                    var o, r, a, s, l, p, u, f, h = t && t.ownerDocument,
                        A = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== A && 9 !== A && 11 !== A) return i;
                    if (!n && ((t ? t.ownerDocument || t : G) !== j && z(t), t = t || j, N)) {
                        if (11 !== A && (p = me.exec(e)))
                            if (o = p[1]) {
                                if (9 === A) {
                                    if (!(a = t.getElementById(o))) return i;
                                    if (a.id === o) return i.push(a), i
                                } else if (h && (a = h.getElementById(o)) && O(t, a) && a.id === o) return i.push(a), i
                            } else {
                                if (p[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                                if ((o = p[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(i, t.getElementsByClassName(o)), i
                            }
                        if (b.qsa && !V[e + " "] && (!L || !L.test(e))) {
                            if (1 !== A) h = t, f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = Q), u = M(e), r = u.length, l = ce.test(s) ? "#" + s : "[id='" + s + "']"; r--;) u[r] = l + " " + c(u[r]);
                                f = u.join(","), h = ve.test(e) && d(t.parentNode) || t
                            }
                            if (f) try {
                                return J.apply(i, h.querySelectorAll(f)), i
                            } catch (g) {} finally {
                                s === Q && t.removeAttribute("id")
                            }
                        }
                    }
                    return E(e.replace(se, "$1"), t, i, n)
                }

                function i() {
                    function e(i, n) {
                        return t.push(i + " ") > x.cacheLength && delete e[t.shift()], e[i + " "] = n
                    }
                    var t = [];
                    return e
                }

                function n(e) {
                    return e[Q] = !0, e
                }

                function o(e) {
                    var t = j.createElement("div");
                    try {
                        return !!e(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var i = e.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = t
                }

                function a(e, t) {
                    var i = t && e,
                        n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || _) - (~e.sourceIndex || _);
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return "input" === i && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && t.type === e
                    }
                }

                function p(e) {
                    return n(function(t) {
                        return t = +t, n(function(i, n) {
                            for (var o, r = e([], i.length, t), a = r.length; a--;) i[o = r[a]] && (i[o] = !(n[o] = i[o]))
                        })
                    })
                }

                function d(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function u() {}

                function c(e) {
                    for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
                    return n
                }

                function f(e, t, i) {
                    var n = t.dir,
                        o = i && "parentNode" === n,
                        r = R++;
                    return t.first ? function(t, i, r) {
                        for (; t = t[n];)
                            if (1 === t.nodeType || o) return e(t, i, r)
                    } : function(t, i, a) {
                        var s, l, p, d = [F, r];
                        if (a) {
                            for (; t = t[n];)
                                if ((1 === t.nodeType || o) && e(t, i, a)) return !0
                        } else
                            for (; t = t[n];)
                                if (1 === t.nodeType || o) {
                                    if (p = t[Q] || (t[Q] = {}), l = p[t.uniqueID] || (p[t.uniqueID] = {}), (s = l[n]) && s[0] === F && s[1] === r) return d[2] = s[2];
                                    if (l[n] = d, d[2] = e(t, i, a)) return !0
                                }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function(t, i, n) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, i, n)) return !1;
                        return !0
                    } : e[0]
                }

                function A(e, i, n) {
                    for (var o = 0, r = i.length; r > o; o++) t(e, i[o], n);
                    return n
                }

                function g(e, t, i, n, o) {
                    for (var r, a = [], s = 0, l = e.length, p = null != t; l > s; s++)(r = e[s]) && (!i || i(r, n, o)) && (a.push(r), p && t.push(s));
                    return a
                }

                function m(e, t, i, o, r, a) {
                    return o && !o[Q] && (o = m(o)), r && !r[Q] && (r = m(r, a)), n(function(n, a, s, l) {
                        var p, d, u, c = [],
                            f = [],
                            h = a.length,
                            m = n || A(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !n && t ? m : g(m, c, e, s, l),
                            y = i ? r || (n ? e : h || o) ? [] : a : v;
                        if (i && i(v, y, s, l), o)
                            for (p = g(y, f), o(p, [], s, l), d = p.length; d--;)(u = p[d]) && (y[f[d]] = !(v[f[d]] = u));
                        if (n) {
                            if (r || e) {
                                if (r) {
                                    for (p = [], d = y.length; d--;)(u = y[d]) && p.push(v[d] = u);
                                    r(null, y = [], p, l)
                                }
                                for (d = y.length; d--;)(u = y[d]) && (p = r ? ee(n, u) : c[d]) > -1 && (n[p] = !(a[p] = u))
                            }
                        } else y = g(y === a ? y.splice(h, y.length) : y), r ? r(null, a, y, l) : J.apply(a, y)
                    })
                }

                function v(e) {
                    for (var t, i, n, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                            return e === t
                        }, a, !0), p = f(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), d = [function(e, i, n) {
                            var o = !r && (n || i !== D) || ((t = i).nodeType ? l(e, i, n) : p(e, i, n));
                            return t = null, o
                        }]; o > s; s++)
                        if (i = x.relative[e[s].type]) d = [f(h(d), i)];
                        else {
                            if (i = x.filter[e[s].type].apply(null, e[s].matches), i[Q]) {
                                for (n = ++s; o > n && !x.relative[e[n].type]; n++);
                                return m(s > 1 && h(d), s > 1 && c(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), i, n > s && v(e.slice(s, n)), o > n && v(e = e.slice(n)), o > n && c(e))
                            }
                            d.push(i)
                        }
                    return h(d)
                }

                function y(e, i) {
                    var o = i.length > 0,
                        r = e.length > 0,
                        a = function(n, a, s, l, p) {
                            var d, u, c, f = 0,
                                h = "0",
                                A = n && [],
                                m = [],
                                v = D,
                                y = n || r && x.find.TAG("*", p),
                                w = F += null == v ? 1 : Math.random() || .1,
                                b = y.length;
                            for (p && (D = a === j || a || p); h !== b && null != (d = y[h]); h++) {
                                if (r && d) {
                                    for (u = 0, a || d.ownerDocument === j || (z(d), s = !N); c = e[u++];)
                                        if (c(d, a || j, s)) {
                                            l.push(d);
                                            break
                                        }
                                    p && (F = w)
                                }
                                o && ((d = !c && d) && f--, n && A.push(d))
                            }
                            if (f += h, o && h !== f) {
                                for (u = 0; c = i[u++];) c(A, m, a, s);
                                if (n) {
                                    if (f > 0)
                                        for (; h--;) A[h] || m[h] || (m[h] = X.call(l));
                                    m = g(m)
                                }
                                J.apply(l, m), p && !n && m.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                            }
                            return p && (F = w, D = v), A
                        };
                    return o ? n(a) : a
                }
                var w, b, x, C, k, M, T, E, D, I, S, z, j, B, N, L, P, H, O, Q = "sizzle" + 1 * new Date,
                    G = e.document,
                    F = 0,
                    R = 0,
                    q = i(),
                    Y = i(),
                    V = i(),
                    U = function(e, t) {
                        return e === t && (S = !0), 0
                    },
                    _ = 1 << 31,
                    W = {}.hasOwnProperty,
                    $ = [],
                    X = $.pop,
                    Z = $.push,
                    J = $.push,
                    K = $.slice,
                    ee = function(e, t) {
                        for (var i = 0, n = e.length; n > i; i++)
                            if (e[i] === t) return i;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
                    re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    ae = new RegExp(ie + "+", "g"),
                    se = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    le = new RegExp("^" + ie + "*," + ie + "*"),
                    pe = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                    ue = new RegExp(re),
                    ce = new RegExp("^" + ne + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne + "|[*])"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    Ae = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    ye = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                    be = function(e, t, i) {
                        var n = "0x" + t - 65536;
                        return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    },
                    xe = function() {
                        z()
                    };
                try {
                    J.apply($ = K.call(G.childNodes), G.childNodes), $[G.childNodes.length].nodeType
                } catch (Ce) {
                    J = {
                        apply: $.length ? function(e, t) {
                            Z.apply(e, K.call(t))
                        } : function(e, t) {
                            for (var i = e.length, n = 0; e[i++] = t[n++];);
                            e.length = i - 1
                        }
                    }
                }
                b = t.support = {}, k = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, z = t.setDocument = function(e) {
                    var t, i, n = e ? e.ownerDocument || e : G;
                    return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, B = j.documentElement, N = !k(j), (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)), b.attributes = o(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), b.getElementsByTagName = o(function(e) {
                        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                    }), b.getElementsByClassName = ge.test(j.getElementsByClassName), b.getById = o(function(e) {
                        return B.appendChild(e).id = Q, !j.getElementsByName || !j.getElementsByName(Q).length
                    }), b.getById ? (x.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && N) {
                            var i = t.getElementById(e);
                            return i ? [i] : []
                        }
                    }, x.filter.ID = function(e) {
                        var t = e.replace(we, be);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(e) {
                        var t = e.replace(we, be);
                        return function(e) {
                            var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }), x.find.TAG = b.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var i, n = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, x.find.CLASS = b.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
                    }, P = [], L = [], (b.qsa = ge.test(j.querySelectorAll)) && (o(function(e) {
                        B.appendChild(e).innerHTML = "<a id='" + Q + "'></a><select id='" + Q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ie + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || L.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + Q + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + Q + "+*").length || L.push(".#.+[+~]")
                    }), o(function(e) {
                        var t = j.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (b.matchesSelector = ge.test(H = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && o(function(e) {
                        b.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), P.push("!=", re)
                    }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), t = ge.test(B.compareDocumentPosition), O = t || ge.test(B.contains) ? function(e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e,
                            n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function(e, t) {
                        if (e === t) return S = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === j || e.ownerDocument === G && O(G, e) ? -1 : t === j || t.ownerDocument === G && O(G, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return S = !0, 0;
                        var i, n = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            s = [e],
                            l = [t];
                        if (!o || !r) return e === j ? -1 : t === j ? 1 : o ? -1 : r ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                        if (o === r) return a(e, t);
                        for (i = e; i = i.parentNode;) s.unshift(i);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (; s[n] === l[n];) n++;
                        return n ? a(s[n], l[n]) : s[n] === G ? -1 : l[n] === G ? 1 : 0
                    }, j) : j
                }, t.matches = function(e, i) {
                    return t(e, null, null, i)
                }, t.matchesSelector = function(e, i) {
                    if ((e.ownerDocument || e) !== j && z(e), i = i.replace(de, "='$1']"), b.matchesSelector && N && !V[i + " "] && (!P || !P.test(i)) && (!L || !L.test(i))) try {
                        var n = H.call(e, i);
                        if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (o) {}
                    return t(i, j, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== j && z(e), O(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== j && z(e);
                    var i = x.attrHandle[t.toLowerCase()],
                        n = i && W.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !N) : void 0;
                    return void 0 !== n ? n : b.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, i = [],
                        n = 0,
                        o = 0;
                    if (S = !b.detectDuplicates, I = !b.sortStable && e.slice(0), e.sort(U), S) {
                        for (; t = e[o++];) t === e[o] && (n = i.push(o));
                        for (; n--;) e.splice(i[n], 1)
                    }
                    return I = null, e
                }, C = t.getText = function(e) {
                    var t, i = "",
                        n = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) i += C(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[n++];) i += C(t);
                    return i
                }, x = t.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, i = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ue.test(i) && (t = M(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(we, be).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = q[e + " "];
                            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && q(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, i, n) {
                            return function(o) {
                                var r = t.attr(o, e);
                                return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, i, n, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === n && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, i, l) {
                                var p, d, u, c, f, h, A = r !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    v = !l && !s,
                                    y = !1;
                                if (g) {
                                    if (r) {
                                        for (; A;) {
                                            for (c = t; c = c[A];)
                                                if (s ? c.nodeName.toLowerCase() === m : 1 === c.nodeType) return !1;
                                            h = A = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                        for (c = g, u = c[Q] || (c[Q] = {}), d = u[c.uniqueID] || (u[c.uniqueID] = {}), p = d[e] || [], f = p[0] === F && p[1], y = f && p[2], c = f && g.childNodes[f]; c = ++f && c && c[A] || (y = f = 0) || h.pop();)
                                            if (1 === c.nodeType && ++y && c === t) {
                                                d[e] = [F, f, y];
                                                break
                                            }
                                    } else if (v && (c = t, u = c[Q] || (c[Q] = {}), d = u[c.uniqueID] || (u[c.uniqueID] = {}), p = d[e] || [], f = p[0] === F && p[1], y = f), y === !1)
                                        for (;
                                            (c = ++f && c && c[A] || (y = f = 0) || h.pop()) && ((s ? c.nodeName.toLowerCase() !== m : 1 !== c.nodeType) || !++y || (v && (u = c[Q] || (c[Q] = {}), d = u[c.uniqueID] || (u[c.uniqueID] = {}), d[e] = [F, y]), c !== t)););
                                    return y -= o, y === n || y % n === 0 && y / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, i) {
                            var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return r[Q] ? r(i) : r.length > 1 ? (o = [e, e, "", i], x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                                for (var n, o = r(e, i), a = o.length; a--;) n = ee(e, o[a]), e[n] = !(t[n] = o[a])
                            }) : function(e) {
                                return r(e, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: n(function(e) {
                            var t = [],
                                i = [],
                                o = T(e.replace(se, "$1"));
                            return o[Q] ? n(function(e, t, i, n) {
                                for (var r, a = o(e, null, n, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                            }) : function(e, n, r) {
                                return t[0] = e, o(t, null, r, i), t[0] = null, !i.pop()
                            }
                        }),
                        has: n(function(e) {
                            return function(i) {
                                return t(e, i).length > 0
                            }
                        }),
                        contains: n(function(e) {
                            return e = e.replace(we, be),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: n(function(e) {
                            return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                                function(t) {
                                    var i;
                                    do
                                        if (i = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var i = e.location && e.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === B
                        },
                        focus: function(e) {
                            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !x.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Ae.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: p(function() {
                            return [0]
                        }),
                        last: p(function(e, t) {
                            return [t - 1]
                        }),
                        eq: p(function(e, t, i) {
                            return [0 > i ? i + t : i]
                        }),
                        even: p(function(e, t) {
                            for (var i = 0; t > i; i += 2) e.push(i);
                            return e
                        }),
                        odd: p(function(e, t) {
                            for (var i = 1; t > i; i += 2) e.push(i);
                            return e
                        }),
                        lt: p(function(e, t, i) {
                            for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                            return e
                        }),
                        gt: p(function(e, t, i) {
                            for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                            return e
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[w] = s(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[w] = l(w);
                return u.prototype = x.filters = x.pseudos, x.setFilters = new u, M = t.tokenize = function(e, i) {
                    var n, o, r, a, s, l, p, d = Y[e + " "];
                    if (d) return i ? 0 : d.slice(0);
                    for (s = e, l = [], p = x.preFilter; s;) {
                        (!n || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = pe.exec(s)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(se, " ")
                        }), s = s.slice(n.length));
                        for (a in x.filter) !(o = fe[a].exec(s)) || p[a] && !(o = p[a](o)) || (n = o.shift(), r.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return i ? s.length : s ? t.error(e) : Y(e, l).slice(0)
                }, T = t.compile = function(e, t) {
                    var i, n = [],
                        o = [],
                        r = V[e + " "];
                    if (!r) {
                        for (t || (t = M(e)), i = t.length; i--;) r = v(t[i]), r[Q] ? n.push(r) : o.push(r);
                        r = V(e, y(o, n)), r.selector = e
                    }
                    return r
                }, E = t.select = function(e, t, i, n) {
                    var o, r, a, s, l, p = "function" == typeof e && e,
                        u = !n && M(e = p.selector || e);
                    if (i = i || [], 1 === u.length) {
                        if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && b.getById && 9 === t.nodeType && N && x.relative[r[1].type]) {
                            if (t = (x.find.ID(a.matches[0].replace(we, be), t) || [])[0], !t) return i;
                            p && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                            if ((l = x.find[s]) && (n = l(a.matches[0].replace(we, be), ve.test(r[0].type) && d(t.parentNode) || t))) {
                                if (r.splice(o, 1), e = n.length && c(r), !e) return J.apply(i, n), i;
                                break
                            }
                    }
                    return (p || T(e, u))(n, t, !N, i, !t || ve.test(e) && d(t.parentNode) || t), i
                }, b.sortStable = Q.split("").sort(U).join("") === Q, b.detectDuplicates = !!S, z(), b.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(j.createElement("div"))
                }), o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(e, t, i) {
                    return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), b.attributes && o(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || r("value", function(e, t, i) {
                    return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || r(te, function(e, t, i) {
                    var n;
                    return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }), t
            }(e);
            re.find = de, re.expr = de.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = de.uniqueSort, re.text = de.getText, re.isXMLDoc = de.isXML, re.contains = de.contains;
            var ue = function(e, t, i) {
                    for (var n = [], o = void 0 !== i;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && re(e).is(i)) break;
                            n.push(e)
                        }
                    return n
                },
                ce = function(e, t) {
                    for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
                    return i
                },
                fe = re.expr.match.needsContext,
                he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                Ae = /^.[^:#\[\.,]*$/;
            re.filter = function(e, t, i) {
                var n = t[0];
                return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? re.find.matchesSelector(n, e) ? [n] : [] : re.find.matches(e, re.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, re.fn.extend({
                find: function(e) {
                    var t, i = this.length,
                        n = [],
                        o = this;
                    if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (re.contains(o[t], this)) return !0
                    }));
                    for (t = 0; i > t; t++) re.find(e, o[t], n);
                    return n = this.pushStack(i > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                },
                filter: function(e) {
                    return this.pushStack(n(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(n(this, e || [], !0))
                },
                is: function(e) {
                    return !!n(this, "string" == typeof e && fe.test(e) ? re(e) : e || [], !1).length
                }
            });
            var ge, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                ve = re.fn.init = function(e, t, i) {
                    var n, o;
                    if (!e) return this;
                    if (i = i || ge, "string" == typeof e) {
                        if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : $, !0)), he.test(n[1]) && re.isPlainObject(t))
                                for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        return o = $.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = $, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
                };
            ve.prototype = re.fn, ge = re($);
            var ye = /^(?:parents|prev(?:Until|All))/,
                we = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            re.fn.extend({
                has: function(e) {
                    var t = re(e, this),
                        i = t.length;
                    return this.filter(function() {
                        for (var e = 0; i > e; e++)
                            if (re.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    for (var i, n = 0, o = this.length, r = [], a = fe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > n; n++)
                        for (i = this[n]; i && i !== t; i = i.parentNode)
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, e))) {
                                r.push(i);
                                break
                            }
                    return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? K.call(re(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), re.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return ue(e, "parentNode")
                },
                parentsUntil: function(e, t, i) {
                    return ue(e, "parentNode", i)
                },
                next: function(e) {
                    return o(e, "nextSibling")
                },
                prev: function(e) {
                    return o(e, "previousSibling")
                },
                nextAll: function(e) {
                    return ue(e, "nextSibling")
                },
                prevAll: function(e) {
                    return ue(e, "previousSibling")
                },
                nextUntil: function(e, t, i) {
                    return ue(e, "nextSibling", i)
                },
                prevUntil: function(e, t, i) {
                    return ue(e, "previousSibling", i)
                },
                siblings: function(e) {
                    return ce((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return ce(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || re.merge([], e.childNodes)
                }
            }, function(e, t) {
                re.fn[e] = function(i, n) {
                    var o = re.map(this, t, i);
                    return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = re.filter(n, o)), this.length > 1 && (we[e] || re.uniqueSort(o), ye.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var be = /\S+/g;
            re.Callbacks = function(e) {
                e = "string" == typeof e ? r(e) : re.extend({}, e);
                var t, i, n, o, a = [],
                    s = [],
                    l = -1,
                    p = function() {
                        for (o = e.once, n = t = !0; s.length; l = -1)
                            for (i = s.shift(); ++l < a.length;) a[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = a.length, i = !1);
                        e.memory || (i = !1), t = !1, o && (a = i ? [] : "")
                    },
                    d = {
                        add: function() {
                            return a && (i && !t && (l = a.length - 1, s.push(i)), function n(t) {
                                re.each(t, function(t, i) {
                                    re.isFunction(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== re.type(i) && n(i)
                                })
                            }(arguments), i && !t && p()), this
                        },
                        remove: function() {
                            return re.each(arguments, function(e, t) {
                                for (var i;
                                    (i = re.inArray(t, a, i)) > -1;) a.splice(i, 1), l >= i && l--
                            }), this
                        },
                        has: function(e) {
                            return e ? re.inArray(e, a) > -1 : a.length > 0
                        },
                        empty: function() {
                            return a && (a = []), this
                        },
                        disable: function() {
                            return o = s = [], a = i = "", this
                        },
                        disabled: function() {
                            return !a
                        },
                        lock: function() {
                            return o = s = [], i || (a = i = ""), this
                        },
                        locked: function() {
                            return !!o
                        },
                        fireWith: function(e, i) {
                            return o || (i = i || [], i = [e, i.slice ? i.slice() : i], s.push(i), t || p()), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return d
            }, re.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", re.Callbacks("memory")]
                        ],
                        i = "pending",
                        n = {
                            state: function() {
                                return i
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return re.Deferred(function(i) {
                                    re.each(t, function(t, r) {
                                        var a = re.isFunction(e[t]) && e[t];
                                        o[r[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && re.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? re.extend(e, n) : n
                            }
                        },
                        o = {};
                    return n.pipe = n.then, re.each(t, function(e, r) {
                        var a = r[2],
                            s = r[3];
                        n[r[1]] = a.add, s && a.add(function() {
                            i = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                            return o[r[0] + "With"](this === o ? n : this, arguments), this
                        }, o[r[0] + "With"] = a.fireWith
                    }), n.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t, i, n, o = 0,
                        r = X.call(arguments),
                        a = r.length,
                        s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                        l = 1 === s ? e : re.Deferred(),
                        p = function(e, i, n) {
                            return function(o) {
                                i[e] = this, n[e] = arguments.length > 1 ? X.call(arguments) : o, n === t ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), i = new Array(a), n = new Array(a); a > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(p(o, i, t)).done(p(o, n, r)).fail(l.reject) : --s;
                    return s || l.resolveWith(n, r), l.promise()
                }
            });
            var xe;
            re.fn.ready = function(e) {
                return re.ready.promise().done(e), this
            }, re.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? re.readyWait++ : re.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (xe.resolveWith($, [re]), re.fn.triggerHandler && (re($).triggerHandler("ready"), re($).off("ready"))))
                }
            }), re.ready.promise = function(t) {
                return xe || (xe = re.Deferred(), "complete" === $.readyState || "loading" !== $.readyState && !$.documentElement.doScroll ? e.setTimeout(re.ready) : ($.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), xe.promise(t)
            }, re.ready.promise();
            var Ce = function(e, t, i, n, o, r, a) {
                    var s = 0,
                        l = e.length,
                        p = null == i;
                    if ("object" === re.type(i)) {
                        o = !0;
                        for (s in i) Ce(e, t, s, i[s], !0, r, a)
                    } else if (void 0 !== n && (o = !0, re.isFunction(n) || (a = !0), p && (a ? (t.call(e, n), t = null) : (p = t, t = function(e, t, i) {
                            return p.call(re(e), i)
                        })), t))
                        for (; l > s; s++) t(e[s], i, a ? n : n.call(e[s], s, t(e[s], i)));
                    return o ? e : p ? t.call(e) : l ? t(e[0], i) : r
                },
                ke = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            s.uid = 1, s.prototype = {
                register: function(e, t) {
                    var i = t || {};
                    return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                        value: i,
                        writable: !0,
                        configurable: !0
                    }), e[this.expando]
                },
                cache: function(e) {
                    if (!ke(e)) return {};
                    var t = e[this.expando];
                    return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, i) {
                    var n, o = this.cache(e);
                    if ("string" == typeof t) o[t] = i;
                    else
                        for (n in t) o[n] = t[n];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                },
                access: function(e, t, i) {
                    var n;
                    return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, re.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
                },
                remove: function(e, t) {
                    var i, n, o, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 === t) this.register(e);
                        else {
                            re.isArray(t) ? n = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? n = [t, o] : (n = o, n = n in r ? [n] : n.match(be) || [])), i = n.length;
                            for (; i--;) delete r[n[i]]
                        }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !re.isEmptyObject(t)
                }
            };
            var Me = new s,
                Te = new s,
                Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                De = /[A-Z]/g;
            re.extend({
                hasData: function(e) {
                    return Te.hasData(e) || Me.hasData(e)
                },
                data: function(e, t, i) {
                    return Te.access(e, t, i)
                },
                removeData: function(e, t) {
                    Te.remove(e, t)
                },
                _data: function(e, t, i) {
                    return Me.access(e, t, i)
                },
                _removeData: function(e, t) {
                    Me.remove(e, t)
                }
            }), re.fn.extend({
                data: function(e, t) {
                    var i, n, o, r = this[0],
                        a = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Te.get(r), 1 === r.nodeType && !Me.get(r, "hasDataAttrs"))) {
                            for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(r, n, o[n])));
                            Me.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        Te.set(this, e)
                    }) : Ce(this, function(t) {
                        var i, n;
                        if (r && void 0 === t) {
                            if (i = Te.get(r, e) || Te.get(r, e.replace(De, "-$&").toLowerCase()), void 0 !== i) return i;
                            if (n = re.camelCase(e), i = Te.get(r, n), void 0 !== i) return i;
                            if (i = l(r, n, void 0), void 0 !== i) return i
                        } else n = re.camelCase(e), this.each(function() {
                            var i = Te.get(this, n);
                            Te.set(this, n, t), e.indexOf("-") > -1 && void 0 !== i && Te.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Te.remove(this, e)
                    })
                }
            }), re.extend({
                queue: function(e, t, i) {
                    var n;
                    return e ? (t = (t || "fx") + "queue", n = Me.get(e, t), i && (!n || re.isArray(i) ? n = Me.access(e, t, re.makeArray(i)) : n.push(i)), n || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var i = re.queue(e, t),
                        n = i.length,
                        o = i.shift(),
                        r = re._queueHooks(e, t),
                        a = function() {
                            re.dequeue(e, t)
                        };
                    "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !n && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var i = t + "queueHooks";
                    return Me.get(e, i) || Me.access(e, i, {
                        empty: re.Callbacks("once memory").add(function() {
                            Me.remove(e, [t + "queue", i])
                        })
                    })
                }
            }), re.fn.extend({
                queue: function(e, t) {
                    var i = 2;
                    return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var i = re.queue(this, e, t);
                        re._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && re.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        re.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var i, n = 1,
                        o = re.Deferred(),
                        r = this,
                        a = this.length,
                        s = function() {
                            --n || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) i = Me.get(r[a], e + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
                    return s(), o.promise(t)
                }
            });
            var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Se = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
                ze = ["Top", "Right", "Bottom", "Left"],
                je = function(e, t) {
                    return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
                },
                Be = /^(?:checkbox|radio)$/i,
                Ne = /<([\w:-]+)/,
                Le = /^$|\/(?:java|ecma)script/i,
                Pe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
            var He = /<|&#?\w+;/;
            ! function() {
                var e = $.createDocumentFragment(),
                    t = e.appendChild($.createElement("div")),
                    i = $.createElement("input");
                i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Oe = /^key/,
                Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ge = /^([^.]*)(?:\.(.+)|)/;
            re.event = {
                global: {},
                add: function(e, t, i, n, o) {
                    var r, a, s, l, p, d, u, c, f, h, A, g = Me.get(e);
                    if (g)
                        for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = re.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                                return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(be) || [""], p = t.length; p--;) s = Ge.exec(t[p]) || [], f = A = s[1], h = (s[2] || "").split(".").sort(), f && (u = re.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = re.event.special[f] || {}, d = re.extend({
                            type: f,
                            origType: A,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && re.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, r), (c = l[f]) || (c = l[f] = [], c.delegateCount = 0, u.setup && u.setup.call(e, n, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? c.splice(c.delegateCount++, 0, d) : c.push(d), re.event.global[f] = !0)
                },
                remove: function(e, t, i, n, o) {
                    var r, a, s, l, p, d, u, c, f, h, A, g = Me.hasData(e) && Me.get(e);
                    if (g && (l = g.events)) {
                        for (t = (t || "").match(be) || [""], p = t.length; p--;)
                            if (s = Ge.exec(t[p]) || [], f = A = s[1], h = (s[2] || "").split(".").sort(), f) {
                                for (u = re.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, c = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = c.length; r--;) d = c[r], !o && A !== d.origType || i && i.guid !== d.guid || s && !s.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (c.splice(r, 1), d.selector && c.delegateCount--, u.remove && u.remove.call(e, d));
                                a && !c.length && (u.teardown && u.teardown.call(e, h, g.handle) !== !1 || re.removeEvent(e, f, g.handle), delete l[f])
                            } else
                                for (f in l) re.event.remove(e, f + t[p], i, n, !0);
                        re.isEmptyObject(l) && Me.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    e = re.event.fix(e);
                    var t, i, n, o, r, a = [],
                        s = X.call(arguments),
                        l = (Me.get(this, "events") || {})[e.type] || [],
                        p = re.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !p.preDispatch || p.preDispatch.call(this, e) !== !1) {
                        for (a = re.event.handlers.call(this, e, l), t = 0;
                            (o = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, i = 0;
                                (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return p.postDispatch && p.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var i, n, o, r, a = [],
                        s = t.delegateCount,
                        l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (n = [], i = 0; s > i; i++) r = t[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), n[o] && n.push(r);
                                n.length && a.push({
                                    elem: l,
                                    handlers: n
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var i, n, o, r = t.button;
                        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || $, n = i.documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[re.expando]) return e;
                    var t, i, n, o = e.type,
                        r = e,
                        a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = Qe.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(r), t = n.length; t--;) i = n[t], e[i] = r[i];
                    return e.target || (e.target = $), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== A() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === A() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return re.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, re.removeEvent = function(e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i)
            }, re.Event = function(e, t) {
                return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
            }, re.Event.prototype = {
                constructor: re.Event,
                isDefaultPrevented: h,
                isPropagationStopped: h,
                isImmediatePropagationStopped: h,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = f, e && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = f, e && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, re.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                re.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var i, n = this,
                            o = e.relatedTarget,
                            r = e.handleObj;
                        return (!o || o !== n && !re.contains(n, o)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
                    }
                }
            }), re.fn.extend({
                on: function(e, t, i, n) {
                    return g(this, e, t, i, n)
                },
                one: function(e, t, i, n) {
                    return g(this, e, t, i, n, 1)
                },
                off: function(e, t, i) {
                    var n, o;
                    if (e && e.preventDefault && e.handleObj) return n = e.handleObj, re(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = h), this.each(function() {
                        re.event.remove(this, e, i, t)
                    })
                }
            });
            var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                Re = /<script|<style|<link/i,
                qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ye = /^true\/(.*)/,
                Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            re.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Fe, "<$1></$2>")
                },
                clone: function(e, t, i) {
                    var n, o, r, a, s = e.cloneNode(!0),
                        l = re.contains(e.ownerDocument, e);
                    if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                        for (a = d(s), r = d(e), n = 0, o = r.length; o > n; n++) b(r[n], a[n]);
                    if (t)
                        if (i)
                            for (r = r || d(e), a = a || d(s), n = 0, o = r.length; o > n; n++) w(r[n], a[n]);
                        else w(e, s);
                    return a = d(s, "script"), a.length > 0 && u(a, !l && d(e, "script")), s
                },
                cleanData: function(e) {
                    for (var t, i, n, o = re.event.special, r = 0; void 0 !== (i = e[r]); r++)
                        if (ke(i)) {
                            if (t = i[Me.expando]) {
                                if (t.events)
                                    for (n in t.events) o[n] ? re.event.remove(i, n) : re.removeEvent(i, n, t.handle);
                                i[Me.expando] = void 0
                            }
                            i[Te.expando] && (i[Te.expando] = void 0)
                        }
                }
            }), re.fn.extend({
                domManip: x,
                detach: function(e) {
                    return C(this, e, !0)
                },
                remove: function(e) {
                    return C(this, e)
                },
                text: function(e) {
                    return Ce(this, function(e) {
                        return void 0 === e ? re.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return x(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = m(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return x(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = m(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return x(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return x(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(d(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return re.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Ce(this, function(e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Re.test(e) && !Pe[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = re.htmlPrefilter(e);
                            try {
                                for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (re.cleanData(d(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (o) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return x(this, arguments, function(t) {
                        var i = this.parentNode;
                        re.inArray(this, e) < 0 && (re.cleanData(d(this)), i && i.replaceChild(t, this))
                    }, e)
                }
            }), re.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                re.fn[e] = function(e) {
                    for (var i, n = [], o = re(e), r = o.length - 1, a = 0; r >= a; a++) i = a === r ? this : this.clone(!0), re(o[a])[t](i), J.apply(n, i.get());
                    return this.pushStack(n)
                }
            });
            var Ue, _e = {
                    HTML: "block",
                    BODY: "block"
                },
                We = /^margin/,
                $e = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
                Xe = function(t) {
                    var i = t.ownerDocument.defaultView;
                    return i.opener || (i = e), i.getComputedStyle(t)
                },
                Ze = function(e, t, i, n) {
                    var o, r, a = {};
                    for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                    o = i.apply(e, n || []);
                    for (r in t) e.style[r] = a[r];
                    return o
                },
                Je = $.documentElement;
            ! function() {
                function t() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(a);
                    var t = e.getComputedStyle(s);
                    i = "1%" !== t.top, r = "2px" === t.marginLeft,
                        n = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Je.removeChild(a)
                }
                var i, n, o, r, a = $.createElement("div"),
                    s = $.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), re.extend(ne, {
                    pixelPosition: function() {
                        return t(), i
                    },
                    boxSizingReliable: function() {
                        return null == n && t(), n
                    },
                    pixelMarginRight: function() {
                        return null == n && t(), o
                    },
                    reliableMarginLeft: function() {
                        return null == n && t(), r
                    },
                    reliableMarginRight: function() {
                        var t, i = s.appendChild($.createElement("div"));
                        return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", Je.appendChild(a), t = !parseFloat(e.getComputedStyle(i).marginRight), Je.removeChild(a), s.removeChild(i), t
                    }
                }))
            }();
            var Ke = /^(none|table(?!-c[ea]).+)/,
                et = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                tt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                it = ["Webkit", "O", "Moz", "ms"],
                nt = $.createElement("div").style;
            re.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var i = T(e, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(e, t, i, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, a, s = re.camelCase(t),
                            l = e.style;
                        return t = re.cssProps[s] || (re.cssProps[s] = D(s) || s), a = re.cssHooks[t] || re.cssHooks[s], void 0 === i ? a && "get" in a && void 0 !== (o = a.get(e, !1, n)) ? o : l[t] : (r = typeof i, "string" === r && (o = Se.exec(i)) && o[1] && (i = p(e, t, o), r = "number"), null != i && i === i && ("number" === r && (i += o && o[3] || (re.cssNumber[s] ? "" : "px")), ne.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l[t] = i)), void 0)
                    }
                },
                css: function(e, t, i, n) {
                    var o, r, a, s = re.camelCase(t);
                    return t = re.cssProps[s] || (re.cssProps[s] = D(s) || s), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, i)), void 0 === o && (o = T(e, t, n)), "normal" === o && t in tt && (o = tt[t]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
                }
            }), re.each(["height", "width"], function(e, t) {
                re.cssHooks[t] = {
                    get: function(e, i, n) {
                        return i ? Ke.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ze(e, et, function() {
                            return z(e, t, n)
                        }) : z(e, t, n) : void 0
                    },
                    set: function(e, i, n) {
                        var o, r = n && Xe(e),
                            a = n && S(e, t, n, "border-box" === re.css(e, "boxSizing", !1, r), r);
                        return a && (o = Se.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = re.css(e, t)), I(e, i, a)
                    }
                }
            }), re.cssHooks.marginLeft = E(ne.reliableMarginLeft, function(e, t) {
                return t ? (parseFloat(T(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px" : void 0
            }), re.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) {
                return t ? Ze(e, {
                    display: "inline-block"
                }, T, [e, "marginRight"]) : void 0
            }), re.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                re.cssHooks[e + t] = {
                    expand: function(i) {
                        for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + ze[n] + t] = r[n] || r[n - 2] || r[0];
                        return o
                    }
                }, We.test(e) || (re.cssHooks[e + t].set = I)
            }), re.fn.extend({
                css: function(e, t) {
                    return Ce(this, function(e, t, i) {
                        var n, o, r = {},
                            a = 0;
                        if (re.isArray(t)) {
                            for (n = Xe(e), o = t.length; o > a; a++) r[t[a]] = re.css(e, t[a], !1, n);
                            return r
                        }
                        return void 0 !== i ? re.style(e, t, i) : re.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return j(this, !0)
                },
                hide: function() {
                    return j(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        je(this) ? re(this).show() : re(this).hide()
                    })
                }
            }), re.Tween = B, B.prototype = {
                constructor: B,
                init: function(e, t, i, n, o, r) {
                    this.elem = e, this.prop = i, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (re.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var e = B.propHooks[this.prop];
                    return e && e.get ? e.get(this) : B.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, i = B.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : B.propHooks._default.set(this), this
                }
            }, B.prototype.init.prototype = B.prototype, B.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, re.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, re.fx = B.prototype.init, re.fx.step = {};
            var ot, rt, at = /^(?:toggle|show|hide)$/,
                st = /queueHooks$/;
            re.Animation = re.extend(Q, {
                    tweeners: {
                        "*": [function(e, t) {
                            var i = this.createTween(e, t);
                            return p(i.elem, e, Se.exec(t), i), i
                        }]
                    },
                    tweener: function(e, t) {
                        re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(be);
                        for (var i, n = 0, o = e.length; o > n; n++) i = e[n], Q.tweeners[i] = Q.tweeners[i] || [], Q.tweeners[i].unshift(t)
                    },
                    prefilters: [H],
                    prefilter: function(e, t) {
                        t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
                    }
                }), re.speed = function(e, t, i) {
                    var n = e && "object" == typeof e ? re.extend({}, e) : {
                        complete: i || !i && t || re.isFunction(e) && e,
                        duration: e,
                        easing: i && t || t && !re.isFunction(t) && t
                    };
                    return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                        re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
                    }, n
                }, re.fn.extend({
                    fadeTo: function(e, t, i, n) {
                        return this.filter(je).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, i, n)
                    },
                    animate: function(e, t, i, n) {
                        var o = re.isEmptyObject(e),
                            r = re.speed(t, i, n),
                            a = function() {
                                var t = Q(this, re.extend({}, e), r);
                                (o || Me.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                    },
                    stop: function(e, t, i) {
                        var n = function(e) {
                            var t = e.stop;
                            delete e.stop, t(i)
                        };
                        return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                r = re.timers,
                                a = Me.get(this);
                            if (o) a[o] && a[o].stop && n(a[o]);
                            else
                                for (o in a) a[o] && a[o].stop && st.test(o) && n(a[o]);
                            for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
                            (t || !i) && re.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, i = Me.get(this),
                                n = i[e + "queue"],
                                o = i[e + "queueHooks"],
                                r = re.timers,
                                a = n ? n.length : 0;
                            for (i.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                            for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete i.finish
                        })
                    }
                }), re.each(["toggle", "show", "hide"], function(e, t) {
                    var i = re.fn[t];
                    re.fn[t] = function(e, n, o) {
                        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(L(t, !0), e, n, o)
                    }
                }), re.each({
                    slideDown: L("show"),
                    slideUp: L("hide"),
                    slideToggle: L("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    re.fn[e] = function(e, i, n) {
                        return this.animate(t, e, i, n)
                    }
                }), re.timers = [], re.fx.tick = function() {
                    var e, t = 0,
                        i = re.timers;
                    for (ot = re.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
                    i.length || re.fx.stop(), ot = void 0
                }, re.fx.timer = function(e) {
                    re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
                }, re.fx.interval = 13, re.fx.start = function() {
                    rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
                }, re.fx.stop = function() {
                    e.clearInterval(rt), rt = null
                }, re.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, re.fn.delay = function(t, i) {
                    return t = re.fx ? re.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                        var o = e.setTimeout(i, t);
                        n.stop = function() {
                            e.clearTimeout(o)
                        }
                    })
                },
                function() {
                    var e = $.createElement("input"),
                        t = $.createElement("select"),
                        i = t.appendChild($.createElement("option"));
                    e.type = "checkbox", ne.checkOn = "" !== e.value, ne.optSelected = i.selected, t.disabled = !0, ne.optDisabled = !i.disabled, e = $.createElement("input"), e.value = "t", e.type = "radio", ne.radioValue = "t" === e.value
                }();
            var lt, pt = re.expr.attrHandle;
            re.fn.extend({
                attr: function(e, t) {
                    return Ce(this, re.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        re.removeAttr(this, e)
                    })
                }
            }), re.extend({
                attr: function(e, t, i) {
                    var n, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? re.prop(e, t, i) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)), void 0 !== i ? null === i ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = re.find.attr(e, t), null == n ? void 0 : n))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                                var i = e.value;
                                return e.setAttribute("type", t), i && (e.value = i), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var i, n, o = 0,
                        r = t && t.match(be);
                    if (r && 1 === e.nodeType)
                        for (; i = r[o++];) n = re.propFix[i] || i, re.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
                }
            }), lt = {
                set: function(e, t, i) {
                    return t === !1 ? re.removeAttr(e, i) : e.setAttribute(i, i), i
                }
            }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var i = pt[t] || re.find.attr;
                pt[t] = function(e, t, n) {
                    var o, r;
                    return n || (r = pt[t], pt[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, pt[t] = r), o
                }
            });
            var dt = /^(?:input|select|textarea|button)$/i,
                ut = /^(?:a|area)$/i;
            re.fn.extend({
                prop: function(e, t) {
                    return Ce(this, re.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[re.propFix[e] || e]
                    })
                }
            }), re.extend({
                prop: function(e, t, i) {
                    var n, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = re.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : dt.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), ne.optSelected || (re.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                re.propFix[this.toLowerCase()] = this
            });
            var ct = /[\t\r\n\f]/g;
            re.fn.extend({
                addClass: function(e) {
                    var t, i, n, o, r, a, s, l = 0;
                    if (re.isFunction(e)) return this.each(function(t) {
                        re(this).addClass(e.call(this, t, G(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(be) || []; i = this[l++];)
                            if (o = G(i), n = 1 === i.nodeType && (" " + o + " ").replace(ct, " ")) {
                                for (a = 0; r = t[a++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                s = re.trim(n), o !== s && i.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, i, n, o, r, a, s, l = 0;
                    if (re.isFunction(e)) return this.each(function(t) {
                        re(this).removeClass(e.call(this, t, G(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(be) || []; i = this[l++];)
                            if (o = G(i), n = 1 === i.nodeType && (" " + o + " ").replace(ct, " ")) {
                                for (a = 0; r = t[a++];)
                                    for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                                s = re.trim(n), o !== s && i.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var i = typeof e;
                    return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(i) {
                        re(this).toggleClass(e.call(this, i, G(this), t), t)
                    }) : this.each(function() {
                        var t, n, o, r;
                        if ("string" === i)
                            for (n = 0, o = re(this), r = e.match(be) || []; t = r[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else(void 0 === e || "boolean" === i) && (t = G(this), t && Me.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Me.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, i, n = 0;
                    for (t = " " + e + " "; i = this[n++];)
                        if (1 === i.nodeType && (" " + G(i) + " ").replace(ct, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var ft = /\r/g;
            re.fn.extend({
                val: function(e) {
                    var t, i, n, o = this[0]; {
                        if (arguments.length) return n = re.isFunction(e), this.each(function(i) {
                            var o;
                            1 === this.nodeType && (o = n ? e.call(this, i, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(e) {
                                return null == e ? "" : e + ""
                            })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                        });
                        if (o) return t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(ft, "") : null == i ? "" : i)
                    }
                }
            }), re.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            return re.trim(e.value)
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : n.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                                if (i = n[l], (i.selected || l === o) && (ne.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !re.nodeName(i.parentNode, "optgroup"))) {
                                    if (t = re(i).val(), r) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var i, n, o = e.options, r = re.makeArray(t), a = o.length; a--;) n = o[a], (n.selected = re.inArray(re.valHooks.option.get(n), r) > -1) && (i = !0);
                            return i || (e.selectedIndex = -1), r
                        }
                    }
                }
            }), re.each(["radio", "checkbox"], function() {
                re.valHooks[this] = {
                    set: function(e, t) {
                        return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
                    }
                }, ne.checkOn || (re.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var ht = /^(?:focusinfocus|focusoutblur)$/;
            re.extend(re.event, {
                trigger: function(t, i, n, o) {
                    var r, a, s, l, p, d, u, c = [n || $],
                        f = ie.call(t, "type") ? t.type : t,
                        h = ie.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = n = n || $, 3 !== n.nodeType && 8 !== n.nodeType && !ht.test(f + re.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), p = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : re.makeArray(i, [t]), u = re.event.special[f] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                        if (!o && !u.noBubble && !re.isWindow(n)) {
                            for (l = u.delegateType || f, ht.test(l + f) || (a = a.parentNode); a; a = a.parentNode) c.push(a), s = a;
                            s === (n.ownerDocument || $) && c.push(s.defaultView || s.parentWindow || e)
                        }
                        for (r = 0;
                            (a = c[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || f, d = (Me.get(a, "events") || {})[t.type] && Me.get(a, "handle"), d && d.apply(a, i), d = p && a[p], d && d.apply && ke(a) && (t.result = d.apply(a, i), t.result === !1 && t.preventDefault());
                        return t.type = f, o || t.isDefaultPrevented() || u._default && u._default.apply(c.pop(), i) !== !1 || !ke(n) || p && re.isFunction(n[f]) && !re.isWindow(n) && (s = n[p], s && (n[p] = null), re.event.triggered = f, n[f](), re.event.triggered = void 0, s && (n[p] = s)), t.result
                    }
                },
                simulate: function(e, t, i) {
                    var n = re.extend(new re.Event, i, {
                        type: e,
                        isSimulated: !0
                    });
                    re.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
                }
            }), re.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        re.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var i = this[0];
                    return i ? re.event.trigger(e, t, i, !0) : void 0
                }
            }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                re.fn[t] = function(e, i) {
                    return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
                }
            }), re.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), ne.focusin = "onfocusin" in e, ne.focusin || re.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var i = function(e) {
                    re.event.simulate(t, e.target, re.event.fix(e))
                };
                re.event.special[t] = {
                    setup: function() {
                        var n = this.ownerDocument || this,
                            o = Me.access(n, t);
                        o || n.addEventListener(e, i, !0), Me.access(n, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this,
                            o = Me.access(n, t) - 1;
                        o ? Me.access(n, t, o) : (n.removeEventListener(e, i, !0), Me.remove(n, t))
                    }
                }
            });
            var At = e.location,
                gt = re.now(),
                mt = /\?/;
            re.parseJSON = function(e) {
                return JSON.parse(e + "")
            }, re.parseXML = function(t) {
                var i;
                if (!t || "string" != typeof t) return null;
                try {
                    i = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (n) {
                    i = void 0
                }
                return (!i || i.getElementsByTagName("parsererror").length) && re.error("Invalid XML: " + t), i
            };
            var vt = /#.*$/,
                yt = /([?&])_=[^&]*/,
                wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                xt = /^(?:GET|HEAD)$/,
                Ct = /^\/\//,
                kt = {},
                Mt = {},
                Tt = "*/".concat("*"),
                Et = $.createElement("a");
            Et.href = At.href, re.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: At.href,
                    type: "GET",
                    isLocal: bt.test(At.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Tt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": re.parseJSON,
                        "text xml": re.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? q(q(e, re.ajaxSettings), t) : q(re.ajaxSettings, e)
                },
                ajaxPrefilter: F(kt),
                ajaxTransport: F(Mt),
                ajax: function(t, i) {
                    function n(t, i, n, s) {
                        var p, u, v, y, b, C = i;
                        2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, a = s || "", x.readyState = t > 0 ? 4 : 0, p = t >= 200 && 300 > t || 304 === t, n && (y = Y(c, x, n)), y = V(c, y, x, p), p ? (c.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (re.lastModified[r] = b), b = x.getResponseHeader("etag"), b && (re.etag[r] = b)), 204 === t || "HEAD" === c.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, p = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || C) + "", p ? A.resolveWith(f, [u, C, x]) : A.rejectWith(f, [x, C, v]), x.statusCode(m), m = void 0, d && h.trigger(p ? "ajaxSuccess" : "ajaxError", [x, c, p ? u : v]), g.fireWith(f, [x, C]), d && (h.trigger("ajaxComplete", [x, c]), --re.active || re.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (i = t, t = void 0), i = i || {};
                    var o, r, a, s, l, p, d, u, c = re.ajaxSetup({}, i),
                        f = c.context || c,
                        h = c.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                        A = re.Deferred(),
                        g = re.Callbacks("once memory"),
                        m = c.statusCode || {},
                        v = {},
                        y = {},
                        w = 0,
                        b = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === w) {
                                    if (!s)
                                        for (s = {}; t = wt.exec(a);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === w ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                var i = e.toLowerCase();
                                return w || (e = y[i] = y[i] || e, v[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return w || (c.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > w)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else x.always(e[x.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || b;
                                return o && o.abort(t), n(0, t), this
                            }
                        };
                    if (A.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, c.url = ((t || c.url || At.href) + "").replace(vt, "").replace(Ct, At.protocol + "//"), c.type = i.method || i.type || c.method || c.type, c.dataTypes = re.trim(c.dataType || "*").toLowerCase().match(be) || [""], null == c.crossDomain) {
                        p = $.createElement("a");
                        try {
                            p.href = c.url, p.href = p.href, c.crossDomain = Et.protocol + "//" + Et.host != p.protocol + "//" + p.host
                        } catch (C) {
                            c.crossDomain = !0
                        }
                    }
                    if (c.data && c.processData && "string" != typeof c.data && (c.data = re.param(c.data, c.traditional)), R(kt, c, i, x), 2 === w) return x;
                    d = re.event && c.global, d && 0 === re.active++ && re.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !xt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (mt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = yt.test(r) ? r.replace(yt, "$1_=" + gt++) : r + (mt.test(r) ? "&" : "?") + "_=" + gt++)), c.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : c.accepts["*"]);
                    for (u in c.headers) x.setRequestHeader(u, c.headers[u]);
                    if (c.beforeSend && (c.beforeSend.call(f, x, c) === !1 || 2 === w)) return x.abort();
                    b = "abort";
                    for (u in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[u](c[u]);
                    if (o = R(Mt, c, i, x)) {
                        if (x.readyState = 1, d && h.trigger("ajaxSend", [x, c]), 2 === w) return x;
                        c.async && c.timeout > 0 && (l = e.setTimeout(function() {
                            x.abort("timeout")
                        }, c.timeout));
                        try {
                            w = 1, o.send(v, n)
                        } catch (C) {
                            if (!(2 > w)) throw C;
                            n(-1, C)
                        }
                    } else n(-1, "No Transport");
                    return x
                },
                getJSON: function(e, t, i) {
                    return re.get(e, t, i, "json")
                },
                getScript: function(e, t) {
                    return re.get(e, void 0, t, "script")
                }
            }), re.each(["get", "post"], function(e, t) {
                re[t] = function(e, i, n, o) {
                    return re.isFunction(i) && (o = o || n, n = i, i = void 0), re.ajax(re.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: i,
                        success: n
                    }, re.isPlainObject(e) && e))
                }
            }), re._evalUrl = function(e) {
                return re.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, re.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return re.isFunction(e) ? this.each(function(t) {
                        re(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function(e) {
                    return re.isFunction(e) ? this.each(function(t) {
                        re(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = re(this),
                            i = t.contents();
                        i.length ? i.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = re.isFunction(e);
                    return this.each(function(i) {
                        re(this).wrapAll(t ? e.call(this, i) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), re.expr.filters.hidden = function(e) {
                return !re.expr.filters.visible(e)
            }, re.expr.filters.visible = function(e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
            };
            var Dt = /%20/g,
                It = /\[\]$/,
                St = /\r?\n/g,
                zt = /^(?:submit|button|image|reset|file)$/i,
                jt = /^(?:input|select|textarea|keygen)/i;
            re.param = function(e, t) {
                var i, n = [],
                    o = function(e, t) {
                        t = re.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (i in e) U(i, e[i], t, o);
                return n.join("&").replace(Dt, "+")
            }, re.fn.extend({
                serialize: function() {
                    return re.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = re.prop(this, "elements");
                        return e ? re.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !re(this).is(":disabled") && jt.test(this.nodeName) && !zt.test(e) && (this.checked || !Be.test(e))
                    }).map(function(e, t) {
                        var i = re(this).val();
                        return null == i ? null : re.isArray(i) ? re.map(i, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: i.replace(St, "\r\n")
                        }
                    }).get()
                }
            }), re.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            };
            var Bt = {
                    0: 200,
                    1223: 204
                },
                Nt = re.ajaxSettings.xhr();
            ne.cors = !!Nt && "withCredentials" in Nt, ne.ajax = Nt = !!Nt, re.ajaxTransport(function(t) {
                var i, n;
                return ne.cors || Nt && !t.crossDomain ? {
                    send: function(o, r) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (a in o) s.setRequestHeader(a, o[a]);
                        i = function(e) {
                            return function() {
                                i && (i = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = i(), n = s.onerror = i("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout(function() {
                                i && n()
                            })
                        }, i = i("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (l) {
                            if (i) throw l
                        }
                    },
                    abort: function() {
                        i && i()
                    }
                } : void 0
            }), re.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return re.globalEval(e), e
                    }
                }
            }), re.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), re.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, i;
                    return {
                        send: function(n, o) {
                            t = re("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", i = function(e) {
                                t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), $.head.appendChild(t[0])
                        },
                        abort: function() {
                            i && i()
                        }
                    }
                }
            });
            var Lt = [],
                Pt = /(=)\?(?=&|$)|\?\?/;
            re.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Lt.pop() || re.expando + "_" + gt++;
                    return this[e] = !0, e
                }
            }), re.ajaxPrefilter("json jsonp", function(t, i, n) {
                var o, r, a, s = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Pt, "$1" + o) : t.jsonp !== !1 && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return a || re.error(o + " was not called"), a[0]
                }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                    a = arguments
                }, n.always(function() {
                    void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, Lt.push(o)), a && re.isFunction(r) && r(a[0]), a = r = void 0
                }), "script") : void 0
            }), ne.createHTMLDocument = function() {
                var e = $.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), re.parseHTML = function(e, t, i) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (i = t, t = !1), t = t || (ne.createHTMLDocument ? $.implementation.createHTMLDocument("") : $);
                var n = he.exec(e),
                    o = !i && [];
                return n ? [t.createElement(n[1])] : (n = c([e], t, o), o && o.length && re(o).remove(), re.merge([], n.childNodes))
            };
            var Ht = re.fn.load;
            re.fn.load = function(e, t, i) {
                if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
                var n, o, r, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (n = re.trim(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments, a.html(n ? re("<div>").append(re.parseHTML(e)).find(n) : e)
                }).always(i && function(e, t) {
                    a.each(function() {
                        i.apply(a, r || [e.responseText, t, e])
                    })
                }), this
            }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                re.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), re.expr.filters.animated = function(e) {
                return re.grep(re.timers, function(t) {
                    return e === t.elem
                }).length
            }, re.offset = {
                setOffset: function(e, t, i) {
                    var n, o, r, a, s, l, p, d = re.css(e, "position"),
                        u = re(e),
                        c = {};
                    "static" === d && (e.style.position = "relative"), s = u.offset(), r = re.css(e, "top"), l = re.css(e, "left"), p = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, p ? (n = u.position(), a = n.top, o = n.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, i, re.extend({}, s))), null != t.top && (c.top = t.top - s.top + a), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : u.css(c)
                }
            }, re.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        re.offset.setOffset(this, e, t)
                    });
                    var t, i, n = this[0],
                        o = {
                            top: 0,
                            left: 0
                        },
                        r = n && n.ownerDocument;
                    if (r) return t = r.documentElement, re.contains(t, n) ? (o = n.getBoundingClientRect(), i = _(r), {
                        top: o.top + i.pageYOffset - t.clientTop,
                        left: o.left + i.pageXOffset - t.clientLeft
                    }) : o
                },
                position: function() {
                    if (this[0]) {
                        var e, t, i = this[0],
                            n = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += re.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                            top: t.top - n.top - re.css(i, "marginTop", !0),
                            left: t.left - n.left - re.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                        return e || Je
                    })
                }
            }), re.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var i = "pageYOffset" === t;
                re.fn[e] = function(n) {
                    return Ce(this, function(e, n, o) {
                        var r = _(e);
                        return void 0 === o ? r ? r[t] : e[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o)
                    }, e, n, arguments.length)
                }
            }), re.each(["top", "left"], function(e, t) {
                re.cssHooks[t] = E(ne.pixelPosition, function(e, i) {
                    return i ? (i = T(e, t), $e.test(i) ? re(e).position()[t] + "px" : i) : void 0
                })
            }), re.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                re.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(i, n) {
                    re.fn[n] = function(n, o) {
                        var r = arguments.length && (i || "boolean" != typeof n),
                            a = i || (n === !0 || o === !0 ? "margin" : "border");
                        return Ce(this, function(t, i, n) {
                            var o;
                            return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? re.css(t, i, a) : re.style(t, i, n, a)
                        }, t, r ? n : void 0, r, null)
                    }
                })
            }), re.fn.extend({
                bind: function(e, t, i) {
                    return this.on(e, null, t, i)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, i, n) {
                    return this.on(t, e, i, n)
                },
                undelegate: function(e, t, i) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
                },
                size: function() {
                    return this.length
                }
            }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return re
            });
            var Ot = e.jQuery,
                Qt = e.$;
            return re.noConflict = function(t) {
                return e.$ === re && (e.$ = Qt), t && e.jQuery === re && (e.jQuery = Ot), re
            }, t || (e.jQuery = e.$ = re), re
        })
    }, {}],
    3: [function(e, t, i) {
        "use strict";
        ! function(n, o) {
            "function" == typeof define && define.amd ? define(["jquery"], o) : "object" == typeof i ? t.exports = o(e("./../../../jquery/dist/jquery.js")) : n.Swiper = o(n.jQuery)
        }(this, function(e) {
            function t(e) {
                e.fn.swiper = function(t) {
                    var n;
                    return e(this).each(function() {
                        var e = new i(this, t);
                        n || (n = e)
                    }), n
                }
            }
            var i = function(t, n) {
                function o(e) {
                    return Math.floor(e)
                }

                function r() {
                    y.autoplayTimeoutId = setTimeout(function() {
                        y.params.loop ? (y.fixLoop(), y._slideNext(), y.emit("onAutoplay", y)) : y.isEnd ? n.autoplayStopOnLast ? y.stopAutoplay() : (y._slideTo(0), y.emit("onAutoplay", y)) : (y._slideNext(), y.emit("onAutoplay", y))
                    }, y.params.autoplay)
                }

                function a(t, i) {
                    var n = e(t.target);
                    if (!n.is(i))
                        if ("string" == typeof i) n = n.parents(i);
                        else if (i.nodeType) {
                        var o;
                        return n.parents().each(function(e, t) {
                            t === i && (o = i)
                        }), o ? i : void 0
                    }
                    return 0 !== n.length ? n[0] : void 0
                }

                function s(e, t) {
                    t = t || {};
                    var i = window.MutationObserver || window.WebkitMutationObserver,
                        n = new i(function(e) {
                            e.forEach(function(e) {
                                y.onResize(!0), y.emit("onObserverUpdate", y, e)
                            })
                        });
                    n.observe(e, {
                        attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                        childList: "undefined" == typeof t.childList ? !0 : t.childList,
                        characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
                    }), y.observers.push(n)
                }

                function l(e) {
                    e.originalEvent && (e = e.originalEvent);
                    var t = e.keyCode || e.charCode;
                    if (!y.params.allowSwipeToNext && (y.isHorizontal() && 39 === t || !y.isHorizontal() && 40 === t)) return !1;
                    if (!y.params.allowSwipeToPrev && (y.isHorizontal() && 37 === t || !y.isHorizontal() && 38 === t)) return !1;
                    if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                        if (37 === t || 39 === t || 38 === t || 40 === t) {
                            var i = !1;
                            if (y.container.parents(".swiper-slide").length > 0 && 0 === y.container.parents(".swiper-slide-active").length) return;
                            var n = {
                                    left: window.pageXOffset,
                                    top: window.pageYOffset
                                },
                                o = window.innerWidth,
                                r = window.innerHeight,
                                a = y.container.offset();
                            y.rtl && (a.left = a.left - y.container[0].scrollLeft);
                            for (var s = [
                                    [a.left, a.top],
                                    [a.left + y.width, a.top],
                                    [a.left, a.top + y.height],
                                    [a.left + y.width, a.top + y.height]
                                ], l = 0; l < s.length; l++) {
                                var p = s[l];
                                p[0] >= n.left && p[0] <= n.left + o && p[1] >= n.top && p[1] <= n.top + r && (i = !0)
                            }
                            if (!i) return
                        }
                        y.isHorizontal() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !y.rtl || 37 === t && y.rtl) && y.slideNext(), (37 === t && !y.rtl || 39 === t && y.rtl) && y.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && y.slideNext(), 38 === t && y.slidePrev())
                    }
                }

                function p(e) {
                    e.originalEvent && (e = e.originalEvent);
                    var t = y.mousewheel.event,
                        i = 0,
                        n = y.rtl ? -1 : 1;
                    if (e.detail) i = -e.detail;
                    else if ("mousewheel" === t)
                        if (y.params.mousewheelForceToAxis)
                            if (y.isHorizontal()) {
                                if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                                i = e.wheelDeltaX * n
                            } else {
                                if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                                i = e.wheelDeltaY
                            }
                    else i = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * n : -e.wheelDeltaY;
                    else if ("DOMMouseScroll" === t) i = -e.detail;
                    else if ("wheel" === t)
                        if (y.params.mousewheelForceToAxis)
                            if (y.isHorizontal()) {
                                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                                i = -e.deltaX * n
                            } else {
                                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                                i = -e.deltaY
                            }
                    else i = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * n : -e.deltaY;
                    if (0 !== i) {
                        if (y.params.mousewheelInvert && (i = -i), y.params.freeMode) {
                            var o = y.getWrapperTranslate() + i * y.params.mousewheelSensitivity,
                                r = y.isBeginning,
                                a = y.isEnd;
                            if (o >= y.minTranslate() && (o = y.minTranslate()), o <= y.maxTranslate() && (o = y.maxTranslate()), y.setWrapperTransition(0), y.setWrapperTranslate(o), y.updateProgress(), y.updateActiveIndex(), (!r && y.isBeginning || !a && y.isEnd) && y.updateClasses(), y.params.freeModeSticky ? (clearTimeout(y.mousewheel.timeout), y.mousewheel.timeout = setTimeout(function() {
                                    y.slideReset()
                                }, 300)) : y.params.lazyLoading && y.lazy && y.lazy.load(), 0 === o || o === y.maxTranslate()) return
                        } else {
                            if ((new window.Date).getTime() - y.mousewheel.lastScrollTime > 60)
                                if (0 > i)
                                    if (y.isEnd && !y.params.loop || y.animating) {
                                        if (y.params.mousewheelReleaseOnEdges) return !0
                                    } else y.slideNext();
                            else if (y.isBeginning && !y.params.loop || y.animating) {
                                if (y.params.mousewheelReleaseOnEdges) return !0
                            } else y.slidePrev();
                            y.mousewheel.lastScrollTime = (new window.Date).getTime()
                        }
                        return y.params.autoplay && y.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                    }
                }

                function d(t, i) {
                    t = e(t);
                    var n, o, r, a = y.rtl ? -1 : 1;
                    n = t.attr("data-swiper-parallax") || "0", o = t.attr("data-swiper-parallax-x"), r = t.attr("data-swiper-parallax-y"), o || r ? (o = o || "0", r = r || "0") : y.isHorizontal() ? (o = n, r = "0") : (r = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * a + "%" : o * i * a + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i + "%" : r * i + "px", t.transform("translate3d(" + o + ", " + r + ",0px)")
                }

                function u(e) {
                    return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
                }
                if (!(this instanceof i)) return new i(t, n);
                var c = {
                        direction: "horizontal",
                        touchEventsTarget: "container",
                        initialSlide: 0,
                        speed: 300,
                        autoplay: !1,
                        autoplayDisableOnInteraction: !0,
                        autoplayStopOnLast: !1,
                        iOSEdgeSwipeDetection: !1,
                        iOSEdgeSwipeThreshold: 20,
                        freeMode: !1,
                        freeModeMomentum: !0,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: !0,
                        freeModeMomentumBounceRatio: 1,
                        freeModeSticky: !1,
                        freeModeMinimumVelocity: .02,
                        autoHeight: !1,
                        setWrapperSize: !1,
                        virtualTranslate: !1,
                        effect: "slide",
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        },
                        flip: {
                            slideShadows: !0,
                            limitRotation: !0
                        },
                        cube: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        },
                        fade: {
                            crossFade: !1
                        },
                        parallax: !1,
                        scrollbar: null,
                        scrollbarHide: !0,
                        scrollbarDraggable: !1,
                        scrollbarSnapOnRelease: !1,
                        keyboardControl: !1,
                        mousewheelControl: !1,
                        mousewheelReleaseOnEdges: !1,
                        mousewheelInvert: !1,
                        mousewheelForceToAxis: !1,
                        mousewheelSensitivity: 1,
                        hashnav: !1,
                        breakpoints: void 0,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: "column",
                        slidesPerGroup: 1,
                        centeredSlides: !1,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        roundLengths: !1,
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: !0,
                        shortSwipes: !0,
                        longSwipes: !0,
                        longSwipesRatio: .5,
                        longSwipesMs: 300,
                        followFinger: !0,
                        onlyExternal: !1,
                        threshold: 0,
                        touchMoveStopPropagation: !0,
                        pagination: null,
                        paginationElement: "span",
                        paginationClickable: !1,
                        paginationHide: !1,
                        paginationBulletRender: null,
                        paginationProgressRender: null,
                        paginationFractionRender: null,
                        paginationCustomRender: null,
                        paginationType: "bullets",
                        resistance: !0,
                        resistanceRatio: .85,
                        nextButton: null,
                        prevButton: null,
                        watchSlidesProgress: !1,
                        watchSlidesVisibility: !1,
                        grabCursor: !1,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        slideToClickedSlide: !1,
                        lazyLoading: !1,
                        lazyLoadingInPrevNext: !1,
                        lazyLoadingInPrevNextAmount: 1,
                        lazyLoadingOnTransitionStart: !1,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        loop: !1,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        control: void 0,
                        controlInverse: !1,
                        controlBy: "slide",
                        allowSwipeToPrev: !0,
                        allowSwipeToNext: !0,
                        swipeHandler: null,
                        noSwiping: !0,
                        noSwipingClass: "swiper-no-swiping",
                        slideClass: "swiper-slide",
                        slideActiveClass: "swiper-slide-active",
                        slideVisibleClass: "swiper-slide-visible",
                        slideDuplicateClass: "swiper-slide-duplicate",
                        slideNextClass: "swiper-slide-next",
                        slidePrevClass: "swiper-slide-prev",
                        wrapperClass: "swiper-wrapper",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        buttonDisabledClass: "swiper-button-disabled",
                        paginationCurrentClass: "swiper-pagination-current",
                        paginationTotalClass: "swiper-pagination-total",
                        paginationHiddenClass: "swiper-pagination-hidden",
                        paginationProgressbarClass: "swiper-pagination-progressbar",
                        observer: !1,
                        observeParents: !1,
                        a11y: !1,
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        runCallbacksOnInit: !0
                    },
                    f = n && n.virtualTranslate;
                n = n || {};
                var h = {};
                for (var A in n)
                    if ("object" != typeof n[A] || null === n[A] || n[A].nodeType || n[A] === window || n[A] === document || "undefined" != typeof Dom7 && n[A] instanceof Dom7 || "undefined" != typeof jQuery && n[A] instanceof jQuery) h[A] = n[A];
                    else {
                        h[A] = {};
                        for (var g in n[A]) h[A][g] = n[A][g]
                    }
                for (var m in c)
                    if ("undefined" == typeof n[m]) n[m] = c[m];
                    else if ("object" == typeof n[m])
                    for (var v in c[m]) "undefined" == typeof n[m][v] && (n[m][v] = c[m][v]);
                var y = this;
                if (y.params = n, y.originalParams = h, y.classNames = [], "undefined" != typeof e && "undefined" != typeof Dom7 && (e = Dom7), ("undefined" != typeof e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (y.$ = e, y.currentBreakpoint = void 0, y.getActiveBreakpoint = function() {
                        if (!y.params.breakpoints) return !1;
                        var e, t = !1,
                            i = [];
                        for (e in y.params.breakpoints) y.params.breakpoints.hasOwnProperty(e) && i.push(e);
                        i.sort(function(e, t) {
                            return parseInt(e, 10) > parseInt(t, 10)
                        });
                        for (var n = 0; n < i.length; n++) e = i[n], e >= window.innerWidth && !t && (t = e);
                        return t || "max"
                    }, y.setBreakpoint = function() {
                        var e = y.getActiveBreakpoint();
                        if (e && y.currentBreakpoint !== e) {
                            var t = e in y.params.breakpoints ? y.params.breakpoints[e] : y.originalParams;
                            for (var i in t) y.params[i] = t[i];
                            y.currentBreakpoint = e
                        }
                    }, y.params.breakpoints && y.setBreakpoint(), y.container = e(t), 0 !== y.container.length)) {
                    if (y.container.length > 1) return void y.container.each(function() {
                        new i(this, n)
                    });
                    y.container[0].swiper = y, y.container.data("swiper", y), y.classNames.push("swiper-container-" + y.params.direction), y.params.freeMode && y.classNames.push("swiper-container-free-mode"), y.support.flexbox || (y.classNames.push("swiper-container-no-flexbox"), y.params.slidesPerColumn = 1), y.params.autoHeight && y.classNames.push("swiper-container-autoheight"), (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0, y.classNames.push("swiper-container-3d")) : y.params.effect = "slide"), "slide" !== y.params.effect && y.classNames.push("swiper-container-" + y.params.effect), "cube" === y.params.effect && (y.params.resistanceRatio = 0, y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.centeredSlides = !1, y.params.spaceBetween = 0, y.params.virtualTranslate = !0, y.params.setWrapperSize = !1), ("fade" === y.params.effect || "flip" === y.params.effect) && (y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.watchSlidesProgress = !0, y.params.spaceBetween = 0, y.params.setWrapperSize = !1, "undefined" == typeof f && (y.params.virtualTranslate = !0)), y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1), y.wrapper = y.container.children("." + y.params.wrapperClass), y.params.pagination && (y.paginationContainer = e(y.params.pagination), "bullets" === y.params.paginationType && y.params.paginationClickable ? y.paginationContainer.addClass("swiper-pagination-clickable") : y.params.paginationClickable = !1, y.paginationContainer.addClass("swiper-pagination-" + y.params.paginationType)), y.isHorizontal = function() {
                        return "horizontal" === y.params.direction
                    }, y.rtl = y.isHorizontal() && ("rtl" === y.container[0].dir.toLowerCase() || "rtl" === y.container.css("direction")), y.rtl && y.classNames.push("swiper-container-rtl"), y.rtl && (y.wrongRTL = "-webkit-box" === y.wrapper.css("display")), y.params.slidesPerColumn > 1 && y.classNames.push("swiper-container-multirow"), y.device.android && y.classNames.push("swiper-container-android"), y.container.addClass(y.classNames.join(" ")), y.translate = 0, y.progress = 0, y.velocity = 0, y.lockSwipeToNext = function() {
                        y.params.allowSwipeToNext = !1
                    }, y.lockSwipeToPrev = function() {
                        y.params.allowSwipeToPrev = !1
                    }, y.lockSwipes = function() {
                        y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1
                    }, y.unlockSwipeToNext = function() {
                        y.params.allowSwipeToNext = !0
                    }, y.unlockSwipeToPrev = function() {
                        y.params.allowSwipeToPrev = !0
                    }, y.unlockSwipes = function() {
                        y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0
                    }, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab"), y.imagesToLoad = [], y.imagesLoaded = 0, y.loadImage = function(e, t, i, n, o) {
                        function r() {
                            o && o()
                        }
                        var a;
                        e.complete && n ? r() : t ? (a = new window.Image, a.onload = r, a.onerror = r, i && (a.srcset = i), t && (a.src = t)) : r()
                    }, y.preloadImages = function() {
                        function e() {
                            "undefined" != typeof y && null !== y && (void 0 !== y.imagesLoaded && y.imagesLoaded++, y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(), y.emit("onImagesReady", y)))
                        }
                        y.imagesToLoad = y.container.find("img");
                        for (var t = 0; t < y.imagesToLoad.length; t++) y.loadImage(y.imagesToLoad[t], y.imagesToLoad[t].currentSrc || y.imagesToLoad[t].getAttribute("src"), y.imagesToLoad[t].srcset || y.imagesToLoad[t].getAttribute("srcset"), !0, e)
                    }, y.autoplayTimeoutId = void 0, y.autoplaying = !1, y.autoplayPaused = !1, y.startAutoplay = function() {
                        return "undefined" != typeof y.autoplayTimeoutId ? !1 : y.params.autoplay ? y.autoplaying ? !1 : (y.autoplaying = !0, y.emit("onAutoplayStart", y), void r()) : !1
                    }, y.stopAutoplay = function(e) {
                        y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplaying = !1, y.autoplayTimeoutId = void 0, y.emit("onAutoplayStop", y))
                    }, y.pauseAutoplay = function(e) {
                        y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplayPaused = !0, 0 === e ? (y.autoplayPaused = !1, r()) : y.wrapper.transitionEnd(function() {
                            y && (y.autoplayPaused = !1, y.autoplaying ? r() : y.stopAutoplay())
                        }))
                    }, y.minTranslate = function() {
                        return -y.snapGrid[0]
                    }, y.maxTranslate = function() {
                        return -y.snapGrid[y.snapGrid.length - 1]
                    }, y.updateAutoHeight = function() {
                        var e = y.slides.eq(y.activeIndex)[0];
                        if ("undefined" != typeof e) {
                            var t = e.offsetHeight;
                            t && y.wrapper.css("height", t + "px")
                        }
                    }, y.updateContainerSize = function() {
                        var e, t;
                        e = "undefined" != typeof y.params.width ? y.params.width : y.container[0].clientWidth, t = "undefined" != typeof y.params.height ? y.params.height : y.container[0].clientHeight, 0 === e && y.isHorizontal() || 0 === t && !y.isHorizontal() || (e = e - parseInt(y.container.css("padding-left"), 10) - parseInt(y.container.css("padding-right"), 10), t = t - parseInt(y.container.css("padding-top"), 10) - parseInt(y.container.css("padding-bottom"), 10), y.width = e, y.height = t, y.size = y.isHorizontal() ? y.width : y.height)
                    }, y.updateSlidesSize = function() {
                        y.slides = y.wrapper.children("." + y.params.slideClass), y.snapGrid = [], y.slidesGrid = [], y.slidesSizesGrid = [];
                        var e, t = y.params.spaceBetween,
                            i = -y.params.slidesOffsetBefore,
                            n = 0,
                            r = 0;
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * y.size), y.virtualSize = -t, y.rtl ? y.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : y.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var a;
                        y.params.slidesPerColumn > 1 && (a = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn, "auto" !== y.params.slidesPerView && "row" === y.params.slidesPerColumnFill && (a = Math.max(a, y.params.slidesPerView * y.params.slidesPerColumn)));
                        var s, l = y.params.slidesPerColumn,
                            p = a / l,
                            d = p - (y.params.slidesPerColumn * p - y.slides.length);
                        for (e = 0; e < y.slides.length; e++) {
                            s = 0;
                            var u = y.slides.eq(e);
                            if (y.params.slidesPerColumn > 1) {
                                var c, f, h;
                                "column" === y.params.slidesPerColumnFill ? (f = Math.floor(e / l), h = e - f * l, (f > d || f === d && h === l - 1) && ++h >= l && (h = 0, f++), c = f + h * a / l, u.css({
                                    "-webkit-box-ordinal-group": c,
                                    "-moz-box-ordinal-group": c,
                                    "-ms-flex-order": c,
                                    "-webkit-order": c,
                                    order: c
                                })) : (h = Math.floor(e / p), f = e - h * p), u.css({
                                    "margin-top": 0 !== h && y.params.spaceBetween && y.params.spaceBetween + "px"
                                }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                            }
                            "none" !== u.css("display") && ("auto" === y.params.slidesPerView ? (s = y.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), y.params.roundLengths && (s = o(s))) : (s = (y.size - (y.params.slidesPerView - 1) * t) / y.params.slidesPerView, y.params.roundLengths && (s = o(s)), y.isHorizontal() ? y.slides[e].style.width = s + "px" : y.slides[e].style.height = s + "px"), y.slides[e].swiperSlideSize = s, y.slidesSizesGrid.push(s), y.params.centeredSlides ? (i = i + s / 2 + n / 2 + t, 0 === e && (i = i - y.size / 2 - t), Math.abs(i) < .001 && (i = 0), r % y.params.slidesPerGroup === 0 && y.snapGrid.push(i), y.slidesGrid.push(i)) : (r % y.params.slidesPerGroup === 0 && y.snapGrid.push(i), y.slidesGrid.push(i), i = i + s + t), y.virtualSize += s + t, n = s, r++)
                        }
                        y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;
                        var A;
                        if (y.rtl && y.wrongRTL && ("slide" === y.params.effect || "coverflow" === y.params.effect) && y.wrapper.css({
                                width: y.virtualSize + y.params.spaceBetween + "px"
                            }), (!y.support.flexbox || y.params.setWrapperSize) && (y.isHorizontal() ? y.wrapper.css({
                                width: y.virtualSize + y.params.spaceBetween + "px"
                            }) : y.wrapper.css({
                                height: y.virtualSize + y.params.spaceBetween + "px"
                            })), y.params.slidesPerColumn > 1 && (y.virtualSize = (s + y.params.spaceBetween) * a, y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween, y.wrapper.css({
                                width: y.virtualSize + y.params.spaceBetween + "px"
                            }), y.params.centeredSlides)) {
                            for (A = [], e = 0; e < y.snapGrid.length; e++) y.snapGrid[e] < y.virtualSize + y.snapGrid[0] && A.push(y.snapGrid[e]);
                            y.snapGrid = A
                        }
                        if (!y.params.centeredSlides) {
                            for (A = [], e = 0; e < y.snapGrid.length; e++) y.snapGrid[e] <= y.virtualSize - y.size && A.push(y.snapGrid[e]);
                            y.snapGrid = A, Math.floor(y.virtualSize - y.size) > Math.floor(y.snapGrid[y.snapGrid.length - 1]) && y.snapGrid.push(y.virtualSize - y.size)
                        }
                        0 === y.snapGrid.length && (y.snapGrid = [0]), 0 !== y.params.spaceBetween && (y.isHorizontal() ? y.rtl ? y.slides.css({
                            marginLeft: t + "px"
                        }) : y.slides.css({
                            marginRight: t + "px"
                        }) : y.slides.css({
                            marginBottom: t + "px"
                        })), y.params.watchSlidesProgress && y.updateSlidesOffset()
                    }, y.updateSlidesOffset = function() {
                        for (var e = 0; e < y.slides.length; e++) y.slides[e].swiperSlideOffset = y.isHorizontal() ? y.slides[e].offsetLeft : y.slides[e].offsetTop
                    }, y.updateSlidesProgress = function(e) {
                        if ("undefined" == typeof e && (e = y.translate || 0), 0 !== y.slides.length) {
                            "undefined" == typeof y.slides[0].swiperSlideOffset && y.updateSlidesOffset();
                            var t = -e;
                            y.rtl && (t = e), y.slides.removeClass(y.params.slideVisibleClass);
                            for (var i = 0; i < y.slides.length; i++) {
                                var n = y.slides[i],
                                    o = (t - n.swiperSlideOffset) / (n.swiperSlideSize + y.params.spaceBetween);
                                if (y.params.watchSlidesVisibility) {
                                    var r = -(t - n.swiperSlideOffset),
                                        a = r + y.slidesSizesGrid[i],
                                        s = r >= 0 && r < y.size || a > 0 && a <= y.size || 0 >= r && a >= y.size;
                                    s && y.slides.eq(i).addClass(y.params.slideVisibleClass)
                                }
                                n.progress = y.rtl ? -o : o
                            }
                        }
                    }, y.updateProgress = function(e) {
                        "undefined" == typeof e && (e = y.translate || 0);
                        var t = y.maxTranslate() - y.minTranslate(),
                            i = y.isBeginning,
                            n = y.isEnd;
                        0 === t ? (y.progress = 0, y.isBeginning = y.isEnd = !0) : (y.progress = (e - y.minTranslate()) / t, y.isBeginning = y.progress <= 0, y.isEnd = y.progress >= 1), y.isBeginning && !i && y.emit("onReachBeginning", y), y.isEnd && !n && y.emit("onReachEnd", y), y.params.watchSlidesProgress && y.updateSlidesProgress(e), y.emit("onProgress", y, y.progress)
                    }, y.updateActiveIndex = function() {
                        var e, t, i, n = y.rtl ? y.translate : -y.translate;
                        for (t = 0; t < y.slidesGrid.length; t++) "undefined" != typeof y.slidesGrid[t + 1] ? n >= y.slidesGrid[t] && n < y.slidesGrid[t + 1] - (y.slidesGrid[t + 1] - y.slidesGrid[t]) / 2 ? e = t : n >= y.slidesGrid[t] && n < y.slidesGrid[t + 1] && (e = t + 1) : n >= y.slidesGrid[t] && (e = t);
                        (0 > e || "undefined" == typeof e) && (e = 0), i = Math.floor(e / y.params.slidesPerGroup), i >= y.snapGrid.length && (i = y.snapGrid.length - 1), e !== y.activeIndex && (y.snapIndex = i, y.previousIndex = y.activeIndex, y.activeIndex = e, y.updateClasses())
                    }, y.updateClasses = function() {
                        y.slides.removeClass(y.params.slideActiveClass + " " + y.params.slideNextClass + " " + y.params.slidePrevClass);
                        var t = y.slides.eq(y.activeIndex);
                        if (t.addClass(y.params.slideActiveClass), t.next("." + y.params.slideClass).addClass(y.params.slideNextClass), t.prev("." + y.params.slideClass).addClass(y.params.slidePrevClass), y.paginationContainer && y.paginationContainer.length > 0) {
                            var i, n = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length;
                            if (y.params.loop ? (i = Math.ceil(y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup, i > y.slides.length - 1 - 2 * y.loopedSlides && (i -= y.slides.length - 2 * y.loopedSlides), i > n - 1 && (i -= n), 0 > i && "bullets" !== y.params.paginationType && (i = n + i)) : i = "undefined" != typeof y.snapIndex ? y.snapIndex : y.activeIndex || 0, "bullets" === y.params.paginationType && y.bullets && y.bullets.length > 0 && (y.bullets.removeClass(y.params.bulletActiveClass), y.paginationContainer.length > 1 ? y.bullets.each(function() {
                                    e(this).index() === i && e(this).addClass(y.params.bulletActiveClass)
                                }) : y.bullets.eq(i).addClass(y.params.bulletActiveClass)), "fraction" === y.params.paginationType && (y.paginationContainer.find("." + y.params.paginationCurrentClass).text(i + 1), y.paginationContainer.find("." + y.params.paginationTotalClass).text(n)), "progress" === y.params.paginationType) {
                                var o = (i + 1) / n,
                                    r = o,
                                    a = 1;
                                y.isHorizontal() || (a = o, r = 1), y.paginationContainer.find("." + y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + r + ") scaleY(" + a + ")").transition(y.params.speed)
                            }
                            "custom" === y.params.paginationType && y.params.paginationCustomRender && y.paginationContainer.html(y.params.paginationCustomRender(y, i + 1, n))
                        }
                        y.params.loop || (y.params.prevButton && (y.isBeginning ? (e(y.params.prevButton).addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(e(y.params.prevButton))) : (e(y.params.prevButton).removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(e(y.params.prevButton)))), y.params.nextButton && (y.isEnd ? (e(y.params.nextButton).addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(e(y.params.nextButton))) : (e(y.params.nextButton).removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(e(y.params.nextButton)))))
                    }, y.updatePagination = function() {
                        if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
                            var e = "";
                            if ("bullets" === y.params.paginationType) {
                                for (var t = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length, i = 0; t > i; i++) e += y.params.paginationBulletRender ? y.params.paginationBulletRender(i, y.params.bulletClass) : "<" + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + ">";
                                y.paginationContainer.html(e), y.bullets = y.paginationContainer.find("." + y.params.bulletClass), y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination()
                            }
                            "fraction" === y.params.paginationType && (e = y.params.paginationFractionRender ? y.params.paginationFractionRender(y, y.params.paginationCurrentClass, y.params.paginationTotalClass) : '<span class="' + y.params.paginationCurrentClass + '"></span> / <span class="' + y.params.paginationTotalClass + '"></span>', y.paginationContainer.html(e)), "progress" === y.params.paginationType && (e = y.params.paginationProgressRender ? y.params.paginationProgressRender(y, y.params.paginationProgressbarClass) : '<span class="' + y.params.paginationProgressbarClass + '"></span>', y.paginationContainer.html(e))
                        }
                    }, y.update = function(e) {
                        function t() {
                            n = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()), y.setWrapperTranslate(n), y.updateActiveIndex(), y.updateClasses()
                        }
                        if (y.updateContainerSize(), y.updateSlidesSize(), y.updateProgress(), y.updatePagination(), y.updateClasses(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), e) {
                            var i, n;
                            y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode ? (t(), y.params.autoHeight && y.updateAutoHeight()) : (i = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0), i || t())
                        } else y.params.autoHeight && y.updateAutoHeight()
                    }, y.onResize = function(e) {
                        y.params.breakpoints && y.setBreakpoint();
                        var t = y.params.allowSwipeToPrev,
                            i = y.params.allowSwipeToNext;
                        if (y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0, y.updateContainerSize(), y.updateSlidesSize(), ("auto" === y.params.slidesPerView || y.params.freeMode || e) && y.updatePagination(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode) {
                            var n = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());
                            y.setWrapperTranslate(n), y.updateActiveIndex(), y.updateClasses(), y.params.autoHeight && y.updateAutoHeight()
                        } else y.updateClasses(), ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0);
                        y.params.allowSwipeToPrev = t, y.params.allowSwipeToNext = i
                    };
                    var w = ["mousedown", "mousemove", "mouseup"];
                    window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), y.touchEvents = {
                        start: y.support.touch || !y.params.simulateTouch ? "touchstart" : w[0],
                        move: y.support.touch || !y.params.simulateTouch ? "touchmove" : w[1],
                        end: y.support.touch || !y.params.simulateTouch ? "touchend" : w[2]
                    }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === y.params.touchEventsTarget ? y.container : y.wrapper).addClass("swiper-wp8-" + y.params.direction), y.initEvents = function(t) {
                        var i = t ? "off" : "on",
                            o = t ? "removeEventListener" : "addEventListener",
                            r = "container" === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0],
                            a = y.support.touch ? r : document,
                            s = y.params.nested ? !0 : !1;
                        y.browser.ie ? (r[o](y.touchEvents.start, y.onTouchStart, !1), a[o](y.touchEvents.move, y.onTouchMove, s), a[o](y.touchEvents.end, y.onTouchEnd, !1)) : (y.support.touch && (r[o](y.touchEvents.start, y.onTouchStart, !1), r[o](y.touchEvents.move, y.onTouchMove, s), r[o](y.touchEvents.end, y.onTouchEnd, !1)), !n.simulateTouch || y.device.ios || y.device.android || (r[o]("mousedown", y.onTouchStart, !1), document[o]("mousemove", y.onTouchMove, s), document[o]("mouseup", y.onTouchEnd, !1))), window[o]("resize", y.onResize), y.params.nextButton && (e(y.params.nextButton)[i]("click", y.onClickNext), y.params.a11y && y.a11y && e(y.params.nextButton)[i]("keydown", y.a11y.onEnterKey)), y.params.prevButton && (e(y.params.prevButton)[i]("click", y.onClickPrev), y.params.a11y && y.a11y && e(y.params.prevButton)[i]("keydown", y.a11y.onEnterKey)), y.params.pagination && y.params.paginationClickable && (e(y.paginationContainer)[i]("click", "." + y.params.bulletClass, y.onClickIndex), y.params.a11y && y.a11y && e(y.paginationContainer)[i]("keydown", "." + y.params.bulletClass, y.a11y.onEnterKey)), (y.params.preventClicks || y.params.preventClicksPropagation) && r[o]("click", y.preventClicks, !0)
                    }, y.attachEvents = function(e) {
                        y.initEvents()
                    }, y.detachEvents = function() {
                        y.initEvents(!0)
                    }, y.allowClick = !0, y.preventClicks = function(e) {
                        y.allowClick || (y.params.preventClicks && e.preventDefault(), y.params.preventClicksPropagation && y.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }, y.onClickNext = function(e) {
                        e.preventDefault(), (!y.isEnd || y.params.loop) && y.slideNext()
                    }, y.onClickPrev = function(e) {
                        e.preventDefault(), (!y.isBeginning || y.params.loop) && y.slidePrev()
                    }, y.onClickIndex = function(t) {
                        t.preventDefault();
                        var i = e(this).index() * y.params.slidesPerGroup;
                        y.params.loop && (i += y.loopedSlides), y.slideTo(i)
                    }, y.updateClickedSlide = function(t) {
                        var i = a(t, "." + y.params.slideClass),
                            n = !1;
                        if (i)
                            for (var o = 0; o < y.slides.length; o++) y.slides[o] === i && (n = !0);
                        if (!i || !n) return y.clickedSlide = void 0, void(y.clickedIndex = void 0);
                        if (y.clickedSlide = i, y.clickedIndex = e(i).index(), y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
                            var r, s = y.clickedIndex;
                            if (y.params.loop) {
                                if (y.animating) return;
                                r = e(y.clickedSlide).attr("data-swiper-slide-index"), y.params.centeredSlides ? s < y.loopedSlides - y.params.slidesPerView / 2 || s > y.slides.length - y.loopedSlides + y.params.slidesPerView / 2 ? (y.fixLoop(), s = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                    y.slideTo(s)
                                }, 0)) : y.slideTo(s) : s > y.slides.length - y.params.slidesPerView ? (y.fixLoop(), s = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                    y.slideTo(s)
                                }, 0)) : y.slideTo(s)
                            } else y.slideTo(s)
                        }
                    };
                    var b, x, C, k, M, T, E, D, I, S, z = "input, select, textarea, button",
                        j = Date.now(),
                        B = [];
                    y.animating = !1, y.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    };
                    var N, L;
                    if (y.onTouchStart = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), N = "touchstart" === t.type, N || !("which" in t) || 3 !== t.which) {
                                if (y.params.noSwiping && a(t, "." + y.params.noSwipingClass)) return void(y.allowClick = !0);
                                if (!y.params.swipeHandler || a(t, y.params.swipeHandler)) {
                                    var i = y.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                        n = y.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                    if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && i <= y.params.iOSEdgeSwipeThreshold)) {
                                        if (b = !0, x = !1, C = !0, M = void 0, L = void 0, y.touches.startX = i, y.touches.startY = n, k = Date.now(), y.allowClick = !0, y.updateContainerSize(), y.swipeDirection = void 0, y.params.threshold > 0 && (D = !1), "touchstart" !== t.type) {
                                            var o = !0;
                                            e(t.target).is(z) && (o = !1), document.activeElement && e(document.activeElement).is(z) && document.activeElement.blur(), o && t.preventDefault()
                                        }
                                        y.emit("onTouchStart", y, t)
                                    }
                                }
                            }
                        }, y.onTouchMove = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), !(N && "mousemove" === t.type || t.preventedByNestedSwiper)) {
                                if (y.params.onlyExternal) return y.allowClick = !1, void(b && (y.touches.startX = y.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, y.touches.startY = y.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, k = Date.now()));
                                if (N && document.activeElement && t.target === document.activeElement && e(t.target).is(z)) return x = !0, void(y.allowClick = !1);
                                if (C && y.emit("onTouchMove", y, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                    if (y.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, y.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof M) {
                                        var i = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI;
                                        M = y.isHorizontal() ? i > y.params.touchAngle : 90 - i > y.params.touchAngle
                                    }
                                    if (M && y.emit("onTouchMoveOpposite", y, t), "undefined" == typeof L && y.browser.ieTouch && (y.touches.currentX !== y.touches.startX || y.touches.currentY !== y.touches.startY) && (L = !0), b) {
                                        if (M) return void(b = !1);
                                        if (L || !y.browser.ieTouch) {
                                            y.allowClick = !1, y.emit("onSliderMove", y, t), t.preventDefault(), y.params.touchMoveStopPropagation && !y.params.nested && t.stopPropagation(), x || (n.loop && y.fixLoop(), E = y.getWrapperTranslate(), y.setWrapperTransition(0), y.animating && y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay() : y.pauseAutoplay()), S = !1, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grabbing", y.container[0].style.cursor = "-moz-grabbin", y.container[0].style.cursor = "grabbing")), x = !0;
                                            var o = y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;
                                            o *= y.params.touchRatio, y.rtl && (o = -o), y.swipeDirection = o > 0 ? "prev" : "next", T = o + E;
                                            var r = !0;
                                            if (o > 0 && T > y.minTranslate() ? (r = !1, y.params.resistance && (T = y.minTranslate() - 1 + Math.pow(-y.minTranslate() + E + o, y.params.resistanceRatio))) : 0 > o && T < y.maxTranslate() && (r = !1, y.params.resistance && (T = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - E - o, y.params.resistanceRatio))), r && (t.preventedByNestedSwiper = !0), !y.params.allowSwipeToNext && "next" === y.swipeDirection && E > T && (T = E), !y.params.allowSwipeToPrev && "prev" === y.swipeDirection && T > E && (T = E), y.params.followFinger) {
                                                if (y.params.threshold > 0) {
                                                    if (!(Math.abs(o) > y.params.threshold || D)) return void(T = E);
                                                    if (!D) return D = !0, y.touches.startX = y.touches.currentX, y.touches.startY = y.touches.currentY, T = E, void(y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY)
                                                }(y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(), y.params.freeMode && (0 === B.length && B.push({
                                                    position: y.touches[y.isHorizontal() ? "startX" : "startY"],
                                                    time: k
                                                }), B.push({
                                                    position: y.touches[y.isHorizontal() ? "currentX" : "currentY"],
                                                    time: (new window.Date).getTime()
                                                })), y.updateProgress(T), y.setWrapperTranslate(T)
                                            }
                                        }
                                    }
                                }
                            }
                        }, y.onTouchEnd = function(t) {
                            if (t.originalEvent && (t = t.originalEvent), C && y.emit("onTouchEnd", y, t), C = !1, b) {
                                y.params.grabCursor && x && b && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab");
                                var i = Date.now(),
                                    n = i - k;
                                if (y.allowClick && (y.updateClickedSlide(t), y.emit("onTap", y, t), 300 > n && i - j > 300 && (I && clearTimeout(I), I = setTimeout(function() {
                                        y && (y.params.paginationHide && y.paginationContainer.length > 0 && !e(t.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass), y.emit("onClick", y, t))
                                    }, 300)), 300 > n && 300 > i - j && (I && clearTimeout(I), y.emit("onDoubleTap", y, t))), j = Date.now(), setTimeout(function() {
                                        y && (y.allowClick = !0)
                                    }, 0), !b || !x || !y.swipeDirection || 0 === y.touches.diff || T === E) return void(b = x = !1);
                                b = x = !1;
                                var o;
                                if (o = y.params.followFinger ? y.rtl ? y.translate : -y.translate : -T, y.params.freeMode) {
                                    if (o < -y.minTranslate()) return void y.slideTo(y.activeIndex);
                                    if (o > -y.maxTranslate()) return void(y.slides.length < y.snapGrid.length ? y.slideTo(y.snapGrid.length - 1) : y.slideTo(y.slides.length - 1));
                                    if (y.params.freeModeMomentum) {
                                        if (B.length > 1) {
                                            var r = B.pop(),
                                                a = B.pop(),
                                                s = r.position - a.position,
                                                l = r.time - a.time;
                                            y.velocity = s / l, y.velocity = y.velocity / 2, Math.abs(y.velocity) < y.params.freeModeMinimumVelocity && (y.velocity = 0), (l > 150 || (new window.Date).getTime() - r.time > 300) && (y.velocity = 0)
                                        } else y.velocity = 0;
                                        B.length = 0;
                                        var p = 1e3 * y.params.freeModeMomentumRatio,
                                            d = y.velocity * p,
                                            u = y.translate + d;
                                        y.rtl && (u = -u);
                                        var c, f = !1,
                                            h = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;
                                        if (u < y.maxTranslate()) y.params.freeModeMomentumBounce ? (u + y.maxTranslate() < -h && (u = y.maxTranslate() - h), c = y.maxTranslate(), f = !0, S = !0) : u = y.maxTranslate();
                                        else if (u > y.minTranslate()) y.params.freeModeMomentumBounce ? (u - y.minTranslate() > h && (u = y.minTranslate() + h), c = y.minTranslate(), f = !0, S = !0) : u = y.minTranslate();
                                        else if (y.params.freeModeSticky) {
                                            var A, g = 0;
                                            for (g = 0; g < y.snapGrid.length; g += 1)
                                                if (y.snapGrid[g] > -u) {
                                                    A = g;
                                                    break
                                                }
                                            u = Math.abs(y.snapGrid[A] - u) < Math.abs(y.snapGrid[A - 1] - u) || "next" === y.swipeDirection ? y.snapGrid[A] : y.snapGrid[A - 1], y.rtl || (u = -u)
                                        }
                                        if (0 !== y.velocity) p = y.rtl ? Math.abs((-u - y.translate) / y.velocity) : Math.abs((u - y.translate) / y.velocity);
                                        else if (y.params.freeModeSticky) return void y.slideReset();
                                        y.params.freeModeMomentumBounce && f ? (y.updateProgress(c), y.setWrapperTransition(p), y.setWrapperTranslate(u), y.onTransitionStart(), y.animating = !0, y.wrapper.transitionEnd(function() {
                                            y && S && (y.emit("onMomentumBounce", y), y.setWrapperTransition(y.params.speed), y.setWrapperTranslate(c), y.wrapper.transitionEnd(function() {
                                                y && y.onTransitionEnd()
                                            }))
                                        })) : y.velocity ? (y.updateProgress(u), y.setWrapperTransition(p), y.setWrapperTranslate(u), y.onTransitionStart(), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function() {
                                            y && y.onTransitionEnd()
                                        }))) : y.updateProgress(u), y.updateActiveIndex()
                                    }
                                    return void((!y.params.freeModeMomentum || n >= y.params.longSwipesMs) && (y.updateProgress(), y.updateActiveIndex()))
                                }
                                var m, v = 0,
                                    w = y.slidesSizesGrid[0];
                                for (m = 0; m < y.slidesGrid.length; m += y.params.slidesPerGroup) "undefined" != typeof y.slidesGrid[m + y.params.slidesPerGroup] ? o >= y.slidesGrid[m] && o < y.slidesGrid[m + y.params.slidesPerGroup] && (v = m, w = y.slidesGrid[m + y.params.slidesPerGroup] - y.slidesGrid[m]) : o >= y.slidesGrid[m] && (v = m, w = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
                                var M = (o - y.slidesGrid[v]) / w;
                                if (n > y.params.longSwipesMs) {
                                    if (!y.params.longSwipes) return void y.slideTo(y.activeIndex);
                                    "next" === y.swipeDirection && (M >= y.params.longSwipesRatio ? y.slideTo(v + y.params.slidesPerGroup) : y.slideTo(v)), "prev" === y.swipeDirection && (M > 1 - y.params.longSwipesRatio ? y.slideTo(v + y.params.slidesPerGroup) : y.slideTo(v))
                                } else {
                                    if (!y.params.shortSwipes) return void y.slideTo(y.activeIndex);
                                    "next" === y.swipeDirection && y.slideTo(v + y.params.slidesPerGroup), "prev" === y.swipeDirection && y.slideTo(v)
                                }
                            }
                        }, y._slideTo = function(e, t) {
                            return y.slideTo(e, t, !0, !0)
                        }, y.slideTo = function(e, t, i, n) {
                            "undefined" == typeof i && (i = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), y.snapIndex = Math.floor(e / y.params.slidesPerGroup), y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);
                            var o = -y.snapGrid[y.snapIndex];
                            y.params.autoplay && y.autoplaying && (n || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(t) : y.stopAutoplay()), y.updateProgress(o);
                            for (var r = 0; r < y.slidesGrid.length; r++) - Math.floor(100 * o) >= Math.floor(100 * y.slidesGrid[r]) && (e = r);
                            return !y.params.allowSwipeToNext && o < y.translate && o < y.minTranslate() ? !1 : !y.params.allowSwipeToPrev && o > y.translate && o > y.maxTranslate() && (y.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = y.params.speed), y.previousIndex = y.activeIndex || 0, y.activeIndex = e, y.rtl && -o === y.translate || !y.rtl && o === y.translate ? (y.params.autoHeight && y.updateAutoHeight(), y.updateClasses(), "slide" !== y.params.effect && y.setWrapperTranslate(o), !1) : (y.updateClasses(), y.onTransitionStart(i), 0 === t ? (y.setWrapperTranslate(o), y.setWrapperTransition(0), y.onTransitionEnd(i)) : (y.setWrapperTranslate(o), y.setWrapperTransition(t), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function() {
                                y && y.onTransitionEnd(i)
                            }))), !0))
                        }, y.onTransitionStart = function(e) {
                            "undefined" == typeof e && (e = !0), y.params.autoHeight && y.updateAutoHeight(), y.lazy && y.lazy.onTransitionStart(), e && (y.emit("onTransitionStart", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeStart", y), y.activeIndex > y.previousIndex ? y.emit("onSlideNextStart", y) : y.emit("onSlidePrevStart", y)))
                        }, y.onTransitionEnd = function(e) {
                            y.animating = !1, y.setWrapperTransition(0), "undefined" == typeof e && (e = !0), y.lazy && y.lazy.onTransitionEnd(), e && (y.emit("onTransitionEnd", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeEnd", y), y.activeIndex > y.previousIndex ? y.emit("onSlideNextEnd", y) : y.emit("onSlidePrevEnd", y))), y.params.hashnav && y.hashnav && y.hashnav.setHash()
                        }, y.slideNext = function(e, t, i) {
                            return y.params.loop ? y.animating ? !1 : (y.fixLoop(), y.container[0].clientLeft, y.slideTo(y.activeIndex + y.params.slidesPerGroup, t, e, i)) : y.slideTo(y.activeIndex + y.params.slidesPerGroup, t, e, i)
                        }, y._slideNext = function(e) {
                            return y.slideNext(!0, e, !0)
                        }, y.slidePrev = function(e, t, i) {
                            return y.params.loop ? y.animating ? !1 : (y.fixLoop(), y.container[0].clientLeft, y.slideTo(y.activeIndex - 1, t, e, i)) : y.slideTo(y.activeIndex - 1, t, e, i)
                        }, y._slidePrev = function(e) {
                            return y.slidePrev(!0, e, !0)
                        }, y.slideReset = function(e, t, i) {
                            return y.slideTo(y.activeIndex, t, e)
                        }, y.setWrapperTransition = function(e, t) {
                            y.wrapper.transition(e), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(e), y.params.parallax && y.parallax && y.parallax.setTransition(e), y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(e), y.params.control && y.controller && y.controller.setTransition(e, t), y.emit("onSetTransition", y, e)
                        }, y.setWrapperTranslate = function(e, t, i) {
                            var n = 0,
                                r = 0,
                                a = 0;
                            y.isHorizontal() ? n = y.rtl ? -e : e : r = e, y.params.roundLengths && (n = o(n), r = o(r)), y.params.virtualTranslate || (y.support.transforms3d ? y.wrapper.transform("translate3d(" + n + "px, " + r + "px, " + a + "px)") : y.wrapper.transform("translate(" + n + "px, " + r + "px)")), y.translate = y.isHorizontal() ? n : r;
                            var s, l = y.maxTranslate() - y.minTranslate();
                            s = 0 === l ? 0 : (e - y.minTranslate()) / l, s !== y.progress && y.updateProgress(e), t && y.updateActiveIndex(), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate), y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate), y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate), y.params.control && y.controller && y.controller.setTranslate(y.translate, i), y.emit("onSetTranslate", y, y.translate)
                        }, y.getTranslate = function(e, t) {
                            var i, n, o, r;
                            return "undefined" == typeof t && (t = "x"), y.params.virtualTranslate ? y.rtl ? -y.translate : y.translate : (o = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function(e) {
                                return e.replace(",", ".")
                            }).join(", ")), r = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (n = window.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), y.rtl && n && (n = -n), n || 0)
                        }, y.getWrapperTranslate = function(e) {
                            return "undefined" == typeof e && (e = y.isHorizontal() ? "x" : "y"), y.getTranslate(y.wrapper[0], e)
                        }, y.observers = [], y.initObservers = function() {
                            if (y.params.observeParents)
                                for (var e = y.container.parents(), t = 0; t < e.length; t++) s(e[t]);
                            s(y.container[0], {
                                childList: !1
                            }), s(y.wrapper[0], {
                                attributes: !1
                            })
                        }, y.disconnectObservers = function() {
                            for (var e = 0; e < y.observers.length; e++) y.observers[e].disconnect();
                            y.observers = []
                        }, y.createLoop = function() {
                            y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove();
                            var t = y.wrapper.children("." + y.params.slideClass);
                            "auto" !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = t.length), y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10), y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides, y.loopedSlides > t.length && (y.loopedSlides = t.length);
                            var i, n = [],
                                o = [];
                            for (t.each(function(i, r) {
                                    var a = e(this);
                                    i < y.loopedSlides && o.push(r), i < t.length && i >= t.length - y.loopedSlides && n.push(r), a.attr("data-swiper-slide-index", i)
                                }), i = 0; i < o.length; i++) y.wrapper.append(e(o[i].cloneNode(!0)).addClass(y.params.slideDuplicateClass));
                            for (i = n.length - 1; i >= 0; i--) y.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(y.params.slideDuplicateClass))
                        }, y.destroyLoop = function() {
                            y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove(), y.slides.removeAttr("data-swiper-slide-index")
                        }, y.fixLoop = function() {
                            var e;
                            y.activeIndex < y.loopedSlides ? (e = y.slides.length - 3 * y.loopedSlides + y.activeIndex, e += y.loopedSlides, y.slideTo(e, 0, !1, !0)) : ("auto" === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (e = -y.slides.length + y.activeIndex + y.loopedSlides, e += y.loopedSlides, y.slideTo(e, 0, !1, !0))
                        }, y.appendSlide = function(e) {
                            if (y.params.loop && y.destroyLoop(), "object" == typeof e && e.length)
                                for (var t = 0; t < e.length; t++) e[t] && y.wrapper.append(e[t]);
                            else y.wrapper.append(e);
                            y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0)
                        }, y.prependSlide = function(e) {
                            y.params.loop && y.destroyLoop();
                            var t = y.activeIndex + 1;
                            if ("object" == typeof e && e.length) {
                                for (var i = 0; i < e.length; i++) e[i] && y.wrapper.prepend(e[i]);
                                t = y.activeIndex + e.length
                            } else y.wrapper.prepend(e);
                            y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.slideTo(t, 0, !1)
                        }, y.removeSlide = function(e) {
                            y.params.loop && (y.destroyLoop(), y.slides = y.wrapper.children("." + y.params.slideClass));
                            var t, i = y.activeIndex;
                            if ("object" == typeof e && e.length) {
                                for (var n = 0; n < e.length; n++) t = e[n], y.slides[t] && y.slides.eq(t).remove(), i > t && i--;
                                i = Math.max(i, 0)
                            } else t = e, y.slides[t] && y.slides.eq(t).remove(), i > t && i--, i = Math.max(i, 0);
                            y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.params.loop ? y.slideTo(i + y.loopedSlides, 0, !1) : y.slideTo(i, 0, !1)
                        }, y.removeAllSlides = function() {
                            for (var e = [], t = 0; t < y.slides.length; t++) e.push(t);
                            y.removeSlide(e)
                        }, y.effects = {
                            fade: {
                                setTranslate: function() {
                                    for (var e = 0; e < y.slides.length; e++) {
                                        var t = y.slides.eq(e),
                                            i = t[0].swiperSlideOffset,
                                            n = -i;
                                        y.params.virtualTranslate || (n -= y.translate);
                                        var o = 0;
                                        y.isHorizontal() || (o = n, n = 0);
                                        var r = y.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                        t.css({
                                            opacity: r
                                        }).transform("translate3d(" + n + "px, " + o + "px, 0px)")
                                    }
                                },
                                setTransition: function(e) {
                                    if (y.slides.transition(e), y.params.virtualTranslate && 0 !== e) {
                                        var t = !1;
                                        y.slides.transitionEnd(function() {
                                            if (!t && y) {
                                                t = !0, y.animating = !1;
                                                for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) y.wrapper.trigger(e[i])
                                            }
                                        })
                                    }
                                }
                            },
                            flip: {
                                setTranslate: function() {
                                    for (var t = 0; t < y.slides.length; t++) {
                                        var i = y.slides.eq(t),
                                            n = i[0].progress;
                                        y.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                        var o = i[0].swiperSlideOffset,
                                            r = -180 * n,
                                            a = r,
                                            s = 0,
                                            l = -o,
                                            p = 0;
                                        if (y.isHorizontal() ? y.rtl && (a = -a) : (p = l, l = 0, s = -a, a = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + y.slides.length, y.params.flip.slideShadows) {
                                            var d = y.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                                u = y.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                            0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), i.append(d)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(u)), d.length && (d[0].style.opacity = Math.max(-n, 0)), u.length && (u[0].style.opacity = Math.max(n, 0))
                                        }
                                        i.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + s + "deg) rotateY(" + a + "deg)")
                                    }
                                },
                                setTransition: function(t) {
                                    if (y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), y.params.virtualTranslate && 0 !== t) {
                                        var i = !1;
                                        y.slides.eq(y.activeIndex).transitionEnd(function() {
                                            if (!i && y && e(this).hasClass(y.params.slideActiveClass)) {
                                                i = !0, y.animating = !1;
                                                for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) y.wrapper.trigger(t[n])
                                            }
                                        })
                                    }
                                }
                            },
                            cube: {
                                setTranslate: function() {
                                    var t, i = 0;
                                    y.params.cube.shadow && (y.isHorizontal() ? (t = y.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), y.wrapper.append(t)), t.css({
                                        height: y.width + "px"
                                    })) : (t = y.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), y.container.append(t))));
                                    for (var n = 0; n < y.slides.length; n++) {
                                        var o = y.slides.eq(n),
                                            r = 90 * n,
                                            a = Math.floor(r / 360);
                                        y.rtl && (r = -r, a = Math.floor(-r / 360));
                                        var s = Math.max(Math.min(o[0].progress, 1), -1),
                                            l = 0,
                                            p = 0,
                                            d = 0;
                                        n % 4 === 0 ? (l = 4 * -a * y.size, d = 0) : (n - 1) % 4 === 0 ? (l = 0, d = 4 * -a * y.size) : (n - 2) % 4 === 0 ? (l = y.size + 4 * a * y.size, d = y.size) : (n - 3) % 4 === 0 && (l = -y.size, d = 3 * y.size + 4 * y.size * a), y.rtl && (l = -l), y.isHorizontal() || (p = l, l = 0);
                                        var u = "rotateX(" + (y.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (y.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                        if (1 >= s && s > -1 && (i = 90 * n + 90 * s, y.rtl && (i = 90 * -n - 90 * s)), o.transform(u), y.params.cube.slideShadows) {
                                            var c = y.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                                f = y.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                            0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), o.append(c)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(f)), c.length && (c[0].style.opacity = Math.max(-s, 0)), f.length && (f[0].style.opacity = Math.max(s, 0))
                                        }
                                    }
                                    if (y.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -" + y.size / 2 + "px",
                                            "-moz-transform-origin": "50% 50% -" + y.size / 2 + "px",
                                            "-ms-transform-origin": "50% 50% -" + y.size / 2 + "px",
                                            "transform-origin": "50% 50% -" + y.size / 2 + "px"
                                        }), y.params.cube.shadow)
                                        if (y.isHorizontal()) t.transform("translate3d(0px, " + (y.width / 2 + y.params.cube.shadowOffset) + "px, " + -y.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + y.params.cube.shadowScale + ")");
                                        else {
                                            var h = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                                A = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                                g = y.params.cube.shadowScale,
                                                m = y.params.cube.shadowScale / A,
                                                v = y.params.cube.shadowOffset;
                                            t.transform("scale3d(" + g + ", 1, " + m + ") translate3d(0px, " + (y.height / 2 + v) + "px, " + -y.height / 2 / m + "px) rotateX(-90deg)")
                                        }
                                    var w = y.isSafari || y.isUiWebView ? -y.size / 2 : 0;
                                    y.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (y.isHorizontal() ? 0 : i) + "deg) rotateY(" + (y.isHorizontal() ? -i : 0) + "deg)")
                                },
                                setTransition: function(e) {
                                    y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), y.params.cube.shadow && !y.isHorizontal() && y.container.find(".swiper-cube-shadow").transition(e)
                                }
                            },
                            coverflow: {
                                setTranslate: function() {
                                    for (var t = y.translate, i = y.isHorizontal() ? -t + y.width / 2 : -t + y.height / 2, n = y.isHorizontal() ? y.params.coverflow.rotate : -y.params.coverflow.rotate, o = y.params.coverflow.depth, r = 0, a = y.slides.length; a > r; r++) {
                                        var s = y.slides.eq(r),
                                            l = y.slidesSizesGrid[r],
                                            p = s[0].swiperSlideOffset,
                                            d = (i - p - l / 2) / l * y.params.coverflow.modifier,
                                            u = y.isHorizontal() ? n * d : 0,
                                            c = y.isHorizontal() ? 0 : n * d,
                                            f = -o * Math.abs(d),
                                            h = y.isHorizontal() ? 0 : y.params.coverflow.stretch * d,
                                            A = y.isHorizontal() ? y.params.coverflow.stretch * d : 0;
                                        Math.abs(A) < .001 && (A = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
                                        var g = "translate3d(" + A + "px," + h + "px," + f + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                                        if (s.transform(g), s[0].style.zIndex = -Math.abs(Math.round(d)) + 1, y.params.coverflow.slideShadows) {
                                            var m = y.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                                v = y.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                            0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), s.append(m)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(v)), m.length && (m[0].style.opacity = d > 0 ? d : 0), v.length && (v[0].style.opacity = -d > 0 ? -d : 0)
                                        }
                                    }
                                    if (y.browser.ie) {
                                        var w = y.wrapper[0].style;
                                        w.perspectiveOrigin = i + "px 50%"
                                    }
                                },
                                setTransition: function(e) {
                                    y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                                }
                            }
                        }, y.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function(t, i) {
                                if ("undefined" != typeof t && ("undefined" == typeof i && (i = !0), 0 !== y.slides.length)) {
                                    var n = y.slides.eq(t),
                                        o = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                    !n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || (o = o.add(n[0])), 0 !== o.length && o.each(function() {
                                        var t = e(this);
                                        t.addClass("swiper-lazy-loading");
                                        var o = t.attr("data-background"),
                                            r = t.attr("data-src"),
                                            a = t.attr("data-srcset");
                                        y.loadImage(t[0], r || o, a, !1, function() {
                                            if (o ? (t.css("background-image", "url(" + o + ")"), t.removeAttr("data-background")) : (a && (t.attr("srcset", a), t.removeAttr("data-srcset")), r && (t.attr("src", r), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), n.find(".swiper-lazy-preloader, .preloader").remove(), y.params.loop && i) {
                                                var e = n.attr("data-swiper-slide-index");
                                                if (n.hasClass(y.params.slideDuplicateClass)) {
                                                    var s = y.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + y.params.slideDuplicateClass + ")");
                                                    y.lazy.loadImageInSlide(s.index(), !1)
                                                } else {
                                                    var l = y.wrapper.children("." + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    y.lazy.loadImageInSlide(l.index(), !1)
                                                }
                                            }
                                            y.emit("onLazyImageReady", y, n[0], t[0])
                                        }), y.emit("onLazyImageLoad", y, n[0], t[0])
                                    })
                                }
                            },
                            load: function() {
                                var t;
                                if (y.params.watchSlidesVisibility) y.wrapper.children("." + y.params.slideVisibleClass).each(function() {
                                    y.lazy.loadImageInSlide(e(this).index())
                                });
                                else if (y.params.slidesPerView > 1)
                                    for (t = y.activeIndex; t < y.activeIndex + y.params.slidesPerView; t++) y.slides[t] && y.lazy.loadImageInSlide(t);
                                else y.lazy.loadImageInSlide(y.activeIndex);
                                if (y.params.lazyLoadingInPrevNext)
                                    if (y.params.slidesPerView > 1 || y.params.lazyLoadingInPrevNextAmount && y.params.lazyLoadingInPrevNextAmount > 1) {
                                        var i = y.params.lazyLoadingInPrevNextAmount,
                                            n = y.params.slidesPerView,
                                            o = Math.min(y.activeIndex + n + Math.max(i, n), y.slides.length),
                                            r = Math.max(y.activeIndex - Math.max(n, i), 0);
                                        for (t = y.activeIndex + y.params.slidesPerView; o > t; t++) y.slides[t] && y.lazy.loadImageInSlide(t);
                                        for (t = r; t < y.activeIndex; t++) y.slides[t] && y.lazy.loadImageInSlide(t)
                                    } else {
                                        var a = y.wrapper.children("." + y.params.slideNextClass);
                                        a.length > 0 && y.lazy.loadImageInSlide(a.index());
                                        var s = y.wrapper.children("." + y.params.slidePrevClass);
                                        s.length > 0 && y.lazy.loadImageInSlide(s.index())
                                    }
                            },
                            onTransitionStart: function() {
                                y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load()
                            },
                            onTransitionEnd: function() {
                                y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load()
                            }
                        }, y.scrollbar = {
                            isTouched: !1,
                            setDragPosition: function(e) {
                                var t = y.scrollbar,
                                    i = y.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                                    n = i - t.track.offset()[y.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                    o = -y.minTranslate() * t.moveDivider,
                                    r = -y.maxTranslate() * t.moveDivider;
                                o > n ? n = o : n > r && (n = r), n = -n / t.moveDivider, y.updateProgress(n), y.setWrapperTranslate(n, !0)
                            },
                            dragStart: function(e) {
                                var t = y.scrollbar;
                                t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), y.params.scrollbarHide && t.track.css("opacity", 1), y.wrapper.transition(100), t.drag.transition(100), y.emit("onScrollbarDragStart", y)
                            },
                            dragMove: function(e) {
                                var t = y.scrollbar;
                                t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), y.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), y.emit("onScrollbarDragMove", y))
                            },
                            dragEnd: function(e) {
                                var t = y.scrollbar;
                                t.isTouched && (t.isTouched = !1, y.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                    t.track.css("opacity", 0), t.track.transition(400)
                                }, 1e3)), y.emit("onScrollbarDragEnd", y), y.params.scrollbarSnapOnRelease && y.slideReset())
                            },
                            enableDraggable: function() {
                                var t = y.scrollbar,
                                    i = y.support.touch ? t.track : document;
                                e(t.track).on(y.touchEvents.start, t.dragStart), e(i).on(y.touchEvents.move, t.dragMove), e(i).on(y.touchEvents.end, t.dragEnd)
                            },
                            disableDraggable: function() {
                                var t = y.scrollbar,
                                    i = y.support.touch ? t.track : document;
                                e(t.track).off(y.touchEvents.start, t.dragStart), e(i).off(y.touchEvents.move, t.dragMove), e(i).off(y.touchEvents.end, t.dragEnd)
                            },
                            set: function() {
                                if (y.params.scrollbar) {
                                    var t = y.scrollbar;
                                    t.track = e(y.params.scrollbar), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = y.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = y.size / y.virtualSize, t.moveDivider = t.divider * (t.trackSize / y.size), t.dragSize = t.trackSize * t.divider, y.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", y.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                }
                            },
                            setTranslate: function() {
                                if (y.params.scrollbar) {
                                    var e, t = y.scrollbar,
                                        i = (y.translate || 0, t.dragSize);
                                    e = (t.trackSize - t.dragSize) * y.progress, y.rtl && y.isHorizontal() ? (e = -e, e > 0 ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e)) : 0 > e ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), y.isHorizontal() ? (y.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (y.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), y.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                        t.track[0].style.opacity = 0, t.track.transition(400)
                                    }, 1e3))
                                }
                            },
                            setTransition: function(e) {
                                y.params.scrollbar && y.scrollbar.drag.transition(e)
                            }
                        }, y.controller = {
                            LinearSpline: function(e, t) {
                                this.x = e, this.y = t, this.lastIndex = e.length - 1;
                                var i, n;
                                this.x.length, this.interpolate = function(e) {
                                    return e ? (n = o(this.x, e), i = n - 1, (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                                };
                                var o = function() {
                                    var e, t, i;
                                    return function(n, o) {
                                        for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= o ? t = i : e = i;
                                        return e
                                    }
                                }()
                            },
                            getInterpolateFunction: function(e) {
                                y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid, e.slidesGrid) : new y.controller.LinearSpline(y.snapGrid, e.snapGrid))
                            },
                            setTranslate: function(e, t) {
                                function n(t) {
                                    e = t.rtl && "horizontal" === t.params.direction ? -y.translate : y.translate, "slide" === y.params.controlBy && (y.controller.getInterpolateFunction(t), r = -y.controller.spline.interpolate(-e)), r && "container" !== y.params.controlBy || (o = (t.maxTranslate() - t.minTranslate()) / (y.maxTranslate() - y.minTranslate()), r = (e - y.minTranslate()) * o + t.minTranslate()), y.params.controlInverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setWrapperTranslate(r, !1, y), t.updateActiveIndex()
                                }
                                var o, r, a = y.params.control;
                                if (y.isArray(a))
                                    for (var s = 0; s < a.length; s++) a[s] !== t && a[s] instanceof i && n(a[s]);
                                else a instanceof i && t !== a && n(a)
                            },
                            setTransition: function(e, t) {
                                function n(t) {
                                    t.setWrapperTransition(e, y), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                        r && (t.params.loop && "slide" === y.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                                    }))
                                }
                                var o, r = y.params.control;
                                if (y.isArray(r))
                                    for (o = 0; o < r.length; o++) r[o] !== t && r[o] instanceof i && n(r[o]);
                                else r instanceof i && t !== r && n(r)
                            }
                        }, y.hashnav = {
                            init: function() {
                                if (y.params.hashnav) {
                                    y.hashnav.initialized = !0;
                                    var e = document.location.hash.replace("#", "");
                                    if (e)
                                        for (var t = 0, i = 0, n = y.slides.length; n > i; i++) {
                                            var o = y.slides.eq(i),
                                                r = o.attr("data-hash");
                                            if (r === e && !o.hasClass(y.params.slideDuplicateClass)) {
                                                var a = o.index();
                                                y.slideTo(a, t, y.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                }
                            },
                            setHash: function() {
                                y.hashnav.initialized && y.params.hashnav && (document.location.hash = y.slides.eq(y.activeIndex).attr("data-hash") || "")
                            }
                        }, y.disableKeyboardControl = function() {
                            y.params.keyboardControl = !1, e(document).off("keydown", l)
                        }, y.enableKeyboardControl = function() {
                            y.params.keyboardControl = !0, e(document).on("keydown", l)
                        }, y.mousewheel = {
                            event: !1,
                            lastScrollTime: (new window.Date).getTime()
                        }, y.params.mousewheelControl) {
                        try {
                            new window.WheelEvent("wheel"), y.mousewheel.event = "wheel"
                        } catch (P) {}
                        y.mousewheel.event || void 0 === document.onmousewheel || (y.mousewheel.event = "mousewheel"), y.mousewheel.event || (y.mousewheel.event = "DOMMouseScroll")
                    }
                    y.disableMousewheelControl = function() {
                        return y.mousewheel.event ? (y.container.off(y.mousewheel.event, p), !0) : !1
                    }, y.enableMousewheelControl = function() {
                        return y.mousewheel.event ? (y.container.on(y.mousewheel.event, p), !0) : !1
                    }, y.parallax = {
                        setTranslate: function() {
                            y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                d(this, y.progress)
                            }), y.slides.each(function() {
                                var t = e(this);
                                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var e = Math.min(Math.max(t[0].progress, -1), 1);
                                    d(this, e)
                                })
                            })
                        },
                        setTransition: function(t) {
                            "undefined" == typeof t && (t = y.params.speed), y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var i = e(this),
                                    n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                                0 === t && (n = 0), i.transition(n)
                            })
                        }
                    }, y._plugins = [];
                    for (var H in y.plugins) {
                        var O = y.plugins[H](y, y.params[H]);
                        O && y._plugins.push(O)
                    }
                    return y.callPlugins = function(e) {
                        for (var t = 0; t < y._plugins.length; t++) e in y._plugins[t] && y._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, y.emitterEventListeners = {}, y.emit = function(e) {
                        y.params[e] && y.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var t;
                        if (y.emitterEventListeners[e])
                            for (t = 0; t < y.emitterEventListeners[e].length; t++) y.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        y.callPlugins && y.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, y.on = function(e, t) {
                        return e = u(e), y.emitterEventListeners[e] || (y.emitterEventListeners[e] = []), y.emitterEventListeners[e].push(t), y
                    }, y.off = function(e, t) {
                        var i;
                        if (e = u(e), "undefined" == typeof t) return y.emitterEventListeners[e] = [], y;
                        if (y.emitterEventListeners[e] && 0 !== y.emitterEventListeners[e].length) {
                            for (i = 0; i < y.emitterEventListeners[e].length; i++) y.emitterEventListeners[e][i] === t && y.emitterEventListeners[e].splice(i, 1);
                            return y
                        }
                    }, y.once = function(e, t) {
                        e = u(e);
                        var i = function() {
                            t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), y.off(e, i)
                        };
                        return y.on(e, i), y
                    }, y.a11y = {
                        makeFocusable: function(e) {
                            return e.attr("tabIndex", "0"), e
                        },
                        addRole: function(e, t) {
                            return e.attr("role", t), e
                        },
                        addLabel: function(e, t) {
                            return e.attr("aria-label", t), e
                        },
                        disable: function(e) {
                            return e.attr("aria-disabled", !0), e
                        },
                        enable: function(e) {
                            return e.attr("aria-disabled", !1), e
                        },
                        onEnterKey: function(t) {
                            13 === t.keyCode && (e(t.target).is(y.params.nextButton) ? (y.onClickNext(t), y.isEnd ? y.a11y.notify(y.params.lastSlideMessage) : y.a11y.notify(y.params.nextSlideMessage)) : e(t.target).is(y.params.prevButton) && (y.onClickPrev(t), y.isBeginning ? y.a11y.notify(y.params.firstSlideMessage) : y.a11y.notify(y.params.prevSlideMessage)), e(t.target).is("." + y.params.bulletClass) && e(t.target)[0].click())
                        },
                        liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function(e) {
                            var t = y.a11y.liveRegion;
                            0 !== t.length && (t.html(""), t.html(e))
                        },
                        init: function() {
                            if (y.params.nextButton) {
                                var t = e(y.params.nextButton);
                                y.a11y.makeFocusable(t), y.a11y.addRole(t, "button"), y.a11y.addLabel(t, y.params.nextSlideMessage)
                            }
                            if (y.params.prevButton) {
                                var i = e(y.params.prevButton);
                                y.a11y.makeFocusable(i), y.a11y.addRole(i, "button"), y.a11y.addLabel(i, y.params.prevSlideMessage)
                            }
                            e(y.container).append(y.a11y.liveRegion)
                        },
                        initPagination: function() {
                            y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function() {
                                var t = e(this);
                                y.a11y.makeFocusable(t), y.a11y.addRole(t, "button"), y.a11y.addLabel(t, y.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                            })
                        },
                        destroy: function() {
                            y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove()
                        }
                    }, y.init = function() {
                        y.params.loop && y.createLoop(), y.updateContainerSize(), y.updateSlidesSize(), y.updatePagination(), y.params.scrollbar && y.scrollbar && (y.scrollbar.set(), y.params.scrollbarDraggable && y.scrollbar.enableDraggable()), "slide" !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(), y.effects[y.params.effect].setTranslate()), y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit) : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit), 0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(), y.lazy && y.params.lazyLoading && (y.lazy.load(), y.lazy.initialImageLoaded = !0))), y.attachEvents(), y.params.observer && y.support.observer && y.initObservers(), y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(), y.params.autoplay && y.startAutoplay(), y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(), y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(), y.params.hashnav && y.hashnav && y.hashnav.init(), y.params.a11y && y.a11y && y.a11y.init(), y.emit("onInit", y)
                    }, y.cleanupStyles = function() {
                        y.container.removeClass(y.classNames.join(" ")).removeAttr("style"), y.wrapper.removeAttr("style"), y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass, y.params.slideActiveClass, y.params.slideNextClass, y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass), y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass), y.params.prevButton && e(y.params.prevButton).removeClass(y.params.buttonDisabledClass), y.params.nextButton && e(y.params.nextButton).removeClass(y.params.buttonDisabledClass), y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr("style"), y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr("style"))
                    }, y.destroy = function(e, t) {
                        y.detachEvents(), y.stopAutoplay(), y.params.scrollbar && y.scrollbar && y.params.scrollbarDraggable && y.scrollbar.disableDraggable(), y.params.loop && y.destroyLoop(), t && y.cleanupStyles(), y.disconnectObservers(), y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(), y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(), y.params.a11y && y.a11y && y.a11y.destroy(), y.emit("onDestroy"), e !== !1 && (y = null)
                    }, y.init(), y
                }
            };
            i.prototype = {
                isSafari: function() {
                    var e = navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                browser: {
                    ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                    ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
                },
                device: function() {
                    var e = navigator.userAgent,
                        t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                        i = e.match(/(iPad).*OS\s([\d_]+)/),
                        n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                        o = !i && e.match(/(iPhone\sOS)\s([\d_]+)/);
                    return {
                        ios: i || o || n,
                        android: t
                    }
                }(),
                support: {
                    touch: window.Modernizr && Modernizr.touch === !0 || function() {
                        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                    }(),
                    transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                        var e = document.createElement("div").style;
                        return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                    }(),
                    flexbox: function() {
                        for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                            if (t[i] in e) return !0
                    }(),
                    observer: function() {
                        return "MutationObserver" in window || "WebkitMutationObserver" in window
                    }()
                },
                plugins: {}
            }, t(e);
            var n = e;
            return n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function(e) {
                    function t(r) {
                        if (r.target === this)
                            for (e.call(this, r), i = 0; i < n.length; i++) o.off(n[i], t)
                    }
                    var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        o = this;
                    if (e)
                        for (i = 0; i < n.length; i++) o.on(n[i], t);
                    return this
                }), "transform" in n.fn || (n.fn.transform = function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var i = this[t].style;
                        i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                    }
                    return this
                }), "transition" in n.fn || (n.fn.transition = function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var i = this[t].style;
                        i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                    }
                    return this
                })),
                i
        })
    }, {
        "./../../../jquery/dist/jquery.js": 2
    }],
    4: [function(e, t, i) {
        "use strict";
        t.exports = ".swiper-slide,.swiper-wrapper{width:100%;height:100%;position:relative}.swiper-container{margin:0 auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E');left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E')}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E')}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E');right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E')}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E')}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.yottie,.yottie div,.yottie li,.yottie ul{border-top:none;border-right:none;border-bottom:none;border-left:none;display:block;margin:0;padding:0}.yottie img{display:block;max-width:none;min-width:auto;max-height:none;min-height:auto}.yottie a{text-decoration:none;transition:all .2s ease}.yottie span{margin:0;padding:0}.yottie-icon{font:400 100%/1 Iconsfont}.yottie-icon,.yottie-icon+*{display:inline-block;vertical-align:middle}.yottie{-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;font-family:Roboto,Arail,sans-serif}.yottie .adsbygoogle{display:inline-block}@font-face{font-family:Iconsfont;src:url(data:application/vnd.ms-fontobject;base64,MAcAAIwGAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAszyaFAAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxID5wAAALwAAABgY21hcBlVzo4AAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmIoGCyAAAAXgAAAKwaGVhZAgMgTwAAAQoAAAANmhoZWEHlwPLAAAEYAAAACRobXR4HgABgQAABIQAAAAobG9jYQLmAkgAAASsAAAAFm1heHAADgA5AAAExAAAACBuYW1lmUoJ+wAABOQAAAGGcG9zdAADAAAAAAZsAAAAIAADA7cBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOcGA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDnBv/9//8AAAAAACDnAf/9//8AAf/jGQMAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAcgAyA44DTgAMABoAAAEyNjU0JiMiBhUUFjMVIg4CHQEhNTQuAiMCAEdjY0dHZGRHMol8VwMcV3yJMgH5ZEdGZGRGR2RyGTJKMo6OMkoyGQAAAAMAVQAVA6sDawAJABoAHgAAEyMRFBYzITUhESUhIgYVERQWMyEyNjURNCYjARENAatWMiQCVf2rAqr+ACMyMiMCACQyMiT+qwEA/wACwP2rJDJWAlWrMiT+ACMyMiMCACQy/eoBgMDAAAAAAAMAKwCAA9UDAAAUACkANgAAASIOAgceAzMyPgI3LgMjESIuAjU0PgIzMh4CFRQOAiMRIgYVFBYzMjY1NCYjAgBQknpeGxteepJQUJJ6XhsbXnqSUCxOOiEhOk4sLE46ISE6Tiw1S0s1NUtLNQMAL1V2RkZ2VS8vVXZGRnZVL/3rITpOLCxOOiEhOk4sLE46IQFVSzU1S0s1NUsAAAEAOf/AA8cDTgAOAAABNCYjISIGFREUFjMhFxEDx1pR/chMX288AhzHAqRIYlpQ/nFRWasC5AAAAgAr/+sD1QNAAB0AIgAAASEiBgcDDgEdAxQWMyEPARQWHwEBPgE1ETQmIzMRMxEjAoD+gBsqCoADAzIjAQ0oAgsILQEaCw0yI6uqqgNAHRf+0wcQCFEBAyQyww0NGAksARkLHxIBqyMy/gACAAAAAAIAKwBAA9UDlQAEACIAADczESMRATQmIyE/ATQmLwEBDgEVERQWMyEyNjcTPgE9AyuqqgOqMiP+8ygCCwgt/ucMDTIjAYAbKgqAAwNAAgD+AAHVJDLDDQ0YCSz+5wsfEv5VIzIdFwEtBxAIUQEDAAABAAAAAAAAFJo8s18PPPUACwQAAAAAANKMnnUAAAAA0oyedQAA/8AD1QOVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAPVAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAHIEAABVBAAAKwQAADkEAAArBAAAKwAAAAAACgAUAB4ASAB+AMwA6AEgAVgAAAABAAAACgA3AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==);src:url(data:application/vnd.ms-fontobject;base64,MAcAAIwGAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAszyaFAAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxID5wAAALwAAABgY21hcBlVzo4AAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmIoGCyAAAAXgAAAKwaGVhZAgMgTwAAAQoAAAANmhoZWEHlwPLAAAEYAAAACRobXR4HgABgQAABIQAAAAobG9jYQLmAkgAAASsAAAAFm1heHAADgA5AAAExAAAACBuYW1lmUoJ+wAABOQAAAGGcG9zdAADAAAAAAZsAAAAIAADA7cBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOcGA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDnBv/9//8AAAAAACDnAf/9//8AAf/jGQMAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAcgAyA44DTgAMABoAAAEyNjU0JiMiBhUUFjMVIg4CHQEhNTQuAiMCAEdjY0dHZGRHMol8VwMcV3yJMgH5ZEdGZGRGR2RyGTJKMo6OMkoyGQAAAAMAVQAVA6sDawAJABoAHgAAEyMRFBYzITUhESUhIgYVERQWMyEyNjURNCYjARENAatWMiQCVf2rAqr+ACMyMiMCACQyMiT+qwEA/wACwP2rJDJWAlWrMiT+ACMyMiMCACQy/eoBgMDAAAAAAAMAKwCAA9UDAAAUACkANgAAASIOAgceAzMyPgI3LgMjESIuAjU0PgIzMh4CFRQOAiMRIgYVFBYzMjY1NCYjAgBQknpeGxteepJQUJJ6XhsbXnqSUCxOOiEhOk4sLE46ISE6Tiw1S0s1NUtLNQMAL1V2RkZ2VS8vVXZGRnZVL/3rITpOLCxOOiEhOk4sLE46IQFVSzU1S0s1NUsAAAEAOf/AA8cDTgAOAAABNCYjISIGFREUFjMhFxEDx1pR/chMX288AhzHAqRIYlpQ/nFRWasC5AAAAgAr/+sD1QNAAB0AIgAAASEiBgcDDgEdAxQWMyEPARQWHwEBPgE1ETQmIzMRMxEjAoD+gBsqCoADAzIjAQ0oAgsILQEaCw0yI6uqqgNAHRf+0wcQCFEBAyQyww0NGAksARkLHxIBqyMy/gACAAAAAAIAKwBAA9UDlQAEACIAADczESMRATQmIyE/ATQmLwEBDgEVERQWMyEyNjcTPgE9AyuqqgOqMiP+8ygCCwgt/ucMDTIjAYAbKgqAAwNAAgD+AAHVJDLDDQ0YCSz+5wsfEv5VIzIdFwEtBxAIUQEDAAABAAAAAAAAFJo8s18PPPUACwQAAAAAANKMnnUAAAAA0oyedQAA/8AD1QOVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAPVAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAHIEAABVBAAAKwQAADkEAAArBAAAKwAAAAAACgAUAB4ASAB+AMwA6AEgAVgAAAABAAAACgA3AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('embedded-opentype'),url(data:application/x-font-ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SA+cAAAC8AAAAYGNtYXAZVc6OAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZiKBgsgAAAF4AAACsGhlYWQIDIE8AAAEKAAAADZoaGVhB5cDywAABGAAAAAkaG10eB4AAYEAAASEAAAAKGxvY2EC5gJIAAAErAAAABZtYXhwAA4AOQAABMQAAAAgbmFtZZlKCfsAAATkAAABhnBvc3QAAwAAAAAGbAAAACAAAwO3AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADnBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg5wb//f//AAAAAAAg5wH//f//AAH/4xkDAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACAHIAMgOOA04ADAAaAAABMjY1NCYjIgYVFBYzFSIOAh0BITU0LgIjAgBHY2NHR2RkRzKJfFcDHFd8iTIB+WRHRmRkRkdkchkySjKOjjJKMhkAAAADAFUAFQOrA2sACQAaAB4AABMjERQWMyE1IRElISIGFREUFjMhMjY1ETQmIwERDQGrVjIkAlX9qwKq/gAjMjIjAgAkMjIk/qsBAP8AAsD9qyQyVgJVqzIk/gAjMjIjAgAkMv3qAYDAwAAAAAADACsAgAPVAwAAFAApADYAAAEiDgIHHgMzMj4CNy4DIxEiLgI1ND4CMzIeAhUUDgIjESIGFRQWMzI2NTQmIwIAUJJ6XhsbXnqSUFCSel4bG156klAsTjohITpOLCxOOiEhOk4sNUtLNTVLSzUDAC9VdkZGdlUvL1V2RkZ2VS/96yE6TiwsTjohITpOLCxOOiEBVUs1NUtLNTVLAAABADn/wAPHA04ADgAAATQmIyEiBhURFBYzIRcRA8daUf3ITF9vPAIcxwKkSGJaUP5xUVmrAuQAAAIAK//rA9UDQAAdACIAAAEhIgYHAw4BHQMUFjMhDwEUFh8BAT4BNRE0JiMzETMRIwKA/oAbKgqAAwMyIwENKAILCC0BGgsNMiOrqqoDQB0X/tMHEAhRAQMkMsMNDRgJLAEZCx8SAasjMv4AAgAAAAACACsAQAPVA5UABAAiAAA3MxEjEQE0JiMhPwE0Ji8BAQ4BFREUFjMhMjY3Ez4BPQMrqqoDqjIj/vMoAgsILf7nDA0yIwGAGyoKgAMDQAIA/gAB1SQyww0NGAks/ucLHxL+VSMyHRcBLQcQCFEBAwAAAQAAAAAAABSaPLNfDzz1AAsEAAAAAADSjJ51AAAAANKMnnUAAP/AA9UDlQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAD1QABAAAAAAAAAAAAAAAAAAAACgQAAAAAAAAAAAAAAAIAAAAEAAByBAAAVQQAACsEAAA5BAAAKwQAACsAAAAAAAoAFAAeAEgAfgDMAOgBIAFYAAAAAQAAAAoANwADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('truetype'),url(data:application/font-woff;base64,d09GRgABAAAAAAbYAAsAAAAABowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxID52NtYXAAAAFoAAAAVAAAAFQZVc6OZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAArAAAAKwIoGCyGhlYWQAAAR0AAAANgAAADYIDIE8aGhlYQAABKwAAAAkAAAAJAeXA8tobXR4AAAE0AAAACgAAAAoHgABgWxvY2EAAAT4AAAAFgAAABYC5gJIbWF4cAAABRAAAAAgAAAAIAAOADluYW1lAAAFMAAAAYYAAAGGmUoJ+3Bvc3QAAAa4AAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5wYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOcG//3//wAAAAAAIOcB//3//wAB/+MZAwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgByADIDjgNOAAwAGgAAATI2NTQmIyIGFRQWMxUiDgIdASE1NC4CIwIAR2NjR0dkZEcyiXxXAxxXfIkyAflkR0ZkZEZHZHIZMkoyjo4ySjIZAAAAAwBVABUDqwNrAAkAGgAeAAATIxEUFjMhNSERJSEiBhURFBYzITI2NRE0JiMBEQ0Bq1YyJAJV/asCqv4AIzIyIwIAJDIyJP6rAQD/AALA/askMlYCVasyJP4AIzIyIwIAJDL96gGAwMAAAAAAAwArAIAD1QMAABQAKQA2AAABIg4CBx4DMzI+AjcuAyMRIi4CNTQ+AjMyHgIVFA4CIxEiBhUUFjMyNjU0JiMCAFCSel4bG156klBQknpeGxteepJQLE46ISE6TiwsTjohITpOLDVLSzU1S0s1AwAvVXZGRnZVLy9VdkZGdlUv/eshOk4sLE46ISE6TiwsTjohAVVLNTVLSzU1SwAAAQA5/8ADxwNOAA4AAAE0JiMhIgYVERQWMyEXEQPHWlH9yExfbzwCHMcCpEhiWlD+cVFZqwLkAAACACv/6wPVA0AAHQAiAAABISIGBwMOAR0DFBYzIQ8BFBYfAQE+ATURNCYjMxEzESMCgP6AGyoKgAMDMiMBDSgCCwgtARoLDTIjq6qqA0AdF/7TBxAIUQEDJDLDDQ0YCSwBGQsfEgGrIzL+AAIAAAAAAgArAEAD1QOVAAQAIgAANzMRIxEBNCYjIT8BNCYvAQEOARURFBYzITI2NxM+AT0DK6qqA6oyI/7zKAILCC3+5wwNMiMBgBsqCoADA0ACAP4AAdUkMsMNDRgJLP7nCx8S/lUjMh0XAS0HEAhRAQMAAAEAAAAAAAAUmjyzXw889QALBAAAAAAA0oyedQAAAADSjJ51AAD/wAPVA5UAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA9UAAQAAAAAAAAAAAAAAAAAAAAoEAAAAAAAAAAAAAAACAAAABAAAcgQAAFUEAAArBAAAOQQAACsEAAArAAAAAAAKABQAHgBIAH4AzADoASABWAAAAAEAAAAKADcAAwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff'),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNzAxOyIgZ2x5cGgtbmFtZT0ic3Vic2NyaWJlcnMiIGQ9Ik01MTIgNTA0Ljg4OWM5NC40MzYgMCAxNzAuMDk4IDc2LjIzMSAxNzAuMDk4IDE3MC42NjdzLTc1LjY2MiAxNzAuNjY3LTE3MC4wOTggMTcwLjY2N2MtOTQuNDM2IDAtMTcwLjY2Ny03Ni4yMzEtMTcwLjY2Ny0xNzAuNjY3czc2LjIzMS0xNzAuNjY3IDE3MC42NjctMTcwLjY2N3pNNTEyIDM5MS4xMTFjLTEzMi41NTEgMC0zOTguMjIyLTY2LjU2LTM5OC4yMjItMTk5LjExMXYtMTQyLjIyMmg3OTYuNDQ0djE0Mi4yMjJjMCAxMzIuNTUxLTI2NS42NzEgMTk5LjExMS0zOTguMjIyIDE5OS4xMTF6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTcwMjsiIGdseXBoLW5hbWU9InZpZGVvcyIgZD0iTTE3MC42NjcgNzA0aC04NS4zMzN2LTU5Ny4zMzNjMC00Ni45MzMgMzguNC04NS4zMzMgODUuMzMzLTg1LjMzM2g1OTcuMzMzdjg1LjMzM2gtNTk3LjMzM3Y1OTcuMzMzek04NTMuMzMzIDg3NC42NjdoLTUxMmMtNDYuOTMzIDAtODUuMzMzLTM4LjQtODUuMzMzLTg1LjMzM3YtNTEyYzAtNDYuOTMzIDM4LjQtODUuMzMzIDg1LjMzMy04NS4zMzNoNTEyYzQ2LjkzMyAwIDg1LjMzMyAzOC40IDg1LjMzMyA4NS4zMzN2NTEyYzAgNDYuOTMzLTM4LjQgODUuMzMzLTg1LjMzMyA4NS4zMzN6TTUxMiAzNDEuMzMzdjM4NGwyNTYtMTkyLTI1Ni0xOTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTcwMzsiIGdseXBoLW5hbWU9InZpZXdzIiBkPSJNNTEyIDc2OGMtMjEzLjMzMyAwLTM5NS41Mi0xMzIuNjkzLTQ2OS4zMzMtMzIwIDczLjgxMy0xODcuMzA3IDI1Ni0zMjAgNDY5LjMzMy0zMjBzMzk1LjUyIDEzMi42OTMgNDY5LjMzMyAzMjBjLTczLjgxMyAxODcuMzA3LTI1NiAzMjAtNDY5LjMzMyAzMjB6TTUxMiAyMzQuNjY3Yy0xMTcuNzYgMC0yMTMuMzMzIDk1LjU3My0yMTMuMzMzIDIxMy4zMzNzOTUuNTczIDIxMy4zMzMgMjEzLjMzMyAyMTMuMzMzIDIxMy4zMzMtOTUuNTczIDIxMy4zMzMtMjEzLjMzMy05NS41NzMtMjEzLjMzMy0yMTMuMzMzLTIxMy4zMzN6TTUxMiA1NzZjLTcwLjgyNyAwLTEyOC01Ny4xNzMtMTI4LTEyOHM1Ny4xNzMtMTI4IDEyOC0xMjggMTI4IDU3LjE3MyAxMjggMTI4LTU3LjE3MyAxMjgtMTI4IDEyOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNzA0OyIgZ2x5cGgtbmFtZT0iY29tbWVudHMiIGQ9Ik05NjcuMTExIDY3NS41NTZjMCA5Ni4wMjgtNjIuODA1IDE3MC42NjctMTcwLjY2NyAxNzAuNjY3aC01NjguODg5Yy0xMDAuNzUgMC0xNzAuNjY3LTY0LTE3MC42NjctMTcwLjY2N3YtMzk4LjIyMmMwLTEwOS4wNTYgOTEuMjUtMTcwLjY2NyAxNzAuNjY3LTE3MC42NjdoNTQwLjQ0NGwxOTkuMTExLTE3MC42Njd2NzM5LjU1NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNzA1OyIgZ2x5cGgtbmFtZT0ibGlrZXMiIGQ9Ik02NDAgODMyaC0zODRjLTM1LjQxMyAwLTY1LjcwNy0yMS4zMzMtNzguNTA3LTUyLjA1M2wtMTI4Ljg1My0zMDAuOGMtMy44NC05LjgxMy01Ljk3My0yMC4wNTMtNS45NzMtMzEuMTQ3di04MS40OTNsMC40MjctMC40MjctMC40MjctMy40MTNjMC00Ni45MzMgMzguNC04NS4zMzMgODUuMzMzLTg1LjMzM2gyNjkuMjI3bC00MC41MzMtMTk0Ljk4Ny0xLjI4LTEzLjY1M2MwLTE3LjQ5MyA3LjI1My0zMy43MDcgMTguNzczLTQ1LjIyN2w0NS4yMjctNDQuOCAyODEuMTczIDI4MS4xNzNjMTUuMzYgMTUuMzYgMjQuNzQ3IDM2LjY5MyAyNC43NDcgNjAuMTZ2NDI2LjY2N2MwIDQ2LjkzMy0zOC40IDg1LjMzMy04NS4zMzMgODUuMzMzek04MTAuNjY3IDgzMnYtNTEyaDE3MC42Njd2NTEyaC0xNzAuNjY3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU3MDY7IiBnbHlwaC1uYW1lPSJkaXNsaWtlcyIgZD0iTTQyLjY2NyA2NGgxNzAuNjY3djUxMmgtMTcwLjY2N3YtNTEyek05ODEuMzMzIDUzMy4zMzNjMCA0Ni45MzMtMzguNCA4NS4zMzMtODUuMzMzIDg1LjMzM2gtMjY5LjIyN2w0MC41MzMgMTk0Ljk4NyAxLjI4IDEzLjY1M2MwIDE3LjQ5My03LjI1MyAzMy43MDctMTguNzczIDQ1LjIyN2wtNDUuMjI3IDQ0LjgtMjgwLjc0Ny0yODEuMTczYy0xNS43ODctMTUuMzYtMjUuMTczLTM2LjY5My0yNS4xNzMtNjAuMTZ2LTQyNi42NjdjMC00Ni45MzMgMzguNC04NS4zMzMgODUuMzMzLTg1LjMzM2gzODRjMzUuNDEzIDAgNjUuNzA3IDIxLjMzMyA3OC41MDcgNTIuMDUzbDEyOC44NTMgMzAwLjhjMy44NCA5LjgxMyA1Ljk3MyAyMC4wNTMgNS45NzMgMzEuMTQ3djgxLjQ5M2wtMC40MjcgMC40MjcgMC40MjcgMy40MTN6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg==) format('svg');font-weight:400;font-style:normal}.yottie-icon-subscribers::before{content:'\\e701'}.yottie-icon-video::before{content:'\\e702'}.yottie-icon-views::before{content:'\\e703'}.yottie-icon-comments::before{content:'\\e704'}.yottie-icon-likes::before{content:'\\e706'}.yottie-icon-dislikes::before{content:'\\e705'}.yottie-widget{position:relative;min-height:100px}.yottie-spinner{position:absolute;width:50px;height:50px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.yottie-spinner::before{display:block;width:100%;height:100%;border:3px solid rgba(255,255,255,.6);border-radius:50%;-webkit-animation:yottie-spinner 1.2s infinite;animation:yottie-spinner 1.2s infinite;content:''}@-webkit-keyframes yottie-spinner{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}}@keyframes yottie-spinner{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}}.yottie-widget-header{display:none!important;position:relative;min-width:280px}.yottie-widget-header::after,.yottie-widget-header::before{display:table;width:100%;height:0;clear:both;float:none;content:''}.yottie-widget-header.yottie-visible{display:block!important}.yottie-widget-header-logo{display:block;position:absolute;z-index:3;width:100px;height:100px;background:#fff}.yottie-widget-header-logo img{width:100px;height:100px}.yottie-widget-header-channel{position:absolute;z-index:3}.yottie-widget-header-channel-inner{display:table-cell!important;vertical-align:middle}.yottie-widget-header-channel-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1;font-size:24px}.yottie-widget-header-channel-title+.yottie-widget-header-channel-caption{margin-top:8px}.yottie-widget-header-channel-caption{display:block!important;display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;line-height:1.6;font-size:13px;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-height:41.6px}.yottie-mw-460 .yottie-widget-header-minimal .yottie-widget-header-properties,.yottie-widget-header-classic .yottie-widget-header-overlay,.yottie-widget-nav.yottie-disabled{display:none}.yottie-widget-header-properties{position:absolute;z-index:3;line-height:1;font-size:14px}span.yottie-widget-header-properties-item{margin-left:28px}span.yottie-widget-header-properties-item:first-child{margin-left:0}.yottie-widget-header-properties .yottie-icon{font-size:120%}.yottie-widget-header-overlay{position:absolute;z-index:2;top:0;right:0;left:0;bottom:0}.yottie-widget-header-banner{z-index:1;position:absolute;background-position:center center}.yottie-widget-header-subscribe{position:absolute;z-index:3}.yottie-widget-header-classic{height:275px;color:#333}.yottie-widget-header-classic .yottie-widget-header-logo{top:0;left:22px}.yottie-widget-header-classic .yottie-widget-header-channel{left:22px;bottom:0;right:280px;height:100px}.yottie-widget-header-classic .yottie-widget-header-channel-inner{width:100%;height:100px}.yottie-widget-header-classic .yottie-widget-header-subscribe{right:22px;bottom:15px}.yottie-widget-header-classic .yottie-widget-header-properties{right:22px;bottom:62px}.yottie-widget-header-classic .yottie-widget-header-banner{top:0;left:0;right:0;height:175px;background-size:100% auto}.yottie-widget-header-brandingless.yottie-widget-header-classic{height:100px}.yottie-mw-1056 .yottie-widget-header-classic .yottie-widget-header-banner{background-size:auto 100%}.yottie-mw-780 .yottie-widget-header-classic{height:245px}.yottie-mw-780 .yottie-widget-header-classic .yottie-widget-header-banner{height:145px}.yottie-mw-780 .yottie-widget-header-classic span.yottie-widget-header-properties-item{margin-left:10px}.yottie-mw-780 .yottie-widget-header-classic span.yottie-widget-header-properties-item:first-child{margin-left:0}.yottie-mw-640 .yottie-widget-header-classic{height:auto;padding:0 22px}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-banner{position:relative;margin:0 -22px}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-logo+.yottie-widget-header-channel{margin-top:120px}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-channel{position:relative;left:auto;bottom:auto;right:auto}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-properties{position:relative;right:auto;bottom:auto}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-subscribe{position:relative;right:auto;bottom:auto;margin-top:18px}.yottie-widget-header-minimal{height:100px;color:#fff}.yottie-widget-header-minimal .yottie-widget-header-logo{top:0;left:0}.yottie-widget-header-minimal .yottie-widget-header-logo~.yottie-widget-header-channel{left:122px}.yottie-widget-header-minimal .yottie-widget-header-channel{top:0;right:300px;left:22px}.yottie-widget-header-minimal .yottie-widget-header-channel-inner{height:100px}.yottie-widget-header-minimal .yottie-widget-header-properties{top:18px;right:22px}.yottie-widget-header-minimal .yottie-widget-header-banner{top:0;left:0;right:0;bottom:0}.yottie-widget-header-minimal .yottie-widget-header-subscribe{right:22px;bottom:15px}.yottie-mw-640 .yottie-widget-header-minimal{padding:0 18px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-logo~.yottie-widget-header-channel{margin-left:100px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-channel{position:relative;top:auto;right:auto;left:auto;margin-top:13px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-channel-inner{height:47px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-channel-caption{line-height:1.2;font-size:12px;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-height:14.4px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-properties{position:relative;top:auto;right:auto;float:left;margin-top:11px;font-size:12px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-properties-item{margin-left:8px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-properties-item:first-child{margin-left:0}.yottie-mw-460 .yottie-widget-header-minimal .yottie-widget-header-logo~.yottie-widget-header-subscribe,.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-logo~.yottie-widget-header-properties{margin-left:100px}.yottie-mw-640 .yottie-widget-header-minimal .yottie-widget-header-subscribe{position:relative;right:auto;bottom:auto;float:right;margin-top:5px}.yottie-mw-460 .yottie-widget-header-minimal .yottie-widget-header-subscribe{float:left}.yottie-widget-header-accent{height:222px;color:#fff}.yottie-widget-header-accent .yottie-widget-header-logo{overflow:hidden;top:10px;left:50%;margin-left:-50px;border-radius:50%}.yottie-widget-header-accent .yottie-widget-header-channel{top:120px;right:150px;left:150px;text-align:center}.yottie-widget-header-accent .yottie-widget-header-channel-inner{width:1%;height:96px}.yottie-widget-header-accent .yottie-widget-header-properties{top:22px;left:26px}.yottie-widget-header-accent .yottie-widget-header-banner{top:0;left:0;right:0;bottom:0;background-size:100% auto}.yottie-widget-header-accent .yottie-widget-header-subscribe{top:24px;right:26px}.yottie-widget-header-brandingless.yottie-widget-header-accent{height:150px}.yottie-widget-header-brandingless.yottie-widget-header-accent .yottie-widget-header-channel{top:30px}.yottie-mw-1354 .yottie-widget-header-accent .yottie-widget-header-banner{background-size:auto 100%}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-channel{left:22px;right:22px}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-channel-inner{height:47px}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-channel-caption{line-height:1.2;font-size:12px;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-height:14.4px}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-properties{top:auto;bottom:20px}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-properties-item{margin-left:10px}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-properties-item:first-child{margin-left:0}.yottie-mw-640 .yottie-widget-header-accent .yottie-widget-header-subscribe{top:auto;bottom:12px}.yottie-mw-410 .yottie-widget-header-accent .yottie-widget-header-properties{font-size:12px}.yottie-widget-nav-inner{position:relative;overflow:hidden;z-index:1}.yottie-widget-nav-inner::after{display:block;position:absolute;left:0;right:0;bottom:10px;height:3px;content:''}.yottie-widget-nav-list{position:relative;z-index:2;transition:all .1s ease}.yottie-widget-nav-list::after,.yottie-widget-nav-list::before{display:table;width:100%;height:0;clear:both;float:none;content:''}ul.yottie-widget-nav-list{padding:0 10px}.yottie-widget-nav-list-item{position:relative;float:left}.yottie-widget-nav-list-item::after{display:block;position:absolute;left:50%;right:50%;bottom:10px;height:3px;opacity:.6;content:'';transition:all .3s cubic-bezier(.4,0,.2,1)}.yottie-widget-nav-list-item.yottie-active::after,.yottie-widget-nav-list-item:focus::after,.yottie-widget-nav-list-item:hover::after{right:0;left:0;opacity:1}.yottie-widget-nav-list-item a{display:block;padding:18px 16px 21px;outline:0!important;line-height:1;font-size:15px}.yottie-widget-feed-ads{text-align:center}.yottie-widget-feed-ads .adsbygoogle{margin:10px 0}div.yottie-widget-feed-section{display:none;position:relative;min-height:150px}div.yottie-widget-feed-section.yottie-active{display:block}div.yottie-widget-feed-section-scrollbar{position:absolute;z-index:5;right:10px;bottom:10px;left:10px;height:3px;border-radius:0}div.yottie-widget-feed-section-scrollbar .swiper-scrollbar-drag{border-radius:0}div.yottie-widget-feed-section-arrow{position:absolute;z-index:3;top:50%;height:43px;width:43px;margin-top:-21px;border-radius:50%;transition:all .2s ease;cursor:pointer}div.yottie-widget-feed-section-arrow:active{-webkit-transform:scale(.9);transform:scale(.9)}div.yottie-widget-feed-section-arrow::before{display:block;position:absolute;visibility:hidden;top:8px;left:8px;width:3px;height:3px;border-radius:50%;opacity:0;-webkit-transform-origin:14px 14px;transform-origin:14px 14px;transition:all .4s ease;-webkit-animation:yottie-arrow-orbit-loader .8s linear 0s infinite;animation:yottie-arrow-orbit-loader .8s linear 0s infinite;content:''}div.yottie-widget-feed-section-arrow.swiper-button-disabled{opacity:0;-webkit-transform:scale(.2);transform:scale(.2);transition:all .1s ease}div.yottie-widget-feed-section-arrow.swiper-button-disabled.yottie-widget-feed-section-arrow-has-next{opacity:1;-webkit-transform:scale(1);transform:scale(1)}div.yottie-widget-feed-section-arrow.swiper-button-disabled.yottie-widget-feed-section-arrow-has-next::before{visibility:visible;opacity:1}div.yottie-widget-feed-section-arrow span{display:block;position:relative;width:8px;height:15px;margin:14px 18px}div.yottie-widget-feed-section-arrow span::after,div.yottie-widget-feed-section-arrow span::before{position:absolute;top:6px;width:10px;height:2px;transition:background .2s ease,width .2s ease;content:''}div.yottie-widget-feed-section-arrow-prev span::before{left:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}div.yottie-widget-feed-section-arrow-prev span::after{left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;transform-origin:0 0}div.yottie-widget-feed-section-arrow-next span::before{right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}div.yottie-widget-feed-section-arrow-next span::after{right:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0}div.yottie-widget-feed-section-arrow-prev{left:2px}div.yottie-widget-feed-section-arrow-next{right:2px}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-scrollbar{top:10px;left:auto;width:3px;height:auto}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-prev{top:0;left:50%;margin-top:0;margin-left:-21px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-prev:active{-webkit-transform:rotate(90deg) scale(.9);transform:rotate(90deg) scale(.9)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-prev.swiper-button-disabled{opacity:0;-webkit-transform:rotate(90deg) scale(.2);transform:rotate(90deg) scale(.2)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next{top:auto;right:auto;bottom:0;left:50%;margin-top:0;margin-left:-21px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.yottie-widget-video-cinema.yottie-mw-280 .yottie-widget-video-info-properties-inner .yottie-icon+*,.yottie-widget-video-classic.yottie-mw-230 .yottie-widget-video-info-properties-inner .yottie-icon+*,.yottie-widget-video-horizontal.yottie-mw-560 .yottie-widget-video-info-properties-inner .yottie-icon+*{margin-left:0!important}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next:active{-webkit-transform:rotate(90deg) scale(.9);transform:rotate(90deg) scale(.9)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next.swiper-button-disabled{opacity:0;-webkit-transform:rotate(90deg) scale(.2);transform:rotate(90deg) scale(.2)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next.swiper-button-disabled.yottie-widget-feed-section-arrow-has-next{opacity:1;-webkit-transform:rotate(90deg) scale(1);transform:rotate(90deg) scale(1)}div.yottie-widget-feed-section-loader{position:absolute;visibility:hidden;z-index:4;top:0;right:0;bottom:0;left:0;opacity:0;background:rgba(0,0,0,.6);transition:all .4s ease}div.yottie-widget-feed-section-loader.yottie-visible{visibility:visible;opacity:1}.yottie-widget-feed .swiper-wrapper{display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.yottie-widget-feed .swiper-container,.yottie-widget-feed .swiper-slide{box-sizing:border-box}.yottie-widget-feed .swiper-container.swiper-slide-visible,.yottie-widget-feed .swiper-slide.swiper-slide-visible{z-index:4}@-webkit-keyframes yottie-arrow-orbit-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes yottie-arrow-orbit-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.yottie-widget-video{position:relative;overflow:hidden;float:left;-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-widget-video-player{display:block;position:absolute;z-index:4}.yottie-widget-video-preview{display:block;position:relative;z-index:1}.yottie-widget-video-preview-thumbnail{display:block;overflow:hidden}.yottie-widget-video-preview-thumbnail img{position:relative;top:50%;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}span.yottie-widget-video-preview-marker{display:block;position:absolute;padding:5px 7px 6px;border-radius:2px;background:rgba(0,0,0,.7);line-height:1;font-size:11px;transition:all .3s ease}span.yottie-widget-video-preview-marker-hd{top:4px;left:4px}span.yottie-widget-video-preview-marker-duration{right:4px;bottom:4px}.yottie-mw-130 span.yottie-widget-video-preview-marker{display:none}span.yottie-widget-video-preview-play{display:block;position:absolute;z-index:3;top:50%;left:50%;width:0;height:0;border-style:solid;border-width:25px 0 25px 40px;border-color:transparent transparent transparent rgba(255,255,255,.5);-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);transition:all .2s ease}.yottie-widget-video:hover span.yottie-widget-video-preview-play{border-color:transparent transparent transparent rgba(255,255,255,.8)}.yottie-mw-180 span.yottie-widget-video-preview-play{border-width:15px 0 15px 20px}.yottie-widget-video-info{position:relative;z-index:3;box-sizing:border-box}div.yottie-widget-video-info{padding:16px 16px 14px}.yottie-widget-video-info-title{display:inline-block;overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;line-height:1;font-size:16px}div.yottie-widget-video-info-passed-time{margin-top:3px;line-height:1;font-size:11px}div.yottie-widget-video-info-caption{display:-webkit-box!important;overflow:hidden;margin-top:10px;word-wrap:break-word;text-overflow:ellipsis;line-height:1.4;font-size:14px;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:58.8px}div.yottie-widget-video-info-properties{margin-top:12px}div.yottie-widget-video-info-properties-inner{display:table;font-size:12px}.yottie-widget-video-info-properties-item{display:table-cell;width:1%;text-align:center}.yottie-widget-video-info-properties-item .yottie-icon{font-size:120%}.yottie-widget-video-info-properties-item:first-child{text-align:left}.yottie-widget-video-info-properties-item:last-child{text-align:right}div.yottie-widget-video-overlay{position:absolute;display:none;visibility:hidden;z-index:2;top:0;right:0;bottom:0;left:0;opacity:0;transition:all .35s ease;background:rgba(0,0,0,.8)}.yottie-widget-video-cinema{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:900px;perspective:900px}.yottie-widget-video-cinema *{-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-widget-video-cinema:hover .yottie-widget-video-preview-marker{opacity:0}.yottie-widget-video-cinema div.yottie-widget-video-overlay{display:block;transition-delay:50ms}.yottie-widget-video-cinema:hover .yottie-widget-video-overlay{visibility:visible;opacity:1;transition-duration:.4s;transition-delay:0s}.yottie-widget-video-cinema .yottie-widget-video-info{position:absolute;visibility:hidden;box-sizing:border-box;top:0;right:0;bottom:0;left:0;cursor:pointer;transition:all .3s ease}.yottie-widget-video-cinema .yottie-widget-video-info-title{display:block;opacity:0;text-align:center;transition:all .3s ease}.yottie-widget-video-cinema .yottie-widget-video-info-passed-time{margin-top:8px;opacity:0;text-align:center;transition:all .3s ease}.yottie-widget-video-cinema .yottie-widget-video-info-caption{position:absolute;top:60px;right:16px;left:16px;bottom:42px;width:inherit;margin-top:0;opacity:0;-webkit-transform:translateY(2px);transform:translateY(2px);transition:all .3s ease}.yottie-widget-video-cinema .yottie-widget-video-info-caption-inner{display:table-cell;vertical-align:middle;text-align:center}.yottie-widget-video-cinema .yottie-widget-video-info-properties{position:absolute;right:16px;bottom:15px;left:16px;opacity:0;-webkit-transform:translateY(2px);transform:translateY(2px);transition:all .3s ease}.yottie-widget-video-cinema:hover .yottie-widget-video-info{visibility:visible}.yottie-widget-video-cinema:hover .yottie-widget-video-info-title{opacity:1;transition-delay:50ms}.yottie-widget-video-cinema:hover .yottie-widget-video-info-passed-time{opacity:1;transition-delay:.12s}.yottie-widget-video-cinema:hover .yottie-widget-video-info-caption{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);transition-delay:.1s}.yottie-widget-video-cinema:hover .yottie-widget-video-info-properties{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);transition-delay:.15s}.yottie-widget-video-cinema.yottie-mw-280 .yottie-widget-video-info-caption{line-height:1.4;font-size:12px;-webkit-line-clamp:2;height:33.6px}.yottie-widget-video-cinema.yottie-mw-280 .yottie-widget-video-info-title{font-size:14px}.yottie-widget-video-cinema.yottie-mw-280 .yottie-widget-video-info-passed-time,.yottie-widget-video-cinema.yottie-mw-280 .yottie-widget-video-info-properties-inner{font-size:10px}.yottie-widget-video-cinema.yottie-mw-280 .yottie-widget-video-info-properties{bottom:10px}.yottie-widget-video-cinema.yottie-mw-230 .yottie-widget-video-info-caption{top:55px;line-height:1.4;font-size:12px;-webkit-line-clamp:1;height:16.8px}.yottie-widget-video-cinema.yottie-mw-180 .yottie-widget-video-info-passed-time,.yottie-widget-video-cinema.yottie-mw-180 .yottie-widget-video-info-title,.yottie-widget-video-cinema.yottie-mw-180 .yottie-widget-video-overlay{display:none}.yottie-widget-video-cinema.yottie-mw-180 div.yottie-widget-video-info-caption{display:none!important}.yottie-widget-video-cinema.yottie-mw-180 .yottie-widget-video-info-properties{display:none}.yottie-widget-video-horizontal::after,.yottie-widget-video-horizontal::before{display:table;width:100%;height:0;clear:both;float:none;content:''}.yottie-widget-video-horizontal .yottie-widget-video-info,.yottie-widget-video-horizontal .yottie-widget-video-preview{float:left;width:50%}.yottie-widget-video-horizontal .yottie-widget-video-info{height:100%}.yottie-widget-video-horizontal .yottie-widget-video-info-properties{position:absolute;right:16px;bottom:12px;left:16px}.yottie-widget-video-classic.yottie-mw-230 .yottie-widget-video-info-properties,.yottie-widget-video-horizontal.yottie-mw-560 .yottie-widget-video-info-properties{bottom:10px}.yottie-error,.yottie-error-overlay{top:0;left:0;position:absolute;right:0}.yottie-widget-video-horizontal.yottie-mw-560 .yottie-widget-video-info-caption{line-height:1.4;font-size:12px;-webkit-line-clamp:3;height:50.4px}.yottie-widget-video-horizontal.yottie-mw-560 .yottie-widget-video-info-title{font-size:14px}.yottie-widget-video-horizontal.yottie-mw-560 .yottie-widget-video-info-passed-time,.yottie-widget-video-horizontal.yottie-mw-560 .yottie-widget-video-info-properties-inner{font-size:10px}.yottie-widget-video-horizontal.yottie-mw-490 .yottie-widget-video-info-caption{line-height:1.4;font-size:12px;-webkit-line-clamp:2;height:33.6px}.yottie-widget-video-horizontal.yottie-mw-440 .yottie-widget-video-info-caption{line-height:1.4;font-size:12px;-webkit-line-clamp:1;height:16.8px}.yottie-widget-video-horizontal.yottie-mw-370 .yottie-widget-video-preview{float:none;width:auto}.yottie-widget-video-horizontal.yottie-mw-370 .yottie-widget-video-info{display:none}.yottie-widget-video-classic.yottie-mw-230 div.yottie-widget-video-info{padding:12px 12px 10px}.yottie-widget-video-classic.yottie-mw-230 .yottie-widget-video-info-title{font-size:14px}.yottie-widget-video-classic.yottie-mw-230 .yottie-widget-video-info-passed-time{font-size:10px}.yottie-widget-video-classic.yottie-mw-230 .yottie-widget-video-info-caption{margin-bottom:22px;line-height:1.4;font-size:12px;-webkit-line-clamp:3;height:50.4px}.yottie-widget-video-classic.yottie-mw-180 .yottie-widget-video-info-title,.yottie-widget-video-classic.yottie-mw-230 .yottie-widget-video-info-properties-inner{font-size:10px}.yottie-widget-video-classic.yottie-mw-180 div.yottie-widget-video-info{padding:8px}.yottie-widget-video-classic.yottie-mw-180 div.yottie-widget-video-info-caption{display:none!important}.yottie-widget-video-classic.yottie-mw-180 .yottie-widget-video-info-properties{display:none}.yottie-error{display:none!important;bottom:0}.yottie-error.yottie-visible{display:block!important}.yottie-error-overlay{bottom:0;background:rgba(0,0,0,.6)}div.yottie-error-content{position:absolute;top:50%;left:50%;padding:22px;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);background:#fff;font-size:12px;color:#232323}div.yottie-error-content-title{font-weight:700;line-height:1.6}.yottie-popup{position:fixed;visibility:hidden;z-index:9999;top:0;right:0;bottom:0;left:0}.yottie-popup a{color:#1a89de;transition:all .2s ease}.yottie-popup a:hover{color:#2fa5ff}.yottie-popup.yottie-popup-show{visibility:visible}.yottie-popup .yottie-popup-overlay{position:absolute;visibility:hidden;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.7);transition:.25s ease}.yottie-popup-show.yottie-popup .yottie-popup-overlay{visibility:visible;opacity:1}.yottie-popup .yottie-popup-wrapper{position:absolute;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;max-height:100%;top:0;right:0;bottom:0;left:0;padding:50px 0}@media only screen and (max-width:854px){.yottie-popup .yottie-popup-wrapper{padding-bottom:0}}.yottie-popup .yottie-popup-loader{position:absolute;padding-bottom:56.25%;width:100%;height:0;background:#000}.yottie-popup .yottie-popup-loader .yottie-spinner{visibility:hidden;transition:all .4s ease}.yottie-popup-loading.yottie-popup .yottie-popup-loader .yottie-spinner{visibility:visible}.yottie-popup .yottie-popup-inner{position:relative;visibility:hidden;box-sizing:border-box;left:50%;width:854px;background:#fff;opacity:0;-webkit-transform:translateX(-50%) scale(.9);transform:translateX(-50%) scale(.9);-webkit-transform-origin:center 0;transform-origin:center 0;transition:all .25s ease}@media only screen and (max-width:854px){.yottie-popup .yottie-popup-inner{width:100%}}.yottie-popup-show.yottie-popup .yottie-popup-inner{visibility:visible;opacity:1;-webkit-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1);transition:all .35s ease}.yottie-popup .yottie-popup-video-channel-logo:hover img,.yottie-popup .yottie-popup-video-comments-item-profile-image:hover img{opacity:.9}.yottie-popup .yottie-popup-control-close{position:absolute;z-index:12;width:36px;height:36px;top:-12px;right:-36px;cursor:pointer;transition:all .3s ease}.yottie-popup .yottie-popup-control-close::after,.yottie-popup .yottie-popup-control-close::before{display:block;position:absolute;width:20px;height:2px;top:50%;left:50%;margin:-1px 0 0 -10px;border-radius:10px;background:#a0a0a0;transition:all .3s ease;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;content:''}.yottie-popup .yottie-popup-control-close::before{-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg)}.yottie-popup .yottie-popup-control-close::after{-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg)}.yottie-popup .yottie-popup-control-close:hover::after,.yottie-popup .yottie-popup-control-close:hover::before{background:#dcdcdc}.yottie-popup .yottie-popup-control-close:active{-webkit-transform:scale(.8);transform:scale(.8)}@media only screen and (max-width:936px){.yottie-popup .yottie-popup-control-close{top:-43px;right:0}}@media only screen and (max-width:768px){.yottie-popup .yottie-popup-inner{box-shadow:0 -3px 35px rgba(0,0,0,.4)}.yottie-popup .yottie-popup-control-close{top:-50px;right:0;left:0;width:auto;height:50px;background:rgba(255,255,255,0)}.yottie-popup .yottie-popup-control-close::after,.yottie-popup .yottie-popup-control-close::before{background:#dcdcdc}}.yottie-popup .yottie-popup-control-arrow{position:absolute;z-index:10;top:20px;bottom:20px;width:100px;cursor:pointer}.yottie-popup .yottie-popup-control-arrow-next span,.yottie-popup .yottie-popup-control-arrow-previous span{display:block;position:absolute;width:43px;height:63px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);transition:all .3s ease}.yottie-popup .yottie-popup-control-arrow-next span::after,.yottie-popup .yottie-popup-control-arrow-next span::before,.yottie-popup .yottie-popup-control-arrow-previous span::after,.yottie-popup .yottie-popup-control-arrow-previous span::before{display:block;position:absolute;width:43px;height:2px;top:20px;border-radius:10px 0 0 10px;transition:all .3s ease;content:'';background:#656565}.yottie-popup .yottie-popup-control-arrow-previous{left:0}.yottie-popup .yottie-popup-control-arrow-previous span{left:24px}.yottie-popup .yottie-popup-control-arrow-previous span::before{-webkit-transform-origin:0 110%;transform-origin:0 110%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.yottie-popup .yottie-popup-control-arrow-previous span::after{-webkit-transform-origin:0 -10%;transform-origin:0 -10%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.yottie-popup .yottie-popup-control-arrow-next{right:0}.yottie-popup .yottie-popup-control-arrow-next span{right:24px}.yottie-popup .yottie-popup-control-arrow-next span::before{-webkit-transform-origin:100% 110%;transform-origin:100% 110%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.yottie-popup .yottie-popup-control-arrow-next span::after{-webkit-transform-origin:100% -10%;transform-origin:100% -10%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.yottie-popup .yottie-popup-video{box-sizing:border-box}.yottie-popup .yottie-popup-video-player{position:relative;padding-bottom:56.25%;height:0}.yottie-popup .yottie-popup-video-player iframe{position:absolute;top:0;left:0;width:100%;height:100%}.yottie-popup .yottie-popup-video-content{padding:25px 30px}.yottie-popup .yottie-popup-video-content-ads{text-align:center}.yottie-popup .yottie-popup-video-content-ads .adsbygoogle{margin:10px 0}@media only screen and (max-width:768px){.yottie-popup .yottie-popup-video-content{padding:15px 20px}}.yottie-popup .yottie-popup-video-title{line-height:30px;font-size:26px;margin-bottom:20px;color:#222}.yottie-popup .yottie-popup-video-info-meta::after,.yottie-popup .yottie-popup-video-info-meta::before{display:table;width:100%;height:0;clear:both;float:none;content:''}.yottie-popup .yottie-popup-video-channel{float:left;max-width:50%}.yottie-popup .yottie-popup-video-channel-logo{float:left;width:48px;height:48px;margin-right:14px}.yottie-popup .yottie-popup-video-channel-logo img{width:48px;height:48px;transition:all .2s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-popup .yottie-popup-video-channel-info{line-height:1;float:left}.yottie-popup .yottie-popup-video-channel-name{display:block;position:relative;top:-1px;line-height:15px;font-size:15px;font-weight:500;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.yottie-popup .yottie-popup-video-channel-name:hover{color:#2fa5ff}.yottie-popup .yottie-popup-video-channel-subscribe{margin-top:9px}.yottie-popup .yottie-popup-video-properties{float:right;text-align:right;min-width:110px;max-width:50%}.yottie-popup .yottie-popup-video-properties-views{line-height:20px;font-size:21px;font-weight:500;color:#555;margin-bottom:5px}.yottie-popup .yottie-popup-video-properties-rating-ratio{height:2px;background:#cfcfcf;margin:5px 0}.yottie-popup .yottie-popup-video-properties-rating-ratio span{display:block;height:100%;background:#2fa5ff}.yottie-popup .yottie-popup-video-properties-rating-counters{margin-top:5px}.yottie-popup .yottie-popup-video-properties-rating-counters-dislike,.yottie-popup .yottie-popup-video-properties-rating-counters-like{display:inline-block}.yottie-popup .yottie-popup-video-properties-rating-counters-dislike span,.yottie-popup .yottie-popup-video-properties-rating-counters-like span{font-weight:500;font-size:12px;color:#909090}.yottie-popup .yottie-popup-video-properties-rating-counters-dislike{margin-left:25px}.yottie-popup .yottie-popup-video-date{font-size:13px;font-weight:500;color:#222;margin-bottom:3px}.yottie-popup .yottie-popup-video-info-main{line-height:18px;font-size:13px;margin-top:10px;border-top:1px solid rgba(0,0,0,.1);padding-top:12px;color:#222}.yottie-popup .yottie-popup-video-description{overflow:hidden;max-height:54px}.yottie-popup .yottie-popup-video-description-more{box-sizing:border-box;width:100%;text-align:center;font-size:12px;cursor:pointer;padding:7px 0;margin-bottom:-7px;color:#666;transition:.2s ease}.yottie-popup .yottie-popup-video-comments-item-name a,.yottie-popup .yottie-popup-video-description-more:hover{color:#222}.yottie-popup .yottie-popup-video-description-show-full{overflow:auto;max-height:none}.yottie-popup .yottie-popup-video-comments{margin-top:10px;padding-top:25px;border-top:1px solid rgba(0,0,0,.1)}.yottie-popup .yottie-popup-video-comments-item{margin-bottom:30px}.yottie-popup .yottie-popup-video-comments-item::after,.yottie-popup .yottie-popup-video-comments-item::before{display:table;width:100%;height:0;clear:both;float:none;content:''}.yottie-popup .yottie-popup-video-comments-item:last-child{margin-bottom:0}.yottie-popup .yottie-popup-video-comments-item-profile-image{float:left}.yottie-popup .yottie-popup-video-comments-item-profile-image img{width:48px;height:48px;transition:all .2s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-popup .yottie-popup-video-comments-item-info{margin-left:61px}.yottie-popup .yottie-popup-video-comments-item-header{position:relative;top:-3px;line-height:1}.yottie-popup .yottie-popup-video-comments-item-name{font-size:14px;font-weight:500;display:inline-block;margin-right:13px}.yottie-popup .yottie-popup-video-comments-item-name a:hover{color:#2fa5ff}.yottie-popup .yottie-popup-video-comments-item-passed-time{font-size:11px;color:#737373;display:inline-block}.yottie-popup .yottie-popup-video-comments-item-likes{margin-top:2px;font-size:12px;line-height:16px;color:#b4b4b4}.yottie-popup .yottie-popup-video-comments-item-text{line-height:18px;font-size:13px;color:#222;margin-top:1px}.yottie-widget-header{background:#fff}.yottie-widget-header-overlay{background:rgba(255,255,255,.81)}.yottie-widget-header-channel-title a{color:#222}.yottie-widget-header-channel-title a:hover{color:#2fa5ff}.yottie-widget-header-channel-caption{color:#222}.yottie-widget-header-properties-item{color:#666}.yottie-widget-nav{background:#fff}.yottie-widget-nav-list-item a{color:#222}.yottie-widget-nav-list-item.yottie-active a,.yottie-widget-nav-list-item.yottie-active:hover a,.yottie-widget-nav-list-item:hover a{color:red}.yottie-widget-nav-inner::after{background:#ccc}.yottie-widget-nav-list-item.yottie-active::after,.yottie-widget-nav-list-item.yottie-active:hover::after,.yottie-widget-nav-list-item:hover::after{background:red}.yottie-widget-feed{background:#fff}.yottie-widget-feed-section-arrow{background:rgba(0,0,0,.4)}.yottie-widget-feed-section-arrow:hover{background:rgba(0,0,0,.8)}.yottie-widget-feed-section-arrow span::after,.yottie-widget-feed-section-arrow span::before,.yottie-widget-feed-section-arrow::before{background:#fff}.yottie-widget-feed-section-arrow:hover span::after,.yottie-widget-feed-section-arrow:hover span::before,.yottie-widget-feed-section-arrow:hover::before{background:red}.yottie-widget-feed-section-scrollbar{background:#ccc}.yottie-widget-feed-section-scrollbar .swiper-scrollbar-drag{background:rgba(0,0,0,.4)}.yottie-widget-video{background:#f3f3f3}.yottie-widget-video-overlay{background:rgba(255,255,255,.9)}.yottie-widget-video-preview-play{border-left-color:rgba(255,255,255,.4)}.yottie-widget-video:hover .yottie-widget-video-preview-play{border-left-color:rgba(255,255,255,.8)}.yottie-widget-video-preview-marker-duration{background:rgba(34,34,34,.81);color:#fff}.yottie-widget-video-info-title{color:#1a89de}.yottie-widget-video-info-title:hover{color:#2fa5ff}.yottie-widget-video-info-passed-time{color:#8c8c8c}.yottie-widget-video-info-caption{color:#222}.yottie-widget-video-info-properties-item{color:#959595}.yottie-widget-video-info-caption a{color:#1a89de}.yottie-widget-video-info-caption a:hover{color:#2fa5ff}.yottie-popup-inner{background:#fff}.yottie-popup-inner a{color:#1a89de}.yottie-popup-inner a:hover{color:#2fa5ff}.yottie-popup-overlay{background:rgba(0,0,0,.7)}.yottie-popup-inner .yottie-popup-video-channel-name,.yottie-popup-video-title{color:#222}.yottie-popup-inner .yottie-popup-video-channel-name:hover{color:#2fa5ff}.yottie-popup-video-properties-views{color:#555}.yottie-popup-video-properties-rating-ratio{background:#cfcfcf}.yottie-popup-video-properties-rating-ratio span{background:#2fa5ff}.yottie-popup-video-properties-rating-counters-dislike span,.yottie-popup-video-properties-rating-counters-like span{color:#909090}.yottie-popup-video-date,.yottie-popup-video-description{color:#222}.yottie-popup-video-description-more{color:#666}.yottie-popup-video-comments-item-name a,.yottie-popup-video-description-more:hover{color:#222}.yottie-popup-video-comments-item-name a:hover{color:#2fa5ff}.yottie-popup-video-comments-item-passed-time{color:#737373}.yottie-popup-video-comments-item-text{color:#222}.yottie-popup-video-comments-item-likes{color:#b4b4b4}.yottie-popup-control-close::after,.yottie-popup-control-close::before{background:#a0a0a0}.yottie-popup-control-close:hover::after,.yottie-popup-control-close:hover::before{background:#dcdcdc}@media only screen and (max-width:768px){.yottie-popup-control-close{background:rgba(255,255,255,0)}.yottie-popup-control-close::after,.yottie-popup-control-close::before{background:#dcdcdc}}";
    }, {}],
    5: [function(e, t, i) {
        "use strict";
        t.exports = function(t, i) {
            ! function n(t, i, o) {
                function r(s, l) {
                    if (!i[s]) {
                        if (!t[s]) {
                            var p = "function" == typeof e && e;
                            if (!l && p) return p(s, !0);
                            if (a) return a(s, !0);
                            throw new Error("Cannot find module '" + s + "'")
                        }
                        var d = i[s] = {
                            exports: {}
                        };
                        t[s][0].call(d.exports, function(e) {
                            var i = t[s][1][e];
                            return r(i ? i : e)
                        }, d, d.exports, n, t, i, o)
                    }
                    return i[s].exports
                }
                for (var a = "function" == typeof e && e, s = 0; s < o.length; s++) r(o[s]);
                return r
            }({
                1: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = function() {
                            var e = this;
                            e.components = {}
                        };
                    n.extend(o, {
                        id: "Application"
                    }), o.prototype = function() {}, n.extend(o.prototype, {
                        constructor: o,
                        components: null,
                        component: function(e) {
                            var t = this;
                            return t.hasComponent(e) ? t.components[e] : void 0
                        },
                        registerComponent: function(e, t) {
                            var i = this;
                            return i.hasComponent(t) ? void 0 : (e.register(i), t = t || e.constructor.getId(), i.components[t] = e, e)
                        },
                        hasComponent: function(e) {
                            var t = this;
                            return !!t.components[e]
                        }
                    }), t.exports = o
                }, {
                    "./jquery": 5
                }],
                2: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = e("./utils"),
                        r = function() {};
                    n.extend(r, {
                        id: "Cl"
                    }), r.prototype = function() {}, n.extend(r.prototype, {
                        constructor: r,
                        getParent: function(e) {
                            var t = this;
                            return t.constructor.inheritance[e]
                        },
                        set: function(e, t) {
                            var i = this;
                            return o.setProperty(i, e, t)
                        },
                        get: function(e, t) {
                            var i = this;
                            return o.getProperty(i, e, t)
                        }
                    }), t.exports = r
                }, {
                    "./jquery": 5,
                    "./utils": 11
                }],
                3: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = function() {};
                    n.extend(o, {
                        id: "Component",
                        getId: function() {
                            var e = this;
                            return e.id.substr(0, 1).toLowerCase() + e.id.substr(1)
                        }
                    }), o.prototype = function() {}, n.extend(o.prototype, {
                        constructor: o,
                        inject: function() {
                            var e = this;
                            e.constructor.dependencies && n.each(e.constructor.dependencies, function(t, i) {
                                e[i] = e.app.component(i)
                            })
                        },
                        register: function(e) {
                            var t = this;
                            t.app = e, t.inject()
                        },
                        trigger: function() {
                            var e = this;
                            e.$e.trigger.apply(e.$e, arguments)
                        },
                        on: function() {
                            var e = this;
                            e.$e.on.apply(e.$e, arguments)
                        }
                    }), t.exports = o
                }, {
                    "./jquery": 5
                }],
                4: [function(e, t, i) {
                    t.exports = function(e, t, i, n) {
                        e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
                        var o = isFinite(+e) ? +e : 0,
                            r = isFinite(+t) ? Math.abs(t) : 0,
                            a = "undefined" == typeof n ? "," : n,
                            s = "undefined" == typeof i ? "." : i,
                            l = "",
                            p = function(e, t) {
                                var i = Math.pow(10, t);
                                return "" + (Math.round(e * i) / i).toFixed(t)
                            };
                        return l = (r ? p(o, r) : "" + Math.round(o)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)), (l[1] || "").length < r && (l[1] = l[1] || "", l[1] += new Array(r - l[1].length + 1).join("0")), l.join(s)
                    }
                }, {}],
                5: [function(e, t, i) {
                    t.exports = window.jQuery
                }, {}],
                6: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o.component("I18n", function(e, t) {
                        var i = this;
                        i.lang = t, i.dictionary = e, i.langDictionary = i.dictionary[i.lang] || i.dictionary[i.constructor.DEFAULT_LANG]
                    }, {
                        DEFAULT_LANG: "en"
                    }, {
                        lang: null,
                        dictionary: null,
                        langDictionary: null,
                        lexemes: [{
                            id: "interpolation",
                            regex: /\{\{([a-zA-Z]+)\}\}/,
                            func: function(e, t) {
                                return t[e[1]] || "[[Unknown variable " + e[1] + "]]"
                            }
                        }, {
                            id: "modified_interpolation",
                            regex: /\{\{([a-zA-Z]+)\s*\|\s*([a-zA-Z]+)\(([^)]*)\)\}\}/,
                            func: function(e, t, i) {
                                var n = e[1],
                                    o = e[2],
                                    r = e[3];
                                if (!i.modifiers[o]) return '[[Unknown modifier "' + o + '"]]';
                                var a = r ? r.split(/\s*,\s*/) : [];
                                return i.modifiers[o].apply(t[n], a)
                            }
                        }],
                        modifiers: {},
                        hasTranslation: function(e) {
                            var t = this;
                            return !!t.langDictionary[e]
                        },
                        getTranslation: function(e) {
                            var t = this;
                            return t.langDictionary[e]
                        },
                        parse: function(e, t) {
                            var i = this;
                            return n.each(i.lexemes, function(n, o) {
                                e = e.replace(o.regex, function() {
                                    return o.func.call(void 0, arguments, t, i)
                                })
                            }), e
                        },
                        t: function(e, t) {
                            var i = this;
                            return t = t || {}, i.parse(i.getTranslation(e) || e, t)
                        }
                    })
                }, {
                    "./../../jquery": 5,
                    "./../../olivie": 10
                }],
                7: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o.component("Renderer", function(e) {
                        var t = this;
                        t.views = e
                    }, {}, {
                        views: null,
                        getTemplate: function(e) {
                            var t = this,
                                i = o.utils.getProperty(t.views, e);
                            return "function" === n.type(i) ? i : void 0
                        },
                        render: function(e, t) {
                            var i = this,
                                n = i.getTemplate(e);
                            return n(t)
                        }
                    })
                }, {
                    "./../../jquery": 5,
                    "./../../olivie": 10
                }],
                8: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie");
                    t.exports = o["class"]("Cache", [], function(e, t) {
                        var i = this;
                        i.client = t, e = e.substr(0, 1).toUpperCase() + e.substr(1), i.cacheBaseId = "OlivieClientCache" + e
                    }, {}, {
                        indexedDB: window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                        cacheStoreId: null,
                        db: null,
                        isSupported: function() {
                            var e = this;
                            return !!e.indexedDB
                        },
                        isReady: function() {
                            var e = this;
                            return !!e.db
                        },
                        connect: function(e) {
                            var t = this;
                            e = e || n.Deferred();
                            var i;
                            return t.isSupported() ? (i = t.indexedDB.open(t.cacheBaseId, 1), i.onsuccess = function() {
                                t.db = i.result, e.resolve()
                            }, i.onupgradeneeded = function(i) {
                                i.currentTarget.result.createObjectStore("Requests", {
                                    keyPath: "url"
                                }).createIndex("url", "url", {
                                    unique: !0
                                }), t.connect(e)
                            }) : e.resolve(), e.promise()
                        },
                        save: function(e, t) {
                            var i = this;
                            if (i.isReady()) {
                                var n = i.db.transaction("Requests", "readwrite"),
                                    o = {
                                        url: e,
                                        result: t,
                                        date: Math.floor(Date.now() / 1e3)
                                    };
                                n.objectStore("Requests").put(o)
                            }
                        },
                        getSaved: function(e, t, i) {
                            var o = this;
                            i = i || n.Deferred();
                            var r, a;
                            return o.isReady() && t ? (r = o.db.transaction(["Requests"], "readonly"), a = r.objectStore("Requests").get(e), a.onsuccess = function() {
                                var n = a.result;
                                n && n.date + t > Math.floor(Date.now() / 1e3) ? i.resolve(n.result) : (o["delete"](e), i.reject())
                            }, a.onerror = function() {
                                i.reject()
                            }) : i.reject(), i.promise()
                        },
                        "delete": function(e, t) {
                            var i = this;
                            t = t || n.Deferred();
                            var o, r;
                            return i.isReady() ? (o = i.db.transaction(["Requests"], "readwrite"), r = o.objectStore("Requests")["delete"](e), r.onsuccess = function() {
                                t.resolve()
                            }, r.onerror = function() {
                                t.reject()
                            }) : t.reject(), t.promise()
                        }
                    })
                }, {
                    "./../../jquery": 5,
                    "./../../olivie": 10
                }],
                9: [function(e, t, i) {
                    var n = e("./../../jquery"),
                        o = e("./../../olivie"),
                        r = e("./cache");
                    t.exports = o.component("Client", function(e, t, i, o) {
                        var a = this;
                        a.requestModifiers = [], a.responseModifiers = [], e && a.attachRequestModifier(function(t) {
                            t.url = e + t.url
                        }), t && n.isPlainObject(t) && a.attachRequestModifier(function(e) {
                            e.data = n.extend(!1, {}, e.data, t)
                        }), a.cache = new r(i, a), a.defaultCacheTime = parseInt(o, 10)
                    }, {
                        parseQuery: function(e) {
                            var t = e.match(/\?([^#]+)/),
                                i = {};
                            if (!t || !t[1]) return i;
                            var n = function(e) {
                                var t = e.split("=");
                                i[t[0]] = t[1] || ""
                            };
                            return t[1].split("&").map(n), i
                        }
                    }, {
                        cache: null,
                        requestModifiers: null,
                        responseModifiers: null,
                        defaultCacheTime: null,
                        run: function() {
                            var e = this;
                            return e.cache.connect()
                        },
                        attachRequestModifier: function(e) {
                            var t = this;
                            return "function" === n.type(e) && !!t.requestModifiers.push(e)
                        },
                        attachResponseModifier: function(e) {
                            var t = this;
                            return "function" === n.type(e) && !!t.responseModifiers.push(e)
                        },
                        send: function(e, t, i, o) {
                            var r = this;
                            "undefined" === n.type(o) && (o = r.defaultCacheTime), t = t || {}, i = i || {};
                            var a = n.Deferred();
                            t = n.extend(!1, {}, r.constructor.parseQuery(e), t), e = e.replace(/(\?\|#).*/, "") + "?" + n.param(t), t.callback && (t.callback = null), i = n.extend(!1, {}, i, {
                                url: e,
                                dataType: "jsonp",
                                type: i.type || "get"
                            }), n.each(r.requestModifiers, function(e, t) {
                                t.call(r, i)
                            });
                            var s = function(t, i) {
                                o && "success" === i && r.cache.save(e, t), n.each(r.responseModifiers, function(e, i) {
                                    "pending" === a.state() && i.call(r, t, a)
                                }), "pending" === a.state() && a.resolve(t)
                            };
                            return r.cache.getSaved(e, o).done(s).fail(function() {
                                n.ajax(i).done(s)
                            }), a.promise()
                        },
                        get: function(e, t, i) {
                            var n = this;
                            return i = i || {}, i.type = "get", n.send(e, t, i)
                        }
                    })
                }, {
                    "./../../jquery": 5,
                    "./../../olivie": 10,
                    "./cache": 8
                }],
                10: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = e("./utils"),
                        r = e("./cl"),
                        a = e("./application"),
                        s = e("./component"),
                        l = {
                            $: n,
                            utils: o,
                            plugin: function(e, t, i) {
                                return n.fn[e] ? null : (n.fn[e] = function(e) {
                                    return this.each(function(i, n) {
                                        t.call(void 0, n, e)
                                    })
                                }, i && (n[e] = i), n.fn[e])
                            },
                            application: function(e, t, i, n) {
                                var o = this;
                                return o["class"](e, [a], t, i, n)
                            },
                            component: function(e, t, i, n) {
                                var o = this;
                                return n = n || {}, o["class"](e, [s], t, i, n)
                            },
                            "class": function(e, t, i, o, a) {
                                t = t || [], o = o || {}, a = a || {}, t.unshift(r), o.id = e, o.inheritance = {}, n.each(t, function(e, t) {
                                    t.id && (o.inheritance[t.id] = t)
                                });
                                var s = function() {
                                    var e = this;
                                    i.apply(e, arguments)
                                };
                                return s.prototype = function() {}, a.constructor = s, n.extend.apply(self.$, [s].concat(t.concat([o]))), n.extend.apply(self.$, [s.prototype].concat(t.map(function(e) {
                                    return e.prototype
                                })).concat(a)), s
                            }
                        };
                    t.exports = l
                }, {
                    "./application": 1,
                    "./cl": 2,
                    "./component": 3,
                    "./jquery": 5,
                    "./utils": 11
                }],
                11: [function(e, t, i) {
                    var n = e("./jquery"),
                        o = e("./external/number_format");
                    t.exports = {
                        unifyMultipleOption: function(e) {
                            var t = n.type(e);
                            return "array" === t ? e : "string" === t ? e.split(/[\s,;\|]+/).filter(function(e) {
                                return !!e
                            }) : null
                        },
                        applyModifier: function(e, t) {
                            return "array" !== n.type(t) && (t = [t]), n.each(t, function(t, i) {
                                "function" === n.type(i) && (e = i.call(i, e))
                            }), e
                        },
                        getProperty: function(e, t, i) {
                            var o = this;
                            if (e && t && "string" === n.type(t)) {
                                var r = e;
                                return n.each(t.split("."), function(e, t) {
                                    return r = r[t], r ? void 0 : !1
                                }), r && i && (r = o.applyModifier(r, i)), r
                            }
                        },
                        setProperty: function(e, t, i) {
                            if (e && t && "string" === n.type(t)) {
                                var o = e,
                                    r = t.split(".");
                                return n.each(r, function(e, t) {
                                    e == r.length - 1 ? o[t] = i : "undefined" === n.type(o[t]) && (o[t] = {}), o = o[t]
                                }), e
                            }
                        },
                        formatBigNumber: function(e, t) {
                            if (e = parseFloat(e), t = t || 1, "number" !== n.type(e)) return NaN;
                            var i, o, r = "";
                            return e >= 1e9 ? (i = e / 1e9, r = "b") : e >= 1e6 ? (i = e / 1e6, r = "m") : e >= 1e3 ? (i = e / 1e3, r = "k") : i = e, i = i.toFixed(t), o = parseInt(i, 10), i - o === 0 && (i = o), i + r
                        },
                        parseInt: function(e) {
                            return parseInt(e, 10)
                        },
                        formatNumberWithCommas: function(e) {
                            return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        },
                        formatPassedTime: function(e) {
                            e instanceof Date || (e = Math.round(new Date(Date.parse(e)).getTime() / 1e3));
                            var t, i, n = Math.round((new Date).getTime() / 1e3),
                                o = Math.abs(n - e);
                            return o >= 604800 ? (t = o / 604800, i = "w") : o >= 86400 ? (t = o / 86400, i = "d") : o >= 3600 ? (t = o / 3600, i = "h") : o >= 60 ? (t = o / 60, i = "m") : (t = o, i = "s"), t = Math.round(t), t + i
                        },
                        filterNulls: function(e) {
                            var t = this,
                                i = {};
                            return n.each(e, function(e, o) {
                                "object" === n.type(o) ? i[e] = t.filterNulls(o) : null !== o && (i[e] = o)
                            }), i
                        },
                        nl2br: function(e) {
                            return e.replace(/\n/g, "<br>")
                        },
                        formatAnchors: function(e) {
                            return e.replace(/(https?|ftp):\/\/[^\s\t<]+/g, function(e) {
                                return '<a href="' + e + '" target="_blank" rel="nofollow">' + e + "</a>"
                            })
                        },
                        numberFormat: function() {
                            return o.apply(o, arguments)
                        }
                    }
                }, {
                    "./external/number_format": 4,
                    "./jquery": 5
                }],
                12: [function(e, t, i) {
                    t.exports = {
                        key: "AIzaSyAWB3iQzHTPDTrQ7wBagcJWwYCg675ju_g",
                        channel: null,
                        sourceGroups: null,
                        cacheTime: 3600,
                        header: {
                            visible: !0
                        },
                        groups: {
                            visible: !0
                        },
                        content: {
                            columns: 3,
                            arrowsControl: !0,
                            dragControl: !0,
                            transitionEffect: "slide",
                            transitionSpeed: 600,
                            auto: 0,
                            autoPauseOnHover: !1
                        },
                        popup: {
                            info: "title channelLogo channelName subscribeButton viewsCounter likesRatio likesCounter dislikesCounter date description descriptionMoreButton comments",
                            autoplay: !0
                        }
                    }
                }, {}],
                13: [function(e, t, i) {
                    t.exports = {
                        en: {}
                    }
                }, {}],
                14: [function(e, t, i) {
                    var n = e("./../../olivie/src/js/olivie"),
                        o = e("./../../olivie/src/js/jquery"),
                        r = e("./yottie"),
                        a = e("./defaults"),
                        s = e("./schemes"),
                        l = 0;
                    n.plugin("yottie", function(e, t) {
                        var i = new r(++l, e, t);
                        i.run()
                    }, {
                        defaults: a,
                        schemes: s,
                        generateAttributesMap: function(e, t, i) {
                            return e = e || "", t = t || a, i = i || {}, o.each(t, function(t, n) {
                                var r;
                                "object" === o.type(n) ? o.yottie.generateAttributesMap(e ? e + "." + t : t, n, i) : (r = e ? e + "." + t : t, i[r] = r.replace(/\.|[A-Z]/g, function(e) {
                                    return "." === e ? "-" : "-" + e.toLowerCase()
                                }))
                            }), i
                        },
                        init: function(e) {
                            e = e || document.body;
                            var t = o.yottie.generateAttributesMap();
                            o("[data-yt]", e).each(function(e, i) {
                                var r = o(i),
                                    a = {};
                                o.each(t, function(e, t) {
                                    var i = r.attr("data-yt-" + t);
                                    i && ("true" === i ? i = !0 : "false" === i && (i = !1), n.utils.setProperty(a, e, i))
                                }), r.yottie(a)
                            })
                        }
                    }), o(function() {
                        var e = window.onYottieReady;
                        e && "function" === o.type(e) && e(), o.yottie.init()
                    })
                }, {
                    "./../../olivie/src/js/jquery": 5,
                    "./../../olivie/src/js/olivie": 10,
                    "./defaults": 12,
                    "./schemes": 35,
                    "./yottie": 37
                }],
                15: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Popup", function() {}, {
                        AVAILABLE_INFO: ["title", "date", "description"],
                        dependencies: ["youtube", "i18n", "renderer", "ads"]
                    }, {
                        $e: n("<div></div>"),
                        open: function(e) {
                            var t = this;
                            return t.showing ? !1 : (t.showVideo(e), t.showing = !0, void t.$popup.addClass("yottie-popup-show"))
                        },
                        close: function() {
                            var e = this;
                            setTimeout(function() {
                                e.$video.remove()
                            }, 350), e.showing = !1, e.$popup.removeClass("yottie-popup-show")
                        },
                        showVideo: function(e) {
                            var t = this,
                                i = t.youtube.parseSource(e);
                            i && "youtube#video" === i.kind && (t.$popup.addClass("yottie-popup-loading"), t.youtube.model(i.kind).find(i.criteria, "contentDetails,statistics,snippet").done(function(e) {
                                if (e) {
                                    t.video = e;
                                    var i = [];
                                    i.push(t.getVideoChannel()), i.push(t.getVideoCommentThreads()), n.when.apply(n, i).done(function() {
                                        t.$popup.removeClass("yottie-popup-loading"), t.$video = t.createVideoElement(), new YT.Player(t.$video.find(".yottie-popup-video-player span").get(0), {
                                            videoId: t.video.id,
                                            playerVars: {
                                                autoplay: !0,
                                                showinfo: !1
                                            },
                                            events: {
                                                onStateChange: function(e) {
                                                    switch (e.data) {
                                                        case YT.PlayerState.ENDED:
                                                            e.target.pauseVideo(), e.target.seekTo(0)
                                                    }
                                                }
                                            }
                                        }), t.channel && t.channel.renderButton(t.$video.find(".yottie-popup-video-channel-subscribe-button").get(0)), t.$video.appendTo(t.$inner), t.$videoPlayer = t.$video.find(".yottie-popup-video-source iframe")
                                    })
                                }
                            }))
                        },
                        getVideoChannel: function() {
                            var e = this;
                            !e.video;
                            var t = n.Deferred();
                            return e.youtube.model("youtube#channel").find({
                                id: e.video.snippet.channelId
                            }, "snippet").done(function(i) {
                                e.channel = i, t.resolve()
                            }).fail(function() {
                                e.channel = null, t.resolve()
                            }), t
                        },
                        getVideoCommentThreads: function() {
                            var e = this;
                            !e.video;
                            var t = n.Deferred();
                            return e.youtube.model("youtube#commentThread").findAll({
                                videoId: e.video.id,
                                textFormat: "plainText"
                            }, "snippet").done(function(i) {
                                e.commentThreads = i, t.resolve()
                            }).fail(function() {
                                e.commentThreads = null, t.resolve()
                            }), t
                        },
                        createPopupElement: function() {
                            var e = this,
                                t = {};
                            return t.loader = e.renderer.render("popup.loader", {
                                parts: t
                            }), t.controlClose = e.renderer.render("popup.control.close", {
                                parts: t
                            }), t.controlArrows = e.renderer.render("popup.control.arrows", {
                                parts: t
                            }), t.inner = e.renderer.render("popup.inner", {
                                parts: t
                            }), t.overlay = e.renderer.render("popup.overlay", {
                                parts: t
                            }), t.wrapper = e.renderer.render("popup.wrapper", {
                                parts: t
                            }), n(e.renderer.render("popup.container", {
                                parts: t
                            }))
                        },
                        createVideoElement: function() {
                            var e = this,
                                t = {},
                                i = {},
                                r = "Published on " + new Date(Date.parse(e.video.snippet.publishedAt)).toLocaleDateString(),
                                a = [];
                            if (e.commentThreads && e.commentThreads.length)
                                for (var s = 0, l = e.commentThreads.length; l > s; s++) {
                                    var p = e.commentThreads[s].getText();
                                    a.push({
                                        authorProfileImageUrl: e.commentThreads[s].snippet.topLevelComment.snippet.authorProfileImageUrl,
                                        authorName: e.commentThreads[s].snippet.topLevelComment.snippet.authorDisplayName,
                                        authorChannelUrl: e.commentThreads[s].snippet.topLevelComment.snippet.authorChannelUrl,
                                        text: p,
                                        passedTime: e.commentThreads[s].get("snippet.topLevelComment.snippet.publishedAt", o.utils.formatPassedTime),
                                        likesCount: e.commentThreads[s].get("snippet.topLevelComment.snippet.likeCount", o.utils.formatBigNumber),
                                        displayLikesCount: parseInt(e.commentThreads[s].snippet.topLevelComment.snippet.likeCount, 10) > 0,
                                        likesTitle: e.i18n.t("Likes") + ": " + e.commentThreads[s].get("snippet.topLevelComment.snippet.likeCount", o.utils.formatNumberDigits)
                                    })
                                }
                            return e.activeInfo = e.constructor.AVAILABLE_INFO, n.each(e.activeInfo, function(e, i) {
                                t[i] = !0
                            }), t.channel = e.channel && t.channelName || t.channelLogo || t.subscribeButton, t.ratingCounters = t.likesCounter || t.dislikesCounter, t.rating = t.ratingCounters || t.likesRatio, t.properties = t.viewsCounter || t.rating, t.infoMeta = t.channel || t.properties, t.info = t.title || t.date || t.infoMeta, t.comments = e.commentThreads && t.comments, t.content = t.info || t.comments, t.description = t.description && e.video.snippet.description, t.descriptionMoreButton = t.description && t.descriptionMoreButton, t.infoMain = t.description || t.date, e.channel && (i.videoChannel = e.renderer.render("popup.video.channel", {
                                displaying: t,
                                parts: i,
                                logo: e.channel.get("snippet.thumbnails.default.url"),
                                name: e.channel.get("snippet.title"),
                                link: "//www.youtube.com/channel/" + e.channel.id
                            })), i.videoProperties = e.renderer.render("popup.video.properties", {
                                displaying: t,
                                parts: i,
                                viewsCount: e.video.get("statistics.viewCount", o.utils.formatNumberWithCommas),
                                likesCount: e.video.get("statistics.likeCount", o.utils.formatBigNumber),
                                dislikesCount: e.video.get("statistics.dislikeCount", o.utils.formatBigNumber),
                                likesRatio: parseInt(100 * e.video.get("statistics.likeCount") / (parseInt(e.video.get("statistics.likeCount"), 10) + parseInt(e.video.get("statistics.dislikeCount"), 10)), 10),
                                titles: {
                                    views: e.i18n.t("Views") + ": " + e.video.get("statistics.viewCount", e.youtube.constructor.formatNumberDigits),
                                    likes: e.i18n.t("Likes") + ": " + e.video.get("statistics.likeCount", e.youtube.constructor.formatNumberDigits),
                                    dislikes: e.i18n.t("Dislikes") + ": " + e.video.get("statistics.dislikeCount", e.youtube.constructor.formatNumberDigits)
                                }
                            }), i.videoInfoMain = e.renderer.render("popup.video.info.main", {
                                displaying: t,
                                parts: i,
                                date: r,
                                text: e.video.get("snippet.description", [o.utils.nl2br, o.utils.formatAnchors]),
                                showMoreLabel: e.i18n.t("Show more")
                            }), e.commentThreads && (i.videoComments = e.renderer.render("popup.video.comments", {
                                displaying: t,
                                parts: i,
                                comments: a
                            })), i.videoInfoMeta = e.renderer.render("popup.video.info.meta", {
                                displaying: t,
                                parts: i
                            }), i.videoInfo = e.renderer.render("popup.video.info", {
                                displaying: t,
                                parts: i,
                                title: e.video.get("snippet.title")
                            }), i.videoContent = e.renderer.render("popup.video.content", {
                                displaying: t,
                                parts: i
                            }), i.videoPlayer = e.renderer.render("popup.video.player", {
                                displaying: t,
                                parts: i
                            }), n(e.renderer.render("popup.video.container", {
                                displaying: t,
                                parts: i
                            }))
                        },
                        watch: function() {
                            var e = this;
                            e.$wrapper.click(function(t) {
                                t.target === e.$wrapper.get(0) && e.close()
                            }), e.$controlClose.click(function(t) {
                                t.preventDefault(), e.close()
                            }), e.$popup.on("click", ".yottie-popup-video-description-more", function() {
                                n(this).text(function(t, i) {
                                    return i === e.i18n.t("Show more") ? e.i18n.t("Show less") : e.i18n.t("Show more")
                                }).siblings(".yottie-popup-video-description").toggleClass("yottie-popup-video-description-show-full")
                            })
                        },
                        run: function() {
                            var e = this;
                            return e.$popup = e.createPopupElement(), e.$popup.appendTo(document.body), e.$popup.attr("id", "yottie_popup_" + e.app.getId()), e.$wrapper = e.$popup.find(".yottie-popup-wrapper"), e.$inner = e.$popup.find(".yottie-popup-inner"), e.$controlClose = e.$popup.find(".yottie-popup-control-close"), e.watch(), e
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                16: [function(e, t, n) {
                    var o = e("./../../../../olivie/src/js/jquery"),
                        r = e("./../../../../olivie/src/js/olivie"),
                        a = e("./grid"),
                        s = o(window);
                    t.exports = r["class"]("FeedSection", [], function(e, t) {
                        var i = this;
                        t && t.sources && (o.isArray(t.sources) || (t.sources = [t.sources]), i.controller = e, i.title = t.name || i.controller.i18n.t("Untitled"), i.videoPlayMode = "popup", i.videos = [], i.source = [], o.each(t.sources, function(e, t) {
                            var n;
                            if ("string" === o.type(t)) {
                                if (n = i.controller.youtube.parseSource(t), !n) return
                            } else {
                                if (!(o.isPlainObject(t) && t.kind && t.criteria)) return;
                                n = t
                            }
                            i.source.push(n)
                        }), i.$element = i.createFeedSectionElement(), i.$inner = i.$element.children().first(), i.$loader = o(i.controller.renderer.render("feed.loader")), i.get("controller.app.options.content.arrowsControl") && (i.$element.append(i.controller.renderer.render("feed.arrows")), i.$arrowPrev = i.$element.find(".yottie-widget-feed-section-arrow-prev"), i.$arrowNext = i.$element.find(".yottie-widget-feed-section-arrow-next")), i.$loader.appendTo(i.$element), i.fetcher = i.controller.youtube.createUniversalVideoFetcher(i.source, "snippet,contentDetails,statistics"), i.inlinePlayers = {}, i.defaultBreakpoint = {
                            columns: i.get("controller.app.options.content.columns", r.utils.parseInt),
                            rows: 1,
                            gutter: 20
                        }, i.currentBreakpoint = i.defaultBreakpoint, i.grid = new a(i.$inner, i.defaultBreakpoint), i.auto = i.get("controller.app.options.content.auto", r.utils.parseInt), i.autoPauseOnHover = i.get("controller.app.options.content.autoPauseOnHover"), i.$element.addClass("yottie-widget-feed-section-" + i.get("controller.app.options.content.direction")))
                    }, {
                        VIDEO_AVAILABLE_INFO: ["playIcon", "duration", "title", "date", "description", "viewsCounter", "likesCounter", "commentsCounter"],
                        AVAILABLE_EFFECTS: ["slide", "fade"],
                        AVAILABLE_DIRECTIONS: ["horizontal"],
                        VIDEO_BREAKPOINTS: [560, 490, 440, 370, 280, 230, 180, 130, 70],
                        SWIPER_OPTIONS_ALIASES: {
                            columns: "slidesPerView",
                            gutter: "spaceBetween"
                        }
                    }, {
                        virgin: !0,
                        redistributing: !1,
                        fetcher: null,
                        controller: null,
                        title: null,
                        source: null,
                        grid: null,
                        swiper: null,
                        auto: null,
                        videoActiveInfo: null,
                        videoPlayMode: null,
                        inlinePlayers: null,
                        breakpoints: null,
                        currentBreakpoint: null,
                        prevBreakpoint: null,
                        defaultBreakpoint: null,
                        hover: null,
                        $element: null,
                        $inner: null,
                        $arrowPrev: null,
                        $arrowNext: null,
                        $scrollbar: null,
                        $loader: null,
                        createFeedSectionElement: function() {
                            var e = this;
                            return o(e.controller.renderer.render("feed.section"))
                        },
                        activate: function() {
                            var e = this;
                            e.$element.addClass("yottie-active"), e.virgin && (e.virgin = !1, e.fit(), e.fetcher.prepare().done(function() {
                                e.appendSlide().done(function() {
                                    e.appendSlide(!0).done(function() {
                                        e.auto && setTimeout(function() {
                                            e.swiper.autoplaying && !e.hover && e.swiper.slideNext()
                                        }, e.auto)
                                    })
                                })
                            }))
                        },
                        deactivate: function() {
                            var e = this;
                            e.$element.removeClass("yottie-active"), o.each(e.inlinePlayers, function(e, t) {
                                t.pauseVideo()
                            })
                        },
                        createVideoElement: function(e) {
                            var t = this,
                                i = {};
                            o.each(t.videoActiveInfo, function(e, t) {
                                i[t] = !0
                            }), i.properties = i.viewsCounter || i.likesCounter || i.commentsCounter, i.info = i.properties || i.title || i.date || i.description, i.videoPlayer = "inline" === t.videoPlayMode;
                            var n = {};
                            n.player = t.controller.renderer.render("video.player", {
                                displaying: i
                            }), n.preview = t.controller.renderer.render("video.preview", {
                                displaying: i,
                                id: e.id,
                                thumbnail: e.get("snippet.thumbnails.high.url"),
                                title: e.get("snippet.title"),
                                duration: e.parseDuration()
                            }), n.overlay = t.controller.renderer.render("video.overlay"), n.info = t.controller.renderer.render("video.info", {
                                displaying: i,
                                id: e.id,
                                title: e.get("snippet.title"),
                                description: e.get("snippet.description", [r.utils.nl2br, r.utils.formatAnchors]),
                                viewsCount: e.get("statistics.viewCount", r.utils.formatBigNumber),
                                likesCount: e.get("statistics.likeCount", r.utils.formatBigNumber),
                                commentsCount: e.get("statistics.commentCount", r.utils.formatBigNumber),
                                date: new Date(e.getPublishedTimestamp()).toLocaleDateString(),
                                titles: {
                                    views: t.controller.i18n.t("Views") + ": " + e.get("statistics.viewCount", t.controller.youtube.constructor.formatNumberDigits),
                                    likes: t.controller.i18n.t("Likes") + ": " + e.get("statistics.likeCount", t.controller.youtube.constructor.formatNumberDigits),
                                    comments: t.controller.i18n.t("Comments") + ": " + e.get("statistics.commentCount", t.controller.youtube.constructor.formatNumberDigits)
                                }
                            });
                            var a = o(t.controller.renderer.render("video.container", {
                                id: e.id,
                                displaying: i,
                                parts: n
                            }));
                            return a
                        },
                        appendSlide: function(e) {
                            var t = this,
                                i = t.grid.getItemsCount(),
                                n = o.Deferred();
                            return t.fetcher.hasNext() ? (e || t.showLoader(300), t.fetcher.fetch(i).done(function(e) {
                                var i = o(),
                                    r = o(t.controller.renderer.render("feed.slide"));
                                o.each(e, function(e, n) {
                                    var o = t.createVideoElement(n);
                                    i = i.add(o)
                                }), i.appendTo(r), t.swiper.appendSlide(r.get(0)), t.fitSlides(r), t.hideLoader(), n.resolve()
                            })) : n.reject(), n.promise()
                        },
                        isHorizontal: function() {
                            return !0
                        },
                        run: function() {
                            var e = this;
                            e.videoLayout = e.get("controller.app.options.video.layout"), e.videoActiveInfo = e.constructor.VIDEO_AVAILABLE_INFO;
                            var t = e.get("controller.app.options.content.transitionEffect", function(t) {
                                    return ~e.constructor.AVAILABLE_EFFECTS.indexOf(t) ? t : "slide"
                                }),
                                n = "horizontal";
                            e.swiper = new i(e.$inner, {
                                direction: n,
                                effect: t,
                                speed: e.get("controller.app.options.content.transitionSpeed", r.utils.parseInt),
                                cube: {
                                    shadowScale: .8,
                                    shadowOffset: 15
                                },
                                coverflow: {
                                    rotate: 60
                                },
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                freeMode: !1,
                                mousewheelControl: !1,
                                simulateTouch: e.get("controller.app.options.content.dragControl"),
                                prevButton: e.$arrowPrev ? e.$arrowPrev.get() : null,
                                nextButton: e.$arrowNext ? e.$arrowNext.get() : null,
                                autoplay: e.auto,
                                watchSlidesProgress: !0,
                                watchSlidesVisibility: !0
                            }), e.swiper.on("reachEnd", function() {
                                var t = e.fetcher.hasNext();
                                e.swiper.stopAutoplay(), t && !e.redistributing && e.appendSlide(!0).done(function() {
                                    e.hover || e.swiper.startAutoplay()
                                }), e.$arrowNext && e.$arrowNext.toggleClass("yottie-widget-feed-section-arrow-has-next", t)
                            });
                            var a = function(t) {
                                if ("youtube" !== e.videoPlayMode) {
                                    t.preventDefault(), t.stopPropagation();
                                    var i, n = o(this),
                                        r = n.closest(".yottie-widget-video"),
                                        a = r.attr("data-yt-id");
                                    "popup" === e.videoPlayMode ? e.controller.popup.open("https://www.youtube.com/watch?v=" + a) : (i = e.inlinePlayers[a], i ? i.getPlayerState() === YT.PlayerState.PLAYING ? i.pauseVideo() : i.playVideo() : (i = new YT.Player(r.find(".yottie-widget-video-player span").get(0), {
                                        videoId: a,
                                        playerVars: {
                                            autoplay: !0,
                                            showinfo: !1
                                        },
                                        events: {
                                            onStateChange: function(t) {
                                                switch (t.data) {
                                                    case YT.PlayerState.ENDED:
                                                        t.target.pauseVideo(), t.target.seekTo(0);
                                                        break;
                                                    case YT.PlayerState.PLAYING:
                                                        o.each(e.inlinePlayers, function(e, t) {
                                                            e !== a && t.pauseVideo()
                                                        })
                                                }
                                            }
                                        }
                                    }), e.fitVideos(r), e.inlinePlayers[a] = i))
                                }
                            };
                            e.$element.on("click", ".yottie-widget-video", function(t) {
                                if ("cinema" === e.videoLayout) {
                                    var i = o(t.target),
                                        n = o(".yottie-widget-video-preview", this);
                                    i.is("a") || i.parent().is(".yottie-widget-video-info-caption") || ("youtube" === e.videoPlayMode ? window.open(n.attr("href")) : a.call(n.get(0), t))
                                }
                            }), e.$element.on("click", ".yottie-widget-video-info-title, .yottie-widget-video-preview", a), e.autoPauseOnHover && (e.$element.on("mouseenter", function() {
                                e.hover = !0, e.swiper.stopAutoplay()
                            }), e.$element.on("mouseleave", function() {
                                e.hover = !1, e.swiper.startAutoplay()
                            })), o(window).resize(function() {
                                e.fit()
                            })
                        },
                        fit: function() {
                            var e = this;
                            e.fitGrid(), e.fitSlides()
                        },
                        fitInner: function() {
                            var e = this,
                                t = e.get("controller.app.options.content.rows", r.utils.parseInt),
                                i = e.$element.find(".yottie-widget-video:first").outerHeight(!0),
                                n = parseInt(e.$element.find(".yottie-widget-feed-section-slide:first").css("padding-top"), 10);
                            e.$inner.innerHeight(i * t + n)
                        },
                        fitSlides: function(e) {
                            var t = this;
                            e = e || t.$element.find(".yottie-widget-feed-section-slide"), e.css({
                                paddingTop: t.grid.gutter,
                                paddingLeft: t.grid.gutter
                            }), t.fitVideos(e.find(".yottie-widget-video"))
                        },
                        fitGrid: function() {
                            var e = this;
                            if (e.breakpoints && e.breakpoints.length) {
                                e.prevBreakpoint = e.currentBreakpoint;
                                var t, i = s.width();
                                o.each(e.breakpoints, function(e, n) {
                                    return i <= n.mw ? (t = n, !1) : void 0
                                }), t || (t = e.defaultBreakpoint), t !== e.currentBreakpoint && (e.currentBreakpoint = t, e.grid.setOptions(e.currentBreakpoint))
                            }
                        },
                        fitVideos: function(e) {
                            var t = this;
                            e = e || t.$element.find(".yottie-widget-video"), t.grid.calculate(), e.innerWidth(t.grid.itemWidth).css({
                                marginBottom: t.grid.gutter,
                                marginRight: t.grid.gutter
                            });
                            var i = e.find(".yottie-widget-video-preview"),
                                n = e.find(".yottie-widget-video-player iframe"),
                                o = i.innerWidth(),
                                r = o / 16 * 9;
                            t.controller.widget.constructor.updateBreakpoints(e, t.constructor.VIDEO_BREAKPOINTS, "yottie-mw-"), o = i.innerWidth(), r = o / 16 * 9, i.find(".yottie-widget-video-preview-thumbnail").css({
                                width: o,
                                height: r
                            }), "horizontal" === t.videoLayout && e.find(".yottie-widget-video-info").innerHeight(r), n.length && n.width(o).height(r)
                        },
                        showLoader: function(e) {
                            var t = this;
                            t.$loader && !t.$loader.is(".yottie-visible") && (t.loaderTimeout && (clearTimeout(t.loaderTimeout), t.loaderTimeout = null), t.loaderTimeout = setTimeout(function() {
                                t.$loader.addClass("yottie-visible")
                            }, parseInt(e, 10)))
                        },
                        hideLoader: function() {
                            var e = this;
                            e.$loader && (e.loaderTimeout && (clearTimeout(e.loaderTimeout), e.loaderTimeout = null), e.$loader.removeClass("yottie-visible"))
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./grid": 18
                }],
                17: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        r = e("./feed-section");
                    t.exports = o.component("Feed", function() {
                        var e = this;
                        e.sections = [], e.$e = n("<div></div>")
                    }, {
                        dependencies: ["renderer", "i18n", "youtube", "popup", "widget", "ads"]
                    }, {
                        sections: null,
                        $element: null,
                        $inner: null,
                        $e: null,
                        createFeedElement: function() {
                            var e = this;
                            return n(e.renderer.render("feed.container"))
                        },
                        getSection: function(e) {
                            var t = this;
                            return t.hasSection(e) ? t.sections[e] : void 0
                        },
                        hasSection: function(e) {
                            var t = this;
                            return !!t.sections[e]
                        },
                        setActiveSection: function(e) {
                            var t = this;
                            t.hasSection(e) && (n.each(t.sections, function(e, t) {
                                t.deactivate()
                            }), t.getSection(e).activate())
                        },
                        run: function(e) {
                            var t = this;
                            t.$element = t.createFeedElement(), t.$inner = t.$element.children().first(), n.each(e, function(e, i) {
                                var n = new r(t, i);
                                n.$element.appendTo(t.$inner), n.run(), t.sections.push(n)
                            })
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./feed-section": 16
                }],
                18: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie"));
                    t.exports = n["class"]("Grid", [], function(e, t) {
                        var i = this;
                        i.$element = e, i.options = t, i.columns = i.options.columns, i.rows = i.options.rows, i.gutter = i.options.gutter
                    }, {}, {
                        options: null,
                        columns: null,
                        rows: null,
                        gutter: null,
                        $element: null,
                        setOptions: function(e, t) {
                            var i = this;
                            i.columns = e.hasOwnProperty("columns") ? n.utils.parseInt(e.columns) : i.columns, i.rows = e.hasOwnProperty("rows") ? n.utils.parseInt(e.rows) : i.rows, i.gutter = e.hasOwnProperty("gutter") ? n.utils.parseInt(e.gutter) : i.gutter, t && i.calculate()
                        },
                        calculate: function() {
                            var e = this,
                                t = e.$element.innerWidth(),
                                i = e.gutter * (e.columns + 1);
                            e.itemWidth = (t - i) / e.columns
                        },
                        getItemsCount: function() {
                            var e = this;
                            return e.columns * e.rows
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                19: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Groups", function() {
                        var e = this;
                        e.$e = n("<div></div>")
                    }, {
                        dependencies: ["renderer", "i18n", "feed"]
                    }, {
                        sourceGroups: null,
                        $element: null,
                        $inner: null,
                        $list: null,
                        $items: null,
                        $e: null,
                        createGroupsElement: function() {
                            var e = this;
                            return n(e.renderer.render("groups.container", {
                                visible: !!e.app.options.groups.visible,
                                list: e.renderer.render("groups.list", {
                                    groups: e.sourceGroups
                                })
                            }))
                        },
                        fit: function() {},
                        run: function(e) {
                            var t = this;
                            t.sourceGroups = n.extend(!1, {}, e), n.each(t.sourceGroups, function(e, i) {
                                i.name || (i.name = t.i18n.t("Untitled"))
                            }), t.$element = t.createGroupsElement(), t.$inner = t.$element.children().first(), t.$list = t.$inner.children().first(), t.$items = t.$list.children(), t.$items.on("click", function() {
                                var e = n(this),
                                    i = e.children().first().attr("data-yt-id");
                                t.$items.removeClass("yottie-active"), e.addClass("yottie-active"), t.feed.setActiveSection(i)
                            })
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                20: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Header", function() {
                        var e = this;
                        e.$e = n("<div></div>")
                    }, {
                        AVAILABLE_INFO: ["logo", "banner", "channelName", "channelDescription", "videosCounter", "subscribersCounter", "viewsCounter", "subscribeButton"],
                        dependencies: ["error", "youtube", "i18n", "renderer"]
                    }, {
                        visible: null,
                        channel: null,
                        activeInfo: null,
                        $element: null,
                        $e: null,
                        createHeaderElement: function() {
                            var e = this;
                            e.activeInfo = e.constructor.AVAILABLE_INFO, e.activeInfo = e.activeInfo.filter(function(t) {
                                return !!~e.constructor.AVAILABLE_INFO.indexOf(t)
                            });
                            var t = {};
                            n.each(e.activeInfo, function(e, i) {
                                t[i] = !0
                            }), t.properties = e.channel.id && (t.videosCounter || t.subscribersCounter || t.viewsCounter), t.channel = t.channelName || t.channelDescription, t.logo = t.logo && e.channel.get("snippet.thumbnails.default.url"), t.banner = t.banner && e.channel.get("brandingSettings.image.bannerImageUrl"), t.branding = t.logo || t.banner, t.subscribeButton = e.channel.id && t.subscribeButton;
                            var i = {};
                            return i.logo = e.renderer.render("header.logo", {
                                displaying: t,
                                id: e.channel.id,
                                url: e.channel.get("snippet.thumbnails.default.url"),
                                title: e.channel.get("brandingSettings.channel.title")
                            }), i.channel = e.renderer.render("header.channel", {
                                displaying: t,
                                id: e.channel.id,
                                name: e.channel.get("brandingSettings.channel.title"),
                                description: e.channel.get("brandingSettings.channel.description", o.utils.formatAnchors)
                            }), e.channel.get("statistics.videoCount"), i.properties = e.renderer.render("header.properties", {
                                displaying: t,
                                videoCount: e.channel.get("statistics.videoCount", o.utils.formatBigNumber),
                                subscriberCount: e.channel.get("statistics.subscriberCount", o.utils.formatBigNumber),
                                viewCount: e.channel.get("statistics.viewCount", o.utils.formatBigNumber),
                                titles: {
                                    videos: e.i18n.t("Videos") + ": " + e.channel.get("statistics.videoCount", e.youtube.constructor.formatNumberDigits),
                                    subscribers: e.i18n.t("Subscribers") + ": " + e.channel.get("statistics.subscriberCount", e.youtube.constructor.formatNumberDigits),
                                    views: e.i18n.t("Views") + ": " + e.channel.get("statistics.viewCount", e.youtube.constructor.formatNumberDigits)
                                }
                            }), i.overlay = e.renderer.render("header.overlay", {
                                displaying: t
                            }), i.banner = e.renderer.render("header.banner", {
                                displaying: t,
                                url: e.channel.get("brandingSettings.image.bannerTabletHdImageUrl")
                            }), i.subscribe = e.renderer.render("header.subscribe", {
                                displaying: t
                            }), n(e.renderer.render("header.container", {
                                visible: e.visible,
                                layout: "classic",
                                displaying: t,
                                parts: i
                            }))
                        },
                        run: function() {
                            var e, t = this,
                                i = n.Deferred();
                            if (t.visible = t.app.options.header.visible, t.app.options.channel) {
                                if ("string" !== n.type(t.app.options.channel)) return;
                                if (e = t.youtube.parseSource(t.app.options.channel), !e || "youtube#channel" !== e.kind) return void t.error["throw"]('Option "channel" contents invalid channel or user url.');
                                t.youtube.model(e.kind).find(e.criteria, "snippet,brandingSettings,statistics,contentDetails").done(function(e) {
                                    t.channel = e, i.resolve()
                                }).fail(function() {
                                    t.error["throw"]('Option "channel" contents invalid channel or user url.')
                                })
                            } else t.channel = t.youtube.model("youtube#channel").create(), i.resolve();
                            return i.done(function() {
                                t.channel && (t.visible = t.visible && (t.channel.get("brandingSettings.channel.title") || t.channel.get("brandingSettings.channel.description") || t.channel.get("snippet.thumbnails.default.url") || t.channel.get("brandingSettings.image.bannerImageUrl")), t.$element = t.createHeaderElement(), t.channel.renderButton(t.$element.find(".yottie-widget-header-subscribe-button").get(0))), setTimeout(function() {
                                    t.trigger("ready", [t])
                                })
                            }), t
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                21: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Widget", function() {
                        var e = this;
                        e.$e = n("<div></div>")
                    }, {
                        dependencies: ["renderer"],
                        BREAKPOINTS: [1354, 1056, 780, 640, 460, 410],
                        updateBreakpoints: function(e, t, i) {
                            var o = {},
                                r = e.innerWidth();
                            n.each(t, function(e, t) {
                                o[i + t] = t >= r
                            }), e.removeClass(Object.keys(o).join(" ")), e.addClass(Object.keys(o).filter(function(e) {
                                return o[e]
                            }).join(" "))
                        }
                    }, {
                        $e: null,
                        run: function() {
                            var e = this,
                                t = n(e.renderer.render("widget"));
                            t.find("yottie[data-part]").each(function(t, i) {
                                var o = n(i),
                                    r = o.attr("data-part"),
                                    a = e.app.component(r);
                                a && a.$element ? o.replaceWith(a.$element) : o.remove()
                            }), t.appendTo(e.app.$element), e.app.$element.attr("id", "yottie_" + e.app.getId()), e.app.$element.css({
                                width: "auto"
                            }), e.fit(), n(window).resize(function() {
                                e.fit()
                            })
                        },
                        fit: function() {
                            var e = this;
                            e.constructor.updateBreakpoints(e.app.$element, e.constructor.BREAKPOINTS, "yottie-mw-")
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                22: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o.component("Error", function() {}, {
                        dependencies: ["renderer"]
                    }, {
                        $element: null,
                        $content: null,
                        $msg: null,
                        createErrorElement: function() {
                            var e = this;
                            return n(e.renderer.render("error.container"))
                        },
                        run: function() {
                            var e = this;
                            e.$element = e.createErrorElement(), e.$content = e.$element.find(".yottie-error-content"), e.$element.appendTo(e.app.$element)
                        },
                        "throw": function(e) {
                            var t = this;
                            t.$element.addClass("yottie-visible");
                            var i = n(t.renderer.render("error.content", {
                                message: e
                            }));
                            t.$msg ? t.$msg = t.$msg.replaceWith(i) : (t.$msg = i, t.$msg.appendTo(t.$content))
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                23: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("Channel", [o], function(e) {
                            var t = this;
                            t.getParent("Model").call(t, e)
                        }, {
                            client: e,
                            path: "/channels"
                        }, {
                            renderButton: function(e) {
                                var t = this;
                                gapi.ytsubscribe.render(e, {
                                    channelId: t.id
                                })
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./model": 26
                }],
                24: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("CommentThread", [o], function(e) {
                            var t = this;
                            t.getParent("Model").call(t, e)
                        }, {
                            client: e,
                            path: "/commentThreads"
                        }, {
                            getText: function() {
                                var e = this,
                                    t = e.get("snippet.topLevelComment.snippet.textDisplay");
                                return t ? t.replace(/<a([^>]+)>/, '<a$1 target="_blank" rel="nofollow">') : null
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./model": 26
                }],
                25: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("Fetcher", [], function(e, t) {
                        var i = this;
                        e && t && (i.params = e, i.part = t)
                    }, {
                        create: function(e, t) {
                            var i = this;
                            return new i(e, t)
                        },
                        fetchDone: function(e, t, i, n, o) {
                            var r = this;
                            Array.prototype.push.apply(n, e.items), t.nextPageToken = e.nextPageToken || null, t.hasNextPage = !!t.nextPageToken;
                            var a = o - n.length;
                            t.hasNextPage && n.length < o ? t.fetch(a, i, n, o) : (n = n.map(function(e) {
                                return r.model.create(e)
                            }), i.resolve(n, t))
                        }
                    }, {
                        params: null,
                        part: null,
                        nextPageToken: null,
                        hasNextPage: !0,
                        hasNext: function() {
                            var e = this;
                            return e.hasNextPage
                        },
                        fetch: function(e, t, i, o) {
                            var r = this;
                            o = o || e, e = e <= r.constructor.model.MAX_RESULTS_MAX ? e : r.constructor.model.MAX_RESULTS_MAX, t = t || n.Deferred(), i = i || [];
                            var a = n.extend({}, r.params, {
                                part: r.part,
                                maxResults: e,
                                pageToken: r.nextPageToken
                            });
                            return r.hasNextPage && r.constructor.model.client.get(r.constructor.model.path, a).done(function(e) {
                                r.constructor.fetchDone(e, r, t, i, o)
                            }), t.promise()
                        },
                        fetchAll: function(e) {
                            var t = this;
                            e = e || n.Deferred();
                            var i = n.extend({}, t.params, {
                                part: t.part,
                                maxResults: t.constructor.model.MAX_RESULTS_MAX
                            });
                            return t.hasNextPage && t.constructor.model.client.get(t.constructor.model.path, i).done(function(i) {
                                t.constructor.fetchDone(i, t, e, [], i.pageInfo.totalResults)
                            }), e.promise()
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                26: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("Model", [], function(e) {
                        var t = this;
                        e && t.fill(e)
                    }, {
                        MAX_RESULTS_MIN: 0,
                        MAX_RESULTS_MAX: 49,
                        find: function(e, t, i) {
                            var o = this;
                            return e && t ? (i = i || n.Deferred(), e.maxResults = 1, e.part = t, o.client.get(o.path, e).done(function(e) {
                                e.items.length ? i.resolve(o.create(e.items[0])) : i.reject()
                            }), i.promise()) : void 0
                        },
                        findAll: function(e, t, i, o) {
                            var r = this;
                            return e && t ? (o = o || n.Deferred(), e.part = t, i && (e.maxResults = i), r.client.get(r.path, e).done(function(e) {
                                var t = [];
                                e.items && e.items.length ? (n.each(e.items, function(e, i) {
                                    t.push(r.create(i))
                                }), o.resolve(t)) : o.reject()
                            }), o.promise()) : void 0
                        },
                        create: function(e) {
                            var t = this;
                            return new t(e)
                        }
                    }, {
                        fill: function(e) {
                            var t = this;
                            n.extend(t, e)
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                27: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("PlaylistItem", [o], function(e) {
                            var t = this;
                            t.getParent("Model").call(t, e)
                        }, {
                            client: e,
                            path: "/playlistItems"
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./model": 26
                }],
                28: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./fetcher");
                    t.exports = function(e) {
                        return n["class"]("PlaylistItemsFetcher", [o], function(e, t) {
                            var i = this;
                            i.getParent("Fetcher").call(i, e, t)
                        }, {
                            model: e
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./fetcher": 25
                }],
                29: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./model");
                    t.exports = function(e) {
                        return n["class"]("Playlist", [o], function(e) {
                            var t = this;
                            t.getParent("Model").call(t, e)
                        }, {
                            client: e,
                            path: "/playlists"
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./model": 26
                }],
                30: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./fetcher");
                    t.exports = function(e) {
                        return n["class"]("PlaylistsFetcher", [o], function(e, t) {
                            var i = this;
                            i.getParent("Fetcher").call(i, e, t)
                        }, {
                            model: e
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./fetcher": 25
                }],
                31: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie");
                    t.exports = o["class"]("UniversalVideoFetcher", [], function(e, t, i) {
                        var n = this;
                        n.rawSource = e, n.part = t, n.youtube = i, n.preparedSource = [], n.fetchers = [], n.stack = []
                    }, {
                        stackSortingFunc: function(e, t) {
                            var i = e.getPublishedTimestamp(),
                                n = t.getPublishedTimestamp();
                            return i > n ? -1 : n > i ? 1 : 0
                        }
                    }, {
                        youtube: null,
                        rawSource: null,
                        preparedSource: null,
                        fetchers: null,
                        stack: null,
                        part: null,
                        isReady: function() {
                            var e = this;
                            return !!e.fetchers.length
                        },
                        sortStack: function() {
                            var e = this;
                            e.stack.sort(e.constructor.stackSortingFunc)
                        },
                        hasNext: function() {
                            var e = this;
                            return e.fetchers.some(function(e) {
                                return e.hasNext()
                            })
                        },
                        prepare: function() {
                            var e = this,
                                t = n.Deferred(),
                                i = [];
                            return n.each(e.rawSource, function(t, r) {
                                var a = n.Deferred();
                                "youtube#channel" === r.kind ? e.youtube.model(r.kind).find(r.criteria, "contentDetails").done(function(e) {
                                    var t = o.utils.getProperty(e, "contentDetails.relatedPlaylists.uploads");
                                    t && a.resolve({
                                        kind: "youtube#playlist",
                                        criteria: {
                                            id: t
                                        }
                                    })
                                }) : a.resolve(r), i.push(a)
                            }), n.when.apply(n, i).done(function() {
                                var i = [],
                                    o = [];
                                n.each(arguments, function(e, t) {
                                    "youtube#playlist" === t.kind ? i.push(t) : o.push(t.criteria.id)
                                }), e.preparedSource = i, o.length && e.preparedSource.push({
                                    kind: "youtube#video",
                                    criteria: {
                                        id: o
                                    }
                                }), n.each(e.preparedSource, function(t, i) {
                                    var n, o, r, a;
                                    "youtube#playlist" === i.kind ? (r = "youtube#playlistItem", o = {
                                        playlistId: i.criteria.id
                                    }, a = "contentDetails") : (r = i.kind, o = {
                                        id: i.criteria.id.join(",")
                                    }, a = e.part), n = e.youtube.fetcher(r).create(o, a), e.fetchers.push(n)
                                }), t.resolve()
                            }), t.promise()
                        },
                        fetch: function(e, t) {
                            var i = this;
                            t = t || n.Deferred();
                            var o, r = [],
                                a = i.hasNext();
                            return i.isReady() ? i.stack.length >= e || !a && i.stack.length ? (o = i.stack.slice(0, e), i.stack.splice(0, e), t.resolve(o)) : a ? (n.each(i.fetchers, function(t, i) {
                                i.hasNext() && ("VideoFetcher" === i.constructor.id ? r.push(i.fetchAll()) : r.push(i.fetch(e)))
                            }), n.when.apply(n, r).done(function() {
                                var o = [],
                                    r = "object" === n.type(arguments[1]) ? [arguments] : arguments;
                                n.each(r, function(e, t) {
                                    var n = t[0],
                                        r = t[1];
                                    "VideoFetcher" === r.constructor.id ? Array.prototype.push.apply(i.stack, n) : Array.prototype.push.apply(o, n.map(function(e) {
                                        return e.contentDetails.videoId
                                    }))
                                });
                                var a = n.Deferred();
                                o.length ? i.youtube.model("youtube#video").findAll({
                                    id: o.join(",")
                                }, i.part).done(function(e) {
                                    Array.prototype.push.apply(i.stack, e), a.resolve()
                                }) : a.resolve(), a.done(function() {
                                    i.sortStack(), i.fetch(e, t)
                                })
                            })) : t.reject(1) : t.reject(0), t.promise()
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10
                }],
                32: [function(e, t, i) {
                    var n = (e("./../../../../olivie/src/js/jquery"), e("./../../../../olivie/src/js/olivie")),
                        o = e("./fetcher");
                    t.exports = function(e) {
                        return n["class"]("VideoFetcher", [o], function(e, t) {
                            var i = this;
                            i.getParent("Fetcher").call(i, e, t)
                        }, {
                            model: e
                        }, {})
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./fetcher": 25
                }],
                33: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        r = e("./model");
                    t.exports = function(e) {
                        return o["class"]("Video", [r], function(e) {
                            var t = this;
                            t.getParent("Model").call(t, e)
                        }, {
                            DURATION_REGEX: /\d+[A-Z]/g,
                            client: e,
                            path: "/videos"
                        }, {
                            getPublishedTimestamp: function() {
                                var e = this;
                                return e.get("snippet.publishedAt", Date.parse)
                            },
                            parseDuration: function() {
                                var e = this,
                                    t = {},
                                    i = e.get("contentDetails.duration");
                                if (i) {
                                    var o = i.match(e.constructor.DURATION_REGEX);
                                    return n.each(o, function(e, i) {
                                        var n = i.substr(i.length - 1).toLowerCase(),
                                            o = "0" + parseInt(i.substr(0, i.length - 1), 10);
                                        o = o.substr(-2), t[n] = o
                                    }), t
                                }
                            }
                        })
                    }
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./model": 26
                }],
                34: [function(e, t, i) {
                    var n = e("./../../../../olivie/src/js/jquery"),
                        o = e("./../../../../olivie/src/js/olivie"),
                        r = e("./universal-video-fetcher"),
                        a = e("./channel"),
                        s = e("./playlist"),
                        l = e("./playlist-item"),
                        p = e("./video"),
                        d = e("./comment-thread"),
                        u = e("./playlists-fetcher"),
                        c = e("./playlist-items-fetcher"),
                        f = e("./video-fetcher");
                    t.exports = o.component("Youtube", function() {}, {
                        dependencies: ["client"],
                        SOURCE_DETERMINANTS: [{
                            kind: "youtube#channel",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/channel\/([^\/]+)\/?$/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        id: e[2]
                                    }
                                }
                            }
                        }, {
                            kind: "youtube#channel",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/user\/([^\/]+)\/?$/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        forUsername: e[2]
                                    }
                                }
                            }
                        }, {
                            kind: "youtube#playlist",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/playlist\/?\?list=([^$]+)$/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        id: e[2]
                                    }
                                }
                            }
                        }, {
                            kind: "youtube#video",
                            regex: /^https?:\/\/(www\.)?youtube\.com\/watch\/?\?v=([^$&]+)/,
                            func: function(e) {
                                return {
                                    criteria: {
                                        id: e[2]
                                    }
                                }
                            }
                        }],
                        formatNumberDigits: function(e) {
                            return o.utils.numberFormat(e, 0, null, " ")
                        }
                    }, {
                        models: null,
                        register: function(e) {
                            var t = this;
                            t.getParent("Component").prototype.register.call(t, e), t.models = {
                                "youtube#channel": a(t.client),
                                "youtube#playlist": s(t.client),
                                "youtube#playlistItem": l(t.client),
                                "youtube#video": p(t.client),
                                "youtube#commentThread": d(t.client)
                            }, t.fetchers = {
                                "youtube#playlist": u(t.model("youtube#playlist")),
                                "youtube#playlistItem": c(t.model("youtube#playlistItem")),
                                "youtube#video": f(t.model("youtube#video"))
                            }
                        },
                        hasModel: function(e) {
                            var t = this;
                            return !!t.models[e]
                        },
                        model: function(e) {
                            var t = this;
                            return t.hasModel(e) ? t.models[e] : void 0
                        },
                        hasFetcher: function(e) {
                            var t = this;
                            return !!t.fetchers[e]
                        },
                        fetcher: function(e) {
                            var t = this;
                            return t.hasFetcher(e) ? t.fetchers[e] : void 0
                        },
                        createUniversalVideoFetcher: function(e, t) {
                            var i = this;
                            return new r(e, t, i)
                        },
                        parseSource: function(e) {
                            var t = this,
                                i = null;
                            return n.each(t.constructor.SOURCE_DETERMINANTS, function(t, o) {
                                var r = e.match(o.regex);
                                return r ? (i = n.extend({
                                    kind: o.kind
                                }, o.func(r)), !1) : void 0
                            }), i
                        },
                        resizeLogo: function(e, t) {
                            return e.replace(/\/s\d+-c-k-no/, "/s" + parseInt(t, 10) + "-c-k-no")
                        }
                    })
                }, {
                    "./../../../../olivie/src/js/jquery": 5,
                    "./../../../../olivie/src/js/olivie": 10,
                    "./channel": 23,
                    "./comment-thread": 24,
                    "./playlist": 29,
                    "./playlist-item": 27,
                    "./playlist-items-fetcher": 28,
                    "./playlists-fetcher": 30,
                    "./universal-video-fetcher": 31,
                    "./video": 33,
                    "./video-fetcher": 32
                }],
                35: [function(e, t, i) {
                    t.exports = {
                        "default": {
                            header: {
                                bg: "rgb(255, 255, 255)",
                                bannerOverlay: "rgba(255, 255, 255, 0.81)",
                                channelName: "rgb(34, 34, 34)",
                                channelNameHover: "rgb(47, 165, 255)",
                                channelDescription: "rgb(34, 34, 34)",
                                counters: "rgb(102, 102, 102)"
                            },
                            groups: {
                                bg: "rgb(255, 255, 255)",
                                link: "rgb(34, 34, 34)",
                                linkHover: "rgb(255, 0, 0)",
                                linkActive: "rgb(255, 0, 0)",
                                highlight: "rgb(204, 204, 204)",
                                highlightHover: "rgb(255, 0, 0)",
                                highlightActive: "rgb(255, 0, 0)"
                            },
                            content: {
                                bg: "rgb(255, 255, 255)",
                                arrows: "rgb(255, 255, 255)",
                                arrowsHover: "rgb(255, 0, 0)",
                                arrowsBg: "rgba(0, 0, 0, 0.4)",
                                arrowsBgHover: "rgba(0, 0, 0, 0.8)",
                                scrollbarBg: "rgb(204, 204, 204)",
                                scrollbarSliderBg: "rgba(0, 0, 0, 0.4)"
                            },
                            video: {
                                bg: "rgb(243, 243, 243)",
                                overlay: "rgba(255, 255, 255, 0.9)",
                                playIcon: "rgba(255, 255, 255, 0.4)",
                                playIconHover: "rgba(255, 255, 255, 0.8)",
                                duration: "rgb(255, 255, 255)",
                                durationBg: "rgba(34, 34, 34, 0.81)",
                                title: "rgb(26, 137, 222)",
                                titleHover: "rgb(47, 165, 255)",
                                date: "rgb(140, 140, 140)",
                                description: "rgb(34, 34, 34)",
                                anchor: "rgb(26, 137, 222)",
                                anchorHover: "rgb(47, 165, 255)",
                                counters: "rgb(149, 149, 149)"
                            },
                            popup: {
                                bg: "rgb(255, 255, 255)",
                                overlay: "rgba(0, 0, 0, 0.7)",
                                title: "rgb(34, 34, 34)",
                                channelName: "rgb(34, 34, 34)",
                                channelNameHover: "rgb(47, 165, 255)",
                                viewsCounter: "rgb(85, 85, 85)",
                                likesRatio: "rgb(47, 165, 255)",
                                dislikesRatio: "rgb(207, 207, 207)",
                                likesCounter: "rgb(144, 144, 144)",
                                dislikesCounter: "rgb(144, 144, 144)",
                                date: "rgb(34, 34, 34)",
                                description: "rgb(34, 34, 34)",
                                anchor: "rgb(26, 137, 222)",
                                anchorHover: "rgb(47, 165, 255)",
                                descriptionMoreButton: "rgb(102, 102, 102)",
                                descriptionMoreButtonHover: "rgb(34, 34, 34)",
                                commentsUsername: "rgb(34, 34, 34)",
                                commentsUsernameHover: "rgb(47, 165, 255)",
                                commentsPassedTime: "rgb(115, 115, 115)",
                                commentsText: "rgb(34, 34, 34)",
                                commentsLikes: "rgb(180, 180, 180)",
                                controls: "rgb(160, 160, 160)",
                                controlsHover: "rgb(220, 220, 220)",
                                controlsMobile: "rgb(220, 220, 220)",
                                controlsMobileBg: "rgba(255, 255, 255, 0)"
                            }
                        }
                    }
                }, {}],
                36: [function(e, i, n) {
                    var o = {};
                    o.ads = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return '<ins class="adsbygoogle" style="width:' + s((o = null != (o = t.width || (null != e ? e.width : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "width",
                                hash: {},
                                data: n
                            }) : o)) + "px;height:" + s((o = null != (o = t.height || (null != e ? e.height : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "height",
                                hash: {},
                                data: n
                            }) : o)) + 'px" data-ad-client="' + s((o = null != (o = t.pubId || (null != e ? e.pubId : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "pubId",
                                hash: {},
                                data: n
                            }) : o)) + '" data-ad-slot="' + s((o = null != (o = t.slotId || (null != e ? e.slotId : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "slotId",
                                hash: {},
                                data: n
                            }) : o)) + '"></ins>'
                        },
                        useData: !0
                    }), o.colorizer = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r, a = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression,
                                p = this.lambda;
                            return " #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-header { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.bg : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-header-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.bannerOverlay : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-header-channel-title a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelName : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-header-channel-title a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelNameHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-header-channel-caption { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelDescription : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-header-properties-item { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.counters : o, e)) + "; }  #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.link : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item:hover a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item.yottie-active a, #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item.yottie-active:hover a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkActive : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-inner::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlight : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item:hover::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlightHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item.yottie-active:hover::after, #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-nav-list-item.yottie-active::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlightActive : o, e)) + "; }  #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.bg : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsBg : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow:hover { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsBgHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow span::before, #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow span::after, #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrows : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow:hover span::before, #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow:hover span::after, #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-arrow:hover::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-scrollbar { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.scrollbarBg : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-feed-section-scrollbar .swiper-scrollbar-drag { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.scrollbarSliderBg : o, e)) + "; }  #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.bg : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.overlay : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-preview-play { border-left-color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.playIcon : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video:hover .yottie-widget-video-preview-play { border-left-color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.playIconHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-preview-marker-duration { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.durationBg : o, e)) + "; color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.duration : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.title : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-title:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.titleHover : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-passed-time { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.date : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-caption { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.description : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-properties-item { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.counters : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-caption a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.anchor : o, e)) + "; } #yottie_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-widget-video-info-caption a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.anchorHover : o, e)) + "; }  #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-inner { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.bg : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-inner a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.anchor : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-inner a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.anchorHover : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.overlay : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.title : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.title : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-inner .yottie-popup-video-channel-name { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.channelName : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-inner .yottie-popup-video-channel-name:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.channelNameHover : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-properties-views { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.viewsCounter : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-properties-rating-ratio { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesRatio : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-properties-rating-ratio span { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesRatio : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-properties-rating-counters-like span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesCounter : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-properties-rating-counters-dislike span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesCounter : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-date { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.date : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-description { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.description : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-description-more { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.descriptionMoreButton : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-description-more:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.descriptionMoreButtonHover : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-comments-item-name a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsUsername : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-comments-item-name a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsUsernameHover : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-comments-item-passed-time { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsPassedTime : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-comments-item-text { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsText : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-video-comments-item-likes { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsLikes : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close::before, #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controls : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close:hover::before, #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close:hover::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsHover : o, e)) + "; } @media only screen and (max-width: 768px) { #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsMobileBg : o, e)) + "; } #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close::before, #yottie_popup_" + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + " .yottie-popup-control-close::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsMobile : o, e)) + "; } }"
                        },
                        useData: !0
                    }), o.error = o.error || {}, o.error.container = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-error"><div class="yottie-error-overlay"></div><div class="yottie-error-content"><div class="yottie-error-content-title">Yottie has left, before death saying:</div></div></div>'
                        },
                        useData: !0
                    }), o.error.content = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-error-content-msg">' + this.escapeExpression((o = null != (o = t.message || (null != e ? e.message : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "message",
                                hash: {},
                                data: n
                            }) : o)) + "</div>"
                        },
                        useData: !0
                    }), o.feed = o.feed || {}, o.feed.arrows = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-feed-section-arrow yottie-widget-feed-section-arrow-prev"><span></span></div><div class="yottie-widget-feed-section-arrow yottie-widget-feed-section-arrow-next"><span></span></div>'
                        },
                        useData: !0
                    }), o.feed.container = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-feed"><div class="yottie-widget-feed-inner"></div><div class="yottie-widget-feed-ads" data-yt-ads-place="content"></div></div>'
                        },
                        useData: !0
                    }), o.feed.loader = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-feed-section-loader"><div class="yottie-spinner"></div></div>'
                        },
                        useData: !0
                    }), o.feed.scrollbar = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-feed-section-scrollbar swiper-scrollbar"></div>'
                        },
                        useData: !0
                    }), o.feed.section = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-feed-section"><div class="yottie-widget-feed-section-inner swiper-container"><div class="swiper-wrapper"></div></div></div>'
                        },
                        useData: !0
                    }), o.feed.slide = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-feed-section-slide swiper-slide""></div>'
                        },
                        useData: !0
                    }), o.groups = o.groups || {}, o.groups.container = t.template({
                        1: function(e, t, i, n) {
                            return " yottie-disabled"
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r;
                            return '<div class="yottie-widget-nav' + (null != (o = t.unless.call(e, null != e ? e.visible : e, {
                                name: "unless",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"><div class="yottie-widget-nav-inner"> ' + (null != (r = null != (r = t.list || (null != e ? e.list : e)) ? r : t.helperMissing, o = "function" == typeof r ? r.call(e, {
                                name: "list",
                                hash: {},
                                data: n
                            }) : r) ? o : "") + "</div></div>"
                        },
                        useData: !0
                    }), o.groups.list = t.template({
                        1: function(e, t, i, n) {
                            var o, r, a = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression;
                            return '<li class="yottie-widget-nav-list-item' + (null != (o = t.unless.call(e, n && n.index, {
                                name: "unless",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"> <a href="javascript:void(0)" data-yt-id="' + l((r = null != (r = t.index || n && n.index) ? r : a, typeof r === s ? r.call(e, {
                                name: "index",
                                hash: {},
                                data: n
                            }) : r)) + '">' + l((r = null != (r = t.name || (null != e ? e.name : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : r)) + "</a></li> "
                        },
                        2: function(e, t, i, n) {
                            return " yottie-active"
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<ul class="yottie-widget-nav-list"> ' + (null != (o = t.each.call(e, null != e ? e.groups : e, {
                                name: "each",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</ul>"
                        },
                        useData: !0
                    }), o.header = o.header || {}, o.header.banner = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-header-banner" style="background-image: url(\'' + this.escapeExpression((o = null != (o = t.url || (null != e ? e.url : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "url",
                                hash: {},
                                data: n
                            }) : o)) + "');\"></div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.banner : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.channel = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-header-channel"><div class="yottie-widget-header-channel-inner"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelName : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelDescription : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(7, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div> "
                        },
                        2: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = t["if"].call(e, null != e ? e.id : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t.unless.call(e, null != e ? e.id : e, {
                                name: "unless",
                                hash: {},
                                fn: this.program(5, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " "
                        },
                        3: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return '<div class="yottie-widget-header-channel-title"> <a href="https://www.youtube.com/channel/' + s((o = null != (o = t.id || (null != e ? e.id : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : o)) + '/" title="' + s((o = null != (o = t.name || (null != e ? e.name : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o)) + '" target="_blank">' + s((o = null != (o = t.name || (null != e ? e.name : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o)) + "</a></div> "
                        },
                        5: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-header-channel-title">' + this.escapeExpression((o = null != (o = t.name || (null != e ? e.name : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o)) + "</div> "
                        },
                        7: function(e, t, i, n) {
                            var o, r;
                            return '<div class="yottie-widget-header-channel-caption">' + (null != (r = null != (r = t.description || (null != e ? e.description : e)) ? r : t.helperMissing, o = "function" == typeof r ? r.call(e, {
                                name: "description",
                                hash: {},
                                data: n
                            }) : r) ? o : "") + "</div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channel : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.container = t.template({
                        1: function(e, t, i, n) {
                            return " yottie-visible"
                        },
                        3: function(e, t, i, n) {
                            return " yottie-widget-header-brandingless"
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r, a = this.lambda;
                            return '<div class="yottie-widget-header yottie-widget-header-' + this.escapeExpression((r = null != (r = t.layout || (null != e ? e.layout : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "layout",
                                hash: {},
                                data: n
                            }) : r)) + (null != (o = t["if"].call(e, null != e ? e.visible : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.displaying : e) ? o.branding : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.logo : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.banner : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.channel : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.properties : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.subscribe : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.header.logo = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = t["if"].call(e, null != e ? e.id : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t.unless.call(e, null != e ? e.id : e, {
                                name: "unless",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " "
                        },
                        2: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return ' <a class="yottie-widget-header-logo" href="https://www.youtube.com/channel/' + s((o = null != (o = t.id || (null != e ? e.id : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : o)) + '/" title="' + s((o = null != (o = t.title || (null != e ? e.title : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o)) + '" target="_blank" rel="nofollow"><img src="' + s((o = null != (o = t.url || (null != e ? e.url : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "url",
                                hash: {},
                                data: n
                            }) : o)) + '" alt="' + s((o = null != (o = t.title || (null != e ? e.title : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o)) + '"/></a> '
                        },
                        4: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return '<div class="yottie-widget-header-logo"> <img src="' + s((o = null != (o = t.url || (null != e ? e.url : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "url",
                                hash: {},
                                data: n
                            }) : o)) + '" alt="' + s((o = null != (o = t.title || (null != e ? e.title : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o)) + '"/></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.logo : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.overlay = t.template({
                        1: function(e, t, i, n) {
                            return '<div class="yottie-widget-header-overlay"></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.banner : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.properties = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-header-properties"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.videosCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.subscribersCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(6, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        2: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<span class="yottie-widget-header-properties-item" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.videos : o, e)) + '"><span class="yottie-icon yottie-icon-video"></span> <span>' + a((r = null != (r = t.videoCount || (null != e ? e.videoCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "videoCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></span> "
                        },
                        4: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<span class="yottie-widget-header-properties-item" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.subscribers : o, e)) + '"><span class="yottie-icon yottie-icon-subscribers"></span> <span>' + a((r = null != (r = t.subscriberCount || (null != e ? e.subscriberCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "subscriberCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></span> "
                        },
                        6: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<span class="yottie-widget-header-properties-item" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.views : o, e)) + '"><span class="yottie-icon yottie-icon-views"></span> <span>' + a((r = null != (r = t.viewCount || (null != e ? e.viewCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "viewCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></span> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.header.subscribe = t.template({
                        1: function(e, t, i, n) {
                            return '<div class="yottie-widget-header-subscribe"><div class="yottie-widget-header-subscribe-button"></div></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.subscribeButton : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.popup = o.popup || {}, o.popup.container = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r = this.lambda;
                            return '<div class="yottie-popup yottie"> ' + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.wrapper : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.control = o.popup.control || {}, o.popup.control.arrows = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-popup-control-arrow-previous yottie-popup-control-arrow"><span></span></div><div class="yottie-popup-control-arrow-next yottie-popup-control-arrow"><span></span></div>'
                        },
                        useData: !0
                    }), o.popup.control.close = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-popup-control-close"></div>'
                        },
                        useData: !0
                    }), o.popup.inner = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r = this.lambda;
                            return '<div class="yottie-popup-inner"> ' + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.loader : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.controlClose : o, e)) ? o : "") + "  " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.video : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.loader = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-popup-loader"><div class="yottie-spinner"></div></div>'
                        },
                        useData: !0
                    }), o.popup.overlay = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-popup-overlay"></div>'
                        },
                        useData: !0
                    }), o.popup.video = o.popup.video || {}, o.popup.video.channel = t.template({
                        1: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return '<div class="yottie-popup-video-channel-logo"> <a href="' + s((o = null != (o = t.link || (null != e ? e.link : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "link",
                                hash: {},
                                data: n
                            }) : o)) + '" target="_blank" rel="nofollow" title="' + s((o = null != (o = t.name || (null != e ? e.name : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o)) + '"><img src="' + s((o = null != (o = t.logo || (null != e ? e.logo : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "logo",
                                hash: {},
                                data: n
                            }) : o)) + '" alt="' + s((o = null != (o = t.name || (null != e ? e.name : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o)) + '"></a></div> '
                        },
                        3: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return ' <a href="' + s((o = null != (o = t.link || (null != e ? e.link : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "link",
                                hash: {},
                                data: n
                            }) : o)) + '" class="yottie-popup-video-channel-name" target="_blank" rel="nofollow">' + s((o = null != (o = t.name || (null != e ? e.name : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "name",
                                hash: {},
                                data: n
                            }) : o)) + "</a> "
                        },
                        5: function(e, t, i, n) {
                            return '<div class="yottie-popup-video-channel-subscribe"><div class="yottie-popup-video-channel-subscribe-button"></div></div> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-channel"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelLogo : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '<div class="yottie-popup-video-channel-info"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channelName : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.subscribeButton : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(5, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div>"
                        },
                        useData: !0
                    }), o.popup.video.comments = t.template({
                        1: function(e, t, i, n) {
                            var o, r, a = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression;
                            return '<div class="yottie-popup-video-comments-item"><div class="yottie-popup-video-comments-item-profile-image"> <a href="' + l((r = null != (r = t.authorChannelUrl || (null != e ? e.authorChannelUrl : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "authorChannelUrl",
                                hash: {},
                                data: n
                            }) : r)) + '" target="_blank" rel="nofollow"><img src="' + l((r = null != (r = t.authorProfileImageUrl || (null != e ? e.authorProfileImageUrl : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "authorProfileImageUrl",
                                hash: {},
                                data: n
                            }) : r)) + '"></a></div><div class="yottie-popup-video-comments-item-info"><div class="yottie-popup-video-comments-item-header"><div class="yottie-popup-video-comments-item-name"> <a href="' + l((r = null != (r = t.authorChannelUrl || (null != e ? e.authorChannelUrl : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "authorChannelUrl",
                                hash: {},
                                data: n
                            }) : r)) + '" target="_blank" rel="nofollow">' + l((r = null != (r = t.authorName || (null != e ? e.authorName : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "authorName",
                                hash: {},
                                data: n
                            }) : r)) + '</a></div><div class="yottie-popup-video-comments-item-passed-time">' + l((r = null != (r = t.passedTime || (null != e ? e.passedTime : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "passedTime",
                                hash: {},
                                data: n
                            }) : r)) + '</div></div><div class="yottie-popup-video-comments-item-text"> ' + (null != (r = null != (r = t.text || (null != e ? e.text : e)) ? r : a, o = typeof r === s ? r.call(e, {
                                name: "text",
                                hash: {},
                                data: n
                            }) : r) ? o : "") + "</div> " + (null != (o = t["if"].call(e, null != e ? e.displayLikesCount : e, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div> "
                        },
                        2: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return '<div class="yottie-popup-video-comments-item-likes" title="' + s((o = null != (o = t.likesTitle || (null != e ? e.likesTitle : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "likesTitle",
                                hash: {},
                                data: n
                            }) : o)) + '"><span class="yottie-icon-likes yottie-icon"></span> <span>' + s((o = null != (o = t.likesCount || (null != e ? e.likesCount : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "likesCount",
                                hash: {},
                                data: n
                            }) : o)) + "</span></div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-comments"> ' + (null != (o = t.each.call(e, null != e ? e.comments : e, {
                                name: "each",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.container = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoContent : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video"> ' + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoPlayer : o, e)) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.content : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.content = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoInfo : o, e)) ? o : "") + " "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoComments : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-content"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.info : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '<div class="yottie-popup-video-content-ads" data-yt-ads-place="popup"></div> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.comments : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.info = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-title">' + this.escapeExpression((o = null != (o = t.title || (null != e ? e.title : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o)) + "</div> "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoInfoMeta : o, e)) ? o : "") + " "
                        },
                        5: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoInfoMain : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-info"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.title : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.infoMeta : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.infoMain : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(5, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.info = o.popup.video.info || {}, o.popup.video.info.main = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-date">' + this.escapeExpression((o = null != (o = t.date || (null != e ? e.date : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "date",
                                hash: {},
                                data: n
                            }) : o)) + "</div> "
                        },
                        3: function(e, t, i, n) {
                            var o, r;
                            return '<div class="yottie-popup-video-description' + (null != (o = t.unless.call(e, null != (o = null != e ? e.displaying : e) ? o.descriptionMoreButton : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + '"> ' + (null != (r = null != (r = t.text || (null != e ? e.text : e)) ? r : t.helperMissing, o = "function" == typeof r ? r.call(e, {
                                name: "text",
                                hash: {},
                                data: n
                            }) : r) ? o : "") + "</div> "
                        },
                        4: function(e, t, i, n) {
                            return " yottie-popup-video-description-show-full"
                        },
                        6: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-description-more"><span>' + this.escapeExpression((o = null != (o = t.showMoreLabel || (null != e ? e.showMoreLabel : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "showMoreLabel",
                                hash: {},
                                data: n
                            }) : o)) + "</span></div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-info-main"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.date : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.description : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.descriptionMoreButton : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(6, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.info.meta = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoChannel : o, e)) ? o : "") + " "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoProperties : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-info-meta"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.channel : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.video.player = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-popup-video-player"><span></span></div>'
                        },
                        useData: !0
                    }), o.popup.video.properties = t.template({
                        1: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<div class="yottie-popup-video-properties-views" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.views : o, e)) + '">' + a((r = null != (r = t.viewsCount || (null != e ? e.viewsCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "viewsCount",
                                hash: {},
                                data: n
                            }) : r)) + "</div> "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-properties-rating"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.likesRatio : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.ratingCounters : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(6, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        4: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-properties-rating-ratio"><span style="width: ' + this.escapeExpression((o = null != (o = t.likesRatio || (null != e ? e.likesRatio : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "likesRatio",
                                hash: {},
                                data: n
                            }) : o)) + '%"></span></div> '
                        },
                        6: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-properties-rating-counters"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.likesCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(7, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.dislikesCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(9, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div> "
                        },
                        7: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<div class="yottie-popup-video-properties-rating-counters-like" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.likes : o, e)) + '"><span class="yottie-icon-likes yottie-icon"></span> <span>' + a((r = null != (r = t.likesCount || (null != e ? e.likesCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "likesCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></div> "
                        },
                        9: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<div class="yottie-popup-video-properties-rating-counters-dislike" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.dislikes : o, e)) + '"><span class="yottie-icon-dislikes yottie-icon"></span> <span>' + a((r = null != (r = t.dislikesCount || (null != e ? e.dislikesCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "dislikesCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></div> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-video-properties"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.rating : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.popup.wrapper = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-popup-wrapper"> ' + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.inner : o, e)) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.video = o.video || {}, o.video.container = t.template({
                        1: function(e, t, i, n) {
                            var o, r = this.lambda;
                            return " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.info : o, e)) ? o : "") + " "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r, a = this.lambda;
                            return '<div class="yottie-widget-video yottie-widget-video-classic" data-yt-id="' + this.escapeExpression((r = null != (r = t.id || (null != e ? e.id : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + '"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.player : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.preview : o, e)) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.info : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.video.info = t.template({
                        1: function(e, t, i, n) {
                            var o, r = t.helperMissing,
                                a = "function",
                                s = this.escapeExpression;
                            return ' <a href="https://www.youtube.com/watch?v=' + s((o = null != (o = t.id || (null != e ? e.id : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : o)) + '" title="' + s((o = null != (o = t.title || (null != e ? e.title : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o)) + '" target="_blank" class="yottie-widget-video-info-title">' + s((o = null != (o = t.title || (null != e ? e.title : e)) ? o : r, typeof o === a ? o.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : o)) + "</a> "
                        },
                        3: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-video-info-passed-time">' + this.escapeExpression((o = null != (o = t.date || (null != e ? e.date : e)) ? o : t.helperMissing, "function" == typeof o ? o.call(e, {
                                name: "date",
                                hash: {},
                                data: n
                            }) : o)) + "</div> "
                        },
                        5: function(e, t, i, n) {
                            var o, r;
                            return '<div class="yottie-widget-video-info-caption"> ' + (null != (r = null != (r = t.description || (null != e ? e.description : e)) ? r : t.helperMissing, o = "function" == typeof r ? r.call(e, {
                                name: "description",
                                hash: {},
                                data: n
                            }) : r) ? o : "") + "</div> "
                        },
                        7: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-video-info-properties"><div class="yottie-widget-video-info-properties-inner"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(8, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.likesCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(10, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.commentsCounter : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(12, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div></div> "
                        },
                        8: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<span class="yottie-widget-video-info-properties-item" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.views : o, e)) + '"><span class="yottie-icon yottie-icon-views"></span> <span>' + a((r = null != (r = t.viewsCount || (null != e ? e.viewsCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "viewsCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></span> "
                        },
                        10: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<span class="yottie-widget-video-info-properties-item" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.likes : o, e)) + '"><span class="yottie-icon yottie-icon-likes"></span> <span>' + a((r = null != (r = t.likesCount || (null != e ? e.likesCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "likesCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></span> "
                        },
                        12: function(e, t, i, n) {
                            var o, r, a = this.escapeExpression;
                            return '<span class="yottie-widget-video-info-properties-item" title="' + a(this.lambda(null != (o = null != e ? e.titles : e) ? o.comments : o, e)) + '"><span class="yottie-icon yottie-icon-comments"></span> <span>' + a((r = null != (r = t.commentsCount || (null != e ? e.commentsCount : e)) ? r : t.helperMissing, "function" == typeof r ? r.call(e, {
                                name: "commentsCount",
                                hash: {},
                                data: n
                            }) : r)) + "</span></span> "
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return '<div class="yottie-widget-video-info"> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.title : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.date : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(3, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.description : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(5, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(7, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</div>"
                        },
                        useData: !0
                    }), o.video.overlay = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-video-overlay"></div>'
                        },
                        useData: !0
                    }), o.video.player = t.template({
                        1: function(e, t, i, n) {
                            return '<span class="yottie-widget-video-player"><span></span></span> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o;
                            return null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.videoPlayer : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : ""
                        },
                        useData: !0
                    }), o.video.preview = t.template({
                        1: function(e, t, i, n) {
                            var o;
                            return ' <span class="yottie-widget-video-preview-marker yottie-widget-video-preview-marker-duration">' + (null != (o = t["if"].call(e, null != (o = null != e ? e.duration : e) ? o.h : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(2, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t["if"].call(e, null != (o = null != e ? e.duration : e) ? o.m : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(4, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.duration : e) ? o.m : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(6, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t["if"].call(e, null != (o = null != e ? e.duration : e) ? o.s : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(8, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.duration : e) ? o.s : o, {
                                name: "unless",
                                hash: {},
                                fn: this.program(10, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</span> "
                        },
                        2: function(e, t, i, n) {
                            var o;
                            return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.h : o, e)) + ":"
                        },
                        4: function(e, t, i, n) {
                            var o;
                            return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.m : o, e)) + ":"
                        },
                        6: function(e, t, i, n) {
                            return "00:"
                        },
                        8: function(e, t, i, n) {
                            var o;
                            return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.s : o, e))
                        },
                        10: function(e, t, i, n) {
                            return "00"
                        },
                        12: function(e, t, i, n) {
                            return '<span class="yottie-widget-video-preview-play"></span> '
                        },
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            var o, r, a = t.helperMissing,
                                s = "function",
                                l = this.escapeExpression;
                            return ' <a href="https://www.youtube.com/watch?v=' + l((r = null != (r = t.id || (null != e ? e.id : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "id",
                                hash: {},
                                data: n
                            }) : r)) + '" title="' + l((r = null != (r = t.title || (null != e ? e.title : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : r)) + '" target="_blank" class="yottie-widget-video-preview"><span class="yottie-widget-video-preview-thumbnail"><img src="' + l((r = null != (r = t.thumbnail || (null != e ? e.thumbnail : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "thumbnail",
                                hash: {},
                                data: n
                            }) : r)) + '" alt="' + l((r = null != (r = t.title || (null != e ? e.title : e)) ? r : a, typeof r === s ? r.call(e, {
                                name: "title",
                                hash: {},
                                data: n
                            }) : r)) + '"/></span> ' + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.duration : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(1, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + " " + (null != (o = t["if"].call(e, null != (o = null != e ? e.displaying : e) ? o.playIcon : o, {
                                name: "if",
                                hash: {},
                                fn: this.program(12, n, 0),
                                inverse: this.noop,
                                data: n
                            })) ? o : "") + "</a>"
                        },
                        useData: !0
                    }), o.widget = t.template({
                        compiler: [6, ">= 2.0.0-beta.1"],
                        main: function(e, t, i, n) {
                            return '<div class="yottie-widget-inner"><yottie data-part="header"></yottie><div class="yottie-widget-contents"><yottie data-part="groups"></yottie><yottie data-part="feed"></yottie></div></div>'
                        },
                        useData: !0
                    }), i.exports = o
                }, {}],
                37: [function(e, t, i) {
                    var n = e("./../../olivie/src/js/jquery"),
                        o = e("./../../olivie/src/js/olivie"),
                        r = e("./../../olivie/src/js/modules/mies/client"),
                        a = e("./../../olivie/src/js/modules/appearance/i18n"),
                        s = e("./../../olivie/src/js/modules/appearance/renderer"),
                        l = e("./modules/widget/yt-error"),
                        p = e("./modules/youtube/youtube"),
                        d = e("./modules/widget/widget"),
                        u = e("./modules/widget/header"),
                        c = e("./modules/widget/groups"),
                        f = e("./modules/widget/feed"),
                        h = e("./modules/popup/popup"),
                        A = e("./dictionary"),
                        g = e("./views"),
                        m = (e("./schemes"), e("./defaults"));
                    t.exports = o.application("Yottie", function(e, t, i) {
                        var v = this;
                        v.getParent("Application").call(v), v.id = e, v.$element = n(t), v.options = n.extend(!0, {}, m, i), o.utils.setProperty(v.options, "content.direction", "horizontal"), v.registerComponent(new r("https://www.googleapis.com/youtube/v3", {
                            key: v.options.key
                        }, "Yottie", v.options.cacheTime)), v.registerComponent(new a(A, "en")), v.registerComponent(new s(g)), v.registerComponent(new l), v.registerComponent(new p), v.registerComponent(new d), v.registerComponent(new u), v.registerComponent(new h), v.registerComponent(new f), v.registerComponent(new c)
                    }, {}, {
                        id: null,
                        $element: null,
                        options: null,
                        run: function() {
                            var e = this;
                            e.$element.addClass("yottie yottie-widget"), e.component("error").run(), "string" === n.type(e.options.sourceGroups) && e.options.sourceGroups.length && (e.options.sourceGroups = n.parseJSON(decodeURIComponent(e.options.sourceGroups))), e.component("client").run().done(function() {
                                e.component("header").run().on("ready", function(t, i) {
                                    var n;
                                    if (e.options.sourceGroups) n = e.options.sourceGroups;
                                    else {
                                        if (!e.options.channel) return void e.component("error")["throw"]("Channel and sourceGroups are not specified.");
                                        n = [{
                                            name: e.component("i18n").t("Uploads"),
                                            sources: [{
                                                kind: "youtube#playlist",
                                                criteria: {
                                                    id: i.channel.contentDetails.relatedPlaylists.uploads
                                                }
                                            }]
                                        }]
                                    }
                                    e.component("groups").run(n), e.component("feed").run(n), e.component("widget").run(), e.component("popup").run(), e.component("feed").setActiveSection(0)
                                })
                            })
                        },
                        getId: function() {
                            var e = this;
                            return e.id
                        }
                    })
                }, {
                    "./../../olivie/src/js/jquery": 5,
                    "./../../olivie/src/js/modules/appearance/i18n": 6,
                    "./../../olivie/src/js/modules/appearance/renderer": 7,
                    "./../../olivie/src/js/modules/mies/client": 9,
                    "./../../olivie/src/js/olivie": 10,
                    "./defaults": 12,
                    "./dictionary": 13,
                    "./modules/popup/popup": 15,
                    "./modules/widget/feed": 17,
                    "./modules/widget/groups": 19,
                    "./modules/widget/header": 20,
                    "./modules/widget/widget": 21,
                    "./modules/widget/yt-error": 22,
                    "./modules/youtube/youtube": 34,
                    "./schemes": 35,
                    "./views": 36
                }]
            }, {}, [14])
        }
    }, {}],
    6: [function(e, t, i) {
        "use strict";
        var n = e("./__packaged-css"),
            o = e("./__packaged-js"),
            r = e("../../bower_components/handlebars/handlebars.runtime"),
            a = e("../../bower_components/swiper/dist/js/swiper.jquery.umd.min.js"),
            s = [{
                src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js",
                test: function() {
                    return !!window.jQuery
                }
            }, {
                src: "https://apis.google.com/js/platform.js",
                test: function() {
                    return !(!window.gapi || !window.gapi.ytsubscribe)
                }
            }, {
                src: "https://www.youtube.com/iframe_api",
                test: function() {
                    return !!window.YT
                }
            }],
            l = function() {
                jQuery.getScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"), o(r, a)
            },
            p = document.createElement("style");
        p.type = "text/css", p.innerHTML = n, document.head.appendChild(p);
        for (var d = 0, u = 0, c = 0; c < s.length; ++c)(function(e, t) {
            if (!t.test.call()) {
                ++d;
                var i = document.createElement("script");
                i.src = t.src, i.onload = function() {
                    ++u === d && l(), document.head.removeChild(i)
                }, document.head.appendChild(i)
            }
        }).call(s[c], c, s[c]);
        d || l()
    }, {
        "../../bower_components/handlebars/handlebars.runtime": 1,
        "../../bower_components/swiper/dist/js/swiper.jquery.umd.min.js": 3,
        "./__packaged-css": 4,
        "./__packaged-js": 5
    }]
}, {}, [6]);