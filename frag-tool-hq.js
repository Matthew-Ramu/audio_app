        ru: {
          htmlLang: "ru",
          docTitle: "Сравнение фильтров HQPlayer · Hi-End Lab",
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
          hqFilterTitle: "Сравнение фильтров HQPlayer (справочно)",
          hqFilterIntro:
            "Учебный обзор; сборки отличаются. Суффиксы <code>-mp</code> (минимальная фаза) и <code>-lp</code> (линейная фаза) меняют звон/задержку. <strong>1×</strong> — выходная частота равна входной на этапе; <strong>N×</strong> — целочисленный апсемплинг перед SDM, тяжелее для CPU.",
          hqFilterTableHtml:
            '<table class="hq-compare-table" dir="ltr"><thead><tr><th scope="col">Фильтр / концепция</th><th scope="col">Нагрузка</th><th scope="col">Типичный сценарий</th></tr></thead><tbody><tr><td><code>1×</code></td><td>Легче</td><td>Без смены частоты до SDM — проверка запаса CPU.</td></tr><tr><td><code>N×</code> (2×/4×/…)</td><td>Тяжелее</td><td>Апсемплинг перед шумоподавлением — согласуйте длину sinc с CPU.</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>Самый лёгкий</td><td>Ноутбуки / слабые CPU; без дропаутов.</td></tr><tr><td><code>poly-sinc-xla</code></td><td>Средняя</td><td>Баланс на «среднем» CPU.</td></tr><tr><td><code>poly-sinc-long-hp</code></td><td>Длинный sinc</td><td>Если термалы и буфер позволяют.</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>Максимум</td><td>Топовые ПК / Apple Silicon, цель DSD512.</td></tr><tr><td>Мин. фаза / лин. фаза</td><td>Задержка / предзвон</td><td><code>-mp</code> и <code>-lp</code> меняют импульсный отклик.</td></tr></tbody></table>'
        },
        de: {
          htmlLang: "de",
          docTitle: "HQPlayer-Filtervergleich · Hi-End Lab",
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
          hqFilterTitle: "HQPlayer-Filtervergleich (Referenz)",
          hqFilterIntro:
            "Überblick zu Bildungszwecken; Builds unterscheiden sich. Suffixe wie <code>-mp</code> (Minimalphase) vs. <code>-lp</code> (Linearphase) beeinflussen Ringing und Latenz. <strong>1×</strong>: Ausgangsrate gleich Eingangsrate; <strong>N×</strong>: ganzzahliges Upsampling vor SDM — höhere CPU-Last.",
          hqFilterTableHtml:
            '<table class="hq-compare-table" dir="ltr"><thead><tr><th scope="col">Filter / Konzept</th><th scope="col">CPU / subjektiv</th><th scope="col">Typisches Szenario</th></tr></thead><tbody><tr><td><code>1×</code></td><td>Leichter</td><td>PCM/DSD-Rate vor SDM unverändert — gut zum Testen der CPU-Reserve.</td></tr><tr><td><code>N×</code> (2×/4×/…)</td><td>Schwerer</td><td>Upsampling vor Noise Shaping — Tap-Länge und CPU abstimmen.</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>Kürzeste Taps</td><td>Einstiegs-CPUs; stabile Wiedergabe zuerst.</td></tr><tr><td><code>poly-sinc-xla</code></td><td>Mittel-langes XL-Fenster</td><td>Täglicher Kompromiss auf Mittelklasse-CPU.</td></tr><tr><td><code>poly-sinc-long-hp</code></td><td>Langes Sinc</td><td>Wenn Thermik und Puffer mitmachen.</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>Schwerste Gauss-Varianten</td><td>High-End-PCs / Apple Silicon, Ziel DSD512.</td></tr><tr><td>Minimal- vs. Linearphase</td><td>Latenz / Vorläuten</td><td><code>-mp</code> vs. <code>-lp</code> ändern den Impuls.</td></tr></tbody></table>'
        },
        ar: {
          htmlLang: "ar",
          docTitle: "مقارنة مرشحات HQPlayer · Hi-End Lab",
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
          hqFilterTitle: "مقارنة مرشحات HQPlayer (مرجع)",
          hqFilterIntro:
            "نظرة تعليمية؛ تختلف البناءات. اللاحقة <code>-mp</code> (أقلّ طورًا) مقابل <code>-lp</code> (طور خطي) تغيّر الرنين/الزمن. <strong>1×</strong> معدّل الخرج = المدخل؛ <strong>N×</strong> ترقية صحيحة قبل SDM — أثقل على المعالج.",
          hqFilterTableHtml:
            '<table class="hq-compare-table" dir="ltr"><thead><tr><th scope="col">مرشح / مفهوم</th><th scope="col">الحمل</th><th scope="col">سيناريو تقليدي</th></tr></thead><tbody><tr><td><code>1×</code></td><td>أخف</td><td>بدون تغيير المعدّل قبل SDM — يتحقق من رصيد المعالج.</td></tr><tr><td><code>N×</code></td><td>أثقل</td><td>ترقية ثم تشكيل ضجيج — طابق طول التاب مع المعالج.</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>أخف تابات</td><td>أجهزة دخول؛ استقرار التشغيل أولًا.</td></tr><tr><td><code>poly-sinc-xla</code></td><td>متوسط</td><td>توازن يومي على معالج متوسط.</td></tr><tr><td><code>poly-sinc-long-hp</code></td><td>sinc طويل</td><td>إن سمحت الحرارة والمخزن المؤقت.</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>الأثقل</td><td>أجهزة قوية؛ هدف DSD512.</td></tr><tr><td>أقلّ طور / طور خطي</td><td>زمن / رنين مسبق</td><td><code>-mp</code> و <code>-lp</code> يغيران الاستجابة النبضية.</td></tr></tbody></table>'
        }
