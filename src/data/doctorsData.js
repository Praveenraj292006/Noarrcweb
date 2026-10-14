import drprassana from '../assets/Consultants/dr-prasanna.avif'
import dralwin from '../assets/Consultants/dr-alwin.avif'
import drramya from '../assets/Consultants/dr-ramya.avif'
import drharini from '../assets/Consultants/dr-harini.avif'

const doctors = [
  {
    id: 'dr-prasanna',
    name: 'Dr. R. Prasanna',
    role: 'Senior Consultant',
    qualifications: [
      'BPT',
      'MIAP',
      'CMT',
      'M.Sc. (Sports Biomechanics)',
    ],
    memberships: ['Member of IFNR'],
    experience: '20+ Years',
    specialty: 'Sports Biomechanics',
    image: [drprassana],
    imageAlt: 'Portrait of Dr. R. Prasanna',
  },
  {
    id: 'dr-alwin',
    name: 'Dr. R. Alwin',
    role: 'Senior Consultant',
    qualifications: [
      'BPT',
      'M.Sc. (Ortho & Sports)',
      'CMT',
      'MIAP',
    ],
    memberships: [],
    experience: '20+ Years',
    specialty: 'Orthopedics & Sports',
    image: [dralwin],
    imageAlt: 'Portrait of Dr. R. Alwin',
  },
  {
    id: 'dr-ramya',
    name: 'Ramya P',
    role: 'Physiotherapist ',
    qualifications: [
      'BPT',
    ],
    memberships: [''],
    experience: '4+ Years',
    specialty: 'Physiotherapy',
    image: [drramya],
    imageAlt: 'Portrait of Ramya P',
  },
  {
    id: 'dr-harini',
    name: 'Harini V',
    role: 'Physiotherapist ',
    qualifications: [
      'BPT',
    ],
    memberships: [''],
    experience: '4+ Years',
    specialty: 'Physiotherapy',
    image: [drharini],
    imageAlt: 'Portrait of Ramya P',
  },
]

export default doctors
