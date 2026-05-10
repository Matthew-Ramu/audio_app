        ru: {
          htmlLang: "ru",
          docTitle: "Цифровой аудиокалькулятор для аудиофилов · Hi-End Lab",
          langLabel: "Язык",
          navBrandText: "Hi-End Lab",
          navTools: "Инструменты",
          navKnowledge: "Обзор",
          navDamping: "Демпф.",
          navCable: "Кабель",
          navHq: "Фильтры",
          navDb: "дБ",
          brandLine: "Hi-End Digital Audio Lab",
          pageTitle: "Цифровой аудиокалькулятор для аудиофилов",
          subtitle: "DSD · наушники · кабели · HQPlayer · уровень",
          dsdPanelTitle: "Помощник по апсемплингу и фильтрам DSD512",
          cpuLabel: "Класс CPU / SoC",
          tierEntry: "Начальный: Intel i3 / Apple M1",
          tierMid: "Средний: Intel i5 / Apple M2",
          tierUpper: "Выше среднего: Intel i7 / Apple M2 Pro",
          tierHigh: "Топовый: Intel i9 / Apple M3 Max",
          dsdHint:
            "Оценка нагрузки фильтров HQPlayer и шумоподавления по классу CPU — подстраивайте при заикании воспроизведения.",
          hqEntry:
            "Берите более лёгкую связку: <strong>poly-sinc-short-mp</strong> или более короткий <strong>poly-sinc-xla</strong> с <strong>AMSDM7 256+fs</strong>. Если всё ещё тяжело — цельтесь в <strong>DSD256</strong>: сначала стабильное воспроизведение и фон.",
          hqMid:
            "Попробуйте <strong>poly-sinc-xla</strong> с <strong>AMSDM7 512+fs</strong>. Если есть запас CPU — шагайте к более тяжёлым фильтрам или ближе к <strong>DSD512</strong>; ориентируйтесь на дропауты и температуру.",
          hqUpper:
            "Обычно соответствует <strong>Intel Core i7</strong> (гибридные ядра <strong>P+E</strong>, число зависит от поколения) или <strong>Apple M2 Pro</strong> (около <strong>10–12 ядер</strong> класса CPU). База: <strong>poly-sinc-xla</strong> или <strong>poly-sinc-long-hp</strong> с <strong>AMSDM7 512+fs</strong>. Если при воспроизведении CPU ниже ~<strong>65–75%</strong>, можно пробовать <strong>poly-sinc-gauss-long-hp</strong> к <strong>DSD512</strong>; SDM начинайте с <strong>AMSDM7EC 256+fs</strong>, затем <strong>512+fs</strong>. Буфер HQPlayer держите около <strong>100–250 ms</strong> (зависит от драйвера).",
          hqHigh:
            "Для полного <strong>DSD512</strong>: <strong>poly-sinc-gauss-xla</strong> с <strong>AMSDM7EC 512+fs</strong>. Следите за охлаждением и БП; проверьте буферы ASIO/CoreAudio под каждый sample rate.",
          xlrPanelTitle: "Пересчёт уровня XLR и RCA",
          rcaLabelHtml: 'Выход RCA, несимметричный (V<sub>rms</sub>)',
          rcaHint: "Типичный уровень CD/DAC несимметрично около 2 V<sub>rms</sub>.",
          btnCalc: "Рассчитать симметричный выход XLR",
          xlrNote:
            "Симметричная цепочка XLR помогает динамическому диапазону и подавлению синфазных помех.",
          connectorDiagramTitle: "РАСПИНОВКА РАЗЪЁМОВ",
          connectorLegendHtml:
            '<div class="legend-block"><strong>RCA (несимметричный)</strong><br />Центральный штырь (Tip): сигнал · Внешний экран (Sleeve): земля и экран</div><div class="legend-block"><strong>XLR 3-pin (симметричный)</strong><br />Pin 1: земля/экран · Pin 2: горячий (+) · Pin 3: холодный (−). Рисунок: розетка, вид спереди — схематично; сверяйтесь с мануалом устройства.</div>',
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
          errDamping: "Введите корректные импедансы (наушники > 0, выход ≥ 0).",
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
          errCable: "Укажите длину ≥ 0, корректный пресет Ω/м и нагрузку > 0.",
          hqFilterTitle: "Сравнение фильтров HQPlayer (справочно)",
          hqFilterIntro:
            "Учебный обзор; сборки отличаются. Суффиксы <code>-mp</code> (минимальная фаза) и <code>-lp</code> (линейная фаза) меняют звон/задержку. <strong>1×</strong> — выходная частота равна входной на этапе; <strong>N×</strong> — целочисленный апсемплинг перед SDM, тяжелее для CPU.",
          hqFilterTableHtml:
            '<table class="hq-compare-table" dir="ltr"><thead><tr><th scope="col">Фильтр / концепция</th><th scope="col">Нагрузка</th><th scope="col">Типичный сценарий</th></tr></thead><tbody><tr><td><code>1×</code></td><td>Легче</td><td>Без смены частоты до SDM — проверка запаса CPU.</td></tr><tr><td><code>N×</code> (2×/4×/…)</td><td>Тяжелее</td><td>Апсемплинг перед шумоподавлением — согласуйте длину sinc с CPU.</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>Самый лёгкий</td><td>Ноутбуки / слабые CPU; без дропаутов.</td></tr><tr><td><code>poly-sinc-xla</code></td><td>Средняя</td><td>Баланс на «среднем» CPU.</td></tr><tr><td><code>poly-sinc-long-hp</code></td><td>Длинный sinc</td><td>Если термалы и буфер позволяют.</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>Максимум</td><td>Топовые ПК / Apple Silicon, цель DSD512.</td></tr><tr><td>Мин. фаза / лин. фаза</td><td>Задержка / предзвон</td><td><code>-mp</code> и <code>-lp</code> меняют импульсный отклик.</td></tr></tbody></table>',
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
          errDb: "Введите корректное число.",
          footerCopy: "Цифровой набор инженера по звуку © 2024",
          footerNote: "СПРАВОЧНЫЙ ИНСТРУМЕНТ · НЕ СВЯЗАН С HQPLAYER",
          errVoltage: "Введите корректное неотрицательное напряжение.",
          xlrResultHtml: function (v) {
            return (
              "Симметричный XLR ≈ <strong>" +
              v +
              "</strong> V<sub>rms</sub> (RCA × 2)"
            );
          }
        },
        de: {
          htmlLang: "de",
          docTitle: "Digital-Audio-Rechner für Audiophile · Hi-End Lab",
          langLabel: "Sprache",
          navBrandText: "Hi-End Lab",
          navTools: "Werkzeuge",
          navKnowledge: "Grundlagen",
          navDamping: "Dämpfung",
          navCable: "Kabel",
          navHq: "Filter",
          navDb: "dB",
          brandLine: "Hi-End Digital Audio Lab",
          pageTitle: "Digital-Audio-Rechner für Audiophile",
          subtitle: "DSD · Kopfhörer · Kabel · HQPlayer · Pegel",
          dsdPanelTitle: "DSD512 Upsampling- & Filter-Ratgeber",
          cpuLabel: "CPU- / SoC-Klasse",
          tierEntry: "Einstieg: Intel i3 / Apple M1",
          tierMid: "Mitte: Intel i5 / Apple M2",
          tierUpper: "Oberes Mittelfeld: Intel i7 / Apple M2 Pro",
          tierHigh: "High-End: Intel i9 / Apple M3 Max",
          dsdHint:
            "HQPlayer-Filter- und Noise-Shaping-Last wird nach CPU-Klasse geschätzt — bei Stockern nachjustieren.",
          hqEntry:
            "Leichtere Last wählen: <strong>poly-sinc-short-mp</strong> oder kürzeres <strong>poly-sinc-xla</strong> mit <strong>AMSDM7 256+fs</strong>. Zu schwer? Zuerst <strong>DSD256</strong> anstreben — stabile Wiedergabe und Grundrauschen priorisieren.",
          hqMid:
            "<strong>poly-sinc-xla</strong> mit <strong>AMSDM7 512+fs</strong> probieren. Bei CPU-Reserve zu schwereren Filtern oder näher an <strong>DSD512</strong>; Dropouts und Thermik beobachten.",
          hqUpper:
            "Typisch vergleichbar mit <strong>Intel Core i7</strong> (Hybrid-<strong>P+E</strong>-Kerne, je Generation unterschiedlich) oder <strong>Apple M2 Pro</strong> (ca. <strong>10–12 CPU-Kerne</strong>). Basis: <strong>poly-sinc-xla</strong> oder <strong>poly-sinc-long-hp</strong> mit <strong>AMSDM7 512+fs</strong>. Bleibt die CPU beim Abspielen unter ~<strong>65–75%</strong>, sind <strong>poly-sinc-gauss-long-hp</strong> Richtung <strong>DSD512</strong> möglich; SDM mit <strong>AMSDM7EC 256+fs</strong> beginnen, dann <strong>512+fs</strong>. HQPlayer-Puffer ca. <strong>100–250 ms</strong> (treiberabhängig).",
          hqHigh:
            "Für volles <strong>DSD512</strong>: <strong>poly-sinc-gauss-xla</strong> mit <strong>AMSDM7EC 512+fs</strong>. Kühlung und Netzteil beachten; ASIO/CoreAudio-Puffer pro Sample-Rate prüfen.",
          xlrPanelTitle: "XLR vs. RCA Pegelumrechnung",
          rcaLabelHtml: 'RCA unsymmetrischer Ausgang (V<sub>rms</sub>)',
          rcaHint: "Typischer CD/DAC-Einzelende-Pegel etwa 2 V<sub>rms</sub>.",
          btnCalc: "Symmetrischen XLR-Ausgang berechnen",
          xlrNote:
            "Durchgängig XLR kann Dynamik und Gleichtaktunterdrückung verbessern.",
          connectorDiagramTitle: "STECKERBELEGUNG",
          connectorLegendHtml:
            '<div class="legend-block"><strong>RCA (Cinch, unsymmetrisch)</strong><br />Mitteleiter (Tip): Signal · Außenleiter (Sleeve): Masse & Schirm</div><div class="legend-block"><strong>XLR 3-pol (symmetrisch)</strong><br />Pin 1: Masse/Schirm · Pin 2: heiß (+) · Pin 3: kalt (−). Abbildung: Buchse von vorne — dreieckige Pin-Anordnung; immer Handbuch des Geräts prüfen.</div>',
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
          errDamping: "Gültige Impedanzen eingeben (Kopfhörer > 0, Ausgang ≥ 0).",
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
          errCable: "Länge ≥ 0, gültiges Ω/m-Preset und Last > 0 angeben.",
          hqFilterTitle: "HQPlayer-Filtervergleich (Referenz)",
          hqFilterIntro:
            "Überblick zu Bildungszwecken; Builds unterscheiden sich. Suffixe wie <code>-mp</code> (Minimalphase) vs. <code>-lp</code> (Linearphase) beeinflussen Ringing und Latenz. <strong>1×</strong>: Ausgangsrate gleich Eingangsrate; <strong>N×</strong>: ganzzahliges Upsampling vor SDM — höhere CPU-Last.",
          hqFilterTableHtml:
            '<table class="hq-compare-table" dir="ltr"><thead><tr><th scope="col">Filter / Konzept</th><th scope="col">CPU / subjektiv</th><th scope="col">Typisches Szenario</th></tr></thead><tbody><tr><td><code>1×</code></td><td>Leichter</td><td>PCM/DSD-Rate vor SDM unverändert — gut zum Testen der CPU-Reserve.</td></tr><tr><td><code>N×</code> (2×/4×/…)</td><td>Schwerer</td><td>Upsampling vor Noise Shaping — Tap-Länge und CPU abstimmen.</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>Kürzeste Taps</td><td>Einstiegs-CPUs; stabile Wiedergabe zuerst.</td></tr><tr><td><code>poly-sinc-xla</code></td><td>Mittel-langes XL-Fenster</td><td>Täglicher Kompromiss auf Mittelklasse-CPU.</td></tr><tr><td><code>poly-sinc-long-hp</code></td><td>Langes Sinc</td><td>Wenn Thermik und Puffer mitmachen.</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>Schwerste Gauss-Varianten</td><td>High-End-PCs / Apple Silicon, Ziel DSD512.</td></tr><tr><td>Minimal- vs. Linearphase</td><td>Latenz / Vorläuten</td><td><code>-mp</code> vs. <code>-lp</code> ändern den Impuls.</td></tr></tbody></table>',
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
          errDb: "Bitte eine gültige Zahl eingeben.",
          footerCopy: "Digitale Werkzeugkiste des Tontechnikers © 2024",
          footerNote: "REFERENZTOOL · KEINE VERBINDUNG ZU HQPLAYER",
          errVoltage: "Bitte eine gültige nicht-negative Spannung eingeben.",
          xlrResultHtml: function (v) {
            return (
              "Symmetrischer XLR ca. <strong>" +
              v +
              "</strong> V<sub>rms</sub> (RCA × 2)"
            );
          }
        },
        ar: {
          htmlLang: "ar",
          docTitle: "حاسبة الصوت الرقمي للهواة · Hi-End Lab",
          langLabel: "اللغة",
          navBrandText: "Hi-End Lab",
          navTools: "الأدوات",
          navKnowledge: "مقدّمة",
          navDamping: "التخميد",
          navCable: "الكابلات",
          navHq: "المرشحات",
          navDb: "ديسيبل",
          brandLine: "Hi-End Digital Audio Lab",
          pageTitle: "حاسبة الصوت الرقمي للهواة",
          subtitle: "DSD · سماعات · كابلات · HQPlayer · المستوى",
          dsdPanelTitle: "مستشار ترقية التصفية لـ DSD512",
          cpuLabel: "فئة المعالج / SoC",
          tierEntry: "مبتدئ: Intel i3 / Apple M1",
          tierMid: "متوسط: Intel i5 / Apple M2",
          tierUpper: "فوق المتوسط: Intel i7 / Apple M2 Pro",
          tierHigh: "مرتفع: Intel i9 / Apple M3 Max",
          dsdHint:
            "يُقدَّر حمل مرشحات HQPlayer وتشكيل الضجيج حسب فئة المعالج — اضبط يدويًا عند تقطيع التشغيل.",
          hqEntry:
            "فضّل حملًا أخف: <strong>poly-sinc-short-mp</strong> أو <strong>poly-sinc-xla</strong> أقصر مع <strong>AMSDM7 256+fs</strong>. إن بقي الثقيل، استهدف <strong>DSD256</strong> أولًا — ثبّت التشغيل والخلفية الصوتية.",
          hqMid:
            "جرّب <strong>poly-sinc-xla</strong> مع <strong>AMSDM7 512+fs</strong>. إن سمحت المعالج، تصعّد نحو مرشحات أثقل أو أقرب إلى <strong>DSD512</strong>؛ راقب التقطيع وحرارة الجهاز.",
          hqUpper:
            "غالبًا ما يقابل <strong>Intel Core i7</strong> (نوى هجينة <strong>P+E</strong>) أو <strong>Apple M2 Pro</strong> (نحو <strong>10–12</strong> نواة). خط أساس: <strong>poly-sinc-xla</strong> أو <strong>poly-sinc-long-hp</strong> مع <strong>AMSDM7 512+fs</strong>. إن بقي الحمل تحت ~<strong>65–75%</strong> أثناء التشغيل، جرّب <strong>poly-sinc-gauss-long-hp</strong> نحو <strong>DSD512</strong>؛ ابدأ SDM عند <strong>AMSDM7EC 256+fs</strong> ثم <strong>512+fs</strong>. اجعل تخزين HQPlayer نحو <strong>100–250 ms</strong> (حسب التعريف).",
          hqHigh:
            "لـ <strong>DSD512</strong> كاملًا: <strong>poly-sinc-gauss-xla</strong> مع <strong>AMSDM7EC 512+fs</strong>. تأكد من التبريد والطاقة؛ راجعbuffers لـ ASIO/CoreAudio لكل معدل عيّنة.",
          xlrPanelTitle: "تحويل مستوى XLR مقابل RCA",
          rcaLabelHtml: 'خرج RCA غير متوازن (V<sub>rms</sub>)',
          rcaHint: "معيار CD/DAC غير المتوازن نحو 2 V<sub>rms</sub>.",
          btnCalc: "احسب خرج XLR المتوازن",
          xlrNote:
            "استخدام XLR في السلسلة يحسن الديناميكيا ويرفض الضجيج المشترك.",
          connectorDiagramTitle: "توصيل الأطراف",
          connectorLegendHtml:
            '<div class="legend-block"><strong>RCA (غير متوازن)</strong><br />الطرف المركزي (Tip): الإشارة · الغلاف (Sleeve): الأرضي والحماية</div><div class="legend-block"><strong>XLR ثلاثي الأطراف (متوازن)</strong><br />الطرف 1: أرضي/حماية · الطرف 2: ساخن (+) · الطرف 3: بارد (−). الرسم تقريبي لمواجهة المقبس؛ راجع دليل الجهاز.</div>',
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
          errDamping: "أدخل مقاومات صالحة (السماعة > 0، الخرج ≥ 0).",
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
          errCable: "أدخل طولًا ≥ 0 وقيمة Ω/م صالحة وحملًا > 0.",
          hqFilterTitle: "مقارنة مرشحات HQPlayer (مرجع)",
          hqFilterIntro:
            "نظرة تعليمية؛ تختلف البناءات. اللاحقة <code>-mp</code> (أقلّ طورًا) مقابل <code>-lp</code> (طور خطي) تغيّر الرنين/الزمن. <strong>1×</strong> معدّل الخرج = المدخل؛ <strong>N×</strong> ترقية صحيحة قبل SDM — أثقل على المعالج.",
          hqFilterTableHtml:
            '<table class="hq-compare-table" dir="ltr"><thead><tr><th scope="col">مرشح / مفهوم</th><th scope="col">الحمل</th><th scope="col">سيناريو تقليدي</th></tr></thead><tbody><tr><td><code>1×</code></td><td>أخف</td><td>بدون تغيير المعدّل قبل SDM — يتحقق من رصيد المعالج.</td></tr><tr><td><code>N×</code></td><td>أثقل</td><td>ترقية ثم تشكيل ضجيج — طابق طول التاب مع المعالج.</td></tr><tr><td><code>poly-sinc-short-mp</code></td><td>أخف تابات</td><td>أجهزة دخول؛ استقرار التشغيل أولًا.</td></tr><tr><td><code>poly-sinc-xla</code></td><td>متوسط</td><td>توازن يومي على معالج متوسط.</td></tr><tr><td><code>poly-sinc-long-hp</code></td><td>sinc طويل</td><td>إن سمحت الحرارة والمخزن المؤقت.</td></tr><tr><td><code>poly-sinc-gauss-*</code></td><td>الأثقل</td><td>أجهزة قوية؛ هدف DSD512.</td></tr><tr><td>أقلّ طور / طور خطي</td><td>زمن / رنين مسبق</td><td><code>-mp</code> و <code>-lp</code> يغيران الاستجابة النبضية.</td></tr></tbody></table>',
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
          errDb: "أدخل رقمًا صالحًا.",
          footerCopy: "صندوق أدوات مهندس الصوت الرقمي © 2024",
          footerNote: "أداة مرجعية · غير تابعة لـ HQPLAYER",
          errVoltage: "أدخل جهدًا غير سالبًا صالحًا.",
          xlrResultHtml: function (v) {
            return (
              "XLR المتوازن ≈ <strong>" +
              v +
              "</strong> V<sub>rms</sub> (RCA × 2)"
            );
          }
        }
