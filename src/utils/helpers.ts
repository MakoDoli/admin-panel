import { FieldConfig } from "./types";

export const validateField = (
  name: string,
  value: string | number | undefined,
  rules: FieldConfig["validation"],
): string | null => {
  if (rules.required && !value) {
    return `${name} is required.`;
  }
  if (rules.validate && !rules.validate(value as string | number)) {
    return `Invalid value for ${name}.`;
  }
  return null;
};
