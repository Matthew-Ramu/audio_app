        ru: {
          htmlLang: "ru",
          docTitle: "Демпфирование наушников (DF) · Hi-End Lab",
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
          dampingTitle: "Демпфирование наушников (DF)",
          dampingHint:
            "DF ≈ Z<sub>наушники</sub> ÷ Z<sub>вых.усилителя</sub>. Выше выходной импеданс усилителя — ниже DF и слабее контроль НЧ.",
          dampingHpLabel: "Импеданс наушников (Ω)",
          dampingAmpLabel: "Выходной Z усилителя (Ω)",
          btnDamping: "Рассчитать DF",
          dampingIdealHtml:
            'DF → <strong>∞</strong> <span style="opacity:.75">(идеал: 0 Ω)</span>',
          dampingResultHtml: function (df) {
            return "DF ≈ <strong>" + df.toFixed(2) + "</strong>";
          },
          dampingResultExplain:
            "Часто упоминают DF > 8 как ориентир; реальный звук зависит от драйвера и схемы демпфирования.",
          errDamping: "Введите корректные импедансы (наушники > 0, выход ≥ 0)."
        },
        de: {
          htmlLang: "de",
          docTitle: "Kopfhörer-Dämpfungsfaktor · Hi-End Lab",
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
          dampingTitle: "Kopfhörer-Dämpfungsfaktor (DF)",
          dampingHint:
            "DF ≈ Z<sub>Kopfhörer</sub> ÷ Z<sub>Ausgang(Verstärker)</sub>. Höherer Ausgangswiderstand senkt DF und kann Bass-Kontrolle lockern.",
          dampingHpLabel: "Kopfhörerimpedanz (Ω)",
          dampingAmpLabel: "Ausgangsimpedanz Verstärker (Ω)",
          btnDamping: "DF berechnen",
          dampingIdealHtml:
            'DF → <strong>∞</strong> <span style="opacity:.75">(ideal 0 Ω Quelle)</span>',
          dampingResultHtml: function (df) {
            return "DF ≈ <strong>" + df.toFixed(2) + "</strong>";
          },
          dampingResultExplain:
            "Faustregel: DF > 8 wird oft genannt; der Klang hängt vom Treiber und der Dämpfung ab.",
          errDamping: "Gültige Impedanzen eingeben (Kopfhörer > 0, Ausgang ≥ 0)."
        },
        ar: {
          htmlLang: "ar",
          docTitle: "عامل تخميد السماعة · Hi-End Lab",
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
          dampingTitle: "عامل تخميد السماعة (DF)",
          dampingHint:
            "DF ≈ Z<sub>سماعة</sub> ÷ Z<sub>خرج المضخّم</sub>. زيادة مقاومة الخرج تخفض DF وقد تضعف ضبط الجهير.",
          dampingHpLabel: "مقاومة السماعة (Ω)",
          dampingAmpLabel: "مقاومة خرج المضخّم (Ω)",
          btnDamping: "احسب DF",
          dampingIdealHtml:
            'DF → <strong>∞</strong> <span style="opacity:.75">(مثالي 0 Ω)</span>',
          dampingResultHtml: function (df) {
            return "DF ≈ <strong>" + df.toFixed(2) + "</strong>";
          },
          dampingResultExplain:
            "غالبًا يُذكر DF > 8 كمرجع؛ الصوت الفعلي يعتمد على السائق وشبكة التخميد.",
          errDamping: "أدخل مقاومات صالحة (السماعة > 0، الخرج ≥ 0)."
        }
