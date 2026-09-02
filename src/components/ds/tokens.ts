/**
 * Engrenei Design System — escalas compartilhadas.
 * Os valores de cor vivem em src/styles.css (--ds-*).
 */
export const DS_RADIUS = {
  sm: "rounded-[8px]",
  md: "rounded-[14px]",
  lg: "rounded-[20px]",
  xl: "rounded-[28px]",
  pill: "rounded-full",
} as const;

/** Espaçamento vertical padrão entre blocos de uma página. */
export const DS_STACK = "space-y-5 md:space-y-6";

/** Container padrão de conteúdo. */
export const DS_CONTAINER = "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8";
