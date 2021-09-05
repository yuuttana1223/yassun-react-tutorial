import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SHintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`;

const SHintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SPopupContainer = styled.div`
  position: absolute;
  left: 88%;
  bottom: 12px;
  display: flex;
  justify-content: center;
  padding: 8px;
  width: 140px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Hint = () => {
  const [showPopup, setshowPopup] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [showPopup]);

  return (
    <SHintContainer>
      <SHintInner onClick={() => setshowPopup(true)}>?</SHintInner>
      {showPopup && (
        /* tabIndex=0は 要素が入力フォーカスを持てること */
        <SPopupContainer
          ref={ref}
          onBlur={() => setshowPopup(false)}
          tabIndex={0}
        >
          言語の名前です
        </SPopupContainer>
      )}
    </SHintContainer>
  );
};
