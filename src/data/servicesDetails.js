import womenImg from '../assets/Data/351A4663.avif'
import orthoImg from '../assets/Data/351A4675.avif'
import roboticImg from '../assets/Data/351A4737_converted.avif'
import rehabimg from '../assets/Data/351A4606_converted.avif'
import sportsimg from '../assets/Data/351A4670_converted.avif'
import laserimg from '../assets/Data/laser-therapy_converted.avif'
import speechImg from '../assets/Data/351A4851_converted.avif'
import neuroImg from '../assets/Data/351A4800.avif'

import strokeImg from '../assets/Conditions/stroke.jpg'
import parkinsonImg from '../assets/Conditions/parkisonsDisease.jpg'
import SpinalCord from '../assets/Conditions/SpinecordImg.webp'
import Multiplesclerosis from '../assets/Conditions/MultipleSclerosis.jpg'
import BrainInjury from '../assets/Conditions/brainInjury.webp'
import ceryberal from '../assets/Conditions/Ceryberal.png'
import mobility from '../assets/Conditions/improvedmobility.webp'
import VrImg from '../assets/Conditions/VrImg.jpg'
import PainImg from '../assets/Conditions/PainImg.jpg'
import balanceImg from '../assets/Conditions/balance.avif'
import strengthImg from '../assets/Conditions/Increasedstrength.avif'


export const servicesDetails = [
  {
  slug: "inpatient-rehabilitation",
  title: "Inpatient Rehabilitation",
  tagline: "Comprehensive rehabilitation under continuous medical supervision.",
  image: rehabimg,

  overview:
    "Our Inpatient Rehabilitation program provides intensive physiotherapy and multidisciplinary care for patients recovering from surgery, neurological disorders, trauma, and complex medical conditions. Every rehabilitation plan is personalized to maximize recovery and restore independence.",

  conditions: [
  {
    title: "Stroke (CVA)",
    image: strokeImg
  },
  {
    title: "Parkinson's Disease",
    image: parkinsonImg
  },
  {
    title: "Spinal Cord Injury",
    image: SpinalCord
  },
  {
    title: "Multiple Sclerosis (MS)",
    image: Multiplesclerosis
  },
  {
    title: "Traumatic Brain Injury",
    image: BrainInjury
  },
  {
    title: "Cerebral Palsy",
    image: ceryberal
  },

],

  recoveryJourney: [
    
  {
    stage: "Assessment",
    description: "Comprehensive evaluation of your condition and movement."
  },
  {
    stage: "Goal Setting",
    description: "Personalized recovery goals are established."
  },
  {
    stage: "Early Rehabilitation",
    description: "Pain management and gentle movement exercises."
  },
  {
    stage: "Functional Recovery",
    description: "Strength, balance and mobility training."
  },
  {
    stage: "Return to Daily Life",
    description: "Helping you regain confidence and independence."
  }


  ],

  procedure: [
    {
      step: "Comprehensive Assessment",
      desc: "A detailed evaluation of mobility, strength, balance, and functional limitations."
    },
    {
      step: "Individual Treatment Plan",
      desc: "Customized rehabilitation goals are developed for every patient."
    },
    {
      step: "Daily Therapy",
      desc: "Structured rehabilitation sessions with continuous monitoring."
    },
    {
      step: "Safe Discharge",
      desc: "Home exercise guidance and long-term recovery planning."
    }
  ],

  benefits: [
    {
    title: "Improved Mobility",
    image: mobility,
    description: "Move freely and confidently with better joint function."
  },{
    title: "Reduced Pain",
    image: PainImg,
    description: "Evidence-based treatment to relieve acute and chronic pain."
  },
  {
    title: "Better Balance",
    image: balanceImg,
    description: "Reduce the risk of falls through balance retraining."
  },
   {
    title: "Enhanced Strength",
    image: strengthImg,
    description: "Progressive strengthening for everyday activities."
  },

  ],

  

  faq: [
  {
    question: "Who needs inpatient rehabilitation?",
    answer:
      "Inpatient rehabilitation is recommended for individuals recovering from stroke, spinal cord injuries, traumatic brain injuries, major orthopedic surgeries, neurological disorders, or any condition requiring intensive, multidisciplinary rehabilitation under continuous medical supervision."
  },
  {
    question: "How long does an inpatient rehabilitation program last?",
    answer:
      "The duration varies depending on the patient's condition, recovery goals, and progress. Some patients require a few days of rehabilitation, while others may benefit from several weeks of structured therapy."
  },
  {
    question: "What therapies are included during inpatient rehabilitation?",
    answer:
      "Our inpatient rehabilitation program combines physiotherapy, occupational therapy, speech and swallowing therapy, neurological rehabilitation, pain management, mobility training, and personalized exercise programs to maximize recovery."
  },
  {
    question: "Will I receive therapy every day?",
    answer:
      "Yes. Patients receive scheduled therapy sessions throughout the week, tailored to their medical condition, rehabilitation goals, and tolerance, ensuring consistent progress throughout their stay."
  },

]
}
]