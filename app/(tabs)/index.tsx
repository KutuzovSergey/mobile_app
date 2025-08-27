import { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';

import MainButtom from '@/components/UI/MainButton';
import Loader from '@/components/UI/Loader';
import { News } from '@/components/News';
import { getDateArticles } from '@/api/userApi';
import { ArticleType } from '@/type/typesMain';

export default function HomeScreen() {
  const [dateArticles, setDateArticles] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const url: string = 'https://promo.work-digital-guild.ru/wp-json/wp/v2/posts?per_page=3&order=desc&orderby=date'

  const handlePress = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getDateArticles(url);
      setDateArticles(result);
    } catch (err) {
      console.error(err);
      setError('Ошибка при получении данных');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'}/>
      <MainButtom title="получить продукты" disabled={!true} onPress={() => handlePress()} />

      {loading && <Loader visible={loading} />}

      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {dateArticles && (
        <FlatList
          data={dateArticles.data} // массив данных, которые будут отображены (допустим, список статей)
          keyExtractor={(item: ArticleType) => item.id.toString()} // уникальный ключ для каждого элемента списка (обязательно)
          renderItem={({ item }: { item: ArticleType }) => <News data={item} />} // как отрисовать каждый элемент
      />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text_main: {
    color: '#fff'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
