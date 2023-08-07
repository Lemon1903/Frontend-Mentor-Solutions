import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

export default function FAQ() {
  return (
    <section className="container px-4 pb-36 pt-16 sm:px-12 md:pb-40 md:pt-36 xl:px-16">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />
      <Accordion className="mx-auto max-w-xl py-14 max-md:px-2" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Bookmark</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.
            Phasellus blandit ipsum quis quam ornare mattis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I request a new browser?</AccordionTrigger>
          <AccordionContent>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
            Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdiet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
          <AccordionContent>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna
            vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et
            ultricies bibendum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What about other Chromium browsers?</AccordionTrigger>
          <AccordionContent>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque
            eget nisl gravida pellentesque non ut velit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center">
        <Button theme="primary" className="px-6">
          More Info
        </Button>
      </div>
    </section>
  );
}
