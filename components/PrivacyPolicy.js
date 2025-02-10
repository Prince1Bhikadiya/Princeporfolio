import { useState } from 'react';

const PrivacyPolicy = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy for Prince AI</h1>
      <p>
        Last updated: October 26, 2023
      </p>

      <p>
        This Privacy Policy describes how Prince AI collects, uses, and protects the personal information of users of our AI-powered company assistant.
      </p>

      <h2>Data Collection</h2>
      <p>
        We collect information necessary to provide and improve our services. This includes:
      </p>
      <ul>
        <li>Company details provided by the user.</li>
        <li>User interactions with the AI assistant .</li>
        <li>Usage statistics (frequency of use, features accessed).</li>
        <li>Any data explicitly provided for training or personalization of the AI assistant.</li>
      </ul>

      <h2>Data Usage</h2>
      <p>
        We use the collected information to:
      </p>
      <ul>
        <li>Provide and improve the AI assistant.</li>
        <li>Personalize the user experience.</li>
        <li>Improve our services and products.</li>
        <li>Communicate with users regarding updates and support.</li>
        <li>(Optional) Perform internal analyses to understand usage patterns and service effectiveness.</li>
      </ul>
      
     
       <h2>Data Sharing and Disclosure</h2>
      <p>
      We do not share your data with third parties except where required by law.
      </p>
       <ul>
        <li>We may share data with trusted service providers who assist us in operating our business (e.g., cloud storage providers, payment processors).</li>
        <li>We may disclose data if required to comply with legal process or a valid legal request.</li>
      </ul>
      
     <h2>Data Security</h2>
      <p>
        We employ reasonable security measures to protect the information you provide.
      </p>


      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, and delete your information.  Please contact us to exercise these rights.
      </p>
        <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at support@princeai.com.
      </p>



       {/* Advanced Options (expandable section) */}
      <button onClick={toggleAdvanced}>
        {showAdvanced ? "Hide Advanced Details" : "Show Advanced Details"}
      </button>
      {showAdvanced && (
        <div>
          <h2>Advanced Data Security Measures</h2>
          <p>
            We use encryption protocols to protect data in transit and storage. We employ regular security audits to identify and address vulnerabilities.  Our teams are trained on industry best practices regarding data handling.
          </p>
          {/* Add more detailed information here if needed */}
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
