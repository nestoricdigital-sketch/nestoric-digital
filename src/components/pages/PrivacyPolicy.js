// import heroBg from "./images/privacy_hero.jpg"; // (replace with your image path)

export default function PrivacyPolicy() {
  return (
    <section className="w-full text-gray-800">
      {/* === HERO SECTION === */}
      <div
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url(${heroBg})`,
        // }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-inter  text-slate-800 text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            We Value Your <br />
            <span className="text-indigo-400">Privacy Above All</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Your trust matters. This policy explains what data we collect, why we collect it, 
            and how we keep it safe. By using our services, you agree to this policy.
          </p>
        </div>
      </div>

      {/* === CONTENT SECTION === */}
      {/* <div className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Information We Collect
        </h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          The information available in this advertisement is subject to change without any notice. 
          While every effort has been made to provide the details, particulars, contents, and other 
          graphic appearances in this advertisement as updated, correct, complete, and accurate, 
          nevertheless, inadvertent errors may occur in the information.
        </p>
      </div> */}
       {/* === MAIN CONTENT === */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 space-y-16">
        
        {/* --- SECTION 1: Information We Collect --- */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The information available in this advertisement is subject to change without any notice. 
            While every effort has been made to provide the details, particulars, contents, and other 
            graphic appearances in this advertisement as updated, correct, complete, and accurate, 
            nevertheless, inadvertent errors may occur in the information.
          </p>
        </section>

        {/* --- SECTION 2: Legal Disclaimer (Topic-by-Topic) --- */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Legal Disclaimer
          </h2>

          {/* Topic 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              1. Illustrations and Visual Representations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our website(s) and other advertising material include artists' impressions showing
              anticipated appearances of completed developments. These visuals are for representation 
              purposes only and do not constitute a legal offer, invitation, or commitment.
            </p>
          </div>

          {/* Topic 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              2. Disclaimer of Warranties and Representations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Developer and its associates make no warranties regarding the quality, contents, 
              completeness, suitability, accuracy, or timelines of the information provided. All 
              implied warranties, including merchantability or fitness for a particular purpose, are disclaimed.
            </p>
          </div>

          {/* Topic 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              3. Limitation of Liability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Developer and its authorized representatives shall not be liable for any direct, 
              incidental, or consequential damages arising from the use or reliance upon this information 
              or related materials.
            </p>
          </div>

          {/* Topic 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              4. Accuracy and Legal Responsibility
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No warranty, express or implied, is made regarding the accuracy or completeness of the 
              information contained herein. The Developer assumes no legal responsibility for its use or 
              for potential infringement of third-party rights.
            </p>
          </div>

          {/* Topic 5 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              5. Property Condition (“As-Is” Clause)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Properties are sold on an “as-is” basis, including any existing defects unless otherwise 
              specified in the contract. Buyers are responsible for conducting independent verification 
              to ensure satisfaction before purchase.
            </p>
          </div>

          {/* Topic 6 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              6. Purpose of the Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The information provided is intended to give a general understanding of the subject matter 
              and help users determine whether further, more detailed information is required.
            </p>
          </div>

          {/* Topic 7 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              7. Right to Modify Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Developer reserves the right to modify, delete, or update the information contained 
              here without prior notice, in accordance with prevailing government norms. Terms and Conditions apply.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
