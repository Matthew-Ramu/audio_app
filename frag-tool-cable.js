        ru: {
          htmlLang: "ru",
          docTitle: "Длина кабеля — потери уровня · Hi-End Lab",
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
          cableTitle: "Длина кабеля — потери уровня (оценка)",
          cableHint:
            "Упрощённая резистивная модель линейного уровня для длинных линий; не модель линии передачи.",
          cableLenLabel: "Длина кабеля (м)",
          cablePresetLabel: "Медь ≈ Ω на проводник / м",
          cablePresetHeavy: "~0,12 Ω/м · тонкий / длинный",
          cablePresetMid: "~0,08 Ω/м · студийный типовой",
          cablePresetLight: "~0,04 Ω/м · толще / короче",
          cableLoadLabel: "Импеданс нагрузки Z (Ω)",
          cableModelHint:
            "Последовательная модель: R<sub>каб</sub> ≈ 2 × длина × Ω/м (туда-обратно). Потери<sub>dB</sub> = 20·log<sub>10</sub>(Z<sub>н</sub> / (Z<sub>н</sub> + R<sub>каб</sub>)).",
          btnCable: "Оценить затухание",
          cableResultHtml: function (lossDb, ratioV, rWire) {
            return (
              "≈ <strong>" +
              lossDb.toFixed(3) +
              "</strong> дБ · отн. напряжения <strong>" +
              ratioV.toFixed(5) +
              "</strong> · R<sub>каб</sub> ≈ <strong>" +
              rWire.toFixed(2) +
              "</strong> Ω"
            );
          },
          cableResultExplain:
            "При высоком Z<sub>н</sub> (типичный линейный вход) абсолютные потери малы, если кабель не очень длинный и тонкий. Для инсталляций сверяйтесь с таблицами AWG.",
          errCable: "Укажите длину ≥ 0, корректный пресет Ω/м и нагрузку > 0."
        },
        de: {
          htmlLang: "de",
          docTitle: "Kabellänge — Pegelabfall · Hi-End Lab",
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
          cableTitle: "Kabellänge — Pegelabfall (Schätzung)",
          cableHint:
            "Grobes ohmsches Modell für Line-Pegel auf langen Streifen; keine Leitungswellen-Simulation.",
          cableLenLabel: "Kabellänge (m)",
          cablePresetLabel: "Kupfer ≈ Ω pro Leiter / m",
          cablePresetHeavy: "~0,12 Ω/m · dünn / lang",
          cablePresetMid: "~0,08 Ω/m · typisches Studio-Mikrofonkabel",
          cablePresetLight: "~0,04 Ω/m · dicker / kurz",
          cableLoadLabel: "Lastimpedanz nachgeschaltet Z (Ω)",
          cableModelHint:
            "Reihenmodell: R<sub>Kabel</sub> ≈ 2 × Länge × Ω/m (Hin und Rück). Verlust<sub>dB</sub> = 20·log<sub>10</sub>(Z<sub>Last</sub> / (Z<sub>Last</sub> + R<sub>Kabel</sub>)).",
          btnCable: "Dämpfung schätzen",
          cableResultHtml: function (lossDb, ratioV, rWire) {
            return (
              "≈ <strong>" +
              lossDb.toFixed(3) +
              "</strong> dB · Spannungsverhältnis <strong>" +
              ratioV.toFixed(5) +
              "</strong> · R<sub>Kabel</sub> ≈ <strong>" +
              rWire.toFixed(2) +
              "</strong> Ω"
            );
          },
          cableResultExplain:
            "Bei hohem Z<sub>Last</sub> (typische Line-Eingänge) sind absolute Verluste meist klein, außer Kabel ist sehr lang und dünn. Für Installationen AWG-Tabellen nutzen.",
          errCable: "Länge ≥ 0, gültiges Ω/m-Preset und Last > 0 angeben."
        },
        ar: {
          htmlLang: "ar",
          docTitle: "طول الكابلة — فقدان المستوى · Hi-End Lab",
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
          cableTitle: "طول الكابلة — فقدان المستوى (تقدير)",
          cableHint:
            "نموذج مقاومي مبسّط لخطوط المستوى الطويلة؛ وليس محاكاة خط نقل.",
          cableLenLabel: "طول الكابلة (م)",
          cablePresetLabel: "نحاس ≈ Ω لكل موصل / م",
          cablePresetHeavy: "~0.12 Ω/m · أرفع / أطول",
          cablePresetMid: "~0.08 Ω/m · كابل استوديو نموذجي",
          cablePresetLight: "~0.04 Ω/m · أسمن / أقصر",
          cableLoadLabel: "معاوقة الحمل Z (Ω)",
          cableModelHint:
            "نموذج تسلسلي: R<sub>سلك</sub> ≈ 2 × الطول × Ω/م (ذهاب وإياب). الخسارة<sub>dB</sub> = 20·log<sub>10</sub>(Z<sub>حمل</sub> / (Z<sub>حمل</sub> + R<sub>سلك</sub>)).",
          btnCable: "قدّر الإضعاف",
          cableResultHtml: function (lossDb, ratioV, rWire) {
            return (
              "≈ <strong>" +
              lossDb.toFixed(3) +
              "</strong> dB · نسبة الجهد <strong>" +
              ratioV.toFixed(5) +
              "</strong> · R<sub>سلك</sub> ≈ <strong>" +
              rWire.toFixed(2) +
              "</strong> Ω"
            );
          },
          cableResultExplain:
            "عند Z<sub>حمل</sub> عالٍ (مداخل خطية) يكون الفقد صغيرًا ما لم يكن الكبل طويلًا جدًا ورفيعًا. للتركيبات الجادة استخدم جداول AWG.",
          errCable: "أدخل طولًا ≥ 0 وقيمة Ω/م صالحة وحملًا > 0."
        }
