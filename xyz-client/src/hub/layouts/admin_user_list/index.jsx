import { useEffect, useState } from "react";
import cn from "classnames"
import { Link, useParams } from "react-router-dom";
import UserApi from "api/UserApi";

import useLoading from 'hooks/useLoading'

// styles
import style from "./style"

export default style(({className}) => {
  const { pagination } = useParams();
  const [list, setList] = useState([]);

  useEffect(async () => {
    doInit()
  }, []);

  // ======== wrap functions with loading + alert
  const hookGetList = useLoading(async(...params) => await UserApi.getList(...params), false)

  // ======== call api
  const doInit = () => {
    hookGetList(pagination).then((res) => setList(res?.data?.items))
  }

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
