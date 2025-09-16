import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "What makes MyOS different from other productivity tools?",
      answer: "MyOS is not just another productivity app—it's a personalized operating system for your life. While other tools focus on task management, MyOS understands your unique patterns, energy levels, and decision-making style to create truly personalized automation and insights."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most users report noticeable improvements in clarity and reduced decision fatigue within the first week. Significant productivity gains typically appear within 2-3 weeks as the system learns your patterns and preferences. Full optimization happens within 30 days."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption for all data, both in transit and at rest. Your personal information never leaves our secure infrastructure, and we never sell or share your data with third parties. You maintain full ownership and control of your information."
    },
    {
      question: "Can MyOS integrate with my existing tools?",
      answer: "Yes, MyOS is designed to work with your current workflow. We integrate with popular tools like Google Calendar, Slack, Notion, and many others. Rather than replacing your tools, MyOS acts as an intelligent layer that optimizes how you use them."
    },
    {
      question: "Do I need to be tech-savvy to use MyOS?",
      answer: "Not at all. MyOS is designed for busy professionals who want results, not complexity. The setup process is guided and intuitive, and the AI handles all the technical complexity behind the scenes. You simply interact through natural conversations and simple interfaces."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Every MyOS user gets access to our dedicated support team, comprehensive onboarding, and regular check-ins to ensure you're getting maximum value. We also provide strategy sessions to help optimize your personal operating system as your needs evolve."
    },
    {
      question: "Can I try MyOS before committing?",
      answer: "Yes, we offer a 14-day trial where you can experience the full MyOS system. This gives you enough time to see real results and understand how it transforms your productivity. No credit card required to start."
    },
    {
      question: "How much does MyOS cost?",
      answer: "MyOS pricing is based on the value it delivers. Our plans start at $97/month for individual users, with enterprise options available for teams. Considering most users save 10+ hours per week, the ROI is typically realized within the first month."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-foreground">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Everything you need to know about MyOS and how it can transform your productivity.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card/50 border border-border/50 rounded-2xl backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:text-primary transition-colors">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;