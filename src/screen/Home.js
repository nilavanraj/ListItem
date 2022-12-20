import React, {Component, useCallback, useRef, useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  LayoutAnimation,
  UIManager,
  Easing,
  Platform,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Text} from '../components/common';
import {useSelector, useDispatch} from 'react-redux';

import {FlatList, RectButton} from 'react-native-gesture-handler';
import GmailStyleSwipeableRow from './Gamil';
import Feed from '../components/Feed';
import CreateFeed from '../components/CreateFeed';
import color from '../components/assets/colors.json';
import {removeId} from '../store/Item';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const layoutAnimConfig = {
  duration: 1000,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 5,
  },
  delete: {
    duration: 100,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const [formData, setformData] = useState({title: '', description: ''});
  const [edit, setEdit] = useState(false);

  const {allList} = useSelector(state => state.Item);
  const flatListRef = useRef(null);
  const modalizeRef = React.useRef(null);
  const onOpen = () => {
    setEdit(null);
    setformData({title: '', description: ''});
    modalizeRef.current?.open();
  };
  const close = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
    LayoutAnimation.configureNext(layoutAnimConfig);
    modalizeRef.current?.close();
  };

  const SwipeableRow = useCallback(({item, index}) => {
    return (
      <GmailStyleSwipeableRow
        id={item.id}
        cb={id => {
          dispatch(removeId(id));
          LayoutAnimation.configureNext(layoutAnimConfig);
        }}>
        <Feed
          onPress={itemval => {
            console.log(item)
            setEdit(item.id);
            setformData(itemval);
            modalizeRef.current?.open();
          }}
          data={item}
        />
      </GmailStyleSwipeableRow>
    );
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.feedTestContainer}>
          <Text font={24}>Hello Nilavan</Text>
          <Text
            color={color.InputC1}
            style={{fontWeight: 'normal', paddingVertical: 10}}
            font={16}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </View>
        <FlatList
          ref={flatListRef}
          data={allList}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item, index}) => (
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor={(item, index) => `message ${index}`}
        />
      </View>
      <View style={styles.button}>
        <Button title="Post" color="#841584" onPress={onOpen} />
      </View>
      <Modalize
        ref={modalizeRef}
        onClosed={() => {}}
        adjustToContentHeight
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        modalStyle={{
          backgroundColor: color.backgroundColor,
        }}>
        <CreateFeed
          edit={edit}
          title={formData.title}
          description={formData.description}
          submitCb={close}
        />
      </Modalize>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  feedTestContainer: {
    width: '100%',
    paddingHorizontal: 8,
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
