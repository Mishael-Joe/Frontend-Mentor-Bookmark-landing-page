import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQs() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 lg:pt-20">
        <div className=" text-center pt-20 max-w-xl mx-auto">
          <h1 className=" text-3xl font-semibold">
            Frequently Asked Questions
          </h1>

          <p className="text-Grayish-Blue py-6">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                <span className="hover:text-Soft-Red">What is Bookmark?</span>
              </AccordionTrigger>
              <AccordionContent className=" text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                <span className=" hover:text-Soft-Red">
                  How can I request a new browser?
                </span>
              </AccordionTrigger>
              <AccordionContent className=" text-left">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                <span className=" hover:text-Soft-Red">
                  Is there a mobile app?
                </span>
              </AccordionTrigger>
              <AccordionContent className=" text-left">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:no-underline">
                <span className=" hover:text-Soft-Red">
                  What about other Chromium browsers?
                </span>
              </AccordionTrigger>
              <AccordionContent className=" text-left">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <button className="cursor-pointer bg-Soft-Blue hover:text-Soft-Blue hover:bg-white hover:border hover:border-Soft-Blue transition-all delay-100 mt-10 mb-20 p-2 px-4 text-white rounded">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
