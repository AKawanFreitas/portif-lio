import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className={`${styles.about} section`}>
      <div className="container">
        <p className={styles.label}>Quem sou eu</p>
        <h2 className="section-title">Sobre mim</h2>
        <div className="gold-line" />

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Sou <strong>Antonio Kawan</strong>, Cientista da Computação apaixonado por entender
              como as coisas funcionam por dentro — desde algoritmos até sistemas complexos.
            </p>
            <p>
              Tenho experiência em desenvolvimento de software, com foco em soluções
              eficientes, código limpo e boas práticas de engenharia. Gosto de trabalhar
              em projetos que unem lógica, criatividade e impacto real.
            </p>
            <p>
              Quando não estou codando, estou explorando novas tecnologias, lendo sobre
              computação teórica ou contribuindo com projetos open-source.
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Localização</span>
                <span className={styles.infoValue}>Brasil</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Disponibilidade</span>
                <span className={styles.infoValue}>Aberto a oportunidades</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Foco</span>
                <span className={styles.infoValue}>Backend & Sistemas</span>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            {STATS.map(({ number, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statNumber}>{number}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { number: '10+', label: 'Projetos Concluídos' },
  { number: '3+', label: 'Anos de Experiência' },
  { number: '5+', label: 'Tecnologias Dominadas' },
  { number: '100%', label: 'Dedicação' },
]
