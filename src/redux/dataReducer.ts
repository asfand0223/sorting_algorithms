import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  unsortedData: number[][];
  data: number[];
  sorted: boolean;
  sortSteps: number[][];
  currentStep: number;
}

const initialState: IInitialState = {
  unsortedData: [],
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

const quickSort = (
  data: number[],
  s: number,
  e: number,
  sortSteps: number[][],
) => {
  if (e - s + 1 <= 1) return;
  let pivot = data[e];
  let k = s;

  for (let i = s; i < e; i++) {
    if (data[i] < pivot) {
      let temp = data[k];
      data[k++] = data[i];
      data[i] = temp;
    }
  }

  data[e] = data[k];
  data[k] = pivot;

  sortSteps.push([...data]);
  quickSort(data, s, k - 1, sortSteps);
  quickSort(data, k + 1, e, sortSteps);
};

const insertionSort = (data: number[], sortSteps: number[][]) => {
  for (let i = 0; i < data.length; i++) {
    let j = i - 1;
    let elemToSort = data[i];
    while (j >= 0 && data[j] > elemToSort) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = elemToSort;
    sortSteps.push([...data]);
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
    mergeSortData: (state: IInitialState) => {
      if (state.sorted) return;
      state.sortSteps = [];
      mergeSort(state.data, 0, state.data.length - 1, state.sortSteps);
      state.sorted = true;
    },
    quickSortData: (state: IInitialState) => {
      if (state.sorted) return;
      state.sortSteps = [];
      quickSort(state.data, 0, state.data.length - 1, state.sortSteps);
      state.sorted = true;
    },
    insertionSortData: (state: IInitialState) => {
      if (state.sorted) return;
      state.sortSteps = [];
      insertionSort(state.data, state.sortSteps);
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
