import type { CompanyFeature } from "src/services/companies/types";

export const SUPPORTED_FEATURES : CompanyFeature[] = ['kittens', 'random-number', 'company'];

export const FEATURE_LABELS: Record<CompanyFeature, string> = {
  kittens: 'Kittens',
  'random-number': 'Random number',
  company: 'Companies',
};