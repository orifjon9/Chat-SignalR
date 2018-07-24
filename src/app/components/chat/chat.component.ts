import { Component, OnInit } from '@angular/core';
import { SignalR, SignalRConnection, BroadcastEventListener } from '../../../../node_modules/ng2-signalr';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ChatMessage } from '../../models/chat-message.model';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private connection: SignalRConnection;
  private messageSubscription: Subscription;

  public chatMessages: ChatMessage[] = [{ userName: 'Orifjon', message: 'Welcome to Chat guest!' }];

  constructor(private route: ActivatedRoute) {
    console.log('Chat page!');
    this.connection = this.route.snapshot.data['connection'];
  }

  ngOnInit() {
    const onMessageSent$ = new BroadcastEventListener<ChatMessage>('OnMessageSent');

    this.connection.listen(onMessageSent$);
    this.messageSubscription = onMessageSent$.subscribe((chatMessage: ChatMessage) => {
      this.chatMessages.push(chatMessage);
    });
  }

  onSendMessage(message: String) {
    const newChatMessage = { userName: 'Orifjon', message: message };
    this.connection.invoke('Chat', newChatMessage)
      .catch(err => console.log('Failed to invoke \'Chat\'. Error occured. Error:' + err));
  }
}
