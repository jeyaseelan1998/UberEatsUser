import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES} from '../constans/sizes';
import {COLORS} from '../constans/colors';

const RestaurantItem = ({restaurant}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image source={{uri: restaurant.image}} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>
        $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES[2],
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: SIZES[1],
  },
  title: {
    fontSize: SIZES[4],
    fontWeight: '700',
  },
  subTitle: {
    color: COLORS.grey,
  },
});
