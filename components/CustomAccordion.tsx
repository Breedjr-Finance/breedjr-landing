import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function CustomAccordion({ data, className }: { data: any[]; className?: string }) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full gap-4 flex flex-col"
            defaultValue={"0"}
        >
            {data?.map((item, index: number) =>
                <AccordionItem value={index.toString()} key={index}
                    className={cn("bg-[#F5F4F6] border-0 px-4 lg:py-6 lg:px-8 text-black rounded-2xl lg:rounded-3xl", className)}
                >
                    <AccordionTrigger className="hover:no-underline text-gray-600 text-lg font-graphik font-medium cursor-pointer">{item?.title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col">
                        {item?.content?.map((i: string, idx: number) =>
                            <p key={idx} className="text-base font-graphik font-normal">
                                {i}
                            </p>

                        )}
                    </AccordionContent>
                </AccordionItem>
            )}
        </Accordion>
    )
}