import React from 'react';

const InvestorProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Investor Overview Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
        <p className="text-lg text-gray-700 mb-4">
          John Doe is a prominent venture capitalist with over 20 years of experience in the investment industry. He is known for his strategic insight and ability to identify high-potential startups in various sectors, including technology, healthcare, and renewable energy.
        </p>
        <p className="text-gray-600 mb-4">
          As the founder and managing partner of Doe Ventures, John has successfully guided numerous companies from early-stage funding to successful exits. His firm is renowned for its hands-on approach, providing not just capital but also valuable mentorship and strategic guidance.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-gray-600">Email: <a href="mailto:johndoe@doeventures.com" className="text-blue-500">johndoe@doeventures.com</a></p>
          <p className="text-gray-600">Phone: (555) 987-6543</p>
          <p className="text-gray-600">LinkedIn: <a href="https://linkedin.com/in/johndoe" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a></p>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Focus</h2>
        <p className="text-lg text-gray-700 mb-4">
          John Doe's investment strategy focuses on identifying and nurturing innovative startups with the potential to disrupt traditional industries. His primary areas of interest include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>**Technology**: Investing in cutting-edge technologies such as artificial intelligence, blockchain, and cybersecurity.</li>
          <li>**Healthcare**: Supporting startups that are developing breakthrough medical technologies and innovative healthcare solutions.</li>
          <li>**Renewable Energy**: Funding ventures that focus on sustainable energy solutions and reducing carbon footprints.</li>
          <li>**Consumer Products**: Backing companies that are creating next-generation consumer products with unique value propositions.</li>
        </ul>
        <p className="text-gray-600">
          John believes in partnering with visionary entrepreneurs who are passionate about making a significant impact in their respective fields. His approach involves thorough due diligence and a commitment to fostering long-term growth.
        </p>
      </section>

      {/* Achievements Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>**Successfully exited**: Guided several startups to successful exits, including an IPO and multiple acquisition deals.</li>
          <li>**Awarded**: Recognized as one of the top venture capitalists in the industry by Venture Capital Journal.</li>
          <li>**Published Author**: Authored numerous articles and papers on investment strategies and entrepreneurship.</li>
          <li>**Speaker**: Regularly speaks at industry conferences and seminars, sharing insights on venture capital and startup growth.</li>
        </ul>
        <p className="text-gray-600">
          John's extensive experience and proven track record make him a respected figure in the investment community. His contributions to the industry continue to shape the future of venture capital.
        </p>
      </section>
    </div>
  );
};

export default InvestorProfile;
