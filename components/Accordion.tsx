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
      {Faqs.map(q => {
        return   <AccordionItem value={q.question} key={q.question}>
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
