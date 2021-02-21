import { useEffect, useState, memo } from "react";
import cn from "classnames";
import { useParams, useHistory } from "react-router-dom";
import UserApi from "api/UserApi";

import useLoading from "hooks/useLoading";

// styles
import style from "./style";

const Input = memo(
  (props) => <input {...props} />,
  (p, n) => p.value === n.value
);

export default style(({ className }) => {
  const { user_id } = useParams();
  const { goBack } = useHistory();
  const isCreate = user_id === "0";
  const [item, setItem] = useState({});

  useEffect(() => {
    if (!isCreate) doInit();
  }, []);

  const handleInputChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // ======== wrap functions with loading + alert
  const hookGet = useLoading(async (...params) => await UserApi.get(...params), false);
  const hookSave = useLoading(async (...params) => await UserApi.save(...params), true);
  const hookSaveTest = useLoading(async (...params) => await UserApi.saveErrorTest(...params), true);

  // ======== call api
  const doInit = () => {
    hookGet(user_id).then((res) => setItem(res?.data?.items?.[0]));
  };

  const doSave = () => {
    hookSave(item).then((res) => {
      isCreate ? goBack() : setItem((prev) => ({ ...prev, ...res?.data?.items?.[0] }));
    });
  };

  const doSaveTest = () => {
    hookSaveTest(item);
  };

  return (
    <div className={cn(className)}>
      user: {item?.user_id}
      <div>
        <label>name</label>
        <Input id="user_name" value={item.user_name || ""} onChange={handleInputChange} />
      </div>
      <div>
        <label>role</label>
        <Input id="user_role" value={item.user_role || ""} onChange={handleInputChange} />
      </div>
      <div>
        <label>score</label>
        <Input id="user_score" value={item.user_score || ""} onChange={handleInputChange} />
      </div>
      <button onClick={doSave}>save</button>
      <button onClick={doSaveTest}>save(error test)</button>
    </div>
  );
});
