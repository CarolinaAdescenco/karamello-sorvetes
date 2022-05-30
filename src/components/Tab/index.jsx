import React from 'react';
import { colors } from '../../utils/styles/colors';
import { Container } from '../../utils/styles/styles';
import Action from '../Action';
import LoadSnake from '../Load';
import {
  Li, Ul, Content, Pannel, Loader, ContainerAction,
} from './styles';

import d from '../../utils/data/data.json';

const Tab = ({ data }) => {
  const [selected, setSelected] = React.useState(1);
  const [load, setLoad] = React.useState(false);

  const handleSelected = (id) => {
    setLoad(true);
    setSelected(id);

    setTimeout(() => {
      setLoad(false);
    }, 500);
  };

  return (
    <Container>
      <Pannel>
        <Ul>
          {
            data && data.map((item, i) => (
              <Li
                key={item.title}
                selected={selected === i}
                onClick={() => handleSelected(i)}
              >
                {item.title}
              </Li>
            ))
        }
        </Ul>

        {
            data && load
              ? (
                <Loader>
                  <LoadSnake color={colors.primary} />
                </Loader>
              )
              : (
                <Content>
                  {data && data[selected].description}

                  <ContainerAction>
                    <Action
                      type="a"
                      target="_blank"
                      href={d.contact[0].path}
                      variable="filled"
                      name="Entre em contato"
                    />

                    {/* <Action
                      type="a"
                      target="_blank"
                      href={d.contact[1].path}
                      variable="outline"
                      name="Comprar agora"
                    /> */}
                  </ContainerAction>
                </Content>
              )
        }
      </Pannel>
    </Container>
  );
};

export default Tab;
