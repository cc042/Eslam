const surahs = [
	{ name: "الفاتحة", verses: 7, type: "مكية", summary: "أم الكتاب، تتضمن الثناء على الله، طلب الهداية، والدعاء بالثبات على الصراط المستقيم." },
	{ name: "البقرة", verses: 286, type: "مدنية", summary: "أطول سورة، تعالج أحكام الشريعة، القصص، الإيمان، التعاملات، والاختبار بالإيمان والعمل." },
	{ name: "آل عمران", verses: 200, type: "مدنية", summary: "تؤكد أهمية الثبات في الإيمان، الدعوة، وحدة الأمة، وأحداث غزوة أحد." },
	{ name: "النساء", verses: 176, type: "مدنية", summary: "تعالج قضايا الأسرة، الميراث، العدل، وحماية الحقوق." },
	{ name: "المائدة", verses: 120, type: "مدنية", summary: "تتحدث عن العهود والمواثيق، الحلال والحرام، وأخلاقيات المعاملات." },
	{ name: "الأنعام", verses: 165, type: "مكية", summary: "تركز على التوحيد، الدلائل الكونية، والرد على الشرك." },
	{ name: "الأعراف", verses: 206, type: "مكية", summary: "قصص الأمم السابقة، الدعوة للإصلاح، وعواقب التكذيب." },
	{ name: "الأنفال", verses: 75, type: "مدنية", summary: "تناقش الغنائم وأخلاقيات القتال." },
	{ name: "التوبة", verses: 129, type: "مدنية", summary: "تُعنى بالمنافقين، الجهاد، والتحذير من الخيانة." },
	{ name: "يونس", verses: 109, type: "مكية", summary: "دعوة للتوحيد، قصص الأنبياء، ووعد الله للمؤمنين." },
	{ name: "هود", verses: 123, type: "مكية", summary: "تثبيت النبي بقصص الأنبياء السابقين." },
	{ name: "يوسف", verses: 111, type: "مكية", summary: "قصة النبي يوسف عبرةً في الصبر والتوكل على الله." },
	{ name: "الرعد", verses: 43, type: "مدنية", summary: "دلائل قدرة الله وتوحيده." },
	{ name: "إبراهيم", verses: 52, type: "مكية", summary: "شكر النعم والتحذير من الكفر." },
	{ name: "الحجر", verses: 99, type: "مكية", summary: "وعد الله بالحفظ، وتحذير المكذبين." },
	{ name: "النحل", verses: 128, type: "مكية", summary: "نعم الله، توحيده، وتثبيت النبي." },
	{ name: "الإسراء", verses: 111, type: "مكية", summary: "الإسراء والمعراج، الأخلاقيات، وأحكام فردية." },
	{ name: "الكهف", verses: 110, type: "مكية", summary: "قصص الفتية، الكنز، موسى والخضر، وذي القرنين." },
	{ name: "مريم", verses: 98, type: "مكية", summary: "قصة مريم، عيسى، وزكريا." },
	{ name: "طه", verses: 135, type: "مكية", summary: "قصة موسى وفرعون، وأهمية القرآن." },
	{ name: "الأنبياء", verses: 112, type: "مكية", summary: "قصص الأنبياء، الحساب، وعظمة الخالق." },
	{ name: "الحج", verses: 78, type: "مدنية", summary: "عبودية الله وأحكام الحج." },
	{ name: "المؤمنون", verses: 118, type: "مكية", summary: "صفات المؤمنين، الخلق، والحساب." },
	{ name: "النور", verses: 64, type: "مدنية", summary: "أحكام اجتماعية وآداب الاستئذان." },
	{ name: "الفرقان", verses: 77, type: "مكية", summary: "الفرق بين المؤمنين والكافرين." },
	{ name: "الشعراء", verses: 227, type: "مكية", summary: "قصص الأنبياء والدعوة." },
	{ name: "النمل", verses: 93, type: "مكية", summary: "قصة سليمان، وملكة سبأ." },
	{ name: "القصص", verses: 88, type: "مكية", summary: "قصة موسى وفرعون." },
	{ name: "العنكبوت", verses: 69, type: "مكية", summary: "الابتلاءات وثبات المؤمنين." },
	{ name: "الروم", verses: 60, type: "مكية", summary: "أحداث تاريخية ودلائل الإيمان." },
	{ name: "لقمان", verses: 34, type: "مكية", summary: "الحكمة والنصائح للأبناء." },
	{ name: "السجدة", verses: 30, type: "مكية", summary: "دلائل البعث وتوحيد الله." },
	{ name: "الأحزاب", verses: 73, type: "مدنية", summary: "غزوة الأحزاب وأحكام اجتماعية." },
	{ name: "سبأ", verses: 54, type: "مكية", summary: "النعم وشكرها." },
	{ name: "فاطر", verses: 45, type: "مكية", summary: "عظمة خلق الله." },
	{ name: "يس", verses: 83, type: "مكية", summary: "دلائل القدرة الإلهية." },
	{ name: "الصافات", verses: 182, type: "مكية", summary: "توحيد الله وقصص الأنبياء." },
	{ name: "ص", verses: 88, type: "مكية", summary: "دعوة للتوحيد وعاقبة المكذبين." },
	{ name: "الزمر", verses: 75, type: "مكية", summary: "الإخلاص في العبادة." },
	{ name: "غافر", verses: 85, type: "مكية", summary: "العاقبة للمتقين." },
	{ name: "فصلت", verses: 54, type: "مكية", summary: "دلائل الوحي والتوحيد." },
	{ name: "الشورى", verses: 53, type: "مكية", summary: "أهمية الشورى." },
	{ name: "الزخرف", verses: 89, type: "مكية", summary: "الحياة الدنيا وزخرفها." },
	{ name: "الدخان", verses: 59, type: "مكية", summary: "التحذير من يوم القيامة." },
	{ name: "الجاثية", verses: 37, type: "مكية", summary: "عاقبة المكذبين." },
	{ name: "الأحقاف", verses: 35, type: "مكية", summary: "قصص عاد وثمود." },
	{ name: "محمد", verses: 38, type: "مدنية", summary: "الجهاد وأخلاق المسلمين." },
	{ name: "الفتح", verses: 29, type: "مدنية", summary: "صلح الحديبية." },
	{ name: "الحجرات", verses: 18, type: "مدنية", summary: "آداب المجتمع." },
	{ name: "ق", verses: 45, type: "مكية", summary: "البعث والحساب." },
	{ name: "الذاريات", verses: 60, type: "مكية", summary: "عاقبة المتقين." },
	{ name: "الطور", verses: 49, type: "مكية", summary: "دلائل التوحيد." },
	{ name: "النجم", verses: 62, type: "مكية", summary: "معجزة المعراج." },
	{ name: "القمر", verses: 55, type: "مكية", summary: "أحداث يوم القيامة." },
	{ name: "الرحمن", verses: 78, type: "مدنية", summary: "نعم الله المتكررة." },
	{ name: "الواقعة", verses: 96, type: "مكية", summary: "أهوال يوم القيامة." },
	{ name: "الحديد", verses: 29, type: "مدنية", summary: "الإنفاق في سبيل الله." },
	{ name: "المجادلة", verses: 22, type: "مدنية", summary: "أحكام اجتماعية." },
	{ name: "الحشر", verses: 24, type: "مدنية", summary: "تطهير المجتمع." },
	{ name: "الممتحنة", verses: 13, type: "مدنية", summary: "العلاقات مع غير المسلمين." },
	{ name: "الصف", verses: 14, type: "مدنية", summary: "الجهاد والوحدة." },
	{ name: "الجمعة", verses: 11, type: "مدنية", summary: "أهمية صلاة الجمعة." },
	{ name: "المنافقون", verses: 11, type: "مدنية", summary: "أخلاق المنافقين." },
	{ name: "التغابن", verses: 18, type: "مدنية", summary: "الإيمان بالله واليوم الآخر." },
	{ name: "الطلاق", verses: 12, type: "مدنية", summary: "أحكام الطلاق." },
	{ name: "التحريم", verses: 12, type: "مدنية", summary: "أخلاقيات الأسرة." },
	{ name: "الملك", verses: 30, type: "مكية", summary: "ملك الله وقدرته." },
	{ name: "القلم", verses: 52, type: "مكية", summary: "الأخلاق والآداب." },
	{ name: "الحاقة", verses: 52, type: "مكية", summary: "أهوال يوم القيامة." },
	{ name: "المعارج", verses: 44, type: "مكية", summary: "عاقبة المكذبين." },
	{ name: "نوح", verses: 28, type: "مكية", summary: "قصة النبي نوح ودعوته." },
	{ name: "الجن", verses: 28, type: "مكية", summary: "إيمان الجن بالقرآن." },
	{ name: "المزمل", verses: 20, type: "مكية", summary: "أوامر للنبي في العبادة." },
	{ name: "المدثر", verses: 56, type: "مكية", summary: "الدعوة والإعداد لها." },
	{ name: "القيامة", verses: 40, type: "مكية", summary: "البعث والحساب." },
	{ name: "الإنسان", verses: 31, type: "مدنية", summary: "جزاء المتقين." },
	{ name: "المرسلات", verses: 50, type: "مكية", summary: "إنذار يوم القيامة." },
	{ name: "النبأ", verses: 40, type: "مكية", summary: "أهوال يوم القيامة." },
	{ name: "النازعات", verses: 46, type: "مكية", summary: "دلائل البعث." },
	{ name: "عبس", verses: 42, type: "مكية", summary: "إهمال النبي للأعمى." },
	{ name: "التكوير", verses: 29, type: "مكية", summary: "أهوال القيامة." },
	{ name: "الإنفطار", verses: 19, type: "مكية", summary: "دلائل يوم الحساب." },
	{ name: "المطففين", verses: 36, type: "مكية", summary: "التحذير من الغش." },
	{ name: "الإنشقاق", verses: 25, type: "مكية", summary: "دلائل الآخرة." },
	{ name: "البروج", verses: 22, type: "مكية", summary: "التحذير من عاقبة الظلم." },
	{ name: "الطارق", verses: 17, type: "مكية", summary: "دلائل قدرة الله." },
	{ name: "الأعلى", verses: 19, type: "مكية", summary: "الحث على التذكر والتسبيح." },
	{ name: "الغاشية", verses: 26, type: "مكية", summary: "الحساب." },
	{ name: "الفجر", verses: 30, type: "مكية", summary: "عاقبة الطغاة." },
	{ name: "البلد", verses: 20, type: "مكية", summary: "التحديات في الحياة." },
	{ name: "الشمس", verses: 15, type: "مكية", summary: "أهمية تزكية النفس." },
	{ name: "الليل", verses: 21, type: "مكية", summary: "العمل في الدنيا." },
	{ name: "الضحى", verses: 11, type: "مكية", summary: "فضل الله على النبي." },
	{ name: "الشرح", verses: 8, type: "مكية", summary: "تخفيف العبء عن النبي." },
	{ name: "التين", verses: 8, type: "مكية", summary: "خلق الإنسان في أحسن تقويم." },
	{ name: "العلق", verses: 19, type: "مكية", summary: "بداية الوحي." },
	{ name: "القدر", verses: 5, type: "مكية", summary: "ليلة القدر." },
	{ name: "البينة", verses: 8, type: "مدنية", summary: "الفرق بين الحق والباطل." },
	{ name: "الزلزلة", verses: 8, type: "مدنية", summary: "أحداث يوم القيامة." },
	{ name: "العاديات", verses: 11, type: "مكية", summary: "صفة الخيل في الجهاد." },
	{ name: "القارعة", verses: 11, type: "مكية", summary: "أهوال يوم القيامة." },
	{ name: "التكاثر", verses: 8, type: "مكية", summary: "التحذير من حب المال." },
	{ name: "العصر", verses: 3, type: "مكية", summary: "أهمية الوقت." },
	{ name: "الهمزة", verses: 9, type: "مكية", summary: "عاقبة السخرية." },
	{ name: "الفيل", verses: 5, type: "مكية", summary: "حادثة الفيل." },
	{ name: "قريش", verses: 4, type: "مكية", summary: "فضل قريش." },
	{ name: "الماعون", verses: 7, type: "مكية", summary: "أفعال المنافقين." },
	{ name: "الكوثر", verses: 3, type: "مكية", summary: "نعمة الكوثر." },
	{ name: "الكافرون", verses: 6, type: "مكية", summary: "البراءة من الشرك." },
	{ name: "النصر", verses: 3, type: "مدنية", summary: "وعد النصر." },
	{ name: "المسد", verses: 5, type: "مكية", summary: "مصير أبي لهب." },
	{ name: "الإخلاص", verses: 4, type: "مكية", summary: "توحيد الله." },
	{ name: "الفلق", verses: 5, type: "مكية", summary: "الاستعاذة." },
	{ name: "الناس", verses: 6, type: "مكية", summary: "الاستعاذة من الوسواس." }
];
const quranData = [
	{ surah: "Al-Fatiha", fromJuz: 1, toJuz: 1, fromHizb: 1, toHizb: 1 },
	{ surah: "Al-Baqarah", fromJuz: 1, toJuz: 3, fromHizb: 1, toHizb: 5 },
	{ surah: "Al-'Imran", fromJuz: 3, toJuz: 4, fromHizb: 5, toHizb: 8 },
	{ surah: "An-Nisa'", fromJuz: 4, toJuz: 6, fromHizb: 8, toHizb: 12 },
	{ surah: "Al-Ma'idah", fromJuz: 6, toJuz: 7, fromHizb: 12, toHizb: 14 },
	{ surah: "Al-An'am", fromJuz: 7, toJuz: 8, fromHizb: 14, toHizb: 15 },
	{ surah: "Al-A'raf", fromJuz: 8, toJuz: 9, fromHizb: 15, toHizb: 18 },
	{ surah: "Al-Anfal", fromJuz: 9, toJuz: 10, fromHizb: 18, toHizb: 19 },
	{ surah: "At-Tawbah", fromJuz: 10, toJuz: 11, fromHizb: 19, toHizb: 21 },
	{ surah: "Yunus", fromJuz: 11, toJuz: 12, fromHizb: 21, toHizb: 23 },
	{ surah: "Hud", fromJuz: 12, toJuz: 13, fromHizb: 23, toHizb: 25 },
	{ surah: "Yusuf", fromJuz: 13, toJuz: 13, fromHizb: 25, toHizb: 26 },
	{ surah: "Ar-Ra'd", fromJuz: 13, toJuz: 13, fromHizb: 26, toHizb: 26 },
	{ surah: "Ibrahim", fromJuz: 13, toJuz: 14, fromHizb: 26, toHizb: 27 },
	{ surah: "Al-Hijr", fromJuz: 14, toJuz: 14, fromHizb: 27, toHizb: 27 },
	{ surah: "An-Nahl", fromJuz: 14, toJuz: 15, fromHizb: 27, toHizb: 29 },
	{ surah: "Al-Isra'", fromJuz: 15, toJuz: 15, fromHizb: 29, toHizb: 30 },
	{ surah: "Al-Kahf", fromJuz: 15, toJuz: 16, fromHizb: 30, toHizb: 31 },
	{ surah: "Maryam", fromJuz: 16, toJuz: 16, fromHizb: 31, toHizb: 32 },
	{ surah: "Taha", fromJuz: 16, toJuz: 16, fromHizb: 32, toHizb: 33 },
	{ surah: "Al-Anbiya'", fromJuz: 17, toJuz: 17, fromHizb: 33, toHizb: 34 },
	{ surah: "Al-Hajj", fromJuz: 17, toJuz: 17, fromHizb: 34, toHizb: 35 },
	{ surah: "Al-Mu'minun", fromJuz: 18, toJuz: 18, fromHizb: 35, toHizb: 36 },
	{ surah: "An-Nur", fromJuz: 18, toJuz: 19, fromHizb: 36, toHizb: 37 },
	{ surah: "Al-Furqan", fromJuz: 19, toJuz: 19, fromHizb: 37, toHizb: 38 },
	{ surah: "Ash-Shu'ara'", fromJuz: 19, toJuz: 20, fromHizb: 38, toHizb: 40 },
	{ surah: "An-Naml", fromJuz: 20, toJuz: 20, fromHizb: 40, toHizb: 41 },
	{ surah: "Al-Qasas", fromJuz: 20, toJuz: 21, fromHizb: 41, toHizb: 42 },
	{ surah: "Al-Ankabut", fromJuz: 21, toJuz: 21, fromHizb: 42, toHizb: 43 },
	{ surah: "Ar-Rum", fromJuz: 21, toJuz: 21, fromHizb: 43, toHizb: 44 },
	{ surah: "Luqman", fromJuz: 21, toJuz: 21, fromHizb: 44, toHizb: 44 },
	{ surah: "As-Sajda", fromJuz: 21, toJuz: 21, fromHizb: 44, toHizb: 44 },
	{ surah: "Al-Ahzab", fromJuz: 22, toJuz: 22, fromHizb: 44, toHizb: 46 },
	{ surah: "Saba'", fromJuz: 22, toJuz: 22, fromHizb: 46, toHizb: 47 },
	{ surah: "Fatir", fromJuz: 22, toJuz: 23, fromHizb: 47, toHizb: 48 },
	{ surah: "Ya-Sin", fromJuz: 23, toJuz: 23, fromHizb: 48, toHizb: 49 },
	{ surah: "As-Saffat", fromJuz: 23, toJuz: 23, fromHizb: 49, toHizb: 50 },
	{ surah: "Sad", fromJuz: 23, toJuz: 24, fromHizb: 50, toHizb: 51 },
	{ surah: "Az-Zumar", fromJuz: 24, toJuz: 24, fromHizb: 51, toHizb: 53 },
	{ surah: "Ghafir", fromJuz: 24, toJuz: 25, fromHizb: 53, toHizb: 54 },
	{ surah: "Fussilat", fromJuz: 25, toJuz: 25, fromHizb: 54, toHizb: 55 },
	{ surah: "Ash-Shura", fromJuz: 25, toJuz: 26, fromHizb: 55, toHizb: 56 },
	{ surah: "Az-Zukhruf", fromJuz: 26, toJuz: 26, fromHizb: 56, toHizb: 57 },
	{ surah: "Ad-Dukhan", fromJuz: 26, toJuz: 26, fromHizb: 57, toHizb: 57 },
	{ surah: "Al-Jathiya", fromJuz: 26, toJuz: 26, fromHizb: 57, toHizb: 57 },
	{ surah: "Al-Ahqaf", fromJuz: 26, toJuz: 27, fromHizb: 57, toHizb: 58 },
	{ surah: "Muhammad", fromJuz: 27, toJuz: 27, fromHizb: 58, toHizb: 59 },
	{ surah: "Al-Fath", fromJuz: 27, toJuz: 27, fromHizb: 59, toHizb: 59 },
	{ surah: "Al-Hujurat", fromJuz: 26, toJuz: 27, fromHizb: 58, toHizb: 59 },
	{ surah: "Qaf", fromJuz: 26, toJuz: 27, fromHizb: 59, toHizb: 60 },
	{ surah: "Adh-Dhariyat", fromJuz: 27, toJuz: 27, fromHizb: 60, toHizb: 61 },
	{ surah: "At-Tur", fromJuz: 27, toJuz: 27, fromHizb: 61, toHizb: 62 },
	{ surah: "An-Najm", fromJuz: 27, toJuz: 27, fromHizb: 62, toHizb: 63 },
	{ surah: "Al-Qamar", fromJuz: 27, toJuz: 27, fromHizb: 63, toHizb: 64 },
	{ surah: "Ar-Rahman", fromJuz: 27, toJuz: 28, fromHizb: 64, toHizb: 65 },
	{ surah: "Al-Waqi'a", fromJuz: 28, toJuz: 28, fromHizb: 65, toHizb: 66 },
	{ surah: "Al-Hadid", fromJuz: 28, toJuz: 28, fromHizb: 66, toHizb: 67 },
	{ surah: "Al-Mujadila", fromJuz: 28, toJuz: 28, fromHizb: 67, toHizb: 68 },
	{ surah: "Al-Hashr", fromJuz: 28, toJuz: 28, fromHizb: 68, toHizb: 69 },
	{ surah: "Al-Mumtahina", fromJuz: 28, toJuz: 28, fromHizb: 69, toHizb: 69 },
	{ surah: "As-Saff", fromJuz: 28, toJuz: 28, fromHizb: 69, toHizb: 70 },
	{ surah: "Al-Jumu'a", fromJuz: 28, toJuz: 28, fromHizb: 70, toHizb: 70 },
	{ surah: "Al-Munafiqun", fromJuz: 28, toJuz: 28, fromHizb: 70, toHizb: 71 },
	{ surah: "At-Taghabun", fromJuz: 28, toJuz: 28, fromHizb: 71, toHizb: 71 },
	{ surah: "At-Talaq", fromJuz: 28, toJuz: 28, fromHizb: 71, toHizb: 72 },
	{ surah: "At-Tahrim", fromJuz: 28, toJuz: 28, fromHizb: 72, toHizb: 72 },
	{ surah: "Al-Mulk", fromJuz: 29, toJuz: 29, fromHizb: 73, toHizb: 73 },
	{ surah: "Al-Qalam", fromJuz: 29, toJuz: 29, fromHizb: 73, toHizb: 74 },
	{ surah: "Al-Haqqa", fromJuz: 29, toJuz: 29, fromHizb: 74, toHizb: 74 },
	{ surah: "Al-Ma'arij", fromJuz: 29, toJuz: 29, fromHizb: 74, toHizb: 75 },
	{ surah: "Nuh", fromJuz: 29, toJuz: 29, fromHizb: 75, toHizb: 75 },
	{ surah: "Al-Jinn", fromJuz: 29, toJuz: 29, fromHizb: 75, toHizb: 76 },
	{ surah: "Al-Muzzammil", fromJuz: 29, toJuz: 29, fromHizb: 76, toHizb: 76 },
	{ surah: "Al-Muddaththir", fromJuz: 29, toJuz: 29, fromHizb: 76, toHizb: 77 },
	{ surah: "Al-Qiyama", fromJuz: 29, toJuz: 29, fromHizb: 77, toHizb: 77 },
	{ surah: "Al-Insan", fromJuz: 29, toJuz: 29, fromHizb: 77, toHizb: 78 },
	{ surah: "Al-Mursalat", fromJuz: 29, toJuz: 29, fromHizb: 78, toHizb: 78 },
	{ surah: "An-Naba'", fromJuz: 30, toJuz: 30, fromHizb: 79, toHizb: 79 },
	{ surah: "An-Nazi'at", fromJuz: 30, toJuz: 30, fromHizb: 79, toHizb: 80 },
	{ surah: "Abasa", fromJuz: 30, toJuz: 30, fromHizb: 80, toHizb: 80 },
	{ surah: "At-Takwir", fromJuz: 30, toJuz: 30, fromHizb: 80, toHizb: 81 },
	{ surah: "Al-Infitar", fromJuz: 30, toJuz: 30, fromHizb: 81, toHizb: 81 },
	{ surah: "Al-Mutaffifin", fromJuz: 30, toJuz: 30, fromHizb: 81, toHizb: 82 },
	{ surah: "Al-Inshiqaq", fromJuz: 30, toJuz: 30, fromHizb: 82, toHizb: 82 },
	{ surah: "Al-Buruj", fromJuz: 30, toJuz: 30, fromHizb: 82, toHizb: 83 },
	{ surah: "At-Tariq", fromJuz: 30, toJuz: 30, fromHizb: 83, toHizb: 83 },
	{ surah: "Al-A'la", fromJuz: 30, toJuz: 30, fromHizb: 83, toHizb: 84 },
	{ surah: "Al-Ghashiya", fromJuz: 30, toJuz: 30, fromHizb: 84, toHizb: 84 },
	{ surah: "Al-Fajr", fromJuz: 30, toJuz: 30, fromHizb: 84, toHizb: 85 },
	{ surah: "Al-Balad", fromJuz: 30, toJuz: 30, fromHizb: 85, toHizb: 85 },
	{ surah: "Ash-Shams", fromJuz: 30, toJuz: 30, fromHizb: 85, toHizb: 86 },
	{ surah: "Al-Lail", fromJuz: 30, toJuz: 30, fromHizb: 86, toHizb: 86 },
	{ surah: "Ad-Duhaa", fromJuz: 30, toJuz: 30, fromHizb: 86, toHizb: 87 },
	{ surah: "Ash-Sharh", fromJuz: 30, toJuz: 30, fromHizb: 87, toHizb: 87 },
	{ surah: "At-Tin", fromJuz: 30, toJuz: 30, fromHizb: 87, toHizb: 87 },
	{ surah: "Al-'Alaq", fromJuz: 30, toJuz: 30, fromHizb: 87, toHizb: 88 },
	{ surah: "Al-Qadr", fromJuz: 30, toJuz: 30, fromHizb: 88, toHizb: 88 },
	{ surah: "Al-Bayyina", fromJuz: 30, toJuz: 30, fromHizb: 88, toHizb: 89 },
	{ surah: "Az-Zalzala", fromJuz: 30, toJuz: 30, fromHizb: 89, toHizb: 89 },
	{ surah: "Al-Adiyat", fromJuz: 30, toJuz: 30, fromHizb: 89, toHizb: 90 },
	{ surah: "Al-Qari'a", fromJuz: 30, toJuz: 30, fromHizb: 90, toHizb: 90 },
	{ surah: "At-Takathur", fromJuz: 30, toJuz: 30, fromHizb: 90, toHizb: 91 },
	{ surah: "Al-Asr", fromJuz: 30, toJuz: 30, fromHizb: 91, toHizb: 91 },
	{ surah: "Al-Humaza", fromJuz: 30, toJuz: 30, fromHizb: 91, toHizb: 91 },
	{ surah: "Al-Fil", fromJuz: 30, toJuz: 30, fromHizb: 91, toHizb: 92 },
	{ surah: "Quraysh", fromJuz: 30, toJuz: 30, fromHizb: 92, toHizb: 92 },
	{ surah: "Al-Ma'un", fromJuz: 30, toJuz: 30, fromHizb: 92, toHizb: 92 },
	{ surah: "Al-Kawthar", fromJuz: 30, toJuz: 30, fromHizb: 92, toHizb: 93 },
	{ surah: "Al-Kafirun", fromJuz: 30, toJuz: 30, fromHizb: 93, toHizb: 93 },
	{ surah: "An-Nasr", fromJuz: 30, toJuz: 30, fromHizb: 93, toHizb: 94 },
	{ surah: "Al-Masad", fromJuz: 30, toJuz: 30, fromHizb: 94, toHizb: 94 },
	{ surah: "Al-Ikhlas", fromJuz: 30, toJuz: 30, fromHizb: 94, toHizb: 94 },
	{ surah: "Al-Falaq", fromJuz: 30, toJuz: 30, fromHizb: 94, toHizb: 94 },
	{ surah: "An-Nas", fromJuz: 30, toJuz: 30, fromHizb: 94, toHizb: 94 }
];
const namesOfAllah = [
	{ name: "ٱلرَّحْمَٰن", meaning: "الَّذِي يَرْحَمُ جَمِيعَ مَخْلُوقَاتِهِ بِرَحْمَةٍ وَاسِعَةٍ، لَا تَقْتَصِرُ عَلَى الْمُؤْمِنِينَ فَقَطْ" },
	{ name: "ٱلرَّحِيم", meaning: "الَّذِي يَرْحَمُ الْمُؤْمِنِينَ بِرَحْمَةٍ خَاصَّةٍ، وَيَغْفِرُ لَهُمْ" },
	{ name: "ٱلْمَلِك", meaning: "ٱلْمَالِكُ وَٱلْمُتَصَرِّفُ فِي مُلْكِهِ، لَيْسَ لِأَحَدٍ غَيْرُهُ" },
	{ name: "ٱلْقُدُّوس", meaning: "ٱلطَّاهِرُ ٱلْمُنَزَّهُ عَنْ كُلِّ نَقْصٍ أَوْ عَيْبٍ" },
	{ name: "ٱلسَّلَام", meaning: "ٱلَّذِي سَلِمَ مِنْ كُلِّ عَيْبٍ، وَهُوَ مَصْدَرُ ٱلسَّلَامِ وَٱلأَمَانِ" },
	{ name: "ٱلْمُؤْمِن", meaning: "ٱلَّذِي يُصَدِّقُ وَيُطْمَئِنُّ قَلْبَ عِبَادِهِ ٱلْمُؤْمِنِينَ" },
	{ name: "ٱلْمُهَيْمِن", meaning: "ٱلَّذِي يُرَاقِبُ كُلَّ شَيْءٍ، وَهُوَ ٱلْحَافِظُ لِخَلْقِهِ" },
	{ name: "ٱلْعَزِيز", meaning: "ٱلَّذِي لَا يُقْهَرُ وَلَا يُغْلَبُ" },
	{ name: "ٱلْجَبَّار", meaning: "ٱلَّذِي يَقْهَرُ كُلَّ شَيْءٍ، وَيَجْبُرُ عِبَادَهُ" },
	{ name: "ٱلْمُتَكَبِّر", meaning: "ٱلَّذِي يَتَعَالَى عَنْ جَمِيعِ ٱلْمَخْلُوقَاتِ، وَلَا يُنَازِعُهُ أَحَدٌ فِي عَظَمَتِهِ" },
	{ name: "ٱلْخَالِق", meaning: "ٱلَّذِي يَخْلُقُ كُلَّ شَيْءٍ مِنَ ٱلْعَدَمِ" },
	{ name: "ٱلْبَارِئ", meaning: "ٱلَّذِي يَخْلُقُ ٱلْأَشْيَاءَ كَمَا يُرِيدُ، وَيُبْدِعُ خَلْقَهُ" },
	{ name: "ٱلْمُصَوِّر", meaning: "ٱلَّذِي يَخْلُقُ ٱلْمَخْلُوقَاتِ بِأَشْكَالٍ مُخْتَلِفَةٍ، وَيُصَوِّرُهَا بِمَا يَشَاءُ" },
	{ name: "ٱلْغَفَّار", meaning: "ٱلَّذِي يَغْفِرُ ٱلذُّنُوبَ وَيَرْحَمُ ٱلْخَطَايَا" },
	{ name: "ٱلْقَهَّار", meaning: "ٱلَّذِي يَقْهَرُ جَمِيعَ ٱلْخَلَائِقِ وَلَا يُعْجِزُهُ شَيْءٌ" },
	{ name: "ٱلْوَهَّاب", meaning: "ٱلَّذِي يَهَبُ ٱلْعَطَايَا وَٱلْبَرَكَاتِ بِلَا حِسَابٍ" },
	{ name: "ٱلرَّزَّاق", meaning: "ٱلَّذِي يَرْزُقُ جَمِيعَ مَخْلُوقَاتِهِ مِنْ دُونِ ٱنْقِطَاعٍ" },
	{ name: "ٱلْفَتَّاح", meaning: "ٱلَّذِي يَفْتَحُ ٱلْأَبْوَابَ ٱلْمُغْلَقَةَ وَيُوَفِّرُ ٱلْفُرَصَ" },
	{ name: "ٱلْعَلِيم", meaning: "ٱلَّذِي يَعْلَمُ كُلَّ شَيْءٍ، لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي ٱلْأَرْضِ أَوِ ٱلسَّمَاءِ" },
	{ name: "ٱلْقَابِض", meaning: "ٱلَّذِي يَقْبِضُ ٱلْأَرْزَاقَ وَٱلْأَرْوَاحَ عِنْدَمَا يَشَاءُ" },
	{ name: "ٱلْبَاسِط", meaning: "ٱلَّذِي يُبْسِطُ ٱلرِّزْقَ وَيُوَسِّعُ عَلَى عِبَادِهِ" },
	{ name: "ٱلْخَافِض", meaning: "ٱلَّذِي يُخَفِّضُ مَنْ يَشَاءُ مِنْ خَلْقِهِ" },
	{ name: "ٱلرَّافِع", meaning: "ٱلَّذِي يَرْفَعُ مَنْ يَشَاءُ وَيُعْلِي شَأْنَهُ" },
	{ name: "ٱلْمُعِز", meaning: "ٱلَّذِي يُعِزُّ مَنْ يَشَاءُ وَيَمْنَحُهُ ٱلْمَكَانَةَ ٱلْعَالِيَةَ" },
	{ name: "ٱلْمُذِل", meaning: "ٱلَّذِي يُذِلُّ مَنْ يَشَاءُ وَيُخَفِّضُ مَكَانَتَهُ" },
	{ name: "ٱلسَّمِيع", meaning: "ٱلَّذِي يَسْمَعُ كُلَّ شَيْءٍ، لَا يَخْفَى عَلَيْهِ كَلَامٌ وَلَا صَوْتٌ" },
	{ name: "ٱلْبَصِير", meaning: "ٱلَّذِي يَرَى كُلَّ شَيْءٍ، لَا يَعْزُبُ عَنْهُ شَيْءٌ فِي ٱلْأَرْضِ أَوِ ٱلسَّمَاءِ" },
	{ name: "ٱلْحَكَم", meaning: "ٱلَّذِي يَحْكُمُ بَيْنَ عِبَادِهِ بِٱلْعَدْلِ وَيُعْطِي كُلَّ ذِي حَقٍّ حَقَّهُ" },
	{ name: "ٱلْعَدْل", meaning: "ٱلَّذِي لَا يَجُورُ أَبَدًا وَيُعْطِي كُلَّ شَيْءٍ حَقَّهُ" },
	{ name: "ٱللَّطِيف", meaning: "ٱلَّذِي يَلْطُفُ بِعِبَادِهِ بِرَحْمَةٍ وَرِقَّةٍ، وَيَعْطِفُ عَلَيْهِمْ" },
	{ name: "ٱلْخَبِير", meaning: "ٱلَّذِي يَعْلَمُ كُلَّ شَيْءٍ بِدِقَّةٍ، وَيَعْرِفُ مَا فِي ٱلْقُلُوبِ وَٱلْأَسْرَارِ" },
	{ name: "ٱلْحَلِيم", meaning: "ٱلَّذِي يَتَأَنَّى فِي مُعَاقَبَةِ عِبَادِهِ وَلَا يُعَجِّلُ بِهِمْ" },
	{ name: "ٱلْعَظِيم", meaning: "ٱلَّذِي عَظَمَتُهُ لَا تُحَدُّ وَلَا تُدْرَكُ" },
	{ name: "ٱلْغَفُور", meaning: "ٱلَّذِي يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا وَلَا يُيْئَسُ عِبَادُهُ مِنْ رَحْمَتِهِ" },
	{ name: "ٱلشَّكُور", meaning: "ٱلَّذِي يَشْكُرُ عِبَادَهُ عَلَى أَعْمَالِهِمُ ٱلصَّالِحَةِ وَيُثِيبُهُمْ عَلَيْهَا" },
	{ name: "ٱلْعَلِيّ", meaning: "ٱلَّذِي هُوَ أَعْلَى مِنْ كُلِّ شَيْءٍ، وَلَا يُعْلَى عَلَيْهِ" },
	{ name: "ٱلْكَبِير", meaning: "ٱلَّذِي هُوَ أَعْظَمُ مِنْ كُلِّ شَيْءٍ فِي ٱلْوُجُودِ" },
	{ name: "ٱلْحَفِيظ", meaning: "ٱلَّذِي يَحْفَظُ عِبَادَهُ مِنَ ٱلشُّرُورِ وَٱلْأَذَى" },
	{ name: "ٱلْمُقِيت", meaning: "ٱلَّذِي يُقِيتُ ٱلْأَرْوَاحَ وَٱلْأَرْزَاقَ" },
	{ name: "ٱلْحسِيب", meaning: "ٱلَّذِي يَكْفِي عِبَادَهُ وَيُحَاسِبُهُمْ" },
	{ name: "ٱلْجَلِيل", meaning: "ٱلَّذِي لَهُ ٱلْعَظَمَةُ وَٱلْجَلَالُ فِي صِفَاتِهِ وَأَفْعَالِهِ" },
	{ name: "ٱلْكَرِيم", meaning: "ٱلَّذِي يُكْرِمُ عِبَادَهُ بِنِعَمِهِ، وَيَتَجَاوَزُ عَنْ زَلَّاتِهِمْ" },
	{ name: "ٱلرَّقِيب", meaning: "ٱلَّذِي يَرْقُبُ عِبَادَهُ وَيَعْلَمُ أَحْوَالَهُمْ" },
	{ name: "ٱلْمُجِيب", meaning: "ٱلَّذِي يُجِيبُ دُعَاءَ عِبَادِهِ وَيُلَبِّي حَاجَاتِهِمْ" },
	{ name: "ٱلْوَاسِع", meaning: "ٱلَّذِي وَسِعَ عِلْمُهُ وَرَحْمَتُهُ كُلَّ شَيْءٍ" },
	{ name: "ٱلْحَكِيم", meaning: "ٱلَّذِي يَضَعُ ٱلْأُمُورَ فِي مَوَاضِعِهَا بِحِكْمَةٍ" },
	{ name: "ٱلْوَدُود", meaning: "ٱلَّذِي يُحِبُّ عِبَادَهُ وَيُحِبُّونَهُ" },
	{ name: "ٱلْمَجِيد", meaning: "ٱلَّذِي لَهُ ٱلْمَجْدُ وَٱلْعَظَمَةُ فِي ذَاتِهِ وَأَفْعَالِهِ" },
	{ name: "ٱلْبَاعِث", meaning: "ٱلَّذِي يَبْعَثُ ٱلْخَلَائِقَ بَعْدَ ٱلْمَوْتِ" },
	{ name: "ٱلشَّهِيد", meaning: "ٱلَّذِي لَا يَغِيبُ عَنْهُ شَيْءٌ وَهُوَ شَاهِدٌ عَلَى كُلِّ شَيْءٍ" },
	{ name: "ٱلْحَقّ", meaning: "ٱلَّذِي حَقِيقَتُهُ وَعِبَادَتُهُ وَوَعْدُهُ حَقٌّ" },
	{ name: "ٱلْوَكِيل", meaning: "ٱلَّذِي يَتَوَكَّلُ عَلَيْهِ ٱلْعِبَادُ فِي تَدْبِيرِ شُؤُونِهِمْ" },
	{ name: "ٱلْقَوِيّ", meaning: "ٱلَّذِي لَا يُعْجِزُهُ شَيْءٌ فِي ٱلسَّمَاوَاتِ وَٱلْأَرْضِ" },
	{ name: "ٱلْمَتِين", meaning: "ٱلَّذِي لَا يَتَزَعْزَعُ فِي قُوَّتِهِ، وَلَا يَضْعُفُ" },
	{ name: "ٱلْوَلِيّ", meaning: "ٱلَّذِي يَتَوَلَّى أُمُورَ عِبَادِهِ بِرِعَايَةٍ وَحِمَايَةٍ" },
	{ name: "ٱلْحَمِيد", meaning: "ٱلَّذِي يَسْتَحِقُّ ٱلْحَمْدَ مِنْ جَمِيعِ خَلْقِهِ" },
	{ name: "ٱلْمُحْصِي", meaning: "ٱلَّذِي يُحْصِي كُلَّ شَيْءٍ فِي ٱلْكَوْنِ وَيَعْلَمُهُ بِدِقَّةٍ" },
	{ name: "ٱلْمُبْدِئ", meaning: "ٱلَّذِي يَبْدَأُ خَلْقَهُ مِنَ ٱلْعَدَمِ" },
	{ name: "ٱلْمُعِيد", meaning: "ٱلَّذِي يُعِيدُ ٱلْخَلْقَ بَعْدَ مَوْتِهِمْ" },
	{ name: "ٱلْمُحْيِي", meaning: "ٱلَّذِي يُحْيِي ٱلْأَحْيَاءَ وَيَبْعَثُهُمْ" },
	{ name: "ٱلْمُمِيت", meaning: "ٱلَّذِي يُمِيتُ ٱلْخَلَائِقَ عِنْدَ ٱنْتِهَاءِ أَجَلِهِمْ" },
	{ name: "ٱلْحَيّ", meaning: "ٱلَّذِي لَا يَمُوتُ، وَهُوَ دَائِمُ ٱلْبَقَاءِ" },
	{ name: "ٱلْقَيُّوم", meaning: "ٱلَّذِي يَقُومُ عَلَى حِفْظِ وَإِدَارَةِ ٱلْكَوْنِ، لَا يَغْفُلُ عَنْ شَيْءٍ" },
	{ name: "ٱلْوَاجِد", meaning: "ٱلَّذِي يَجِدُ كُلَّ شَيْءٍ، لَا يُعْجِزُهُ شَيْءٌ" },
	{ name: "ٱلْمَاجِد", meaning: "ٱلَّذِي لَهُ ٱلْمَجْدُ وَٱلْعَظَمَةُ فِي ذَاتِهِ وَصِفَاتِهِ" },
	{ name: "ٱلْوَاحِد", meaning: "ٱلَّذِي لَا شَرِيكَ لَهُ فِي مُلْكِهِ وَأُلُوهِيَّتِهِ" },
	{ name: "ٱلْأَحَد", meaning: "ٱلَّذِي لَا مَثِيلَ لَهُ وَلَا شَبِيهَ" },
	{ name: "ٱلصَّمَد", meaning: "ٱلَّذِي يُصْمَدُ إِلَيْهِ فِي كُلِّ حَاجَةٍ وَلَا يَرُدُّ أَحَدًا" },
	{ name: "ٱلْقَادِر", meaning: "ٱلَّذِي لَهُ ٱلْقُدْرَةُ ٱلْمُطْلَقَةُ عَلَى كُلِّ شَيْءٍ" },
	{ name: "ٱلْمُقْتَدِر", meaning: "ٱلَّذِي يَقْدِرُ عَلَى كُلِّ شَيْءٍ بِلَا حُدُودٍ" },
	{ name: "ٱلْمُقَدِّم", meaning: "ٱلَّذِي يُقَدِّمُ مَا يَشَاءُ وَيَضَعُهُ فِي مَكَانِهِ" },
	{ name: "ٱلْمُؤَخِّر", meaning: "ٱلَّذِي يُؤَخِّرُ مَا يَشَاءُ بِحِكْمَتِهِ" },
	{ name: "ٱلْأَوَّل", meaning: "ٱلَّذِي لَيْسَ قَبْلَهُ شَيْءٌ" },
	{ name: "ٱلْآخِر", meaning: "ٱلَّذِي لَيْسَ بَعْدَهُ شَيْءٌ" },
	{ name: "ٱلظَّاهِر", meaning: "ٱلَّذِي ظَهَرَ فَوْقَ كُلِّ شَيْءٍ" },
	{ name: "ٱلْبَاطِن", meaning: "ٱلَّذِي لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي بَاطِنِ ٱلْأُمُورِ" },
	{ name: "ٱلْوَالِي", meaning: "ٱلَّذِي يَتَوَلَّى أُمُورَ ٱلْخَلَائِقِ بِتَدْبِيرٍ وَحُكْمٍ" },
	{ name: "ٱلْمُتَعَالِي", meaning: "ٱلَّذِي تَعَالَى عَنْ كُلِّ عَيْبٍ وَنَقْصٍ" },
	{ name: "ٱلْبَرّ", meaning: "ٱلَّذِي يَحْسُنُ إِلَى عِبَادِهِ بِرَحْمَةٍ وَإِحْسَانٍ" },
	{ name: "ٱلتَّوَّاب", meaning: "ٱلَّذِي يَقْبَلُ تَوْبَةَ عِبَادِهِ وَيُرَجِّعُهُمْ إِلَى طَاعَتِهِ" },
	{ name: "ٱلْمُنْتَقِم", meaning: "ٱلَّذِي يَنْتَقِمُ مِنَ ٱلظَّالِمِينَ بِعَدْلِهِ" },
	{ name: "ٱلْعَفُوّ", meaning: "ٱلَّذِي يَعْفُو عَنْ ٱلذُّنُوبِ وَيَتَجَاوَزُ عَنِ ٱلْمُسِيئِينَ" },
	{ name: "ٱلرَّءُوف", meaning: "ٱلَّذِي يَرْأَفُ بِعِبَادِهِ وَيَرْحَمُهُمْ" },
	{ name: "ٱلْمَالِكُ ٱلْمُلْك", meaning: "ٱلَّذِي يَمْلِكُ ٱلْمُلْكَ كُلَّهُ وَلَا يُنَازِعُهُ فِيهِ أَحَدٌ" },
	{ name: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", meaning: "ٱلَّذِي لَهُ ٱلْعَظَمَةُ وَٱلْكَرَامَةُ فِي ذَاتِهِ" },
	{ name: "ٱلْمُقْسِط", meaning: "ٱلَّذِي يَعْدِلُ فِي أَحْكَامِهِ بَيْنَ خَلْقِهِ" },
	{ name: "ٱلْجَامِع", meaning: "ٱلَّذِي يَجْمَعُ ٱلْخَلَائِقَ يَوْمَ ٱلْقِيَامَةِ لِلْحِسَابِ" },
	{ name: "ٱلْغَنِيّ", meaning: "ٱلَّذِي لَا يَحْتَاجُ إِلَى شَيْءٍ وَكُلُّ شَيْءٍ يَحْتَاجُ إِلَيْهِ" },
	{ name: "ٱلْمُغْنِي", meaning: "ٱلَّذِي يُغْنِي عِبَادَهُ وَيَكْفِيهِمْ بِفَضْلِهِ" },
	{ name: "ٱلْمَانِع", meaning: "ٱلَّذِي يَمْنَعُ مَا يَشَاءُ مِنَ ٱلْخَيْرِ وَٱلرِّزْقِ" },
	{ name: "ٱلضَّارّ", meaning: "ٱلَّذِي يَضُرُّ مَنْ يَشَاءُ بِإِذْنِهِ" },
	{ name: "ٱلنَّافِع", meaning: "ٱلَّذِي يَنْفَعُ عِبَادَهُ بِكُلِّ مَا هُوَ خَيْرٌ" },
	{ name: "ٱلنُّور", meaning: "ٱلَّذِي هُوَ نُورُ ٱلسَّمَاوَاتِ وَٱلْأَرْضِ، يَهْدِي بِهِ عِبَادَهُ" },
	{ name: "ٱلْهَادِي", meaning: "ٱلَّذِي يَهْدِي ٱلنَّاسَ إِلَى ٱلطَّرِيقِ ٱلصَّحِيحِ" },
	{ name: "ٱلْبَدِيع", meaning: "ٱلَّذِي يُبْدِعُ خَلْقَهُ بِأَجْمَلِ صُورَةٍ" },
	{ name: "ٱلْبَاقِي", meaning: "ٱلَّذِي لَا يَفْنَى وَلَا يَزُولُ" },
	{ name: "ٱلْوَارِث", meaning: "ٱلَّذِي يَرِثُ كُلَّ شَيْءٍ فِي هَذَا ٱلْكَوْنِ" },
	{ name: "ٱلرَّشِيد", meaning: "ٱلَّذِي يَهْدِي عِبَادَهُ إِلَى ٱلطَّرِيقِ ٱلْمُسْتَقِيمِ" },
	{ name: "ٱلصَّبُور", meaning: "ٱلَّذِي يَتَحَلَّى بِٱلصَّبْرِ فِي ٱلتَّعَامُلِ مَعَ عِبَادِهِ" }
];