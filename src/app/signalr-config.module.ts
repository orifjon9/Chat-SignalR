import { SignalR, SignalRConfiguration, SignalRModule } from 'ng2-signalr';
import { NgModule } from '../../node_modules/@angular/core';

export function createConfig(): SignalRConfiguration {
    const config = new SignalRConfiguration();
    config.hubName = 'Ng2SignalRHub';
    config.qs = { user: 'donald' };
    config.url = 'http://ng2-signalr-backend.azurewebsites.net/';
    config.logging = true;
    return config;
}

@NgModule({
    imports: [SignalRModule.forRoot(createConfig)],
    exports: [SignalRModule]
})
export class SignalRConfigModule { }












