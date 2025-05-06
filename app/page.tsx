import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl font-bold">ReviewScan</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Testimonials
            </a>
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Transform Customer Feedback Into Business Growth
              </h1>
              <p className="text-xl text-gray-600">
                Our QR-based review platform helps businesses collect authentic
                feedback and turn it into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition text-center"
                >
                  Get Started Free
                </a>
                <a
                  href="#demo"
                  className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition text-center"
                >
                  See Demo
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-xl p-2 shadow-lg">
                  <Image
                    src="/dashboard2.png"
                    alt="ReviewScan Dashboard"
                    className="rounded-lg shadow-sm"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg">
                  <Image
                    src="/qr.png"
                    alt="QR Code Example"
                    className="w-24 h-24"
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center m-18">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Businesses Choose ReviewScan
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Simple, effective, and insightful feedback management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  QR-Based Feedback
                </h3>
                <p className="text-gray-600">
                  Customers scan a QR code to leave detailed, category-based
                  reviews in seconds.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Performance Analytics
                </h3>
                <p className="text-gray-600">
                  Interactive dashboards show who&apos;s performing best and
                  where improvements are needed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Actionable Insights
                </h3>
                <p className="text-gray-600">
                  Turn feedback into action with trend analysis and performance
                  comparisons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-12 bg-gray-50 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center m-18">
              <h2 className="text-4xl font-bold text-gray-900">
                How ReviewScan Works
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Simple for customers, powerful for businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Customer Scans QR
                </h3>
                <p className="text-gray-600">
                  Each employee has a unique QR code that customers can scan
                  with their phone.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Rate & Comment</h3>
                <p className="text-gray-600">
                  Customers rate service across multiple categories and leave
                  detailed feedback.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Analyze Results</h3>
                <p className="text-gray-600">
                  Business owners access real-time dashboards to track
                  performance and identify trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="py-12 bg-white px-4 sm:px-6 lg:px-8 mb-18"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center m-18">
              <h2 className="text-4xl font-bold text-gray-900">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Businesses that transformed their customer experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">Restaurant Owner</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &quot;ReviewScan has completely changed how we manage our
                  staff. We can now see exactly who our top performers are and
                  provide targeted coaching to those who need it.&quot;
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">Hotel Manager</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &quot;The insights we get from ReviewScan have helped us
                  improve our customer satisfaction scores by 27% in just three
                  months. The QR code system makes it so easy for guests to
                  leave feedback.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to transform your customer feedback?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses using ReviewScan to improve
              performance and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition text-center"
              >
                Start Your Free Trial
              </a>
              <a
                href="/demo"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition text-center"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ReviewScan</h3>
            <p className="text-gray-400">
              Transforming feedback into business growth since 2023.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2023 ReviewScan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
