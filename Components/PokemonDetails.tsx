import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

export default function PokemonDetails(props: any) {
  const {url} = props.route.params;
  const [pokemonDetails, setPokemonDetails] = React.useState<any>(null);
  useEffect(() => {
    axios.get(url).then(res => setPokemonDetails(res.data));
  }, [url]);
  return (
    <View>
      <Text style={{fontSize: 20}}>
        Name : {pokemonDetails?.name}
        {/* {JSON.stringify(pokemonDetails)} */}
      </Text>
      <Image
        source={pokemonDetails?.sprites?.front_default}
        style={{height: 100, width: 100}}
      />
    </View>
  );
}
