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
    aboutMe: `Senior Software Engineer with strong experience in Java, Spring Boot, Angular, and microservices. I specialize in designing and developing scalable, secure backend systems, with a focus on clean architecture and performance.
    
    My work includes building RESTful APIs for seamless service communication, integrating Apache Kafka for real-time data streaming, and optimizing PostgreSQL for efficient data storage and query performance. I enjoy collaborating with cross-functional teams to deliver reliable, production-ready solutions that support business goals.
    
    I hold a Bachelor of Science in Computer Science from California State University, East Bay, and bring a solid full-stack background across Java, Angular, Kafka, and microservices-based systems. Outside of work, I enjoy staying current with new technologies, refining system design skills, traveling, and spending quality time with family.`,
    education: {
      degree: "Bachelor's in Computer Science",
      school: "California State University, East Bay — Hayward, CA"
  }
  };

  skills = {
    languages: ['Java', 'SQL', 'PL/SQL', 'Python', 'C', 'C++'],
    backend: ['Node.js', 'PostgreSQL', 'Redis'],
    cloud: ['Docker', 'Kubernetes'],
    frameworks: ['Spring', 'Spring Boot', 'Hibernate', 'JPA', 'IntelliJ IDEA', 'Cursor', 'Eclipse'],
    webTechnologies: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'AJAX', 'JSP'],
    databases: ['Oracle', 'SQl Server', 'PostgreSQL', 'MySQL']
  };

  experience = [
    {
    role: 'Java Developer – Backend',
    company: 'Hilton Hotels',
    period: 'May 2024 - Dec 2025',
    description:
      'Designed and developed scalable microservices using Java and Spring Boot. Built RESTful APIs, integrated Kafka for real-time data streaming, optimized PostgreSQL queries, and supported CI/CD pipelines. Collaborated with cross-functional teams and mentored junior developers.'
  },
  {
    role: 'Full Stack Java Developer',
    company: 'PNC Bank',
    period: 'Dec 2022 - May 2024',
    description:
      'Developed full-stack applications using Angular and Spring Boot. Implemented secure REST APIs with OAuth and JWT, optimized SQL queries, supported system integrations, and worked in Agile Scrum teams to deliver enterprise banking solutions.'
  },
  {
    role: 'Full Stack Software Developer',
    company: 'United Health Group',
    period: 'Aug 2020 - Dec 2022',
    description:
      'Built healthcare microservices using Spring Boot and REST APIs. Worked across full SDLC, developed Angular UI components, optimized PL/SQL queries, implemented Docker-based environments, and supported production systems.'
  },
  {
    role: 'Java Developer – Backend',
    company: 'FirstBank',
    period: 'Aug 2019 - Aug 2020',
    description:
      'Developed backend services for high-value financial transactions. Created REST APIs, optimized Oracle SQL queries, implemented logging and auditing, and automated builds using Jenkins and Maven.'
  }];

  certifications = [
  {
    name: 'CS50 Wrb Programming with Python and JavaScript - Harvard University',
    link: 'https://certificates.cs50.io/21b17cff-65b4-47d6-aa26-dff78345d42d.pdf?size=letter'
  }
];
}
