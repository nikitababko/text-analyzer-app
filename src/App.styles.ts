import { styled } from '@linaria/react';
import { MEDIA_QUERY_MAX_WIDTH_767 } from './constants';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 100vh;

  @media screen and (max-width: ${MEDIA_QUERY_MAX_WIDTH_767}px) {
    padding: 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 30px -4px rgba(0, 0, 0, 0.75);
  overflow: hidden;

  @media screen and (max-width: ${MEDIA_QUERY_MAX_WIDTH_767}px) {
    border-radius: 0;
    box-shadow: 0 0 18px -4px rgba(0, 0, 0, 0.75);
    max-width: none;
  }
`;

export const TextArea = styled.textarea`
  flex-grow: 1;
  padding: 20px;
  border: none;
  resize: none;
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  background-color: #000;
  color: #fff;
`;

export const TextInfoItemItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TextInfoItemValue = styled.p`
  font-size: 20px;
`;

export const TextInfoItemLabel = styled.p`
  font-size: 16px;
`;
