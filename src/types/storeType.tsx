export type IArr = {
  id: string;
  name: string;
  desc: string;
  status: string;
  priority: string;
};

interface storeType {
  todos: IArr[];
}

export default storeType;
