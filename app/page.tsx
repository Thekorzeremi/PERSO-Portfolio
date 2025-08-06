"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, Globe, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
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
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <div className="flex ml-32">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">RK</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                A propos
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Compétences
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projets
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Me contacter
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      <section className="container mx-auto py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Rémi KORZENIOWSKI
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              Développeur fullstack
            </p>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Passionné par les solutions web innovantes avec des technologies modernes. 
              Spécialisé dans les écosystèmes React, NodeJS et Symfony.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#projects">
                Mes projets
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Soyons en contact
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:remi@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto py-24">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">A propos de moi</h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Je suis un développeur web fullstack passionné avec plus de 3 ans d'expérience dans la création 
              d'applications web évolutives. J'aime transformer des problèmes complexes en solutions simples, 
              élégantes et intuitives.
            </p>
            <p>
              Mon expertise couvre les frameworks frontend modernes comme React, 
              les technologies backend telles que Node.js et Symfony, ainsi que les plateformes cloud comme Vercel. 
              Je suis toujours enthousiaste à l'idée d'apprendre de nouvelles technologies et de rester à jour sur les tendances du secteur.
            </p>
            <p>
              Quand je ne code pas, vous pouvez me trouver en train de contribuer à des projets open-source, 
              d'écrire des articles techniques ou d'explorer les dernières nouveautés en matière de développement web.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Télécharger mon CV
            </Link>
          </Button>
        </div>
      </section>

      <section id="skills" className="container mx-auto py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">Compétences & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Frontend
                </CardTitle>
                <CardDescription>
                  Création d'interfaces utilisateur réactives et interactives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Backend
                </CardTitle>
                <CardDescription>
                  Création d'applications serveur et d'APIs robustes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Outils & DevOps
                </CardTitle>
                <CardDescription>
                    Outils de développement et plateformes de déploiement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
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
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Projets phares</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Voici quelques-uns de mes projets récents qui illustrent mes compétences en développement fullstack.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
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
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Travaillons ensemble</h2>
          <p className="text-muted-foreground">
            Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants.
            Discutons de la manière dont nous pouvons donner vie à vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:remi@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Envoyer un e-mail
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
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
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
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
