import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: "102",
});

export const jobsAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const total = selector({
  key: "hg",
  get: ({ get }) => {
    const networkC = get(networkAtom);
    const AtomC = get(jobsAtom);
    return networkC + AtomC;
  },
});
