import neuroImg from '../assets/351A4663.avif'
import pediatricImg from '../assets/351A4606_converted.avif'
import homeCareImg from '../assets/351A4737_converted.avif'
import painImg from '../assets/351A4840.avif'

export const servicesData = {
  left: [
    {
      id: "neuro",
      title: "Neuro Rehabilitation",
      icon: neuroImg,
      desc: "Recovery support for neurological disorders.",

      image: neuroImg,

      full: "Advanced rehabilitation programs for stroke, spinal cord injuries, Parkinson's disease, and other neurological conditions.",

      procedure: [
        "Comprehensive neurological assessment",
        "Personalized rehabilitation planning",
        "Guided neuro physiotherapy sessions",
        "Progress monitoring and home rehabilitation"
      ],

      benefits: [
        "Improves mobility",
        "Enhances coordination",
        "Restores independence",
        "Improves balance and strength"
      ]
    },

    {
      id: "pediatric",
      title: "Pediatric Rehabilitation",
      icon: pediatricImg,
      desc: "Specialized therapy for children's development.",

      image: pediatricImg,

      full: "Child-friendly rehabilitation for developmental, neurological, and orthopedic conditions to improve movement, balance, coordination, and independence.",

      procedure: [
        "Comprehensive child assessment",
        "Individualized therapy planning",
        "Interactive rehabilitation sessions",
        "Family guidance and progress monitoring"
      ],

      benefits: [
        "Improves motor development",
        "Enhances balance and coordination",
        "Builds confidence and independence",
        "Supports healthy physical growth"
      ]
    }
  ],

  right: [
    {
      id: "homecare",
      title: "Home Care Physiotherapy",
      icon: homeCareImg,
      desc: "Expert rehabilitation at your doorstep.",

      image: homeCareImg,

      full: "Personalized physiotherapy services delivered at home for neurological, orthopedic, post-surgical, geriatric, and mobility-related conditions.",

      procedure: [
        "Home assessment",
        "Customized treatment planning",
        "Home-based therapy sessions",
        "Regular progress evaluation"
      ],

      benefits: [
        "Convenient home treatment",
        "Personalized rehabilitation",
        "Improved mobility",
        "Comfortable recovery environment"
      ]
    },

    {
      id: "pain",
      title: "Pain Management",
      icon: painImg,
      desc: "Evidence-based relief for acute and chronic pain.",

      image: painImg,

      full: "Comprehensive pain management using manual therapy, therapeutic exercises, electrotherapy, and patient education to restore mobility and improve quality of life.",

      procedure: [
        "Comprehensive pain assessment",
        "Personalized treatment planning",
        "Manual therapy and exercise therapy",
        "Recovery guidance and prevention"
      ],

      benefits: [
        "Reduces pain",
        "Improves mobility",
        "Enhances flexibility",
        "Improves quality of life"
      ]
    }
  ]
}