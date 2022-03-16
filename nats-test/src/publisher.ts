import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';

import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const id = randomBytes(4).toString('hex')

const stan = nats.connect('ticketing', id, {
  url: 'http://localhost:4222'
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);

  try {
      await publisher.publish({
      id: '123',
      title: 'concert',
      price: 20
    })
  } catch (error) {
    console.log(error)
  }


  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20
  // });

  // stan.publish('ticket:created', data, () => {
  //   console.log('Event published')
  // });
});