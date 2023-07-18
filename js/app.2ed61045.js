(function(e) {
    function t(t) {
        for (var s, l, r = t[0], o = t[1], c = t[2], d = 0, p = []; d < r.length; d++) l = r[d], Object.prototype.hasOwnProperty.call(a, l) && a[l] && p.push(a[l][0]), a[l] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        u && u(t);
        while (p.length) p.shift()();
        return n.push.apply(n, c || []), i()
    }

    function i() {
        for (var e, t = 0; t < n.length; t++) {
            for (var i = n[t], s = !0, r = 1; r < i.length; r++) {
                var o = i[r];
                0 !== a[o] && (s = !1)
            }
            s && (n.splice(t--, 1), e = l(l.s = i[0]))
        }
        return e
    }
    var s = {},
        a = { app: 0 },
        n = [];

    function l(t) { if (s[t]) return s[t].exports; var i = s[t] = { i: t, l: !1, exports: {} }; return e[t].call(i.exports, i, i.exports, l), i.l = !0, i.exports }
    l.m = e, l.c = s, l.d = function(e, t, i) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, l.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function(e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (l.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var s in e) l.d(i, s, function(t) { return e[t] }.bind(null, s));
        return i
    }, l.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return l.d(t, "a", t), t }, l.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, l.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var c = 0; c < r.length; c++) t(r[c]);
    var u = o;
    n.push([0, "chunk-vendors"]), i()
})({
    0: function(e, t, i) { e.exports = i("56d7") },
    "1a2a": function(e, t, i) {
        "use strict";
        i("b884")
    },
    "22e1": function(e, t, i) {},
    "56d7": function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i("7a23"),
            a = i("fa49"),
            n = i.n(a);
        const l = { class: "header" },
            r = Object(s["f"])("div", { class: "w-11/12 md:w-1/2 mx-auto bg-white p-8 bg-opacity-20 border border-gray-200 rounded-lg" }, [Object(s["f"])("h2", { class: "text-3xl" }, "Cześć Madziu !"), Object(s["f"])("p", { class: "flex text-white" }, ' Skoro to czytasz to pewnie otrzymałaś już płytę, mam nadzieję że się podoba :D Oboje wiemy ,że nasza relacja wiele zawdzięcza muzyce, bo to własnie od muzyki zaczęły się nasze pierwsze dłuższe rozmowy. W związku z tym postanowiłem dać Ci tę płytę oraz cyfrową wersję - czyli tę stronę, składającą się z utworów które towarzyszyły nam w różnych etapach naszej relacji. Utwory te były z nami na Bolko, gdzie przy zachodzie słońca szeptaliśmy do siebie "Kocham Cię", były też na Zawadzkim skateparku, gdzie zmęczeni obserwowaliśmy piękne, gwieździste niebo. Utwory są różnorodne, tak jak zmienne są nasze nastroje, nie zabraknie więc tutaj również bardziej energicznych piosenek towarzyszących nam w samochodzie czy na koncercie w Warszawie. Mam nadzieję, że muzyke na zawsze będzie nam towarzyszyła, bo to przecież dopiero początek naszej przygody.'), Object(s["f"])("img", { class: "h-6 mx-auto", src: n.a, alt: "" })], -1),
            o = Object(s["f"])("div", null, [Object(s["f"])("svg", { class: "waves", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 24 150 28", preserveAspectRatio: "none", "shape-rendering": "auto" }, [Object(s["f"])("defs", null, [Object(s["f"])("path", { id: "gentle-wave", d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" })]), Object(s["f"])("g", { class: "parallax" }, [Object(s["f"])("use", { "xlink:href": "#gentle-wave", x: "48", y: "0", fill: "rgba(255,255,255,0.7" }), Object(s["f"])("use", { "xlink:href": "#gentle-wave", x: "48", y: "3", fill: "rgba(255,255,255,0.5)" }), Object(s["f"])("use", { "xlink:href": "#gentle-wave", x: "48", y: "5", fill: "rgba(255,255,255,0.3)" }), Object(s["f"])("use", { "xlink:href": "#gentle-wave", x: "48", y: "7", fill: "#fff" })])])], -1);

        function c(e, t, i, a, n, c) {
            const u = Object(s["n"])("Code"),
                d = Object(s["n"])("MusicPlayer");
            return Object(s["j"])(), Object(s["e"])("div", l, [Object(s["g"])(u, { class: "fixed z-50 left-0 top-0 w-screen h-screen bg-gray-100 flex items-center justify-center flex-col text-black" }), r, Object(s["g"])(d), o])
        }
        const u = e => (Object(s["l"])("data-v-6223f1f0"), e = e(), Object(s["k"])(), e),
            d = { class: "audioPlayer mt-4", id: "app" },
            p = u(() => Object(s["f"])("span", null, null, -1)),
            g = u(() => Object(s["f"])("span", null, null, -1)),
            m = u(() => Object(s["f"])("span", null, null, -1)),
            h = [p, g, m],
            b = ["onClick"],
            y = ["src"],
            f = { class: "w-2/3" },
            j = { class: "title" },
            v = { class: "artist" },
            O = { class: "albumImage" },
            z = ["src"],
            k = { class: "albumDetails" },
            w = { class: "playerButtons" },
            P = u(() => Object(s["f"])("i", { class: "zmdi zmdi-skip-previous" }, null, -1)),
            S = [P],
            x = u(() => Object(s["f"])("i", { class: "zmdi zmdi-skip-next" }, null, -1)),
            C = [x],
            T = { class: "currentProgressBar" },
            A = { class: "currentTimeContainer", style: { "text-align": "center" } },
            I = { class: "font-light", style: { color: "black" } };

        function _(e, t, i, a, n, l) { return Object(s["j"])(), Object(s["e"])("div", null, [Object(s["f"])("main", d, [Object(s["f"])("a", { class: Object(s["h"])(["nav-icon", { isActive: n.isPlaylistActive }]), onClick: t[0] || (t[0] = e => n.isPlaylistActive = !n.isPlaylistActive), title: "Music List" }, h, 2), Object(s["f"])("div", { class: Object(s["h"])(["audioPlayerList overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100", { isActive: n.isPlaylistActive }]) }, [(Object(s["j"])(!0), Object(s["e"])(s["a"], null, Object(s["m"])(n.musicPlaylist, (e, t) => (Object(s["j"])(), Object(s["e"])("div", { class: Object(s["h"])(["item rounded-lg flex justify-between space-x-4", { isActive: l.isCurrentSong(t) }]), key: t, onClick: e => (l.changeSong(t), n.isPlaylistActive = !n.isPlaylistActive) }, [Object(s["f"])("div", null, [(Object(s["j"])(), Object(s["e"])("img", { class: "w-12 h-12", src: e.image, key: t, ondragstart: "return false;" }, null, 8, y))]), Object(s["f"])("div", f, [Object(s["f"])("p", j, Object(s["o"])(e.title), 1), Object(s["f"])("p", v, Object(s["o"])(e.artist), 1)])], 10, b))), 128))], 2), Object(s["f"])("div", { class: Object(s["h"])(["audioPlayerUI", { isDisabled: n.isPlaylistActive }]) }, [Object(s["f"])("div", O, [Object(s["g"])(s["b"], { name: "ballmove", "enter-active-class": "animated zoomIn", "leave-active-class": "animated fadeOutDown", mode: "out-in" }, { default: Object(s["p"])(() => [Object(s["g"])(s["b"], { name: "slide-fade", mode: "out-in" }, { default: Object(s["p"])(() => [(Object(s["j"])(), Object(s["e"])("img", { onLoad: t[1] || (t[1] = e => l.onImageLoaded()), src: n.musicPlaylist[n.currentSong].image, key: n.currentSong, ondragstart: "return false;", id: "playerAlbumArt" }, null, 40, z))]), _: 1 })]), _: 1 }), (Object(s["j"])(), Object(s["e"])("div", { class: "loader", key: n.currentSong }, "Loading..."))]), Object(s["f"])("div", k, [Object(s["g"])(s["b"], { name: "slide-fade", mode: "out-in" }, { default: Object(s["p"])(() => [(Object(s["j"])(), Object(s["e"])("p", { class: "title", key: n.currentSong }, Object(s["o"])(n.musicPlaylist[n.currentSong].title), 1))]), _: 1 }), Object(s["g"])(s["b"], { name: "slide-fade", mode: "out-in" }, { default: Object(s["p"])(() => [(Object(s["j"])(), Object(s["e"])("p", { class: "artist", key: n.currentSong }, Object(s["o"])(n.musicPlaylist[n.currentSong].artist), 1))]), _: 1 })]), Object(s["f"])("div", w, [Object(s["f"])("a", { class: Object(s["h"])(["button", { isDisabled: 0 == n.currentSong }]), onClick: t[2] || (t[2] = e => l.prevSong()), title: "Previous Song" }, S, 2), Object(s["f"])("a", { class: "button play", onClick: t[3] || (t[3] = e => l.playAudio()), title: "Play/Pause Song" }, [Object(s["g"])(s["b"], { name: "slide-fade", mode: "out-in" }, { default: Object(s["p"])(() => [(Object(s["j"])(), Object(s["e"])("i", { class: Object(s["h"])(["zmdi", [n.currentlyStopped ? "zmdi-stop" : n.currentlyPlaying ? "zmdi-pause-circle" : "zmdi-play-circle"]]), key: 1 }, null, 2))]), _: 1 })]), Object(s["f"])("a", { class: Object(s["h"])(["button", { isDisabled: n.currentSong == n.musicPlaylist.length - 1 }]), onClick: t[4] || (t[4] = e => l.nextSong()), title: "Next Song" }, C, 2)]), Object(s["f"])("div", T, [Object(s["f"])("div", { class: "currentProgress", style: Object(s["i"])({ width: n.currentProgressBar + "%" }) }, null, 4)]), Object(s["f"])("div", A, [Object(s["f"])("span", I, Object(s["o"])(n.currentSong + 1) + "/" + Object(s["o"])(n.musicPlaylist.length), 1)])], 2)])]) }
        var E = {
                data() { return { audio: "", imgLoaded: !1, currentlyPlaying: !1, currentlyStopped: !1, currentTime: 0, checkingCurrentPositionInTrack: "", trackDuration: 0, currentProgressBar: 0, isPlaylistActive: !1, currentSong: 0, debug: !1, musicPlaylist: [{ title: "Hugging You", artist: "Tom Rosenthal", url: "https://dlamadziulki.com/assets/songs/huggingyou.mp3", image: "https://dlamadziulki.com/assets/covers/huggingyou.jpg" }, { title: "Until I Found You", artist: "Stephen Sanchez", url: "https://dlamadziulki.com/assets/songs/untill.mp3", image: "https://dlamadziulki.com/assets/covers/untill.jpg" }, { title: "Simply The Best", artist: "Billiane", url: "https://dlamadziulki.com/assets/songs/simply.mp3", image: "https://dlamadziulki.com/assets/covers/simply.jpg" }, { title: "Can't help falling in Love", artist: "Elvis Presley", url: "https://dlamadziulki.com/assets/songs/elvis.mp3", image: "https://dlamadziulki.com/assets/covers/elvis.jpg" }, { title: "I think I like when it rains", artist: "Willis", url: "https://dlamadziulki.com/assets/songs/rain.mp3", image: "https://dlamadziulki.com/assets/covers/rain.jpg" }, { title: "Cigarette Daydreams", artist: "Cage The Elephant", url: "https://dlamadziulki.com/assets/songs/cigarette.mp3", image: "https://dlamadziulki.com/assets/covers/cigarette.jpg" }, { title: "Ho Hey", artist: "The Lumineers", url: "https://dlamadziulki.com/assets/songs/hohey.mp3", image: "https://dlamadziulki.com/assets/covers/hohey.jpg" }, { title: "Riptide", artist: "Vance Joy", url: "https://dlamadziulki.com/assets/songs/riptide.mp3", image: "https://dlamadziulki.com/assets/covers/riptide.jpg" }, { title: "Marmur", artist: "Taco Hemingwawy", url: "https://dlamadziulki.com/assets/songs/marmur.mp3", image: "https://dlamadziulki.com/assets/covers/marmur.jpg" }, { title: "Następna stacja", artist: "Taco Hemingway", url: "https://dlamadziulki.com/assets/songs/stacja.mp3", image: "https://dlamadziulki.com/assets/covers/stacja.jpg" }, { title: "Żyrandol", artist: "Taco Hemingway", url: "https://dlamadziulki.com/assets/songs/zyrandol.mp3", image: "https://dlamadziulki.com/assets/covers/zyrandol.jpg" }, { title: "Alert RCB", artist: "Taco Hemingway ft. Schafter", url: "https://dlamadziulki.com/assets/songs/alert.mp3", image: "https://dlamadziulki.com/assets/covers/alert.jpg" }, { title: "Sanatorium", artist: "Taco Hemingway ft. Dawid Podisadło", url: "https://dlamadziulki.com/assets/songs/sanatorium.mp3", image: "https://dlamadziulki.com/assets/covers/sanatorium.jpg" }, { title: "Żółte flamastry i grube katechetki", artist: "Mata", url: "https://dlamadziulki.com/assets/songs/flamastry.mp3", image: "https://dlamadziulki.com/assets/covers/flamastry.jpg" }, { title: "Jeżyk", artist: "OKI", url: "https://dlamadziulki.com/assets/songs/jezyk.mp3", image: "https://dlamadziulki.com/assets/covers/jezyk.jpg" }, { title: "MVP", artist: "OIO", url: "https://dlamadziulki.com/assets/songs/mvp.mp3", image: "https://dlamadziulki.com/assets/covers/mvp.jpg" }, { title: "Sen o Warszawie", artist: "Czesław Niemen", url: "https://dlamadziulki.com/assets/songs/sen-o-warszawie.mp3", image: "https://dlamadziulki.com/assets/covers/sen-o-warszawie.jpg" }], audioFile: "" } },
                mounted: function() { this.changeSong(), this.audio.loop = !1 },
                computed: { fancyTimeFormat(e) { return 1 } },
                methods: {
                    togglePlaylist: function() { this.isPlaylistActive = !this.isPlaylistActive },
                    nextSong: function() { this.currentSong < this.musicPlaylist.length - 1 && this.changeSong(this.currentSong + 1) },
                    prevSong: function() { this.currentSong > 0 && this.changeSong(this.currentSong - 1) },
                    changeSong: function(e) {
                        var t = this.currentlyPlaying;
                        this.imageLoaded = !1, void 0 !== e && (this.stopAudio(), this.currentSong = e), this.audioFile = this.musicPlaylist[this.currentSong].url, console.log(this.audioFile), this.audio = new Audio(this.audioFile);
                        var i = this;
                        this.audio.addEventListener("loadedmetadata", (function() { i.trackDuration = Math.round(this.duration) })), this.audio.addEventListener("ended", this.handleEnded), t && this.playAudio()
                    },
                    isCurrentSong: function(e) { return this.currentSong == e },
                    getCurrentSong: function(e) { return this.musicPlaylist[e].url },
                    playAudio: function() { 1 == this.currentlyStopped && this.currentSong + 1 == this.musicPlaylist.length && (this.currentSong = 0, this.changeSong()), this.currentlyPlaying ? this.stopAudio() : (this.getCurrentTimeEverySecond(!0), this.currentlyPlaying = !0, this.audio.play()), this.currentlyStopped = !1 },
                    stopAudio: function() { this.audio.pause(), this.currentlyPlaying = !1, this.pausedMusic() },
                    handleEnded: function() { this.currentSong + 1 == this.musicPlaylist.length ? (this.stopAudio(), this.currentlyPlaying = !1, this.currentlyStopped = !0) : (this.currentlyPlaying = !1, this.currentSong++, this.changeSong(), this.playAudio()) },
                    onImageLoaded: function() { this.imgLoaded = !0 },
                    getCurrentTimeEverySecond: function(e) {
                        var t = this;
                        this.checkingCurrentPositionInTrack = setTimeout(function() { t.currentTime = t.audio.currentTime, t.currentProgressBar = t.audio.currentTime / t.trackDuration * 100, t.getCurrentTimeEverySecond(!0) }.bind(this), 1e3)
                    },
                    pausedMusic: function() { clearTimeout(this.checkingCurrentPositionInTrack) },
                    toggleDebug: function() { this.debug = !this.debug, document.body.classList.toggle("debug") }
                },
                watch: { currentTime: function() { this.currentTime = Math.round(this.currentTime) } },
                beforeDestroy: function() { this.audio.removeEventListener("ended", this.handleEnded), this.audio.removeEventListener("loadedmetadata", this.handleEnded), clearTimeout(this.checkingCurrentPositionInTrack) }
            },
            B = (i("1a2a"), i("6b0d")),
            M = i.n(B);
        const L = M()(E, [
            ["render", _],
            ["__scopeId", "data-v-6223f1f0"]
        ]);
        var D = L;
        const F = { key: 0, class: "flex" },
            H = { class: "flex" },
            K = ["autofocus", "id", "onKeyup", "onKeydown", "onFocus"],
            J = Object(s["f"])("h1", { class: "text-3xl" }, "Wpisz kod - otrzymany za buziaka ( może być więcej )", -1);

        function R(e, t, i, a, n, l) { return n.showCode ? (Object(s["j"])(), Object(s["e"])("div", F, [Object(s["f"])("div", H, [(Object(s["j"])(!0), Object(s["e"])(s["a"], null, Object(s["m"])(n.pinlength, (t, i) => (Object(s["j"])(), Object(s["e"])("input", { key: "codefield_" + i, autofocus: 0 == i, id: "codefield_" + i, class: "h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl", value: "", maxlength: "1", max: "9", min: "0", inputmode: "decimal", onKeyup: e => l.stepForward(i), onKeydown: Object(s["q"])(e => l.stepBack(i), ["backspace"]), onFocus: t => e.resetValue(i) }, null, 40, K))), 128))]), J])) : Object(s["d"])("", !0) }
        var U = {
            data() { return { loading: !1, snackbar: !1, snackbarColor: "default", otp: "", text: "", expectedOtp: "2801", showCode: !0, pinlength: 4 } },
            mounted() { "ok" == localStorage.getItem("code_new") && (this.showCode = !1) },
            methods: {
                stepForward(e) { document.getElementById("codefield_" + e).value && e != this.pinlength - 1 && (document.getElementById("codefield_" + (e + 1)).focus(), document.getElementById("codefield_" + (e + 1)).value = ""), this.checkPin() },
                stepBack(e) { document.getElementById("codefield_" + (e - 1)).value && 0 != e && (document.getElementById("codefield_" + (e - 1)).focus(), document.getElementById("codefield_" + (e - 1)).value = "") },
                checkPin() {
                    let e = "";
                    for (let t = 0; t < this.pinlength; t++) e += document.getElementById("codefield_" + t).value;
                    e.length == this.pinlength && this.validatePin(e)
                },
                validatePin(e) { "2801" == e && (localStorage.setItem("code_new", "ok"), this.showCode = !1) }
            }
        };
        i("7ac7");
        const W = M()(U, [
            ["render", R]
        ]);
        var V = W,
            N = { name: "App", components: { MusicPlayer: D, Code: V } };
        i("9f45");
        const Y = M()(N, [
            ["render", c]
        ]);
        var q = Y;
        Object(s["c"])(q).mount("#app")
    },
    "7ac7": function(e, t, i) {
        "use strict";
        i("22e1")
    },
    "9f45": function(e, t, i) {
        "use strict";
        i("f3d7")
    },
    b884: function(e, t, i) {},
    f3d7: function(e, t, i) {},
    fa49: function(e, t, i) { e.exports = i.p + "img/heart.5a202b9e.png" }
});
//# sourceMappingURL=app.2ed61045.js.map