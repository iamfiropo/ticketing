import { Publisher, Subjects, TicketUpdatedEvent } from '@ropo/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}