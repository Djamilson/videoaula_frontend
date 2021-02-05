import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function dateHourFormatted(date: string): string {
  return format(new Date(date), 'dd/MMM HH:mm', {
    locale: ptBR,
  });
}
