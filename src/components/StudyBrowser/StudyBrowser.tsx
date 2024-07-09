function StudyBrowser() {
    return (
        <>
            This is the Study Browser component.
        </>
    )
}

export default StudyBrowser;


/*
import './StudyBrowser.css'
import {useState} from 'react';
import axios from 'axios';
import StudyBrowserFilters from "./StudyBrowserFilters.tsx";
import StudyBrowserDataTable from "./StudyBrowserDataTable.tsx";

function StudyBrowser() {
    const [filters, setFilters] = useState({
        variantType: '',
        genome: [],
        type: []
    });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const params = {
            browserType: filters.variantType,
            type: filters.type.join(','),
            species: filters.genome.join(',')
        };

        try {
            const response = await axios.get('https://www.ebi.ac.uk/dgva/webservices/rest/v1/meta/studies/all', {params});
            const extractedData = response.data.response[0].result.map(item => ({
                id: item.id,
                name: item.name,
                speciesScientificName: item.speciesScientificName,
                type: item.type
            }));
            setData(extractedData);
        } catch (error) {
            console.error('Error fetching data', error);
        }
        setLoading(false);
    };

    const handleReset = () => {
        setFilters({
            variantType: '',
            genome: [],
            type: []
        });
    };

    return (
        <div className="study-browser-container">
            <div className="filters">
                <StudyBrowserFilters filters={filters} setFilters={setFilters}/>
                <div>
                    <button onClick={fetchData}>Search</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="data-table">
                {loading ? <p>Loading...</p> : <StudyBrowserDataTable data={data}/>}
            </div>
        </div>
    );
};


export default StudyBrowser;*/
