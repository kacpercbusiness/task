import { FEATURE_LABELS } from "../constants";

import type { CompanyFeature } from "src/services/companies/types";

export const getFeatureLabel = (featureId: CompanyFeature): string =>
  FEATURE_LABELS[featureId] ?? featureId;
