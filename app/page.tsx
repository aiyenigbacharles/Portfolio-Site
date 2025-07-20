"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TechBackground } from "@/components/tech-background";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Quote,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  BookOpen,
  Award,
  Users,
  Briefcase,
  Send,
  Twitter,
  Instagram,
  Eye,
  Router,
  BrainCircuit,
  MonitorCheck,
  Headset,
  SquarePen,
  CodeXml,
  Airplay,
  Menu,
  X
} from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTestimonialScrollingPaused, setIsTestimonialScrollingPaused] = useState(false); // New state for pause/play

const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  if (form.current) {
    try {
      await emailjs.sendForm(
        'service_vnceqj8',      // My EmailJS Service ID
        'template_eizaten',     // My EmailJS Template ID
        form.current,
        'R_w891leXS0BG7LXv'       // My EmailJS Public Key
      );
      setSubmitMessage('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }
};

      {/* Testimonials Section 1 */}
  const testimonials = [
    { name: "Gabriel Yashim", role: "Data Scientist", content: "Charles is an exceptional colleague who is intelligent efficient & incredibly creative. I've been thoroughly impressed by his skills & would highly recommend him to anyone seeking a dedicated professional.", avatar: "/images/yashim.jpeg", },
    { name: "McDonald Chikwendu", role: "Data Scientist", content: "During our time together, Charles consistently showed exceptional talent and a remarkable work ethic. He was always reliable, always delivered high quality results, and consistently showed up with a positive attitude.", avatar: "/images/donald.jpeg", },
    { name: "Victor Abuh", role: "Digital Marketer", content: "Charles is an exceptional professional who embodies leadership excellence- He was a fantastic Team Lead who led our team with vision and a collaborative spirit, driving outstanding results. He will be a valuable asset to any organization.", avatar: "/images/victor.jpeg", },
    { name: "Isaac James", role: "Realtor", content: "Charles is a reliable & efficient professional who consistently delivers results consistently. He is insightful, learns quickly, tackles challenging tasks with ease & loves to carry others along. I'm thoroughly impressed & highly recommend him.", avatar: "/images/Isaac.jpeg", },
    { name: "Precious Orim", role: "IT Professional", content: "Charles is a true professional & a highly skilled IT expert. He is always willing to go the extra mile to assist colleagues, providing valuable support & guidance.", avatar: "/images/precious.jpg", },
    { name: "Ifeanyi Ugwumba", role: "Software Engineer", content: "Charles is one of those rare professionals who combines technical versatility with genuine reliability. I've had the pleasure of working with him on several projects & each time he brought a solutions-driven mindset to the table. From breaking down complex problems to supporting the team through documentation & technical research, Charles delivers with excellence.", avatar: "/images/ifeanyi.jpeg", },
    { name: "Tiana Salawudeen", role: "UX Designer", content: "Charles is one of the most thoughtful & detail-oriented software engineers I know. Beyond his technical expertise, he brings clarity, dedication & a strong collaborative spirit to every project.", avatar: "/images/Tiana.jpg", },
    { name: "Christian Onwubalili", role: "Graphic Designer", content: "Charles is a rockstar! His tech skills are top-notch & he's always willing to go the extra mile to solve problems. I've seen him work his magic on countless projects & his attention to detail is impressive. He's a team player who communicates complex ideas in a clear & concise way. I highly recommend Charles for any tech-related project, he's a true professional.", avatar: "/images/christian.jpeg", },
    { name: "Norbert Athekame", role: "Fullstack Developer", content: "I had the pleasure of mentoring Charles for a year, during which we worked together on several projects. As a junior, he consistently demonstrated a strong sense of responsibility & a genuine eagerness to learn. He’s dependable, versatile, & delivers with excellence.", avatar: "/images/norbert.jpeg", },
  ];

    // New function for smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevent the default jump behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scrolls to the top of the section
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative">
      {/* Tech Background Animation */}
      <TechBackground />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-blue-200/50 dark:border-blue-800/50 z-50">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Charles Aiyenigba
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="#publications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Publications</a>
              <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
            {/* Mobile Nav Toggler */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="ml-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </nav>
          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white dark:bg-slate-950 rounded-lg p-4">
              <a href="#about" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#services" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#publications" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Publications</a>
              <a href="#certifications" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Certifications</a>
              <a href="#testimonials" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#projects" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="block py-2 text-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Charles Aiyenigba
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
                IT Professional | Technical Writer | Prompt Engineer. 
                </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  asChild
                >
                  <a href="#contact">
                    <Send className="mr-2 h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent"
                  asChild
                >
                  <a href="#projects">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View My Work
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image
                  src="/images/Charles.png"
                  alt="Charles Aiyenigba"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-blue-200 dark:border-blue-800 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Learn more about my journey, passion, and what drives me
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/Me4.png"
                alt="About Charles"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl border border-blue-200 dark:border-blue-800"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Hi, I'm Charles, a Tech Generalist with a Focus on Secure, Functional, and Human-Centered Solutions.
                
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                I help individuals, small teams, and growing businesses thrive by combining web development, cybersecurity awareness, 
                data insight, and tech support into one flexible, reliable digital service. Whether you need a website, 
                a smarter workflow, clear documentation, or help making sense of tech chaos. 
                I'm here to build and support what matters most to your mission.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Experience</h4>
                    <p className="text-slate-600 dark:text-slate-400">3+ Years</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Projects Completed</h4>
                    <p className="text-slate-600 dark:text-slate-400">10+</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Availability</h4>
                    <p className="text-slate-600 dark:text-slate-400">30+ hours per week</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Certifications</h4>
                    <p className="text-slate-600 dark:text-slate-400">10+</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 dark:from-blue-900/10 dark:to-indigo-900/10 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              My Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/50 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Router className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <CardTitle className="text-blue-700 dark:text-blue-300">IT Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    RustDesk/AnyDesk
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    Ethernet Cable Crimping
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    Systems Administration
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    Operating Systems
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    Software Troubleshooting
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950/50 border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                <CardTitle className="text-indigo-700 dark:text-indigo-300">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                  >
                    Pandas
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                  >
                    Numpy
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                  >
                    Pytorch
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                  >
                    SciKitLearn
                  </Badge>
                                    <Badge
                    variant="secondary"
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                  >
                    Tensorflow
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/50 border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <MonitorCheck className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" />
                <CardTitle className="text-purple-700 dark:text-purple-300">Technical Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    Notion
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    Microsoft Office Suite
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    Google Workspace
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    Technical Writing
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    Data Entry
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  >
                    Technical Support
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-cyan-50 dark:from-slate-900 dark:to-cyan-950/50 border-cyan-200 dark:border-cyan-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Globe className="h-8 w-8 text-cyan-600 dark:text-cyan-400 mb-2" />
                <CardTitle className="text-cyan-700 dark:text-cyan-300">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Git & Github
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Vercel
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Vs Code
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Cursor
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Kali Linux
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Ubuntu
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    Jupyter Notebook
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive Services that I render
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Headset,
                title: "Executive & Virtual Assistance",
                description: "Efficient support for operations, scheduling & client communication",
                items: [
                  "Email and calendar management", 
                  "Report & Slide Presentation", 
                  "Research & Documentation"
                ],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: SquarePen,
                title: "Technical Writing",
                description: "Clear and actionable technical documentation & research",
                items: [
                  "Technical documentation",
                  "How-to guides and tutorials",
                  "Software documentation & reports",
                  "User Manuals",
                  "Troubleshooting Manuals",
                ],
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: Server,
                title: "IT & Tech Support",
                description: "Hands on help with systems, software & network issues",
                items: [
                  "Troubleshooting & Diagnostics", 
                  "Software & Application Setup", 
                  "Remote Technical Support", 
                  "Systems Administration"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: BrainCircuit,
                title: "Machine Learning",
                description: "Data-driven solutions powered by Python & ML tools",
                items: ["Data Cleaning & Preprocessing", 
                  "Predictive Modelling", 
                  "Deep Learning", 
                  "Basic Feature Engineering"],
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: CodeXml,
                title: "Web Development",
                description: "Custom web applications built with modern technologies",
                items: [
                  "Responsive web design",
                  "Single-page applications (SPA)",
                  "Landing pages and Portfolio sites",
                  "Responsive web apps",
                  "Authentication & User login systems"
                ],
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: Airplay,
                title: "Streaming & Media Coordination",
                description: "Support for churches, organizations, or event teams using Tech tools for livestreaming & media production",
                items: [
                  "OBS Studio setup & scene management",
                  "EasyWorship presentation building & training",
                  "Documentation of media SOPs",
                  "Camera & sound check coordination",
                  "Technical support during live services/events"
                ],
                gradient: "from-orange-500 to-red-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-950/30 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${service.gradient} p-2 mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-slate-800 dark:text-slate-200">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-600 dark:text-slate-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Publications Section */}
      <section
        id="publications"
        className="py-16 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 dark:from-blue-900/10 dark:to-indigo-900/10 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Publications
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Articles, papers, and content I've published
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Run your ChatBot Locally (No Data, No Problem)",
                platform: "Medium • 2025",
                description:
                  "Discover how Nigerians can install & run Large Language Models (LLMs) offline using LM Studio, tackling high data costs & unreliable internet. This humorous guide walks you through downloading models, local interaction, & performance optimization, with a touch of Nigerian flair.",
                link: "https://medium.com/@silvacharles156/run-your-chatbot-locally-no-data-no-problem-4294446ada5e"
              },
              {
                title: "The Human Factor in Social Engineering",
                platform: "Medium • 2024",
                description: "Learn how to protect yourself from social engineering attacks that exploit human psychology. Discover common tactics like phishing & spear phishing, & find out how staying informed & following cybersecurity best practices can help you stay safe online.",
                link: "https://medium.com/@silvacharles156/the-human-factor-in-social-engineering-560c7b8e768b"
              },
              {
                title: "A Windows User’s Guide to Linux: Assessment of WSL, Virtual Machines & Dual Boot",
                platform: "Medium • 2024",
                description: "Discover the best way to integrate Linux with your Windows setup. Explore options like WSL, virtual machines, & dual booting, & learn how to choose the one that fits your needs, allowing you to leverage Linux's power while staying compatible with Windows.",
                link: "https://medium.com/@silvacharles156/a-windows-users-guide-to-linux-assessment-of-wsl-virtual-machines-dual-boot-3b9261041043"
              },
                            {
                title: "Understanding the Basic Principles of the Web",
                platform: "Medium • 2024",
                description:
                  "Explore the web's core components, client-server architecture, TCP/IP, HTTP, & DNS. Understand web server functionality, static vs. dynamic content, & the client-server model. Enhance your grasp of the web's underlying infrastructure & how it works.",
                  link: "https://medium.com/@silvacharles156/understanding-the-basic-principles-of-the-web-bcafdf28e11c"
              },
              {
                title: "Sentiment Analysis with Python: A Rookie's Guide",
                platform: "Dev.to • 2023",
                description: "Unlock sentiment analysis with Python using NLTK & TextBlob. Discover how to extract emotions from text, visualize results, & apply your skills in real-world scenarios, enhancing your programming abilities & understanding of text meaning.",
                link: "https://dev.to/charles_silva/sentiment-analysis-with-python-a-rookies-guide-2nck"
              },
              {
                title: "A Step-by-Step Guide: Installing and Setting Up Python on Ubuntu 22.04",
                platform: "Dev.to • 2023",
                description: "Get started with Python on Ubuntu 22.04 with this step-by-step guide. Learn to install Python packages, set up virtual environments, & explore popular IDEs for a seamless coding experience. Perfect for beginners & pros alike.",
                link: "https://dev.to/charles_silva/a-step-by-step-guide-installing-and-setting-up-python-on-ubuntu-2204-33pa"
              },
            ].map((publication, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/50 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{publication.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {publication.platform}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{publication.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent"
                    asChild
                  >
                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Read Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Applied Data Science",
                issuer: "WorldQuant University",
                year: "2023",
                image: "/images/WorldQuant.png",
                verifyUrl: "https://www.credly.com/badges/3069740a-8273-4103-bd42-fe53e0d5f9ec/linked_in_profile",
                description: "Data Science Mastery; 8 projects showcasing expertise in data access, exploration, machine learning, and visualization.",
              },
              {
                title: "Introduction to Computers and Operating Systems and Security",
                issuer: "Microsoft & Coursera",
                year: "2024",
                image: "/images/Coursera.png",
                verifyUrl: "https://www.coursera.org/account/accomplishments/verify/R4XULUQFYTBQ",
                description: "This comprehensive overview covers computer system components, their interaction with operating systems, cybersecurity fundamentals, business computing environments, & optionally, an introduction to Generative AI.",
              },
              {
                title: "Introduction to Networking and Cloud Computing",
                issuer: "Microsoft & Coursera",
                year: "2025",
                image: "/images/Cloud & Networking.png",
                verifyUrl: "https://coursera.org/share/f26831de94c8f4ebf566bc8a5d338e22",
                description: "This comprehensive guide covers setting up cloud computing environments, virtual machines, & cloud services, configuring network infrastructure & security, & developing a strategic expansion plan to leverage cloud infrastructure for business growth.",
              },
              {
                title: "ALX AI Career Essentials (AiCE)",
                issuer: "ALX",
                year: "2024",
                image: "/images/ALX.png",
                verifyUrl: "https://intranet.alxswe.com/certificates/LcBF3zNSZR",
                description: "A program empowering young professionals & entrepreneurs with AI skills, soft skills, & meta-skills to thrive in the digital landscape, enhancing career prospects & entrepreneurial ventures.",
              },
              {
                title: "Crash Course on Python",
                issuer: "Google & Coursera",
                year: "2023",
                image: "/images/python.png",
                verifyUrl: "https://coursera.org/share/038d88bb7ed6da5b0c8ca0eccadf8c51",
                description: "This Python course covers the basics of Python programming, including strings, lists, dictionaries, & custom objects, to perform automated actions & tasks.",
              },
              {
                title: "Career Essentials in Cybersecurity by Microsoft & LinkedIn",
                issuer: "Microsoft & LinkedIn",
                year: "2024",
                image: "/images/LinkedIn - Microsoft.png",
                verifyUrl: "https://www.linkedin.com/learning/certificates/bb25a5dc9e940160a9d59d84443e5b6dd1c64bc8f51c01ed2bc540ba6d676598?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BahPU1SqxSW6nQIcuUyMOxQ%3D%3D",
                description: "This Course covers essential cybersecurity skills, including Threat & Vulnerability Management, Information Security Awareness, & Cybersecurity fundamentals, to equip individuals with the knowledge to protect organizations from cyber threats.",
              },
                            {
                title: "Introduction to Cybersecurity",
                issuer: "Cisco",
                year: "2023",
                image: "/images/Cisco 1.png",
                verifyUrl: "https://www.credly.com/earner/earned/badge/24970f36-eb91-4f3e-ad91-99e8b714bcd3",
                description: "This course covers the Introduction to Cybersecurity course, demonstrating foundational knowledge of cyber threats, vulnerabilities, & career opportunities in the field.",
              },
              {
                title: "Cybersecurity Essentials",
                issuer: "Cisco",
                year: "2023",
                image: "/images/Cisco 2.png",
                verifyUrl: "https://www.credly.com/badges/d33dc757-d9fc-41c3-b5f6-2fb4265dbb97/linked_in_profile",
                description: "This course covers Cybersecurity Essentials, demonstrating foundational knowledge of network security, encryption, & defense principles.",
              },
              {
                title: "Jobberman Soft-Skills Training",
                issuer: "Jobberman",
                year: "2020",
                image: "/images/Jobberman.png",
                verifyUrl: "https://drive.google.com/file/d/1rzgdrcnHUHseL5kpa4sgSaa2HEN5q5F_/view?usp=sharing",
                description: "This Course equips individuals with essential non-technical skills, enhancing employability & career prospects through a comprehensive curriculum & prestigious certificate of completion.",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/50 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white" asChild>
                      <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                        <Eye className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2 flex-shrink-0" />
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent"
                      asChild
                    >
                      <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Verify
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{cert.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{cert.description}</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    asChild
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                      <Eye className="mr-2 h-4 w-4" />
                      View Full Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section 2 */}
      <section
        id="testimonials"
        className="py-16 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 dark:from-blue-900/10 dark:to-indigo-900/10 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Testimonials from colleagues & clients
            </p>
          </div>
          {/* Scrolling Testimonials */}
          <div className="relative overflow-hidden">
            <div
              className={`flex animate-scroll-testimonials space-x-6 w-max ${isTestimonialScrollingPaused ? 'is-paused' : ''}`}
              onMouseEnter={() => setIsTestimonialScrollingPaused(true)}
              onMouseLeave={() => setIsTestimonialScrollingPaused(false)}
              onTouchStart={() => setIsTestimonialScrollingPaused(true)}
              onTouchEnd={() => setIsTestimonialScrollingPaused(false)}
            >
              {/* Duplicate the testimonials array for seamless looping */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card key={index} className="flex-shrink-0 w-80 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/50 border-blue-200 dark:border-blue-800 shadow-lg" >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} width={60} height={60} className="rounded-full border-2 border-blue-200 dark:border-blue-800" />
                      <div>
                        <CardTitle className="text-lg text-slate-800 dark:text-slate-200">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3" />
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work and deployed applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sentiment Analysis of the 2023 Presidential Elections",
                description: "This webapp analyzes sentiments on 2023 Nigerian Presidential Elections, classifying text as positive, negative, or neutral towards key candidates.",
                technologies: ["Python", "Streamlit", "Scikit learn", "TextBlob", "Pandas", "Matplotlib", "NLTK"],
                demoUrl: "https://2023-presidential-elections-sentiment-analysis.streamlit.app/",
                image: "/images/sentiment analysis.png",
              },
              {
                title: "Brain Tumor Detection on MRI Images",
                description: "This webapp utilizes Deep Learning to detect brain tumors from MRI images. Upload brain MRI images in JPG or PNG format & get real-time prediction of tumor presence.",
                technologies: ["Python", "Streamlit", "Pytorch", "Torchvision", "PIL"],
                demoUrl: "https://mri-brain-tumor-detection.streamlit.app/?",
                image: "/images/brain tumor.png",
              },
              {
                title: "Saidi Nigeria Limited",
                description: "Saidi Nigeria Limited is a multi-discipline construction firm with state of the art equipment, professional manpower & field experience.",
               technologies: ["HTML", "CSS", "Javascript"],
                demoUrl: "https://saidi-nigeria-ltd.vercel.app/",
                image: "/images/Saidi site.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/50 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />

                  {/* <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        asChild
                      >
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 dark:text-slate-200">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent"
                      asChild
                    >
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a question or a project in mind? Let's connect!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/50 dark:to-blue-950/50 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                    <Mail className="mr-2 h-5 w-5" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700 dark:text-slate-300">
                  <p>silvacharles156@gmail.com</p>
                  <Button variant="link" className="px-0 py-0 h-auto text-blue-600 dark:text-blue-400" asChild>
                    <a href="mailto:charles.aiyenigba@example.com">Send an email</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/50 dark:to-blue-950/50 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                    <Phone className="mr-2 h-5 w-5" /> Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700 dark:text-slate-300">
                  <p>+234 903 237 7692</p>
                  <Button variant="link" className="px-0 py-0 h-auto text-blue-600 dark:text-blue-400" asChild>
                    <a href="tel:+2348012345678">Call Me</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/50 dark:to-blue-950/50 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                    <MapPin className="mr-2 h-5 w-5" /> Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700 dark:text-slate-300">
                  <p>Federal Capital Territory, Nigeria</p>
                </CardContent>
              </Card>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900" asChild>
                  <a href="https://github.com/aiyenigbacharles" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900" asChild>
                  <a href="https://www.linkedin.com/in/charles-aiyenigba-b6a139251/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900" asChild>
                  <a href="https://x.com/charlesforeal_" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900" asChild>
                  <a href="https://www.instagram.com/charlesforeal_/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/50 dark:to-blue-950/50 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300">Send a Message</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Grid for First and Last Name */}
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        First Name
                      </label>
                      <Input type="text" id="first_name" name="first_name" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Last Name
                      </label>
                      <Input type="text" id="last_name" name="last_name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <Input type="email" id="user_email" name="user_email" placeholder="john.doe@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <Input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Message
                    </label>
                    <Textarea id="message" name="message" rows={5} placeholder="Hi Charles, I'd like to discuss a project..." required />
                  </div>
                  {submitMessage && (
                    <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-200 dark:border-blue-800 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Charles Aiyenigba. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="hover:text-blue-600 dark:hover:text-blue-400" asChild>
                <a href="#about">About</a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-blue-600 dark:hover:text-blue-400" asChild>
                <a href="#services">Services</a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-blue-600 dark:hover:text-blue-400" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}