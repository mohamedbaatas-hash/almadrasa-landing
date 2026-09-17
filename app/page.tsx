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
  Percent,
  Radio,
  Sliders,
  Gift,
  AlertTriangle,
  DoorOpen
} from "lucide-react";

export default function Home() {
  const whatsappUrl = "https://wa.me/213655748513?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9";
  const telegramUrl = "https://t.me/Fluidev";
  const phoneNumber = "0655 74 85 13";
  const phoneInternational = "+213 655 74 85 13";

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden p-4 md:p-8">
      
      {/* 1. Top Navbar */}
      <nav className="w-full max-w-7xl clay flex justify-between items-center px-6 py-4 mb-8 sticky top-4 z-50 backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-3">
          <img src="/almadrasa-landing/logo.png" alt="شعار منظومة المدرسة" className="w-11 h-11 rounded-2xl object-contain bg-white shadow-sm p-0.5 border border-purple-100" />
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
          <a href="#network" className="hover:text-primary-600 transition-colors">الربط الشبكي</a>
          <a href="#pricing" className="hover:text-primary-600 transition-colors">الأسعار</a>
          <a href="#faq" className="hover:text-primary-600 transition-colors">الأسئلة الشائعة</a>
        </div>

        <div className="flex items-center gap-3">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-clay-secondary px-4 py-2.5 text-xs font-bold flex items-center gap-2">
            <Send size={15} className="text-blue-500" />
            <span className="hidden sm:inline">تيليجرام</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-clay-primary px-5 py-2.5 text-sm flex items-center gap-2">
            <MessageSquare size={16} />
            <span>طلب تجربة</span>
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
          نظام مكتبي متكامل (Desktop Offline + LAN) يجمع بين سرعة تسجيل الحضور بالبطاقات الذكية، والتحصيل المالي الدقيق بنقاط البيع، والطباعة الفورية للوصولات الحرارية، مع ربط شبكي ذكي يكتشف الحواسيب تلقائياً دون إدخال IP يدوياً.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-clay-primary px-8 py-4 text-lg flex items-center justify-center gap-3">
            <MessageSquare size={20} />
            <span>احصل على نسختك الدائمة</span>
          </a>
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-clay-secondary px-8 py-4 text-lg flex items-center justify-center gap-2">
            <Send size={18} className="text-blue-600" />
            <span>تواصل عبر تيليجرام (@Fluidev)</span>
          </a>
          <a href="#features" className="btn-clay-secondary px-6 py-4 text-lg flex items-center justify-center gap-2">
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
            <Radio size={18} className="text-blue-600" />
            <span>ربط شبكي ذكي واكتشاف تلقائي</span>
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
      <section id="features" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 scroll-mt-28">
        <div className="clay-purple p-6 flex flex-col justify-between h-44 text-[#3b0764]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs bg-white/40 px-2.5 py-1 rounded-lg">المالية والصندوق</span>
            <Receipt size={26} className="text-purple-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">صندوق POS دقيق</h3>
            <p className="text-sm font-medium opacity-90">تسيير الورديات، جرد الدرج، وكشف العجز والفائض آلياً.</p>
          </div>
        </div>

        <div className="clay-yellow p-6 flex flex-col justify-between h-44 text-[#78350f]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs bg-white/40 px-2.5 py-1 rounded-lg">الاستقبال السريع</span>
            <QrCode size={26} className="text-amber-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">بطاقات RFID والباركود</h3>
            <p className="text-sm font-medium opacity-90">تسجيل حضور فوري بأجزاء من الثانية وكشف ديون الطلاب.</p>
          </div>
        </div>

        <div className="clay-green p-6 flex flex-col justify-between h-44 text-[#064e3b]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs bg-white/40 px-2.5 py-1 rounded-lg">التواصل الفوري</span>
            <MessageSquare size={26} className="text-emerald-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">واتساب وتيليجرام</h3>
            <p className="text-sm font-medium opacity-90">إشعارات الدخول، الغياب، الوصولات وتذكير الدفع تلقائياً.</p>
          </div>
        </div>

        <div className="clay-blue p-6 flex flex-col justify-between h-44 text-[#1e3a8a]">
          <div className="flex justify-between items-start">
            <span className="font-bold text-xs bg-white/40 px-2.5 py-1 rounded-lg">الأكاديميا ورواتب الأساتذة</span>
            <Calendar size={26} className="text-blue-900" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">حساب نسب الأساتذة</h3>
            <p className="text-sm font-medium opacity-90">اقتسام المداخيل، تسوية CCP/RIP، ومولد الجداول الذكي.</p>
          </div>
        </div>
      </section>

      {/* 4. Deep-Dive Section: Smart Reception & Pointage */}
      <section id="reception" className="w-full max-w-7xl mt-24 scroll-mt-28">
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
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-2">
                    <Zap size={18} />
                  </div>
                  <h4 className="font-black text-[#1e1640] mb-1">بوانتاج فوري في أجزاء من الثانية</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">عرض بيانات التلميذ التفصيلية، رمزه التعريفي، وحالته المالية (خالص أو مدين) فوراً.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-2">
                    <AlertTriangle size={18} />
                  </div>
                  <h4 className="font-black text-[#1e1640] mb-1">كاشف التطفل والأفواج الخاطئة</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">كاشف بصري فوري للأفواج الخاطئة ينبه موظف الاستقبال فوراً في حال عدم برمجة التلميذ في الحصة الحالية.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-2">
                    <Users size={18} />
                  </div>
                  <h4 className="font-black text-[#1e1640] mb-1">رادار الحركة (Inside Now)</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">إحصاء دقيق للطلاب المتواجدين داخل المبنى حالياً ونسب الغياب اللحظية.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f6fc] border border-[#ede9fe]">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">
                    <DoorOpen size={18} />
                  </div>
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
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                      <Check size={14} className="text-emerald-600" />
                      تم تسجيل الدخول بنجاح
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-mono">08:02:14</span>
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
                      <span className="font-black text-emerald-600 flex items-center gap-1">
                        خالص (0.00 د.ج ديون)
                        <Check size={14} />
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-bold border-t border-slate-100">
                    <span className="flex items-center gap-1.5 text-primary-700">
                      <MessageSquare size={13} />
                      تم إشعار الولي عبر واتساب
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <Check size={14} />
                      تم الإرسال
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Section: Caisse POS & Thermal Receipts */}
      <section id="caisse" className="w-full max-w-7xl mt-24 scroll-mt-28">
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
                تم بناء نظام الصندوق ليواكب حركة القبض السريعة في أوقات الذروة. كل دينار يدخل أو يخرج موثق في وردية محكمة باسم أمين الصندوق، مع حاسبة ذكية للفكة وترجيع الصرف.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1 shrink-0">
                    <Check size={13} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">تسيير الورديات الصباحية والمسائية (Shifts)</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">تسجيل الرصيد الافتتاحي للدرج (Fond de Caisse) قبل بدء المعاملات.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1 shrink-0">
                    <Check size={13} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">جرد الدرج الفعلي وحساب الفارق آلياً</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">عند إغلاق الوردية، يطابق النظام المبالغ المحسوبة مع النقد الفعلي ويكشف العجز أو الفائض فوراً.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1 shrink-0">
                    <Check size={13} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">استرجاع الديون العالقة (الكريدي) وبراءة الذمة</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">حصر دقيق للمتأخرات مع إرسال تذكيرات مخصصة للأولياء واستخراج وثيقة براءة الذمة المالية عند مغادرة التلميذ.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1 shrink-0">
                    <Check size={13} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">تسجيل المصاريف السريعة اليومية (Dépenses)</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">إخراج مبالغ صغيرة لشراء أوراق الطباعة، الصيانة، أو مستلزمات النظافة مع توثيق السند.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-1 shrink-0">
                    <Check size={13} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#1e1640] text-sm">نافذة التسديد السريع (Fast Payment) ومحفظة الطالب</h5>
                    <p className="text-xs text-[#6b5f8a] font-medium">سداد فوري للأقساط أو رسوم التسجيل والكتب مع حاسبة ذكية لمبالغ الترجيع (Rendu Monnaie) ومحفظة إلكترونية للرصيد المتبقي.</p>
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
                متوافق مباشرة مع جميع طابعات الفواتير الحرارية في السوق الجزائري (مقاس 80mm و 58mm كـ Xprinter وغيرها) مع تنسيق حراري تلقائي فوري مخصص لكل مقاس بنقرة واحدة.
              </p>

              {/* Thermal Receipt Simulation */}
              <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-4 text-center font-mono text-xs shadow-inner my-2">
                <div className="border-b border-slate-200 pb-2 mb-2">
                  <p className="font-black text-sm text-[#1e1640]">مؤسسة النجاح التعليمية</p>
                  <p className="text-[10px] text-slate-500">البليدة - هاتف: {phoneNumber}</p>
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
                <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] text-slate-500">
                  <span>كود التحقق: QR VALID</span>
                  <span>الطباعة: 80mm</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ede9fe] flex items-center justify-between text-xs font-bold text-primary-700">
              <span className="flex items-center gap-1.5">
                <CreditCard size={15} />
                يدعم استخراج بطاقة الطالب بالباركود فوراً
              </span>
              <CheckCircle2 size={16} />
            </div>
          </div>

        </div>
      </section>

      {/* 6. Academic & Quran Deep-Dive */}
      <section id="academics" className="w-full max-w-7xl mt-24 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-black mb-3">
            <School size={16} />
            <span>الهيكلة البيداغوجية المتكاملة</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1e1640]">
            مدارس الدعم والمناهج الرسمية، <br />
            وحلقات التحفيظ القرآني 360°
          </h2>
          <p className="text-base md:text-lg text-[#6b5f8a] font-medium mt-3">
            سواء كان مركزك مخصصاً لدروس الدعم لشهادة التعليم المتوسط BEM والباكالوريا BAC، أو مدرسة قرآنية متخصصة ومخيمات موسمية، المنظومة تلبي كافة المتطلبات.
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
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> تحديد السعات ومنع اكتظاظ القاعات.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> قوائم الانتظار الذكية (Waiting List) للترقية الفورية.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> نقل الفوج (Transfer) مع تعويض فروقات الأسعار.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> إلغاء التسجيل الآمن واسترجاع المال لمحفظة التلميذ أو نقداً.
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
              <h3 className="text-xl font-black text-[#1e1640] mb-3">مسار التحفيظ القرآني والمشايخ</h3>
              <p className="text-sm text-[#6b5f8a] font-medium leading-relaxed mb-4">
                دفتر متابعة إلكتروني شامل لكل طالب يغنيك عن السجلات الورقية، مع لوحة تحكم خاصة بالمشايخ والمقرئين.
              </p>
              <ul className="space-y-2 text-xs font-bold text-[#1e1640]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> تتبع الأحزاب الـ 60 كاملة، الأثمان، السور، والآيات.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> اعتماد روايتي ورش عن نافع أو حفص عن عاصم.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> تسجيل جلسات الحفظ الجديد والمراجعة والتثبيت.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> تقييم درجات التجويد وتوجيهات الشيخ المباشرة.
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
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span> تسجيل سريع لورشات العطل واستخراج شهادات المشاركة بكود تحقق.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span> مخطط أسبوعي بصري يمنع تضارب القاعات وأوقات الأساتذة.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span> مولد الجداول الذكي: إنشاء مئات الحصص لأشهر قادمة بنقرة زر.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span> تصدير وطباعة جداول التوقيت للتعليق في المركز.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Teacher Payroll & Financial Administration */}
      <section id="payroll" className="w-full max-w-7xl mt-24 scroll-mt-28">
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
                أكبر معضلة تواجه مراكز الدعم هي تعقيدات حساب عمولات الأساتذة وتتبع الحصص وعدد الطلاب الحاضرين. نظام "المدرسة" يحسم هذه الحسابات فورياً بضغطة زر واحدة.
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
      <section id="whatsapp" className="w-full max-w-7xl mt-24 scroll-mt-28">
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
              ولي الأمر في الجزائر يختار المركز الذي يضمن له أمان ابنه وتتبعه المستمر. نظام "المدرسة" يرسل رسائل مباشرة على هاتف الولي فوراً دون أي تدخل يدوي، مع طابور إرسال ذكي بفواصل زمنية عشوائية مدروسة (Anti-Spam Pacing) للحد الأقصى من مخاطر تقييد الحساب، مع خيار الربط المباشر أو عبر بوابات الـ Gateway.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} />
                </div>
                <span>إشعار فوري بدخول التلميذ للمركز وقاعته لراحة بال الولي.</span>
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} />
                </div>
                <span>تنبيه آلي بالغياب أو التأخر في حال لم يلتحق التلميذ بحصته.</span>
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} />
                </div>
                <span>إرسال وصل الدفع الرقمي فور تسديد أي قسط في الصندوق.</span>
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold text-sm">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={14} />
                </div>
                <span>إرسال جماعي (Broadcast) للإعلانات والعطل وبدء التسجيلات الجديدة.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full flex justify-center">
            <div className="clay-green p-3 w-full max-w-sm transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-[24px] overflow-hidden shadow-inner">
                <div className="bg-[#075E54] text-white p-4 font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                    <School size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-black leading-tight">مؤسسة النجاح التعليمية</h5>
                    <span className="text-[10px] text-emerald-200 block font-normal">متصل الآن عبر واتساب ويب</span>
                  </div>
                </div>
                <div className="bg-[#E5DDD5] p-4 space-y-3 h-[340px] flex flex-col justify-end text-right">
                  <div className="bg-white p-3 rounded-2xl rounded-tr-none text-xs text-[#1e1640] font-medium shadow-sm leading-relaxed">
                    السلام عليكم ولي أمر التلميذ: <br />
                    نعلمكم بأنه تم تسجيل دخول ابنكم <b>(أحمد)</b> للمركز اليوم على الساعة <b>08:00 صباحاً</b> وهو متواجد الآن في قاعة الفيزياء.
                    <span className="text-[9px] text-slate-500 block mt-1 text-left font-mono flex items-center justify-end gap-1">
                      08:00 <Check size={10} /><Check size={10} />
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tr-none text-xs text-[#1e1640] font-medium shadow-sm leading-relaxed">
                    تم تسجيل استلام مبلغ <b>2,000 د.ج</b> كاشتراك لشهر أكتوبر في فوج الرياضيات. نشكركم على حسن التعامل.
                    <span className="text-[9px] text-slate-500 block mt-1 text-left font-mono flex items-center justify-end gap-1">
                      09:15 <Check size={10} /><Check size={10} />
                    </span>
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
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> فوري وبلا أي انقطاع</span>
                  </td>
                  <td className="py-4 px-4 text-center text-amber-600 font-bold">نعم (لكن بدون ربط)</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> يتوقف تماماً عند انقطاع النت</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">سرعة الاستقبال بالباركود و RFID</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> أقل من ثانية واحدة</span>
                  </td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> كتابة يدوية وبطء شديد</span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> غير مدمجة محلياً</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">تسيير الصندوق، الورديات، وكشف الفوارق</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> جرد دقيق وحساب العجز آلياً</span>
                  </td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> احتمالية أخطاء واختلاسات</span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> محاسبة عامة غير مرنة</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">طباعة وصولات حرارية 80mm/58mm</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> تنسيق حراري تلقائي 80mm و 58mm</span>
                  </td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> غير متوفرة إطلاقاً</span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> معقدة في المتصفح</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">إشعارات واتساب وتيليجرام المباشرة</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> طابور إرسال ذكي للحد من الحظر</span>
                  </td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> إرسال يدوي متعب جداً</span>
                  </td>
                  <td className="py-4 px-4 text-center text-amber-600 font-bold">رسوم إضافية باهظة شهرياً</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">حساب نسب الأساتذة وتسوية CCP/RIP</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> مخصص للواقع الجزائري</span>
                  </td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> معادلات معقدة وعرضة للتلف</span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> غير متوافقة مع الجزائر</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">الامتثال لقانون حماية البيانات (قانون 18-07)</td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 font-black text-emerald-600">
                    <span className="flex items-center justify-center gap-1"><Check size={16} /> متوافق 100% (تخزين محلي بلا خوادم أجنبية)</span>
                  </td>
                  <td className="py-4 px-4 text-center text-amber-600 font-bold">معرض للضياع والسرقة</td>
                  <td className="py-4 px-4 text-center text-red-500 font-bold">
                    <span className="flex items-center justify-center gap-1"><X size={16} /> نقل بيانات القُصّر لخوادم سحابية خارجية</span>
                  </td>
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

      {/* 10. Local Network, Auto-Discovery & Customization */}
      <section id="network" className="w-full max-w-7xl mt-24 scroll-mt-28">
        <div className="clay p-8 md:p-10 bg-gradient-to-r from-purple-50/70 via-white to-blue-50/70">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-black mb-3">
              <Radio size={14} />
              <span>تقنيات الشبكة والأمان الحديثة</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1e1640]">
              ربط شبكي تلقائي، تخصيص كامل للواجهة، وحماية متقدمة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div className="space-y-3 bg-white/70 p-5 rounded-2xl border border-purple-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Radio size={22} />
              </div>
              <h3 className="text-lg font-black text-[#1e1640]">اكتشاف شبكي تلقائي (Zero-Config LAN)</h3>
              <p className="text-xs md:text-sm text-[#6b5f8a] font-medium leading-relaxed">
                لا حاجة لمعرفة أو كتابة عنوان IP يدوياً. حاسوب الاستقبال يعثر تلقائياً على خادم المدير في شبكة المدرسة (عبر بث UDP وفحص الشبكة الذكي) ويرتبط به فورياً.
              </p>
            </div>

            <div className="space-y-3 bg-white/70 p-5 rounded-2xl border border-purple-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Sliders size={22} />
              </div>
              <h3 className="text-lg font-black text-[#1e1640]">تخصيص الشريط العلوي وواجهة العمل</h3>
              <p className="text-xs md:text-sm text-[#6b5f8a] font-medium leading-relaxed">
                حرية تامة في إظهار أو إخفاء عناصر الشريط العلوي: أزرار التسجيل السريع، نافذة الصندوق، محرك البحث، وتكبير الشاشة Zoom للشاشات المكتبية الكبيرة.
              </p>
            </div>

            <div className="space-y-3 bg-white/70 p-5 rounded-2xl border border-purple-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FolderArchive size={22} />
              </div>
              <h3 className="text-lg font-black text-[#1e1640]">نسخ احتياطي فوري وأمان SQLite WAL</h3>
              <p className="text-xs md:text-sm text-[#6b5f8a] font-medium leading-relaxed">
                استخراج نسخة احتياطية كاملة لقاعدة البيانات (.db) بنقرة زر لحفظها على فلاش ديسك USB، مع معمارية SQLite WAL المقاومة تماماً لانقطاع الكهرباء وتلف البيانات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Pricing Section */}
      <section id="pricing" className="w-full max-w-7xl mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 scroll-mt-28">
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
            <p className="text-xs font-bold text-purple-950/80 mb-6">ترخيص دائم وشامل يغطي جهازين بالشبكة المحلية (جهاز رئيسي للإدارة + جهاز فرعي للاستقبال) مع كافة الوحدات</p>
            
            <div className="text-5xl md:text-6xl font-black mb-2 flex items-baseline justify-center gap-2">
              8 <span className="text-2xl opacity-90">ملايين سنتيم</span>
            </div>
            <div className="text-base font-black opacity-80 mb-8 font-mono">(80,000 د.ج فقط)</div>
            
            <div className="flex flex-col gap-3">
              <a href={whatsappUrl} id="contact" target="_blank" rel="noopener noreferrer" className="btn-clay-primary w-full py-4 text-base md:text-lg flex justify-center items-center gap-3">
                <MessageSquare size={22} />
                <span>اطلب المنظومة عبر الواتساب الآن</span>
              </a>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-clay-secondary w-full py-3 text-sm font-black flex justify-center items-center gap-2">
                <Send size={18} className="text-blue-600" />
                <span>أو تواصل عبر التيليجرام (@Fluidev)</span>
              </a>
            </div>
            
            <div className="text-xs font-black mt-6 bg-white/50 py-2.5 px-4 rounded-xl text-purple-950 flex items-center justify-center gap-2">
              <Gift size={16} className="text-amber-600" />
              <span>يشمل التثبيت عن بُعد عبر AnyDesk في كافة الـ 58 ولاية، الإعداد الأولي وتدريب موظفيكم مجاناً</span>
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
                  <h4 className="font-black text-[#1e1640] text-sm">ترخيص غير محدود (Host + Client)</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">عدد لا نهائي من الطلاب، الأفواج، الأساتذة، والعمليات المالية مع ربط محطتين في نفس الوقت.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-b border-[#ede9fe] pb-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Radio size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#1e1640] text-sm">ربط شبكي تلقائي ذكي (LAN Auto-Discovery)</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">تشغيل محطة الاستقبال وجهاز الإدارة معاً في نفس الوقت ومزامنة حية دون إدخال IP يدوياً.</p>
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
                  <h4 className="font-black text-[#1e1640] text-sm">ضمان دائم وإعادة تفعيل مجانية</h4>
                  <p className="text-xs text-[#6b5f8a] font-medium">ضمان إعادة تفعيل نسختكم مجاناً عند استبدال القرص الصلب أو فورمات الحاسوب، مع دعم فني مستمر.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#ede9fe] text-center space-y-2">
            <p className="text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
              <Phone size={14} className="text-primary-600" />
              <span>للتواصل المباشر والاستفسارات الهاتفية:</span>
              <a href={`tel:${phoneInternational}`} className="font-black text-primary-700 dir-ltr inline-block hover:underline">{phoneNumber}</a>
            </p>
            <p className="text-xs font-bold text-slate-500 flex items-center justify-center gap-2">
              <Send size={13} className="text-blue-500" />
              <span>حساب التيليجرام المباشر:</span>
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">@Fluidev</a>
            </p>
          </div>
        </div>
      </section>

      {/* 12. Expanded FAQ Section */}
      <section id="faq" className="w-full max-w-4xl mt-12 mb-24 scroll-mt-28">
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
              هل يمكن تشغيل البرنامج على حاسوبين (المدير + موظف الاستقبال) وكيف يتم الربط؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              نعم وبكل سهولة! يدعم النظام معمارية الشبكة المحلية المتقدمة مع ميزة الاكتشاف التلقائي (LAN Auto-Discovery)؛ حيث يعمل جهاز المدير كخادم رئيسي (Host)، بينما يرتبط جهاز الاستقبال تلقائياً دون الحاجة لمعرفة أو إدخال عنوان IP يدوياً، وتتم مزامنة البيانات بشكل لحظي.
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
              يتيح لك البرنامج ضبط صيغة تعاقد كل أستاذ بدقة (سواء بنسبة مئوية من إجمالي مداخيل تلاميذه كـ 50% أو 60%، أو براتب شهري ثابت)، مع توثيق رقم حسابه البريدي الجاري CCP ومفتاحه Clé ورقم RIP، مع إمكانية دفع رواتب الأساتذة المحددين دفعة واحدة وتصفير مستحقاتهم تلقائياً واستخراج ملف الحوالات الرسمي لبريد الجزائر.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              ماذا يحدث لبياناتي في حال تعطل جهاز الحاسوب؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              تحتوي المنظومة على محرك نسخ احتياطي آمن وسريع يعتمد تقنية VACUUM INTO؛ يمكنك بنقرة واحدة أخذ نسخة احتياطية كاملة لقاعدة بيانات المركز وحفظها على فلاش ديسك خارجي USB، كما تقوم المنظومة بنسخ آلي عند الإقلاع أو الإغلاق، ويمكن استرجاع بياناتك على أي حاسوب بديل في ثوانٍ معدودة دون فقدان أي سجل.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2.5 mb-2 text-base">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-600 shrink-0"></span>
              هل تضمن المنظومة خصوصية بيانات الطلاب وتوافقها مع القانون الجزائري 18-07؟
            </h4>
            <p className="text-[#6b5f8a] font-medium text-sm pr-5 leading-relaxed">
              نعم تماماً! المنظومة تعمل بنظام محلي مغلق (On-Premise) وقاعدة بيانات SQLite داخل جهازك، ولا يتم نقل أو رفع أي سجلات أو أرقام هواتف لأي خادم سحابي خارجي، مما يجعل مركزك ممتثلاً 100% لمتطلبات القانون 18-07 المتعلق بحماية المعطيات ذات الطابع الشخصي (ANPDP).
            </p>
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="w-full mt-auto py-10 text-center border-t-2 border-[#ede9fe] text-[#6b5f8a] font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#1e1640] font-black text-lg">
            <img src="/almadrasa-landing/logo.png" alt="شعار منظومة المدرسة" className="w-8 h-8 rounded-xl object-contain bg-white p-0.5 border border-purple-100" />
            <span>منصة المدرسة (Al Madrasa ERP)</span>
          </div>

          <p className="text-xs">
            جميع الحقوق محفوظة © {new Date().getFullYear()} — تواصل مباشر: <a href={`tel:${phoneInternational}`} className="font-bold text-primary-700">{phoneNumber}</a> | تيليجرام: <a href={telegramUrl} className="font-bold text-blue-600">@Fluidev</a>
          </p>

          <div className="flex items-center gap-4 text-xs font-bold text-primary-600">
            <a href="#features" className="hover:underline">المميزات</a>
            <a href="#network" className="hover:underline">الربط الشبكي</a>
            <a href="#pricing" className="hover:underline">الأسعار</a>
            <a href="#faq" className="hover:underline">الأسئلة الشائعة</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
