import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '../../node_modules/@angular/core';
import { ConnectionResolver } from './resolvers/connection.resolver';

const route: Routes = [
    { path: '', redirectTo: '/chat', pathMatch: 'full' },
    { path: 'chat', component: ChatComponent, resolve: { connection: ConnectionResolver } }
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
