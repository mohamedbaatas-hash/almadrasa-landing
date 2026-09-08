import { CheckCircle2, MessageSquare, QrCode, Shield, Users, WifiOff, LayoutDashboard, Calendar, Receipt, ChevronDown, Award } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden p-4 md:p-8">
      
      {/* Top Navbar Simulation */}
      <nav className="w-full max-w-7xl clay flex justify-between items-center px-6 py-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
            <LayoutDashboard size={24} />
          </div>
          <span className="text-xl font-black text-[#1e1640]">المدرسة (Al Madrasa)</span>
        </div>
        <a href="#contact" className="btn-clay-primary px-6 py-2.5 text-sm flex items-center gap-2">
          طلب نسخة تجريبية
        </a>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl flex flex-col items-center text-center gap-8 py-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full clay bg-white text-primary-600 font-bold mb-2">
          <Award size={18} />
          البرنامج الأول لتسيير المدارس الخاصة في الجزائر
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e1640] leading-tight max-w-4xl">
          قم بإدارة <span className="text-primary-600">مركزك التعليمي</span> باحترافية من لوحة تحكم واحدة
        </h1>
        <p className="text-lg md:text-xl text-[#6b5f8a] max-w-3xl font-medium">
          تخلص من الفوضى الورقية والطوابير الطويلة! نظام متكامل صمم خصيصاً لمدارس الدعم (المتوسط والثانوي) والمدارس القرآنية في الجزائر. تسيير مالي دقيق، تسجيل بالباركود، وتواصل فوري مع الأولياء.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a href="#pricing" className="btn-clay-primary px-8 py-4 text-lg flex items-center justify-center gap-2">
            احصل على البرنامج
          </a>
          <a href="#features" className="btn-clay-secondary px-8 py-4 text-lg flex items-center justify-center">
            تصفح المميزات
          </a>
        </div>
      </section>

      {/* Colored Dashboard KPI Cards for Features */}
      <section id="features" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="clay-pink p-6 flex flex-col justify-between h-40 text-[#1e1640]">
          <div className="flex justify-between items-start">
            <span className="font-bold uppercase text-sm opacity-80 tracking-wide">المالية والفواتير</span>
            <Receipt size={24} className="opacity-80" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">دقة الحسابات</h3>
            <p className="text-sm font-medium opacity-80">تتبع المداخيل ومستحقات الأساتذة</p>
          </div>
        </div>

        <div className="clay-yellow p-6 flex flex-col justify-between h-40 text-[#1e1640]">
          <div className="flex justify-between items-start">
            <span className="font-bold uppercase text-sm opacity-80 tracking-wide">الباركود</span>
            <QrCode size={24} className="opacity-80" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">تسجيل سريع</h3>
            <p className="text-sm font-medium opacity-80">نهاية طوابير الانتظار للاستقبال</p>
          </div>
        </div>

        <div className="clay-green p-6 flex flex-col justify-between h-40 text-[#166534]">
          <div className="flex justify-between items-start">
            <span className="font-bold uppercase text-sm opacity-80 tracking-wide">الواتساب</span>
            <MessageSquare size={24} className="opacity-80" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">تتبع الأولياء</h3>
            <p className="text-sm font-medium opacity-80">إشعارات الحضور والدفع التلقائية</p>
          </div>
        </div>

        <div className="clay-purple p-6 flex flex-col justify-between h-40 text-[#4c1d95]">
          <div className="flex justify-between items-start">
            <span className="font-bold uppercase text-sm opacity-80 tracking-wide">بدون إنترنت</span>
            <WifiOff size={24} className="opacity-80" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-1">نظام محلي</h3>
            <p className="text-sm font-medium opacity-80">لا تتوقف عن العمل بسبب الإنترنت</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Pain Points Section */}
      <section className="w-full max-w-7xl mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#1e1640] mb-6">لماذا يحتاج مركزك إلى نظام "المدرسة"؟</h2>
        <p className="text-lg text-[#6b5f8a] font-medium mb-12 max-w-2xl mx-auto">
          الإدارة اليدوية أو باستخدام الإكسيل تؤدي إلى أخطاء مالية فادحة وضياع وقت ثمين. نحن نقدم لك الحل الجذري.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          <div className="clay p-8">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
              <Receipt size={24} />
            </div>
            <h3 className="text-xl font-black text-[#1e1640] mb-3">حماية من الخسائر المالية</h3>
            <p className="text-[#6b5f8a] font-medium leading-relaxed">
              يمنع النظام التلاعب بالأسعار أو استلام مبالغ أكبر/أقل من المطلوب، مع واجهة كاشير ذكية وحساب تلقائي لنسب الأساتذة (Commissions).
            </p>
          </div>

          <div className="clay p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-black text-[#1e1640] mb-3">تنظيم الأفواج والجدول الزمني</h3>
            <p className="text-[#6b5f8a] font-medium leading-relaxed">
              نظام ذكي يكتشف تعارض الأوقات بين الأساتذة والقاعات. يمكنك إنشاء أفواج للمتوسط والثانوي والمدارس القرآنية بضغطة زر.
            </p>
          </div>

          <div className="clay p-8">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-black text-[#1e1640] mb-3">صلاحيات آمنة (Roles)</h3>
            <p className="text-[#6b5f8a] font-medium leading-relaxed">
              كل موظف يرى ما يجب أن يراه فقط. المدير يتحكم في كل شيء، بينما موظف الاستقبال مخصص للتسجيل والباركود دون الاطلاع على أرباح المركز.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Feature detailed */}
      <section id="whatsapp" className="w-full max-w-7xl mt-24">
        <div className="clay p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#dcfce7] text-[#16a34a] rounded-full text-sm font-bold border-2 border-[#bbf7d0]">
              <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></div>
              الميزة الأكثر طلباً
            </div>
            <h2 className="text-3xl font-black text-[#1e1640]">تواصل تلقائي مع الأولياء عبر الواتساب</h2>
            <p className="text-lg text-[#6b5f8a] font-medium leading-relaxed">
              الشفافية والثقة هي ما يبحث عنه الولي. مع نظام "المدرسة"، سيتم إرسال رسائل آلية ومباشرة لحساب الواتساب الخاص بولي الأمر لحظة تفعيل الباركود. لا حاجة لموظف ليرسل الرسائل يدوياً!
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex items-center gap-3 text-[#1e1640] font-bold">
                <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center">✓</div>
                إشعار بالدخول لضمان وصول التلميذ
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold">
                <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center">✓</div>
                وصولات دفع رقمية احترافية
              </li>
              <li className="flex items-center gap-3 text-[#1e1640] font-bold">
                <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center">✓</div>
                تنبيهات باقتراب موعد تسديد الأقساط
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full flex justify-center">
            <div className="clay-blue p-2 w-full max-w-sm transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-[20px] overflow-hidden shadow-inner">
                <div className="bg-[#128C7E] text-white p-4 font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  إدارة المدرسة
                </div>
                <div className="bg-[#E5DDD5] p-6 space-y-4 h-[300px] flex flex-col justify-end">
                  <div className="bg-white p-3 rounded-2xl rounded-tr-none text-sm text-[#1e1640] font-medium shadow-sm">
                    السلام عليكم، نعلمكم بأنه تم تسجيل دخول الطالب: أحمد بن علي، اليوم على الساعة 08:00 صباحاً.
                    <span className="text-[10px] text-slate-400 block mt-1 text-left">08:00</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tr-none text-sm text-[#1e1640] font-medium shadow-sm">
                    تم استلام مبلغ 1500 د.ج كقسط شهري لشهر سبتمبر. شكراً لثقتكم.
                    <span className="text-[10px] text-slate-400 block mt-1 text-left">09:15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Activity Section */}
      <section id="pricing" className="w-full max-w-7xl mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="clay p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#fde68a] rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#c4b5fd] rounded-full blur-3xl opacity-50"></div>
          
          <h2 className="text-3xl font-black text-[#1e1640] mb-2 z-10">استثمارك الناجح يبدأ هنا</h2>
          <p className="text-[#6b5f8a] font-medium mb-8 z-10">ترخيص مدى الحياة. اشتري مرة واحدة، وامتلك البرنامج للأبد.</p>
          
          <div className="clay-purple p-8 w-full z-10 text-[#1e1640]">
            <h3 className="text-2xl font-black mb-4">النظام الشامل (النسخة الكاملة)</h3>
            <div className="text-5xl font-black mb-2 flex items-baseline justify-center gap-2">
              8 <span className="text-2xl opacity-80">ملايين سنتيم</span>
            </div>
            <div className="text-sm font-bold opacity-70 mb-8">(80,000 د.ج)</div>
            
            <a href="https://wa.me/213000000000" id="contact" target="_blank" className="btn-clay-primary w-full py-4 text-lg flex justify-center items-center gap-2">
              <MessageSquare size={20} />
              اطلب البرنامج الآن
            </a>
            
            <p className="text-sm font-black mt-6 bg-white/40 py-2 rounded-xl">
              🎁 تواصل معنا الآن للحصول على تخفيض خاص!
            </p>
          </div>
        </div>
        
        <div className="clay p-8 flex flex-col">
          <h3 className="text-xl font-black text-[#1e1640] mb-6">ماذا يشمل هذا السعر؟</h3>
          
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-4 border-b border-[#ede9fe] pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1e1640]">ترخيص غير محدود</h4>
                <p className="text-sm text-[#6b5f8a] font-medium">عدد لا نهائي من الطلاب، الأفواج، والأساتذة.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-b border-[#ede9fe] pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1e1640]">صلاحيات للموظفين</h4>
                <p className="text-sm text-[#6b5f8a] font-medium">حساب خاص بالمدير، وموظفي الاستقبال.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-b border-[#ede9fe] pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1e1640]">تفعيل الواتساب والباركود</h4>
                <p className="text-sm text-[#6b5f8a] font-medium">نظام التنبيهات المباشرة وتسجيل الدخول السريع.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#dcfce7] flex items-center justify-center text-[#16a34a]">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1e1640]">دعم فني وتحديثات</h4>
                <p className="text-sm text-[#6b5f8a] font-medium">مساعدة في التثبيت وإعداد المركز بالكامل.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mt-12 mb-24">
        <h2 className="text-3xl font-black text-[#1e1640] mb-8 text-center">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              هل أحتاج إلى إنترنت ليعمل البرنامج؟
            </h4>
            <p className="text-[#6b5f8a] font-medium px-4">
              لا، البرنامج يعمل بالكامل (Offline) وبسرعة فائقة. ستحتاج الإنترنت فقط إذا أردت تفعيل ميزة إرسال إشعارات الواتساب للأولياء.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              هل هناك دفع شهري أو سنوي؟
            </h4>
            <p className="text-[#6b5f8a] font-medium px-4">
              لا! السعر المذكور (8 ملايين سنتيم) هو لترخيص مدى الحياة. تدفع مرة واحدة فقط وتمتلك البرنامج إلى الأبد.
            </p>
          </div>

          <div className="clay p-6 text-right">
            <h4 className="font-black text-[#1e1640] flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              هل البرنامج يدعم النظام التعليمي الجزائري؟
            </h4>
            <p className="text-[#6b5f8a] font-medium px-4">
              نعم بالتأكيد! النظام مهيأ مسبقاً ليدعم نظام الولايات، والأطوار التعليمية (متوسط، ثانوي/باكالوريا، وحتى المدارس القرآنية).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto py-8 text-center border-t-2 border-[#ede9fe] text-[#6b5f8a] font-medium">
        <p>جميع الحقوق محفوظة لصالح نظام المدرسة © {new Date().getFullYear()}</p>
        <p className="text-sm mt-2">الخيار الأمثل والأقوى لمدارس الدعم في الجزائر</p>
      </footer>

    </main>
  );
}
