import { motion } from "motion/react";

function Skills() {

    const skills = [
        {
            Image: "./images/html.png",
            Name: "HTML"
        },
        {
            Image: "./images/css.png",
            Name: "CSS"
        },
        {
            Image: "./images/bootstrap.png",
            Name: "BOOTSTRAP"
        },
        {
            Image: "./image/react.png",
            Name: "REACT JS"
        }
    ]

    return (
        <div>
            <div className="skill-sec-1 container px-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="skillTitle-sec text-center">
                            <h4>
                                What I Have ?
                            </h4>
                            <h2>See my skills</h2>
                        </div>
                    </div>
                    <div className="row skill-img mb-5">
                        {skills.map((skill) => (
                            // <div className="rows">
                            <div className="col-lg-3">
                                <motion.div drag
                                    dragConstraints={{
                                        top: -50,
                                        left: -50,
                                        right: 50,
                                        bottom: 50,
                                    }} className="skill-card text-center">
                                    <img src={skill.Image} className="img-fluid mb-4" style={{ width: "100px" }} />
                                    <h4>{skill.Name}</h4>
                                </motion.div>
                            </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
