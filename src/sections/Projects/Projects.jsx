import React, { useState } from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'Sistema de Busca Inteligente',
    description:
      'Motor de busca com indexação invertida e ranking por relevância, implementado do zero em Python com suporte a queries booleanas e fuzzy search.',
    tags: ['Python', 'Algoritmos', 'NLP'],
    github: 'https://github.com/',
    live: null,
    featured: true,
  },
  {
    title: 'Compilador MiniLang',
    description:
      'Compilador completo para uma linguagem didática: análise léxica, sintática, semântica e geração de código intermediário.',
    tags: ['C++', 'Compiladores', 'Autômatos'],
    github: 'https://github.com/',
    live: null,
    featured: true,
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Painel de análise de dados em tempo real com visualizações interativas, integração com APIs REST e autenticação JWT.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/',
    live: 'https://exemplo.com',
    featured: true,
  },
  {
    title: 'API de Autenticação',
    description:
      'Serviço de autenticação robusto com JWT, refresh tokens, rate limiting e suporte a OAuth2.',
    tags: ['Node.js', 'Docker', 'JWT'],
    github: 'https://github.com/',
    live: null,
    featured: false,
  },
  {
    title: 'Simulador de Rede Neural',
    description:
      'Implementação de redes neurais multicamadas do zero, com backpropagation e diferentes funções de ativação.',
    tags: ['Python', 'NumPy', 'Machine Learning'],
    github: 'https://github.com/',
    live: null,
    featured: false,
  },
  {
    title: 'CLI Task Manager',
    description:
      'Gerenciador de tarefas pela linha de comando com sincronização em arquivo JSON e interface colorida.',
    tags: ['Python', 'CLI', 'Linux'],
    github: 'https://github.com/',
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = PROJECTS.filter(p => p.featured)
  const displayed = showAll ? PROJECTS : featured

  return (
    <section id="projetos" className={`${styles.projects} section`}>
      <div className="container">
        <p className={styles.label}>O que construí</p>
        <h2 className="section-title">Projetos</h2>
        <div className="gold-line" />

        {/* Featured */}
        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        {/* All projects toggle */}
        <div className={styles.allSection}>
          <div className={styles.allHeader}>
            <h3 className={styles.allTitle}>Todos os projetos</h3>
            <button
              className={styles.toggleBtn}
              onClick={() => setShowAll(v => !v)}
            >
              {showAll ? 'Ver menos ↑' : `Ver todos (${PROJECTS.length}) ↓`}
            </button>
          </div>

          <div className={styles.allGrid}>
            {PROJECTS.filter(p => !p.featured).map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }) {
  return (
    <article className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}>
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <HexIcon />
        </div>
        <div className={styles.cardLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label="Ver projeto">
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.cardTags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

function HexIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
