import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Template from '../src/components/ItemTemplate/ItemTemplate';
import mck from '../src/components/ItemTemplate/JSON/MCKTemplate.json'
// import CKEditorBase from '../src/components/ui/CKEditorBase'
import tf from '../src/components/ItemTemplate/JSON/TFTemplate.json';
import mcs from '../src/components/ItemTemplate/JSON/MCSTemplate.json'


describe('check - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const wrapper = render(<Template />);
    // const ckEditor = render(<CKEditorBase/> )
    console.log(wrapper.text())
    expect(wrapper.text()).to.contain('Item Creation', 'Task Type :', 'Task Sub-Type :');
    expect(wrapper.text()).to.have.string("Item Creation");
    let types = wrapper.text()
    if (wrapper.find("Multiple Choice - Keyed")) {
      console.log("Multiple Choice - Keyed")
      mck.map(obj => {
        const stem = obj.stem.label
        expect(stem).to.exist;
        obj.responses.map(responses => {
          const response = responses.label
          expect(response).to.exist
        })
      })
    }
    if (wrapper.find("True")) {
      tf.map(obj => {
        console.log("True/False")
        const stem = obj.stem.label
        expect(stem).to.exist;
        obj.responses.map(responses => {
          const response = responses.label
          expect(response).exist
        })
      })
    }
    if (wrapper.find("Multiple Choice - Scaled")) {
      mcs.map(obj => {
        console.log("Multiple Choice - Scaled")
        const stem = obj.stem.label
        expect(stem).to.exist;
        obj.responses.map(responses => {
          const response = responses.label
          expect(response).exist
        })
      })
    }
  });
});



