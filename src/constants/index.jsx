import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

// import user1 from "../assets/profi";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "features" },
  { label: "Workflow", href: "workflow" },
  { label: "Pricing", href: "pricing" },
  { label: "Testimonials", href: "testimonials" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: "https://media.istockphoto.com/id/155428560/photo/portrait-of-a-smiling-business-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=2DIKoeqEqn3xj5rmEayVLLNmnGpBztuU2yLil-LvTac=",
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: "https://media.istockphoto.com/id/1217962587/photo/portrait-of-a-young-confident-smiling-asian-chinese-businessman.jpg?s=612x612&w=0&k=20&c=_2_An_UyM2EiLreTqEj3i8RciDlcSaRdvss6e1ZOqP8=",
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: "https://media.istockphoto.com/id/478555258/photo/confident-businessman-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=pY-vK1AmpfCKoBP8BS5eIidW5Ttye1hd8ABpw2i_GFc=",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=w8SlKv-4u6xYyU07CXeBRvfW6F0iYx-a7HR2ChM8ZbU=",
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=612x612&w=0&k=20&c=zzAlaDFbbaVuRG3he04Jk7ul7uRcgZMWU65yRfImA94=",
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Powered Chatbot",
    description:
      "Enhance user engagement with our AI-powered chatbot that provides instant responses and personalized interactions.",
  },
  {
    icon: <Fingerprint />,
    text: "Secure Authentication",
    description:
      "Ensure the safety of your users with our state-of-the-art fingerprint authentication system.",
  },
  {
    icon: <ShieldHalf />,
    text: "Data Encryption",
    description:
      "Protect sensitive information with our robust data encryption technologies, safeguarding your data at all times.",
  },
  {
    icon: <BatteryCharging />,
    text: "Efficient Energy Use",
    description:
      "Optimize your device's battery life with our efficient energy management solutions, perfect for prolonged usage.",
  },
  {
    icon: <PlugZap />,
    text: "Fast Charging",
    description:
      "Charge your devices faster than ever with our advanced fast charging technology, designed for quick and safe power delivery.",
  },
  {
    icon: <GlobeLock />,
    text: "Global Security",
    description:
      "Keep your network secure with our comprehensive global security solutions, tailored to meet the needs of international businesses.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Code Merging",
    description:
      "Seamlessly integrate code changes with enhanced version control, ensuring smooth collaboration and minimal conflicts.",
  },
  {
    title: "Worry-Free Code Reviews",
    description:
      "Streamline the review process with automated checks and comprehensive feedback, making it easier to maintain code quality.",
  },
  {
    title: "AI-Powered Efficiency",
    description:
      "Leverage AI to accelerate development workflows, reducing manual tasks and boosting productivity.",
  },
  {
    title: "Instant Work Sharing",
    description:
      "Share your projects and updates in real-time, enabling quick collaboration and faster decision-making.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];