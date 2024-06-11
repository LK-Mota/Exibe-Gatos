import { StyleSheet, View } from 'react-native';
import CTextButton from './src/components/botao';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <CTextButton text="Gerar Imagens" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    width: '85%',
  }
});
