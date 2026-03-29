import { mySocials } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <motion.section
      className="flex flex-wrap items-center justify-between gap-5 pb-10 text-sm text-neutral-400 container mx-auto max-w-7xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="cursor-pointer hover:text-white"
        onClick={() => setActiveModal("terms")}>
        Terms & Conditions
        </p>
        <p>|</p>
        <p className="cursor-pointer hover:text-white"
        onClick={() => setActiveModal("privacy")}>
        Privacy Policy
        </p>
      </motion.div>

      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {mySocials.map((social, index) => (
          <motion.a
            href={social.href}
            key={index}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        © 2026 LivCode. All rights reserved.
      </motion.p>

      {activeModal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    
    <div className="bg-[#1E1E20] text-white max-w-lg w-full p-6 rounded-xl relative">
      
      {/* Close button */}
      <button 
        onClick={() => setActiveModal(null)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      {/* Content */}
      {activeModal === "terms" && (
  <>
    <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>

    <div className="space-y-4 text-sm text-gray-400 leading-relaxed max-h-[350px] overflow-y-auto pr-2">

      <div>
        <p className="font-semibold text-white">1. Project Scope</p>
        <p>
          All services provided will follow the agreed project scope and package. Any additional features, pages, revisions, or requests outside the original agreement may be subject to additional charges.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">2. Payment Terms</p>
        <p>
          A deposit is required before any project begins. The remaining balance must be completed according to the agreed payment arrangement and before final delivery.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">3. Revision Policy</p>
        <p>
          Each project includes a limited number of revisions based on the agreed package. Additional revisions or major design/feature changes beyond the approved direction may incur extra fees.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">4. Timeline & Delays</p>
        <p>
          Project timelines depend on timely communication, approvals, and content submission from the client. Delays in response or required materials may affect the estimated completion time.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">5. Client Responsibilities</p>
        <p>
          Clients are responsible for providing all required content, images, branding assets, text, and other materials needed for the project.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">6. Hosting & Domain</p>
        <p>
          Hosting and domain services are not included unless explicitly stated. Clients may choose to manage these independently or request setup assistance separately.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">7. Final Delivery & Ownership</p>
        <p>
          Final files, access, and project ownership will only be transferred after full payment has been completed.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">8. Maintenance & Support</p>
        <p>
          Ongoing maintenance, updates, and technical support are not included unless agreed as a separate service.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">9. Cancellation & Refunds</p>
        <p>
          Deposits are non-refundable once the project has started. If a project is canceled midway, any completed work may still be billed accordingly.
        </p>
      </div>

    </div>
  </>
)}

      {activeModal === "privacy" && (
  <>
    <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>

    <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
      <p>
        We respect your privacy and are committed to protecting any information you share with us.
      </p>
      <p>
        Any personal information submitted through this website, such as your name, email address, phone number, or message, will only be used for communication and project-related purposes.
      </p>
      <p>
        We do not sell, share, or misuse your personal information.
      </p>
      <p>
        Information submitted through contact forms or inquiries may be stored securely for business communication and follow-up purposes.
      </p>
      <p>
        By using this website, you agree to this privacy policy.
      </p>
    </div>
  </>
)}

    </div>
  </div>
)}
    </motion.section>
  );
};

export default Footer;
