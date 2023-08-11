import React from "react";
import './styles.css'
import logoFiverr from './assets/fiverr_logo.svg'


function LandingPage() {
  return (
    <body>
      <header>
        <nav className="cont-items">
          <ul>
            <li>
              <a href="#about-me">
                <span>01.</span>Sobre mi
              </a>
            </li>
            <li>
              <a href="#projects">
                <span>02.</span>Proyectos
              </a>
            </li>
            <li>
              <a href="#contact-me">
                <span>03.</span>Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="intro">
          <div className="intro-text">
            <h4 className="greeting m-weight">¡Hola! Soy</h4>
            <h1 className="title1">Emmanuel.</h1>
            <h2 className="title2">Desarrollador y creativo.</h2>
          </div>

          <div className="intro-icon">
            <div className="animated-icon">
              <div className="computer">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="-10 -10 530 530"
                >
                  <g>
                    <g>
                      <path
                        d="M467,0H45C20.187,0,0,20.187,0,45v301c0,24.813,20.187,45,45,45h136v32.509c-34.192,6.968-60,37.271-60,73.491
                        c0,8.284,6.716,15,15,15h240c8.284,0,15-6.716,15-15c0-36.219-25.808-66.522-60-73.491V391h136c24.813,0,45-20.187,45-45V45
                        C512,20.187,491.813,0,467,0z M358.43,482H153.57c6.19-17.461,22.873-30,42.43-30h120C335.557,452,352.239,464.539,358.43,482z
                         M211,422v-31h90v31H211z M482,346c0,8.271-6.729,15-15,15c-23.005,0-399.629,0-422,0c-8.271,0-15-6.729-15-15v-15h452V346z
                         M482,301H30V45c0-8.271,6.729-15,15-15h422c8.271,0,15,6.729,15,15V301z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M166,91h-61c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S174.284,91,166,91z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M166,151h-61c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S174.284,151,166,151z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M166,211h-61c-8.284,0-15,6.716-15,15s6.716,15,15,15h61c8.284,0,15-6.716,15-15S174.284,211,166,211z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M413.615,107.104c-1.773-1.037,13.354,8.097-74.591-45.225c-4.767-2.889-10.74-2.899-15.517-0.022l-75.067,45.215
                        c-4.575,2.672-7.441,7.635-7.441,12.958v90.647c0.001,5.251,2.748,10.121,7.243,12.837l75,45.324
                        c4.829,2.921,10.862,2.815,15.516,0l75-45.324c4.495-2.716,7.242-7.586,7.242-12.838v-90.647
                        C421,111.063,413.713,107.204,413.615,107.104z M316,229.409l-45-27.194V146.62l45,27.194V229.409z M331,147.827l-45.963-27.776
                        l46.185-27.819l45.812,27.776L331,147.827z M391,202.215l-45,27.194v-55.595l45-27.194V202.215z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="about-me" id="about-me">
          <div className="title">
            <h2 className="subtitle">
              <span>01.</span>Sobre mi
            </h2>
          </div>
          <div className="cont-about">
            <div className="cont-lines">
              <div className="vl1"></div>
              <div className="vl2"></div>
            </div>
            <div className="cont-texts">
              <p className="t1">
                Mi nombre es Emmanuel Manzo, Ingeniero en Tecnologías Computacionales por el Tecnológico de Monterrey. Soy un joven mexicano apasionado
                por la tecnología y el diseño UX/UI.
              </p>
              <p className="t2">
                A través del <span className="primario">diseño</span> y{" "}
                <span className="primario">desarrollo web</span> busco
                contribuir a la solución de problemáticas sociales, así como
                ofrecer a las personas experiencias de usuario intuitivas y
                dinámicas.
              </p>
              <h4>Habilidades: </h4>
              <div className="skills">
                <div className="s1">
                  <ul>
                    <li className="skill">
                      <i className="fas fa-spinner"></i>
                      <p>React</p>
                    </li>
                    <li className="skill">
                      <i className="fas fa-spinner"></i>
                      <p>Figma</p>
                    </li>
                    <li className="skill">
                      <i className="fas fa-spinner"></i>
                      <p>Javascript</p>
                    </li>
                  </ul>
                </div>
                <div className="s2">
                  <ul>
                    <li className="skill">
                      <i className="fas fa-spinner"></i>
                      <p>HTML, CSS</p>
                    </li>
                    <li className="skill">
                      <i className="fas fa-spinner"></i>
                      <p>UX / UI</p>
                    </li>
                    <li className="skill">
                      <i className="fas fa-spinner"></i>
                      <p>Firebase</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cont-picture">
              <div className="img-round"></div>

              <a href="https://github.com/EmmanuelBoM">
                <i className="fab fa-github-square icono-gh"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="title">
            <h2 className="subtitle">
              <span>02.</span>Proyectos
              <p className="descripcion-seccion-proyectos">
                Algunos de mis trabajos destacados de desarrollo y diseño.
              </p>
            </h2>
          </div>
          <div className="cont-cards">
          <div className="proyecto">
              <div className="img-proyecto wtw"></div>
              <div className="overlay-proyecto"></div>
              <h4 className="nombre-proyecto">Wheel The World Dashboard</h4>
              <div className="cont-categorias-proyecto">
                <div className="categoria">
                  <p className="nombre-categoria">Diseño</p>
                </div>
                <div className="categoria">
                  <p className="nombre-categoria">Desarrollo</p>
                </div>
              </div>
              <p className="descripcion-proyecto">
                Aplicación de seguimiento de estadísticas y generación de reportes desarrollada para la startup <span className="primario">Wheel The World</span>.  
              </p>
              
            </div>
            <div className="proyecto">
              <div className="img-proyecto rhesident"></div>
              <div className="overlay-proyecto"></div>
              <h4 className="nombre-proyecto">Rhesident Org.</h4>
              <div className="cont-categorias-proyecto">
                <div className="categoria">
                  <p className="nombre-categoria">Diseño</p>
                </div>
                <div className="categoria">
                  <p className="nombre-categoria">Desarrollo</p>
                </div>
              </div>
              <p className="descripcion-proyecto">
                Página web desarrollada para la organización{" "}
                <span className="primario">Rhesident Org.</span> que utiliza
                elementos interactivos y un diseño responsive para mostrar la
                escencia, objetivos y trabajo de la organización.
              </p>

              <a href="https://www.rhesident.org/" className="enlace-proyecto">
                <i class="fa-solid fa-link icono-enlace"></i>
              </a>
            </div>

            <div className="proyecto">
              <div className="img-proyecto empowering"></div>
              <div className="overlay-proyecto"></div>
              <h4 className="nombre-proyecto">empoweringrace</h4>
              <div className="cont-categorias-proyecto">
                <div className="categoria">
                  <p className="nombre-categoria">Diseño</p>
                  
                </div>
              </div>
              <p className="descripcion-proyecto">
                Diseño moderno y corporativo realizado para la plataforma de la
                consultora y conferencista Grace Sandoval.
              </p>
              <a href="https://empoweringrace.com/" className="enlace-proyecto">
                <i class="fa-solid fa-link icono-enlace"></i>
              </a>
            </div>

            <div className="proyecto">
              <div className="img-proyecto bamx"></div>
              <div className="overlay-proyecto"></div>
              <h4 className="nombre-proyecto">Gestión BAMX Morelos</h4>
              <div className="cont-categorias-proyecto">
                <div className="categoria">
                  <p className="nombre-categoria">Diseño</p>
                </div>
                <div className="categoria">
                  <p className="nombre-categoria">Desarrollo</p>
                </div>
              </div>
              <p className="descripcion-proyecto">
                Propuesta de aplicación web desarrollada para el <span className="primario">Banco de Alimentos de Morelos</span>  que permite el seguimiento de la recolección de donativos a esta organización.
              </p>
              
            </div>
          </div>
        </section>

        <section className="contact-me" id="contact-me">
          <div className="title">
            <h2 className="subtitle">
              <span>03.</span>Contacto
              <p className="descripcion-seccion-contacto">
                Si tienes un <span>proyecto o idea</span>  en mente en el que podamos trabajar juntos o te interesa una <span>cotización</span>, puedes contactarme a través de estos medios.
              </p>
            </h2>
          </div>
          <div className="cont-contact">
            <div className="cont-items">
              <div className="cont-email">
                <h3 className="correo">emmanuelbmanzo@gmail.com</h3>
              </div>
              <div className="cont-media">
                <a href="https://www.linkedin.com/in/emmanuel-bolteada-manzo-5408471b8/" target="_blank">
                  <i className="fab fa-linkedin-in logo-linkedin"></i>
                </a>
                <a href="https://www.fiverr.com/emmanuelbmanzo/design-a-protoype-for-your-website-ui-ux" target="_blank">
                  <img src={logoFiverr} alt="" className="logo-fiverr"/>
                </a>
              </div>
            </div>
            <div className="cont-lines">
              <div className="vl1"></div>
              <div className="vl2"></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <h4 className="primario"><span>Emmanuel Manzo. 2023.  </span> </h4>
      </footer>
    </body>
  );
}

export default LandingPage;
