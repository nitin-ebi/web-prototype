import './Api.css'

function Api() {
    return (
        <div className="api">
            <h2>API</h2>
            <div>
                <h3>The general structure of a EVA REST web service URL is one of:</h3>
                <ul>
                    <li><p><a href="https://www.ebi.ac.uk/eva/webservices/rest/swagger-ui.html" target="_blank" rel="noopener noreferrer">Queries to retrieve
                        variant information (locus, genotypes, evidence etc.,) -
                        http://www.ebi.ac.uk/eva/webservices/rest/&#123;version&#125;/&#123;category&#125;/IDs/&#123;resource&#125;?&#123;filters&#125;</a>
                    </p>
                    </li>
                    <li><p><a href="https://www.ebi.ac.uk/eva/webservices/identifiers/swagger-ui.html" target="_blank" rel="noopener noreferrer">Queries to
                        retrieve locus information by accession ID -
                        http://www.ebi.ac.uk/eva/webservices/identifiers/&#123;version&#125;/&#123;category&#125;/&#123;ID&#125;</a>
                    </p>
                    </li>
                </ul>
                <h3>Where:</h3>
                <p>
                    * <span className="api-span">version</span>: indicates the version of the API, this defines the
                    available filters and JSON schema to be returned. Currently there is only version 'v1'.
                    <br/> * <span className="api-span">category</span>: this defines what objects we want to query.
                    Currently there are five different categories for variant information queries: variants, segments,
                    genes, files and studies and two categories for accessioning queries: submitted-variants (to query
                    by SS ID) and clustered-variants (to query by RS IDs)
                    <br/> * <span className="api-span">resource</span>: specifies the resource to be returned, therefore
                    the JSON data model.
                    <br/> * <span className="api-span">filters</span>: each specific endpoint allows different filters.
                </p>
                <div>
                    <p>REST web services have been implemented using GET protocol since only queries are allowed so far.
                        Several IDs can be concatenated using comma as separator.<br/>For more detailed information
                        about the API and filters you can visit the <a href="https://github.com/ebivariation/eva/wiki"
                                                                       target="_blank" rel="noopener noreferrer">project wiki</a> and Swagger
                        documentation for <a href="https://www.ebi.ac.uk/eva/webservices/rest/swagger-ui.html"
                                             target="_blank" rel="noopener noreferrer">variant information queries</a> and <a
                            href="https://www.ebi.ac.uk/eva/webservices/identifiers/swagger-ui.html" target="_blank" rel="noopener noreferrer">accessioning
                            locus queries</a>.</p>
                </div>
                <div>
                    <h3>Some example of queries include:</h3>
                    <p>* To fetch all the variants in a segment region:
                        <br/> <a
                            href="http://www.ebi.ac.uk/eva/webservices/rest/v1/segments/11:128446-128446/variants?species=hsapiens_grch37"
                            target="_blank" rel="noopener noreferrer">http://www.ebi.ac.uk/eva/webservices/rest/v1/segments/11:128446-128446/variants?species=hsapiens_grch37</a>
                    </p>

                    <p><br/> * To fetch all the info for a variant by ID:
                        <br/> <a
                            href="http://www.ebi.ac.uk/eva/webservices/rest/v1/variants/rs666/info?species=hsapiens_grch37"
                            target="_blank" rel="noopener noreferrer">http://www.ebi.ac.uk/eva/webservices/rest/v1/variants/rs666/info?species=hsapiens_grch37</a>
                    </p>

                    <p><br/> * To fetch locus info for a variant by <a
                        href="https://www.ncbi.nlm.nih.gov/books/NBK44374/#Content.what_is_the_ncbi_assay_id_or__ss"
                        target="_blank" rel="noopener noreferrer">SubSNP ID (SS ID)</a>:
                        <br/> <a href="https://www.ebi.ac.uk/eva/webservices/identifiers/v1/submitted-variants/99308221"
                                 target="_blank" rel="noopener noreferrer">https://www.ebi.ac.uk/eva/webservices/identifiers/v1/submitted-variants/99308221</a>
                    </p>

                    <p><br/> * To fetch locus and type info for a variant by <a
                        href="https://www.ncbi.nlm.nih.gov/books/NBK44417/#Content.what_is_a_reference_snp_or__rs_i"
                        target="_blank">RefSNP ID (RS ID)</a>:
                        <br/> <a href="https://www.ebi.ac.uk/eva/webservices/identifiers/v1/clustered-variants/17870277"
                                 target="_blank" rel="noopener noreferrer">https://www.ebi.ac.uk/eva/webservices/identifiers/v1/clustered-variants/17870277</a>
                    </p>

                    <p><br/> * To fetch associated SubSNP IDs (SS IDs) for a variant by RefSNP IDs (RS IDs):
                        <br/> <a
                            href="https://www.ebi.ac.uk/eva/webservices/identifiers/v1/clustered-variants/17870277/submitted"
                            target="_blank" rel="noopener noreferrer">https://www.ebi.ac.uk/eva/webservices/identifiers/v1/clustered-variants/17870277/submitted</a>
                    </p>

                    <p><br/> * To fetch all the Short Genetics Variations studies:
                        <br/> <a href="http://www.ebi.ac.uk/eva/webservices/rest/v1/meta/studies/all"
                                 target="_blank" rel="noopener noreferrer">http://www.ebi.ac.uk/eva/webservices/rest/v1/meta/studies/all</a></p>

                    <p><br/> * To fetch all the Structural Variations studies:
                        <br/> <a href="https://www.ebi.ac.uk/dgva/webservices/rest/v1/meta/studies/all"
                                 target="_blank" rel="noopener noreferrer">https://www.ebi.ac.uk/dgva/webservices/rest/v1/meta/studies/all</a></p>

                    <p><br/> * To fetch all info of a study:
                        <br/> <a href="http://www.ebi.ac.uk/eva/webservices/rest/v1/studies/PRJEB4019/summary"
                                 target="_blank" rel="noopener noreferrer">http://www.ebi.ac.uk/eva/webservices/rest/v1/studies/PRJEB4019/summary</a>
                    </p>

                    <p><br/> * To fetch all file information of a study:
                        <br/> <a
                            href="http://www.ebi.ac.uk/eva/webservices/rest/v1/studies/PRJEB4019/files?species=hsapiens_grch37"
                            target="_blank" rel="noopener noreferrer">http://www.ebi.ac.uk/eva/webservices/rest/v1/studies/PRJEB4019/files?species=hsapiens_grch37</a>
                    </p>
                </div>

                <h3>Rate Limiting for Variant Region queries</h3>
                <p>
                    Rate limiting has been implemented on Variant Region queries in order to ensure fairness
                    when serving multiple client requests. Therefore, please limit Variant Region API request rates
                    to <b>5 requests/second</b>.
                    Higher rates of request might result in a HTTP 429 (Too many requests) response.

                    <br/><br/>
                    Also, when specifying the &quot;limit&quot; parameter in these region queries, please restrict it
                    to <b>10000 or lower</b>. Greater values for this parameter are disallowed and will result in a HTTP
                    500 (Bad Request) response. Please note that this restriction on the &quot;limit&quot; parameter
                    does not mean that large queries are forbidden altogether. It just means that only a maximum of
                    10,000 records will be served in a <b>single</b> request. Therefore, a client program can employ the
                    limit parameter in conjunction with the "skip" parameter to "page through" the results from a large
                    region. For example: the following queries can be used to page through the 20,259 results in the
                    variant region 105000001-105500000 in chromosome 1 of the Mouse grcm38 assembly.
                    <ul>
                        <li>
                            <a href="https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:105000001-105500000/variants?species=mmusculus_grcm38&limit=10000"
                               target="_blank" rel="noopener noreferrer">
                                https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:105000001-105500000/variants?species=mmusculus_grcm38&limit=10000
                            </a>
                        </li>
                        <li>
                            <a href="https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:105000001-105500000/variants?species=mmusculus_grcm38&limit=10000&skip=10000"
                               target="_blank" rel="noopener noreferrer">
                                https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:105000001-105500000/variants?species=mmusculus_grcm38&limit=10000&skip=10000
                            </a>
                        </li>
                        <li>
                            <a href="https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:105000001-105500000/variants?species=mmusculus_grcm38&limit=10000&skip=20000"
                               target="_blank" rel="noopener noreferrer">
                                https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/1:105000001-105500000/variants?species=mmusculus_grcm38&limit=10000&skip=20000
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Api;