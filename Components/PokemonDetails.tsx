import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'grey',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.1,
  useShadowColorFromDataset: false, // optional
};

// const data = {
//   labels: ['Swim', 'Bike', 'Run'], // optional
//   data: [0.4, 0.6, 0.8],
// };
export default function PokemonDetails(props: any) {
  const {url} = props.route.params;
  const [pokemonDetails, setPokemonDetails] = React.useState<any>(null);
  const [statsData, setStatsData] = React.useState<any>();
  useEffect(() => {
    axios.get(url).then(res => {
      let labels: string[] = [];
      let data: number[] = [];
      res.data.stats.forEach((el: any) => {
        // console.log(res.data.stats);
        labels.push(el?.stat?.name);
        data.push(el?.base_stat / 100);
      });

      // setPokemonDetails(res.data);
      let newStats: any = {labels, data};
      console.log(newStats);
      setStatsData(newStats);
      setPokemonDetails(res.data);
    });
  }, [url]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text style={{fontSize: 20}}>
        Name : {pokemonDetails?.name}
        {JSON.stringify(pokemonDetails?.stats)}
      </Text>
      <Image
        source={pokemonDetails?.sprites?.front_default}
        style={{height: 100, width: 100}}
      /> */}
      {!!pokemonDetails && (
        <ProgressChart
          data={statsData}
          width={screenWidth}
          height={200}
          strokeWidth={16}
          radius={20}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      )}
    </View>
  );
}
