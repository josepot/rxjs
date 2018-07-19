import { Observable } from '../Observable';
import { Operation, FOType, Sink } from 'rxjs/internal/types';
import { Subscription } from 'rxjs/internal/Subscription';
import { lift } from 'rxjs/internal/util/lift';

export function finalize<T>(callback: () => void): Operation<T, T> {
  return lift((source: Observable<T>, dest: Sink<T>, subs: Subscription) => {
    subs.add(callback);
    source(FOType.SUBSCRIBE, dest, subs);
  });
}