import './global.styles';
import React, { useState } from 'react';
import { getCharsCount, getCountWords, getSymbolsCount } from '@nikitababko/text-analyzer';
import {
  AppContainer,
  Form,
  TextArea,
  TextInfo,
  TextInfoItemItem,
  TextInfoItemLabel,
  TextInfoItemValue,
} from './App.styles';

const formItems = [
  {
    label: 'characters',
    method: getCharsCount,
  },
  {
    label: 'words',
    method: getCountWords,
  },
  {
    label: 'symbols',
    method: getSymbolsCount,
  },
];

const App = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <AppContainer>
      <Form>
        <TextArea value={value} onChange={handleOnChange} />

        <TextInfo>
          {formItems.map((formItem) => (
            <TextInfoItemItem key={formItem.label}>
              <TextInfoItemValue>{formItem.method(value)}</TextInfoItemValue>

              <TextInfoItemLabel>{formItem.label}</TextInfoItemLabel>
            </TextInfoItemItem>
          ))}
        </TextInfo>
      </Form>
    </AppContainer>
  );
};
export default App;
