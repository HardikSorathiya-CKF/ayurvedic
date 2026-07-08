import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "What are Ayurvedic supplements made of?",
    a: "Our supplements are crafted from 100% pure, natural herbs and botanicals sourced from certified organic farms, with no artificial additives or preservatives.",
  },
  {
    q: "How long does it take to see results?",
    a: "Ayurvedic products work gradually with your body. Most customers notice visible improvements within 4 to 6 weeks of consistent daily use.",
  },
  {
    q: "Are these products safe for daily use?",
    a: "Yes. All our formulations are tested for purity and safety, and are suitable for daily consumption as directed on the label.",
  },
  {
    q: "Do I need a prescription to buy these products?",
    a: "No prescription is required. However, we recommend consulting a physician if you are pregnant, nursing, or on medication.",
  },
  {
    q: "Are the ingredients organic and chemical-free?",
    a: "Absolutely. We use only organically grown herbs, free from pesticides, chemicals, and synthetic fillers.",
  },
  {
    q: "Can I take multiple products together?",
    a: "Most of our products are complementary and can be taken together, but we suggest following the recommended dosage for each.",
  },
  {
    q: "Is this product suitable for vegetarians and vegans?",
    a: "Yes, our capsules use plant-based shells and all ingredients are 100% vegetarian and vegan friendly.",
  },
  {
    q: "How should I store the product?",
    a: "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after each use.",
  },
  {
    q: "What is your return and refund policy?",
    a: "We offer a 7-day return policy on unopened products. Refunds are processed within 5 to 7 business days of approval.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes, we provide free shipping on all orders above ₹499 across India.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section pt-5">
      <div className="text-center mb-4 mb-md-5">
        <span className="section-label">FAQs</span>
        <h2 className="section-title mb-0">Frequently Asked Questions</h2>
      </div>

      <div className="faq-list mx-auto">
        {faqs.map((item, i) => (
          <div className={`faq-item${open === i ? " is-open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              {open === i ? <FiMinus /> : <FiPlus />}
            </button>
            <div className="faq-answer">
              <p className="mb-0">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
