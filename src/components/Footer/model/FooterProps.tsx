export interface TextUrlData {
    text: string;
    url: string;
}

export interface FooterHeadingData {
    mainHeading: TextUrlData;
    subHeading: TextUrlData;
}

export interface FooterColumnData {
    columnHeading: TextUrlData;
    columnContent: TextUrlData[];
}