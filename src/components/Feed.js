import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Box, Text} from './common';
import colors from './assets/colors.json';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    paddingLeft: 12,
    justifyContent: 'center',
  },
  innerBox: {
    width: '100%',

    alignItems: 'center',
  },
  emoji: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BoxBackground,
    marginHorizontal: 10,
  },
  innerBoxRow: {
    flexDirection: 'row',
    paddingVertical: 13,
  },
  comment: {
    width: '90%',
    paddingVertical: 10,
    paddingBottom: 15,
  },
});

const Feeds = ({data, onPress}) => {
  return (
    <Box gradient={false}>
      <TouchableOpacity
        onPress={() => onPress({title: data.name, description: data.comment})}
        style={styles.header}>
        <Image style={styles.image} source={require('./assets/image.png')} />
        <View style={styles.name}>
          <Text t1 font={16}>
            {data.name}
          </Text>
        </View>
        <Text font={25} style={{position: 'absolute', right: 15}}>
          ...
        </Text>
      </TouchableOpacity>
      <View style={styles.innerBox}>
        <Box dark>
          <View style={styles.innerBoxRow}>
            <View style={styles.emoji}>
              <Text color={colors.InputC1} font={14}>
                {data.emoji}
              </Text>
            </View>

            <Text color={colors.InputC1} font={14} style={{width: '80%'}}>
              {data.comment}
            </Text>
          </View>
        </Box>
      </View>
    </Box>
  );
};

export default Feeds;
