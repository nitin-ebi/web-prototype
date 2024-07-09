/*
function StudyBrowserFilters({filters, setFilters}) {
    function handleFilterChange(e) {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    };

    function handleMultiSelectChange (e, name) {
        const options = e.target.options;
        const values = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        setFilters(prev => ({...prev, [name]: values}));
    };

    return (
        <div>
            <div>
                <label>Variant Type:</label>
                <select name="variantType" value={filters.variantType} onChange={handleFilterChange}>
                    <option value="">Select</option>
                    <option value="sgv">SGV</option>
                    <option value="sv">SV</option>
                </select>
            </div>
            <div>
                <label>Genome:</label>
                <select name="genome" multiple value={filters.genome}
                        onChange={(e) => handleMultiSelectChange(e, 'genome')}>
                    <option value="genome1">Genome 1</option>
                    <option value="genome2">Genome 2</option>
                </select>
            </div>
            <div>
                <label>Type:</label>
                <select name="type" multiple value={filters.type} onChange={(e) => handleMultiSelectChange(e, 'type')}>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                </select>
            </div>
        </div>
    );
};

export default StudyBrowserFilters;*/
