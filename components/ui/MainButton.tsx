import { StyleProp, ViewStyle, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function MainButtom({ title, onPress, style = {}, textStyle = {}, disabled = false }: {
  title: string;
  disabled: boolean;
  onPress?: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: any;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        disabled && styles.disabledButton
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#a1b35f',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#efdee8',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#776538',
  },
});

export default MainButtom;