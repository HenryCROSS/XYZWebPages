import { useEffect, useState } from "react";
import cn from "classnames"
import { Link, useParams } from "react-router-dom";
import UserApi from "api/UserApi";

// styles
import style from "./style"

export default style(({className}) => {
  const { pagination } = useParams();
  const [list, setList] = useState([]);

  useEffect(async () => {
    await UserApi.getList(pagination).then((res) => setList(res.items));
  }, []);

  return (
    <div className={cn(className)}>
      users:
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>role</th>
            <th>score</th>
            <th><Link to={pagination + "/" + 0}>add</Link></th>
          </tr>
        </thead>
        <tbody>
          {list?.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.user_name}</td>
                <td>{a.user_role}</td>
                <td>{a.user_score}</td>
                <td>
                  <Link to={pagination + "/" + a.user_id}>edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>todo: pagination</div>
    </div>
  );
});
