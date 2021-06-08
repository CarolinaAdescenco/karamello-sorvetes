import React from 'react';
import { colors } from '../../utils/styles/colors';
import { Container } from '../../utils/styles/styles';
import Action from '../Action';
import LoadSnake from '../Load';
import {
  Li, Ul, Content, Pannel, Loader, ContainerAction,
} from './styles';

import { contact } from '../../utils/data/data.json';

const data = [
  {
    title: 'Teste 1',
    description: (
      <>
        <h3>Description</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam nisi ab repellendus adipisci et saepe. Quaerat
          repudiandae nobis fugiat laboriosam! Beatae molestias blanditiis
          nam quidem dolores quam, saepe ex similique.
        </p>
      </>
    ),
  },
  {
    title: 'Teste 2',
    description: 'Description 2',
  },
  {
    title: 'Teste 3',
    description: 'Description 3',
  },
];

const Tab = () => {
  const whatsapp = contact[0];
  const ifood = contact[1];

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
            data.map((item, i) => (
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
            load
              ? (
                <Loader>
                  <LoadSnake color={colors.primary} />
                </Loader>
              )
              : (
                <Content>
                  {data[selected].description}

                  <ContainerAction>
                    <Action
                      type="a"
                      target="_blank"
                      href={whatsapp.path}
                      variable="filled"
                      name="Entre em contato"
                    />

                    <Action
                      type="a"
                      target="_blank"
                      href={ifood.path}
                      variable="outline"
                      name="Comprar agora"
                    />
                  </ContainerAction>
                </Content>
              )
        }
      </Pannel>
    </Container>
  );
};

export default Tab;
