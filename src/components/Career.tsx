import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
           Started my journey in web development by
            learning HTML, CSS, and JavaScript. Built small
             projects to understand basics and improve
              problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend / Full Stack Developer (Projects)</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
             Worked on multiple projects using React.js,
              Node.js, and MongoDB. Built responsive websites 
              and full-stack applications with authentication and APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
             Currently improving my skills in
              full-stack development, exploring
               advanced technologies, and looking
                for real-world opportunities to grow
                 as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
