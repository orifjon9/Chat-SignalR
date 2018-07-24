import { SignalR, ISignalRConnection } from 'ng2-signalr';
import { Resolve } from '@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class ConnectionResolver implements Resolve<ISignalRConnection> {
    constructor(private signalR: SignalR) { }
    resolve() {
        console.log('ConnectionResolver. Resolving...');
        return this.signalR.connect();
    }
}
