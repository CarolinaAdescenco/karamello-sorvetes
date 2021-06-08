import React from 'react';
import { ButtonComponent } from './styles';

const Action = (props) => (
  <>
    {
        props.type === 'button'
          ? (
            <button type="button" onClick={() => props.onClick}>
              <ButtonComponent var={props.variable}>{props.name}</ButtonComponent>
            </button>
          )

          : (
            <a href={props.href} target={props.target}>
              <ButtonComponent var={props.variable}>{props.name}</ButtonComponent>
            </a>
          )

    }
  </>
);

export default Action;
