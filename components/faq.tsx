import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqData = [
  {
    id: "item-1",
    question: "What is a \"new subscriber\"?",
    answer: "A new subscriber is someone who has not previously had an active subscription with us. This includes users who may have had free accounts but have never subscribed to any of our paid plans."
  },
  {
    id: "item-2", 
    question: "How does Trae count the number of AI requests consumed?",
    answer: "Each interaction with our AI service counts as one request. This includes queries, responses, and any AI-powered features you use within the application. Requests are tracked in real-time and reset monthly based on your subscription cycle."
  },
  {
    id: "item-3",
    question: "What happens if I run out of AI requests?",
    answer: "If you exhaust your monthly request limit, you'll need to wait until your next billing cycle for the quota to reset, or you can upgrade to a higher plan for additional requests. We'll notify you when you're approaching your limit."
  },
  {
    id: "item-4",
    question: "What if I want to get a refund? Where can I contact for billing issues?",
    answer: "For refunds and billing inquiries, please contact our support team. We offer refunds within 30 days of purchase for annual subscriptions and within 7 days for monthly subscriptions, subject to our terms of service."
  },
  {
    id: "item-5",
    question: "Is there a student discount?",
    answer: "Yes, we offer special pricing for students. Please contact us with proof of enrollment to learn more about our student discount program and how to apply it to your subscription."
  }
]

export function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border border-gray-800 rounded-lg px-6 bg-gray-900/50">
            <AccordionTrigger className="text-left hover:no-underline py-6 [&>svg]:hidden">
              <div className="flex justify-between items-center w-full">
                <span className="text-lg font-medium text-white pr-4">{item.question}</span>
                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 data-[state=open]:rotate-45" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

     
    </div>
  )
}