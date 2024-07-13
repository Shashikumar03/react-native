import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PieChartExample = () => {
  const data = [
    { name: 'BJP', seats: 303, color: '#FF9933', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'INC', seats: 52, color: '#00ADEF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'DMK', seats: 23, color: '#FFD700', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'YSRCP', seats: 22, color: '#006400', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Others', seats: 138, color: '#808080', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>2019 Indian General Election Results</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        chartConfig={chartConfig}
        accessor="seats"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PieChartExample;
