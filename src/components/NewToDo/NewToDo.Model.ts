export interface IArr {
  id: string;
  name: string;
  desc: string;
  status: string;
  priority: string;
}

export interface IObj {
  id: string;
  name: string;
  desc: string;
  status: string;
  priority: string;
}

export const initialState = {
  id: "",
  name: "",
  desc: "",
  status: "Open",
  priority: "",
};
