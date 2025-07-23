import Image from "next/image";
import { FaBalanceScale, FaGavel, FaUsers, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans flex flex-col items-stretch transition-colors duration-300">
      {/* Navbar */}
      <nav className="w-full flex items-center px-4 md:px-12 py-0.5 pb-5 z-50 absolute top-0 left-0 bg-white dark:bg-gray-900">
        {/* Contact info vertically centered */}
        <div className="flex flex-row items-center gap-1 md:gap-6 text-sm md:text-base text-gray-800 dark:text-gray-100 w-full justify-center md:justify-end h-full pt-5">
          <span className="flex items-center gap-1 self-center">
            <p className="text-gray-800 dark:text-gray-100">مكتب ٠٣/٤٨٥٦٠٩٥</p>
            <span>-</span>
            <FaPhoneAlt className="text-[var(--accent)]" />
            <a href="tel:01024920913" className="hover:underline">٠١٠٢٤٩٢٠٩١٣</a>
            <span>-</span>
            <a href="tel:01285815568" className="hover:underline">٠١٢٨٥٨١٥٥٦٨</a>
          </span>
        </div>
        {/* Large logo overlapping navbar, right-aligned */}
        <div className="absolute right-4 md:right-12 top-full -translate-y-1/2 z-50 pointer-events-none pt-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center p-[10px]">
            <Image src="/logo.png" alt="Logo" width={160} height={160} className="object-contain w-40 h-40 md:w-35 md:h-35" />
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

      {/* Divider */}
      <div className="w-24 h-1 bg-[var(--accent)] mx-auto my-8 rounded-full" />

      {/* About Section */}
      <section className="py-12 px-4 md:px-24 bg-[var(--bg)] dark:bg-[var(--bg)] flex flex-col items-center text-center gap-y-4 transition-colors duration-300" id="about">
        <h3 className="text-3xl font-bold mb-4 text-blue-900 dark:text-yellow-400">من نحن</h3>
        {/* Owner Info */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-t-4 border-[var(--accent)] max-w-xl w-full flex flex-col items-center text-center">
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
                <img src="/public/static/placeholder-profile.png" alt="عمر عزت عبد الله" className="object-cover w-28 h-28 rounded-tr-[50px] rounded-bl-[50px]" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">الأستاذ عمر عزت عبد الله</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--accent)] w-64">
              <div className="p-2 border-2 border-[var(--accent)] rounded-tr-[60px] rounded-bl-[60px] shadow-md mb-4 w-32 h-32 flex items-center justify-center overflow-hidden">
                {/* Replace src with actual image later */}
                <img src="/public/static/placeholder-profile.png" alt="كريم يوسف التركي" className="object-cover w-28 h-28 rounded-tr-[50px] rounded-bl-[50px]" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">الأستاذ كريم يوسف التركي</span>
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
            <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">القضايا التجارية</h4>
            <p className="text-gray-600 dark:text-gray-300">تقديم الاستشارات القانونية للشركات والمؤسسات وتمثيلها أمام الجهات القضائية.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
            <FaUsers className="text-[var(--accent)] text-3xl mb-3" />
            <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">القضايا الجنائية</h4>
            <p className="text-gray-600 dark:text-gray-300">الدفاع عن المتهمين وتمثيل الضحايا في مختلف القضايا الجنائية.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center h-full border-t-4 border-[var(--accent)] hover:scale-105 transition-transform">
            <FaBalanceScale className="text-[var(--accent)] text-3xl mb-3" />
            <h4 className="text-xl font-semibold mb-2 dark:text-yellow-200">القضايا الأسرية</h4>
            <p className="text-gray-600 dark:text-gray-300">معالجة قضايا الأحوال الشخصية كالطلاق، الحضانة، والنفقة.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 mx-auto my-4 rounded-full" />

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-24 bg-[var(--bg)] dark:bg-[var(--bg)] flex flex-col items-center text-center gap-y-4 transition-colors duration-300" id="contact">
        <h3 className="text-3xl font-bold mb-4 text-blue-900 dark:text-yellow-400">تواصل معنا</h3>
        <p className="mb-4 text-lg text-gray-800 dark:text-gray-200">للاستفسار أو حجز موعد، يرجى التواصل عبر:</p>
        <ul className="mb-6 text-lg space-y-2 flex flex-col items-center">
          <li className="flex flex-row-reverse items-center gap-2"><FaPhoneAlt className="text-[var(--accent)]" /> <a href="tel:01024920913" className="text-blue-700 dark:text-yellow-300 hover:underline">٠١٠٢٤٩٢٠٩١٣</a></li>
          <li className="flex flex-row-reverse items-center gap-2"><FaPhoneAlt className="text-[var(--accent)]" /> <a href="tel:01285815568" className="text-blue-700 dark:text-yellow-300 hover:underline">٠١٢٨٥٨١٥٥٦٨</a></li>
          <li className="flex flex-row-reverse items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> <span className="text-blue-700 dark:text-yellow-300">١٣ شارع الشهداء - محطة الرمل - الاسكندرية</span></li>
        </ul>
        <a href="https://wa.me/+201285815568" target="_blank" rel="noopener noreferrer" className="flex flex-row-reverse items-center gap-2 bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-700 dark:hover:bg-green-800 transition text-lg mx-auto"><FaWhatsapp /> تواصل عبر واتساب</a>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        &copy; {new Date().getFullYear()} أ. محمد السيد ابو سريع للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
