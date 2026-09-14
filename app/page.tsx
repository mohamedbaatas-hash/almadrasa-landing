import { 
  CheckCircle2, 
  MessageSquare, 
  QrCode, 
  Shield, 
  Users, 
  WifiOff, 
  LayoutDashboard, 
  Calendar, 
  Receipt, 
  Award, 
  CreditCard, 
  Printer, 
  BookOpen, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  School, 
  Cpu, 
  Layers, 
  Zap, 
  Building2, 
  UserCheck, 
  Wallet, 
  Send, 
  Lock, 
  Server, 
  Check, 
  X,
  HelpCircle, 
  Phone, 
  ArrowLeft, 
  FolderArchive, 
  Percent 
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden p-4 md:p-8">
      
      {/* 1. Top Navbar */}
      <nav className="w-full max-w-7xl clay flex justify-between items-center px-6 py-4 mb-8 sticky top-4 z-50 backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center shadow-inner">
            <LayoutDashboard size={26} />
          </div>
          <div>
            <span className="text-xl font-black text-[#1e1640] block leading-tight">المدرسة</span>
            <span className="text-xs font-bold text-primary-600 tracking-wider">AL MADRASA ERP</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 font-bold text-sm text-[#6b5f8a]">
          <a href="#features" className="hover:text-primary-600 transition-colors">المميزات</a>
          <a href="#reception" className="hover:text-primary-600 transition-colors">الاستقبال الذكي</a>
          <a href="#caisse" className="hover:text-primary-600 transition-colors">الصندوق POS</a>
          <a href="#academics" className="hover:text-primary-600 transition-colors">الأكاديميا والقرآن</a>
          <a href="#payroll" className="hover:text-primary-600 transition-colors">رواتب الأساتذة</a>
          <a href="#pricing" className="hover:text-primary-600 transition-colors">الأسعار</a>
          <a href="#faq" className="hover:text-primary-600 transition-colors">الأسئلة الشائعة</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-clay-primary px-6 py-2.5 text-sm flex items-center gap-2">
            <Phone size={16} />
            <span>طلب تجربة مجانية</span>
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="w-full max-w-7xl flex flex-col items-center text-center gap-6 py-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full clay bg-white text-primary-600 font-bold text-sm shadow-sm">
          <Award size={20} className="text-amber-500" />
          <span>المنظومة الأولى المصممة خصيصاً لمدارس الدعم والمراكز القرآنية في الجزائر</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1e1640] leading-tight max-w-5xl">
          أدِر مركزك التعليمي بكفاءة متناهية، <br />
          <span className="text-primary-600">بدون إنترنت، وبلا أي فوضى ورقية</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6b5f8a] max-w-3xl font-medium leading-relaxed">
          نظام مكتبي متكامل (Desktop Offline + LAN) يجمع بين سرعة تسجيل الحضور بالبطاقات الذكية، والتحصيل المالي الدقيق بنقاط البيع، والطباعة الفورية للوصولات الحرارية، مع إشعارات واتساب وتيليجرام المباشرة لأولياء الأمور.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <a href="#pricing" className="btn-clay-primary px-8 py-4 text-lg flex items-center justify-center gap-3">
            <Zap size={20} />
            <span>احصل على نسختك الدائمة</span>
          </a>
          <a href="#features" className="btn-clay-secondary px-8 py-4 text-lg flex items-center justify-center gap-2">
            <span>اكتشف تفاصيل المنظومة</span>
            <ArrowLeft size={18} />
          </a>
        </div>

        {/* Algerian Context Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-8">
          <div className="clay px-4 py-3 flex items-center justify-center gap-2.5 text-xs md:text-sm font-black text-[#1e1640]">
            <WifiOff size={18} className="text-purple-600" />
            <span>يعمل 100% بدون إنترنت</span>
          </div>
          <div className="clay px-4 py-3 flex items-center justify-center gap-2.5 text-xs md:text-sm font-black text-[#1e1640]">
            <Server size={18} className="text-blue-600" />
            <span>ربط شبكي محلي (خادم + استقبال)</span>
          </div>
          <div className="clay px-4 py-3 flex items-center justify-center gap-2.5 text-xs md:text-sm font-black text-[#1e1640]">
            <Printer size={18} className="text-emerald-600" />
            <span>وصولات حرارية 80mm و 58mm</span>
          </div>
          <div className="clay px-4 py-3 flex items-center justify-center gap-2.5 text-xs md:text-sm font-black text-[#1e1640]">
            <Building2 size={18} className="text-amber-600" />
            <span>مهيأ لـ 58 ولاية والمناهج الوطنية</span>
          </div>
        </div>
      </section>

      {/* 3. Four Core Pillars KPI Cards */}
      <section id="features" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div className="clay-purple p-6 flex flex-col justify-between h-44 text-[#3b0764]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs uppercase tracking-wider bg-white/40 px-2.5 py-1 rounded-lg">المالية والصندوق</span>
            <Receipt size={26} className="text-purple-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">صندوق POS دقيق</h3>
            <p className="text-sm font-medium opacity-90">تسيير الورديات، جرد الدرج، وكشف العجز والفائض آلياً.</p>
          </div>
        </div>

        <div className="clay-yellow p-6 flex flex-col justify-between h-44 text-[#78350f]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs uppercase tracking-wider bg-white/40 px-2.5 py-1 rounded-lg">الاستقبال السريع</span>
            <QrCode size={26} className="text-amber-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">بطاقات RFID والباركود</h3>
            <p className="text-sm font-medium opacity-90">تسجيل حضور فوري بأجزاء من الثانية وكشف ديون الطلاب.</p>
          </div>
        </div>

        <div className="clay-green p-6 flex flex-col justify-between h-44 text-[#064e3b]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs uppercase tracking-wider bg-white/40 px-2.5 py-1 rounded-lg">التواصل الفوري</span>
            <MessageSquare size={26} className="text-emerald-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">واتساب وتيليجرام</h3>
            <p className="text-sm font-medium opacity-90">إشعارات الدخول، الغياب، الوصولات وتذكير الدفع تلقائياً.</p>
          </div>
        </div>

        <div className="clay-blue p-6 flex flex-col justify-between h-44 text-[#1e3a8a]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs uppercase tracking-wider bg-white/40 px-2.5 py-1 rounded-lg">الأكاديميا ورواتب الأساتذة</span>
            <Calendar size={26} className="text-blue-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">حساب نسب الأساتذة</h3>
            <p className="text-sm font-medium opacity-90">اقتسام المداخيل، تسوية CCP/RIP، ومولد الجداول الذكي.</p>
          </div>
        </div>
      </section>

      {/* 4. Deep-Dive Section: Smart Reception & Pointage */}
      <section id="reception" className="w-full max-w-7xl mt-24">
        <div className="clay p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-black border border-amber-200">
                <Sparkles size={16} />
                <span>مكتب الاستقبال الميداني (Screen 1)</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1640] leading-tight">
                سكانر الحضور اللحظي: <br />
                <span className="text-primary-600">وداعاً لطوابير الصباح وتدافع التلاميذ</span>
              </h2>
              <p className="text-base md:text-lg text-[#6b5f8a] font-medium leading-relaxed">
                واجهة مخصصة لموظف الاستقبال تعمل بالتزامن مع أجهزة الباركود وقارئات بطاقات RFID / NFC عبر USB. بنقرة أو تمريرة واحدة، يسجل التلميذ حضوره، ويتحقق النظام فوراً من وضعيته.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-2">⚡</div>
                  <h4 className="font-black text-[#1e1640] mb-1">بوانتاج فوري في أجزاء من الثانية</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">عرض صورة التلميذ وحالته المالية (خالص أو مدين) بمجرد تمرير البطاقة.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-2">🚨</div>
                  <h4 className="font-black text-[#1e1640] mb-1">كاشف التطفل والأفواج الخاطئة</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">تنبيه صوتي ومرئي إذا مرر البطاقة تلميذ غير مبرمج في حصة تجري الآن.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-2">👥</div>
                  <h4 className="font-black text-[#1e1640] mb-1">رادار الحركة (Inside Now)</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">إحصاء دقيق للطلاب المتواجدين داخل المبنى حالياً ونسب الغياب اللحظية.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">🚪</div>
                  <h4 className="font-black text-[#1e1640] mb-1">إشغال القاعات وحضور الأساتذة</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">متابعة القاعات المشغولة وجدول حضور وتأخر الأساتذة المبرمجين اليوم.</p>
                </div>
              </div>
            </div>

            {/* Visual Simulation of Reception Scan */}
            <div className="flex-1 w-full max-w-md">
              <div className="clay-purple p-6 text-[#1e1640]">
                <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      تم تسجيل الدخول بنجاح
                    </span>
                    <span className="text-xs font-bold text-slate-400">08:02:14</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-black">
                      أي
                    </div>
                    <div>
                      <h4 className="font-black text-base text-[#1e1640]">أيمن بلقاسم</h4>
                      <p className="text-xs font-bold text-slate-500">3 ثانوي - شعبة علوم تجريبية</p>
                      <span className="inline-block mt-1 text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                        بطاقة RFID: #984321
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl space-y-1.5 text-xs">
                    <div className="flex justify-between font-medium">
                      <span className="text-slate-500">الحصة الحالية:</span>
                      <span className="font-bold text-[#1e1640]">علوم طبيعية (الأستاذ بن عيسى)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-slate-500">القاعة:</span>
                      <span className="font-bold text-[#1e1640]">قاعة ابن رشد (الطابق 1)</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-slate-500">الوضعية المالية:</span>
                      <span className="font-black text-emerald-600">خالص (0.00 د.ج ديون) ✓</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-bold">
                    <span>⚡ تم إشعار الولي عبر واتساب</span>
                    <span>✓ تم الإرسال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Section: Caisse POS & Thermal Receipts */}
      <section id="caisse" className="w-full max-w-7xl mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Caisse Left Card */}
          <div className="lg:col-span-7 clay p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-5 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-black border border-emerald-200">
                <Receipt size={16} />
                <span>الصندوق اليومي ونقاط البيع (Caisse POS)</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1640]">
                انضباط مالي صارم <br />
                <span className="text-primary-600">وجرد تلقائي يمنع أي عجز أو اختلاس</span>
              </h2>
              <p className="text-base md:text-lg text-[#6b5f8a] font-medium leading-relaxed">
                تم بناء نظام الصندوق ليواكب حركة القبض السريعة في أوقات الذروة. كل دينار يدخل أو يخرج موثق في وردية محكمة باسم أمين الصندوق.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">تسيير الورديات الصباحية والمسائية (Shifts)</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">تسجيل الرصيد الافتتاحي للدرج (Fond de Caisse) قبل بدء المعاملات.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">جرد الدرج الفعلي وحساب الفارق آلياً</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">عند إغلاق الوردية، يطابق النظام المبالغ المحسوبة مع النقد الفعلي ويكشف العجز أو الفائض فوراً.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">تسجيل المصاريف السريعة اليومية (Dépenses)</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">إخراج مبالغ صغيرة لشراء أوراق الطباعة، الصيانة، أو مستلزمات النظافة مع توثيق السند.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">نافذة التسديد السريع (Fast Payment ⚡)</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">سداد فوري للأقساط أو رسوم التسجيل والكتب مع حاسبة ذكية لمبالغ الترجيع (Rendu Monnaie).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thermal Receipt Right Card */}
          <div className="lg:col-span-5 clay p-8 flex flex-col justify-between bg-gradient-to-br from-white to-purple-50/50">
            <div className="space-y-4 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-black">
                <Printer size={14} />
                <span>الطباعة الحرارية الفورية</span>
              </div>
              <h3 className="text-2xl font-black text-[#1e1640]">وصولات حرارية وبطاقات مدرسية</h3>
              <p className="text-sm text-[#6b5f8a] font-medium leading-relaxed">
                متوافق مباشرة مع جميع طابعات الفواتير الحرارية في السوق الجزائري (مقاس 80mm و 58mm كـ Xprinter وغيرها) دون الحاجة لإعدادات معقدة.
              </p>

              {/* Thermal Receipt Simulation */}
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-4 text-center font-mono text-xs shadow-inner my-2">
                <div className="border-b border-slate-200 pb-2 mb-2">
                  <p className="font-black text-sm text-[#1e1640]">مؤسسة النجاح التعليمية</p>
                  <p className="text-[10px] text-slate-500">البليدة - هاتف: 0550.00.00.00</p>
                  <p className="text-[10px] font-bold text-slate-700 mt-1">وصل قبض مالي: REC-2026-0412</p>
                </div>
                <div className="text-right space-y-1 text-[11px] mb-2">
                  <div className="flex justify-between">
                    <span>التلميذ:</span>
                    <span className="font-bold">ياسين شريفي</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الطور:</span>
                    <span>2 ثانوي رياضيات</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الفوج:</span>
                    <span>رياضيات (أ. بلحاج)</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1 font-bold text-slate-900">
                    <span>المبلغ المسدد:</span>
                    <span>2,500 د.ج</span>
                  </div>
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>طريقة الدفع:</span>
                    <span>نقداً (CASH)</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>كود التحقق: QR VALID</span>
                  <span>الطباعة: 80mm</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ede9fe] flex items-center justify-between text-xs font-bold text-primary-700">
              <span>🪪 يدعم استخراج بطاقة الطالب بالباركود فوراً</span>
              <CheckCircle2 size={16} />
            </div>
          </div>

        </div>
      </section>

      {/* 6. Academic & Quran Deep-Dive */}
      <section id="academics" className="w-full max-w-7xl mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-black mb-3">
            <School size={16} />
            <span>الهيكلة البيداغوجية المتكاملة</span>
          </div>
          <h2 className="text-3xl md:5xl font-black text-[#1e1640]">
            مدارس الدعم والمناهج الرسمية، <br />
            وحلقات التحفيظ القرآني 360°
          </h2>
          <p className="text-base md:text-lg text-[#6b5f8a] font-medium mt-3">
            سواء كان مركزك مخصصاً لدروس الدعم لشهادة التعليم المتوسط BEM والباكالوريا BAC، أو مدرسة قرآنية متخصصة، المنظومة تلبي كافة التفاصيل الدقيقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Support Classes */}
          <div className="clay p-8 flex flex-col justify-between text-right">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-black text-[#1e1640] mb-3">دروس الدعم والأفواج الذكية</h3>
              <p className="text-sm text-[#6b5f8a] font-medium leading-relaxed mb-4">
                تسيير دقيق للأفواج حسب الأطوار (ابتدائي، متوسط، ثانوي، تحضيري) والشعب (علوم، رياضيات، تقني، تسيير، لغات).
              </p>
              <ul className="space-y-2 text-xs font-bold text-[#1e1640]">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span> تحديد السعات ومنع اكتظاظ القاعات.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span> قوائم الانتظار الذكية (Waiting List) للترقية الفورية.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span> نقل الفوج (Transfer) مع تعويض فروقات الأسعار.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span> إلغاء التسجيل واسترجاع المال لمحفظة التلميذ أو نقداً.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Quranic School */}
          <div className="clay p-8 flex flex-col justify-between text-right bg-gradient-to-b from-white to-emerald-50/40">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-black text-[#1e1640] mb-3">مسار التحفيظ القرآني 360°</h3>
              <p className="text-sm text-[#6b5f8a] font-medium leading-relaxed mb-4">
                دفتر متابعة إلكتروني شامل لكل طالب يغنيك عن السجلات الورقية التقليدية للكتاتيب والمدارس القرآنية.
              </p>
              <ul className="space-y-2 text-xs font-bold text-[#1e1640]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">•</span> تتبع الأحزاب الـ 60 كاملة، الأثمان، السور، والآيات.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">•</span> اعتماد روايتي ورش عن نافع أو حفص عن عاصم.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">•</span> تسجيل جلسات الحفظ الجديد والمراجعة والتثبيت.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">•</span> تقييم درجات التجويد (ممتاز، جيد جداً...) وتوجيهات الشيخ.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Bootcamps & Schedule */}
          <div className="clay p-8 flex flex-col justify-between text-right">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-black text-[#1e1640] mb-3">المخيمات الموسمية ومولد الجداول</h3>
              <p className="text-sm text-[#6b5f8a] font-medium leading-relaxed mb-4">
                تسيير دورات العطل، مراجعات البكالوريا المكثفة، مخيمات الروبوتيك والسوروبان مع أدوات الجدولة الآلية.
              </p>
              <ul className="space-y-2 text-xs font-bold text-[#1e1640]">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span> تسجيل سريع لورشات العطل واستخراج شهادات المشاركة بكود تحقق.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span> مخطط أسبوعي بصري يمنع تضارب القاعات وأوقات الأساتذة.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span> مولد الجداول الذكي: إنشاء مئات الحصص لأشهر قادمة بنقرة زر.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span> تصدير وطباعة جداول التوقيت للتعليق في المركز.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Teacher Payroll & Financial Administration */}
      <section id="payroll" className="w-full max-w-7xl mt-24">
        <div className="clay p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-black border border-purple-200">
                <Wallet size={16} />
                <span>الإدارة المالية ورواتب الأساتذة (Teacher Payroll)</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1640] leading-tight">
                حساب مستحقات الأساتذة بدقة: <br />
                <span className="text-primary-600">نسبة مئوية، راتب شهري، وتوثيق CCP/RIP</span>
              </h2>
              <p className="text-base md:text-lg text-[#6b5f8a] font-medium leading-relaxed">
                أكبر معضلة تواجه مراكز الدعم هي تعقيدات حساب عمولات الأساتذة وتتبع كم حصة قدم كل أستاذ وكم طالب حضر. نظام "المدرسة" يحسم هذه الحسابات فورياً بضغطة زر واحدة.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 font-bold text-[#1e1640] text-sm">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                    <Percent size={18} />
                  </div>
                  <span>دعم كامل لنظام النسبة (Percentage Split كـ 50% أو 60%) أو الراتب الثابت.</span>
                </div>

                <div className="flex items-center gap-3 font-bold text-[#1e1640] text-sm">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                    <Building2 size={18} />
                  </div>
                  <span>تسجيل حسابات البريد CCP والمفتاح Clé ورقم الحساب البنكي RIP الجزائري (20 رقماً).</span>
                </div>

                <div className="flex items-center gap-3 font-bold text-[#1e1640] text-sm">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>تسديد رواتب وحصص الأساتذة المحددين دفعة واحدة وتصفير الديون وتوثيق السندات.</span>
                </div>

                <div className="flex items-center gap-3 font-bold text-[#1e1640] text-sm">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                    <TrendingUp size={18} />
                  </div>
                  <span>لوحة قيادة للمدير العام: صافي الأرباح، فئات المصاريف الكبرى، ومقارنة الأهداف الشهرية.</span>
                </div>
              </div>
            </div>

            {/* Payroll Simulation Box */}
            <div className="flex-1 w-full max-w-md">
              <div className="clay-blue p-6 text-[#1e1640]">
                <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b pb-3 border-slate-100">
                    <span className="text-xs font-black text-blue-900">جدول مستحقات الأساتذة لشهر أكتوبر</span>
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">محسوب آلياً</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-black text-[#1e1640]">أ. سمير دراجي (فيزياء)</p>
                        <p className="text-[11px] text-slate-500 font-bold">نسبة 60% • 32 تلميذ • 8 حصص</p>
                      </div>
                      <div className="text-left">
                        <span className="font-black text-purple-700 block">48,000 د.ج</span>
                        <span className="text-[10px] text-emerald-600 font-bold">جاهز للصرف</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-black text-[#1e1640]">أ. مريم قاسمي (رياضيات)</p>
                        <p className="text-[11px] text-slate-500 font-bold">نسبة 55% • 28 تلميذ • 8 حصص</p>
                      </div>
                      <div className="text-left">
                        <span className="font-black text-purple-700 block">38,500 د.ج</span>
                        <span className="text-[10px] text-emerald-600 font-bold">جاهز للصرف</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-black text-[#1e1640]">إجمالي المستحقات:</span>
                    <span className="text-sm font-black text-primary-700">86,500 د.ج</span>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-primary-600 text-white font-black text-xs hover:bg-primary-700 transition-colors shadow-sm">
                    تسديد رواتب الأساتذة المحددين وتوثيق السندات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WhatsApp & Telegram Automated Communications */}
      <section id="whatsapp" className="w-full max-w-7xl mt-24">
        <div className="clay p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-black border border-emerald-200">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>مركز المراسلات الثنائي: واتساب + بوت تيليجرام</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1e1640]">
              راحة بال تامة لأولياء الأمور <br />
              <span className="text-emerald-600">ورسائل تلقائية تعزز هيبة واحترافية مركزك</span>
            </h2>
            <p className="text-base md:text-lg text-[#6b5f8a] font-medium leading-relaxed">
              ولي الأمر في الجزائر يختار المركز الذي يضمن له أمان ابنه وتتبعه المستمر. نظام "المدرسة" يرسل رسائل مباشرة على هاتف الولي فوراً دون أي تدخل يدوي، مع طابور إرسال ذكي يضمن حماية أرقامكم من الحظر.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
                <span>إشعار فوري بدخول التلميذ للمركز وقاعته لراحة بال الولي.</span>
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
                <span>تنبيه آلي بالغياب أو التأخر في حال لم يلتحق التلميذ بحصته.</span>
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
                <span>إرسال وصل الدفع الرقمي فور تسديد أي قسط في الصندوق.</span>
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
                <span>إرسال جماعي (Broadcast) للإعلانات والعطل وبدء التسجيلات الجديدة.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full flex justify-center">
            <div className="clay-green p-3 w-full max-w-sm transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-[24px] overflow-hidden shadow-inner">
                <div className="bg-[#075E54] text-white p-4 font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                    🏫
                  </div>
                  <div>
                    <h5 className="text-sm font-black leading-tight">مؤسسة النجاح التعليمية</h5>
                    <span className="text-[10px] text-emerald-200 block font-normal">متصل الآن عبر واتساب ويب</span>
                  </div>
                </div>
                <div className="bg-[#E5DDD5] p-4 space-y-3 h-[340px] flex flex-col justify-end text-right">
                  <div className="bg-white p-3 rounded-2xl rounded-tr-none text-xs text-[#1e1640] font-medium shadow-sm leading-relaxed">
                    👋 السلام عليكم ولي أمر التلميذ: <br />
                    نعلمكم بأنه تم تسجيل دخول ابنكم <b>(أحمد)</b> للمركز اليوم على الساعة <b>08:00 صباحاً</b> وهو متواجد الآن في قاعة الفيزياء.
                    <span className="text-[9px] text-slate-400 block mt-1 text-left font-mono">08:00 ✓✓</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tr-none text-xs text-[#1e1640] font-medium shadow-sm leading-relaxed">
                    🧾 تم تسجيل استلام مبلغ <b>2,000 د.ج</b> كاشتراك لشهر أكتوبر في فوج الرياضيات. نشكركم على حسن التعامل.
                    <span className="text-[9px] text-slate-400 block mt-1 text-left font-mono">09:15 ✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Comparison Table: Al Madrasa vs Excel & Generic Systems */}
      <section className="w-full max-w-7xl mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1e1640]">
            لماذا تتفوق منظومة "المدرسة" على الإكسيل والبرامج العامة؟
          </h2>
          <p className="text-base text-[#6b5f8a] font-medium mt-3">
            المقارنة الواضحة بين العمل التقليدي العشوائي وبين المنظومة المتخصصة في الواقع الجزائري.
          </p>
        </div>

        <div className="clay overflow-hidden p-4 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="border-b-2 border-[#ede9fe] text-[#1e1640]">
                  <th className="py-4 px-4 font-black">الميزة والوظيفة التشغيلية</th>
                  <th className="py-4 px-4 font-black text-primary-700 bg-primary-50 rounded-t-xl text-center">نظام "المدرسة" (Al Madrasa)</th>
                  <th className="py-4 px-4 font-bold text-slate-500 text-center">جداول Excel والورق</th>
                  <th className="py-4 px-4 font-bold text-slate-500 text-center">البرامج السحابية العامة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ede9fe] text-xs md:text-sm font-medium text-[#1e1640]">
                <tr>
                  <td className="py-4 px-4 font-bold">العمل بدون إنترنت (100% Offline)</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">✓ فوري وبلا أي انقطاع</td>
                  <td className="py-4 px-4 text-center text-amber-600 font-bold">نعم (لكن بدون ربط)</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">✗ يتوقف تماماً عند انقطاع النت</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">سرعة الاستقبال بالباركود و RFID</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">✓ أقل من ثانية واحدة</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">✗ كتابة يدوية وبطء شديد</td>
                  <td className="py-4 px-4 text-center text-slate-400">✗ غير مدمجة محلياً</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">تسيير الصندوق، الورديات، وكشف الفوارق</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">✓ جرد دقيق وحساب العجز آلياً</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">✗ احتمالية أخطاء واختلاسات</td>
                  <td className="py-4 px-4 text-center text-slate-400">✗ محاسبة عامة غير مرنة</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">طباعة وصولات حرارية 80mm/58mm</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">✓ بنقرة زر وبدون حوارات طباعة</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">✗ غير متوفرة إطلاقاً</td>
                  <td className="py-4 px-4 text-center text-slate-400">✗ معقدة في المتصفح</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">إشعارات واتساب وتيليجرام المباشرة</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">✓ آلية وطابور آمن ضد الحظر</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">✗ إرسال يدوي متعب جداً</td>
                  <td className="py-4 px-4 text-center text-amber-600 font-bold">رسوم إضافية باهظة شهرياً</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">حساب نسب الأساتذة وتسوية CCP/RIP</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">✓ مخصص للواقع الجزائري</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">✗ معادلات معقدة وعرضة للتلف</td>
                  <td className="py-4 px-4 text-center text-slate-400">✗ غير متوافقة مع الجزائر</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">رسوم الاشتراك</td>
                  <td className="py-4 px-4 text-center bg-primary-50 font-black text-purple-700">ترخيص دائم مدى الحياة (دفعة واحدة)</td>
                  <td className="py-4 px-4 text-center text-slate-500">مجاني ولكن مكلف في الوقت</td>
                  <td className="py-4 px-4 text-center text-red-600 font-bold">اشتراك شهري أو سنوي مستمر</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. Local Network & Security */}
      <section className="w-full max-w-7xl mt-24">
        <div className="clay p-8 md:p-10 bg-gradient-to-r from-purple-50/70 via-white to-blue-50/70">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Server size={22} />
              </div>
              <h3 className="text-xl font-black text-[#1e1640]">ربط عدة حواسيب في الشبكة المحلية (LAN)</h3>
              <p className="text-xs md:text-sm text-[#6b5f8a] font-medium leading-relaxed">
                يمكن تنصيب البرنامج كخادم رئيسي (Host) في مكتب المدير، وربط حواسيب أخرى في الاستقبال عبر شبكة المدرسة المحلية لمشاركة البيانات فوراً.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FolderArchive size={22} />
              </div>
              <h3 className="text-xl font-black text-[#1e1640]">نسخ احتياطي فوري واستعادة (.zip)</h3>
              <p className="text-xs md:text-sm text-[#6b5f8a] font-medium leading-relaxed">
                بضغطة زر واحدة، يتم توليد أرشيف مضغوط مشفر لكامل قاعدة البيانات، مع إمكانية تصديره لفلاش ديسك خارجي (USB) لحماية بياناتك من أي طارئ.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Shield size={22} />
              </div>
              <h3 className="text-xl font-black text-[#1e1640]">صلاحيات مشددة (RBAC) وأمان SQLite WAL</h3>
              <p className="text-xs md:text-sm text-[#6b5f8a] font-medium leading-relaxed">
                موظف الاستقبال لا يرى أرباح المركز أو حسابات الأساتذة، مع معمارية متينة بقاعدة بيانات SQLite WAL تمنع تلف البيانات وتضمن سرعة القراءة والكتابة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Pricing Section */}
      <section id="pricing" className="w-full max-w-7xl mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="clay p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#fde68a] rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-[#c4b5fd] rounded-full blur-3xl opacity-50"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-black mb-4 z-10">
            <Sparkles size={14} />
            <span>عرض الإطلاق الحصري</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#1e1640] mb-2 z-10">استثمارك الأذكى لمركزك</h2>
          <p className="text-[#6b5f8a] font-medium mb-8 z-10 text-sm md:text-base">
            ترخيص قانوني مدى الحياة. تدفع مرة واحدة فقط، ولا تدفع أي اشتراك شهري أو سنوي!
          </p>
          
          <div className="clay-purple p-8 w-full z-10 text-[#1e1640]">
            <h3 className="text-2xl font-black mb-2">الحزمة الشاملة الاحترافية (Pro Lifetime)</h3>
            <p className="text-xs font-bold text-purple-950/80 mb-6">تشمل كافة الوحدات: الاستقبال، الصندوق، الأكاديميا، القرآن، والرواتب</p>
            
            <div className="text-5xl md:text-6xl font-black mb-2 flex items-baseline justify-center gap-2">
              8 <span className="text-2xl opacity-90">ملايين سنتيم</span>
            </div>
            <div className="text-base font-black opacity-80 mb-8 font-mono">(80,000 د.ج فقط)</div>
            
            <a href="https://wa.me/213000000000" id="contact" target="_blank" className="btn-clay-primary w-full py-4 text-lg flex justify-center items-center gap-3">
              <MessageSquare size={22} />
              <span>اطلب المنظومة عبر الواتساب الآن</span>
            </a>
            
            <div className="text-xs font-black mt-6 bg-white/50 py-2.5 px-4 rounded-xl text-purple-950 flex items-center justify-center gap-2">
              <span>🎁 يشمل التثبيت على أجهزتكم، الإعداد الأولي وتدريب موظفيكم مجاناً</span>
            </div>
          </div>
        </div>
        
        <div className="clay p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-[#1e1640] mb-6 text-right">ما الذي تحصل عليه مع هذا الترخيص؟</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b border-[#ede9fe] pb-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-primary-600 shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1e1640] text-sm">ترخيص غير محدود</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">عدد لا نهائي من الطلاب، الأفواج، الأساتذة، وحركات الصندوق دون قيود.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-b border-[#ede9fe] pb-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1e1640] text-sm">ربط الخادم ومحطات الاستقبال (LAN)</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">تشغيل محطة الاستقبال وجهاز الإدارة معاً في نفس الوقت ومزامنة حية.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-[#ede9fe] pb-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Printer size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1e1640] text-sm">توصيل الطابعات الحرارية وقارئات RFID</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">تهيئة مباشرة لطابعات الوصولات (80mm/58mm) واستخراج بطاقات الطلاب فوراً.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-b border-[#ede9fe] pb-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-primary-600 shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1e1640] text-sm">ربط واتساب وتيليجرام</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">تفعيل روبوت الإرسال التلقائي للأولياء وقوالب الإشعارات الجاهزة.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1e1640] text-sm">ضمان ودعم فني مستمر</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">مساعدة في التثبيت وإعداد المركز، نسخ احتياطي دوري، واستجابة لأي استفسار.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#ede9fe] text-center">
            <p className="text-xs font-bold text-slate-500">
              📞 للتواصل المباشر والاستفسارات الهاتفية: <span className="font-black text-primary-700 dir-ltr inline-block">0550 00 00 00</span>
            </p>
          </div>
        </div>
      </section>

      {/* 12. Expanded FAQ Section */}
      <section id="faq" className="w-full max-w-4xl mt-12 mb-24">
        <h2 className="text-3xl md:text-4xl font-black text-[#1e1640] mb-8 text-center">الأسئلة الشائعة لمدراء المدارس</h2>
        
        <div className="space-y-4">
          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              هل يعمل البرنامج بالكامل بدون إنترنت؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              نعم، بنسبة 100%! المنظومة مبنية لتعمل محلياً (Offline First) وبسرعة فائقة حتى لو انقطع اتصال الإنترنت تماماً لعدة أسابيع. الإنترنت مطلوب فقط في حال رغبتكم بإرسال إشعارات الواتساب والتيليجرام للأولياء.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              هل يمكن تشغيل البرنامج على حاسوبين (المدير + موظف الاستقبال)؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              بالتأكيد! يدعم النظام معمارية الشبكة المحلية (LAN Multi-Terminal)؛ حيث يعمل جهاز المدير كخادم رئيسي (Host)، بينما يرتبط جهاز الاستقبال به عبر شبكة الواي فاي أو كابل الشبكة المحلي، وتتم مزامنة البيانات بشكل لحظي.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              هل تدعم المنظومة الطابعات الحرارية وأجهزة الباركود المتوفرة بالجزائر؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              نعم، المنظومة متوافقة فورياً مع كافة الطابعات الحرارية USB و Bluetooth بمقاس 80mm أو 58mm (مثل Xprinter و Epson)، ومع كافة أنواع قوارئ الباركود وقارئات بطاقات RFID/NFC الشائعة بدون الحاجة لتثبيت أي برامج وسيطة.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              كيف يتم حساب أجور الأساتذة وهل يدعم الحسابات البريدية CCP؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              يتيح لك البرنامج ضبط صيغة تعاقد كل أستاذ بدقة (سواء بنسبة مئوية من إجمالي مداخيل تلاميذه كـ 50% أو 60%، أو براتب شهري ثابت)، مع توثيق رقم حسابه البريدي الجاري CCP ومفتاحه Clé ورقم RIP، مع إمكانية دفع رواتب الأساتذة المحددين دفعة واحدة وتصفير مستحقاتهم تلقائياً.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              ماذا يحدث لبياناتي في حال تعطل جهاز الحاسوب؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              تحتوي المنظومة على وحدة نسخ احتياطي مدمجة وسهلة الاستخدام؛ يمكنك بنقرة واحدة استخراج نسخة احتياطية مضغوطة (.zip) لكافة بيانات المركز وحفظها على فلاش ديسك خارجي (USB) أو تخزين سحابي، واسترجاعها في أي حاسوب جديد خلال ثوانٍ.
            </p>
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="w-full mt-auto py-10 text-center border-t-2 border-[#ede9fe] text-[#6b5f8a] font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#1e1640] font-black text-lg">
            <div className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
              <LayoutDashboard size={18} />
            </div>
            <span>منصة المدرسة (Al Madrasa ERP)</span>
          </div>

          <p className="text-xs">
            جميع الحقوق محفوظة © {new Date().getFullYear()} — الحل المتكامل لمدارس الدعم والمراكز القرآنية في الجزائر
          </p>

          <div className="flex items-center gap-4 text-xs font-bold text-primary-600">
            <a href="#features" className="hover:underline">المميزات</a>
            <a href="#pricing" className="hover:underline">الأسعار</a>
            <a href="#faq" className="hover:underline">الأسئلة الشائعة</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
