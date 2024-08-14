import React from 'react'

const VendorManagment = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
    {/* Header Section */}
    <header className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Vendor Management Overview</h1>
      <p className="text-lg text-gray-700">
        Effective vendor risk management is critical for safeguarding against potential risks that could impact financial stability, reputation, and compliance. This document outlines the vendor classification, risk management practices, due diligence requirements, and more.
      </p>
    </header>

    {/* Vendor Rankings Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Vendor Rankings</h2>
      <p className="text-lg text-gray-700 mb-4">
        Vendors are classified based on their criticality and impact on our operations. Here’s a breakdown:
      </p>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">1. Strategic</h3>
          <p className="text-gray-600">
            Typically represent about 6-10 vendors. They provide profitability and growth and collaborate to innovate processes, products, and services.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">2. Preferred</h3>
          <p className="text-gray-600">
            Provide services vital to our business. Business unit owners must monitor these vendors closely.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">3. Tactical</h3>
          <p className="text-gray-600">
            Contracts have minimal impact on the company and may be short-term but could involve high spending.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">4. Commodity</h3>
          <p className="text-gray-600">
            Easy to replace and not critical to our operations, service levels, or customer service.
          </p>
        </div>
      </div>
    </section>

    {/* Risk Management & Mitigation Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Vendor Risk Management & Mitigation</h2>
      <p className="text-lg text-gray-700 mb-4">
        Risk management is a priority for all vendor relationships to prevent financial loss, reputational damage, and legal issues.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>Compliance Risk:</strong> Adherence to operational and information security policies and regulations.</li>
        <li><strong>Country Risk:</strong> Political, economic, and social risks from foreign countries affecting vendor services.</li>
        <li><strong>Environmental, Social, and Governance Risk:</strong> Impacts related to climate change, environmental practices, and human rights.</li>
        <li><strong>Financial Risk:</strong> Risks associated with the vendor’s financial condition.</li>
        <li><strong>Operational Risk:</strong> Failures in internal controls related to people, processes, or methods.</li>
        <li><strong>Reputation Risk:</strong> Data breaches, unethical practices, and other negative perceptions.</li>
        <li><strong>Strategic Risk:</strong> Failure to achieve planned business objectives.</li>
        <li><strong>Technology Risk:</strong> Issues related to IT governance, security, and resources.</li>
      </ul>
    </section>

    {/* Risk Mitigation Controls Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Risk Mitigation Controls</h2>
      <p className="text-lg text-gray-700 mb-4">
        Various controls are in place to mitigate risks:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>VMO:</strong> Identifies, assesses, and mitigates risks and implements controls.</li>
        <li><strong>Corporate Departments:</strong> Specialists review risk management and compliance.</li>
        <li><strong>Internal Audit:</strong> Evaluates risk management activities and internal controls.</li>
      </ul>
    </section>

    {/* Due Diligence & Documentation Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Due Diligence & Required Documentation</h2>
      <p className="text-lg text-gray-700 mb-4">
        Vendors must provide various documents as part of due diligence:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>Qualifications and Company Background:</strong> Business history, market share, and background checks.</li>
        <li><strong>Ownership and Licenses:</strong> Contact information, business, and patent licenses.</li>
        <li><strong>Tax Forms:</strong> IRS and accounting forms.</li>
        <li><strong>Financial Reports:</strong> Banking, investment, and income statements.</li>
        <li><strong>Assessment of Information Security:</strong> Verification of application standards like SOC reporting.</li>
        <li><strong>Information Security:</strong> Descriptions and verification of data protection.</li>
        <li><strong>Risk Management and Assessment Plans:</strong> Controls to lower risk and ongoing assessments.</li>
        <li><strong>Business Continuity Plan:</strong> Plan for continuing operations and supporting the institution during disasters.</li>
        <li><strong>Incident Response Plan:</strong> Methods for preventing, detecting, or recovering from cyber incidents.</li>
        <li><strong>Insurance Coverage:</strong> Adequate coverage for potential losses.</li>
        <li><strong>Subcontractor Controls:</strong> Plans governing subcontractors’ performance and compliance.</li>
      </ul>
    </section>

    {/* Vendor Selection Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Vendor Selection</h2>
      <p className="text-lg text-gray-700 mb-4">
        The vendor selection process involves:
      </p>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Procure</h3>
          <p className="text-gray-600">
            New vendors are sourced through competitive bidding from at least three sources.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Planning</h3>
          <p className="text-gray-600">
            Develop requirements, clarify performance expectations, and identify risks.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Solicitation</h3>
          <p className="text-gray-600">
            Notify qualified vendors through RFQs, RFPs, or RFIs, detailing objectives, scope, and performance criteria.
          </p>
        </div>
      </div>
    </section>

    {/* Contracting Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contracting</h2>
      <p className="text-lg text-gray-700 mb-4">
        Contract activities include:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>Contract:</strong> Specifies terms, conditions, responsibilities, and liabilities.</li>
        <li><strong>Contract Administration:</strong> Managed in a cloud-based system with restricted access.</li>
        <li><strong>Expiration, Modification, and Renewal:</strong> Contracts flagged for review as they approach expiration.</li>
        <li><strong>Termination:</strong> Occurs at contract expiration, fulfillment, or default.</li>
      </ul>
    </section>

    {/* Legal Review, Confidentiality & Non-Disclosure Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Legal Review, Confidentiality & Non-Disclosure</h2>
      <p className="text-lg text-gray-700 mb-4">
        Vendor contracts include:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>Scope:</strong> Specifics of the arrangement and authorized activities.</li>
        <li><strong>Responsibilities:</strong> Obligations of ABC Insurers, Inc., the vendor, and subcontractors.</li>
        <li><strong>Service Level Agreements (SLA):</strong> Expectations and performance standards.</li>
        <li><strong>Reporting:</strong> Requirements for performance reports.</li>
        <li><strong>Ownership:</strong> Control and access to records and servicing rights.</li>
        <li><strong>Confidentiality and Non-disclosure:</strong> Maintaining strict confidence.</li>
        <li><strong>Audits:</strong> Rights and requirements for vendor audits.</li>
        <li><strong>Business Resumption or Contingency Planning:</strong> Continuity and contingency plans.</li>
        <li><strong>Insurance Coverage:</strong> Details on required insurance coverage.</li>
        <li><strong>Customer Complaints and Service:</strong> Handling service issues.</li>
        <li><strong>Compliance with Regulatory Requirements:</strong> Adherence to regulations.</li>
        <li><strong>Penalties:</strong> Financial penalties for performance failures.</li>
        <li><strong>Dispute Resolution:</strong> Handling disputes, including arbitration or mediation.</li>
        <li><strong>Default, Termination, and Escape Clauses:</strong> Terms for ending the contract.</li>
      </ul>
    </section>

    {/* Monitoring Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Monitoring</h2>
      <p className="text-lg text-gray-700 mb-4">
        Ongoing monitoring includes:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>Spend:</strong> Reviewing spending levels and data-driven reports.</li>
        <li><strong>Performance:</strong> Developing performance audit programs to assess compliance.</li>
        <li><strong>Risk:</strong> Continuous monitoring for various risk factors.</li>
      </ul>
    </section>

    {/* Reporting Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Reporting</h2>
      <p className="text-lg text-gray-700 mb-4">
        Reporting types include:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>On-Demand Reports:</strong> Ad hoc reports for fraud or compliance concerns.</li>
        <li><strong>Executive Committee Reviews:</strong> Quarterly and yearly reports at the group level.</li>
        <li><strong>Oversight Committee:</strong> Monthly accounting, risk, and performance reports.</li>
        <li><strong>Technology Reviews:</strong> IT vendor reviews conducted by the CIO or designated managers.</li>
      </ul>
    </section>

    {/* Disciplinary Action & Termination Section */}
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Disciplinary Action & Termination</h2>
      <p className="text-lg text-gray-700 mb-4">
        Actions taken for non-compliance include:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><strong>Oral Reprimand:</strong> Initial discussion to address issues.</li>
        <li><strong>Written Reprimand:</strong> Formal written notice and a timeframe for resolution.</li>
        <li><strong>Arbitration:</strong> Disputes resolved through arbitration as per the contract.</li>
        <li><strong>Termination:</strong> Ending the contract if compliance issues persist.</li>
        <li><strong>Re-Installment:</strong> Vendors may apply for reinstatement after meeting standards.</li>
      </ul>
    </section>

    {/* Disclaimer Section */}
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
      <p className="text-lg text-gray-700">
        Any articles, templates, or information provided by Smartsheet on the website are for reference only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, articles, templates, or related graphics contained on the website. Any reliance you place on such information is therefore strictly at your own risk.
      </p>
    </section>
  </div>
  )
}

export default VendorManagment;
