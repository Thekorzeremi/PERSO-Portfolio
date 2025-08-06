"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, Globe, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll('.animate-fade-in-on-scroll')
    animateElements.forEach((el) => observer.observe(el))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MariaDb", "Symfony"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Prisma", "REST APIs"]
  }

  const projects = [
    {
      title: "SNCT - Clone de l'application SNCF",
      description: "Application ferroviaire complète permettant la gestion des trajets, des horaires, la réservation de billets et l'administration des utilisateurs.",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/Thekorzeremi/IPSSI-SNCT",
      demo: "#",
      image: "/modern-ecommerce-interface.png"
    },
    {
      title: "Pulsera360 - Application CRM",
      description: "Plateforme CRM collaborative pour la gestion des clients, la communication en temps réel et le suivi des activités commerciales.",
      tech: ["React", "Node.js", "Express", "MariaDB"],
      github: "https://github.com/Thekorzeremi/PFE-Pulsera360",
      demo: "#",
      image: "/task-management-dashboard.png"
    },
    {
      title: "Structura - Gestion de chantiers",
      description: "Plateforme de gestion de chantiers de construction avec suivi des tâches, des ressources et des rapports d'avancement.",
      tech: ["React", "MariaDB", "Symfony"],
      github: "https://github.com/Thekorzeremi/IPSSI-Structura",
      demo: "#",
      image: "/analytics-dashboard.png"
    }
  ]

  return (
    <div className="h-screen w-screen overflow-x-hidden flex flex-col bg-background">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto flex h-14 items-center">
          <div className="flex ml-32">
            <Link href="/" className="flex items-center space-x-2 group">
              <Code className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-bold transition-all duration-300 group-hover:text-primary">RK</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link 
                href="#about" 
                className={`transition-all duration-300 hover:text-foreground/80 hover:scale-105 ${
                  activeSection === 'about' ? 'text-primary font-semibold' : ''
                }`}
              >
                A propos
              </Link>
              <Link 
                href="#skills" 
                className={`transition-all duration-300 hover:text-foreground/80 hover:scale-105 ${
                  activeSection === 'skills' ? 'text-primary font-semibold' : ''
                }`}
              >
                Compétences
              </Link>
              <Link 
                href="#projects" 
                className={`transition-all duration-300 hover:text-foreground/80 hover:scale-105 ${
                  activeSection === 'projects' ? 'text-primary font-semibold' : ''
                }`}
              >
                Projets
              </Link>
              <Link 
                href="#contact" 
                className={`transition-all duration-300 hover:text-foreground/80 hover:scale-105 ${
                  activeSection === 'contact' ? 'text-primary font-semibold' : ''
                }`}
              >
                Me contacter
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      <section className="container mx-auto py-24 md:py-32">
        <div className={`flex flex-col items-center text-center space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
              Rémi KORZENIOWSKI
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl animate-fade-in-up animation-delay-200">
              Développeur fullstack
            </p>
            <p className="mx-auto max-w-[600px] text-muted-foreground animate-fade-in-up animation-delay-300">
              Passionné par les solutions web innovantes avec des technologies modernes. 
              Spécialisé dans les écosystèmes React, NodeJS et Symfony.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
            <Button size="lg" asChild className="group transition-all duration-300 hover:scale-105">
              <Link href="#projects">
                <Globe className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Mes projets
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group transition-all duration-300 hover:scale-105">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:bounce" />
                Soyons en contact
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-700">
            <Button variant="ghost" size="icon" asChild className="transition-all duration-300 hover:scale-125 hover:rotate-6">
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="transition-all duration-300 hover:scale-125 hover:-rotate-6">
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="transition-all duration-300 hover:scale-125 hover:rotate-12">
              <Link href="mailto:remi@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto py-24">
        <div className="mx-auto max-w-3xl text-center space-y-8 opacity-0 animate-fade-in-on-scroll">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">A propos de moi</h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg transition-all duration-500 hover:scale-105 hover:text-foreground">
              Je suis un développeur web fullstack passionné avec plus de 3 ans d'expérience dans la création 
              d'applications web évolutives. J'aime transformer des problèmes complexes en solutions simples, 
              élégantes et intuitives.
            </p>
            <p className="transition-all duration-500 hover:scale-105 hover:text-foreground">
              Mon expertise couvre les frameworks frontend modernes comme React, 
              les technologies backend telles que Node.js et Symfony, ainsi que les plateformes cloud comme Vercel. 
              Je suis toujours enthousiaste à l'idée d'apprendre de nouvelles technologies et de rester à jour sur les tendances du secteur.
            </p>
            <p className="transition-all duration-500 hover:scale-105 hover:text-foreground">
              Quand je ne code pas, vous pouvez me trouver en train de contribuer à des projets open-source, 
              d'écrire des articles techniques ou d'explorer les dernières nouveautés en matière de développement web.
            </p>
          </div>
          <Button variant="outline" asChild className="group transition-all duration-300 hover:scale-105">
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              Télécharger mon CV
            </Link>
          </Button>
        </div>
      </section>

      <section id="skills" className="container mx-auto py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl space-y-8 opacity-0 animate-fade-in-on-scroll">
          <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Compétences & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Frontend
                </CardTitle>
                <CardDescription>
                  Création d'interfaces utilisateur réactives et interactives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Backend
                </CardTitle>
                <CardDescription>
                  Création d'applications serveur et d'APIs robustes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Outils & DevOps
                </CardTitle>
                <CardDescription>
                    Outils de développement et plateformes de déploiement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto py-24">
        <div className="mx-auto max-w-6xl space-y-8 opacity-0 animate-fade-in-on-scroll">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Projets phares</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Voici quelques-uns de mes projets récents qui illustrent mes compétences en développement fullstack.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="group/btn transition-all duration-300 hover:scale-105">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                        Github
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="group/btn transition-all duration-300 hover:scale-105">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        Essayer
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto py-24 bg-muted/50">
        <div className="mx-auto max-w-2xl text-center space-y-8 opacity-0 animate-fade-in-on-scroll">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Travaillons ensemble</h2>
          <p className="text-muted-foreground">
            Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants.
            Discutons de la manière dont nous pouvons donner vie à vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group transition-all duration-300 hover:scale-105">
              <Link href="mailto:remi@example.com">
                <Mail className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:bounce" />
                Envoyer un e-mail
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group transition-all duration-300 hover:scale-105">
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Se connecter sur LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Rémi KORZENIOWSKI. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="transition-all duration-300 hover:scale-125 hover:rotate-6">
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="transition-all duration-300 hover:scale-125 hover:-rotate-6">
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="transition-all duration-300 hover:scale-125 hover:rotate-12">
              <Link href="mailto:remi@example.com">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
