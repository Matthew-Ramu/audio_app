        ru: {
          htmlLang: "ru",
          docTitle: "Мини-курс для аудиофилов · PCM, DSD и апсемплинг",
          langLabel: "Язык",
          navBrandText: "Hi-End Lab",
          navTools: "Инструменты",
          navKnowledge: "Обзор",
          navDamping: "Демпф.",
          navCable: "Кабель",
          navHq: "Фильтры",
          navDb: "дБ",
          brandLine: "Hi-End Digital Audio Lab",
          pageTitle: "Мини-курс для аудиофилов",
          subtitle: "PCM · DSD · Апсемплинг · Цепочка воспроизведения",
          eduLead:
            "Кратко о различии PCM и DSD, о том, что означает DSD в цепочке воспроизведения, и зачем нужен апсемплинг — только для обучения; не заменяет спецификации производителей и лабораторные методики.",
          eduPcmHeading: "PCM и DSD — ключевые отличия",
          eduPcmBody:
            "<p><strong>PCM</strong> (импульсно-кодовая модуляция) — основной формат цифрового аудио: при фиксированной <strong>частоте дискретизации</strong> (44,1; 48; 96; 192 кГц и т. д.) каждый отсчёт хранится как <strong>многоразрядное слово</strong> (16/24/32 бит). Продакшн, монтаж и большинство форматов (WAV, FLAC, AIFF) строятся вокруг PCM.</p><p><strong>DSD</strong> — это <strong>1-битный поток на очень высокой частоте</strong> (например ~2,8224 МГц для DSD64, затем ×2/×4/×8). Информация передаётся плотностью переключений; шум квантования обычно <strong>noise-shaped</strong> за пределы слышимого диапазона. Файлы — DSF/DFF и др.; воспроизведение часто связано с фильтрами и SDM.</p><div class=\"edu-table-wrap\"><table class=\"edu-compare\" dir=\"ltr\"><thead><tr><th scope=\"col\">Аспект</th><th scope=\"col\">PCM</th><th scope=\"col\">DSD</th></tr></thead><tbody><tr><td>Кодирование</td><td>Равномерные отсчёты + разрядность на отсчёт</td><td>Очень высокая частота 1-бит; noise shaping обязателен</td></tr><tr><td>Продакшн</td><td>Зрелые инструменты монтажа/мастеринга</td><td>Сложнее тяжёлое редактирование; отдельные мастеринг-трассы</td></tr><tr><td>DAC</td><td>Часто фильтрация к аналогу</td><td>Нативный DSD или внутреннее преобразование в PCM — зависит от чипа</td></tr></tbody></table></div><p class=\"edu-note\"><strong>Нет универсального «лучше звучит»</strong>: всё зависит от мастера, фильтров, часов и всей аналоговой цепи.</p>",
          eduDsdHeading: "Что такое DSD?",
          eduDsdBody:
            "<p><strong>DSD</strong> описывает форму сигнала <strong>1-битным потоком на очень высокой частоте</strong>. Часто упоминают DSD64 (~2,8224 МГц), DSD128, DSD256 и <strong>DSD512</strong>. В отличие от PCM, где у каждого отсчёта многоразрядная амплитуда, в DSD информация — в <strong>ультравысокочастотной плотности переключений</strong>, шум уводится из слышимой полосы.</p><p>Даже «DSD-файлы» могут проходить <strong>цифровую фильтрацию, конверсию или передискретизацию</strong> до ЦАП; поток в чип может не совпадать с надписью на коробке — отсюда настройки HQPlayer: фильтры интерполяции и SDM/Δ‑Σ влияют на <strong>подавление в стоп-полосе, фазу и спектр шума</strong>.</p>",
          eduUpsHeading: "Зачем апсемплинг?",
          eduUpsBody:
            "<p><strong>Апсемплинг</strong> повышает более низкую частоту дискретизации до более высокой цели (например к большему кратному DSD). Цель — не «дорисовать» то, чего не было в студии, а дать <strong>цифровым фильтрам и noise shaping</strong> запас по вычислениям: можно сузить переходные полосы и отодвинуть шум квантования от чувствительных участков слуха.</p><p>Выше цель — обычно выше <strong>нагрузка на CPU/RAM, задержка и энергопотребление</strong>; сложные фильтры требуют стабильных буферов и часов. Начинайте с <strong>воспроизведения без дропаутов</strong>, затем повышайте частоту или «тяжесть» алгоритма.</p><ul class=\"edu-list\"><li>Дропауты или предупреждения буфера — снизьте целевую частоту или возьмите более лёгкие фильтры/SDM.</li><li>Есть запас CPU — пробуйте более высокие кратные DSD.</li><li>Впечатление всё равно зависит от <strong>акустики помещения, аналога, АС и расстановки</strong>.</li></ul>",
          footerCopy: "Цифровой набор инженера по звуку © 2024",
          footerNote: "СПРАВОЧНЫЙ ИНСТРУМЕНТ · НЕ СВЯЗАН С HQPLAYER"
        },
        de: {
          htmlLang: "de",
          docTitle: "Audiophilen-Grundlagen · PCM, DSD & Upsampling",
          langLabel: "Sprache",
          navBrandText: "Hi-End Lab",
          navTools: "Werkzeuge",
          navKnowledge: "Grundlagen",
          navDamping: "Dämpfung",
          navCable: "Kabel",
          navHq: "Filter",
          navDb: "dB",
          brandLine: "Hi-End Digital Audio Lab",
          pageTitle: "Audiophilen-Grundlagen",
          subtitle: "PCM · DSD · Upsampling · Wiedergabekette",
          eduLead:
            "Kurzüberblick PCM vs. DSD, was DSD in der Kette bedeutet und warum Upsampling zählt — nur zu Bildungszwecken; kein Ersatz für Herstellerangaben oder Messverfahren.",
          eduPcmHeading: "PCM vs. DSD — Hauptunterschiede",
          eduPcmBody:
            "<p><strong>PCM</strong> (Puls-Code-Modulation) ist das dominante digitale Audioformat: bei fester <strong>Abtastrate</strong> (z. B. 44,1; 48; 96; 192 kHz) wird jedes Zeitquant als <strong>Mehrbit-Wort</strong> (16/24/32 Bit) für die Amplitude gespeichert. Produktion, Schnitt und die meisten Vertriebsformate (WAV, FLAC, AIFF) basieren auf PCM.</p><p><strong>DSD</strong> nutzt einen <strong>1-Bit-Datenstrom mit sehr hoher Abtastrate</strong> (z. B. ~2,8224 MHz bei DSD64, dann ×2/×4/×8). Information steckt in ultrahoher Schaltdichte; Quantisierungsrauschen wird typischerweise per <strong>Noise Shaping</strong> aus dem Hörbereich geschoben. Dateien z. B. als DSF/DFF — die Wiedergabe verlangt oft spezielle Filter- oder SDM-Pfade.</p><div class=\"edu-table-wrap\"><table class=\"edu-compare\" dir=\"ltr\"><thead><tr><th scope=\"col\">Aspekt</th><th scope=\"col\">PCM</th><th scope=\"col\">DSD</th></tr></thead><tbody><tr><td>Codierung</td><td>Gleichmäßige Samples + Bittiefe pro Sample</td><td>Sehr hohe Rate, 1 Bit; Noise Shaping zentral</td></tr><tr><td>Workflow</td><td>Reife Tools für Schnitt/Master; universeller Austausch</td><td>Schwere Bearbeitung oft unbequemer; Nischen-Mastering</td></tr><tr><td>DAC-Pfad</td><td>Oft Filterung Richtung Analog</td><td>Nativ-DSD oder interne Umsetzung nach PCM — chipabhängig</td></tr></tbody></table></div><p class=\"edu-note\"><strong>Kein pauschales „klingt besser“</strong>: Es kommt auf Master, Filter, Clocking und die gesamte analoge Kette an.</p>",
          eduDsdHeading: "Was ist DSD?",
          eduDsdBody:
            "<p><strong>DSD</strong> beschreibt Wellenformen mit einem <strong>1-Bit-Strom sehr hoher Abtastrate</strong>. Übliche Stufen: DSD64 (~2,8224 MHz), DSD128, DSD256 und das enthusiastische <strong>DSD512</strong>. Anders als PCM mit Mehrbit-Amplituden pro Sample trägt DSD Information in <strong>ultrahoher Schaltdichte</strong>; Rauschen wird aus dem Hörbereich geschoben.</p><p>Selbst „DSD-Dateien“ können vor dem DAC noch <strong>digital gefiltert, konvertiert oder neu moduliert</strong> werden — was im Chip ankommt, muss nicht der Verpackungsaufdruck sein. Daher die Detailarbeit in HQPlayer: Interpolationsfilter und SDM/Δ‑Σ beeinflussen <strong>Sperrdämpfung, Phasenverhalten und Rauschspektrum</strong>.</p>",
          eduUpsHeading: "Warum Upsampling?",
          eduUpsBody:
            "<p><strong>Upsampling</strong> hebt eine niedrigere Abtastrate auf ein höheres Ziel (z. B. höheres DSD-K multiples). Ziel ist nicht, Studio-Details zu erfinden, sondern <strong>digitalen Filtern und Noise Shaping</strong> mehr Rechenraum zu geben: Übergangsbänder können schärfer werden, Quantisierungsrauschen weiter vom Hörbereich weggeschoben.</p><p>Höhere Ziele erhöhen meist <strong>CPU-/Speicherlast, Latenz und Leistung</strong>; anspruchsvolle Filter verlangen stabile Puffer und Takte. Starten Sie mit <strong>dropout-freier Wiedergabe</strong>, dann schrittweise höhere Rate oder schwerere Algorithmen.</p><ul class=\"edu-list\"><li>Dropouts oder Pufferwarnungen: Zielrate senken oder leichtere Filter/SDM.</li><li>CPU-Reserve vorhanden: höhere DSD-Vielfache mit vollständigeren Ketten probieren.</li><li>Hörergebnis hängt weiter von <strong>Raumakustik, Analogteil, Wandlern und Aufstellung</strong> ab.</li></ul>",
          footerCopy: "Digitale Werkzeugkiste des Tontechnikers © 2024",
          footerNote: "REFERENZTOOL · KEINE VERBINDUNG ZU HQPLAYER"
        },
        ar: {
          htmlLang: "ar",
          docTitle: "مقدّمة للهواة · PCM وDSD والترقية",
          langLabel: "اللغة",
          navBrandText: "Hi-End Lab",
          navTools: "الأدوات",
          navKnowledge: "مقدّمة",
          navDamping: "التخميد",
          navCable: "الكابلات",
          navHq: "المرشحات",
          navDb: "ديسيبل",
          brandLine: "Hi-End Digital Audio Lab",
          pageTitle: "مقدّمة صوتية للهواة",
          subtitle: "PCM · DSD · الترقية · سلسلة التشغيل",
          eduLead:
            "مقارنة مفاهيمية بين PCM وDSD، ودور DSD في سلسلة التشغيل، ولماذا تُستخدم ترقية التردد — للتعليم فقط؛ لا تحل محل مواصفات المصنع أو الإجراءات المختبرية.",
          eduPcmHeading: "PCM مقابل DSD — الفروق الأساسية",
          eduPcmBody:
            "<p><strong>PCM</strong> هو تمثيل الصوت الرقمي السائد: عند <strong>معدل عينات</strong> ثابت (مثل 44.1 أو 48 أو 96 أو 192 كيلوهرتز) يُخزَّن كل لحظة ككلمة <strong>متعددة البتات</strong> (16/24/32 بت) للسعة. الإنتاج والتحرير ومعظم التوزيع (WAV، FLAC، AIFF) يدور حول PCM.</p><p><strong>DSD</strong> يستخدم <strong>تيار بت واحد بمعدل عينات عالٍ جدًا</strong> (نحو 2.8224 ميجاهرتز لـ DSD64 ثم مضاعفات أعلى). تُنقل المعلومات بكثافة تبديل فوق الحسم؛ يُشكَّل ضجيج التكميم خارج النطاق السمعي غالبًا. قد تكون الملفات DSF/DFF؛ غالبًا تدخل مرشحات أو مسارات SDM.</p><div class=\"edu-table-wrap\"><table class=\"edu-compare\" dir=\"rtl\"><thead><tr><th scope=\"col\">الجانب</th><th scope=\"col\">PCM</th><th scope=\"col\">DSD</th></tr></thead><tbody><tr><td>ترميز الزمن/السعة</td><td>عينات منتظمة + عمق بت لكل عينة</td><td>كثافة بت واحد عالٍ؛ تشكيل الضجيج جزء أساسي</td></tr><tr><td>سير العمل</td><td>أدوات تحرير وماسترينغ ناضجة</td><td>تحرير ثقيل أقل ملاءمة؛ مسارات ماسترينغ متخصصة</td></tr><tr><td>مسار DAC</td><td>غالبًا تصفية نحو التماثلي</td><td>DSD أصلي أو تحويل داخلي إلى PCM — يعتمد على الرقاقة</td></tr></tbody></table></div><p class=\"edu-note\"><strong>لا يوجد حكم مطلق «أفضل صوتًا»</strong>: يعتمد الأمر على الماستر والمرشحات والساعة والسلسلة التماثلية.</p>",
          eduDsdHeading: "ما هو DSD؟",
          eduDsdBody:
            "<p><strong>DSD</strong> يمثّل موجات شبيهة بالتماثلي عبر <strong>تيار بت واحد بمعدل عينات عالٍ جدًا</strong>. الشائع: DSD64 (~2.8224 MHz) ثم DSD128 و256 و<strong>DSD512</strong>. بخلاف PCM حيث تُخزَّن السعة متعددة البت لكل عينة، يحمل DSD المعلومات بـ<strong>كثافة تبديل فوق الحسم</strong> بينما يُدفع ضجيج التكميم خارج النطاق السمعي غالبًا.</p><p>حتى ملفات «DSD» قد تمرّ بـ<strong>ترشيح رقمي أو تحويل أو إعادة تضمين</strong> قبل DAC؛ ما يدخل المحوّل قد يختلف عن الملصق. لذلك تهم إعدادات HQPlayer والمرشحات ومسارات SDM/Δ‑Σ لـ<strong>رفض النطاق الموقوف والطور وطيف الضجيج</strong>.</p>",
          eduUpsHeading: "لماذا الترقية (Upsampling)؟",
          eduUpsBody:
            "<p><strong>Upsampling</strong> يرفع معدل عينات أقل نحو هدف أعلى (مثل مضاعف DSD أعلى). الهدف ليس اختلاق تفاصيل غير موجودة، بل إعطاء <strong>المرشحات الرقمية وتشكيل الضجيج</strong> هامش حساب أوسع: يمكن شد أحزمة الانتقال ودفع ضجيج التكميم أبعد عن المناطق الحساسة للسمع.</p><p>الأهداف الأعلى عادة ترفع <strong>حمل المعالج والذاكرة والزمن والاستطاعة</strong>؛ المرشحات الدقيقة تتطلب مخازن مؤقتة وساعة منضبطة. ابدأ من <strong>تشغيل بلا انقطاع</strong> ثم زِد المعدل أو ثقل الخوارزمية تدريجيًا.</p><ul class=\"edu-list\"><li>عند تقطيع أو تحذيرات المخزن: خفّض المعدل الهدف أو مرشحات/SDM أخف.</li><li>إن وُجد رصيد معالج: جرّب مضاعفات DSD أعلى.</li><li>ما يزال الإدراك يعتمد على <strong>الصوتيات الغرفية والتماثل والمحركات والمواضع</strong>.</li></ul>",
          footerCopy: "صندوق أدوات مهندس الصوت الرقمي © 2024",
          footerNote: "أداة مرجعية · غير تابعة لـ HQPLAYER"
        }
