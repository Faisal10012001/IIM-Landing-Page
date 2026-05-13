export default function LandingPage() { return ( <div className="min-h-screen bg-white text-gray-900 font-sans"> {/* Navbar */} <header className="sticky top-0 z-50 bg-[#0B1F3A] text-white shadow-md"> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> <h1 className="text-2xl font-bold tracking-wide"> IIM Sirmaur MBA </h1>

<button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl transition-all duration-300">
        Apply Now
      </button>
    </div>
  </header>

  {/* Hero Section */}
  <section className="bg-[#0B1F3A] text-white py-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="uppercase tracking-[3px] text-yellow-400 mb-4 font-medium">
          Online MBA in Data Science & AI
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          India's First AI-Native MBA for Working Professionals
        </h2>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Earn an MBA degree from IIM Sirmaur without quitting your job.
          Learn from industry experts with live weekend classes and AI-
          powered specializations.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg">
            Download Brochure
          </button>

          <button className="border border-white hover:bg-white hover:text-[#0B1F3A] px-6 py-3 rounded-2xl font-semibold transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white text-black rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold mb-2">
          Get Free Consultation
        </h3>

        <p className="text-gray-600 mb-6">
          Fill the form and our team will contact you shortly.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="text"
            placeholder="Current Designation"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="text"
            placeholder="Years of Experience"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button className="w-full bg-[#0B1F3A] hover:bg-[#102b52] text-white py-3 rounded-xl font-semibold transition-all duration-300">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#0B1F3A]">
        Program Features
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-14">
        Designed for working professionals who want to upgrade their career
        in AI and business leadership.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold mb-3 text-[#0B1F3A]">
            Live Weekend Classes
          </h3>
          <p className="text-gray-600">
            100% live online sessions every weekend for flexible learning.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold mb-3 text-[#0B1F3A]">
            IIM Alumni Status
          </h3>
          <p className="text-gray-600">
            Become part of the prestigious IIM alumni network.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold mb-3 text-[#0B1F3A]">
            24-Month Duration
          </h3>
          <p className="text-gray-600">
            Includes campus immersion and practical business learning.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold mb-3 text-[#0B1F3A]">
            AI Specializations
          </h3>
          <p className="text-gray-600">
            Finance, Marketing, and Operations powered by AI.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Eligibility Section */}
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div className="bg-[#0B1F3A] text-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6">
          Eligibility Criteria
        </h2>

        <ul className="space-y-4 text-lg">
          <li>✔ Bachelor's Degree with 50%+</li>
          <li>✔ Minimum 2 Years Work Experience</li>
          <li>✔ Suitable for Working Professionals</li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-10 rounded-3xl shadow-xl border border-yellow-200">
        <h2 className="text-3xl font-bold mb-6 text-[#0B1F3A]">
          Important Dates
        </h2>

        <div className="space-y-5 text-lg">
          <div>
            <p className="font-semibold">Application Deadline</p>
            <p className="text-gray-700">31st July 2026</p>
          </div>

          <div>
            <p className="font-semibold">Contact Number</p>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 bg-[#0B1F3A] text-white text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Upgrade Your Career?
      </h2>

      <p className="text-lg text-gray-300 mb-8">
        Join the next generation of AI-powered business leaders with IIM
        Sirmaur Online MBA.
      </p>

      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-2xl text-lg shadow-xl transition-all duration-300">
        Apply Today
      </button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-gray-400 py-8 text-center text-sm px-4">
    <p>
      © 2026 IIM Sirmaur Online MBA. All Rights Reserved.
    </p>
  </footer>
</div>

); }