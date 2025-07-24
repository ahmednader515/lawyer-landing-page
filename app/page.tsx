import Image from "next/image";
import { FaBalanceScale, FaGavel, FaUsers, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans flex flex-col items-stretch transition-colors duration-300">
      {/* Navbar */}
      <nav className="w-full flex items-center md:px-12 py-0.5 pb-5 z-50 absolute top-0 left-0 bg-white dark:bg-gray-900">
        {/* Contact info vertically centered */}
        <div className="flex flex-row items-center gap-1 md:gap-6 text-[10px] md:text-sm text-gray-800 dark:text-gray-100 w-full justify-end h-full pt-5 pl-2">
          <span className="flex items-start gap-1 self-start">
            <p className="text-gray-800 dark:text-gray-100 text-[11px] md:text-sm">مكتب ٠٣/٤٨٥٦٠٩٥</p>
            <span>-</span>
            <FaPhoneAlt className="text-[var(--accent)] text-[10px] md:text-sm" />
            <a href="tel:01024920913" className="hover:underline text-[11px] md:text-sm">٠١٠٢٤٩٢٠٩١٣</a>
            <span>-</span>
            <a href="tel:01285815568" className="hover:underline text-[11px] md:text-sm">٠١٢٨٥٨١٥٥٦٨</a>
          </span>
        </div>
        {/* Large logo overlapping navbar, right-aligned */}
        <div className="absolute right-2 md:right-12 top-1/2 md:top-full -translate-y-1/2 z-50 pointer-events-none pt-10">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center p-[6px] md:p-[10px]">
            <Image src="/logo.png" alt="Logo" width={100} height={100} className="object-contain w-20 h-20 md:w-40 md:h-40" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg flex flex-col md:flex-row items-center justify-center py-24 px-4 relative overflow-hidden shadow-lg text-center md:text-left gap-y-4 md:gap-x-8 bg-[var(--bg)] dark:bg-[var(--bg)] transition-colors duration-300 pt-28 md:pt-32">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 translate-y-8 md:translate-y-15"
          src="/court.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-end md:items-end justify-center z-20 pl-0 md:pl-12 text-right md:text-right mr-4 md:mr-16">
          <h1 className="alex-brush text-4xl md:text-4xl mb-4 text-blue-900 dark:text-yellow-400 drop-shadow z-20 w-full text-right mb-5">أ. محمد السيد ابو سريع</h1>
          <h2 className="alex-brush text-2xl md:text-3xl mb-4 text-[var(--accent)] z-20 w-full text-right mb-10">محامٍ و محكم</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200 leading-relaxed z-20 w-full text-right">خبرة واسعة في تقديم الاستشارات القانونية والتمثيل أمام المحاكم في مختلف القضايا المدنية والتجارية والجنائية.</p>
          <a href="#contact" className="group bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] px-10 py-4 rounded-lg text-xl font-bold shadow hover:bg-[var(--accent)] hover:text-white transition z-20 flex items-center justify-center gap-2 md:justify-start text-right self-start">
            <FaBalanceScale className="text-[var(--accent)] text-2xl transition-colors duration-200 group-hover:text-white" />
            احجز استشارتك القانونية الان
          </a>
          {/* Social Media Icons */}
          <div className="flex flex-row gap-4 mt-4 mr-5 z-20 self-start">
            <a href="https://www.facebook.com/share/1B3CwMVmqo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-700 dark:text-yellow-300 hover:text-blue-900 dark:hover:text-yellow-400 text-2xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://www.instagram.com/muhammad_abusree_lawfirm?igsh=dDh3YWRrc3c1OW9p&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-600 dark:text-yellow-300 hover:text-pink-800 dark:hover:text-yellow-400 text-2xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex-1 flex items-center justify-center z-20 mt-8 md:mt-0">
          <div className="p-2 border-2 border-[var(--accent)] rounded-tr-[120px] rounded-bl-[120px] shadow-2xl">
            <div className="p-1 rounded-tr-[100px] rounded-bl-[100px]">
              <Image src="/hero-section.jpeg" alt="Hero" width={340} height={500} className="object-cover w-72 h-96 md:h-[28rem] rounded-tr-[100px] rounded-bl-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-24 bg-[var(--bg)] dark:bg-[var(--bg)] flex flex-col items-center text-center gap-y-4 transition-colors duration-300" id="about">
        <h3 className="text-3xl font-bold mb-4 text-blue-900 dark:text-yellow-400">من نحن</h3>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center md:items-start">
          {/* Mohamed Abosree Description Card - Left Side */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-2xl w-full md:w-1/2 border-t-4 border-[var(--accent)] mb-8 md:mb-0">
            <Image src="/office.jpg" alt="Mohamed Abosree" width={200} height={200} className="object-cover rounded-full shadow mb-6 border-4 border-[var(--accent)]" />
            <h3 className="text-2xl font-bold text-blue-900 dark:text-yellow-400 mb-2">الأستاذ محمد السيد ابو سريع</h3>
            <p className="text-gray-700 dark:text-gray-200 text-center text-lg leading-relaxed">
              الأستاذ محمد السيد ابو سريع هو محامٍ ومستشار قانوني ذو خبرة واسعة في مختلف مجالات القانون، يتميز بالاحترافية والالتزام في تقديم الخدمات القانونية والاستشارات، ويمتلك سجلًا حافلًا بالنجاحات في الدفاع عن حقوق العملاء أمام المحاكم والجهات القضائية. يسعى دائمًا لتحقيق أفضل النتائج لعملائه من خلال المعرفة العميقة بالقوانين والأنظمة، والحرص على المتابعة الدقيقة لكل تفاصيل القضايا.
            </p>
          </div>
          {/* About Content - Right Side */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-right">
            {/* Owner Info */}
            <div className="mb-8 flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-t-4 border-[var(--accent)] w-full max-w-[34rem] md:max-w-[34rem] flex flex-col items-center text-center md:w-[34rem]">
                <span className="text-2xl font-bold text-blue-900 dark:text-yellow-400 mb-2">الأستاذ محمد السيد ابو سريع</span>
                <span className="text-base text-gray-700 dark:text-gray-200 mb-1">ماجستير في القانون الجنائي</span>
                <span className="text-base text-gray-700 dark:text-gray-200 mb-1">دراسات عليا في القانون العام</span>
                <span className="text-base text-gray-700 dark:text-gray-200 mb-1">عضو اتحاد المحامين العرب</span>
                <span className="text-base text-gray-700 dark:text-gray-200">وعضو لجنة الحريات بنقابة المحامين</span>
              </div>
            </div>
            {/* Team Members */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-6 text-blue-800 dark:text-yellow-300">فريق عمل المكتب</h4>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                {/* Card 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--accent)] w-64">
                  <div className="p-2 border-2 border-[var(--accent)] rounded-tr-[60px] rounded-bl-[60px] shadow-md mb-4 w-32 h-32 flex items-center justify-center overflow-hidden">
                    {/* Replace src with actual image later */}
                    <img src="/placeholder.jpg" alt="عمر عزت عبد الله" className="object-cover w-28 h-28 rounded-tr-[50px] rounded-bl-[50px]" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">الأستاذ عمر عزت عبد الله</span>
                </div>
                {/* Card 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--accent)] w-64">
                  <div className="p-2 border-2 border-[var(--accent)] rounded-tr-[60px] rounded-bl-[60px] shadow-md mb-4 w-32 h-32 flex items-center justify-center overflow-hidden">
                    {/* Replace src with actual image later */}
                    <img src="/placeholder.jpg" alt="كريم يوسف التركي" className="object-cover w-28 h-28 rounded-tr-[50px] rounded-bl-[50px]" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">الأستاذ كريم يوسف التركي</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mx-auto my-4 rounded-full" />

      {/* Practice Areas */}
      <section className="py-12 px-4 md:px-24 bg-gray-50 dark:bg-gray-900 flex flex-col items-center text-center gap-y-8 transition-colors duration-300" id="services">
        <h3 className="text-3xl font-bold mb-8 text-blue-900 dark:text-yellow-400">مجالات الممارسة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
            <FaGavel className="text-[var(--accent)] text-3xl mb-3" />
            <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">القضايا الجنائية</h4>
            <p className="text-gray-600 dark:text-gray-300">تمثيل قانوني أمام المحاكم والدفاع عن حقوق العملاء في القضايا الجنائية والمدنية لضمان الحصول على أفضل نتيجة قانونية ممكنة.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
            <FaUsers className="text-[var(--accent)] text-3xl mb-3" />
            <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">القضايا المدنية</h4>
            <p className="text-gray-600 dark:text-gray-300">تقديم استشارات قانونية وتمثيل العملاء أمام الجهات القضائية لحماية حقوقهم، وتسوية النزاعات، وصياغة العقود ومتابعة القضايا حتى صدور الحكم.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
            <FaBalanceScale className="text-[var(--accent)] text-3xl mb-3" />
            <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">القضايا التجارية</h4>
            <p className="text-gray-600 dark:text-gray-300">تقديم الاستشارات القانونية والتمثيل أمام المحاكم في النزاعات التجارية، وصياغة ومراجعة العقود بين الشركات، وتسوية الخلافات بين الشركاء أو الأطراف التجارية لضمان الحقوق وتقليل المخاطر القانونية.</p>
          </div>
          <div className="col-span-full flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
              <FaBalanceScale className="text-[var(--accent)] text-3xl mb-3" />
              <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">قضايا الأحوال الشخصية</h4>
              <p className="text-gray-600 dark:text-gray-300">تقديم الدعم القانوني والتمثيل أمام محاكم الأسرة في قضايا الطلاق، الخُلع، النفقة، الحضانة، الرؤية، والميراث، مع الحرص على تحقيق أفضل النتائج بما يحفظ حقوق الموكل وكرامته.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
              <FaBalanceScale className="text-[var(--accent)] text-3xl mb-3" />
              <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">صياغة العقود</h4>
              <p className="text-gray-600 dark:text-gray-300">صياغة العقود والاتفاقيات التجارية والمالية والمواد المتعلقة بالملكية الفكرية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16 px-4 md:px-24 flex flex-col items-center text-center gap-y-8 transition-colors duration-300 relative overflow-hidden"
        style={{
          backgroundImage: "url('/test-images.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/80 z-0" />
        <h3 className="text-4xl font-bold mb-10 text-white z-10" style={{ fontFamily: 'Lemonada, sans-serif' }}>أراء العملاء</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center z-10">
          {/* Testimonial 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center border-none max-w-md w-full text-right bg-opacity-90">
            <div className="flex flex-row-reverse justify-end w-full mb-2">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-100 mb-6">كنت أبحث عن شخص يفهم فكرتي ويحولها لواقع حقيقي بدون تعقيدات. أ. محمد كان الشخص المناسب تماماً. مبدع، منظم، وسهل في التعامل.</p>
            <div className="flex items-center gap-3 mt-auto w-full justify-end">
              <span className="font-bold text-white">خالد إبراهيم، رائد أعمال</span>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center border-none max-w-md w-full text-right bg-opacity-90">
            <div className="flex flex-row-reverse justify-end w-full mb-2">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-100 mb-6">أ. محمد ليس فقط محامٍ بل شريك في النجاح. التزامه بالمواعيد وحرصه على التفاصيل خلال كل مراحل العمل كان رائعاً.</p>
            <div className="flex items-center gap-3 mt-auto w-full justify-end">
              <span className="font-bold text-white">يوسف الخطيب، مطور محتوى</span>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center border-none max-w-md w-full text-right bg-opacity-90">
            <div className="flex flex-row-reverse justify-end w-full mb-2">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-100 mb-6">أنصح الجميع بالتعامل مع أ. محمد وفريقه. خبرة كبيرة ونتائج مميزة في القضايا القانونية.</p>
            <div className="flex items-center gap-3 mt-auto w-full justify-end">
              <span className="font-bold text-white">أحمد الزهراني، صاحب متجر إلكتروني</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mx-auto my-4 rounded-full" />

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-24 bg-[var(--bg)] dark:bg-[var(--bg)] flex flex-col items-center text-center gap-y-4 transition-colors duration-300" id="contact">
        <h3 className="text-3xl font-bold mb-4 text-blue-900 dark:text-yellow-400">تواصل معنا</h3>
        <p className="mb-4 text-lg text-gray-800 dark:text-gray-200">للاستفسار أو حجز موعد، يرجى التواصل عبر:</p>
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
          {/* Contact Form */}
          <form
            action="mailto:MuhammadAbusree.lawfirm@gmail.com"
            className="w-full md:w-1/2 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 flex flex-col gap-4 border-t-4 border-[var(--accent)]"
          >
            <h4 className="text-xl font-bold mb-2 text-blue-900 dark:text-yellow-400">أرسل رسالة مباشرة</h4>
            <input
              type="text"
              name="name"
              required
              placeholder="الاسم الكامل"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-gray-50 dark:bg-gray-900 text-right"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="البريد الإلكتروني"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-gray-50 dark:bg-gray-900 text-right"
            />
            <textarea
              name="message"
              required
              placeholder="اكتب رسالتك هنا..."
              rows={5}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-gray-50 dark:bg-gray-900 text-right"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--accent)] text-white font-bold py-3 rounded-lg shadow hover:bg-yellow-700 transition"
            >
              إرسال
            </button>
          </form>
          {/* Map View and Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-0">
            <h1 className="text-2xl font-bold mb-4 text-blue-900 dark:text-yellow-400">موقع المكتب على الخريطة</h1>
            <iframe
              title="موقع المكتب على الخريطة"
              src="https://www.google.com/maps?q=31.201964,29.909026&z=17&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1rem', maxWidth: '600px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Contact Info Below Map */}
            <ul className="mt-6 text-lg space-y-2 flex flex-col items-center w-full">
              <li className="flex flex-row-reverse items-center gap-2">
                <FaPhoneAlt className="text-[var(--accent)]" />
                <a href="tel:01024920913" className="text-blue-700 dark:text-yellow-300 hover:underline">٠١٠٢٤٩٢٠٩١٣</a>
                <span>-</span>
                <a href="tel:01285815568" className="text-blue-700 dark:text-yellow-300 hover:underline">٠١٢٨٥٨١٥٥٦٨</a>
              </li>
              <li className="flex flex-row-reverse items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:MuhammadAbusree.lawfirm@gmail.com" className="text-blue-700 dark:text-yellow-300 hover:underline">MuhammadAbusree.lawfirm@gmail.com</a>
              </li>
              <li className="flex flex-row-reverse items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-blue-700 dark:text-yellow-300">١٣ شارع الشهداء - محطة الرمل - الاسكندرية</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+201285815568"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex flex-row-reverse items-center gap-2 bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-green-700 dark:hover:bg-green-800 transition text-lg"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
      >
        <FaWhatsapp className="text-2xl" />
        تواصل عبر واتساب
      </a>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        &copy; {new Date().getFullYear()} أ. محمد السيد ابو سريع للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
