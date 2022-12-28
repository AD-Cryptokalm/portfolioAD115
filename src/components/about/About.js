import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="about-title">
          <span className="letter01">À</span>
          <span className="letter02"> </span>
          <span className="letter03">P</span>
          <span className="letter04">r</span>
          <span className="letter05">o</span>
          <span className="letter06">p</span>
          <span className="letter07">o</span>
          <span className="letter09">s</span>
        </h2>
        <div className="about-card tilt-box-wrap">
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over" id="t_overStop"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <div className="about-description tilt-box">
            <strong>
              Aprés un an de formation en autodidacte, je suis aujourd'hui
              diplômé de la formation développeur, intégrateur web de
              OpenClassRooms. J'ai choisi de me spécialiser dans le
              développement frontend afin de pouvoir créer des expèriences
              utilisateur intuitifs, dynamiques et uniques. Mon expèrience en
              tant que manager en logistique, me permet de faire face aux
              problèmes et contraintes avec plus de sérénité et de toujours
              chercher des solutions et axes d'amélioration dans tous les
              domaines. Dynamique et social, je m'intègre rapidement à un nouvel
              environement de travail et sais montrer mon envie de m'investir et
              d'avancer ensemble.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
