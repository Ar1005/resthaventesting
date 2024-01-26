import { Metadata } from "next";
import React from "react";

const teamMembers = [
  {
    name: "David Shipper, Owner",
    description:
      "David Shipper, a third-generation cemetery owner with 35+ years of experience, is internationally renowned for leading the Indiana Memorial Group, comprising 10 cemeteries and funeral homes in Indiana. As the former Vice President of Corporate Development at The Loewen Group, Inc., he played a key role in acquiring 450+ locations. Inducted into the ICCFA Hall of Fame in 2014, David served as President of the International Cemetery, Cremation, and Funeral Association, overseeing a 6,000-member organization across 23 countries.",
    contact: "ds@djshipper.com",
  },
  {
    name: "Carrie Phelps, Director of Marketing",
    description:
      "Carrie Phelps, with a three-decade background in PR and marketing, joined IMG in 2005. She leads marketing efforts, manages websites, and coordinates events. A 1986 Indiana University graduate, Carrie holds BA degrees in Journalism and Criminal Justice.",
    contact: "cphelps@indianamemorialgroup.com",
  },
  {
    name: "Chris Lyon, Controller",
    description:
      "Chris Lyon, with a background in Fortune 100 finance, joined Indiana Memorial Group in 2009. He spearheaded significant revenue growth from $700M to over $3B. As the current financial overseer, he manages all aspects, holding a CPA in Michigan and a Bachelor's in Accounting from Michigan State University.",
    contact: "clyon@indianamemorialgroup.com",
  },
  {
    name: "Erin Gavaghan, Director of Administration",
    description:
      "Erin Gavaghan joined Futura Group in March 2001 and manages Indiana Memorial Group’s multi-location administration team. She is a 2011 graduate of LaSalle University (Philadelphia, PA) with a B.A. in Business and Organizational Dynamics, and went on to earn a Master of Science degree in Science in Human Capital Development (2013).",
    contact: "egavaghan@futuragroup.com",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description: "Made by Armand",
};

const Page = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="min-h-screen hidden md:flex justify-start items-center flex flex-col  bg-neutral-100">
        <div className="flex flex-col items-center pt-10 gap-y-10 w-[1400px]">
          <span className="text-5xl font-bold ">Our Team</span>
          <span className="text-xl">
            Rest Haven Memorial Park is home to team members committed to
            providing excellent care for our families. If you’re interested in
            joining us, check out{" "}
            <a
              href="/Who-We-Are/Career"
              className="text-[#648f77] hover:font-bold"
            >
              Careers at Rest Haven
            </a>
            .
          </span>
        </div>
        <div className="flex flex-col items-start pt-10 gap-y-10 w-[1400px]">
          <span className="text-4xl">Management Team</span>
          <div className="flex gap-x-8">
            <div className="flex flex-col w-[700px]">
              <span className="font-semibold text-md pb-4">
                David Shipper, Owner
              </span>
              <div className="gap-y-6 flex flex-col">
                <span className="text-md">
                  David Shipper is a third generation cemetery owner who has
                  been involved for more than 35 years in owning and managing
                  funeral homes and cemeteries. Internationally known for his
                  expertise in the industry, he has served as President of the
                  International Cemetery, Cremation and Funeral Association
                  (www.iccfa.org)—a 6,000 member organization with members in 23
                  countries and was inducted into the ICCFA Hall of Fame in
                  2014.
                </span>
                <span className="text-md">
                  David owns and operates the Indiana Memorial Group, which
                  currently is comprised of 10 cemeteries and funeral homes in
                  Indiana. David’s previous experience includes Vice President
                  of corporate development for The Loewen Group, Inc., a
                  multi-national, publicly traded funeral and cemetery
                  corporation. While at Loewen, David led cemetery and
                  combination acquisition activities and was involved in the
                  purchase of over 450 locations.
                </span>
                <span className="text-md">
                  Contact David:{" "}
                  <a
                    className="text-[#648f77] hover:font-semibold"
                    href="mailto:ds@djshipper.com?subject=Graceland%20Website%20Message"
                  >
                    ds@djshipper.com
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[700px]">
              <span className="font-semibold text-md pb-4">
                Carrie Phelps, Director of Marketing
              </span>
              <div className="gap-y-6 flex flex-col">
                <span className="text-md">
                  Carrie Phelps joined IMG in 2005. She has three decades of
                  public relations, marketing, and strategic planning
                  experience. For IMG, Carrie is responsible for marketing and
                  sales support activities, such as advertising campaigns and
                  creating materials for both television and print, such as our
                  Living Will Kit and Personal Planning Organizer.
                </span>
                <span className="text-md">
                  She is responsible for maintaining IMG websites as well as
                  continuing a Facebook and social media presence. Additionally,
                  she works with the locations to plan and implement events such
                  as our Christmas, Memorial Day, Veterans and other programs.
                </span>
                <span className="text-md">
                  A 1986 graduate of Indiana University at Bloomington, Carrie
                  holds BA degrees in both Journalism and Criminal Justice and
                  has earned awards for media, public, and community relations
                  campaigns and projects.
                </span>
                <span className="text-md">
                  Contact Carrie:{" "}
                  <a
                    className="text-[#648f77] hover:font-semibold"
                    href="mailto:cphelps@indianamemorialgroup.com?subject=Graceland%20Website%20Message"
                  >
                    cphelps@indianamemorialgroup.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 pb-10">
            <div className="flex flex-col w-[700px]">
              <span className="font-semibold text-md pb-4">
                Chris Lyon, Controller
              </span>
              <div className="gap-y-6 flex flex-col">
                <span className="text-md">
                  Chris Lyon joined Indiana Memorial Group in 2009 after serving
                  as Assistant Controller for a Fortune 100 company for ten
                  years. During his time there, he led the accounting and
                  financial analysis team through multiple which saw his
                  Division increase revenues from $700M to over $3B.
                </span>
                <span className="text-md">
                  Today, Chris oversees and directs all of the finances for
                  Indiana Memorial Group including cash flows, projections,
                  controls, policies, and audit. Chris is a Certified Public
                  Accountant in the state of Michigan and earned his Bachelor of
                  Accounting degree from Michigan State University.
                </span>
                <span className="text-md">
                  Contact Chris:{" "}
                  <a
                    className="text-[#648f77] hover:font-semibold"
                    href="mailto:clyon@indianamemorialgroup.com?subject=Graceland%20Website%20Message"
                  >
                    clyon@indianamemorialgroup.com
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[700px]">
              <span className="font-semibold text-md pb-4">
                Erin Gavaghan, Director of Administration
              </span>
              <div className="gap-y-6 flex flex-col">
                <span className="text-md">
                  Erin Gavaghan joined Futura Group in March 2001 and manages
                  Indiana Memorial Group’s multi-location administration team.
                  She is a 2011 graduate of LaSalle University (Philadelphia,
                  PA) with a B.A. in Business and Organizational Dynamics, and
                  went on to earn a Master of Science degree in Science in Human
                  Capital Development (2013).
                </span>
                <span className="text-md">
                  Contact Erin:{" "}
                  <a
                    className="text-[#648f77] hover:font-semibold"
                    href="mailto:egavaghan@futuragroup.com?subject=Graceland%20Website%20Message"
                  >
                    egavaghan@futuragroup.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden min-h-screen justify-start items-center flex-col bg-neutral-100">
        <div className="flex flex-col items-center pt-6 gap-y-6 w-full">
          <span className="text-3xl font-bold">Our Team</span>
          <span className="text-lg text-center">
            Rest Haven Memorial Park is home to team members committed to
            providing excellent care for our families. If you’re interested in
            joining us, check out{" "}
            <a
              href="/Who-We-Are/Career"
              className="text-[#648f77] hover:font-bold"
            >
              Careers at Rest Haven
            </a>
            .
          </span>
        </div>
        <div className="flex flex-col items-center text-center py-6 gap-y-6 w-full">
          {/* Management Team */}
          <span className="text-2xl">Management Team</span>
          <div className="flex flex-col">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-semibold text-md pb-2">
                  {member.name}
                </span>
                <div className="gap-y-4 flex flex-col">
                  <span className="text-md">{member.description}</span>
                  <span className="text-md">
                    Contact {member.name.split(",")[0]}:{" "}
                    <a
                      className="text-[#648f77] hover:font-semibold"
                      href={`mailto:${member.contact}?subject=Graceland%20Website%20Message`}
                    >
                      {member.contact}
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
