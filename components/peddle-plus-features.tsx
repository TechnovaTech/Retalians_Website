"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function PeddlePlusFeatures() {
  const features = [
    "GST Bills, e-way bills & e-invoices directly from ERP",
    "Easy-to-use platform and mobile apps for seamless management",
    "Online ordering from local customers with same-day delivery",
    "Multi-device store management with real-time connectivity",
    "Automated online payments directly to your account"
  ]

  return (
    <section className="py-20" style={{backgroundColor: '#F5F5F5'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Retalians Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Empower Your Retail Business with Smart Solutions. Discover the future of retail with Retalians, India's leading retail software known for its compliance and ease of use. Our streamlined platform offers a comprehensive solution for GST compliance, billing, invoicing, accounting, inventory management, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6" style={{color: '#D7263D'}} />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}