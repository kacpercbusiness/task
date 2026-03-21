export type CompanyFeature = 'random-number' | 'company' | 'kittens';

export type Company = {
    name: string;
    features: CompanyFeature[],
    users: string[],
    id: string;
}

export type CompaniesResponse = Company[];