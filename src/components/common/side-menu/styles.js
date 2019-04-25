import fonts from "../../../theme/fonts";

export default {
    container: {
      paddingTop: 50,
      flex: 1,
      flexDirection: 'column',
      flexGrow: 1,
    },
    navItemStyle: {
      padding: 15,
      fontFamily: fonts.sansRegular,
      fontSize: 14,
      color: '#ffffffcc',
    },
    navSectionStyle: {
        flexDirection: 'row',  
        paddingLeft: 20,
        alignItems: 'center',
        height: 43,
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    footerContainer: {
      padding: 20,
      alignItems: 'center',
    }
  };