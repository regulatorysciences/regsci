import React, { useState, useEffect } from 'react';

// Main App Component
export default function IRSGWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">IR</span>
              </div>
              <span className="text-xl font-bold" style={{ color: '#0a1a3f' }}>IRSG</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: 'home', label: 'Home' },
                { key: 'services', label: 'Services' },
                { key: 'regpulse', label: 'RegPulse' },
                { key: 'grp', label: 'GRP' },
                { key: 'tbrexa', label: 'tBrexa' },
                { key: 'about', label: 'About' },
                { key: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.key 
                      ? 'text-orange-500' 
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('contact')}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#f97316' }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {[
                { key: 'home', label: 'Home' },
                { key: 'services', label: 'Services' },
                { key: 'regpulse', label: 'RegPulse' },
                { key: 'grp', label: 'GRP' },
                { key: 'tbrexa', label: 'tBrexa' },
                { key: 'about', label: 'About' },
                { key: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'services' && <ServicesPage navigate={navigate} />}
        {currentPage === 'regpulse' && <RegPulsePage />}
        {currentPage === 'grp' && <GRPPage navigate={navigate} />}
        {currentPage === 'tbrexa' && <TBrexaPage />}
        {currentPage === 'about' && <AboutPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0a1a3f' }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">IR</span>
                </div>
                <span className="text-xl font-bold">IRSG</span>
              </div>
              <p className="text-gray-400 text-sm">
                Modernizing global regulatory affairs through expert consulting, AI-powered intelligence, and education.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate('services')} className="hover:text-orange-400 transition-colors">Regulatory Strategy</button></li>
                <li><button onClick={() => navigate('services')} className="hover:text-orange-400 transition-colors">Clinical Development</button></li>
                <li><button onClick={() => navigate('services')} className="hover:text-orange-400 transition-colors">CMC & Quality</button></li>
                <li><button onClick={() => navigate('grp')} className="hover:text-orange-400 transition-colors">GRP Training</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate('regpulse')} className="hover:text-orange-400 transition-colors">RegPulse AI</button></li>
                <li><button onClick={() => navigate('tbrexa')} className="hover:text-orange-400 transition-colors">tBrexa Bio</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>regulatory@regsci.com</li>
                <li><button onClick={() => navigate('contact')} className="hover:text-orange-400 transition-colors">Schedule Consultation</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Innovative Regulatory Science Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Home Page Component
function HomePage({ navigate }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#f5f7fa' }}>
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: '#1e3a8a' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#f97316' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: '#1e3a8a' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: '#1b1f24' }}>
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Innovative</span>
              {' '}Regulatory{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Science</span>
              {' '}Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Modernizing global regulatory affairs through expert consulting, AI-powered intelligence, and education.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              style={{ backgroundColor: '#f97316' }}
            >
              Work With Us
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0a1a3f' }}>
              Comprehensive Regulatory Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From strategy to submission, we provide end-to-end regulatory support powered by decades of FDA experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Regulatory Strategy */}
            <div 
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#1e3a8a' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1a3f' }}>Regulatory Strategy</h3>
              <p className="text-gray-600">
                Expert guidance on global regulatory pathways, risk mitigation, and accelerated approval strategies.
              </p>
              <button onClick={() => navigate('services')} className="mt-4 text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Learn more →
              </button>
            </div>

            {/* RegPulse AI Platform */}
            <div 
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#f97316' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1a3f' }}>RegPulse AI Platform</h3>
              <p className="text-gray-600">
                AI-powered regulatory intelligence dashboard delivering real-time insights and compliance monitoring.
              </p>
              <button onClick={() => navigate('regpulse')} className="mt-4 text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Explore platform →
              </button>
            </div>

            {/* GRP Training */}
            <div 
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#1e3a8a' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1a3f' }}>GRP Training</h3>
              <p className="text-gray-600">
                Comprehensive Good Regulatory Practices training programs for professionals at all levels.
              </p>
              <button onClick={() => navigate('grp')} className="mt-4 text-orange-500 font-medium hover:text-orange-600 transition-colors">
                View programs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RegPulse Callout */}
      <section className="py-24" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)', color: '#f97316' }}>
                AI-Powered Intelligence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Introducing RegPulse
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our proprietary Global Regulatory Intelligence Dashboard harnesses the power of artificial intelligence to deliver real-time regulatory updates, compliance insights, and strategic recommendations tailored to your therapeutic areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://regpulse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: '#f97316' }}
                >
                  Visit RegPulse.com
                </a>
                <button
                  onClick={() => navigate('regpulse')}
                  className="px-6 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for RegPulse dashboard image */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">RegPulse Dashboard</p>
                  <p className="text-gray-400 text-sm mt-2">[Image Placeholder]</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#f97316' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: '#1e3a8a' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years FDA Experience' },
              { number: '50+', label: 'INDs Filed' },
              { number: '100+', label: 'Regulatory Submissions' },
              { number: '30+', label: 'Global Markets' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#f97316' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
            Ready to Accelerate Your Regulatory Strategy?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Let's discuss how IRSG can help you navigate the complex regulatory landscape and bring your products to market faster.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#f97316' }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

// Services Page Component
function ServicesPage({ navigate }) {
  const services = [
    {
      title: 'Regulatory Strategy',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: `Our regulatory strategy services are designed to optimize your path to market approval while minimizing risk and maximizing efficiency. With over 25 years of FDA experience, we provide comprehensive guidance on regulatory pathway selection, helping you determine whether traditional 505(b)(1), 505(b)(2), or biosimilar pathways best suit your product profile and business objectives.

      We specialize in developing robust regulatory strategies for complex therapeutics, including orphan drugs, breakthrough therapies, and advanced therapy medicinal products (ATMPs). Our team conducts thorough competitive landscape analyses and regulatory precedent reviews to identify opportunities for expedited pathways such as Fast Track, Breakthrough Therapy, Accelerated Approval, and Priority Review designations.

      Our strategic planning extends to global regulatory harmonization, ensuring your development program generates data packages that satisfy requirements across FDA, EMA, PMDA, NMPA, and other major regulatory authorities. We help you navigate the complexities of pediatric study requirements, patent exclusivity considerations, and post-market commitments to build a comprehensive regulatory strategy that supports both near-term approval goals and long-term commercial success.`
    },
    {
      title: 'Clinical Development',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: `IRSG provides end-to-end clinical development support that bridges the gap between early discovery and successful market authorization. Our clinical development consulting begins with translational medicine strategies, helping you design first-in-human studies that generate meaningful safety and efficacy signals while establishing proof-of-concept for your therapeutic approach.

      We offer comprehensive IND preparation services, having successfully filed over 50 Investigational New Drug applications across diverse therapeutic areas including oncology, rare diseases, neurology, immunology, and infectious diseases. Our team prepares complete IND packages including Module 2 summaries, nonclinical study reports, CMC documentation, and clinical protocols that withstand FDA scrutiny and minimize clinical hold risks.

      Our clinical development expertise extends to study design optimization, endpoint selection, biomarker strategy development, and adaptive trial design implementation. We work closely with your clinical operations teams to ensure protocols are scientifically rigorous yet operationally feasible, incorporating learnings from FDA guidance documents, advisory committee discussions, and recent approval precedents. We also provide ongoing support for FDA meetings, including Pre-IND, End-of-Phase 2, and Pre-BLA/NDA meetings, preparing comprehensive briefing documents and coaching your team for productive agency interactions.`
    },
    {
      title: 'CMC & Quality',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      description: `Our Chemistry, Manufacturing, and Controls (CMC) consulting services address the critical quality and manufacturing aspects of drug development that are essential for regulatory approval. We provide strategic guidance on analytical method development and validation, stability program design, and specification setting that meets ICH guidelines and regional requirements.

      For biological products, we offer specialized expertise in cell line development documentation, upstream and downstream process characterization, viral clearance validation, and comparability protocols for manufacturing changes. Our team has extensive experience with complex modalities including monoclonal antibodies, fusion proteins, gene therapies, and cell-based products, understanding the unique CMC challenges each presents.

      We assist in developing comprehensive CMC regulatory strategies that anticipate FDA questions and address them proactively through robust data packages. This includes preparation of Module 3 documentation for BLA and NDA submissions, response to CMC-related FDA queries, and support for pre-approval inspections. We also provide ongoing support for post-approval changes, helping you navigate the appropriate regulatory pathways for manufacturing modifications while maintaining compliance with current Good Manufacturing Practice (cGMP) requirements.`
    },
    {
      title: 'Regulatory Training / GRP',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: `Good Regulatory Practices (GRP) form the foundation of effective regulatory affairs operations, and IRSG offers comprehensive training programs designed to elevate the capabilities of regulatory professionals at all career stages. Our training curriculum is developed and delivered by experienced regulatory leaders with direct FDA and industry experience, ensuring content is both theoretically sound and practically applicable.

      Our GRP training programs cover essential competencies including regulatory intelligence gathering and analysis, submission planning and lifecycle management, regulatory writing excellence, and effective health authority communications. We offer both foundational courses for professionals new to regulatory affairs and advanced modules for experienced practitioners seeking to deepen their expertise in specialized areas such as pediatric regulations, orphan drug development, or combination product requirements.

      Training delivery options include customized on-site corporate training programs tailored to your organization's specific therapeutic focus and development portfolio, as well as open-enrollment workshops and webinar series. All programs incorporate case studies, practical exercises, and interactive discussions that translate regulatory concepts into actionable skills. Our training services also extend to organizational capability assessments and regulatory operations optimization consulting, helping companies build internal regulatory capabilities that support sustainable growth and operational excellence.`
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive regulatory consulting services designed to accelerate your path to market while ensuring compliance and minimizing risk.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="sticky top-24">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: index % 2 === 0 ? '#1e3a8a' : '#f97316' }}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: '#0a1a3f' }}>
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    {service.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-6">{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Regulatory Support?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Let's discuss how our services can accelerate your regulatory success.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#f97316' }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

// RegPulse Page Component
function RegPulsePage() {
  const features = [
    {
      title: 'Real-Time Regulatory Monitoring',
      description: 'Automated tracking of FDA, EMA, and global regulatory updates relevant to your therapeutic areas.'
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms that analyze regulatory patterns and predict approval trends.'
    },
    {
      title: 'Customized Dashboards',
      description: 'Personalized views filtered by indication, modality, regulatory pathway, and geographic region.'
    },
    {
      title: 'Competitive Intelligence',
      description: 'Track competitor regulatory activities, approval milestones, and strategic moves.'
    },
    {
      title: 'Alert System',
      description: 'Instant notifications for critical regulatory changes affecting your development programs.'
    },
    {
      title: 'Regulatory Calendar',
      description: 'Comprehensive timeline of PDUFA dates, advisory committees, and submission deadlines.'
    }
  ];

  const audiences = [
    'Regulatory Affairs Professionals',
    'Clinical Development Teams',
    'Business Development & Strategy',
    'Executive Leadership',
    'Investors & Analysts',
    'Academic Researchers'
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#f97316' }}></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: '#1e3a8a' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)', color: '#f97316' }}>
              AI-Powered Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              RegPulse
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The Global Regulatory Intelligence Dashboard that transforms how organizations monitor, analyze, and respond to regulatory developments worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://regpulse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#f97316' }}
              >
                Visit RegPulse.com
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-center font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is RegPulse */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
                What is RegPulse?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                RegPulse is IRSG's proprietary Global Regulatory Intelligence Dashboard, designed to provide pharmaceutical, biotechnology, and medical device companies with unprecedented visibility into the regulatory landscape.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Leveraging advanced artificial intelligence and natural language processing, RegPulse continuously monitors regulatory agencies worldwide, extracts actionable insights from thousands of documents, and delivers customized intelligence directly to your team.
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for platform screenshot */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                  <p className="text-gray-500">[Platform Screenshot]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#0a1a3f' }}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1e3a8a' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0a1a3f' }}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
                Who RegPulse Serves
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                RegPulse delivers value across your entire organization, from front-line regulatory professionals to C-suite executives making strategic decisions.
              </p>
              <ul className="space-y-4">
                {audiences.map((audience, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#f97316' }}></div>
                    <span className="text-gray-700">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">[Image {i}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Power of RegPulse
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            See how AI-driven regulatory intelligence can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://regpulse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#f97316' }}
            >
              Visit RegPulse.com
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// GRP Page Component
function GRPPage({ navigate }) {
  const audiences = [
    {
      title: 'Entry-Level Professionals',
      description: 'Build foundational knowledge in regulatory affairs principles and practices.'
    },
    {
      title: 'Mid-Career Specialists',
      description: 'Deepen expertise in specialized regulatory areas and leadership skills.'
    },
    {
      title: 'Senior Leaders',
      description: 'Strategic regulatory thinking and organizational capability building.'
    },
    {
      title: 'Cross-Functional Teams',
      description: 'Understanding regulatory requirements for R&D, clinical, and commercial teams.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
              Good Regulatory Practices
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive training programs designed to elevate regulatory capabilities across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
                What is GRP?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Good Regulatory Practices (GRP) encompass the principles, standards, and competencies that define excellence in regulatory affairs. At IRSG, our GRP training programs translate decades of FDA and industry experience into practical knowledge that professionals can apply immediately.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our curriculum covers the full spectrum of regulatory affairs, from foundational concepts for those entering the field to advanced strategic topics for experienced leaders seeking to sharpen their expertise.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                All training content is developed and delivered by regulatory professionals with hands-on experience at FDA and leading pharmaceutical companies, ensuring relevance and practical applicability.
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for training image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-gray-500">[Training Image]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#0a1a3f' }}>
            Who GRP Training Serves
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1e3a8a' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0a1a3f' }}>{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Coming Soon */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
              Training Modules
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              We're developing comprehensive online training modules that will be available soon. Sign up to be notified when they launch.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Regulatory Fundamentals',
                'IND/NDA Preparation',
                'Global Submissions',
                'Regulatory Writing',
                'FDA Meetings',
                'Post-Market Compliance'
              ].map((module, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <span className="text-gray-500">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Custom Training?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            We offer customized corporate training programs tailored to your team's specific needs and therapeutic focus.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#f97316' }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

// tBrexa Page Component
function TBrexaPage() {
  const capabilities = [
    'Cell Line Development',
    'Upstream Process Development',
    'Downstream Purification',
    'Analytical Development',
    'Formulation Development',
    'GMP Manufacturing',
    'Quality Control & QA',
    'Regulatory Documentation'
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
              tBrexa Bio Partnership
            </h1>
            <p className="text-xl text-gray-600">
              Integrated regulatory strategy and biologics manufacturing through our strategic partnership with tBrexa Bio.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
                Strategic Partnership
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                IRSG has established a strategic partnership with tBrexa Bio, a certified woman and minority-owned Contract Development and Manufacturing Organization (CDMO) specializing in biologics manufacturing.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                This partnership creates a unique value proposition for biotechnology companies: integrated regulatory strategy and CMC development under unified leadership, ensuring alignment between your regulatory pathway and manufacturing approach from the earliest stages of development.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Together, we offer a Regulatory-Focused Development Partner approach that differentiates from traditional CDMO relationships by building regulatory considerations into every manufacturing decision.
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for tBrexa image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold" style={{ color: '#0a1a3f' }}>tB</span>
                  </div>
                  <p className="text-white font-medium">tBrexa Bio</p>
                  <p className="text-gray-400 text-sm mt-2">[Logo/Image Placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CDMO Capabilities */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#0a1a3f' }}>
            CDMO Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex items-center">
                <div className="w-3 h-3 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: '#f97316' }}></div>
                <span className="text-gray-700 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Unified Strategy',
                description: 'Regulatory and manufacturing strategy developed in parallel, not in silos.'
              },
              {
                title: 'Accelerated Timeline',
                description: 'Streamlined decision-making and reduced coordination overhead.'
              },
              {
                title: 'Risk Mitigation',
                description: 'Early identification of CMC issues that could impact regulatory approval.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#1e3a8a' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1a3f' }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Learn More About tBrexa Bio
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Discover how our integrated regulatory and manufacturing approach can accelerate your biologics development.
          </p>
          <a
            href="https://tbrexabio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#f97316' }}
          >
            Visit tBrexaBio.com
          </a>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function AboutPage({ navigate }) {
  const expertise = [
    '25+ Years FDA Experience',
    '50+ INDs Filed',
    '100+ Regulatory Submissions',
    'Orphan Drug Designations',
    'Breakthrough Therapy Designations',
    'Global Regulatory Strategy',
    'Rare Disease Expertise',
    'Biologics & Small Molecules'
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
              About IRSG
            </h1>
            <p className="text-xl text-gray-600">
              Led by regulatory experts with decades of FDA and industry experience, delivering strategic guidance that accelerates your path to patients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              {/* Placeholder for headshot */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100 shadow-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-gray-500 mt-4">[Headshot]</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold" style={{ color: '#0a1a3f' }}>Dr. Leona Saunders</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
                Leadership
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Dr. Leona Saunders brings over 25 years of FDA regulatory experience to her role as Founder and CEO of the Innovative Regulatory Science Group. Her career spans senior regulatory positions at leading pharmaceutical and biotechnology companies, where she has guided hundreds of regulatory submissions across diverse therapeutic areas including rare diseases, oncology, neurology, and immunology.
                </p>
                <p>
                  Dr. Saunders holds a Doctorate in Law and Public Policy, a Master of Public Health (MPH) in Epidemiology and Biostatistics, and a Master of Science (M.Sc.) in Regulatory Affairs. This unique combination of legal, scientific, and regulatory expertise enables her to navigate complex regulatory challenges with both strategic depth and practical precision.
                </p>
                <p>
                  In addition to leading IRSG, Dr. Saunders serves as adjunct faculty at Northeastern University, where she teaches regulatory strategy for product development. She is also the Founder and CEO of tBrexa Bio, a certified woman and minority-owned CDMO focused on biologics manufacturing.
                </p>
                <p>
                  Throughout her career, Dr. Saunders has successfully filed over 50 INDs, secured multiple Orphan Drug and Breakthrough Therapy designations, and led regulatory strategies for products that have achieved market authorization in the United States, European Union, and other major markets worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" style={{ backgroundColor: '#0a1a3f' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To modernize global regulatory affairs by combining deep FDA expertise with innovative AI-powered intelligence, enabling biotechnology companies to navigate regulatory complexity and bring transformative therapies to patients faster.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#0a1a3f' }}>
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center">
                <div className="w-3 h-3 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: '#f97316' }}></div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Let's discuss how IRSG can support your regulatory strategy and accelerate your path to market.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#f97316' }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectStage: '',
    services: [],
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry! We will be in touch within 24 hours.');
  };

  const handleCheckbox = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0a1a3f' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your regulatory needs and let's explore how we can help accelerate your path to market.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Form */}
            <div className="md:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-8" style={{ color: '#0a1a3f' }}>
                  Tell Us About Your Project
                </h2>
                
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="e.g., VP Regulatory Affairs"
                      />
                    </div>
                  </div>

                  {/* Project Stage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Development Stage
                    </label>
                    <select
                      value={formData.projectStage}
                      onChange={(e) => setFormData({...formData, projectStage: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select stage...</option>
                      <option value="preclinical">Preclinical</option>
                      <option value="ind-prep">IND Preparation</option>
                      <option value="phase1">Phase 1</option>
                      <option value="phase2">Phase 2</option>
                      <option value="phase3">Phase 3</option>
                      <option value="nda-bla">NDA/BLA Preparation</option>
                      <option value="post-market">Post-Market</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Services of Interest
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Regulatory Strategy',
                        'IND/NDA/BLA Support',
                        'CMC Consulting',
                        'Clinical Development',
                        'RegPulse Platform',
                        'GRP Training',
                        'FDA Meeting Prep',
                        'Other'
                      ].map((service) => (
                        <label key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleCheckbox(service)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us More *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Describe your regulatory needs, challenges, or questions..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#f97316' }}
                  >
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Email */}
                <div className="p-6 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1e3a8a' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#0a1a3f' }}>Email Us</h3>
                  <a href="mailto:regulatory@regsci.com" className="text-orange-500 hover:text-orange-600 transition-colors">
                    regulatory@regsci.com
                  </a>
                </div>

                {/* Schedule */}
                <div className="p-6 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#f97316' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#0a1a3f' }}>Schedule a Call</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Book a 30-minute consultation to discuss your regulatory needs.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  >
                    View Calendar →
                  </a>
                </div>

                {/* Response Time */}
                <div className="p-6 rounded-xl border-2 border-dashed border-gray-200">
                  <h3 className="font-bold mb-2" style={{ color: '#0a1a3f' }}>Quick Response</h3>
                  <p className="text-gray-600 text-sm">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
