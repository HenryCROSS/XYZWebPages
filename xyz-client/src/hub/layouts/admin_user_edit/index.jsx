import { useEffect, useState, memo } from "react";
import cn from "classnames";
import { useParams, useHistory } from "react-router-dom";
import UserApi from "api/UserApi";

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
    if (!isCreate) {
      UserApi.get(user_id).then((res) => setItem(res?.items?.[0]));
    }
  }, []);

  const handleInputChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // ========
  const doSave = async () => {
    UserApi.save(item).then((res) => {
      isCreate ? goBack() : setItem((prev) => ({ ...prev, ...res?.items?.[0] }));
    });
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
    </div>
  );
});
