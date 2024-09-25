﻿import React from 'react';
import {Text, View} from 'react-native';

import {getStyles} from './BlankScreen.style';

const BlankScreen = (): JSX.Element => {
  const styles = React.useMemo(() => getStyles(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>BlankScreen</Text>
    </View>
  );
};

export default BlankScreen;
