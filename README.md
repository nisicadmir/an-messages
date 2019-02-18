# Messages module for Angular6+ applications

## Installation

Download from npm

```
npm install --save an-messages
```

## Angular installation

In app.module.ts

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnMessagesModule } from 'an-messages';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AnMessagesModule.forRoot(), // <-- import here, forRoot() is necessary
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In app.component.html

```html
<an-messages></an-messages>
```

In your component

```javascript
import { AnMessagesService } from 'an-messages';
constructor(private messagesService: AnMessagesService){}
```

Then anywhere in your app, third parameter is options.

```javascript
this.messagesService.message_add('succ', 'Message that we want to show', 3000);
this.messagesService.message_add('err', 'Message that we want to show', 3000);
this.messagesService.message_add('info', 'Message that we want to show');
```

### Edit css

Main wrapper class
z-index for .an-messages is 9000

```less
.an-messages {
  // <-- wrapper
  &--item {
    // <-- messages item
  }
  &--succ {
    // <-- styles for succ
  }
  &--err {
    // <-- styles for err
  }
  &--info {
    // <-- styles for info
  }
}
```
