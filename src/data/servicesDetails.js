import neuroImg from '../assets/placeholder_4.jpg'
import orthoImg from '../assets/placeholder_2.jpg'
import roboticImg from '../assets/placeholder_3.jpg'
import painImg from '../assets/placeholder_5.jpeg'

export const servicesDetails = [

  {
    slug: "neuro-rehabilitation",

    title: "Advanced Neuro Rehabilitation",

    tagline:
      "Restoring movement, confidence, and independence.",

    image: neuroImg,

    intro:
      "Our advanced neuro rehabilitation programs are designed to help individuals recover from neurological disorders through evidence-based physiotherapy, guided movement training, and personalized rehabilitation strategies. We focus on improving mobility, balance, coordination, and overall quality of life.",

    conditions: [
      "Stroke Recovery",
      "Spinal Cord Injuries",
      "Parkinson’s Disease",
      "Balance Disorders",
      "Neuromuscular Conditions",
      "Post-Surgical Neuro Recovery"
    ],

    procedure: [
      {
        step: "Initial Clinical Assessment",
        desc:
          "A detailed neurological evaluation is performed to understand mobility limitations, muscle strength, coordination, and recovery goals."
      },

      {
        step: "Personalized Therapy Plan",
        desc:
          "Customized rehabilitation plans are developed based on the patient’s condition and progress requirements."
      },

      {
        step: "Guided Rehabilitation Sessions",
        desc:
          "Therapy sessions focus on mobility training, balance improvement, posture correction, and muscle activation."
      },

      {
        step: "Continuous Monitoring",
        desc:
          "Patient progress is regularly assessed and therapy programs are modified to ensure optimal recovery."
      }
    ],

    benefits: [
      "Improved mobility and balance",
      "Enhanced muscle coordination",
      "Reduced stiffness and pain",
      "Greater independence in daily activities",
      "Faster recovery process",
      "Improved confidence and quality of life"
    ],

    technologies: [
      "Advanced robotic-assisted rehabilitation",
      "Balance and gait training systems",
      "Functional movement analysis"
    ],

    faq: [
      {
        question: "Who can benefit from neuro rehabilitation?",
        answer:
          "Patients recovering from stroke, spinal cord injuries, Parkinson’s disease, and other neurological disorders can benefit significantly."
      },

      {
        question: "How long does recovery take?",
        answer:
          "Recovery duration varies depending on the severity of the condition and patient consistency with therapy."
      }
    ]
  },

  {
    slug: "orthopedic-rehabilitation",

    title: "Advanced Orthopedic Rehabilitation",

    tagline:
      "Strengthening recovery through precision therapy.",

    image: orthoImg,

    intro:
      "Our orthopedic rehabilitation programs are focused on restoring strength, flexibility, and mobility after injuries, fractures, surgeries, and chronic orthopedic conditions.",

    conditions: [
      "Joint Pain",
      "Sports Injuries",
      "Fractures",
      "Post-Surgical Recovery",
      "Arthritis",
      "Muscle Weakness"
    ],

    procedure: [
      {
        step: "Orthopedic Evaluation",
        desc:
          "Comprehensive assessment of joint mobility, muscle strength, posture, and pain levels."
      },

      {
        step: "Pain Management Therapy",
        desc:
          "Techniques such as manual therapy, stretching, and electrotherapy are used to reduce pain and inflammation."
      },

      {
        step: "Strength & Mobility Training",
        desc:
          "Exercises are designed to improve muscle support, flexibility, and overall movement."
      },

      {
        step: "Functional Recovery",
        desc:
          "Patients are guided through real-life movement training for safer return to daily activities."
      }
    ],

    benefits: [
      "Reduced pain and stiffness",
      "Improved flexibility",
      "Enhanced muscle strength",
      "Faster post-surgical recovery",
      "Reduced risk of re-injury"
    ],

    technologies: [
      "Laser therapy systems",
      "Therapeutic exercise equipment",
      "Manual mobilization techniques"
    ],

    faq: [
      {
        question: "Can physiotherapy avoid surgery?",
        answer:
          "In many cases, targeted physiotherapy can significantly reduce pain and improve mobility without surgical intervention."
      }
    ]
  }

]