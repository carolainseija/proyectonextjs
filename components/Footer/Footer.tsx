import React from 'react'
import Link from 'next/link'
import { Segment, Container } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <div className="colophon">
        <p className="colophon-entry">
          hecho por: 
          <a
            target="_blank"
            href="#"
            title="Freepik"
          >
            Carolain
          </a>
          {' from '}
          <a target="_blank" href="https://vercel.com/" title="Flaticon">
          deploy Vercel
          </a>
        </p>
        <p className="colophon-entry">
          Repositorio 
          <a
            className="acnor"
            target="_blank"
            href="https://github.com/carolainseija/proyectonextjs"
            title="Mercado Online"
          >
            Github
          </a>
          {' at '}
          <a
            target="_blank"
            href="#"
            title="Flaticon"
          >
            Gracias por visitarnos
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
)

export default Footer
