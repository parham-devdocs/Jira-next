import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faqs from "../data/faqs.json";
const AccordionComponent = () => {
  return (

    <Accordion type="single" collapsible>
      {Faqs.map((q,index) => {
        return   <AccordionItem value={`value-${index}`} key={index}>
        <AccordionTrigger>{q.question}</AccordionTrigger>
        <AccordionContent>
        {q.answer}
        </AccordionContent>
      </AccordionItem>

      })}
     
    </Accordion>
  );

};

export default AccordionComponent;
