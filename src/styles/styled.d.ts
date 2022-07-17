import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      BACKGROUND_900: string;
      BACKGROUND_800: string;
      BACKGROUND_700: string;

      PRIMARY_500: string;
      PRIMARY_400: string;

      SECONDARY_400: string;
      SECONDARY_200: string;
      SECONDARY_100: string;
    };
  }
}
