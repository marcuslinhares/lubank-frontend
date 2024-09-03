import { Subject } from 'rxjs';

const subject = new Subject();
export const UserBalaceUpdate = {
    listen: () => subject.asObservable(),
    update: () => {
        subject.next({})
    },
}
