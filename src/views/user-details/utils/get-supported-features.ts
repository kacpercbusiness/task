import { SUPPORTED_FEATURES } from "src/features/constants";

import type { CompanyFeature } from "src/services/companies/types";

export const getSupportedFeatures = (features: CompanyFeature[]) => {
  return features.filter((feature) => SUPPORTED_FEATURES.includes(feature));
};