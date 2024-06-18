
function Home() {
    return (
        <div id="home-page" className="hide-div">
            <div className="row overview-main">
                <div className="small-12 medium-8 columns">
                    <div>
                        <h3><span className="icon icon-generic" data-icon="&"> </span>Overview</h3>
                        <div><p> The European Variation Archive is an open-access database of all types of genetic
                            variation data from all species.</p></div>
                        <div><p> All users can <a href="?Study Browser "> download data </a> from any study, or <a
                            href="?Submit Data"> submit their own data</a> to the archive. You can also query
                            all variants in the EVA by study, gene, chromosomal location or dbSNP identifier using
                            our <a href="?Variant Browser"> Variant Browser</a>. </p></div>
                        <div><p> We will be adding new features to the EVA on a regular basis, and welcome <a
                            href="mailto:eva-helpdesk@ebi.ac.uk" target="_top">your comments and feedback</a>.
                        </p></div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="search-snps">
                            <h3><span className="icon icon-functional" data-icon="1"> </span>Search for SNPs</h3>
                            <form id="snpSearch" name="local-search" action="./variant" method="GET">
                                <fieldset>
                                    <div>
                                        <div className="small-10 medium-10 columns">
                                            <input type="text" name="accessionID" id="accession-search-box"
                                                   placeholder="ex: rs123 or ss567 or comma/space separated RS or SS IDs"></input>
                                        </div>

                                        <div className="small-2 medium-2 columns">
                                            <div className="input-group-button">
                                                <input className="button" name="accessionID"
                                                       id="accession-search-button" value="Search"
                                                       type="submit"></input>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                            <p>The RS ID release <span id="release-version"></span> is available in our
                                <a id="release-ftp-link" target="_blank" rel="noopener noreferrer">FTP</a> or through our
                                <a href="https://www.ebi.ac.uk/eva/webservices/identifiers/swagger-ui.html"
                                   target="_blank" rel="noopener noreferrer">API</a>
                                . See <a href="?RS-Release" target="_blank" rel="noopener noreferrer">release page</a> for details.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="small-12 medium-4 columns">
                    <h3><span className="icon icon-generic" data-icon="N"> </span>News</h3>
                    <div id="twitter-widget"></div>
                </div>
            </div>
            <br/>

            <div className="padding-bottom-large"></div>
            <div className="row">
                <div className="columns"><h3><span className="icon icon-generic" data-icon="g"> </span>Statistics</h3>
                </div>
                <div className="small-12 medium-6 columns">
                    <div className="row">
                        <div className="small-10 medium-10 medium-offset-2">
                            <h4>Short genetic variants studies (&lt;50bp)</h4>
                        </div>
                    </div>
                    <div id="eva-statistics"></div>
                </div>
                <div className="small-12 medium-6 columns">
                    <div className="row">
                        <div className="small-10 medium-10 medium-offset-2">
                            <h4 className="padding-bottom">Structural variants studies (&gt;50bp)</h4>
                        </div>
                    </div>
                    <div id="dgva-statistics"></div>
                </div>
            </div>

            <div className="row">
                <div className="small-12 medium-12 columns">
                    <div><p style={{fontSize: "11px"}}>This web application makes an intensive use of new web
                        technologies and standards like HTML5. Please see <a
                            href="?Help#dataAccessPanel&link=supported-browsers" target="_blank" rel="noopener noreferrer">FAQs</a> for
                        further browser compatibility notes.</p></div>
                </div>
            </div>
        </div>
    );
}


export default Home;