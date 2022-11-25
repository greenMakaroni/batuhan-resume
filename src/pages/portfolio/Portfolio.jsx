import Project from "../../components/project/Project"
import Navigation from "../../components/navigation/Navigation"
import Footer from "../../components/footer/Footer"

import "./portfolio.scss"

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <div className='portfolio-main'>
        <h1 className="portfolio-header"> MY BEST PROJECTS </h1>
        <Project
          image=""
          title="Network Intrusion Detection"
          description="Network intrusion detection system using Supervised classification algorithms and MLP"
          learned={[
            "How to build neural network model.",
            "How to tune the hyperparameters of network model",
            "Which supervised algorithm operates best with which data.",
            "Importance of data processing.",
            "Working principle of multilayer perceptron."
          ]}
          link="https://github.com/batuozgurbasal/Network-Intrusion-Detection-System-"
        />
        <Project
          image=""
          title="Pandas Sales Analysis"
          description="Analysing sales data with python using pandas. "
          learned={[
            "Deep understanding of pandas library.",
            "The ability to perform feature engineering.",
            "Making data analysis more effective by using data visualizations.",
            "Cleaning and prepare data for analysis."
          ]}
          link="https://github.com/batuozgurbasal/Sales-Analysis-with-Pandas-Library"
        />
        <Project
          image=""
          title="Click Through Rate Prediction (Master's Project)"
          description="Multi Attentional Neural Factorization Machines: A state of art model for click through rate prediction. This project was awarded best project of the cohort, Robotics & Intelligent Systems (2022)"
          learned={[
            "Deep understanding of how the AI algorithms work.",
            "The connection between advertisement and data.",
            "How to work with larger datasets.",
            "How to implement cloud computing in order to train the model."
          ]}
          link="https://github.com/batuozgurbasal/Building-a-State-of-Art-Click-Through-Rate-Prediction-Model"
        />
        <Footer />
      </div>
    </>

  )
}
