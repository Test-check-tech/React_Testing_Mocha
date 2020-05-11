import React from 'react';
import { render} from 'enzyme';
import App from '../src/components/App';
import  { expect } from 'chai';

describe("App Test Content Builder", () => {  
  it("Check Parentdiv", () => {
    const content = render(<App/> );     
    expect(content.text()).to.contain("Content Builder");
  });
});