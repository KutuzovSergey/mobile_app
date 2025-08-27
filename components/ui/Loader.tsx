import React from 'react';
import { Modal, StyleSheet, View, Image} from 'react-native';


interface LoaderProps {
  visible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {

  return (
    <Modal
      visible = { visible }
  transparent
  animationType = "fade"
    >
    <View style={styles.overlay}>
        <Image
          source={require('@/assets/icon/loader.svg')}
          style={styles.gif}
      />
    </View>
    </Modal >
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // полупрозрачный тёмный фон
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 100,  // можешь изменить под размер своей гифки
    height: 100,
  },
});

export default Loader;
