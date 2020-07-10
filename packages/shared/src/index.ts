import { injectable } from '@servicetitan/react-ioc';
import { observable, action } from 'mobx';

@injectable()
export class Store {
    @observable
    count = 0;

    @action
    increment = () => {
        this.count += 1;
    };
}
