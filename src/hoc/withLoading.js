import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const SLoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };

    const Loading = <SLoadDiv theme={theme}>ロード中...</SLoadDiv>;

    return data ? <WrappedComponent data={data} /> : Loading;
  };
};
