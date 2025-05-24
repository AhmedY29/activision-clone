import React from "react";

function CareersFooter() {
  return (
    <footer className="footer-section flex justify-center border-t border-[#0768af] w-full">
      <div className="footer-content flex flex-col gap-3 my-4 w-[78%]">
        <h1 className="font-bold text-xl">Equal Opportunity Employer</h1>
        <p>
          Activision is an Equal Opportunity Employer. All qualified applicants
          will receive consideration for employment without regard to race,
          color, religion, sex, sexual orientation, gender identity, gender
          expression, national origin, protected veteran status, or any other
          basis protected by applicable law, and will not be discriminated
          against on the basis of disability. Equal Employment Opportunity
          Policy{" "}
        </p>
        <p>
          While we strive to provide competitive offers to successful
          candidates, new hire compensation is negotiable.
        </p>
        <h1 className="font-bold text-xl">Accommodation Request</h1>
        <p>
          We are committed to working with and providing reasonable assistance
          to individuals with physical and mental disabilities. If you are a
          disabled individual requiring an accommodation to apply for an open
          position, please email your request to
          accommodationrequests@activisionblizzard.com. General employment
          questions cannot be accepted or processed here. Thank you for your
          interest.
        </p>
        <p>
          This site uses cookies. By continuing to browse the site you are
          agreeing to our use of cookies. Find out more{" "}
          <a href="#" className="underline">
            here
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default CareersFooter;
