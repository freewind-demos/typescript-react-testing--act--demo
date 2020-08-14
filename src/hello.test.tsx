import React from "react";
import ReactDom from "react-dom";
import {act} from "react-dom/test-utils";
import Hello from "./hello";

describe('hello', () => {

  it('shows in-correct value without act', () => {
    const el = document.createElement("div");
    ReactDom.render(<Hello/>, el)
    expect(el.innerHTML).toBe('<div><div>Value: 1</div></div>');
  })

  it('shows correct value with act', () => {
    const el = document.createElement("div");
    act(() => {
      ReactDom.render(<Hello/>, el)
    })
    expect(el.innerHTML).toBe('<div><div>Value: 1</div></div>');
  })

})
