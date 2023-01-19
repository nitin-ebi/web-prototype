import React, { Component } from "react";
import { hot } from "react-hot-loader";
import {chain, uniqBy} from "lodash";
import GenotypesFilter from "./components/GenotypesFilter";
import GenotypesTable from "./components/GenotypesTable";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            speciesList: [],
            assemblyList:[],
            speciesAssemblyMap: {},
            selectedSpecies: "ecaballus",
            selectedAssembly: "ecaballus_20",
            location: "1:3000000-3100000",
            studies: [],
            variants: [],
            selectedStudies: [],
            resultsPerPage: 50,
            currentPage: 1
        };
        this.assemblyPositionMap = {'aaegypti_aaegl3': 'supercont1.18:100000-500000', 'agambiae_agamp4': 'X:10000000-11000000', 'aminimus_1v1': 'KB663610:1-500000', 'aquadriannulatus_quad4av1': 'KB665398:1-15000', 'asinensis_v1': 'AXCK02015324:1-15000', 'astephensi_sda500v1': 'KB664288:1-15000', 'bjuncea_t8466v1': 'CM007185.1:4000000-4900000', 'cporcellus_30': 'DS562860.1:4330000-4340000', 'dmelanogaster_6': '2L:4000-8000', 'drerio_grcz10': '1:4220000-4270000', 'falbicollis_15': '10:19105400-19105800', 'ggallus_galgal4': '1:2100000-2500000', 'hannuus_xrqr10': '10:84310000-84315000', 'hbrasiliensis_asm165405v1': 'LVXX01000001.1:3000000-3900000', 'hsapiens_grch37': '13:32889611-32973805', 'hsapiens_grch38': '13:32315474-32400266', 'lcrocea_10': 'LG1:3000-30000', 'mgallopavo_50': '1:51940000-51960000', 'mmulatta_801': '2:163845000-163846000', 'oaries_oarv40': '19:48650000-48660000', 'pyedoensis_pynv1': 'Pyn_C0000:4000-14000', 'sratti_ed321v504': 'SRAE_chr2:10000-20000', 'sscrofa_111': 'X:9610000-9611000', 'slycopersicum_sl250': '9:59100000-59200000', 'tdicoccoides_wewseqv1': 'CM007921.1:100000-1000000', 'vvinifera_12x': '18:7850000-7895000', 'zmays_agpv4': '6:166875000-166876000', 'aaegypti_aaegl2': 'supercont1.562:1-1000000', 'aarabiensis_dong5av1': 'KB704463.1:1000001-2000000', 'acomosus_asm154086v1': 'CM003826.1:11000001-12000000', 'aculicifacies_a371v1': 'KI422496.1:1-1000000', 'acygnoides_goosev10': 'KZ155908.1:2000001-3000000', 'aepiroticus_epiroticus2v1': 'KB671842.1:1-1000000', 'afunestus_fumozv1': 'KB668814.1:1-1000000', 'agambiae_agamp3': '2L:2000001-3000000', 'amelas_cm1001059av2': 'KI919291.1:1-1000000', 'amexicanum_asm291563v1': 'PGSH01011343.1:1000001-2000000', 'aphrygia_10': 'sc0000087:1-1000000', 'aplatyrhynchos_iascaaspbh15': '17:1-1000000', 'aplatyrhynchosplatyrhynchos_cauwild10': 'Chr7:2000001-3000000', 'athaliana_tair10': '3:13000001-14000000', 'banthracis_asm784v1': 'NC_003997.3:1-1000000', 'bbison_umd31': 'Chr29:12000001-13000000', 'bbubalis_umdcaspurwb20': 'AWWX01438720.1:1-1000000', 'bgrunniens_umd311': 'Chr6:71000001-72000000', 'bindicus_umd31': 'Chr14:1-1000000', 'bmutus_bosgruv20': 'NW_005395160.1:1-1000000', 'bnapus_branapusv20': 'CM002761.2:23000001-24000000', 'btaurus_arsucd12': '6:85000001-86000000', 'btaurus_umd31': '23:28000001-29000000', 'btaurus_umd311': '12:76000001-77000000', 'cannuum_zunla1ref10': 'CM002812.1:144000001-145000000', 'ccajan_10': 'CM003613.1:25000001-26000000', 'cfamiliaris_31': '8:73000001-74000000', 'chircus_10': '19:2000001-3000000', 'chircus_ars1': 'NC_030813.1:86000001-87000000', 'cjacchus_32': '21:3000001-4000000', 'cquilicii_ccap21': 'NW_019376285.1:1000001-2000000', 'csabaeus_chlsab11': 'CAE17:39000001-40000000', 'csativa_asm186575v1': 'Cannabis.v1_scf1_q:1-1000000', 'csativus_v3': 'chr3:16000001-17000000', 'ddiscoideum_dicty27': 'CM000154.2:3000001-4000000', 'dlabrax_seabassv10': 'HG916839.1:21000001-22000000', 'dpipra_asm171598v1': 'MCBO01000495.1:3000001-4000000', 'drerio_grcz11': '13:8000001-9000000', 'ecaballus_30': 'chr20:33000001-34000000', 'eoleiferaxeguinessnsis_EG5': 'Chr9:31000001-32000000', 'fcatus_80': 'B1:173000001-174000000', 'fcatus_90': 'NC_018732.3:101000001-102000000', 'foxysporum_ii5v1': 'JH658330.1:1-1000000', 'ggallus_galgal5': 'chr6:5000001-6000000', 'ggallus_grcg6a': 'CM000098.5:6000001-7000000', 'gmax_20': '5:39000001-40000000', 'gmax_gmaxv11': 'GLYMAchr_11:15000001-16000000', 'gmax_v1': 'GLYMAchr_01:16000001-17000000', 'gmax_v21': 'CM000851.3:47000001-48000000', 'hannus_xrqr10': 'HanXRQChr04:112000001-113000000', 'hchromini_Orenil11': 'LG22:1000001-2000000', 'hleucocephalus_40': 'NW_010973220.1:4000001-5000000', 'hsapiens_asm240226v1': 'AJ507799.2:1-1000000', 'hvulgare_030312v2': '7:5000001-6000000', 'hvulgare_morexv20': 'chr6H:545000001-546000000', 'jregia_wgs5d': 'LIHL01055748.1:1-1000000', 'lmonocytogenesegde_asm19603v1': 'AL591824.1:2000001-3000000', 'lpolyactis_asm1011929v1': 'scaffold1588:1-1000000', 'lrohita_asm412021v1': 'scaffold_12910:1-1000000', 'lsalmonis_lsalatlcanadafemalev1': 'LBBX01017489.1:1-1000000', 'lsativa_lsatsalinasv7': 'CM022518.1:159000001-160000000', 'lusitatissimum_asm22429v2': 'CP027626.1:11000001-12000000', 'mchrysops_dom152mochry10': '1080622:1-1000000', 'mmusculus_grcm38': '4:113000001-114000000', 'mmusculus_mgscv37': '1:90000001-91000000', 'msubspparatuberculosis_asm786v1': 'NC_002944.2:1000001-2000000', 'nvison_nnqggv1': 'FNWR01000307.1:1000001-2000000', 'oanatinus_501': 'NW_001794413.1:2000001-3000000', 'oaries_oarrambouilletv10': 'Chromosome11:25000001-26000000', 'oaries_oarv31': 'X:1000001-2000000', 'ocuniculus_20': 'CM000798.1:12000001-13000000', 'odallidalli_oarv31': 'OAR20:27000001-28000000', 'oniloticus_umdnmbu': 'LG08:1-1000000', 'osativa_irgsp10': '4:3000001-4000000', 'osativa_osativa40': 'NC_001320.1:1-1000000', 'osativaindicagroup_irgsp10': '6:16000001-17000000', 'osativaindicagroup_r498genomeversion1': 'CP018160.1:4000001-5000000', 'osativajaponicagroup_irgsp10': '4:10000001-11000000', 'osativajaponicagroup_osativa40': '11:13000001-14000000', 'pabies_a541150contigsfastagz': 'contig_9922:1-1000000', 'pbairdii_hupman21': 'chr23:29000001-30000000', 'pfalciparum_GCA000002765': '4:1-1000000', 'pfalciparum_asm276v2': '11:1000001-2000000', 'pmajor_11': '4:29000001-30000000', 'pvulgaris_10': '11:47000001-48000000', 'rnorvegicus_60': 'chr6:140000001-141000000', 'sbicolor_ncbiv3': 'Chr05:46000001-47000000', 'sbicolor_sorbi1': '8:54000001-55000000', 'scerevisiae_r64': 'BK006948.2:1-1000000', 'sdumerili_10': 'BDQW01000306.1:1-1000000', 'sitalica_setariav1': 'SETITscaffold_4:35000001-36000000', 'slucioperca_slucfbn12': 'CM024506.1:12000001-13000000', 'slycopersicum_sl240': '4:10000001-11000000', 'smansoni_23792v2': '2:32000001-33000000', 'spombe_asm294v2': 'III:1-1000000', 'ssalar_20': 'NC_027320.1:55000001-56000000', 'ssalar_icsasgv2': 'NC_027320.1:55000001-56000000', 'sscrofa_102': 'chr15:155000001-156000000', 'taestivum_iwgscrefseqv10': '6A:613000001-614000000', 'tcacao_20110822': '10:11000001-12000000', 'tcastaneum_tcas52': 'NC_003081.2:1-1000000', 'testing': '12:13000001-14000000', 'tguttata_324': '1A:24000001-25000000', 'vpacos_202': 'KB632649.1:1-1000000', 'vpacos_vicpac31': 'ABRR03077387.1:1-1000000', 'vunguiculata_asm411807v1': 'Vu11(old9):34000001-35000000', 'zmays_agpv2': 'chr10:147000001-148000000', 'zmays_agpv3': '9:151000001-152000000'}
        this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
        this.handleAssemblyChange = this.handleAssemblyChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleStudiesChange = this.handleStudiesChange.bind(this);
        this.handleResultsPerPageChange = this.handleResultsPerPageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this._fetchData();
    }

    handleSpeciesChange(selectedSpecies) {
        const assemblyList = this._resolveAssemblyList(this.state.speciesAssemblyMap, selectedSpecies);
        const selectedAssembly = selectedSpecies + "_" + assemblyList[0].assemblyCode
        this.setState({
            assemblyList: assemblyList,
            selectedSpecies: selectedSpecies,
            selectedAssembly: selectedAssembly,
            location: this.assemblyPositionMap[selectedAssembly]
        }, this._fetchStudies);
    }

    handleAssemblyChange(selectedAssembly) {
        this.setState({
            selectedAssembly: selectedAssembly,
            location: this.assemblyPositionMap[selectedAssembly]
        }, this._fetchStudies);
    }

    handleLocationChange(location) {
        this.setState({location}, this._fetchVariants);
    }

    handleStudiesChange(studyId) {
        const currentSelected = this.state.selectedStudies;
        const i = currentSelected.indexOf(studyId);
        if (i < 0) {
            this.setState({
                selectedStudies: [...currentSelected, studyId]
            });
        } else {
            this.setState({
                selectedStudies: [...currentSelected.slice(0, i), ...currentSelected.slice(i+1)]
            });
        }
    }

    handleResultsPerPageChange(resultsPerPage) {
        this.setState({resultsPerPage});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({currentPage: 1});
        this._fetchVariants();
    }

    handlePageChange(currentPage) {
        if (currentPage > 0 && currentPage <= this.state.numPages) {
            this.setState({currentPage}, this._fetchVariants);
        }
    }

    _resolveAssemblyList(speciesAssemblyMap, selectedSpecies){
        return speciesAssemblyMap[selectedSpecies].map(item => ({
            assemblyCode: item.assemblyCode,
            assemblyName: item.assemblyName
        }));
    }

    _fetchData() {
        this._fetchSpecies();
        this._fetchStudies();
        this._fetchVariants();
    }

    _fetchSpecies() {
        this.setState({isLoaded: false});
        fetch(`https://www.ebi.ac.uk/eva/webservices/rest/v1/meta/species/list`)
            .then(response => response.json())
            .then(speciesResult => {
                    const speciesList = speciesResult.response[0].result.map(item => ({
                        taxonomyCode: item.taxonomyCode,
                        taxonomyCommonName: item.taxonomyCommonName,
                        taxonomyScientificName: item.taxonomyScientificName
                    }));
                    const uniqSpeciesList = uniqBy(speciesList, 'taxonomyCode');
                    const speciesAssemblyMap = chain(speciesResult.response[0].result)
                                                .groupBy(item => item.taxonomyCode)
                                                .transform((result, value, key) => result[key]=uniqBy(value, 'assemblyCode'))
                                                .value();
                    // default to horse selected
                    this.setState({
                        speciesList: uniqSpeciesList,
                        speciesAssemblyMap: speciesAssemblyMap,
                        assemblyList: this._resolveAssemblyList(speciesAssemblyMap, "ecaballus"),
                        selectedSpecies: "ecaballus",
                        selectedAssembly: "ecaballus_20"
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                });
    }

    _fetchStudies() {
        this.setState({isLoaded: false});
        fetch(`https://www.ebi.ac.uk/eva/webservices/rest/v1/meta/studies/list?species=${this.state.selectedAssembly}`)
        .then(response => response.json())
        .then(studiesResult => {
            let studyIds = []
            if (studiesResult.response[0].result) {
                studyIds = studiesResult.response[0].result.map(item => item.studyId);
                // default to all studies selected
            }
            this.setState({
                studies: studyIds,
                selectedStudies: [...studyIds]
            })
        },
        error => {
            this.setState({
                isLoaded: true,
                error: error
            })
        });
    }

    _fetchVariants() {
        this.setState({isLoaded: false});
        const studiesStr = this.state.selectedStudies.join("%2C");
        const skipNum = this.state.resultsPerPage * (this.state.currentPage-1);
        fetch(`https://www.ebi.ac.uk/eva/webservices/rest/v1/segments/${this.state.location}/variants?species=${this.state.selectedAssembly}&studies=${studiesStr}&skip=${skipNum}&limit=${this.state.resultsPerPage}`)
        .then(response => response.json())
        .then(variantsResult => {
            let variantResponse = variantsResult.response[0];
            let variants = [];
            if (variantResponse.result) {
                variants = variantsResult.response[0].result;
                for (let i = 0; i < variants.length; i++) {
                    variants[i].alleleFreqs = {};
                    for (const key in variants[i].sourceEntries) {
                        if (variants[i].sourceEntries[key].hasOwnProperty("cohortStats")
                            && variants[i].sourceEntries[key].cohortStats.hasOwnProperty("ALL")) {
                            variants[i].alleleFreqs[key.split("_")[0]] = variants[i].sourceEntries[key].cohortStats.ALL.maf;
                        }
                    }
                }
            }
            this.setState({
                isLoaded: true,
                variants: variants,
                numPages: Math.ceil(variantsResult.response[0].numTotalResults / this.state.resultsPerPage)
            });
        },
        error => {
            this.setState({
                isLoaded: true,
                error: error
            })
        });
    }

    render() {
        this.state.studies.sort();
        this.state.selectedStudies.sort();
        return (
            <div className="vf-sidebar vf-sidebar--start">
                <div className="vf-sidebar__inner">
                        <GenotypesFilter
                            speciesList={this.state.speciesList}
                            speciesAssemblyMap={this.state.speciesAssemblyMap}
                            assemblyList={this.state.assemblyList}
                            selectedSpecies={this.state.selectedSpecies} onSpeciesChange={this.handleSpeciesChange}
                            selectedAssembly={this.state.selectedAssembly} onAssemblyChange={this.handleAssemblyChange}
                            location={this.state.location} onLocationChange={this.handleLocationChange}
                            studies={this.state.studies} selectedStudies={this.state.selectedStudies}
                            onStudiesChange={this.handleStudiesChange}
                            resultsPerPage={this.state.resultsPerPage}
                            onResultsPerPageChange={this.handleResultsPerPageChange}
                            onSubmit={this.handleSubmit} />
                        <GenotypesTable
                            studies={this.state.selectedStudies} variants={this.state.variants}
                            error={this.state.error} isLoaded={this.state.isLoaded}
                            currentPage={this.state.currentPage} numPages={this.state.numPages}
                            onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    }

}

export default hot(module)(App);
