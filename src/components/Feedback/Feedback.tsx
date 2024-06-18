import './Feedback.css'

function Feedback() {
    return (
        <div className="feedback">
            <h2>Feedback</h2>
            <p>If you have any questions related to the European Variation Archive resource, please
                <a href="mailto:eva-helpdesk@ebi.ac.uk" target="_blank" rel="noopener noreferrer">contact us</a>.</p>
            <p>Follow us on Twitter : <a href="https://twitter.com/evarchive" target="_blank" rel="noopener noreferrer">@evarchive</a></p>

            <iframe src="https://www.surveymonkey.co.uk/r/eva-feedback" frameBorder="0" width="100%"
                    height="1490"></iframe>
        </div>
    );
}

export default Feedback;