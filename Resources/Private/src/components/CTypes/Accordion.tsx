import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import parse from "html-react-parser";

export default function AccordionCE({ data }: { data: any }) {
  const items = data.txBootstrappackageAccordionItem || [];
  return (
    <Accordion type="single" collapsible>
      {items.map((item: any, index: number) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>
            {item.header ? item.header : "No title available."}
          </AccordionTrigger>
          <AccordionContent>{parse(item.bodytext || "")}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
