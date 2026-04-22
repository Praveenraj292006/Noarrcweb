import neuroImg from '../assets/placeholder_4.jpg'
import orthoImg from '../assets/placeholder_2.jpg'
import roboticImg from '../assets/placeholder_3.jpg'
import painImg from '../assets/placeholder_5.jpeg'

export const servicesData = {
  left: [
    {
      id: "neuro",
      title: "Neuro Rehabilitation",
      icon: neuroImg,
      desc: "Recovery support for neurological disorders.",

      image: neuroImg,

      full: "Advanced rehabilitation programs for stroke and spinal injuries.",

      procedure: [
        "Initial assessment of neurological condition",
        "Customized therapy plan",
        "Guided movement training",
        "Progress monitoring and adaptation"
      ],

      benefits: [
        "Improves mobility",
        "Enhances coordination",
        "Faster recovery",
        "Restores independence"
      ]
    },

    {
      id: "ortho",
      title: "Orthopedic Rehab",
      icon: orthoImg,
      desc: "Treatment for joints and injuries.",

      image: orthoImg,

      full: "Focused rehabilitation for bones, joints, and muscles.",

      procedure: [
        "Injury evaluation",
        "Pain reduction therapy",
        "Strength training",
        "Functional recovery"
      ],

      benefits: [
        "Reduces pain",
        "Improves flexibility",
        "Strengthens muscles",
        "Prevents future injuries"
      ]
    }
  ],

  right: [
    {
      id: "robotic",
      title: "Robotic Therapy",
      icon: roboticImg,
      desc: "AI-assisted rehabilitation.",

      image: roboticImg,

      full: "Advanced robotic systems for precise recovery.",

      procedure: [
        "Digital motion analysis",
        "Machine-assisted therapy",
        "Real-time corrections",
        "Progress tracking"
      ],

      benefits: [
        "High precision",
        "Faster recovery",
        "Consistent results",
        "Modern approach"
      ]
    },

    {
      id: "pain",
      title: "Pain Management",
      icon: painImg,
      desc: "Relief from chronic pain.",

      image: painImg,

      full: "Comprehensive treatment for long-term pain relief.",

      procedure: [
        "Pain assessment",
        "Manual therapy",
        "Exercise therapy",
        "Lifestyle guidance"
      ],

      benefits: [
        "Long-term relief",
        "Improves posture",
        "Enhances mobility",
        "Better quality of life"
      ]
    }
  ]
}