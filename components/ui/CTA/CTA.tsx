import GradientWrapper from "@/components/GradientWrapper";
import NavLink from "../NavLink";
import LayoutEffect from "@/components/LayoutEffect";
import ContactForm from "@/components/ContactForm";

interface CTAProps {
  subscriberCount?: number;
}

const CTA = ({ subscriberCount = 12500 }: CTAProps) => (
  <section id="contact" className="relative">
    <GradientWrapper wrapperClassName="max-w-2xl h-[24rem] top-12 inset-0">
      <div className="custom-screen py-24 relative">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6",
          }}
        >
          <div className="relative z-10">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>{subscriberCount.toLocaleString()}+ Active Campaigns Worldwide</span>
              </div>
              <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                Unleash the Power of AI with Email Marketing
              </h2>
              <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                Mailgo is the perfect answer! Our AI-based email marketing platform enables you to create highly targeted email campaigns that are tailored to each individual subscriber.
              </p>
            </div>
            <div className="mt-6 flex justify-center font-medium text-sm">
              <NavLink
                href="/#pricing"
                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700"
              >
                Start now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>

            {/* Interactive Server Action Contact Form */}
            <ContactForm />
          </div>
        </LayoutEffect>
      </div>
    </GradientWrapper>
  </section>
);

export default CTA;
