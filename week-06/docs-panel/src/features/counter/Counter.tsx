import { useAppDispatch, useAppSelector } from "../../store/store";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  // Böyle de kullanılabilir ama count güncellenirse Counter bunu dinleyemez
  // Dinleyebilmesi için useSelector kullanılır
  // store.getState().counter.value;
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Arttır
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        Azalt
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
