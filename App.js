import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';

import RestaurantItem from './src/components/RestaurantItem';

import {SIZES} from './src/constans/sizes';
import restaurants from './src/asserts/data/restaurants.json';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: SIZES[2],
  },
});
