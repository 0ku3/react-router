import { useParams, useLocation } from "react-router-dom";

// TODO URL Parameter の遷移　うまくできていない

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
