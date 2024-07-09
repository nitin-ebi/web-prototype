import './SubmitData.css'

function SubmitData() {
    return (
        <div className="submit">

            <h2>Submit</h2>

            <div className="padding-bottom-large">
                <p>Please read our <a href="?Submit-Data#data-requirements" target="_blank">Data Requirements</a> and
                    the <a href="?Submit-Data#key-stages" target="_blank">Key stages of submission</a> below. All data
                    valid for EVA submission shall be made available via the <a href="?Study Browser" target="_blank">Study
                        Browser</a> and will be browsable using both the <a href="?Variant Browser">Variant
                        Browser</a> and the <a href="?API">EVA API</a>. <a
                        href="http://www.ensembl.org/info/docs/tools/vep/index.html" target="_blank">Variant Effect
                        Predictor</a> annotations shall be available for variants mapped to genome assemblies that are
                    known to <a href="http://www.ensembl.org/index.html" target="_blank">Ensembl</a>.</p>
                <p>Data submitted to the EVA is brokered to our collaborating databases at <a
                    href="http://www.ncbi.nlm.nih.gov/" target="_blank">NCBI</a>, <a
                    href="http://www.ncbi.nlm.nih.gov/SNP/" target="_blank">dbSNP</a> and <a
                    href="http://www.ncbi.nlm.nih.gov/dbvar" target="_blank">dbVar</a>. It is therefore unnecessary to
                    submit data to multiple resources.</p>
            </div>

            <h3 className="padding-bottom-large">Data requirements</h3>

            <div className="padding-bottom-large">
                <p>EVA accepts <b>all</b> types of <b>precise</b> genetic variants, in <b>any species</b> providing the
                    following requirements are met:</p>
                <ol>
                    <li>Data is described in <b>valid VCF file(s)</b>. This can be tested prior to submission using the
                        EVA VCF validation suite found
                        <a href="https://github.com/EBIvariation/vcf-validator/wiki/User's-Guide"
                           target="_blank">here</a>. For help with converting variation data to VCF, please see our
                        <a href="?Help#submissionPanel&link=how-to-gen-vcf" target="_blank">help</a> pages.
                    </li>
                    <li>Data includes <b>sample genotypes</b> and/or <b>allele frequencies</b></li>
                    <li>
                        The reference sequence used is <a href="http://www.insdc.org/"
                                                          target="_blank">INSDC</a> registered, or will be at point of
                        submission. A &quot;reference&quot; can be any of the following, but not restricted to:
                        <ul>
                            <li>Assembly, e.g. <a href="https://www.ebi.ac.uk/ena/browser/view/GCA_000002285.2"
                                                  target="_blank">GCA_000002285.2</a></li>
                            <li>Transcriptome/Transcript, e.g. <a
                                href="https://www.ebi.ac.uk/ena/browser/view/GCJV01000000"
                                target="_blank">GCJV01000000</a>, <a
                                href="https://www.ebi.ac.uk/ena/browser/view/KY286086" target="_blank">KY286086</a></li>
                            <li>Gene sequence, e.g. <a href="https://www.ebi.ac.uk/ena/browser/view/X76482"
                                                       target="_blank">X76482</a></li>
                        </ul>
                        <b><u>PLEASE NOTE:</u></b> Sequence identifiers in VCF must match those in the reference FASTA
                        file.
                    </li>
                    <li>If consent was gathered for any <b>individual human genotype data</b> then a <a
                        href="https://docs.google.com/document/d/1UaRmimAe919IZYIH55mDXMe-4sHsRVqaP4moqx2IYE4/edit"
                        target="_blank">consent statement</a> must be completed prior to submission.
                    </li>
                </ol>
                <p>
                    <a href="?Help#accessionPanel&link=variant-accession-administred-by-eva" target="_blank">Variant
                        accessions</a> (ss# and rs#) and <a
                    href="?Help#accessionPanel&link=accessions-administred-by-eva"
                    target="_blank">study accessions</a> will only be provided for
                    data which satisfies all data requirements. More details on whether your data is suitable can be
                    found <a href="?Help#submissionPanel&link=is-my-data-suitable" target="_blank">here</a>.
                </p>
            </div>

            <h3 className="padding-bottom-large">Alternative resources for data not accepted by EVA</h3>
            <div>
                <ul>
                    <li>Submit structural variations that cannot be expressed in VCF(s) to <a
                        href="http://www.ebi.ac.uk/dgva" target="_blank">DGVa</a>.
                    </li>
                    <li>Submit variations with sensitive clinical data to <a href="https://www.ebi.ac.uk/ega/home"
                                                                             target="_blank">EGA</a>.
                    </li>
                    <li>Submit variations with clinically relevant genetic variant data, i.e. data that relates genetic
                        variation(s) with clinical significance values (e.g. pathogenic, benign, etc.), to the <a
                            href="https://www.ncbi.nlm.nih.gov/clinvar/" target="_blank">ClinVar</a> archive at <a
                            href="https://www.ncbi.nlm.nih.gov/clinvar/" target="_blank">NCBI</a>.
                    </li>
                </ul>
            </div>

            <h3 className="padding-bottom-large">Key stages of EVA submissions</h3>

            <h4><span className="icon"></span> Prepare</h4>
            <div>
                <ul>
                    <li>Prepare <a href="?Help#submissionPanel&link=is-my-data-suitable" target="_blank">valid VCF
                        file</a>(s), which can be validated prior to submission using the <a
                        href="https://github.com/EBIvariation/vcf-validator/wiki/User's-Guide" target="_blank">EVA VCF
                        validation suite</a>.
                    </li>
                    <li>Complete a <a href="files/EVA_Submission_template.METADATA_TEMPLATE_VERSION.xlsx"
                                      target="_blank">metadata template</a> describing the samples and analyses in your
                        study. Please provide as much metadata as possible since this information is extremely useful
                        for downstream analysis and is directly related to the frequency at which datasets archived at
                        EVA are reused. For reference, here is an <a
                            href="files/EVA_Submission_template.METADATA_TEMPLATE_VERSION_mockup.xlsx"
                            target="_blank"><b>example</b></a> of a completed metadata template.
                    </li>
                </ul>
                <p>Please also note that the template requires the submitter to fill in some personal data, which will
                    be used as described in our <a
                        href="https://www.ebi.ac.uk/data-protection/privacy-notice/eva-submission-service"
                        target="_blank">privacy notice</a>.</p>
            </div>

            <h4><span className="icon"></span> Contact</h4>
            <div>
                <p>Contact <a href="mailto:eva-helpdesk@ebi.ac.uk" target="_top">eva-helpdesk@ebi.ac.uk</a> to request a
                    submission. You will receive a custom private FTP account to deposit your data.</p>
            </div>

            <h4><span className="icon"></span> Submit</h4>
            <div>
                <p>Upload your VCF file(s), metadata template and any associated data file(s) to your private FTP
                    location.</p>
            </div>

            <h4><span className="icon"></span> Receive</h4>
            <div className="padding-bottom-large">
                <p>The EVA aims to process submission requests within two business days. Accession numbers will be sent
                    via email to the submitter upon successful archival of the deposited data.</p>
            </div>
        </div>
    );
}

export default SubmitData;