import { SiGooglescholar, SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';







const personalInfo = {
  name: "Mohammed Aman Bhuiyan",
  title: "AI/ML Enthusiast, CS Researcher  North South University",
  image: "./public/aman.png", 
  contact: {
    email: "aman@example.com",
  },
  socialLinks: [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'mohammed.aman.nsu@gmail.com',
    href: 'mailto:mohammed.aman.nsu@gmail.com',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/Aman554-EQ',
    href: 'https://github.com/Aman554-EQ',
  },
  {
    icon: SiGooglescholar,
    label: 'Google Scholar',
    value: 'Scholar Profile',
    href: 'https://scholar.google.com/citations?user=LQZXzlEAAAAJ&hl=en',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/mohammed-aman-bhuiyan-401bb2241',
  },
],
  skills: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'React', 'Node.js', 'JavaScript', 'Machine Learning', 'Deep Learning'],
  languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  researchInterests : ["Natural Language Processing", "Efficient LLMs & SLMs", "Agentic AI", "Computer Vision", "Video Understanding"]

};


export default personalInfo;












