import { SUPPORTED_FEATURES } from "src/features/constants";

import type { CompanyFeature, Company } from "src/services/companies/types";

function normalizeFeature(feature: string): CompanyFeature | null {
  if (SUPPORTED_FEATURES.includes(feature as CompanyFeature)) {
    return feature as CompanyFeature;
  }
  if (feature === 'comapny') {
    return 'company';
  }

  return null;
}

export const getUniqueFeaturesFromCompanies = (companies: Company[]): CompanyFeature[] => {
  const features = companies.flatMap((company) => company.features ?? []);
  const normalized = features
    .map(normalizeFeature)
    .filter((f): f is CompanyFeature => f !== null);

  return [...new Set(normalized)];
};
