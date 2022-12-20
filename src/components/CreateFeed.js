import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {Box, Text} from './common';
import colors from './assets/colors.json';
import {setallList, setEditList} from '../store/Item';
import {useSelector, useDispatch} from 'react-redux';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    width: '80%',
    color: colors.InputC1,
  },
  button: {
    width: '30%',
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 12,
  },
  buttonCover: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 13,
    borderRadius: 4,
  },
  innerBox: {
    width: '100%',
    alignItems: 'center',
  },
  emoji: {
    width: 32,
    height: 32,
    marginTop: 5,
    borderRadius: 32 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BoxBackground,
    marginHorizontal: 13,
  },
  innerBoxRow: {
    width: '100%',
    flexDirection: 'row',
  },
});
let inputRef = {};
const Login = ({submitCb, title, description, edit}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({title, description});
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    if (formData.title && formData.description) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formData]);
  const onSubmit = useCallback(() => {
    submitCb();
    console.log("--,,",edit, edit != null);
    if (edit != null) {
      dispatch(
        setEditList({
          id: edit,
          name: formData.title,
          emoji: '👋',
          comment: formData.description,
        }),
      );
    } else {
      dispatch(
        setallList({
          name: formData.title,
          emoji: '👋',
          comment: formData.description,
        }),
      );
    }
  }, [edit, formData]);
  const onChangehandle = (val, type) => {
    if (type == 'title') {
      setFormData(pre => ({
        ...pre,
        title: val,
      }));
    } else if (type == 'description') {
      setFormData(pre => ({
        ...pre,
        description: val,
      }));
    }
  };
  return (
    <Box gradient={false}>
      <Text
        t1
        font={18}
        style={{
          width: '100%',
          paddingVertical: 10,
        }}>
        Create post
      </Text>
      <View style={styles.innerBox}>
        <Box dark>
          <View style={styles.innerBoxRow}>
            <View style={styles.emoji}>
              <Text color={colors.InputC1} font={14}>
                💬
              </Text>
            </View>

            <TextInput
              ref={ref => (inputRef.title = ref)}
              value={formData.title}
              autoFocus
              placeholderTextColor={colors.InputC1}
              placeholder={'Title'}
              style={styles.input}
              returnKeyType="next"
              onSubmitEditing={() => {
                inputRef.description.focus();
              }}
              onChangeText={val => onChangehandle(val, 'title')}
            />
          </View>
        </Box>
        <Box dark>
          <View style={styles.innerBoxRow}>
            <View style={styles.emoji}>
              <Text color={colors.InputC1} font={14}>
                💬
              </Text>
            </View>

            <TextInput
              ref={ref => (inputRef.description = ref)}
              value={formData.description}
              placeholderTextColor={colors.InputC1}
              placeholder={'Description'}
              returnKeyType="done"
              onSubmitEditing={onSubmit}
              style={styles.input}
              onChangeText={val => onChangehandle(val, 'description')}
            />
          </View>
        </Box>
        <View style={styles.buttonCover}>
          <View style={styles.button}>
            <Button
              disabled={disable}
              onPress={onSubmit}
              title="SAVE"
              color="#841584"
            />
          </View>
        </View>
      </View>
    </Box>
  );
};

export default Login;
