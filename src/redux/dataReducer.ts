import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  data: number[];
  sorted: boolean;
  sortSteps: number[][];
  currentStep: number;
}

const initialState: IInitialState = {
  data: [],
  sorted: false,
  sortSteps: [],
  currentStep: 0,
};

interface ISetDataPayload {
  data: number[];
}

interface IAddDataPayload {
  data: number;
}

interface ISetCurrentStepPayload {
  currentStep: number;
}

const mergeSort = (
  data: number[],
  l: number,
  r: number,
  sortSteps: number[][],
) => {
  if (l >= r) return;
  let m = Math.floor((l + r) / 2);
  mergeSort(data, l, m, sortSteps);
  mergeSort(data, m + 1, r, sortSteps);
  merge(data, l, m, r, sortSteps);
};

const merge = (
  data: number[],
  l: number,
  m: number,
  r: number,
  sortSteps: number[][],
) => {
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
  sortSteps.push([...data]);
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
    mergeSortData: (state: IInitialState) => {
      if (state.sorted) return;
      state.sortSteps = [];
      mergeSort(state.data, 0, state.data.length - 1, state.sortSteps);
      state.sorted = true;
    },
    quickSortData: (state: IInitialState) => {
      if (state.sorted) return;
      state.sortSteps = [];
      mergeSort(state.data, 0, state.data.length - 1, state.sortSteps);
      state.sorted = true;
    },
    insertionSortData: (state: IInitialState) => {
      if (state.sorted) return;
      state.sortSteps = [];
      mergeSort(state.data, 0, state.data.length - 1, state.sortSteps);
      state.sorted = true;
    },
    setCurrentStep: (
      state: IInitialState,
      action: PayloadAction<ISetCurrentStepPayload>,
    ) => {
      state.currentStep = action.payload.currentStep;
    },
  },
});

export const {
  setData,
  addData,
  mergeSortData,
  quickSortData,
  insertionSortData,
  setCurrentStep,
} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
