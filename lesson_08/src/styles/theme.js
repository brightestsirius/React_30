import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#319795",
    },
  },
  components: {
    Button: {
      variants: {
        brandPrimary: {
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.600" },
        },
      },
    },
  },
});

export default theme;