import React, {useEffect, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Charts = (props: any) => {
  const [pokemons, setPokemons] = React.useState([]);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then(res => setPokemons(res.data.results));
  }, []);

  const renderItem: React.FC<
    PropsWithChildren<{
      item: any;
    }>
  > = ({item}) => <Item name={item.name.toUpperCase()} url={item.url} />;

  const Item: React.FC<
    PropsWithChildren<{
      name: string;
      url: string;
    }>
  > = ({name, url}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        props.navigation.navigate('PokemonDetails', {
          url,
        })
      }>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#A9A9A9',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
  },
});

export default Charts;
