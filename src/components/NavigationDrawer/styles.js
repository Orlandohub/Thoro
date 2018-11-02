import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  anchorText: {
    color: '#023066',
    fontWeight: '800',
    fontSize: 16,
  },
  anchorArea: {
    marginHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomSeperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#023066',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
});
