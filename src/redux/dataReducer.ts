import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  data: number[];
}

const initialState: IInitialState = {
  data: [],
};

interface ISetDataPayload {
  data: number[];
}

interface IAddDataPayload {
  data: number;
}

const sort = (data: number[], l: number, r: number) => {
  if (l >= r) return;
  let m = Math.floor((l + r) / 2);
  sort(data, l, m);
  sort(data, m + 1, r);
  merge(data, l, m, r);
};

const merge = (data: number[], l: number, m: number, r: number) => {
  let ll = m - l + 1;
  let rl = r - m;

  let tl = new Array(ll);
  let tr = new Array(rl);
  for (let i = 0; i < ll; i++) {
    tl[i] = data[l + i];
  }
  for (let i = 0; i < rl; i++) {
    tr[i] = data[m + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = l;
  while (i < ll && j < rl) {
    if (tl[i] < tr[j]) {
      data[k++] = tl[i++];
    } else {
      data[k++] = tr[j++];
    }
  }

  while (i < ll) {
    data[k++] = tl[i++];
  }
  while (j < rl) {
    data[k++] = tr[j++];
  }
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state: IInitialState, action: PayloadAction<ISetDataPayload>) => {
      state.data = action.payload.data;
    },
    addData: (state: IInitialState, action: PayloadAction<IAddDataPayload>) => {
      state.data = [...state.data, action.payload.data];
    },
    sortData: (state: IInitialState) => {
      sort(state.data, 0, state.data.length - 1);
    },
  },
});

export const { setData, addData, sortData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
