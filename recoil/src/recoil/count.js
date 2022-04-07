import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const countInputState = selector({
  key: "countTitleState",
  get: ({ get }) => {
    return `현재 카운드는 ${get(countState)} 이고 입력값은 ${get(
      inputState
    )} 입니다.`;
  },
});
