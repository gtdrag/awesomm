import { responsiveSize } from '../../../utils/dimensions';
import fonts from '../../../theme/fonts';

export default {
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 0,
    height: 45,
    alignItems: 'center',
    position: 'relative',
  },
  label: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: fonts.sansBold,
    color: 'white',
  },
  icon: {
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginRight: responsiveSize(20),
  },
  iconRight: {
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginLeft: responsiveSize(32),
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: responsiveSize(5),
    paddingBottom: responsiveSize(5),
    borderRadius: responsiveSize(8),
    height: responsiveSize(55),
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  spinnerContainer: {
    height: responsiveSize(55),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textContainer: {
    paddingHorizontal: responsiveSize(40),
  },
};
