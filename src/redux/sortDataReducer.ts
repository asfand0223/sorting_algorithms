import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum SELECTED_SORT {
  MERGE,
  QUICK,
  INSERTION,
}

interface IInitialState {
  unsortedData: number[];
  sortingData: number[];
  isSorted: boolean;
  sortedData: number[][];
  currentStep: number;
  selectedSort: SELECTED_SORT;
  isSortable: boolean;
  isResettable: boolean;
}

const initialState: IInitialState = {
  unsortedData: [],
  sortingData: [],
  isSorted: false,
  sortedData: [],
  currentStep: 0,
  selectedSort: SELECTED_SORT.MERGE,
  isSortable: true,
  isResettable: false,
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

interface ISetSelectedSort {
  selectedSort: SELECTED_SORT;
}

interface ISetIsResettable {
  isResettable: boolean;
}

interface ISetIsSortable {
  isSortable: boolean;
}

const mergeSort = (
  dataToSort: number[],
  l: number,
  r: number,
  sortSteps: number[][],
) => {
  if (l >= r) return;
  let m = Math.floor((l + r) / 2);
  mergeSort(dataToSort, l, m, sortSteps);
  mergeSort(dataToSort, m + 1, r, sortSteps);
  merge(dataToSort, l, m, r, sortSteps);
};

const merge = (
  dataToSort: number[],
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
    tl[i] = dataToSort[l + i];
  }
  for (let i = 0; i < rl; i++) {
    tr[i] = dataToSort[m + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = l;
  while (i < ll && j < rl) {
    if (tl[i] < tr[j]) {
      dataToSort[k++] = tl[i++];
    } else {
      dataToSort[k++] = tr[j++];
    }
  }

  while (i < ll) {
    dataToSort[k++] = tl[i++];
  }
  while (j < rl) {
    dataToSort[k++] = tr[j++];
  }
  sortSteps.push([...dataToSort]);
};

const quickSort = (
  dataToSort: number[],
  s: number,
  e: number,
  sortSteps: number[][],
) => {
  if (e - s + 1 <= 1) return;
  let pivot = dataToSort[e];
  let k = s;

  for (let i = s; i < e; i++) {
    if (dataToSort[i] < pivot) {
      let temp = dataToSort[k];
      dataToSort[k++] = dataToSort[i];
      dataToSort[i] = temp;
    }
  }

  dataToSort[e] = dataToSort[k];
  dataToSort[k] = pivot;

  sortSteps.push([...dataToSort]);
  quickSort(dataToSort, s, k - 1, sortSteps);
  quickSort(dataToSort, k + 1, e, sortSteps);
};

const insertionSort = (dataToSort: number[], sortSteps: number[][]) => {
  for (let i = 0; i < dataToSort.length; i++) {
    let j = i - 1;
    let elemToSort = dataToSort[i];
    while (j >= 0 && dataToSort[j] > elemToSort) {
      dataToSort[j + 1] = dataToSort[j];
      j--;
    }
    dataToSort[j + 1] = elemToSort;
    sortSteps.push([...dataToSort]);
  }
};

export const sortDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSortingData: (
      state: IInitialState,
      action: PayloadAction<ISetDataPayload>,
    ) => {
      state.sortingData = action.payload.data;
      state.unsortedData = action.payload.data;
    },
    addSortingData: (
      state: IInitialState,
      action: PayloadAction<IAddDataPayload>,
    ) => {
      state.sortingData = [...state.sortingData, action.payload.data];
      state.unsortedData = [...state.unsortedData, action.payload.data];
    },
    mergeSortData: (state: IInitialState) => {
      if (state.isSorted) return;
      state.sortedData = [];
      mergeSort(
        state.sortingData,
        0,
        state.sortingData.length - 1,
        state.sortedData,
      );
      state.isSorted = true;
    },
    quickSortData: (state: IInitialState) => {
      if (state.isSorted) return;
      state.sortedData = [];
      quickSort(
        state.sortingData,
        0,
        state.sortingData.length - 1,
        state.sortedData,
      );
      state.isSorted = true;
    },
    insertionSortData: (state: IInitialState) => {
      if (state.isSorted) return;
      state.sortedData = [];
      insertionSort(state.sortingData, state.sortedData);
      state.isSorted = true;
    },
    setCurrentStep: (
      state: IInitialState,
      action: PayloadAction<ISetCurrentStepPayload>,
    ) => {
      state.currentStep = action.payload.currentStep;
    },
    setSelectedSort: (
      state: IInitialState,
      action: PayloadAction<ISetSelectedSort>,
    ) => {
      state.selectedSort = action.payload.selectedSort;
    },
    resetData: (state: IInitialState) => {
      state.sortingData = [...state.unsortedData];
      state.isSortable = true;
      state.isResettable = false;
      state.isSorted = false;
      state.sortedData = [];
      state.currentStep = 0;
    },
    setIsSortable: (
      state: IInitialState,
      action: PayloadAction<ISetIsSortable>,
    ) => {
      state.isSortable = action.payload.isSortable;
    },
    setisResettable: (
      state: IInitialState,
      action: PayloadAction<ISetIsResettable>,
    ) => {
      state.isResettable = action.payload.isResettable;
    },
  },
});

export const {
  setSortingData,
  addSortingData,
  mergeSortData,
  quickSortData,
  insertionSortData,
  setCurrentStep,
  setSelectedSort,
  resetData,
  setIsSortable,
  setisResettable,
} = sortDataSlice.actions;
export const sortDataReducer = sortDataSlice.reducer;
