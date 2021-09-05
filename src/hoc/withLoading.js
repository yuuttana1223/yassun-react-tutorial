import { useEffect, useState } from "react";
import styled from "styled-components";

const SLoadDiv = styled.div`
  padding: 36px;
`;

export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };

    const Loading = <SLoadDiv>ロード中...</SLoadDiv>;

    return data ? <WrappedComponent data={data} /> : Loading;
  };
};
