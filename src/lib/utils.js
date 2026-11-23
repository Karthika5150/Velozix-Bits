import { cva } from "class-variance-authority";

export const cn = (...inputs) => {
  return inputs.filter(Boolean).join(" ");
};

export { cva };
