// MUI Icons
import BarChartIcon from '@mui/icons-material/BarChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import StoreIcon from '@mui/icons-material/Store';
import SchoolIcon from '@mui/icons-material/School';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import "./interests.scss"

export default function Interests() {
  return (
    <>
        <h1 className="interests-header">
            Areas of Interest
        </h1>
        <div className="interests">
            <div className="interest">
                <BarChartIcon />
                <h1 className="interest-title">
                    Data Analytics
                </h1>
                <p className="interest-par">
                    I examine data sets to find trends and draw 
                    conclusions about the information 
                    they contain.
                </p>
            </div>
            <div className="interest">
                <QueryStatsIcon />
                <h1 className="interest-title">
                    Data Mining and Statistical Analysis
                </h1>
                <p className="interest-par">
                    I examine a business issue, turn it into a data question, 
                    develop predictive models to address the issue, 
                    and then narratively present the results.

                </p>
            </div>
            <div className="interest">
                <FilterDramaIcon />
                <h1 className="interest-title">
                    Cloud Computing
                </h1>
                <p className="interest-par">
                    I use AWS and Google Cloud to
                     design and execute machine 
                    learning algorithms
                </p>
            </div>
            <div className="interest">
                <StoreIcon />
                <h1 className="interest-title">
                    Business Intelligence and Strategy
                </h1>
                <p className="interest-par">
                    I do data integrity, test design, analysis, validation, and 
                    documentation.
                </p>
            </div>
            <div className="interest">
                <SchoolIcon />
                <h1 className="interest-title">
                    Machine Learning & Deep Learning
                </h1>
                <p className="interest-par">
                    I used supervised classification algorithms and deep neural 
                    networks for classification, regression, or prediction. 
                </p>
            </div>
            <div className="interest">
                <RecordVoiceOverIcon />
                <h1 className="interest-title">
                    Natural Language Processing
                </h1>
                <p className="interest-par">
                    I give computers the ability to understand text and spoken 
                    words in much the same way human beings can.
                </p>
            </div>
        </div>
    </>
  )
}
