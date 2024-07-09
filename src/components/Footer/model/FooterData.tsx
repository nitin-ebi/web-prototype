export function getEVAFooterHeadingData() {
    return {
        mainHeading: {text: "EMBL-EBI", url: "//www.ebi.ac.uk/"},
        subHeading: {text: "Intranet for staff", url: "//intranet.ebi.ac.uk"}
    }
}


export function getEVAFooterColumnsData() {
    let services = {
        columnHeading: {text: "Services", url: "//www.ebi.ac.uk/services"},
        columnContent: [
            {text: "Data resources and tools", url: "//www.ebi.ac.uk/services/data-resources-and-tools"},
            {text: "Data submission", url: "//www.ebi.ac.uk/submission/"},
            {text: "Support and feedback", url: "//www.ebi.ac.uk/support"},
            {text: "Licensing", url: "//www.ebi.ac.uk/licencing"},
            {text: "Long-term data preservation", url: "//www.ebi.ac.uk/long-term-data-preservation"}
        ]
    }

    let research = {
        columnHeading: {text: "Research", url: "//www.ebi.ac.uk/research"},
        columnContent: [
            {text: "Publications", url: "//www.ebi.ac.uk/research/publications"},
            {text: "Research groups", url: "//www.ebi.ac.uk/submission/"},
            {text: "Postdocs", url: "//www.ebi.ac.uk/research/postdocs"},
            {text: "PhDs", url: "//www.ebi.ac.uk/research/eipp"}
        ]
    }

    let training = {
        columnHeading: {text: "Training", url: "//www.ebi.ac.uk/research"},
        columnContent: [
            {text: "Live training", url: "//www.ebi.ac.uk/training/live-events"},
            {text: "On-demand training", url: "//www.ebi.ac.uk/training/on-demand"},
            {text: "Support for trainers", url: "//www.ebi.ac.uk/training/trainer-support"},
            {text: "Contact organisers", url: "//www.ebi.ac.uk/training/contact-us"}
        ]
    }

    let industry = {
        columnHeading: {text: "Industry", url: "//www.ebi.ac.uk/industry"},
        columnContent: [
            {text: "Members Area", url: "//www.ebi.ac.uk/industry/private/members-area/"},
            {text: "Contact Industry team", url: "//www.ebi.ac.uk/industry/contact-us"}
        ]
    }

    let about = {
        columnHeading: {text: "About", url: "//www.ebi.ac.uk/research"},
        columnContent: [
            {text: "Contact us", url: "//www.ebi.ac.uk/about/contact"},
            {text: "Events", url: "//www.ebi.ac.uk/about/events"},
            {text: "Jobs", url: "//www.ebi.ac.uk/about/jobs"},
            {text: "News", url: "//www.ebi.ac.uk/about/news"},
            {text: "People and groups", url: "//www.ebi.ac.uk/about/people"}
        ]
    }

    return [services, research, training, industry, about]
}