import { CustomAccordion } from "@/components/CustomAccordion";
import { faqData, } from "@/lib/data";

export default function FAQ() {
    return (
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-18 bg-black px-4 lg:px-20 py-30 text-white" id='faq'>
            <div className="flex flex-col gap-3.5 md:max-w-[435px]">
                <h2 className="text-5xl font-agrandir font-bold">Got questions? We&apos;ve got answers</h2>
                <p
                    className="font-graphik text-base font-normal"
                >We&apos;ve answered some common questions you might have to expand your understanding of Starpay</p>

            </div>

            <CustomAccordion
                data={faqData}
            />
        </section>
    )
}

