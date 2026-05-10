        ru: {
          htmlLang: "ru",
          docTitle: "дБ ↔ напряжение · Hi-End Lab",
          langLabel: "Язык",
          navBrandText: "Hi-End Lab",
          navTools: "Инструменты",
          navKnowledge: "Обзор",
          navDamping: "Демпф.",
          navCable: "Кабель",
          navHq: "Фильтры",
          navDb: "дБ",
          brandLine: "Hi-End Digital Audio Lab",
          footerCopy: "Цифровой набор инженера по звуку © 2024",
          footerNote: "СПРАВОЧНЫЙ ИНСТРУМЕНТ · НЕ СВЯЗАН С HQPLAYER",
          dbTitle: "Интерактивно: дБ ↔ отношение напряжения",
          dbHint:
            "Относительный уровень ΔdB умножает амплитуду на 10<sup>ΔdB/20</sup>. +6 дБ ≈ ×2 напряжения; −6 дБ ≈ ×0,5.",
          dbLabel: "Изменение уровня ΔdB",
          dbResultHtml: function (ratio, db) {
            return (
              "Δ = <strong>" +
              db +
              "</strong> дБ → напряжение × <strong>" +
              ratio.toFixed(5) +
              "</strong>"
            );
          },
          errDb: "Введите корректное число."
        },
        de: {
          htmlLang: "de",
          docTitle: "dB ↔ Spannungsverhältnis · Hi-End Lab",
          langLabel: "Sprache",
          navBrandText: "Hi-End Lab",
          navTools: "Werkzeuge",
          navKnowledge: "Grundlagen",
          navDamping: "Dämpfung",
          navCable: "Kabel",
          navHq: "Filter",
          navDb: "dB",
          brandLine: "Hi-End Digital Audio Lab",
          footerCopy: "Digitale Werkzeugkiste des Tontechnikers © 2024",
          footerNote: "REFERENZTOOL · KEINE VERBINDUNG ZU HQPLAYER",
          dbTitle: "Interaktiv dB ↔ Spannungsverhältnis",
          dbHint:
            "Relativer Pegel ΔdB multipliziert die Amplitude mit 10<sup>ΔdB/20</sup>. +6 dB ≈ Spannung ×2; −6 dB ≈ ×0,5.",
          dbLabel: "Pegeländerung ΔdB",
          dbResultHtml: function (ratio, db) {
            return (
              "Δ = <strong>" +
              db +
              "</strong> dB → Spannung × <strong>" +
              ratio.toFixed(5) +
              "</strong>"
            );
          },
          errDb: "Bitte eine gültige Zahl eingeben."
        },
        ar: {
          htmlLang: "ar",
          docTitle: "ديسيبل ↔ نسبة الجهد · Hi-End Lab",
          langLabel: "اللغة",
          navBrandText: "Hi-End Lab",
          navTools: "الأدوات",
          navKnowledge: "مقدّمة",
          navDamping: "التخميد",
          navCable: "الكابلات",
          navHq: "المرشحات",
          navDb: "ديسيبل",
          brandLine: "Hi-End Digital Audio Lab",
          footerCopy: "صندوق أدوات مهندس الصوت الرقمي © 2024",
          footerNote: "أداة مرجعية · غير تابعة لـ HQPLAYER",
          dbTitle: "تفاعلي: ديسيبل ↔ نسبة الجهد",
          dbHint:
            "ΔdB النسبي يضرب السعة بـ 10<sup>ΔdB/20</sup>. +6 dB ≈ ضعف الجهد؛ −6 dB ≈ النصف.",
          dbLabel: "تغيير المستوى ΔdB",
          dbResultHtml: function (ratio, db) {
            return (
              "Δ = <strong>" +
              db +
              "</strong> dB → الجهد × <strong>" +
              ratio.toFixed(5) +
              "</strong>"
            );
          },
          errDb: "أدخل رقمًا صالحًا."
        }
