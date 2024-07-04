<template>
  <span>{{ KipText(number) }}</span>
</template>

<script>
export default {
  name: 'kip-text',
  props: {
    number: {
      type: Number,
      required: true
    },

  },
  data() {
    return {
      // Your component data
    }
  },
  methods: {
    KipText(N) {
            const Thousand = 1000;
            const Meun = 10000;
            const Sean = 100000;
            const Million = Thousand * Thousand;
            const Billion = Thousand * Million;
            const Trillion = Thousand * Billion;

            let dot = "";
            // spilit decimal number floor and decimal
            dot = N.toString().split(".")[1];

            // console.log(this.TextDigitGroup(dot));

            if (N === 0) return "ສູນ";
            
            let SD = N < 0 ? "- " : "";
            let Currz = Math.abs(N - Math.floor(N));
            if (N < 0 || Currz !== 0) N = Math.abs(Math.floor(N));
            
            let AtLeastOne = N >= 1;
            
            if (N >= Trillion) {
                SD += this.TextDigitGroup(Math.floor(N / Trillion)) + "ພັນຕື້";
                N -= Math.floor(N / Trillion) * Trillion;
            }
            
            if (N >= Billion) {
                SD += this.TextDigitGroup(Math.floor(N / Billion)) + "ຕື້";
                N -= Math.floor(N / Billion) * Billion;
            }
            
            if (N >= Million) {
                SD += this.TextDigitGroup(Math.floor(N / Million)) + "ລ້ານ";
                N %= Million;
            }
            
            if (N >= Sean) {
                SD += this.TextDigitGroup(Math.floor(N / Sean)) + "ແສນ";
                N %= Sean;
            }
            
            if (N >= Thousand) {
                SD += this.TextDigitGroup(Math.floor(N / Thousand)) + "ພັນ";
                N %= Thousand;
            }
            
            if (N >= 1) {
                SD += this.TextDigitGroup(N);
            }

            
            if(dot){
                let soon = dot[0]==0?'ສູນ':'';
                return SD+'ຈ້ຳ'+soon+this.TextDigitGroup(dot)+'ອັດ';
            } else{
                return SD+'ກີບຖ້ວນ';
            }

            
            
        },
        TextDigitGroup(N) {
            const digitTexts = [
                "", "ໜຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ",
                "ຫົກ", "ເຈັດ", "ແປດ", "ເກົ້າ"
            ];
            const tenTexts = [
                "", "ສິບ", "ຊາວ", "ສາມສິບ", "ສີ່ສິບ",
                "ຫ້າສິບ", "ຫົກສິບ", "ເຈັດສິບ", "ແປດສິບ", "ເກົ້າສິບ"
            ];
            let SD = "";
            let Flag = false;
            if (Math.floor(N / 100) !== 0) {
                SD = digitTexts[Math.floor(N / 100)] + "ຮ້ອຍ";
                Flag = true;
            }
            N %= 100;
            if (Math.floor(N / 10) !== 0) {
                SD += tenTexts[Math.floor(N / 10)];
                Flag = true;
            }
            N %= 10;
            if (N !== 0 || !Flag) {
                SD += digitTexts[N];
            }
            return SD;
        },
  }
}
</script>


