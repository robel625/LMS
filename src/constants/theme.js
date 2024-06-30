import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {

    // from LMS
    primary: "#42C6A5",     // Green
    primary2: "#FBB344",    // Orange
    primary3: "#33354E",    // Dark Blue
    secondary: "#FC2626",   // Red
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",

    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",

    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)",



    // from auth and onbording
    // Primary (Purple)
    primary50: '#EFEFFC',
    primary100: '#D4D4F6',
    primary200: '#BAB9EF',
    primary300: '#A09FE6',
    primary400: '#8887DD',
    primary500: '#706FD3',
    primary600: '#5E5DB6',
    primary700: '#4D4C98',

    // Gray
    gray50: '#F6F6F6',
    gray100: '#EEEEEE',
    gray200: '#E2E2E2',
    gray300: '#CBCBCB',
    gray400: '#AFAFAF',
    gray500: '#6B6B6B',
    gray600: '#545454',
    gray700: '#333333',
    gray800: '#1F1F1F',
    gray900: '#141414',

    // Positive
    positive50: '#E6F2ED',
    positive100: '#ADDEC9',
    positive200: '#66D19E',
    positive300: '#06C167',
    positive400: '#048848',
    positive500: '#03703C',
    positive600: '#03582F',
    positive700: '#10462D',

    // Negative
    negative50: '#FFEFED',
    negative100: '#FED7D2',
    negative200: '#F1998E',
    negative300: '#E85C4A',
    negative400: '#E11900',
    negative500: '#AB1300',
    negative600: '#870F00',
    negative700: '#5A0A00',

    // Warning
    warning50: '#FFFAF0',
    warning100: '#FFF2D9',
    warning200: '#FFE3AC',
    warning300: '#FFCF70',
    warning400: '#FFC043',
    warning500: '#BC8B2C',
    warning600: '#996F00',
    warning700: '#674D1B',

    // Background
    backgroundPrimary: '#000000',
    backgroundSecondary: '#1F1F1F',
    backgroundTertiary: '#333333',
    backgroundInversePrimary: '#CBCBCB',
    backgroundInverseSecondary: '#AFAFAF',

    // Content
    contentPrimary: '#FFFFFF',
    contentSecondary: '#CBCBCB',
    contentTertiary: '#AFAFAF',
    contentInversePrimary: '#000000',
    contentInverseSecondary: '#545454',
    contentInverseTertiary: '#6B6B6B',

    
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    margin: 20,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // font sizes auth and onbording
    t1: 52,
    t2: 44,
    t3: 36,

    // h1: 32,
    // h2: 28,
    // h3: 24,
    // h4: 20,

    l1: 18,
    l2: 16,
    l3: 14,
    l4: 12,

    ps1: 18,
    ps2: 16,
    ps3: 14,
    ps4: 12,

    pr1: 18,
    pr2: 16,
    pr3: 14,
    pr4: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    t1: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.t1, lineHeight: 64 },
    t2: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.t2, lineHeight: 52 },
    t3: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.t3, lineHeight: 44 },

    h1: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h1, lineHeight: 40 },
    h2: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h2, lineHeight: 36 },
    h3: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h3, lineHeight: 32 },
    h4: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h4, lineHeight: 28 },

    l1: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l1, lineHeight: 24 },
    l2: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l2, lineHeight: 20 },
    l3: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l3, lineHeight: 16 },
    l4: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l4, lineHeight: 16 },

    ps1: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps1, lineHeight: 28 },
    ps2: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps2, lineHeight: 24 },
    ps3: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps3, lineHeight: 20 },
    ps4: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps4, lineHeight: 20 },

    pr1: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr1, lineHeight: 28 },
    pr2: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr2, lineHeight: 24 },
    pr3: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr3, lineHeight: 20 },
    pr4: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr4, lineHeight: 20 },


    // replaced in textButton componenet from 12 to h3
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },

    // from lms
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },

};


export const darkTheme = {
    name: "dark",
    backgroundColor1: COLORS.gray85,
    backgroundColor2: COLORS.gray90,
    backgroundColor3: COLORS.gray90,
    backgroundColor4: COLORS.primary,
    backgroundColor5: COLORS.gray85,
    backgroundColor6: COLORS.black,
    backgroundColor7: COLORS.gray90,
    backgroundColor8: COLORS.gray70,
    lineDivider: COLORS.gray70,
    borderColor1: COLORS.gray70,
    borderColor2: COLORS.gray70,
    textColor: COLORS.white,
    textColor2: COLORS.white,
    textColor3: COLORS.gray40,
    textColor4: COLORS.white,
    textColor5: COLORS.gray30,
    textColor6: COLORS.gray30,
    textColor7: COLORS.gray40,
    tintColor: COLORS.white,
    dotColor1: COLORS.white,
    dotColor2: COLORS.primary,
}

export const lightTheme = {
    name: "light",
    backgroundColor1: COLORS.white,
    backgroundColor2: COLORS.primary3,
    backgroundColor3: COLORS.additionalColor11,
    backgroundColor4: COLORS.white,
    backgroundColor5: COLORS.additionalColor13,
    backgroundColor6: COLORS.primary3,
    backgroundColor7: COLORS.white,
    backgroundColor8: COLORS.gray10,
    lineDivider: COLORS.gray20,
    borderColor1: COLORS.white,
    borderColor2: COLORS.black,
    textColor: COLORS.black,
    textColor2: COLORS.primary,
    textColor3: COLORS.gray80,
    textColor4: COLORS.white,
    textColor5: COLORS.black,
    textColor6: COLORS.gray,
    textColor7: COLORS.black,
    tintColor: COLORS.black,
    dotColor1: COLORS.gray20,
    dotColor2: COLORS.primary3,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;

