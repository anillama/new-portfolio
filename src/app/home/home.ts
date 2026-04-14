import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('my-angular-app');

  ImagePath: string;

  constructor() {
    //image location
    this.ImagePath = '/assets/lama.jpg'
  }

  profile = {
    name: 'Anil Lama',
    title: 'Senior Software Engineer',
    description: '6+ years building Scalable Microservices with Java & Spring Boot',
    email: 'alamacs19@gmail.com',
    location: 'Dallas, TX',
    aboutMe: `I'm a Senior Java Backend Engineer with 5+ years building scalable, production-grade systems for clients like JPMorgan Chase, Hilton, PNC Bank, and UnitedHealth Group. My core work lives in Java, Spring Boot, and microservices — designing RESTful APIs, event-driven pipelines with Kafka, and secure, high-performance backends for financial and healthcare platforms.
              
              I care about clean architecture, system reliability, and code that holds up under real-world pressure. I'm currently pursuing a Master's in Artificial Intelligence at Texas A&M, with a growing interest in applying ML to backend and data systems.
              
              Outside of work, I keep up with emerging tech, sharpen my system design skills, and spend time with family.`,
    education: {
      degree: "Bachelor's in Computer Science (2019)",
      school: "California State University, East Bay — Hayward, CA"
    },
    educationMaster: {
      degree: "Master of Science in Artificial Intelligence (Expected 2027)",
      school: "Texas A&M University — College Station, TX"
    },
    project: {
    name: 'Portfolio Website',
    description: `A personal portfolio website built with Angular to showcase my skills, experience, and projects. It features a clean and modern design, responsive layout, and smooth navigation.`,
    link: 'https://www.anillama.co/'
  }};

  skills = {
    languages: ['Java', 'SQL', 'PL/SQL', 'Python', 'C', 'C++'],
    backend: ['Node.js', 'PostgreSQL', 'Redis'],
    cloud: ['Docker', 'Kubernetes'],
    frameworks: ['Spring', 'Spring Boot', 'Hibernate', 'JPA', 'Django', 'IntelliJ IDEA', 'Cursor', 'Eclipse'],
    webTechnologies: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'AJAX', 'JSP'],
    databases: ['Oracle', 'SQl Server', 'PostgreSQL', 'MySQL']
  };

  experience = [
    {
    role: 'Software Engineer',
    company: 'JPMorgan Chase & Co.',
    period: 'Jan 2026 - Current',
    description:
      'Data migration engineer at JPMorgan Chase, specializing in migrating and ingesting large-scale data into enterprise data lake infrastructure. Passionate about building reliable data pipelines and enabling data-driven decision-making across the organization.'
  },
    {
    role: 'Java Developer – Backend',
    company: 'Hilton Hotels',
    period: 'May 2024 - Nov 2025',
    description:
      'Designed and developed scalable microservices using Java and Spring Boot. Built RESTful APIs, integrated Kafka for real-time data streaming, optimized PostgreSQL queries, and supported CI/CD pipelines. Collaborated with cross-functional teams and mentored junior developers.'
  },
  {
    role: 'Full Stack Software Developer',
    company: 'United Health Group',
    period: 'April 2022 - April 2024',
    description:
      'Built healthcare microservices using Spring Boot and REST APIs. Worked across full SDLC, developed Angular UI components, optimized PL/SQL queries, implemented Docker-based environments, and supported production systems.'
  },
  {
    role: 'Java Developer – Backend',
    company: 'FirstBank',
    period: 'May 2021 - March 2022',
    description:
      'Developed backend services for high-value financial transactions. Created REST APIs, optimized Oracle SQL queries, implemented logging and auditing, and automated builds using Jenkins and Maven.'
  }];

  certifications = [
  {
    name: 'CS50 Wrb Programming with Python and JavaScript - Harvard University',
    link: 'https://certificates.cs50.io/21b17cff-65b4-47d6-aa26-dff78345d42d.pdf?size=letter'
  }
];

projects = [
  {
    name: 'Personal Portfolio Web Application',
    description: 'Server-side rendered Angular application built from scratch with responsive design and clean UI architecture.',
    tech: 'Angular 17, TypeScript, SCSS, SSR (Vite)',
    live: 'https://www.anillama.co/',
    repo: 'https://github.com/anillama/new-portfolio/tree/anil_branch'
  }
];
}
