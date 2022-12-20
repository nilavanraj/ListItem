import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'Item',
  initialState: {
    allList: [
      {
        id: 0,
        name: 'ITEM1',
        emoji: '👋',
        comment:
          'abc...',
      },
    ],
  },
  reducers: {
    setallList: (state, action) => {
      state.allList = [
        ...state.allList,
        {
          id: state.allList.length,
          ...action.payload,
        },
      ];
    },
    setEditList: (state, action) => {
      state.allList = [...state.allList].map(item => {
        console.log(item.id , action.payload.id)
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    removeId: (state, action) => {
      console.log(action?.payload);
      state.allList = [...state.allList].filter(
        item => item?.id !== action?.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {setallList, removeId, setEditList} = counterSlice.actions;

export default counterSlice.reducer;
