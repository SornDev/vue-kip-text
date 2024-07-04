import { openBlock as f, createElementBlock as h, toDisplayString as T } from "vue";
const p = (t, n) => {
  const r = t.__vccOpts || t;
  for (const [o, l] of n)
    r[o] = l;
  return r;
}, c = {
  name: "kip-text",
  props: {
    number: {
      type: Number,
      required: !0
    }
  },
  data() {
    return {
      // Your component data
    };
  },
  methods: {
    KipText(t) {
      let e = "";
      if (e = t.toString().split(".")[1], t === 0) return "ສູນ";
      let i = t < 0 ? "- " : "", s = Math.abs(t - Math.floor(t));
      if ((t < 0 || s !== 0) && (t = Math.abs(Math.floor(t))), t >= 1e12 && (i += this.TextDigitGroup(Math.floor(t / 1e12)) + "ພັນຕື້", t -= Math.floor(t / 1e12) * 1e12), t >= 1e9 && (i += this.TextDigitGroup(Math.floor(t / 1e9)) + "ຕື້", t -= Math.floor(t / 1e9) * 1e9), t >= 1e6 && (i += this.TextDigitGroup(Math.floor(t / 1e6)) + "ລ້ານ", t %= 1e6), t >= 1e5 && (i += this.TextDigitGroup(Math.floor(t / 1e5)) + "ແສນ", t %= 1e5), t >= 1e3 && (i += this.TextDigitGroup(Math.floor(t / 1e3)) + "ພັນ", t %= 1e3), t >= 1 && (i += this.TextDigitGroup(t)), e) {
        let u = e[0] == 0 ? "ສູນ" : "";
        return i + "ຈ້ຳ" + u + this.TextDigitGroup(e) + "ອັດ";
      } else
        return i + "ກີບຖ້ວນ";
    },
    TextDigitGroup(t) {
      const n = [
        "",
        "ໜຶ່ງ",
        "ສອງ",
        "ສາມ",
        "ສີ່",
        "ຫ້າ",
        "ຫົກ",
        "ເຈັດ",
        "ແປດ",
        "ເກົ້າ"
      ], r = [
        "",
        "ສິບ",
        "ຊາວ",
        "ສາມສິບ",
        "ສີ່ສິບ",
        "ຫ້າສິບ",
        "ຫົກສິບ",
        "ເຈັດສິບ",
        "ແປດສິບ",
        "ເກົ້າສິບ"
      ];
      let o = "", l = !1;
      return Math.floor(t / 100) !== 0 && (o = n[Math.floor(t / 100)] + "ຮ້ອຍ", l = !0), t %= 100, Math.floor(t / 10) !== 0 && (o += r[Math.floor(t / 10)], l = !0), t %= 10, (t !== 0 || !l) && (o += n[t]), o;
    }
  }
};
function M(t, n, r, o, l, a) {
  return f(), h("span", null, T(a.KipText(r.number)), 1);
}
const x = /* @__PURE__ */ p(c, [["render", M]]);
export {
  x as default
};
