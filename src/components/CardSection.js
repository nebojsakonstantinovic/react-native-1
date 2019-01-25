import React from 'react';
import { View } from 'react-native';

import React from 'react';

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.clildren}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColoer: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
